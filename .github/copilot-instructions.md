# Copilot Instructions for AI Agents

## Project Overview
This is a Vue 3 + Vite project using TypeScript, Pinia for state management, and Vue Router for navigation. The codebase is organized for modularity and clarity, with a focus on single-file components and explicit routing.

## Architecture & Key Patterns
- **Entry Point:** `src/main.ts` initializes the app, sets up routing (`vue-router`), and state management (`pinia`).
- **Routing:**
  - All routes are defined in `src/main.ts`.
  - Nested routes are used for news details (`/news/detail/:id/:title/:content`).
  - Example: `NewsPage.vue` links to `NewDetail.vue` using both path and named routes.
- **State Management:**
  - Pinia store is defined in `src/store/user.ts`.
  - Store includes state, actions (`login`, `logout`, `changeUserName`), and getters (`welcomeMsg`, `getUserName`).
  - Use `storeToRefs` for reactive access in components.
- **Components:**
  - Main pages: `HomePage.vue`, `AboutPage.vue`, `NewsPage.vue`, `NewDetail.vue`.
  - Icons are in `src/components/icons/`.
  - `App.vue` demonstrates store usage and login flow.
- **Styling:**
  - Global styles: `src/assets/main.css`, `src/assets/base.css`.
  - Scoped styles in components.

## Developer Workflows
- **Install dependencies:**
  ```sh
  npm install
  ```
- **Start development server (hot reload):**
  ```sh
  npm run dev
  ```
- **Build for production:**
  ```sh
  npm run build
  ```
- **Lint code:**
  ```sh
  npm run lint
  ```
- **Type checking:**
  - Use `vue-tsc` for `.vue` file type checks (not plain `tsc`).
  - Volar extension recommended for VS Code.

## Conventions & Patterns
- **TypeScript:**
  - All logic in components and stores uses TypeScript.
  - Use `lang="ts"` in `<script setup>` blocks.
- **Routing:**
  - Prefer named routes for navigation with params.
  - Children routes for nested views (see NewsPage).
- **State:**
  - Use Pinia actions for mutations, not direct state changes in components.
  - Getters provide computed values for UI.
- **Imports:**
  - Use `@/` alias for `src/` in imports.
- **No test setup detected.**

## Integration Points
- **External dependencies:**
  - Vue 3, Vite, Pinia, Vue Router.
- **No backend/API integration present.**
- **No custom build steps or nonstandard scripts.**

## Examples
- **Store usage in `App.vue`:**
  ```ts
  import {userStore} from '@/store/user';
  const user = userStore();
  user.login('Kuei');
  const msg = user.welcomeMsg;
  ```
- **Route definition in `main.ts`:**
  ```ts
  {path:"/news",component:NewsPage,name:'news',
    children:[{name:'newsDetail',path:"detail/:id/:title/:content",component:()=>import('./components/NewDetail.vue')}]
  }
  ```

## Key Files & Directories
- `src/main.ts` (app entry, routing)
- `src/store/user.ts` (Pinia store)
- `src/components/` (main pages, icons)
- `src/assets/` (styles)

---
For questions or unclear conventions, review `README.md` or ask for clarification.
