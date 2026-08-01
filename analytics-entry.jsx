import React from "react";
import { createRoot } from "react-dom/client";
import { Analytics } from "@vercel/analytics/react";

function mountAnalytics() {
  const container = document.createElement("div");
  container.id = "vercel-analytics";
  container.hidden = true;
  document.body.appendChild(container);
  createRoot(container).render(<Analytics />);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", mountAnalytics, { once: true });
} else {
  mountAnalytics();
}
