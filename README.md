# Safari OS — website

Marketing site for Safari OS (SAFOS), built from the Claude Design canvas in
[`design/`](design/) as a statically rendered Next.js App Router site.

```
npm install
npm run dev        # http://localhost:3000
npm run build      # all routes prerender to static HTML
npm run typecheck
```

## Layout

| Path             | What it is                                                                                                               |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------ |
| `design/`        | The imported Claude Design canvas — the visual source of truth. Not built or type-checked.                               |
| `lib/site.ts`    | Canonical origin, product identity, route table. Everything SEO reads.                                                   |
| `lib/content.ts` | All page copy, lifted verbatim from the canvas.                                                                          |
| `app/`           | Three indexable routes (`/`, `/features`, `/contact`) plus `robots.ts`, `sitemap.ts`, `icon.svg`, `opengraph-image.tsx`. |
| `components/`    | Header, footer, theme toggle, demo form, JSON-LD helper.                                                                 |

## SEO

The canvas was a single-URL client-rendered SPA: three "pages" behind React
state, navigated by `onClick` on `<span>` elements, with no title, no meta
description and no server HTML. None of that is indexable. The port fixes the
structural problems first, then the tags:

- **One URL per page**, each prerendered to static HTML (`○ (Static)` for every
  route in the build output). All copy is in the raw response — no JS needed.
- **Real `<a>` navigation** via `next/link`, so crawlers can follow it and
  keyboards can reach it. `aria-current` marks the active page.
- **Per-page `title`, `description` and `rel=canonical`**, with a title template
  in `app/layout.tsx`.
- **Open Graph + Twitter cards**, with a 1200×630 card generated at build time
  by `app/opengraph-image.tsx` — no binary asset to keep in sync.
- **JSON-LD**, server-rendered: `Organization` and `WebSite` sitewide;
  `SoftwareApplication` + `WebPage` on the home page; `BreadcrumbList` +
  `ItemList` of the eleven modules on `/features`; `ContactPage` on `/contact`.
  Nodes are `@id`-linked into one graph.
- **`robots.txt` and `sitemap.xml`** generated from the route table.
- **A real 404** (HTTP 404, `noindex`), not a soft 404.
- **Core Web Vitals**: fonts self-hosted by `next/font` instead of the canvas's
  render-blocking Google Fonts stylesheet, with the size-adjust fallback that
  stops the swap shifting layout. ~103 kB shared JS; the only client components
  are the theme toggle and the form.
- **Accessibility**, which page experience partly measures: skip link, visible
  focus rings, labelled form fields, landmark elements, one `h1` per page.

### Before launch

1. **Set the real domain.** `NEXT_PUBLIC_SITE_URL` (see `.env.example`) drives
   every canonical tag, Open Graph URL, the sitemap and `robots.txt`. A bare
   domain is fine — the scheme is added — and an unset or empty value falls back
   to `https://safari-os.com` rather than failing the build. That fallback is
   the trap: if `https://safari-os.com` is not the production origin, the build
   will still succeed while every canonical points at the wrong host. Check one
   after deploying.
2. **Wire up demo requests.** `deliver()` in `lib/enquiry.ts` currently writes
   the enquiry to the server log and returns success. Nothing is emailed yet.
   Replace it with a real transport before taking traffic.
3. Submit the sitemap in Google Search Console and Bing Webmaster Tools.
