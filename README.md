# MultiPlex - TMDB Movie Explorer 🎬

[![Live Demo](https://img.shields.io/badge/Live_Demo-GitHub_Pages-blue?logo=github)](https://shubhrankr.github.io/multiplex/#/login)

**MultiPlex** is a modern single-page web application for discovering and exploring your favorite movies and TV shows, powered by **[The Movie Database (TMDB) API](https://www.themoviedb.org/)**.

The project features a sleek **Neumorphic design system**, fully updated to **Angular 19+** utilizing **Standalone Components**, **Angular Signals**, and **Modern Template Control Flow**.

🌐 **Live Application URL**: [https://shubhrankr.github.io/multiplex/#/login](https://shubhrankr.github.io/multiplex/#/login)

---

## 🔑 Demo & Testing Credentials

For quick local testing and exploration of the application features:

- **Username:** `admin`
- **Password:** `admin`

*(Note: The login page includes a built-in "Auto-fill Credentials" helper button for instant access).*

---

## ⚡ Modernization & Key Architectural Upgrades

### 1. **Angular 19+ Standalone Architecture**
- Removed legacy `NgModules` (`AppModule`, `SharedModule`, `LayoutModule`, etc.).
- Standardized all application components as `standalone: true`.
- App initialization updated to modern `bootstrapApplication(AppComponent, appConfig)`.

### 2. **Angular Signals (`signal()`, `input()`, `output()`)**
- **Authentication State**: `AuthService` tracks login state using Angular `signal<boolean>()` instead of RxJS `BehaviorSubject`.
- **Form State**: `LoginComponent` manages input values reactively via signals (`userName`, `userPassword`, error state flags).
- **Component Inputs & Outputs**:
  - `MovieCardComponent` uses signal inputs: `movie = input.required<MovieDetailModel>()`, `maxWidth = input<string>()`.
  - `SearchBarComponent` uses signal outputs: `outputtingSearchKeyword = output<string>()`.
- **Movie Filtering & Loading**: `MoviesComponent` and `AboutMovieComponent` utilize writable signals for dataset filtering and loading placeholders.

### 3. **Modern Control Flow (`@if`, `@else`, `@for`)**
- Converted template conditional logic and loops from legacy directives (`*ngIf`, `*ngFor`) to native Angular control flow blocks (`@if`, `@else`, `@for ... track`).

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- npm (v9+)

### Installation & Execution

1. **Clone the Repository:**
   ```bash
   git clone git@github.com:ShubhrankR/multiplex.git
   cd multiplex
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Start Development Server:**
   ```bash
   npm start
   ```
   Navigate to `http://localhost:4200/`.

4. **Build for Production:**
   ```bash
   npm run build
   ```

---

## 🛠️ Tech Stack & Resources
- **Angular 19+**
- **TypeScript 5.6+** & **RxJS 7.8**
- **[The Movie Database API](https://developers.themoviedb.org/3/)**
- **Neumorphism Design System** ([neumorphism.io](https://neumorphism.io/#e0e0e0))
- **ngx-toastr** for notifications

---

## 📜 License
This project is open-source under the MIT License.
