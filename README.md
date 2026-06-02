# Utah's Moving and Storage — Website 2.0

A modern, fast, statically-generated rebuild of [utahsmovingandstorage.com](https://utahsmovingandstorage.com), migrated **off WordPress/Divi** and engineered for **SEO, AEO (Answer Engine Optimization), and GEO (Generative Engine Optimization)**. Deploys to **Cloudflare Pages**.

Built with [Astro](https://astro.build) + [Tailwind CSS v4](https://tailwindcss.com). Ships near-zero JavaScript, so Core Web Vitals are excellent by default — directly fixing the performance, schema, and AI-readiness failures identified in the March 2026 SEO audit.

---

## Quick start

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs static site to ./dist
npm run preview  # preview the production build
```

Requires Node 18.20+ / 20.3+ / 22+ (developed on Node 24).

---

## Tech stack

| Concern | Choice | Why |
|---|---|---|
| Framework | Astro 5 (static output) | Zero-JS HTML by default → great CWV; content collections for blog/guides/locations |
| Styling | Tailwind CSS v4 (`@tailwindcss/vite`) | Design tokens in `src/styles/global.css` |
| Fonts | Sora (display) + Inter (body), self-hosted via Fontsource | No layout shift, no third-party font requests |
| Hosting | Cloudflare Pages | Fast global edge, free, Pages Functions for forms |
| Forms | Cloudflare Pages Function → GoHighLevel | `functions/api/quote.ts` |
| Sitemap | `@astrojs/sitemap` | Auto-generated at `/sitemap-index.xml` |

---

## Project structure

```
src/
  consts.ts              # SINGLE SOURCE OF TRUTH: NAP data, services, locations, nav
  content.config.ts      # Astro collections: blog, locations, guides
  layouts/BaseLayout.astro   # SEO <head>, OG/Twitter, JSON-LD injection, header/footer
  lib/schema.ts          # JSON-LD builders (MovingCompany, Service, FAQPage, BlogPosting…)
  lib/blog.ts            # blog helpers (sort, category slugs, dates)
  data/services.ts       # rich per-service content + pricing + FAQs
  data/faqs.ts           # homepage/global direct-answer FAQs (AEO)
  components/            # Header, Footer, QuoteForm, Faq, Breadcrumbs, CtaBand, etc.
  content/
    blog/                # 87 migrated blog posts (Markdown)
    locations/           # 10 city pages (Markdown)
    guides/              # 6 moving-guide chapters (Markdown)
  pages/                 # routes (see below)
functions/api/quote.ts   # Cloudflare Pages Function → GoHighLevel
public/
  robots.txt             # AI crawler directives + sitemap
  llms.txt               # business summary for AI answer engines
  _headers               # security headers + caching (Cloudflare)
  _redirects             # 118 301s from old WordPress URLs
  images/                # OG image, logo, apple-touch-icon
```

### Routes

- `/` — homepage
- `/services/` + `/services/{residential,long-distance,commercial,packing}/`
- `/pricing/` — real, transparent pricing (fixes audit's "no prices" failure)
- `/locations/` + `/locations/{10 cities}/`
- `/moving-guide/` + `/moving-guide/{6 guides}/`
- `/blog/`, `/blog/{post}/`, `/blog/category/{category}/`
- `/about/`, `/contact/`, `/quote/`, `/join-our-team/`
- `/privacy-policy/`, `/terms-of-service/`, `/thank-you/`, `/404`
- `/rss.xml`, `/sitemap-index.xml`

---

## Deploy to Cloudflare Pages

1. Push this repo to GitHub/GitLab.
2. Cloudflare dashboard → **Workers & Pages → Create → Pages → Connect to Git**.
3. Build settings:
   - **Framework preset:** Astro
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
4. Add the custom domain `utahsmovingandstorage.com` under **Custom domains**.
5. Add environment variables (see below).

`public/_headers` and `public/_redirects` are applied automatically by Cloudflare Pages. `functions/api/quote.ts` is deployed automatically as the `/api/quote` endpoint.

### Connecting the lead form to GoHighLevel

The quote/contact/careers forms POST to `/api/quote`, which forwards to GoHighLevel.

The lead form is a **5-step wizard** (`src/components/QuoteForm.astro`): it opens with easy, low-friction choice questions (move type → size → route → timing) and asks for contact info only on the last step. This lifts conversion and captures qualifying detail so you can close on the phone.

The GoHighLevel inbound webhook is **already wired** as the default endpoint in `functions/api/quote.ts`, so submissions forward to GHL out of the box. Fields sent:
`name, phone, email, moveType, moveSize, timeframe, fromLocation, toLocation, moveDate, stairs, needsPacking, notes, summary, message, source, submittedAt`.

`summary` (also copied to `message`) is a pre-formatted, human-readable recap of the whole move so the rep sees everything at a glance when they call — even if you don't map every individual field in GHL.

To point it at a different GHL webhook without touching code, set in Cloudflare Pages → **Settings → Environment variables**:
   - `GHL_FORM_ENDPOINT` = the webhook URL (overrides the default)
   - `GHL_API_KEY` = (optional) bearer token, if required

Local testing of the function requires `npx wrangler pages dev dist`.

### Analytics & conversion tracking

Analytics is wired but off until you add an ID (no scripts render otherwise). Set in `src/consts.ts` (`ANALYTICS`) or via env vars:
- `PUBLIC_CF_BEACON_TOKEN` — Cloudflare Web Analytics (cookieless, no cookie banner; recommended). The `/thank-you/` pageview is the lead conversion — mark it as a goal in the CF dashboard.
- `PUBLIC_GA4_ID` — Google Analytics 4. A `generate_lead` event fires on `/thank-you/` automatically; a `lead_submitted` dataLayer event is also pushed for GTM.

Because every successful form submit redirects to the dedicated `/thank-you/` URL, conversion tracking works with any analytics tool you choose.

---

## Editing content

- **Business info / NAP / phone / rating / services / cities:** `src/consts.ts` (updates the whole site + schema at once).
- **Service page copy & pricing:** `src/data/services.ts`.
- **FAQs:** `src/data/faqs.ts` (home) and inline arrays in each page (they feed both the visible FAQ and FAQPage schema).
- **Blog posts:** add a Markdown file to `src/content/blog/` with frontmatter (`title, description, pubDate, category`).
- **Location pages:** `src/content/locations/{slug}.md` (+ add to `LOCATIONS` in `consts.ts`).

---

## SEO / AEO / GEO features baked in

- **MovingCompany / LocalBusiness JSON-LD** site-wide with a stable `@id`, `aggregateRating` (4.9 / 163 — corrected from the old site's conflicting counts), `areaServed`, `hasOfferCatalog`, license credential, and geo coordinates.
- **Per-page schema:** WebPage, BreadcrumbList, Service, FAQPage (with real Q&A), BlogPosting, Person (founder).
- **Direct-answer FAQ content** written for AI citation (self-contained, quotable first sentences).
- **`llms.txt`** summarizing the business + key pages for AI answer engines.
- **`robots.txt`** explicitly allowing GPTBot, ClaudeBot, PerplexityBot, Google-Extended, Applebot, etc., and blocking training-only scrapers (CCBot, Bytespider).
- **Security headers** (HSTS, X-Content-Type-Options, Referrer-Policy, Permissions-Policy) via `_headers`.
- **301 redirects** from all legacy WordPress URLs (`_redirects`) to preserve ranking equity.
- **Canonical URLs, Open Graph, Twitter cards, branded OG image** on every page.
- **Sitemap + RSS** auto-generated; author bios on blog posts for E-E-A-T.

---

## Notes & TODO for the client

- **Photos:** the design intentionally uses clean gradients/iconography (no stock photos) for speed and zero broken-image risk. Drop real job photos into `public/images/` and wire them into hero/service sections for an extra trust boost.
- **Reviews:** testimonials on the homepage are representative placeholders — swap in real Google review quotes when ready.
- **Phone tracking:** per the project brief, consider porting the number into GHL's phone system (replacing Google Voice) so calls become tracked contacts.
- Generated from the original WordPress export on 2026-06-02.
