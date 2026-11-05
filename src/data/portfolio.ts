import {
  DOMAIN_URL,
  EMAIL_URL,
  GITHUB_URL,
  getGitHubRepositoryUrl,
  getNpmPackageUrl,
  LINKEDIN_URL,
  NPM_PACKAGES_URL,
  RESUME_URL,
} from "@/config/envConstants"
import type { PortfolioContent } from "@/types/portfolio"

const siteUrl = DOMAIN_URL?.replace(/\/$/, "") ?? ""
const normalizedEmail = EMAIL_URL?.replace(/^mailto:/i, "") ?? ""
const createGitHubRepositoryLink = (label: string, repositorySlug: string) => {
  const href = getGitHubRepositoryUrl(repositorySlug)
  return href ? { label, href } : undefined
}

export const portfolio: PortfolioContent = {
  name: "Arjun N",
  role: "Senior Software Engineer | React Native",
  location: "Bangalore, India",
  seo: {
    siteName: "Arjun N Portfolio",
    title: "Arjun N | Senior Software Engineer | React Native",
    description:
      "Senior Software Engineer specializing in React Native, based in Bangalore, building cross-platform products across telecommunications, fintech, logistics, EV charging, and Smart TV platforms.",
    siteUrl,
    keywords: [
      "Arjun N",
      "Senior Software Engineer React Native",
      "React Native portfolio",
      "TypeScript engineer",
      "NestJS developer",
      "mobile architecture",
      "product engineer Bangalore",
      "design tokens",
      "localization i18n",
      "multi-tenant architecture",
      "Redux Toolkit",
      "Firebase Crashlytics",
      "Smart TV applications",
      "EV charging platform",
      "React Native Bangalore",
      "mobile engineer portfolio",
    ],
  },
  navigation: [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "packages", label: "Packages" },
    // { id: "blog", label: "Blog" },
    { id: "contact", label: "Contact" },
  ],
  socials: {
    linkedin: {
      label: "LinkedIn",
      href: LINKEDIN_URL,
      description: "Career history, endorsements, and role progression",
    },
    github: {
      label: "GitHub",
      href: GITHUB_URL,
      description: "Code samples, experiments, and public technical signal",
    },
    email: {
      label: "Email",
      href: `mailto:${normalizedEmail}`,
      description: "Direct contact for senior engineering roles, consulting, and product delivery discussions",
    },
  },
  hero: {
    headline: "Building reliable React Native products from complex workflows to production releases.",
    description:
      "With 5 years of experience, I’ve built React Native products across telecommunications, fintech, logistics, EV charging, and Smart TV.",
    badges: ["React Native", "TypeScript", "Cross-platform Mobile"],
  },
  about: {
    story:
      "I enjoy owning complex product work from clarifying the user workflow through implementation and production support. I partner closely with product, design, and backend teams, and value practical decisions, thoughtful reviews, and helping teammates deliver with confidence.",
  },
  skills: [
    {
      category: "Languages",
      skills: ["TypeScript", "JavaScript", "HTML5", "CSS3"],
    },
    {
      category: "Mobile",
      skills: ["React Native", "Android", "iOS", "Cross-platform Development", "Smart TV Applications"],
    },
    {
      category: "Frontend",
      skills: ["React", "Angular", "Redux Toolkit", "Context API"],
    },
    {
      category: "Backend & Integrations",
      skills: ["Node.js", "NestJS", "REST APIs", "WebSockets", "Database Design", "Payment Integrations"],
    },
    {
      category: "Architecture & UI",
      skills: [
        "Monorepo Development",
        "Modular Architecture",
        "Component Libraries",
        "Design Tokens",
        "Theming",
        "Localization (i18n)",
        "Multi-tenant Architecture",
      ],
    },
    {
      category: "Testing & Delivery",
      skills: [
        "Jest",
        "React Native Testing Library",
        "Unit & Integration Testing",
        "Firebase Crashlytics",
        "Push Notifications",
        "Performance Optimization",
        "Production Releases",
      ],
    },
  ],
  productDomains: ["Telecommunications", "Fintech", "Logistics", "EV Charging", "Smart TV"],
  experience: [
    {
      company: "Coforge",
      role: "Senior Software Engineer",
      period: "April 2026 - Present",
      location: "Bangalore, India",
      summary: "React Native engineering for a large-scale telecommunications SIM management platform.",
      highlights: [
        "Develop and enhance production features across shared packages, reusable UI components, and modular feature libraries in a large-scale React Native monorepo.",
        "Implement design-token-driven theming and internationalization (i18n) across shared React Native components, improving UI consistency and supporting localized experiences across modules.",
        "Collaborate with engineering, product, and design teams to review and refactor shared components, resolve implementation issues, and improve maintainability, performance, and delivery quality.",
      ],
    },
    {
      company: "Ecaps",
      role: "Senior React Native Developer",
      period: "October 2024 - March 2026",
      location: "Bangalore, India",
      summary: "Led React Native delivery across fintech, logistics, and Smart TV client applications.",
      highlights: [
        "Led React Native development across multiple client applications, guiding architecture and implementation decisions, reviewing code, mentoring engineers, and partnering with engineering, product, and client teams. Owned maintenance, production releases, and incident resolution, troubleshooting performance, integration, and deployment issues.",
        "Designed React Native application architectures and NestJS backend services integrating REST APIs, third-party services, payment gateways, and database models for end-to-end fintech and logistics workflows.",
        "Architected and delivered a React Native gold-investment and SIP application with live pricing, portfolio tracking, payment integration, recurring investment journeys, and third-party API integrations.",
        "Built a React Native logistics application from the ground up, covering shipment booking, payment workflows, tracking, delivery confirmation, push notifications, and API integrations.",
        "Engineered a React Native Smart TV real-time bidding platform using WebSockets for live content delivery, location-aware targeting, scheduling overrides, and remote-control navigation.",
      ],
    },
    {
      company: "Experion Technologies",
      role: "Software Engineer (Promoted from Associate Software Engineer)",
      period: "December 2021 - October 2024",
      location: "Infopark, Kochi, India",
      summary: "Delivered React Native and full-stack products across EV charging and talent acquisition.",
      highlights: [
        "Analyzed client requirements and designed, developed, tested, and enhanced production React Native applications using TypeScript, Redux, Redux Toolkit, reusable components, REST APIs, and third-party integrations.",
        "Designed and implemented a multi-tenant React Native/Android architecture for EV charging, enabling client-specific configurations from a shared app foundation and reducing duplicated implementation effort.",
        "Established a front-end testing strategy using Jest and React Native Testing Library, implementing unit and integration tests for critical modules to strengthen regression detection and release reliability.",
        "Built an Angular + NestJS talent acquisition portal with REST APIs, role-based access control, secure data handling, and maintainable architecture; evaluated technologies through engineering POCs.",
      ],
    },
  ],
  projects: [
    {
      title: "Signed React Native OTA Update Platform",
      summary:
        "A cross-platform OTA system for React Native, with a published Android and iOS SDK and a companion FastAPI release service.",
      links: [
        createGitHubRepositoryLink("Client SDK source", "react-native-ota-client"),
        createGitHubRepositoryLink("Update server source", "react-native-ota-server"),
      ].filter((link): link is { label: string; href: string } => Boolean(link)),
      technologies: ["React Native", "Kotlin", "Swift", "Android", "iOS", "Hermes", "FastAPI", "Python"],
      caseStudy: {
        contribution:
          "Built and published the cross-platform client SDK and companion release service. The client verifies signed releases, stages compatible bundles, selects updates at startup, and rolls back releases that fail healthy-start confirmation.",
        engineeringDecision:
          "Kept signing private keys on the publisher side and made verification, runtime compatibility, and rollback part of the update lifecycle. OTA is limited to JavaScript and bundled assets; native changes still require a new app build.",
        outcome:
          "Published an Android and iOS SDK with a complete release path for selecting, verifying, staging, activating, and recovering updates.",
      },
    },
    {
      title: "my.home Remote — Native Android TV Remote",
      summary:
        "A native Android companion app for controlling a Lenovo TV over the local Wi-Fi network.",
      links: [createGitHubRepositoryLink("View Android app repository", "home.remote")].filter(
        (link): link is { label: string; href: string } => Boolean(link),
      ),
      technologies: ["Kotlin", "Android", "ViewModel", "HTTP", "OkHttp", "Coil", "Gradle"],
    },
    {
      title: "Telecommunications SIM Management Platform",
      summary:
        "Telecommunications SIM management product built in a large React Native monorepo with shared UI and modular feature libraries.",
      technologies: ["React Native", "TypeScript", "Monorepo Development", "Design Tokens", "Localization (i18n)"],
      caseStudy: {
        contribution:
          "Develops production features across shared packages and modular feature libraries, and contributes to reusable UI, theming, and localization work.",
        engineeringDecision:
          "Uses design tokens and shared UI patterns to maintain consistency while keeping features within reusable module boundaries.",
        outcome:
          "Contributed to multilingual feature readiness and maintainability improvements across the shared React Native platform.",
      },
    },
    {
      title: "Gold Investment Fintech Application",
      summary:
        "Digital gold product spanning investment journeys, recurring SIP plans, portfolio views, and payment interactions.",
      technologies: ["React Native", "TypeScript", "Payment Integrations", "Portfolio Management", "SIP Workflows"],
    },
    {
      title: "Shipment Logistics Mobile Application",
      summary:
        "Operations-focused logistics app covering bookings, shipment tracking, notifications, and payment-linked workflows.",
      technologies: ["React Native", "TypeScript", "Redux Toolkit", "Push Notifications", "REST APIs"],
    },
    {
      title: "Smart TV Dynamic Content Bidding Platform",
      summary:
        "Smart TV advertising platform combining real-time bidding, content targeting, and location-aware decisions.",
      technologies: ["React Native", "TypeScript", "WebSockets", "Redis", "Smart TV"],
    },
    {
      title: "Electric Vehicle Charging Platform",
      summary:
        "EV charging app for station monitoring and tenant-aware operations.",
      technologies: ["React Native", "Redux Toolkit", "Firebase", "TypeScript", "Multi-tenant Architecture"],
      caseStudy: {
        contribution:
          "Implemented React Native application architecture and features for tenant-aware charging workflows, using Redux and Firebase-backed operations.",
        engineeringDecision:
          "Kept shared platform behavior common while layering tenant-specific operations on top, with structured state for monitoring and device updates.",
        outcome:
          "Delivered mobile foundations for a multi-tenant charging product with connected-device visibility and operational monitoring.",
      },
    },
  ],
  npmPackages: [
    {
      name: "react-native-ota-client",
      summary:
        "A React Native SDK for signed Android and iOS over-the-air updates, with bundle verification, startup selection, and rollback support.",
      href: getNpmPackageUrl("react-native-ota-client"),
    },
  ],
  npmPackagesUrl: NPM_PACKAGES_URL,
  achievement: {
    title: "Award of Excellence",
    organization: "Experion Technologies",
    summary: "Recognized for consistently exceeding expectations and contributing meaningfully to project delivery.",
  },
  blogPosts: [
    {
      title: "React Native New Architecture",
      summary:
        "Thoughts on preparing product teams for the New Architecture and reducing migration risk in active apps.",
      readTime: "6 min read",
      tags: ["React Native", "Architecture"],
    },
    {
      title: "Scaling Redux Applications",
      summary: "Patterns for keeping feature growth manageable in large Redux Toolkit codebases.",
      readTime: "5 min read",
      tags: ["Redux Toolkit", "Scalability"],
    },
    {
      title: "Building Multi Tenant Systems",
      summary: "Lessons from shaping tenant-aware products without sacrificing maintainability.",
      readTime: "7 min read",
      tags: ["Architecture", "SaaS"],
    },
    {
      title: "React Native Performance Optimization",
      summary: "Practical tactics for profiling, smoothing interactions, and improving perceived speed.",
      readTime: "8 min read",
      tags: ["Performance", "Mobile"],
    },
    {
      title: "NestJS Best Practices",
      summary: "A pragmatic guide to modular services, API boundaries, and backend maintainability.",
      readTime: "6 min read",
      tags: ["NestJS", "Backend"],
    },
  ],
  contact: {
    headline: "Open to senior software engineering and React Native opportunities.",
    summary:
      "If you are hiring for cross-platform product work involving React Native, mobile architecture, backend integrations, or production delivery, I would be glad to talk. Reach out for full-time roles, consulting, or product builds.",
    email: normalizedEmail,
    resumeHref: RESUME_URL,
  },
}
