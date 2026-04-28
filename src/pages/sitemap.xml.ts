import type { APIRoute } from 'astro';
import { getPosts } from '../lib/notion.js';

const SITE = 'https://geokernel.com';

export const GET: APIRoute = async () => {
  let posts: { slug: string }[] = [];
  try {
    posts = await getPosts();
  } catch {
    // If Notion is unavailable, return sitemap with static pages only
  }

  const staticPages = [
    { url: '/', changefreq: 'weekly', priority: '1.0' },
    { url: '/blog', changefreq: 'daily', priority: '0.9' },
  ];

  const postPages = posts.map((p) => ({
    url: `/blog/${p.language ?? 'zh'}/${p.slug}`,
    changefreq: 'monthly',
    priority: '0.7',
  }));

  const allPages = [...staticPages, ...postPages];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages
  .map(
    (p) => `  <url>
    <loc>${SITE}${p.url}</loc>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
