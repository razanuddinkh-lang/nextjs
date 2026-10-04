# 🏋️ FitLog — Workout Library

FitLog is a responsive workout library web application built with Next.js and TypeScript. It allows users to explore workouts, view detailed exercise information, create a personal workout plan, save workouts for later, and track completed exercises.

## 🚀 Technologies Used

* **Next.js** — React framework with App Router
* **TypeScript** — Type-safe JavaScript
* **Tailwind CSS** — Utility-first styling
* **DaisyUI** — UI components and styling utilities
* **React Toastify** — Toast notifications
* **Context API** — Global state management
* **LocalStorage** — Persisting plans, saved workouts, and completed workouts
* **REST API** — Fetching workout data

## ✨ Key Features

### 1. 📚 Workout Library

Browse a collection of workouts with images, muscle groups, equipment, difficulty, duration, calories, and ratings.

### 2. 🔎 Workout Details

View complete workout information, including description, equipment, difficulty, sets, reps, calories, rating, and step-by-step instructions.

### 3. 📋 Personal Workout Plan

Add workouts to **Today's Plan** and manage your selected exercises in one place. Users can add up to 5 workouts to their plan.

### 4. ❤️ Save & Track Workouts

Save workouts for later and mark completed workouts as **Done**. Plan, saved, and completed workout data is preserved using LocalStorage.

### 5. 🔃 Sorting & Responsive Design

Sort workouts by **Duration, Calories, or Rating**. The application is fully responsive and optimized for mobile, tablet, and desktop screens.

## 📁 Project Structure

```text
src/
├── app/
│   ├── my-plan/
│   ├── workout/
│   │   └── [id]/
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   └── not-found.tsx
│
├── components/
│   ├── Footer.tsx
│   ├── Navbar.tsx
│   ├── PlanCard.tsx
│   ├── SortSelect.tsx
│   ├── WorkoutCard.tsx
│   └── ...
│
├── context/
│   └── AppProvider.tsx
│
├── lib/
│   └── api.ts
│
└── types/
    └── workout.ts
```

## ▶️ Getting Started

Clone the repository:

```bash
git clone https://github.com/razanuddinkh-lang/Assignment-6.git
```

Go to the project directory:

```bash
cd Assignment-6
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open your browser and visit:

```text
http://localhost:3000
```

## 🏗️ Production Build

Create a production build:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

## 🌐 Live Project

The project can be deployed using **Vercel** for production hosting.

---

© 2026 FitLog — Workout Library. Train hard, log honest.
