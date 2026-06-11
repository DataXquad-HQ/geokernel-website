import { c as createComponent } from './astro-component_DyxtmvcB.mjs';
import 'piccolore';
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute, u as unescapeHTML } from './entrypoint_Dn36muiO.mjs';
import { $ as $$Layout } from './Layout_BIEy8Lv5.mjs';
import { g as getPostBySlug } from './notion_CPbCULTO.mjs';
import { marked } from 'marked';

const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  const lang = Astro2.url.searchParams.get("lang") ?? "zh";
  const post = await getPostBySlug(lang, slug);
  if (!post) {
    return Astro2.redirect("/blog");
  }
  const contentHtml = marked(post.markdown ?? "");
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": post.title }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<article class="max-w-3xl mx-auto"> <!-- Back link --> <a href="/blog" class="inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-[#0D9488] transition-colors mb-8"> <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"></polyline></svg>
返回 Blog
</a> <!-- Cover image --> ${post.cover && renderTemplate`<div class="aspect-[16/9] rounded-2xl overflow-hidden mb-8 bg-gray-100"> <img${addAttribute(post.cover, "src")}${addAttribute(post.title, "alt")} class="w-full h-full object-cover"> </div>`} <!-- Tags --> ${post.tags.length > 0 && renderTemplate`<div class="flex flex-wrap gap-2 mb-4"> ${post.tags.map((tag) => renderTemplate`<span class="text-xs font-semibold px-2.5 py-0.5 rounded-full border bg-[#F0FDFB] text-[#0D7370] border-[#0D9488]"> ${tag} </span>`)} </div>`} <!-- Title --> <h1 class="text-3xl md:text-4xl font-bold text-[#1F2937] leading-tight mb-4"> ${post.title} </h1> <!-- Meta --> <div class="flex items-center gap-4 text-sm text-gray-400 mb-8 pb-8 border-b border-gray-100"> ${post.date && renderTemplate`<time> ${new Date(post.date).toLocaleDateString("zh-TW", {
    year: "numeric",
    month: "long",
    day: "numeric"
  })} </time>`} </div> <!-- Content --> <div class="prose prose-lg max-w-none prose-headings:text-[#1F2937] prose-a:text-[#0D9488] prose-a:no-underline hover:prose-a:underline">${unescapeHTML(contentHtml)}</div> </article> ` })}`;
}, "/tmp/geokernel-website/src/pages/blog/[slug].astro", void 0);

const $$file = "/tmp/geokernel-website/src/pages/blog/[slug].astro";
const $$url = "/blog/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
