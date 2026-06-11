// DEBUG ONLY — remove after fix
export const prerender = false;

export async function GET() {
  return new Response(
    JSON.stringify({
      NOTION_TOKEN_exists: !!process.env.NOTION_TOKEN,
      NOTION_TOKEN_length: process.env.NOTION_TOKEN?.length ?? 0,
      NOTION_TOKEN_prefix: process.env.NOTION_TOKEN?.substring(0, 8) ?? 'MISSING',
      NOTION_DATABASE_ID_exists: !!process.env.NOTION_DATABASE_ID,
      NOTION_DATABASE_ID: process.env.NOTION_DATABASE_ID ?? 'MISSING',
      NODE_ENV: process.env.NODE_ENV,
      all_keys: Object.keys(process.env).filter(k => k.includes('NOTION')),
    }),
    { headers: { 'Content-Type': 'application/json' } }
  );
}
