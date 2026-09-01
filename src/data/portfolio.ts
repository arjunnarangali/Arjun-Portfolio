import { DOMAIN_URL, EMAIL_URL, GITHUB_URL, LINKEDIN_URL, RESUME_URL } from "@/config/envConstants"
import type { PortfolioContent } from "@/types/portfolio"

const siteUrl = DOMAIN_URL?.replace(/\/$/, "") ?? ""
const email = EMAIL_URL?.replace(/^mailto:/i, "") ?? ""

export const portfolio: PortfolioContent = {
  name: "Arjun N",
  role: "Senior Software Engineer | React Native",
  location: "Bangalore, India",
  seo: {
    siteName: "Arjun N Portfolio",
    title: "Arjun N | Senior React Native Software Engineer",
    description:
      "Senior React Native software engineer building production mobile applications and cross-platform product systems with TypeScript.",
    siteUrl,
  },
  navigation: [
    { id: "projects", label: "Work" },
    { id: "experience", label: "Experience" },
    { id: "skills", label: "Skills" },
    { id: "about", label: "About" },
    { id: "contact", label: "Contact" },
  ],
  socials: {
    linkedin: { label: "LinkedIn", href: LINKEDIN_URL, description: "Career history and professional profile" },
    github: { label: "GitHub", href: GITHUB_URL, description: "Public code, experiments, and technical work" },
    email: { label: "Email", href: `mailto:${email}`, description: "Direct contact for engineering opportunities" },
  },
  hero: {
    headline: "I build reliable mobile products for complex workflows.",
    description:
      "Senior Software Engineer specializing in React Native and TypeScript. I work across mobile architecture, shared UI systems, backend integrations, testing, and production delivery.",
    stack: ["React Native", "TypeScript", "Redux Toolkit", "NestJS", "REST APIs", "Jest"],
  },
  about: [
    "I have around five years of experience building production applications across telecommunications, fintech, logistics, EV charging, and Smart TV platforms.",
    "My strongest work sits at the intersection of product workflows and maintainable engineering. I contribute to architecture decisions, reusable components, state management, API integration, testing, code reviews, mentoring, and releases.",
  ],
  skills: [
    { category: "Languages", skills: ["TypeScript", "JavaScript", "HTML5", "CSS3"] },
    { category: "Mobile", skills: ["React Native", "Android", "iOS", "React Navigation", "Smart TV"] },
    { category: "Frontend", skills: ["React", "Angular", "Redux Toolkit", "Context API", "React Query"] },
    { category: "Backend", skills: ["Node.js", "NestJS", "REST APIs", "GraphQL", "WebSockets"] },
    {
      category: "Architecture",
      skills: ["Monorepos", "Modular Architecture", "Component Libraries", "Design Tokens", "Theming", "i18n", "Multi-tenant Systems"],
    },
    { category: "Testing & Delivery", skills: ["Jest", "React Native Testing Library", "Firebase Crashlytics", "CI/CD", "Production Deployment"] },
  ],
  experience: [
    {
      company: "Encora Inc.",
      role: "Senior Software Engineer",
      period: "April 2026 - Present",
      summary: "React Native monorepo work for a telecommunications SIM management platform.",
      highlights: [
        "Develop production features across shared packages, reusable UI components, and modular feature libraries.",
        "Implemented design-token-driven theming and internationalization across shared React Native components.",
        "Collaborate on refactoring, code reviews, performance updates, and production delivery.",
      ],
    },
    {
      company: "Ecaps",
      role: "Senior React Native Developer",
      period: "October 2024 - March 2026",
      summary: "Led React Native delivery across fintech, logistics, and Smart TV client applications.",
      highlights: [
        "Designed React Native architectures and NestJS services integrating REST APIs, payment gateways, third-party systems, and database models.",
        "Built gold investment, logistics, and Smart TV products covering transaction, tracking, real-time bidding, and remote-control workflows.",
        "Mentored engineers, conducted code reviews, owned production releases, and resolved performance and deployment issues.",
      ],
    },
    {
      company: "Experion Technologies",
      role: "Software Engineer, promoted from Associate Software Engineer",
      period: "December 2021 - October 2024",
      summary: "Built React Native, Angular, and NestJS solutions for EV charging and talent acquisition products.",
      highlights: [
        "Designed a multi-tenant React Native/Android architecture for client-specific EV charging experiences from a shared foundation.",
        "Established Jest and React Native Testing Library coverage for critical modules and regression testing.",
        "Built an Angular and NestJS talent acquisition portal with REST APIs, role-based access control, and secure data handling.",
      ],
    },
  ],
  projects: [
    {
      title: "Gold Investment Fintech Application",
      period: "2025 - 2026",
      summary: "Mobile investment product for gold investment, SIP setup, live pricing, payments, and portfolio tracking.",
      role: "React Native development and end-to-end fintech workflow implementation.",
      problem: "Users needed to manage investments, recurring plans, payments, and portfolio information in one trustworthy mobile flow.",
      solution: "Built reusable React Native flows for investment actions, SIP journeys, portfolio visibility, payment integration, and third-party APIs.",
      engineering: "Used modular state and transaction patterns to keep investment actions separate from portfolio visibility and easier to extend.",
      impact: "Delivered investment, recurring-plan, pricing, payment, and portfolio workflows in one application.",
      technologies: ["React Native", "TypeScript", "REST APIs", "Payment Integrations"],
      confidential: true,
    },
    {
      title: "Smart TV Dynamic Content Bidding Platform",
      period: "2025",
      summary: "Smart TV platform for real-time content delivery, location-aware targeting, scheduling overrides, and bidding.",
      role: "React Native frontend and service integration development.",
      problem: "The platform needed timely content and bidding updates while supporting Smart TV remote-control navigation.",
      solution: "Connected real-time events, targeting logic, scheduling behavior, and content delivery into a dependable Smart TV experience.",
      engineering: "Used WebSockets for live updates and Redis-aware backend behavior where low-latency access mattered.",
      impact: "Supported real-time content delivery and location-aware bidding workflows.",
      technologies: ["React Native", "TypeScript", "WebSockets", "Redis", "Smart TV"],
      confidential: true,
    },
    {
      title: "Electric Vehicle Charging Platform",
      period: "2022 - 2024",
      summary: "Multi-tenant mobile platform for charging operations, station monitoring, and connected device visibility.",
      role: "React Native architecture, state management, Firebase workflows, and testing.",
      problem: "The product needed tenant-specific behavior from a shared application foundation without making operational state difficult to maintain.",
      solution: "Implemented tenant-aware application patterns, structured Redux state, Firebase-backed workflows, and automated tests.",
      engineering: "Separated shared platform behavior from tenant-specific configuration and tested critical React Native modules with Jest.",
      impact: "Reduced duplicated implementation effort and supported configurable client experiences.",
      technologies: ["React Native", "TypeScript", "Redux Toolkit", "Firebase", "Jest"],
      confidential: true,
    },
  ],
  achievement: {
    title: "Award of Excellence",
    organization: "Experion Technologies",
    summary: "Recognized for technical contribution, ownership, and consistent delivery across client projects.",
  },
  contact: {
    headline: "Open to senior React Native and mobile engineering opportunities.",
    summary: "If you are building a product with complex workflows, shared mobile architecture, or backend integrations, I would be glad to talk.",
    email,
    resumeHref: RESUME_URL,
  },
}
