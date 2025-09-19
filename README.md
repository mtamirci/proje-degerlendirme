# İmalat Model - Educational Scaffold

This repository is a minimal Next.js scaffold prepared to host your interactive financial model as an educational web app for students.

## What's included
- A simple Next.js site (pages) with Tailwind setup hooks.
- `public/imalat.html` — your existing interactive model exported from the project, embedded inside the site via an iframe on `/model`.
- Instructions to run locally and to deploy to Vercel.

## How to run locally

1. Install dependencies:
```bash
npm install
```

2. Run dev server:
```bash
npm run dev
```

3. Open `http://localhost:3000` and go to `/model` to see the embedded model.

## Notes
- The original model HTML is placed at `public/imalat.html`. You can edit it directly or convert it into React components later.
- This scaffold is intended as a first deliverable: easily deployable and GitHub-ready. After you confirm, we can convert the model into native React components, add MDX lesson pages, quizzes, authentication, etc.

