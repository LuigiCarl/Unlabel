# UNLABEL

**An interactive educational experience for noticing, questioning, and moving beyond gender stereotypes.**

UNLABEL is a Next.js website that combines editorial content, reflective prompts, interactive stories, source-backed context, and browser-only personal tools. Its goal is not to define anyone's identity or prescribe a single experience. It creates space to examine inherited assumptions and make room for wider possibilities.

[![Visit the live UNLABEL website](https://unlabel-dusky.vercel.app/opengraph-image)](https://unlabel-dusky.vercel.app/)

**Live website:** [unlabel-dusky.vercel.app](https://unlabel-dusky.vercel.app/)

**Project owner:** Luigi Carl  
**Contact route:** `/contact` ([implementation](./src/app/contact/page.tsx))  
**Current documentation effective date:** October 14, 2026

> **Important:** This repository contains educational content and plain-language legal documentation, not legal advice. Before a public or commercial launch, verify all sources, licenses, hosting settings, privacy disclosures, and applicable Philippine legal requirements.

## Contents

- [What the project includes](#what-the-project-includes)
- [Experience map](#experience-map)
- [Technology](#technology)
- [Requirements](#requirements)
- [Local development](#local-development)
- [Environment variables](#environment-variables)
- [Available scripts](#available-scripts)
- [Project structure](#project-structure)
- [Content and source management](#content-and-source-management)
- [Privacy and data behavior](#privacy-and-data-behavior)
- [Security and platform headers](#security-and-platform-headers)
- [Legal, copyright, and attribution checklist](#legal-copyright-and-attribution-checklist)
- [Deployment checklist](#deployment-checklist)
- [Accessibility and responsive design](#accessibility-and-responsive-design)
- [Maintenance workflow](#maintenance-workflow)
- [Contributing](#contributing)
- [License and ownership](#license-and-ownership)

## What the project includes

- A visual landing page with animated editorial sections.
- **Explore** chapters for recognizing common stereotype patterns.
- **Challenge** experiences that turn reflection into choices.
- **Impact** content using source-backed statistics.
- **Rights** content linking to Philippine legal sources.
- **Take Action** tools for private, browser-based commitments.
- Interactive story, quiz, statistics, law-timeline, bias-detector, and pledge-generator features.
- A source and attribution register for statistics, laws, fonts, software, and visual material.
- Plain-language pages for:
  - Privacy Policy
  - Terms of Use
  - Educational Disclaimer
  - Copyright & Credits
  - Contact and correction requests

## Experience map

| Route | Purpose |
| --- | --- |
| `/` | Main introduction and route index |
| `/explore` | Guided exploration of stereotype patterns |
| `/challenge` | Interactive reflection and choice-based challenges |
| `/impact` | Statistics and contextual interpretation |
| `/rights` | Philippine legal context and official sources |
| `/take-action` | Private browser-based action tools |
| `/about` | Project purpose, editorial principles, and ownership |
| `/references` | Evidence, legal sources, licenses, and attribution records |
| `/privacy` | Current privacy and technical-log disclosure |
| `/terms` | Terms governing use of the website |
| `/educational-disclaimer` | Limits of educational, legal, medical, and psychological content |
| `/copyright` | Copyright, credits, reuse guidance, and rights concerns |
| `/contact` | Corrections, accessibility, permissions, privacy, and collaboration |

## Technology

- [Next.js](https://nextjs.org/) App Router
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/) through the current PostCSS setup
- [Three.js](https://threejs.org/) and React Three Fiber for 3D scenes
- [Drei](https://github.com/pmndrs/drei) for React Three Fiber helpers
- [Motion](https://motion.dev/) and [GSAP](https://gsap.com/) for animation
- [Lucide React](https://lucide.dev/) for interface icons
- [Fontsource](https://fontsource.org/) packages for local Inter and Space Grotesk font files

See [`package.json`](./package.json) for the authoritative dependency and script list.

## Requirements

- Node.js `>=20.9.0`
- npm
- A modern browser with JavaScript enabled

## Local development

1. Clone the repository and enter the project directory.

   ```bash
   git clone <repository-url>
   cd Unlabel
   ```

2. Install dependencies.

   ```bash
   npm install
   ```

3. Create a local environment file.

   ```bash
   copy .env.example .env.local
   ```

   On macOS/Linux, use:

   ```bash
   cp .env.example .env.local
   ```

4. Set the local site URL in `.env.local`:

   ```env
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   ```

5. Start the development server.

   ```bash
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000).

Do not commit `.env.local` or any file containing credentials or private deployment values.

## Environment variables

| Variable | Required | Purpose |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Recommended | Canonical origin used by metadata, sitemap, and robots output |
| `UPSTASH_REDIS_REST_URL` | Required for visits counter | Upstash Redis REST endpoint |
| `UPSTASH_REDIS_REST_TOKEN` | Required for visits counter | Upstash Redis REST token |

The template is in [`.env.example`](./.env.example). The value must include the protocol, for example `https://example.com`.

## Available scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the local Next.js development server |
| `npm run build` | Create and validate the production build |
| `npm run start` | Serve the production build locally |
| `npm run lint` | Run ESLint |
| `npm run typecheck` | Run TypeScript without emitting files |

Before opening a pull request or deploying, run:

```bash
npm run lint
npm run typecheck
npm run build
```

## Project structure

```text
.
├── public/                  # Public static files, when present
├── src/
│   ├── app/                 # App Router pages, metadata, sitemap, robots
│   ├── components/
│   │   ├── layout/          # Navbar, footer, transitions
│   │   ├── pages/           # Shared information-page layouts
│   │   ├── sections/        # Landing and content sections
│   │   ├── three/           # 3D scene components
│   │   └── ui/              # Reusable interface primitives
│   ├── data/                # Editorial content, questions, laws, and references
│   ├── features/            # Self-contained interactive experiences
│   ├── hooks/               # Shared React hooks
│   ├── lib/                 # Browser utilities and export helpers
│   └── types/               # Shared TypeScript types
├── .env.example             # Environment variable template
├── eslint.config.mjs        # ESLint configuration
├── next.config.ts           # Next.js headers and runtime configuration
├── package.json              # Dependencies and scripts
├── postcss.config.mjs       # PostCSS configuration
└── tsconfig.json            # TypeScript configuration
```

## Content and source management

The source register is maintained in [`src/data/references.ts`](./src/data/references.ts) and rendered at [`/references`](./src/app/references/page.tsx).

Every factual or third-party item should have enough information for another person to verify it:

- Title and author or responsible organization
- Publisher
- Publication or data date
- Stable source URL
- License or permission terms, when applicable
- A short note explaining where the item is used

### Adding a statistic

1. Prefer a primary source or official statistical publisher.
2. Record the exact date, population, geography, unit, and definition.
3. Add the source to `src/data/references.ts`.
4. Update the UI copy if the source or period changes.
5. Avoid presenting correlation as causation.
6. Run the build and manually check the displayed figure against the source.

### Adding a law or legal summary

1. Link to an official government or authoritative legal repository.
2. Include the law number, title, date, and issuing body.
3. Keep the summary clearly separate from the statutory text.
4. Do not present the site as a lawyer, law firm, government agency, or legal adviser.
5. Include the educational/legal-information disclaimer.
6. Re-check amendments and implementing rules before publishing.

### Adding images, audio, video, or models

Do not add a third-party asset until the asset record is complete:

```text
Asset:
Creator:
Source URL:
License or permission:
Date accessed:
Modifications:
Required credit:
Where used:
```

If permission is unclear, do not ship the asset. Use project-created CSS, code-generated visuals, or a clearly licensed replacement.

## Privacy and data behavior

The current application is designed to be mostly browser-local:

- No user accounts are implemented.
- No application database is implemented.
- No advertising tracker is intentionally included.
- No analytics integration is intentionally included in the repository.
- Interactive answers are held in page/browser state and are not intentionally uploaded.
- Pledge names and selections are used locally to generate a downloadable image.
- The browser or operating-system share sheet may pass data to a destination selected by the user; that destination has its own terms and privacy practices.
- The contact route opens a Gmail compose flow addressed to the project email. Gmail handles that interaction under its own policies.

The deployment host may still process request information such as IP address, browser details, requested URL, timestamps, and security logs. Before launch, verify:

- Production hosting provider
- Log categories and retention period
- Subprocessors
- International data transfers
- Whether analytics or performance monitoring is enabled outside this repository
- Data-subject request and deletion procedures

Update [`src/app/privacy/page.tsx`](./src/app/privacy/page.tsx) whenever the data flow changes. Never claim that data is “never collected” without checking the deployment, hosting dashboard, CDN, monitoring, email, and third-party integrations.

## Security and platform headers

[`next.config.ts`](./next.config.ts) currently configures:

- `X-Content-Type-Options: nosniff`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy` disabling camera, microphone, and geolocation
- `X-Frame-Options: SAMEORIGIN`
- `poweredByHeader: false`
- React strict mode

The application also currently emits `noindex` metadata and disallows crawling in [`src/app/robots.ts`](./src/app/robots.ts). Revisit both before a public launch if search indexing is desired.

Security maintenance rules:

- Never commit API keys, passwords, OAuth secrets, private email credentials, or deployment tokens.
- Validate any future form, upload, comment, or user-submission feature server-side.
- Add rate limiting and abuse reporting before enabling public submissions.
- Do not log sensitive user content unnecessarily.
- Keep dependencies updated and review license changes.
- Test production headers and metadata after deployment, not only locally.

## Legal, copyright, and attribution checklist

This documentation is operational guidance, not legal advice.

Before publishing:

- [ ] Owner identity and public contact are correct.
- [ ] Copyright owner and year are correct.
- [ ] Every image, audio file, video, model, font, and library has a verified license or permission.
- [ ] Required attribution and notices are visible where required.
- [ ] Statistics have current primary sources and clear dates.
- [ ] Legal summaries link to official sources and are labeled as educational information.
- [ ] No unverified `®` or trademark claim is used.
- [ ] No page makes an unsupported accusation about an identifiable person or organization.
- [ ] No third-party material implies endorsement without permission.
- [ ] A copyright concern, correction, privacy, and accessibility contact path works.
- [ ] Hosting and technical-log behavior matches the Privacy Policy.
- [ ] Any user-generated content has moderation, reporting, removal, and retention procedures.
- [ ] Commercial use, sponsorship, affiliate links, and paid distribution are disclosed if introduced.

The public-facing documentation is available through:

- [`/copyright`](./src/app/copyright/page.tsx)
- [`/references`](./src/app/references/page.tsx)
- [`/privacy`](./src/app/privacy/page.tsx)
- [`/terms`](./src/app/terms/page.tsx)
- [`/educational-disclaimer`](./src/app/educational-disclaimer/page.tsx)
- [`/contact`](./src/app/contact/page.tsx)

## Deployment checklist

1. Set `NEXT_PUBLIC_SITE_URL` to the exact HTTPS production origin.
2. Run `npm ci` in CI or the deployment environment.
3. Run lint, typecheck, and build.
4. Confirm the production environment uses Node.js `>=20.9.0`.
5. Check the generated canonical URLs, Open Graph metadata, manifest, sitemap, and robots response.
6. Confirm whether `noindex` and `disallow: /` should remain enabled.
7. Verify the production host's logs, analytics, cookies, monitoring, and subprocessors.
8. Test all legal and contact links, including `/contact/email`.
9. Test the site at narrow mobile widths and with keyboard navigation.
10. Check reduced-motion behavior and WebGL fallback behavior.
11. Verify every current source and license record.
12. Record the deployment date and significant content/legal changes.

## Accessibility and responsive design

The interface includes:

- Skip navigation link
- Keyboard-visible focus styles
- Semantic navigation labels
- Reduced-motion media handling
- Mobile navigation
- Responsive layouts for information, reference, and interactive pages
- Browser fallback messaging for 3D content
- Local fonts instead of a remote font dependency

When changing layout:

- Test at approximately 320px, 375px, 768px, and desktop widths.
- Check for horizontal scrolling and clipped headings.
- Keep focus states visible.
- Do not rely on color alone to communicate state.
- Preserve readable line lengths and touch target sizes.
- Check keyboard and reduced-motion behavior.

## Maintenance workflow

For every content or dependency change:

1. Identify whether the change affects facts, sources, personal data, licenses, or legal wording.
2. Update the relevant page and `src/data/references.ts`.
3. Add or update the source/license record.
4. Run `npm run lint`, `npm run typecheck`, and `npm run build`.
5. Manually review the affected route on mobile and desktop.
6. Check the diff for accidental secrets, unsupported claims, and stale dates.
7. Record material changes in the pull request or release notes.

Review source and legal content whenever:

- A statistic's reference period changes
- A law is amended or replaced
- A dependency or license changes
- A hosting provider, analytics tool, or email flow changes
- New media or user-submission functionality is introduced
- A copyright, privacy, correction, or accessibility request is received

## Contributing

Contributions should preserve the project's educational purpose, source discipline, accessibility, and respectful treatment of people and communities.

For a proposed change:

1. Explain the purpose and affected route or feature.
2. Include sources for new factual claims.
3. Include license or permission details for new third-party material.
4. Avoid exposing personal or sensitive information.
5. Run the validation scripts.
6. Describe responsive and accessibility checks.

For copyright, privacy, accessibility, or factual corrections, use the [Contact page](./src/app/contact/page.tsx) and include the relevant URL and a clear description.

## License and ownership

Unless otherwise identified:

- Original UNLABEL editorial text, visual system, and interaction design are owned by **Luigi Carl**, copyright 2026.
- Third-party libraries, fonts, sources, and linked materials remain owned by their respective creators or publishers.
- The project does not grant a blanket license to reuse third-party material.
- See [`src/app/copyright/page.tsx`](./src/app/copyright/page.tsx) and [`src/data/references.ts`](./src/data/references.ts) for the current public attribution record.

For permissions or rights concerns, use the project contact channel rather than assuming that public availability means unrestricted reuse.
