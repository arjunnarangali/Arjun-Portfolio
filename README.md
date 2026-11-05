# Arjun N Portfolio

Premium, production-ready personal portfolio built with React, TypeScript, Vite, Tailwind CSS, Framer Motion, and React Router.

## Highlights

- Premium dark-first UI with light mode support
- Typed content-driven sections for fast iteration
- Atomic design inspired structure for atoms, molecules, and templates
- Framer Motion animations with reduced-motion friendly behavior
- SEO metadata, structured data, and Open Graph assets
- EmailJS-ready contact form with mailto fallback
- Route-level lazy loading and Vite alias configuration

## Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- React Router
- React Icons
- React Helmet Async
- EmailJS Browser SDK

## Project Structure

```text
src/
├── app/
│   ├── providers.tsx
│   ├── router.tsx
│   ├── theme-context.ts
│   └── theme-provider.tsx
├── components/
│   ├── atoms/
│   ├── molecules/
│   └── templates/
├── data/
├── hooks/
├── lib/
├── pages/
├── types/
├── App.tsx
├── env.d.ts
├── index.css
└── main.tsx
```

## Routing Architecture

- `/` renders the portfolio landing page
- `*` renders the branded 404 page
- Route components are lazy loaded through `src/app/router.tsx`

## Design System

- Theme tokens live in `src/index.css`
- Tailwind theme extensions live in `tailwind.config.ts`
- Reusable UI primitives include `Button`, `Badge`, `SectionHeading`, and `ThemeToggle`
- Layout and section composition live in `src/components/templates/portfolio-template.tsx`

## Content Updates

Portfolio copy and structured section content live in `src/data/portfolio.ts`.

Configure public destinations in the project-root environment file:

- `VITE_DOMAIN_URL` for canonical and social metadata URLs
- `VITE_LINKEDIN_URL` and `VITE_GITHUB_URL` for profile links
- `VITE_GITHUB_URL` is also used as the base for repository slugs in project data
- `VITE_NPM_PACKAGE_BASE_URL` is combined with each package name in project data
- `VITE_NPM_PACKAGES_URL` links to the public npm profile from the Hero
- `VITE_EMAIL_URL` for contact links
- `VITE_RESUME_URL` for the resume action
- Resume asset in `public/arjun-n-resume.html` if you prefer a PDF or other format

## Environment Setup

Copy `.env.example` to `.env.local` in the project root and set the values for your deployment. Vite loads environment files from the project root; files inside `src/` are not loaded.

The `VITE_GITHUB_URL` value should be your GitHub profile URL, for example `https://github.com/your-username`. Repository slugs such as `react-native-ota-client` are stored with project content and appended to that base. The npm package base should be `https://www.npmjs.com/package`; package names are appended automatically. Set `VITE_NPM_PACKAGES_URL` to your public npm profile, for example `https://www.npmjs.com/~your-username`.

EmailJS variables are optional. If they are missing, the contact form falls back to a prefilled email draft. `VITE_` values are included in the client bundle, so use them for public URLs and public EmailJS configuration only.

## Development

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
npm run preview
```

## Vercel Deployment

1. Push the repository to GitHub.
2. Import the project into Vercel.
3. Use `npm run build` as the build command.
4. Use `dist` as the output directory.
5. Add the environment variables from `.env.example` in Vercel; EmailJS variables are optional if the prefilled-email fallback is sufficient.
6. Replace placeholder links and resume content before going live.
