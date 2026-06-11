import { c as createComponent } from './astro-component_DyxtmvcB.mjs';
import 'piccolore';
import { n as createRenderInstruction, r as renderTemplate, l as renderComponent, o as renderSlot, h as addAttribute, p as renderHead } from './entrypoint_Dn36muiO.mjs';
/* empty css                 */

async function renderScript(result, id) {
  const inlined = result.inlinedScripts.get(id);
  let content = "";
  if (inlined != null) {
    if (inlined) {
      content = `<script type="module">${inlined}</script>`;
    }
  } else {
    const resolved = await result.resolve(id);
    content = `<script type="module" src="${result.userAssetsBase ? (result.base === "/" ? "" : result.base) + result.userAssetsBase : ""}${resolved}"></script>`;
  }
  return createRenderInstruction({ type: "script", id, content });
}

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Layout;
  const SITE = "https://geokernel.com";
  const { title, description = "Insights, updates, and stories from GeoKernel.", ogImage, canonicalUrl, wide = false } = Astro2.props;
  const resolvedOgImage = ogImage ?? `${SITE}/og-image.png`;
  const resolvedCanonical = canonicalUrl ?? Astro2.url.href;
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>', '</title><meta name="description"', '><link rel="canonical"', '><!-- Open Graph --><meta property="og:type" content="article"><meta property="og:url"', '><meta property="og:title"', '><meta property="og:description"', '><meta property="og:image"', '><meta property="og:site_name" content="GeoKernel Blog"><!-- Twitter Card --><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title"', '><meta name="twitter:description"', '><meta name="twitter:image"', '><link rel="icon" type="image/png" href="/favicon.png"><link rel="apple-touch-icon" href="/favicon.png"><!-- Google Analytics GA4 --><script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"><\/script>', "", '</head> <body class="bg-white text-gray-900 min-h-screen flex flex-col"> ', " <main", "> ", " </main> ", " </body></html>"])), title, addAttribute(description, "content"), addAttribute(resolvedCanonical, "href"), addAttribute(resolvedCanonical, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(resolvedOgImage, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(resolvedOgImage, "content"), renderScript($$result, "/tmp/geokernel-website/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts"), renderHead(), renderComponent($$result, "HeaderIsland", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "/tmp/geokernel-website/src/components/HeaderIsland.jsx", "client:component-export": "default" }), addAttribute(`flex-grow pt-24 pb-10 ${wide ? "max-w-5xl" : "max-w-2xl"} mx-auto px-6`, "class"), renderSlot($$result, $$slots["default"]), renderComponent($$result, "FooterIsland", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "/tmp/geokernel-website/src/components/FooterIsland.jsx", "client:component-export": "default" }));
}, "/tmp/geokernel-website/src/layouts/Layout.astro", void 0);

export { $$Layout as $, renderScript as r };
