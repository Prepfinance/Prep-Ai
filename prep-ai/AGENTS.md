# Prep AI Agent Rules (UI-only Phase)

## Goal (Phase A)
Build a premium dashboard UI for Prep AI (Next.js + TS + Tailwind).
UI only: no backend, no auth, no databases, no AWS services yet.

## Non-goals (Do NOT do these)
- Do not add Amplify backend resources
- Do not add auth
- Do not add API calls
- Do not add payments
- Do not add external libraries unless explicitly requested

## Style
- Modern, minimalist, premium fintech aesthetic
- Soft shadows, rounded corners, subtle borders
- Smooth micro-interactions (hover, focus, small transitions)
- Consistent spacing, typography hierarchy

## Tech constraints
- Next.js App Router
- TypeScript
- Tailwind
- Use mock data in `/src/lib/mock.ts` (create if missing)

## Output
- Dashboard route at `/dashboard`
- Reusable components under `/src/components`
- Layout shell (sidebar + topbar) reusable across dashboard pages

## Must-run checks after changes
- `npm run build`
- `npm run lint`
