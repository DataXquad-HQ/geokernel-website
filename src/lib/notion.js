import { Client } from '@notionhq/client';
import { NotionToMarkdown } from 'notion-to-md';

const notion = new Client({ auth: import.meta.env.NOTION_TOKEN });
const n2m = new NotionToMarkdown({ notionClient: notion });

function extractTags(page) {
  const tagsMulti = page.properties.Tags?.multi_select;
  const tagsSingle = page.properties.Tags?.select;
  const categoryMulti = page.properties.Category?.multi_select;
  const categorySingle = page.properties.Category?.select;
  if (tagsMulti?.length) return tagsMulti.map((t) => t.name);
  if (tagsSingle?.name) return [tagsSingle.name];
  if (categoryMulti?.length) return categoryMulti.map((t) => t.name);
  if (categorySingle?.name) return [categorySingle.name];
  return [];
}

function extractDescription(page) {
  const richText =
    page.properties.Description?.rich_text ??
    page.properties.Summary?.rich_text ??
    page.properties.Excerpt?.rich_text;
  if (richText?.length) return richText.map((t) => t.plain_text).join('');
  return null;
}

function extractSlug(page) {
  return page.properties.Slug?.rich_text?.[0]?.plain_text || page.id;
}

export async function getPosts() {
  const response = await notion.databases.query({
    database_id: import.meta.env.NOTION_DATABASE_ID,
    filter: {
      property: 'Status',
      select: { equals: '已發布' },
    },
    sorts: [{ property: 'Date', direction: 'descending' }],
  });

  return response.results.map((page) => ({
    id: page.id,
    slug: extractSlug(page),
    title: page.properties.Title?.title?.[0]?.plain_text ?? 'Untitled',
    date: page.properties.Date?.date?.start ?? null,
    cover: page.cover?.external?.url ?? page.cover?.file?.url ?? null,
    tags: extractTags(page),
    description: extractDescription(page),
    language: page.properties.Language?.select?.name ?? 'zh',
  }));
}

export async function getPostBySlug(lang, slug) {
  let response;
  try {
    response = await notion.databases.query({
      database_id: import.meta.env.NOTION_DATABASE_ID,
      filter: {
        and: [
          { property: 'Status', select: { equals: '已發布' } },
          { property: 'Slug', rich_text: { equals: slug } },
          { property: 'Language', select: { equals: lang } },
        ],
      },
    });
  } catch {
    return null;
  }

  if (!response.results.length) return null;

  const page = response.results[0];
  const mdBlocks = await n2m.pageToMarkdown(page.id);
  const markdown = n2m.toMarkdownString(mdBlocks).parent;

  return {
    id: page.id,
    slug: extractSlug(page),
    language: page.properties.Language?.select?.name ?? lang,
    title: page.properties.Title?.title?.[0]?.plain_text ?? 'Untitled',
    date: page.properties.Date?.date?.start ?? null,
    cover: page.cover?.external?.url ?? page.cover?.file?.url ?? null,
    tags: extractTags(page),
    description: extractDescription(page),
    markdown,
  };
}
