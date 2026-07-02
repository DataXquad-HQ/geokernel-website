# GeoKernel Website

Official website for [GeoKernel](https://geokernel.com) by DataXquad — tactical geospatial intelligence platform for offline drone imagery processing.

## Tech Stack

- [Astro](https://astro.build) (static site)
- React islands for interactive components
- Tailwind CSS

## Getting Started

```sh
npm install
npm run dev       # http://localhost:4321
npm run build
```

## Project Structure

```
src/
├── components/      # Header, Footer, island wrappers
├── contexts/        # LanguageContext (zh/en)
├── pages/           # index.astro, sitemap.xml.ts
├── styles/          # global.css
├── translations.js  # All bilingual content
└── views/           # HomeApp, HomePage (all landing page sections)
```
