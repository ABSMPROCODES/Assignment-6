# FitLog — Workout Library & Gym Companion

FitLog is a dark-themed, responsive web application built to help users browse gym exercises, inspect key lifting specs, build a daily workout plan, and keep track of overall volume, time, and calories in real time.

---

## Live Demo & Repository

- **Live Web App:** [https://assignment-6-6ofn.vercel.app/](https://assignment-6-6ofn.vercel.app/)
- **GitHub Repository:** [Insert Your GitHub Repository Link Here]

---

## What the App Does

FitLog functions as a digital gym log where you can filter and manage your training sessions seamlessly across mobile, tablet, and desktop screens.

### Key Features

1. **Responsive Navbar with Dynamic Counters**
   - Direct navigation to Home (Workout Library) and My Plan pages.
   - Live badge indicators showing the exact number of exercises added to **Today's Plan** and **Saved** list.

2. **Hero / Banner Section**
   - Direct CTA button ("BROWSE WORKOUTS") that smoothly scrolls down to the workout grid on the same page without forcing a route change.

3. **Workout Library with Real-Time Sorting**
   - Displays exercises in a responsive grid layout.
   - Sorting dropdown allowing users to re-order lifts dynamically by **Duration**, **Calories**, or **Rating**.

4. **Detailed Exercise Pages**
   - Two-column detail page layout breaking down targeted categories, step-by-step instructions, and key specs (Equipment, Difficulty, Sets, Reps, Duration, Calories, and Rating).
   - Action buttons to either add the lift directly into today's log or save it for later, paired with instant toast feedback.

5. **My Plan Dashboard (`/my-plan`)**
   - Live **Metrics Summary** tracking total exercises, estimated total minutes, and total caloric burn as items are updated.
   - Tab switching between **Today's Plan** and **Saved** workouts.
   - Interactive card controls allowing users to mark exercises as completed ("Mark as Done") or remove them entirely from the log.
   - Dedicated empty states when no lifts are active.

6. **Error Handling & UX Polish**
   - Custom **404 page** for undefined routes.
   - Loading state feedback during API data fetching.
   - Safe client-side route handling to prevent errors when reloading pages on deployment.

---

## Tech Stack

- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **State Management:** React Context API (`Workcontext`)
- **UI & Feedback:** React Toastify
- **Deployment:** Vercel

---

## Running Locally

1. Clone the repository:
   ```bash
   git clone [https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git](https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git)
   cd YOUR_REPOSITORY

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
