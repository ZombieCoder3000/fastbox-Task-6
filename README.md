# FastBox App

Frontend foundation for FastBox: Next.js (pages router), TypeScript, styled-components, Tailwind CSS and Redux Toolkit. The structure follows the previous project (FastboxAdmin) and the setup guide (`FASTBOX_SETUP_GUIDE.pdf`).

## Getting started

```bash
nvm use
yarn install
cp .env.example .env
yarn dev
```

Never commit `.env` or share real keys.

## Structure

```
public/                          fonts/, images/ (served statically)
src/
  assets/                        icons/, images/ (imported assets)
  components/
    common/                      button, input, card, badge, modal, data-table, page-title
    navigation/                  sidebar
    layout/                      main-layout, auth-layout, dashboard-layout
  constants/                     app, breakpoints, routes
  hooks/                         useWindowSize
  infrastructure/
    common/                      gen (helpers), storage
    services/api/                API base configuration
    services/interface/          shared TypeScript types
  navigation/                    nav-items, route-layouts
  pages/                         _app, _document, index, auth/*, dashboard
  redux/                         store, hooks, create-slices, store-provider
  slices/                        general.slice
  style/                         theme, globalStyle, device, wrapper, text, btn, input, popup, table, badge, nav, global.css
```

## Styling rules

- No `div` elements. Build wrappers as styled components on semantic elements (`section`, `article`, `header`, `aside`, `nav`, `main`, `footer`). ESLint enforces this through `react/forbid-elements`.
- No stylesheets other than `src/style/global.css`, which only holds the Tailwind directives.
- styled-components for shared and reusable styles, Tailwind classes through `className` for additional styling.

## Responsive behaviour

| Device  | Width        | Layout                                                    |
| ------- | ------------ | --------------------------------------------------------- |
| Mobile  | < 768px      | Off-canvas sidebar drawer, sticky toolbar with menu button |
| Tablet  | 768 – 1023px | Off-canvas sidebar drawer, wider container spacing        |
| Desktop | >= 1024px    | Persistent sticky sidebar, toolbar hidden                 |

Breakpoints are defined in `src/constants/breakpoints.ts` and match Tailwind's `sm`, `md`, `lg` and `xl`.

## Layouts

`src/navigation/route-layouts.ts` maps routes to layouts, applied in `_app.tsx`:

- `/` : `MainLayout`
- `/auth/*` : `AuthLayout`
- `/dashboard/*` : `MainLayout` > `DashboardLayout` (nested)

## Scripts

`yarn dev` · `yarn build` · `yarn start` · `yarn lint` · `yarn type-check` · `yarn format`
