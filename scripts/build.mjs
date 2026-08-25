import { cpSync, mkdirSync, readFileSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { build } from "esbuild";

const root = resolve(import.meta.dirname, "..");
const output = resolve(root, "public");

rmSync(output, { recursive: true, force: true });
mkdirSync(output, { recursive: true });

for (const file of ["index.html", "support.js", "image-slot.js", "About.docx", "Bird Guide.dc.html"]) {
  cpSync(resolve(root, file), resolve(output, file));
}

// Emit physical HTML files for clean top-level routes. This keeps direct links
// such as /survey working even when the host does not apply SPA rewrites.
for (const route of ["badges", "survey", "about"]) {
  cpSync(resolve(root, "index.html"), resolve(output, `${route}.html`));
}

for (const file of readdirSync(root).filter((name) => /^google[a-z0-9]+\.html$/i.test(name))) {
  cpSync(resolve(root, file), resolve(output, file));
}

for (const directory of ["_ds", "assets"]) {
  cpSync(resolve(root, directory), resolve(output, directory), { recursive: true });
}

await build({
  entryPoints: [resolve(root, "analytics-entry.jsx")],
  bundle: true,
  minify: true,
  format: "iife",
  outfile: resolve(output, "analytics.js"),
});

const html = readFileSync(resolve(root, "index.html"), "utf8");
const birdSlugs = [...html.matchAll(/"slug":\s*"([^"]+)"/g)].map((match) => match[1]);
const paths = ["/", "/birds", "/badges", "/survey", "/about", ...birdSlugs.map((slug) => `/birds/${slug}`)];
const configuredSiteUrl =
  process.env.SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : "") ||
  "https://birdlearn.vercel.app";
const siteUrl = configuredSiteUrl.replace(/\/+$/, "");
const escapeXml = (value) =>
  value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;");
const sitemap = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...paths.map((path) => `  <url><loc>${escapeXml(`${siteUrl}${path}`)}</loc></url>`),
  "</urlset>",
  "",
].join("\n");
writeFileSync(resolve(output, "sitemap.xml"), sitemap);
writeFileSync(resolve(output, "robots.txt"), `User-agent: *\nAllow: /\nSitemap: ${siteUrl}/sitemap.xml\n`);

console.log("Built Birdlearn static site in public/");
