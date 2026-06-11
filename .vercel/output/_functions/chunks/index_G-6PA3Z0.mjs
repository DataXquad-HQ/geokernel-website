import { c as createComponent } from './astro-component_D-D3LUQr.mjs';
import 'piccolore';
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from './entrypoint_SRkhnYlP.mjs';
import { $ as $$Layout, r as renderScript } from './Layout_Ef0WcEui.mjs';
import { a as getPosts } from './notion_X8J1GhIM.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const posts = await getPosts();
  const TAG_PALETTE = [
    { bg: "#F0FDFB", text: "#0D7370", border: "#0D9488" },
    { bg: "#EEF2FF", text: "#4338CA", border: "#6366F1" },
    { bg: "#FFF7ED", text: "#C2410C", border: "#F97316" },
    { bg: "#F0FDF4", text: "#15803D", border: "#22C55E" },
    { bg: "#FDF4FF", text: "#7E22CE", border: "#A855F7" },
    { bg: "#EFF6FF", text: "#1D4ED8", border: "#3B82F6" }
  ];
  const TAG_INDEX = {
    "Case Study": 0,
    "Tutorial": 1,
    "Industry Insight": 2,
    "Company News": 3,
    "Product Update": 4
  };
  function tagStyle(tag) {
    const idx = TAG_INDEX[tag] ?? tag.charCodeAt(0) % TAG_PALETTE.length;
    return TAG_PALETTE[idx];
  }
  const allTags = [...new Set(posts.flatMap((p) => p.tags))].sort();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "GeoKernel Blog", "wide": true, "data-astro-cid-5tznm7mj": true }, { "default": async ($$result2) => renderTemplate`  ${maybeRenderHead()}<div class="mb-8" data-astro-cid-5tznm7mj> <h1 class="text-4xl font-bold text-[#1F2937] tracking-tight" data-astro-cid-5tznm7mj>Blog</h1> <p class="text-gray-500 mt-2 text-lg" data-astro-cid-5tznm7mj>GeoKernel 的觀點、更新與故事。</p> </div>  <div class="mb-6" data-astro-cid-5tznm7mj> <div class="relative max-w-sm" data-astro-cid-5tznm7mj> <svg xmlns="http://www.w3.org/2000/svg" class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-5tznm7mj><circle cx="11" cy="11" r="8" data-astro-cid-5tznm7mj></circle><line x1="21" y1="21" x2="16.65" y2="16.65" data-astro-cid-5tznm7mj></line></svg> <input id="search-input" type="text" placeholder="搜尋文章..." class="w-full pl-9 pr-4 py-2 rounded-full border border-gray-200 text-sm focus:outline-none focus:border-[#0D9488] transition-colors bg-white" data-astro-cid-5tznm7mj> </div> </div>  ${allTags.length > 0 && renderTemplate`<div id="filter-bar" class="flex flex-wrap gap-2 mb-8" data-astro-cid-5tznm7mj> <button data-filter="all" class="filter-pill active px-4 py-1.5 rounded-full text-sm font-medium border transition-all duration-200" data-astro-cid-5tznm7mj>
全部
</button> ${allTags.map((tag) => {
    const s = tagStyle(tag);
    return renderTemplate`<button${addAttribute(tag, "data-filter")}${addAttribute(s.bg, "data-bg")}${addAttribute(s.text, "data-text")}${addAttribute(s.border, "data-border")} class="filter-pill px-4 py-1.5 rounded-full text-sm font-medium border border-gray-200 text-gray-500 bg-white hover:border-gray-400 transition-all duration-200" data-astro-cid-5tznm7mj> ${tag} </button>`;
  })} </div>`} ${posts.length === 0 && renderTemplate`<div class="text-center py-24 text-gray-400" data-astro-cid-5tznm7mj> <svg xmlns="http://www.w3.org/2000/svg" class="w-12 h-12 mx-auto mb-4 opacity-30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-astro-cid-5tznm7mj><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" data-astro-cid-5tznm7mj></path><polyline points="14 2 14 8 20 8" data-astro-cid-5tznm7mj></polyline></svg> <p class="text-lg" data-astro-cid-5tznm7mj>目前還沒有文章。</p> </div>`} <div id="posts-grid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-astro-cid-5tznm7mj> ${posts.map((post) => renderTemplate`<article${addAttribute(post.tags.join("||"), "data-tags")}${addAttribute(post.title.toLowerCase(), "data-title")}${addAttribute((post.excerpt ?? "").toLowerCase(), "data-description")} class="post-card group flex flex-col rounded-2xl border border-gray-100 bg-white overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300" data-astro-cid-5tznm7mj> <a${addAttribute(`/blog/${post.slug}`, "href")} class="flex flex-col h-full" data-astro-cid-5tznm7mj> <!-- Cover image --> <div class="aspect-[16/9] bg-gray-50 overflow-hidden flex-shrink-0" data-astro-cid-5tznm7mj> ${post.coverImage ? renderTemplate`<img${addAttribute(post.coverImage, "src")}${addAttribute(post.title, "alt")} class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-astro-cid-5tznm7mj>` : renderTemplate`<div class="w-full h-full flex items-center justify-center" data-astro-cid-5tznm7mj> <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10 text-gray-200" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-astro-cid-5tznm7mj><rect x="3" y="3" width="18" height="18" rx="2" data-astro-cid-5tznm7mj></rect><circle cx="8.5" cy="8.5" r="1.5" data-astro-cid-5tznm7mj></circle><polyline points="21 15 16 10 5 21" data-astro-cid-5tznm7mj></polyline></svg> </div>`} </div> <!-- Card body --> <div class="flex flex-col flex-grow p-5" data-astro-cid-5tznm7mj> ${post.tags.length > 0 && renderTemplate`<div class="flex flex-wrap gap-1.5 mb-3" data-astro-cid-5tznm7mj> ${post.tags.map((tag) => {
    const s = tagStyle(tag);
    return renderTemplate`<span${addAttribute(`background:${s.bg};color:${s.text};border-color:${s.border}`, "style")} class="text-xs font-semibold px-2.5 py-0.5 rounded-full border" data-astro-cid-5tznm7mj> ${tag} </span>`;
  })} </div>`} <h2 class="text-base font-bold text-[#1F2937] leading-snug mb-2 group-hover:text-[#0D9488] transition-colors line-clamp-2" data-astro-cid-5tznm7mj> ${post.title} </h2> ${post.excerpt && renderTemplate`<p class="text-sm text-gray-500 leading-relaxed line-clamp-2 mb-3 flex-grow" data-astro-cid-5tznm7mj> ${post.excerpt} </p>`} <time class="text-xs text-gray-400 mt-auto pt-2 block" data-astro-cid-5tznm7mj> ${post.publishedAt ? new Date(post.publishedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric"
  }) : ""} </time> </div> </a> </article>`)} </div>  <p id="no-results" class="hidden text-center text-gray-400 py-16 text-lg" data-astro-cid-5tznm7mj>
找不到符合的文章。
</p>  <div id="pagination" class="flex items-center justify-center gap-2 mt-10" data-astro-cid-5tznm7mj></div> ` })}  ${renderScript($$result, "/tmp/geokernel-website/src/pages/blog/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "/tmp/geokernel-website/src/pages/blog/index.astro", void 0);

const $$file = "/tmp/geokernel-website/src/pages/blog/index.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
