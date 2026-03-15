# CleanPro — Xalça & Mebel Təmizləmə Veb Saytı

Professional carpet and furniture cleaning company website for Baku, Azerbaijan.

## Tech Stack
- **Vite 5** — Build tool
- **React 18** — UI Framework  
- **TypeScript** — Type safety
- **SCSS Modules** — Component-scoped styles
- **React Router v6** — Client-side routing

## Pages
| Route | Page |
|-------|------|
| `/` | Ana səhifə (Home) |
| `/haqqimizda` | Haqqımızda (About) |
| `/xidmetlerimiz` | Xidmətlərimiz (Services) |
| `/qiymetler` | Qiymətlər (Prices) |
| `/elaqe` | Əlaqə (Contact) |

## Project Structure
```
src/
├── components/
│   ├── Navbar/         # Sticky, transparent→scrolled navbar
│   ├── Footer/         # 4-column footer
│   └── ServiceCard/    # Hover-animated service card
├── pages/
│   ├── Home/           # Hero, Services, WhyUs, Process, Reviews, CTA
│   ├── About/          # Story, Stats, Team
│   ├── Services/       # Full 6-service grid
│   ├── Prices/         # Pricing tables
│   └── Contact/        # Form + map + contact info
└── styles/
    ├── variables.scss  # Design tokens
    └── global.scss     # Reset + utilities
```

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Design Features
- **Typography**: DM Serif Display (headings) + Plus Jakarta Sans (body)
- **Colors**: Deep forest green `#1a9c5b` primary, white bg, dark `#0d1f16` text
- **Navbar**: Transparent on hero, frosted glass on scroll, mobile hamburger menu
- **Animations**: Floating hero card, hover lift on service cards, image zoom effect
- **Responsive**: 3-col → 2-col → 1-col grid breakpoints
- **Premium UI**: Gradient hero, glassmorphism cards, radial glows, soft shadows
