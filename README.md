<<<<<<< HEAD
# Rafael Azzolini — Portfolio

A personal developer portfolio built as a fast, statically-generated, fully
multilingual single-page site. Five locales (Portuguese, English, Spanish,
French, German) are served through locale-prefixed routes, with interactive
canvas and three.js backdrops and a light/dark theme.

🔗 **Live:** _add your deployment URL here_

## Tech Stack

- **[Next.js 15](https://nextjs.org)** — App Router, static site generation
- **[React 19](https://react.dev)** + **TypeScript**
- **[Tailwind CSS v4](https://tailwindcss.com)** — `@theme` tokens, `html.light` theme flip
- **[three.js](https://threejs.org)** — animated woven-rope hero figure
- **Canvas 2D** — falling-particle skills backdrop and the fractal experience tree

## Features

- 🌍 **Multilingual** — `pt` / `en` / `es` / `fr` / `de`, routed via `middleware.ts`
  and `app/[locale]/`, each fully prerendered (9 static pages)
- 🎨 **Light / dark theme** with a persisted toggle
- ✨ **Interactive backgrounds** — three.js hero figure, a self-revealing particle
  field, and a regenerating fractal tree behind Experience
- ♿ **Reduced-motion aware** — heavy animations fall back to static renders
- 📱 **Responsive** — tuned for mobile through desktop

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The root path redirects to
your preferred locale (e.g. `/en`).

## Scripts

| Command              | Description                          |
| -------------------- | ------------------------------------ |
| `npm run dev`        | Start the dev server                 |
| `npm run build`      | Production build                     |
| `npm run start`      | Serve the production build           |
| `npm run lint`       | Run ESLint                           |
| `npm run type-check` | Type-check with `tsc --noEmit`       |

## Project Structure

```
app/[locale]/        Locale-scoped layout + page (the single-page site)
components/
  layouts/           Navbar, Footer
  sections/          Hero, About, Skills, Projects, Experience, Contact + canvas backdrops
  ui/                Reusable bits (theme toggle, language switcher, reveal wrappers…)
data/portfolio.ts    Skills, projects and other structured content
hooks/               Theme, active-section, scroll-reveal, reduced-motion
lib/                 i18n helpers + utilities
translations/        Per-locale dictionaries (typed by translations/types.ts)
middleware.ts        Locale negotiation / redirect
public/flags/        Locale flag SVGs
```

## Internationalization

Each language has a typed dictionary in `translations/`. To edit copy, change the
relevant locale file; `translations/types.ts` keeps every locale in shape. Adding
a locale means creating its dictionary, registering it in `translations/index.ts`,
and adding a flag in `public/flags/`.

## Deployment

Optimized for [Vercel](https://vercel.com). Push the repo, import it, and deploy —
no extra configuration required.

---

Built by Rafael Azzolini and lots of coffees.
=======
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
>>>>>>> 2c76de3f3315f9d881ed6a20ee4fae28557c87fe
