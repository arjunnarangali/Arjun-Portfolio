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

Replace these placeholder values before publishing:

- `seo.siteUrl`
- LinkedIn URL
- GitHub URL
- Contact email
- Resume asset in `public/arjun-n-resume.html` if you prefer a PDF or other format

## EmailJS Setup

Create a `.env` file in the project root:

```bash
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

If these are missing, the contact form falls back to a prefilled email draft.

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
5. Add the EmailJS environment variables in Vercel if direct form sending is required.
6. Replace placeholder links and resume content before going live.
