# MedicalExpertSystemmaster

# Medical Expert System

A front-end application that helps users explore common diseases, their symptoms, descriptions, and suggested treatments. The project includes a simple diagnosis engine and a collection of disease data files to drive the UI.

## Features

- Browse disease descriptions, symptoms, and treatments
- Interactive symptom selector to help narrow likely conditions
- Lightweight diagnosis engine implemented in `lib/diagnosis-engine.ts`
- Clean React/Next.js + TypeScript UI components located in `components/`

## Local development

Prerequisites:

- Node.js (16+ recommended)
- pnpm (optional; `npm` or `yarn` also work)

Install dependencies:

```pwsh
pnpm install
# or using npm
npm install
```

Run the development server:

```pwsh
pnpm dev
# or using npm
npm run dev
```

Open `http://localhost:3000` in your browser to view the app.

## Project structure (high level)

- `app/` — Next.js app routes and pages
- `components/` — Reusable UI components and small widgets
- `lib/` — Core logic such as `diagnosis-engine.ts` and `disease-data.ts`
- `Disease descriptions/`, `Disease symptoms/`, `Disease treatments/` — Plain text data files used by the app
- `public/` — Static public assets

## Notes about the repository

- This repository contains data files used to render disease information and a small React/Next.js interface to explore that data. There are no external deployment badges or links in this README.

## Testing and verification

- Run the app locally and navigate the symptom flow to verify diagnosis behavior.
- Inspect `lib/diagnosis-engine.ts` to review matching logic or adjust rules.
