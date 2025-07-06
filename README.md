# Antonis Matis Portfolio

This project is a personal portfolio site, built with [Next.js](https://nextjs.org) and featuring multilingual support (i18n). It includes pages for CV, skills, experience, education, certifications, and contact.

## Features

- Next.js 14 (App Router)
- Multilingual (EN/EL) with dynamic message loading
- Responsive UI
- Modular components (Navbar, Footer)
- SEO optimization (sitemap, robots.txt, og-image)

## Folder Structure

```
src/
  app/           # Pages and layouts (per language)
  components/    # Reusable components (Navbar, Footer)
  messages/      # i18n messages (el, en)
  i18n.ts        # Internationalization settings
  middleware.ts  # Middleware for locale routing
public/          # Images, icons, static files
```

## Installation & Development

1. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```
2. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```
3. Open [http://localhost:3000](http://localhost:3000)

## Internationalization (i18n)

- Supports Greek and English.
- Messages are located in `src/messages/el/index.json` and `src/messages/en/index.json`.
- Locale routing is handled via middleware (`src/middleware.ts`).

## Build & Deploy

For a production build:
```bash
npm run build
npm start
```

For deployment, [Vercel](https://vercel.com/) or any Node.js hosting is recommended.

## Credits

- Next.js
- Vercel
- Icons from [Simple Icons](https://simpleicons.org/) and [SVGRepo](https://www.svgrepo.com/)

---
For questions/feedback: [antonismatis.gr](https://antonismatis.gr)
