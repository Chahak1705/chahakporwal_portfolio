# Chahak Porwal — Portfolio (Next.js)

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Structure

- `data/resume.js` — all real content (name, experience, projects, skills). Edit this file to update text/data; no need to touch component markup.
- `components/Portfolio.jsx` — page layout, nav, hero, and all sections.
- `components/HeroCanvas.jsx` — ambient drifting-gradient background behind the hero.
- `components/Reveal.jsx` — scroll-triggered fade/slide-up wrapper (IntersectionObserver).
- `components/CountUp.jsx` — animated stat counters.
- `components/SkillBar.jsx` — animated skill progress bars.
- `components/Timeline.jsx` — experience timeline with scroll-fill progress line.
- `components/ProjectsGrid.jsx` — filterable, expandable project cards.
- `components/ContactForm.jsx` — opens the visitor's email client pre-filled (no backend/server needed).
- `app/globals.css` — all styling and animation keyframes (design tokens at the top as CSS variables).

## Before deploying — things to update

1. **Photo**: swap the placeholder circle in the About section for a real headshot.
2. **Social links**: `data/resume.js` → `profile.github` and `profile.linkedin` are placeholders.
3. **Project links**: each project in `data/resume.js` has `repo` and `demo` set to `#` — add real URLs.
4. **Skill percentages**: `skillGroups` in `data/resume.js` were estimated from your resume — adjust if any feel off.

## Deploy

Push to GitHub and import the repo on [Vercel](https://vercel.com/new) — zero config needed, it's a standard Next.js App Router project.
