# AGENTS.md — BeaconHerm Limited

## Project Overview

A professional English-only product showcase website for **BeaconHerm Limited**, an outdoor tent brand targeting the US market. Built with Next.js 16 (App Router), TypeScript, Tailwind CSS 4, and shadcn/ui components.

**Key characteristics:**
- Static Site Generation (SSG) for fast loading and SEO
- E-commerce-ready data models and component structure
- Mobile-responsive, clean outdoor/adventure aesthetic
- All content in English

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript 5 (strict mode) |
| Styling | Tailwind CSS 4 |
| UI Components | shadcn/ui (Radix UI) |
| Icons | lucide-react |
| Package Manager | pnpm |

## Directory Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout (Navbar + Footer + metadata)
│   ├── page.tsx            # Home page (hero, featured products, values, CTA)
│   ├── globals.css         # Global styles, theme tokens, custom utilities
│   ├── robots.ts           # Robots.txt config
│   ├── products/
│   │   └── page.tsx        # Products listing page (filter sidebar + grid)
│   ├── about/
│   │   └── page.tsx        # About Us page (story, mission, team, timeline)
│   └── contact/
│       └── page.tsx        # Contact Us page (form, info, FAQ, social)
├── components/
│   ├── ui/                 # shadcn/ui component library
│   ├── navbar.tsx          # Site navigation (sticky, scroll-aware, mobile menu)
│   ├── footer.tsx          # Site footer with links, contact info, social
│   └── product-card.tsx    # Reusable product card component
├── data/
│   └── products.ts         # Product catalog, team, value props, contact data
├── types/
│   └── index.ts            # TypeScript interfaces (Product, TeamMember, etc.)
├── hooks/
│   └── use-mobile.ts       # Mobile detection hook
└── lib/
    └── utils.ts            # Utility functions (cn class merger)
```

## Build & Run Commands

| Command | Purpose |
|---------|---------|
| `pnpm install` | Install dependencies |
| `pnpm run dev` | Start dev server with HMR |
| `pnpm run build` | Build for production (SSG) |
| `pnpm run start` | Run production build |
| `pnpm run ts-check` | TypeScript type checking |
| `pnpm run lint` | ESLint check |
| `pnpm run validate` | Run ts-check + lint in parallel |

## Design System

**Brand colors** (defined in `src/app/globals.css` CSS variables):
- **Forest green** (primary): `--color-forest-50` to `--color-forest-900` — main brand color, buttons, CTAs
- **Moss green**: `--color-moss-400` — accents, highlights
- **Sunset orange** (accent): `--color-sunset-400/500/600` — sale badges, CTAs
- **Stone** (neutral): `--color-stone-50` to `--color-stone-900` — backgrounds, text, borders

**Typography**: Inter font family (400, 500, 600, 700 weights), loaded from `fonts.googleapis.cn`.

**Design reference**: See `DESIGN.md` at project root for full brand/design guidelines.

## Data Models & E-Commerce Readiness

All data is defined in `src/data/products.ts` with types in `src/types/index.ts`.

**Product model** includes fields needed for future e-commerce:
- `id`, `slug`, `name`, `tagline`, `description`
- `price`, `compareAtPrice` (for sale pricing)
- `category` (backpacking / family-camping / expedition / shelter)
- `images[]` (primary + gallery)
- `specs[]` (key-value pairs)
- `features[]`
- `capacity`, `weight`, `seasons`
- `badges` (New / Best Seller / Sale)
- `inventory`
- `createdAt`

**To add e-commerce later:**
1. Add `/src/app/products/[slug]/page.tsx` for individual product pages (data model already supports it)
2. Add a cart context/store (`src/context/cart-context.tsx`)
3. Add a cart page (`src/app/cart/page.tsx`)
4. Add checkout flow
5. The `ProductCard`, product data model, and category system are already reusable

## Key Components

### Navbar (`src/components/navbar.tsx`)
- Fixed position, scroll-aware (transparent on hero, solid after scroll)
- Desktop nav + mobile hamburger menu
- Active link highlighting
- "Shop Tents" CTA button

### Footer (`src/components/footer.tsx`)
- 4-column layout (brand + 3 link columns)
- Contact info (email, phone, address)
- Social media links
- Copyright + legal links

### ProductCard (`src/components/product-card.tsx`)
- Image with hover zoom effect
- Badges (New, Best Seller, Sale)
- Product name + tagline
- Quick specs (capacity, weight, seasons)
- Price with strike-through for sale items
- Responsive grid-ready

## Pages

### Home (`/`)
- Full-height hero with gradient overlay + CTA buttons
- Featured products (3 best-selling/new items)
- Value propositions (4 cards: warranty, field-tested, sustainable, free shipping)
- CTA banner section

### Products (`/products`)
- Category, capacity, and season filter sidebar (static, client interactivity can be added)
- Product grid (3 col desktop, 2 col tablet, 1 col mobile)
- Sort dropdown
- Sticky sidebar on desktop

### About (`/about`)
- Hero banner
- Company story with founder image + stats
- Mission & values (4 value cards)
- Milestone timeline
- Team grid (4 members)
- Newsletter signup CTA

### Contact (`/contact`)
- Hero header
- Contact info sidebar (email, phone, address, hours, social)
- Contact form (name, email, subject, message)
- FAQ section
- Boulder showroom map/image strip

## SEO Configuration

- All pages use `export const dynamic = 'force-static'` for SSG
- Per-page `metadata` exports for title + description
- OpenGraph + Twitter cards configured in root layout
- `metadataBase` set to canonical domain
- Robots.txt configured

## Adding New Products

1. Add a new object to the `products` array in `src/data/products.ts`
2. Add the primary image to `public/tents/<slug>.jpg`
3. The product automatically appears on the Products page and in relevant categories

## Development Notes

- **Hydration safety**: No `typeof window` or `Date.now()` in render logic; use `'use client'` + `useEffect`
- **Image optimization**: All images use Next.js `<Image>` component with proper `sizes` attributes
- **Accessibility**: Semantic HTML, alt text on all images, ARIA labels on icon buttons
- **Performance**: SSG + code splitting + image optimization built-in
- **Fonts**: Inter loaded via Google Fonts (`.cn` domain for CN performance) in `globals.css`

## Image Assets

All placeholder images are stored in `public/`:
- `public/hero/` — Hero and CTA background images
- `public/tents/` — Product photography (6 tents)
- `public/about/` — About page imagery
- `public/team/` — Team member headshots
- `public/contact/` — Contact page imagery
- `public/og/` — Open Graph share image

Regenerate all images with: `bash scripts/generate-images.sh`
