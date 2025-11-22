## EEXI Performance Playbook

An executive-ready web presentation that outlines the Energy Efficiency Existing Ship Index (EEXI) strategy for existing fleets. The experience highlights regulatory pressure, technical retrofit options, operational intelligence, and the investment case for accelerating compliance.

### Stack
- Next.js (App Router, TypeScript)
- Tailwind CSS with custom theme accents

### Local Development
```bash
npm install
npm run dev
```
Visit http://localhost:3000 to view the interactive presentation.

### Production Checks
```bash
npm run lint
npm run build
```

### Structure
- `src/app/page.tsx` – Presentation layout and interactive content
- `src/app/globals.css` – Global theme, gradients, and typography adjustments
- `src/app/layout.tsx` – Metadata and font wiring
