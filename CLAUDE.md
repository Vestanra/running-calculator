# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Vite dev server at localhost:3000 (npm start is an alias)
npm run build    # production build → /build
npm run preview  # serve the production build locally
npm run lint:js  # ESLint (flat config) over src/
```

## Architecture

React SPA built with **Vite** — a running calculator that computes any one of three values (distance, pace, time) from the other two. The entry point is `src/index.jsx`, loaded by the root `index.html`.

**Core logic lives entirely in `App.jsx`:**
- Three display values: `distance` (string, comma-separated km/m with 2 decimal places e.g. `"21,10"`, `"10,56"`), `pace` (`"M:SS"`), `time` (`"H:MM:SS"`)
- Parallel numeric states (`distanceForFormala`, `paceForformula`, `timeForFormula`) hold the same values converted to km, seconds/km, and seconds respectively
- `lastChanged` tracks which field was last edited; a `useEffect` decides which of the three fields to recalculate based on that flag and which fields are non-zero
- All three fields can be the calculated one: if distance=0 and pace+time are set, distance is calculated
- Results are persisted to `localStorage` under the key `"results"`
- Theme (`"light"` / `"dark"`) is persisted to `localStorage` under the key `"theme"`

**Modal pattern:** Each field (Distance, Pace, Time) has a dedicated modal component (`ModalDistance`, `ModalTemp`, `ModalTime`) opened via `modalIsOpen` prop and closed via `closeModal`. All three use `react-modal` with `ReactModal.setAppElement('#root')`.

**Helper functions** (`src/helpers/`):
- `convertToHMS(seconds)` → `"H:MM:SS"`
- `convertToMS(seconds)` → `"M:SS"`

**Styling:** All styled-components are co-located in `*.styled.js` files next to their component. Global styles in `GlobalStyle.js`.

**Theming:** Light/dark mode via CSS custom properties on `:root` / `[data-theme="dark"]` (set on `<html>`). Variables: `--bg`, `--text`, `--input-bg`, `--border`, `--icon-fill`, `--btn-preset-bg`, `--modal-border`. Toggle is a pill-shaped slider (right-aligned, under header) in `App.jsx`. `TextHeader` always uses `color: #231f20` regardless of theme.

**Quick-select buttons** (`Buttons` component) set preset race distances: 100m, 200m, 400m, 800m, 5km, 10km, 21.1km, 42.2km. Distance strings use 2-digit decimal format (e.g. `"0,10"`, `"21,10"`).

**Build & deploy:** Vite config in `vite.config.js` sets `base: '/running-calculator/'` (GitHub Pages project path) and `build.outDir: 'build'`. CI (`.github/workflows/deploy.yml`) runs `npm ci → lint → build` on push to `main` and publishes `build/` to the `gh-pages` branch. PWA manifest and icons live in `public/` and are copied as-is.

**Module resolution:** imports within `src/` are relative. `jsconfig.json` still sets `baseUrl: "src"` for editor IntelliSense, but Vite resolves via relative paths (no bundler alias configured).

## Formatting

Prettier config (`.prettierrc.json`): single quotes, 2-space indent, trailing commas (ES5), no semicolons omitted (semi: true), arrow parens omitted for single args.
