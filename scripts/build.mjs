import { cpSync, mkdirSync, rmSync } from "node:fs";
import { resolve } from "node:path";
import { build } from "esbuild";

const root = resolve(import.meta.dirname, "..");
const output = resolve(root, "public");

rmSync(output, { recursive: true, force: true });
mkdirSync(output, { recursive: true });

for (const file of ["index.html", "support.js", "image-slot.js", "About.docx", "Bird Guide.dc.html"]) {
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

console.log("Built Birdlearn static site in public/");
