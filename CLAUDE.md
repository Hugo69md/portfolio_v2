# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A personal portfolio website for Hugo Manipoud (Automation & Data Engineer). The site is a static React SPA deployed to GitHub Pages — there is no active backend; the FastAPI/MongoDB backend in `backend/` is scaffolding that is not used by the deployed site.

## Commands

All commands run from the `frontend/` directory. The project uses **yarn** and **craco** (not plain react-scripts).

```bash
# Install dependencies
cd frontend && yarn install

# Dev server (http://localhost:3000)
cd frontend && yarn start

# Production build (outputs to frontend/build/)
cd frontend && yarn build

# Run tests
cd frontend && yarn test
```

Deployment is automated via GitHub Actions (`.github/workflows/deploy-pages.yml`) on every push to `main`. It builds with `CI=false` to avoid treating warnings as errors.

## Architecture

This is a **frontend-only** portfolio. All content lives in mock data — there are no API calls at runtime.

### Routing

`HashRouter` is used (not `BrowserRouter`) because GitHub Pages doesn't support server-side routing. URLs look like `/#/projects`, `/#/project/:id`.

Routes defined in `frontend/src/App.js`:
- `/` → `Landing` — hero, category filters, project grid, skills
- `/projects` → `Projects` — full filterable project list
- `/project/:id` → `ProjectDetail` — individual project page
- `/profile` → `Profile` — bio, experience, education
- `/contact` → `Contact` — contact form (UI only, no backend)

### Data

**All portfolio content is in `frontend/src/data/mock.js`** — this is the single source of truth for projects, profile info, skills, categories, and experience. To add or modify a project, edit this file.

Each project object has:
- `id`, `title`, `categories[]`, `tags[]`, `year`, `featured`
- `description` (long), `shortDesc` (card), `context`, `projectDetail`, `results`
- `images[]`, `sections[]` (with nested images/descriptions/codeOutput), `githubLinks[]`

Categories use icon name strings that map to either lucide-react icons or custom SVG icons in `frontend/src/components/CustomIcons.jsx`.

### UI Stack

- **shadcn/ui** components in `frontend/src/components/ui/` — do not modify these directly; they are generated. Add new shadcn components via the CLI if needed.
- **Tailwind CSS** with CSS variables for theming (dark mode class-based). Theme tokens defined in `frontend/src/index.css`.
- **lucide-react** for icons; custom icons (Spider, PythonLogo, PipesIcon) in `CustomIcons.jsx`.

### Path Aliases

`@/` maps to `frontend/src/` (configured in `craco.config.js` and `jsconfig.json`).

### Backend (unused in production)

`backend/server.py` is a FastAPI app with MongoDB (via motor). It requires `MONGO_URL` and `DB_NAME` environment variables in `backend/.env`. It is not called by the frontend and not deployed.
