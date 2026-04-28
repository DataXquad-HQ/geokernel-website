# GeoKernel Website

Official website for [GeoKernel](https://geokernel.com) by DataXquad — tactical geospatial intelligence platform for offline drone imagery processing.

## Tech Stack

- [Astro](https://astro.build) (SSR, Node adapter)
- React islands for interactive components
- Tailwind CSS
- Notion CMS for Blog

## Getting Started

```sh
npm install
npm run dev       # http://localhost:4321
npm run build
```

## Environment Variables

Copy `.env.example` to `.env` and fill in:

```
NOTION_TOKEN=your_notion_integration_token
NOTION_DATABASE_ID=your_notion_database_id
```

## Project Structure

```
src/
├── components/      # Header, Footer, island wrappers
├── contexts/        # LanguageContext (zh/en)
├── layouts/         # Layout.astro (blog pages)
├── lib/             # notion.js (Notion API)
├── pages/           # index.astro, blog/*, sitemap.xml.ts
├── styles/          # global.css
├── translations.js  # All bilingual content
└── views/           # HomeApp, HomePage (all landing page sections)
```

## Blog (Notion CMS)

Blog posts are pulled from a Notion database. Required properties:

| Property    | Type        | Notes                  |
| ----------- | ----------- | ---------------------- |
| Title       | Title       |                        |
| Status      | Select      | Set to `已發布` to publish |
| Date        | Date        |                        |
| Slug        | Rich Text   | URL slug               |
| Language    | Select      | `zh` or `en`           |
| Description | Rich Text   | Post excerpt           |
| Tags        | Multi-select |                       |
| Cover       | Cover image |                       |
