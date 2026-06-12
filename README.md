# Spline-Labs

Spline Theory Research Official Website

## Overview

Spline-Labs is an academic website dedicated to spline mathematics research, focusing on B-spline, NURBS, and subdivision surface theories.

## Project Planning

### Website Goals

- **Purpose**: Showcase spline theory research achievements, promote academic collaboration
- **Target Users**: Math researchers, university faculty/students, CAD/CAM engineers, technology enthusiasts

### Content Structure

| Page | Description |
|------|-------------|
| Home | Lab introduction, research areas, recent publications |
| About | Lab history, mission, vision, team members |
| Research | B-Spline, NURBS, Subdivision Surfaces, IGA, Curve Fitting, Applications |
| Publications | Papers, journals, patents |
| Resources | Open source code, tutorials, datasets |
| Contact | Job openings, collaboration opportunities |

### Design Specifications

- **Color Scheme**:
  - Light mode: Deep blue primary (#1a365d), orange accent (#ed8936)
  - Dark mode: Deep blue-black (#0d1b2a), lighter blue (#1b263b)
- **Typography**: Inter (sans-serif)
- **Animations**: Spline curve canvas animation, fade-in effects

### Features

- Dark/Light mode toggle (persisted via localStorage)
- English/Chinese language support (default: English)
- Responsive design (mobile-friendly)

## Tech Stack

- **Framework**: Astro 4.x
- **Styling**: CSS with CSS variables
- **Deployment**: GitHub Pages

## Development

```bash
# Install dependencies
npm install

# Start dev server
npm run build

# Build production
npm run build
```

## Deployment

Push to `main` branch. GitHub Actions will automatically build and deploy to GitHub Pages.

## Page Routes

| Route | Description |
|-------|-------------|
| `/` | Home (English) |
| `/zh/` | Home (Chinese) |
| `/about` | About (English) |
| `/zh/about` | About (Chinese) |
| `/research` | Research (English) |
| `/zh/research` | Research (Chinese) |
| `/publications` | Publications (English) |
| `/zh/publications` | Publications (Chinese) |
| `/resources` | Resources (English) |
| `/zh/resources` | Resources (Chinese) |
| `/knot-removal` | Knot Removal Tool (English) |
| `/zh/knot-removal` | Knot Removal Tool (Chinese) |
| `/contact` | Contact (English) |
| `/zh/contact` | Contact (Chinese) |

## Maintenance Notes

- Content is managed in `src/i18n/translations.ts`
- Global styles in `src/styles/global.css`
- Layout component in `src/layouts/Layout.astro`
- Dark mode uses CSS variables: `--color-primary`, `--color-bg`, etc.

### GitHub Pages Source Setting

Ensure **Settings → Pages → Build and deployment → Source** is set to **GitHub Actions**. The default "Deploy from a branch" uses Jekyll which will fail on `.astro` files' YAML front matter.

### Knot Removal Interactive Tool

The `/knot-removal/` page embeds a standalone B-spline knot removal web app built with Vite + Three.js + WASM.

**Source repo**: `H:\knot_removal\web-app-fable5` (not in this repo)

**Rebuild procedure**:
1. Modify source in `H:\knot_removal\web-app-fable5\src\`
2. Run `npm run build` in that directory
3. Copy `dist\` contents to `public\knot-removal-app\` in this repo
4. Run `npm run build` to verify, then commit and push

**Important**: The `vite.config.ts` base path must be `/knot-removal-app/` to match the public directory name.

**Known issue**: GitHub Pages gzip-compresses `.bspl` binary preset files, so the `fetchBspl()` streaming reader must use dynamic chunk accumulation rather than a fixed-size buffer keyed to `Content-Length`.
