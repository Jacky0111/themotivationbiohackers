# The Motivation Biohackers

Website for **The Motivation Biohackers**, a wellness centre in Johor Bahru, Malaysia offering functional wellness, regenerative therapies and longevity programmes, plus community health talks and events.

**Live site:** https://themotivationbiohackers.lovable.app

> The Motivation Biohackers is a wellness centre, not a medical clinic. Site copy must not make medical claims — see the in-site [Disclaimer](src/pages/Disclaimer.tsx).

## What's on the site

| Route | Page |
| --- | --- |
| `/` | Home: hero, services, perspectives, upcoming events, booking form, contact |
| `/about` | Team and approach |
| `/services/:slug` | Service details (PEMF, BioAura AI, epigenetic screening, nutrition, ReCognize, …) |
| `/events/:slug` | Event details with countdown and registration link |
| `/past-events` | Archive of past events |
| `/disclaimer` | Disclaimer & terms |

Booking and event registration open WhatsApp (`wa.me`) or a Google Form; there is no backend and no data is stored by the site.

## Tech stack

React 18 · TypeScript · Vite · Tailwind CSS · shadcn/ui (Radix) · Framer Motion · React Router · react-helmet-async (SEO / structured data) · Vitest + Testing Library

## Getting started

Requires Node.js 20.19+ (or 22.12+) and [Bun](https://bun.sh) (the package manager used by the lockfile and CI).

```sh
bun install
bun run dev        # http://localhost:8080
```

### Scripts

| Command | What it does |
| --- | --- |
| `bun run dev` | Start the dev server |
| `bun run build` | Production build into `dist/` |
| `bun run preview` | Serve the production build locally |
| `bun run lint` | ESLint |
| `bun run typecheck` | TypeScript check (no emit) |
| `bun run test` | Run the unit tests once (`test:watch` to watch) |
| `bun run verify` | Everything CI runs: install, lint, typecheck, test, build, dependency audit |

## Updating content

- **Events** — edit `src/data/events.ts`. Add one object to `allEvents` with `title`, `date`, `dateISO` (`YYYY-MM-DD`), `location` (include the time, e.g. `Zoom Online Webinar · 8:00 PM`, so the countdown is accurate), `desc`, `image` and optionally `link`, `speakers` and `price` (RM per person; leave out for free events). Events move from *Upcoming* to *Past* automatically at midnight Malaysian time (UTC+8). Detail-page URLs (slugs) are generated from the title.
- **Services** — edit `src/data/services.ts`.
- **Domain, WhatsApp number** — `src/lib/site.ts`. The domain also appears in `index.html`, `public/sitemap.xml`, `public/robots.txt` and `public/llms.txt`; update those if the domain changes.
- **Sitemap** — `public/sitemap.xml` is maintained by hand and lists the main pages and services, not individual events.

## Deployment

`bun run build` produces a static site in `dist/`. Any static host works, but it must be configured to serve `index.html` for unknown paths (a "single-page app" fallback); otherwise direct visits to `/about` or `/events/...` return a 404.

The project is connected to [Lovable](https://lovable.dev/projects/b911b272-ffbc-4f22-8e0c-8b6e72b8e0b2): changes pushed to `main` sync into Lovable, and Lovable edits are committed back here.

> **Note on event posters:** most event poster images live in Lovable's asset storage. The `src/assets/*.asset.json` files point to them via `/__l5e/assets-v1/...` URLs, which only resolve when the site is served by Lovable. To host elsewhere, download those images, add them to the repo (or any CDN) and update the `image` fields in `src/data/events.ts`.

## Quality checks

GitHub Actions (`.github/workflows/ci.yml`) runs lint, type check, tests, build and a dependency audit (`bun audit`, failing on high/critical findings) on every pull request and push to `main`. Dependabot opens weekly dependency update PRs.

## Project layout

```
src/
  components/   Page sections and shared UI (components/ui = shadcn/ui primitives)
  data/         Events and services content
  lib/          Helpers: site constants, WhatsApp links, analytics, event structured data
  pages/        Route components
  test/         Vitest tests
public/         Static files: robots.txt, sitemap.xml, llms.txt, favicon, social image
.lovable/       Lovable project metadata (managed by Lovable; keep)
```

## Analytics

`src/lib/analytics.ts` sends a `register_click` event to whichever analytics tool is on the page (Google Analytics/GTM, Plausible, PostHog or Umami) and does nothing if none is installed.
