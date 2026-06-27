# DESIGN.md — Beaconherm Limited

## Brand & Product Context
- **Brand**: Beaconherm Limited — an outdoor tent brand targeting the US market
- **Product category**: Premium outdoor tents (backpacking, family camping, expedition)
- **Audience**: Hikers, campers, backpackers, families, and outdoor enthusiasts across the United States
- **Tone**: Trustworthy, rugged, inspiring, modern, clean

## Design Tokens

### Color Palette
Brand anchor: **forest green + mountain stone + sunset orange** — evokes national parks, pine forests, and campfire glow.

| Token | Value | Purpose |
|-------|-------|---------|
| `--color-forest-900` | `#0f2a1f` | Dark green hero backgrounds, footer |
| `--color-forest-800` | `#1a3d2e` | Primary deep green |
| `--color-forest-700` | `#23533e` | Hover states, accents |
| `--color-forest-600` | `#2d6a4f` | Primary brand green (buttons, CTAs) |
| `--color-forest-500` | `#40916c` | Lighter accent |
| `--color-moss-400` | `#74c69d` | Soft green highlights |
| `--color-stone-50` | `#f8f7f4` | Off-white background (page base) |
| `--color-stone-100` | `#efece6` | Subtle card backgrounds |
| `--color-stone-200` | `#ddd8cc` | Dividers, borders |
| `--color-stone-500` | `#6b7280` | Muted text |
| `--color-stone-800` | `#1f2937` | Body text, dark sections |
| `--color-stone-900` | `#111827` | Headings, dark mode |
| `--color-sunset-500` | `#e67e22` | Accent CTA, badges, highlights |
| `--color-sunset-400` | `#f39c12` | Hover accent |
| `--color-sky-200` | `#bae6fd` | Subtle sky accent (hero gradient) |

**Primary pair**: forest green (`#2d6a4f`) on stone off-white (`#f8f7f4`) — classic outdoor gear catalog feel.
**Accent**: sunset orange (`#e67e22`) for CTAs and "Sale" / "New" badges — campfire / trail marker vibe.

### Typography
- **Headings**: `Inter` (600 / 700 weight) — strong, modern, clean sans-serif
- **Body**: `Inter` (400 / 500 weight) — excellent readability for product descriptions
- **Display / Brand wordmark**: custom-styled `Inter` with slightly wider letter-spacing for "Beaconherm"
- Use `fonts.googleapis.cn` domain per performance best practice

### Spacing & Radius
- Base spacing scale: standard Tailwind (4px base)
- Radius: `rounded-lg` for cards, `rounded-xl` for hero images, `rounded-full` for badges and small buttons
- Shadow: soft `shadow-md` for cards, `shadow-xl` for elevated elements on hover

### Imagery Direction
- Wide, cinematic outdoor photography: mountain ranges, forests at golden hour, tents pitched by lakes
- Product shots: clean white or natural-setting backgrounds, tents fully pitched
- Mood: adventurous yet peaceful — the feeling of waking up in nature

### Motion & Interaction
- Buttons: subtle scale + shadow on hover (150ms ease-out)
- Cards: lift on hover with slight shadow increase
- Page transitions: fade-in on scroll (Intersection Observer)
- Hero: parallax-lite background image with gradient overlay

## Pages & Layout
1. **Home** — full-height hero with brand statement → featured products → value props → CTA
2. **Products** — filter sidebar + product grid (3 col desktop, 2 col tablet, 1 col mobile)
3. **About** — story / mission / values / team section
4. **Contact** — form + contact info + social links

## E-Commerce Readiness
Data models for products (id, slug, name, price, compareAtPrice, images, specs, category, tags, inventory) are structured so a cart + checkout layer can be added later without rewriting components.
