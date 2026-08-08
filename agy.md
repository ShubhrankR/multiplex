# Antigravity AI Project Context & Guidelines 🚀

This document provides project context, technical architecture, and operational guidelines for **Antigravity AI** assistants working on the **MultiPlex** codebase.

---

## 📌 Project Overview

**MultiPlex** is a modern web application for discovering and exploring movies and TV shows, powered by **[The Movie Database (TMDB) API](https://www.themoviedb.org/)**.

### Technical Stack & Architecture
- **Framework**: Angular 19+ (TypeScript 5.6+, RxJS 7.8, zone.js 0.15)
- **Architecture**: 100% **Standalone Components** (`bootstrapApplication` in `src/main.ts`, `appConfig` in `src/app/app.config.ts`, `routes` in `src/app/app.routes.ts`).
- **State Management**: **Angular Signals** (`signal()`, `computed()`, `input()`, `output()`) across services and components.
- **Control Flow**: Modern template control flow blocks (`@if`, `@else`, `@for ... track`).
- **Styling**: SCSS with the **Sass Module System** (`@use "src/assets/styles/variables" as *;`) following a **Neumorphic design system**.
- **Deployment**: Automated GitHub Pages deployment via **GitHub Actions** (`.github/workflows/deploy.yml`).
- **Live Demo**: [https://shubhrankr.github.io/multiplex/#/login](https://shubhrankr.github.io/multiplex/#/login)
- **Test Credentials**: `admin` / `admin`

---

## ⚠️ Mandatory AI Agent Rules

### 1. **NEVER PUSH CODE WITHOUT EXPLICIT PERMISSION**
> [!CAUTION]
> **CRITICAL RULE**: The AI assistant MUST NEVER execute `git push` or attempt to push any branch/commit to remote repositories without receiving explicit permission and confirmation from the author / user.

### 2. **Maintain Standalone & Signals Conventions**
- Do NOT re-introduce legacy `NgModules`. All components, directives, and pipes must be created as `standalone: true`.
- Use Angular Signals (`signal()`, `input()`, `output()`) for reactive state management, component inputs, and event outputs.
- Prefer native template control flow (`@if`, `@else`, `@for ... track`) over legacy structural directives (`*ngIf`, `*ngFor`).

### 3. **Preserve Sass Module Standard (`@use`)**
- Do NOT use deprecated `@import` statements in SCSS stylesheets. Always use `@use "src/assets/styles/variables" as *;`.

### 4. **Verification & Quality Assurance**
- Always run `npm run build` to verify clean compilation with 0 errors and 0 warnings before concluding any technical task.
