# AGENTS.md - Antigravity AI Project Instructions & Context 🚀

This document defines the technical architecture, design system, mandatory rules, and operational guidelines for **Antigravity AI** assistants working on the **MultiPlex** codebase.

---

## 📌 Project Summary

**MultiPlex** is a single-page web application for discovering and exploring movies and TV shows powered by **[The Movie Database (TMDB) API](https://www.themoviedb.org/)**. It features a modern **Neumorphic design system**, built with **Angular 19+**, **Standalone Components**, and **Angular Signals**.

### 🌐 Key Links & Live Demo
* **Live Demo**: [https://shubhrankr.github.io/multiplex/#/login](https://shubhrankr.github.io/multiplex/#/login)
* **Test Credentials**: `admin` / `admin`
* **Framework**: Angular 19+
* **Styling**: SCSS with Neumorphic Design System (`@use` Sass modules)
* **Output Path**: `docs/` (for GitHub Pages hosting)

---

## 🏗️ Technical Architecture & Directory Structure

```
/home/shubhrank_rastogi/WORKSPACE/PROJECTS/my_projects/multiplex/
├── src/
│   ├── app/
│   │   ├── components/         # Standalone UI components (Navbar, MovieCard, SearchBar, etc.)
│   │   ├── pages/              # Standalone route pages (Login, Movies, MovieDetails, About)
│   │   ├── services/           # AuthService, TmdbService (Signals-driven state)
│   │   ├── models/             # TypeScript Interfaces (MovieDetailModel, MovieListModel, etc.)
│   │   ├── app.config.ts       # Application providers & HashLocationStrategy router config
│   │   ├── app.routes.ts       # Standalone route definitions
│   │   └── app.component.ts    # Root layout component
│   ├── assets/
│   │   └── styles/             # Neumorphic SCSS design tokens & variables
│   ├── styles.scss             # Global SCSS stylesheet
│   └── main.ts                 # Application entry point (bootstrapApplication)
├── docs/                       # Production build output directory for GitHub Pages
├── angular.json                # Angular CLI config (outputPath set to "docs")
└── package.json                # Project dependencies & scripts
```

---

## ⚠️ Mandatory AI Rules & Coding Directives

### 1. 🔒 Git & Security Rules
> [!CAUTION]
> **NEVER EXECUTE GIT PUSH**: AI assistants MUST NEVER execute `git push` or attempt to push any commits/branches to remote repositories without receiving explicit permission and confirmation from the author / user.

### 2. 🟢 Environment & Build Commands
> [!IMPORTANT]
> Always use Node.js `v24.19.0` via nvm before executing build scripts:
> ```bash
> export NVM_DIR="$HOME/.nvm"
> [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
> nvm use 24.19.0
> npm run build
> ```
> *Note: Build output is generated in `docs/` for GitHub Pages.*

### 3. 🅰️ Angular 19+ & Signals Conventions
* **100% Standalone Components**: Do NOT re-introduce legacy `NgModules`. All components, directives, and pipes must be created as `standalone: true`.
* **Angular Signals**: Use Signals (`signal()`, `computed()`, `input()`, `output()`) for state management, component inputs, and output events.
* **Modern Control Flow**: Always use native control flow blocks (`@if`, `@else`, `@for (movie of movies; track movie.id)`) instead of legacy `*ngIf`/`*ngFor` directives.

### 4. 🎨 Sass Module System (`@use`)
* **No Deprecated `@import`**: Always use `@use "src/assets/styles/variables" as *;` for importing SCSS variables and mixins.
* **Neumorphic UI Consistency**: Retain Neumorphic shadow tokens (`box-shadow`, inset shadows, soft extruded card surfaces).

---

## 🧪 Verification & Quality Control

Before concluding any technical task:
1. Load Node environment `24.19.0`.
2. Run `npm run build`.
3. Confirm that compilation finishes cleanly with **0 errors** and populates `docs/`.
