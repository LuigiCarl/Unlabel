# UNLABEL® — Complete Website Architecture & Development Blueprint

Next.js · TypeScript · Tailwind CSS · GSAP · Motion · Three.js · Vercel

UNLABEL® / DIGITAL EXPERIENCE

PROJECT BLUEPRINT 01

# BREAK THE

# LABELS.

# REDEFINE

# POSSIBILITY.

An immersive digital experience challenging the gender stereotypes that shape how society sees people.

EXPLORE · QUESTION · UNLEARN

## 1. Project vision and scope

UNLABEL is a cinematic, interactive educational website that challenges gender stereotypes through storytelling, gamification, data visualization, and immersive animations.

The website's single central issue is gender stereotyping, specifically how assumptions about gender influence opportunities, expectations, and treatment in education, careers, leadership, and everyday life.

The uploaded project brief requires a functional, responsive website with one central gender-related issue, original content organization, and referenced statistics, laws, and claims. UNLABEL will address those requirements directly.

Project at a glance

Core experiences

# 8

Main routes

# 6

Recommended team

# 3–4

Database

## Not required

### Design direction

| Element            | Specification                                  |
| ------------------ | ---------------------------------------------- |
| Visual style       | Dark editorial, experimental, futuristic       |
| Primary background | `#101014`                                      |
| Accent             | `#C7FF61` (acid lime)                          |
| Secondary accent   | `#8150D8` (violet)                             |
| Typography         | Space Grotesk + Inter                          |
| Headings           | Oversized, uppercase, tightly spaced           |
| Layout             | Asymmetric editorial grid, generous whitespace |
| Animation          | Cinematic but intentional                      |
| Mobile             | Touch-first alternatives to mouse interactions |

Use animation to reinforce the educational narrative rather than adding movement to every element.

## 2. Application architecture

The recommended architecture is a Next.js App Router application with static-first content and client-side interactive experiences.

Browser / User Interface

Desktop · Tablet · Mobile

Next.js App Router

Server Components · Client Components · Route Handlers

Content Layer

Typed JSON / TS data, citations, scenarios, laws

Interaction Layer

GSAP · Motion · Three.js · React state

Vercel Deployment

Hosting · CDN · Build pipeline · Optional serverless APIs

### Technical responsibilities

| Technology                   | Responsibility                                       |
| ---------------------------- | ---------------------------------------------------- |
| Next.js                      | Routing, layouts, metadata, content delivery         |
| TypeScript                   | Data contracts and safe interaction state            |
| Tailwind CSS                 | Responsive design system                             |
| GSAP + ScrollTrigger         | Scroll timelines, pinned sections, complex sequences |
| Motion for React             | Hover, tap, layout transitions, state animations     |
| Three.js + React Three Fiber | 3D label environment and interactions                |
| React Three Drei             | 3D helpers, text, controls, loading                  |
| Vercel                       | Build and production deployment                      |

Animation ownership rule: GSAP controls scroll-driven timelines, Motion controls React UI transitions, and Three.js controls 3D objects. Avoid letting multiple libraries animate the same property of the same element.

### Data and state strategy

- Static TypeScript data: Laws, stereotypes, statistics, references, and branching scenarios.
- React local state: Quiz answers, selected scenario paths, broken labels, slider position, and pledge selections.
- Session storage (optional): Resume progress after a page refresh within the same browser tab.
- No database for MVP: All eight interactions can function without accounts or persistent user-generated content.
- No backend required for pledge export: Generate pledge cards locally in the browser, without uploading personal information.

This keeps the deployment simple and avoids introducing Laravel, a separate server, or unnecessary authentication.

## 3. Page structure and user journey

`/` — The Experience

Cinematic introduction, interactive 3D Break the Labels, Two Worlds Slider, and scroll-driven transitions. This is the signature homepage.

`/explore` — Understand the Labels

Interactive educational chapters about stereotypes in education, employment, leadership, and social expectations. All treated as examples of the same central issue.

`/challenge` — Challenge Your Bias

Branching Story and Bias Detector, with feedback, scenario explanations, progress indicators, and learning summaries.

`/impact` — The Reality

Animated statistics, source details, and evidence explaining how stereotypes affect real opportunities.

`/rights` — Know Your Rights

Interactive Philippine law timeline, simplified legal explanations, official references, and links to authoritative sources.

`/take-action` — Make Your Mark

Personal Pledge Generator, shareable visual, actionable steps, and a reference directory.

The intended visitor journey is:

Awareness

Challenge assumptions

Experience consequences

Understand evidence and rights

Take meaningful action

## 4. Detailed interaction specifications

### Interaction 01 — 3D Break the Labels

[Lumos v2.0.8: 100% breakpoint-free, container queries | Timothy Ricks posted on the topic | LinkedIn](https://images.openai.com/static-rsc-4/ZNWGbSKFpwoKGC3qYOU7fauEp9gWazUW4N6HjOmiLqNTDfYDRJNERGk2nGU6ZRwH3GfL1UDLLFZBd0f-v7WfS_9-O_qNaKRkbMrjoqvG3yuiSHmi0HfE-rkL4LMYjGmw9SqsHdwW_hvZUVzR9Xh574Y8CI-N-ce4b7q6w-Sl9sI?purpose=inline)

Signature homepage experience

Floating labels such as "Boys don't cry", "Women can't lead", and "Certain jobs are only for men" orbit around a central 3D object.

Users interact with them to reveal the assumptions behind each stereotype.

Interaction sequence

1. User enters the section; labels float into view with staggered animation.
2. Hovering highlights a label and temporarily slows its movement.
3. Clicking or tapping a label triggers a fracture animation.
4. Fragments scatter, revealing a factual explanation and related source.
5. A progress indicator tracks the number of labels challenged.
6. After all labels are completed, the sculpture transforms into an open, unified form.

Implementation

- React Three Fiber for rendering the scene.
- Drei for text and 3D utilities.
- Raycasting through R3F pointer events for object selection.
- GSAP for fracture and camera transitions.
- Instanced meshes or limited geometry for efficient fragments.
- HTML overlay for accessible explanations.

Mobile fallback: Tap-to-break cards or a lightweight 2D animation instead of expensive 3D physics.

Completion condition: All available labels have been explored. This is an educational milestone, not a competitive score.

### Interaction 02 — Two Worlds Slider

[The unspoken inequality in Indian homes | by Shivani Pawar | Medium](https://images.openai.com/static-rsc-4/4Hc6fVBFYwPARhiWbNcOOPhSswban8IMjXFxlx1eN2_5xDB7E24oOvNFnbWAFFTpHGtxrFTyfisTaWSk7_0Z8D57goRLIwleRvqhr3-Ok0MYg7vMfmAngKAYkbczPDnH9WUi4Fwen4IqmHzCgIZ_dEQIlcclELCQBXpzQ0L5GVc?purpose=inline)

Compare two perspectives

An interactive split-screen experience showing how stereotypes limit opportunities versus what equal opportunities can look like.

Interaction sequence

1. A vertical divider starts in the middle.
2. Dragging left or right reveals two contrasting visual narratives.
3. Text, illustrations, and color schemes transition with the divider.
4. At either extreme, contextual educational explanations appear.
5. User can switch among education, career, and leadership scenarios.

Implementation: CSS `clip-path`, Motion for transitions, pointer events, and a native range input for keyboard accessibility.

Important: This compares illustrative social expectations, not two literal or universally experienced realities.

### Interaction 03 — Branching Story

[The Job Interview — It Only Happens Once](https://images.openai.com/static-rsc-4/tPoL7IfhQaJK3eSLFnBK_41W9HHQl317cvyNqt-cUKLbkYPbxNw2ZiA23Ew45uqFWV8ssjsatFnnf8SmQRHP3-nVnP11PRK2_YiY4wxbcudi8q6J6xCAd2FD-AuapQukJoNpMki9K-AUfGxzYOJhursi5ClaMRJwU9tp6Q2lUC4?purpose=inline)

Walk in Their Shoes

Users make decisions in realistic situations involving gender stereotypes, and experience how those decisions affect the characters.

Example scenario: A female student wants to pursue engineering, but someone tells her that engineering is better suited to men.

SCENARIO 01 / THE CAREER CHOICE

Demo

"Engineering is a man's field. You should choose something else."

You're a classmate who overhears this. How would you respond?

Challenge the stereotype respectfullyStay silent and walk awayAgree with the statement

Technical design

Represent stories as typed graphs of scenes, choices, and outcomes. Use React state for the current node, choice history, and progress.

```
type StoryChoice = {
  id: string;
  text: string;
  nextNodeId: string;
};

type StoryNode = {
  id: string;
  narrative: string;
  choices: StoryChoice[];
  explanation?: string;
  sourceIds?: string[];
};
```

Allow users to replay and explore different outcomes. Avoid presenting a fictional consequence as a verified real-world event.

### Interaction 04 — Bias Detector

Purpose: Help users distinguish between stereotypes, factual claims, and inclusive principles.

Mechanics: A series of 8–12 questions featuring statements, scenarios, and myth-or-fact choices. Every response reveals an explanation and a source where appropriate.

Visual treatment: Large kinetic typography, animated answer states, progress ring, and a final learning summary.

State: Current question, answers, correctness, completion status.

Important: The result measures quiz understanding, not whether the visitor is personally biased or discriminatory. Avoid labeling users based on their answers.

### Interaction 05 — Animated Statistics

[SaaS Metrics & Unit Economics en 2026 : les 10 indicateurs clés d'une scale-up B2B | Blog Uclic](https://images.openai.com/static-rsc-4/3YxIwZhQnjJYDBYpIkCD8TlyY7rRJf0hXAZew4mLlnlPu8FKE3yiPN8RseM1MZCW5xhj5f1BEaykfUZn8KQhCauDwjSoN9gAeaoLkoPxJonNqtmmDRGtvk8Okru7Jv-Ehl8M8awRH9Kg8LYixEmjh48uzZL88A856NFaKr1rvA4?purpose=inline)

Data that tells a story

Animated charts exploring gender-related disparities in education, work, leadership, and attitudes, with explicit connections to stereotypes.

Interactions

- Counters animate when their sections enter the viewport.
- Bar charts grow as users scroll.
- Hover or tap reveals exact values, dates, and definitions.
- Users switch between datasets using segmented controls.
- Each chart provides a source link and short interpretation.
- Users can view the same data as an accessible table.

Data model

```
type Statistic = {
  id: string;
  title: string;
  value: number;
  unit: string;
  year: number;
  geography: string;
  sourceId: string;
  methodologyNote?: string;
};
```

Suggested research sources include the Philippine Statistics Authority, Philippine Commission on Women, and relevant UN reports. Do not insert invented statistics or imply that correlation establishes causation.

### Interaction 06 — Interactive Law Timeline

[Flashlights - Awwwards SOTD](https://images.openai.com/static-rsc-4/Gl3_8pYxKowfJkZl2yx5JlxRMWvvN0oPQYkNB3OlaCRWEJ3JW4t8nukVZsaOqVbiijHEPP1EOmN81Tqh3VzXXLJwdbY9pFn983TcigGOzu5djoyOjjPpOnXmcnPSHUDnFckFbvkxb6c2iZ-LQyEmVbVAks0zsAzwFmyzDLFe66E?purpose=inline)

Know the laws. Understand the protections.

A scrollable timeline highlighting Philippine laws relevant to gender equality and discrimination.

Candidate entries to research and verify:

| Year | Law      | Connection                                                                     |
| ---- | -------- | ------------------------------------------------------------------------------ |
| 1989 | RA 6725  | Prohibition of discrimination against women in employment terms and conditions |
| 2009 | RA 9710  | Magna Carta of Women                                                           |
| 2019 | RA 11313 | Safe Spaces Act                                                                |

Interactions: Horizontal timeline, animated year transitions, expandable law summaries, original-source links, and contextual examples.

Each entry should explain the law's actual scope. Do not imply that every gender stereotype is itself an unlawful act. The legal content is educational, not individualized legal advice.

### Interaction 07 — Personal Pledge Generator

[Insurance Museum launches Sign The Slip campaign - Insurance Museum](https://images.openai.com/static-rsc-4/CUNZppBxIZSuQlU53vM7rvPJG2w9PBwer84Ry8OgPNyDXod0gx4iwXM6cFZmTDI-KKGDNMJGzsgYsgbBnHDpD2kKS7HmWzZGQXVFp1mgoFsDd79pvfEbSAffY75jSoYk4sSrec8etI7O149wWrxQ8UeK_JnaVCJE38MANHlFeWQ?purpose=inline)

Make Your Mark

Users create a personalized commitment to challenge gender stereotypes and export it as a shareable graphic.

Choose your commitment

Challenge stereotypes

Support equal opportunities

Respect people beyond labels

Display name (optional)

UNLABEL® / MY PLEDGE

# I CHOOSE TO

# CHALLENGE STEREOTYPES WHEN I ENCOUNTER THEM.

A voice beyond labels

&#x20;Copy pledgePrototype preview. The actual website will support PNG export and sharing.

Implementation: Render the pledge as an HTML/CSS poster and export it using a browser-side image export library. Provide PNG download and a native share option where supported.

Do not collect names on a server or publish pledges publicly by default.

### Interaction 08 — Custom Cursor & Magnetic UI

Desktop effects

- Cursor transforms when hovering over interactive content.
- Magnetic CTA buttons shift slightly toward the pointer.
- Project cards feature subtle 3D tilt.
- Cursor displays contextual labels such as "DRAG", "EXPLORE", and "BREAK".
- Navigation transitions use restrained motion.

Implementation

Use Motion for pointer-following spring effects and GSAP for complex hover sequences. Implement cursor motion using transforms, not layout-changing properties.

Disable the custom cursor on touch devices, respect `prefers-reduced-motion`, and preserve native focus indicators for keyboard navigation.

## 5. Recommended Next.js folder structure

```
unlabel/
├── public/
│   ├── images/
│   ├── models/
│   ├── textures/
│   └── icons/
│
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── globals.css
│   │   ├── not-found.tsx
│   │   ├── explore/page.tsx
│   │   ├── challenge/page.tsx
│   │   ├── impact/page.tsx
│   │   ├── rights/page.tsx
│   │   └── take-action/page.tsx
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── PageTransition.tsx
│   │   ├── ui/
│   │   │   ├── MagneticButton.tsx
│   │   │   ├── CustomCursor.tsx
│   │   │   └── SectionHeading.tsx
│   │   ├── three/
│   │   │   ├── LabelScene.tsx
│   │   │   ├── LabelObject.tsx
│   │   │   └── Fragments.tsx
│   │   └── sections/
│   │       ├── HeroSection.tsx
│   │       ├── BreakLabels.tsx
│   │       └── TwoWorlds.tsx
│   │
│   ├── features/
│   │   ├── branching-story/
│   │   ├── bias-detector/
│   │   ├── statistics/
│   │   ├── law-timeline/
│   │   └── pledge-generator/
│   │
│   ├── data/
│   │   ├── stereotypes.ts
│   │   ├── stories.ts
│   │   ├── questions.ts
│   │   ├── statistics.ts
│   │   ├── laws.ts
│   │   └── sources.ts
│   │
│   ├── hooks/
│   │   ├── useReducedMotion.ts
│   │   └── useMediaQuery.ts
│   │
│   ├── lib/
│   │   ├── animations.ts
│   │   ├── exportPledge.ts
│   │   └── utils.ts
│   │
│   └── types/
│       ├── story.ts
│       ├── quiz.ts
│       └── content.ts
│
├── package.json
├── tsconfig.json
└── next.config.ts
```

The feature-based folders keep each interactive experience independent, easier to test, and suitable for parallel development by group members.

## 6. Phased implementation plan

I recommend a six-week development schedule, adjustable based on your actual submission date.

01Phase 1 — Foundation & Design SystemWeek 1

Initialize Next.js and configure Tailwind

Set up typography, colors, spacing, and responsive layouts

Create navigation, footer, buttons, and reusable components

Build homepage skeleton and all six routes

Deliverable: Fully responsive website foundation

02Phase 2 — Cinematic HomepageWeek 2

03Phase 3 — 3D ExperienceWeek 3

04Phase 4 — Educational InteractionsWeek 4

05Phase 5 — Pledge & PolishWeek 5

06Phase 6 — QA & DeploymentWeek 6

## 7. Team responsibility distribution

For a group of four, I suggest:

| Member                            | Primary responsibility                                         |
| --------------------------------- | -------------------------------------------------------------- |
| Member 1 — Lead Developer         | Next.js architecture, routing, integrations, Vercel            |
| Member 2 — Creative Developer     | GSAP, Three.js, cinematic animations, cursor                   |
| Member 3 — Interaction Developer  | Branching Story, Bias Detector, Pledge Generator               |
| Member 4 — Content & UI Developer | Statistics, laws, references, responsive design, accessibility |

All four should participate in testing and content verification. If you're only three members, combine the content and interaction roles and reduce animation complexity.

## 8. Performance and accessibility requirements

Because UNLABEL uses several animation libraries, performance is a major engineering consideration.

| Area             | Target or implementation                                      |
| ---------------- | ------------------------------------------------------------- |
| Loading          | Aim for LCP ≤ 2.5 seconds on representative mobile conditions |
| Responsiveness   | 360px mobile through wide desktop                             |
| Layout stability | CLS ≤ 0.1                                                     |
| Interaction      | INP ≤ 200 ms                                                  |
| Animations       | Aim for smooth 60 FPS on capable devices                      |
| Accessibility    | WCAG 2.2 AA as a design target                                |
| Motion           | Support reduced-motion preference                             |
| 3D               | Lazy-load, simplify meshes, cap pixel ratio                   |
| Images           | Use Next.js Image and optimized assets                        |
| SEO              | Metadata, semantic headings, sitemap                          |

These are performance goals to validate with Lighthouse and real-device testing, not guaranteed results.

Use dynamic imports for the 3D experience and other heavy client-only features. Keep educational text and important references readable even if WebGL fails or JavaScript animations are unavailable.

## 9. Vercel deployment strategy

GitHub Repository

Vercel Build — Next.js

Vercel Production Deployment

Public UNLABEL Website

### Initial setup

```

npx create-next-app@latest unlabel --typescript --tailwind --eslint --app --src-dir

cd unlabel

npm install gsap motion lenis three @react-three/fiber @react-three/drei lucide-react recharts

npm install -D @types/three

npm run dev

```

Then configure shadcn/ui:

```

npx shadcn@latest init

```

For deployment, push the repository to GitHub, import it into Vercel, and use the Next.js framework preset. Vercel can automatically deploy the production branch and generate preview deployments for pull requests.

Architecture decision: Keep the project static-first, but don't force a static export unless necessary. Normal Next.js deployment on Vercel provides flexibility for future Route Handlers without requiring a separate server.

## 10. Final acceptance checklist

Release readiness

0 / 13

All six pages work on desktop and mobile

3D labels can be interacted with using mouse or touch

Two Worlds Slider supports touch and keyboard input

Branching Story has working choices and multiple outcomes

Bias Detector provides correct explanations and progress

Statistics have verified values, dates, and citations

Law Timeline contains accurate legal references

Pledge Generator exports a readable PNG

Custom cursor does not interfere with native interaction

Reduced-motion alternatives are functional

3D content has a usable fallback

No broken links or browser console errors

Production build passes and deploys to Vercel

## 11. What I would prioritize

The main wow factor

Cinematic homepage + 3D Break the Labels. Ito ang magiging identity ng website at unang mapapansin ng evaluators.

The educational value

Branching Story + Bias Detector. Ito ang magpapakita na hindi lang visually appealing ang UNLABEL — genuinely interactive and educational siya.

The academic credibility

Verified statistics, laws, and references. Kailangan ito para aligned sa Gender and Society project requirements.

The best implementation order is foundation → complete functional interactions → cinematic polish → performance optimization → deployment. That way, kahit kailangan ninyong mag-submit earlier, may working project na kayo instead of an unfinished collection of animations.

This blueprint gives UNLABEL a strong creative identity while keeping it realistic for a 3–4 person team and a Vercel-only application deployment.