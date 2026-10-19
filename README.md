# Akshaya B — Portfolio

Personal portfolio for Akshaya B, a Computer Science and Engineering (CSE)
student specializing in Artificial Intelligence and Machine Learning at PES
University, Bengaluru. AI/ML is the primary focus; frontend development is an
additional skill.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) while the development
server is running.

## Project structure

- `app/page.tsx` composes the server-rendered portfolio sections.
- `app/components/` contains the portfolio sections, mobile navigation,
  email-copy control, and pointer-responsive neural-field visual.
- `app/portfolio-data.ts` holds project, skills, education, and milestone
  content.
- `app/globals.css` defines the responsive visual system and motion preferences.
- `public/` contains the portrait, authentic project and event images, and
  downloadable résumé. Project captures are included for AI RiskGuard,
  ClothAI, and the SDN firewall; other project visuals are clearly labeled
  conceptual illustrations, not application screenshots.

## Checks

```bash
npm run lint
npx tsc --noEmit
npm run build
```
