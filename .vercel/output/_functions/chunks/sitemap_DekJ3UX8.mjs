import { a as getPosts } from './notion_CPbCULTO.mjs';

const SITE = "https://geokernel.com";
const GET = async () => {
  let posts = [];
  try {
    posts = await getPosts();
  } catch {
  }
  const staticPages = [
    { url: "/", changefreq: "weekly", priority: "1.0" },
    { url: "/blog", changefreq: "daily", priority: "0.9" }
  ];
  const postPages = posts.map((p) => ({
    url: `/blog/${p.language ?? "zh"}/${p.slug}`,
    changefreq: "monthly",
    priority: "0.7"
  }));
  const allPages = [...staticPages, ...postPages];
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages.map(
    (p) => `  <url>
    <loc>${SITE}${p.url}</loc>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`
  ).join("\n")}
</urlset>`;
  return new Response(xml, {
    headers: { "Content-Type": "application/xml; charset=utf-8" }
  });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
