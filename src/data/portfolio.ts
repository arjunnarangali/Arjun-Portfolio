import { DOMAIN_URL, EMAIL_URL, GITHUB_URL, LINKEDIN_URL, RESUME_URL } from "@/config/envConstants"
import type { PortfolioContent } from "@/types/portfolio"

const siteUrl = DOMAIN_URL?.replace(/\/$/, "") ?? ""
const normalizedEmail = EMAIL_URL?.replace(/^mailto:/i, "") ?? ""

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
    { id: "proof", label: "Proof" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
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
    headline:
      "Building React Native applications across telecommunications, fintech, logistics, EV charging, and Smart TV platforms.",
    description:
      "Senior Software Engineer specializing in React Native with around 5 years of experience building cross-platform applications. Hands-on experience delivering modular mobile features, design-token theming, localization, Redux-based state management, automated testing, backend integrations, and production releases.",
    badges: ["React Native", "TypeScript", "Monorepo Development", "Mobile Architecture"],
    featuredStack: [
      "React Native",
      "TypeScript",
      "Redux Toolkit",
      "NestJS",
      "Firebase",
      "Design Tokens",
    ],
    stats: [
      { value: "4+", label: "Years shipping production software" },
      { value: "5", label: "Product domains across cross-platform delivery" },
      { value: "3", label: "Companies across product, client, and platform work" },
      { value: "Senior", label: "Current role focused on React Native delivery and ownership" },
    ],
    proofMetrics: [
      {
        label: "React Native focus",
        detail: "Production work across telecommunications, fintech, logistics, EV charging, Smart TV, and enterprise workflows.",
      },
      {
        label: "Architecture exposure",
        detail: "Monorepo development, design-token theming, localization, multi-tenant product flows, and NestJS-backed services.",
      },
      {
        label: "Leadership signal",
        detail: "Hands-on implementation guidance, mentoring support, code reviews, and production delivery ownership across projects.",
      },
    ],
  },
  about: {
    story: [
      "I am a Senior Software Engineer based in Bangalore with around 5 years of experience specializing in React Native and building cross-platform products across telecommunications, fintech, logistics, EV charging, and Smart TV domains. My strongest work sits in applications where release quality, workflow clarity, and technical maintainability all matter in production.",
      "React Native is my core specialization, and I work across TypeScript, React, Node.js, and NestJS when product delivery needs deeper ownership. I have hands-on experience with monorepo development, design-token theming, localization, Redux-based state management, automated testing, backend integrations, and production releases.",
    ],
    highlights: [
      {
        title: "Mobile architecture",
        description:
          "Builds React Native applications with reusable patterns, Redux-based state management, and feature structures that remain maintainable as products expand.",
      },
      {
        title: "Product execution",
        description:
          "Experienced in workflow-heavy delivery spanning investment flows, logistics operations, tenant-aware EV charging, and telecom feature modules.",
      },
      {
        title: "Full-stack collaboration",
        description:
          "Comfortable contributing to NestJS services, REST APIs, WebSocket flows, payment integrations, and frontend-backend integration decisions.",
      },
      {
        title: "Engineering collaboration",
        description:
          "Supports delivery through mentoring, code reviews, cross-functional collaboration, POC development, and practical execution discipline.",
      },
    ],
  },
  credibility: {
    title: "Technical credibility built from shipped products, not generic claims.",
    description:
      "These are the patterns, constraints, and delivery signals that best represent how I work across React Native, frontend systems, and backend collaboration.",
    items: [
      {
        title: "React Native product engineering",
        summary:
          "Built and shipped cross-platform experiences for telecommunications, fintech, logistics, EV charging, and Smart TV products where workflow quality directly affects trust.",
        evidence: [
          "Production delivery across transaction-heavy, tracking-heavy, role-aware, and telecom-facing user journeys.",
          "UI architecture shaped around reusable screens, modular feature libraries, and maintainable state boundaries.",
          "Focus on predictable UX for products where state transitions, localization, and edge cases matter.",
        ],
      },
      {
        title: "Architecture for complex workflows",
        summary:
          "Most of my work lives in applications that are difficult because of product complexity, shared-platform constraints, and multi-step workflows.",
        evidence: [
          "Multi-tenant EV charging flows with shared platform behavior and tenant-specific operations.",
          "Shipment workflows with bookings, tracking, notifications, and payment-linked states.",
          "Financial flows that require trustworthy sequencing, clear status handling, and reusable transaction patterns.",
        ],
      },
      {
        title: "Backend and real-time collaboration",
        summary:
          "I extend beyond the client layer when APIs, payment integrations, WebSockets, or service structure affect product delivery.",
        evidence: [
          "NestJS-backed service collaboration across fintech, enterprise, and Smart TV products.",
          "WebSocket and Redis-oriented thinking in real-time content and bidding workflows.",
          "REST API integration with frontend state management, payment workflows, and operationally clear screen boundaries.",
        ],
      },
      {
        title: "Delivery quality and leadership",
        summary:
          "I contribute as an engineer who can implement deeply, support team execution, and keep architecture and delivery decisions practical.",
        evidence: [
          "Senior role responsibilities across Ecaps and Encora with mentoring, code reviews, and shared implementation ownership.",
          "Testing awareness through Jest-driven release confidence, debugging, and safer refactoring practices.",
          "Experience mentoring, guiding implementation, and contributing to architecture direction across multiple product tracks.",
        ],
      },
    ],
  },
  skills: [
    {
      category: "Mobile",
      skills: [
        "React Native",
        "Android",
        "iOS",
        "Cross-platform Development",
        "Smart TV Applications",
        "Mobile UI Development",
      ],
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
      category: "Frontend",
      skills: [
        "React",
        "Angular",
        "JavaScript",
        "TypeScript",
        "Redux",
        "Redux Toolkit",
        "Context API",
        "HTML5",
        "CSS3",
      ],
    },
    {
      category: "Backend & Integration",
      skills: [
        "Node.js",
        "NestJS",
        "REST APIs",
        "WebSockets",
        "Backend Integration",
        "Database Design",
        "Payment Integrations",
      ],
    },
    {
      category: "Testing & Quality",
      skills: [
        "Jest",
        "React Native Testing Library",
        "Unit Testing",
        "Integration Testing",
        "Code Reviews",
        "Debugging",
        "Performance Optimization",
      ],
    },
    {
      category: "Cloud & Tooling",
      skills: [
        "Firebase",
        "Firebase Crashlytics",
        "Push Notifications",
        "Monitoring",
        "AWS Lambda",
        "Git",
        "Xcode",
        "Android Studio",
      ],
    },
    {
      category: "Collaboration",
      skills: [
        "Technical Mentoring",
        "Agile",
        "Scrum",
        "Cross-functional Collaboration",
        "POC Development",
        "Production Releases",
      ],
    },
  ],
  experience: [
    {
      company: "Encora Inc.",
      role: "Senior Software Engineer",
      period: "April 2026 - Present",
      summary:
        "Develops features for a telecommunications SIM management platform inside a large-scale React Native monorepo, contributing across shared packages, reusable UI components, modular feature libraries, theming, and localization.",
      scope: ["React Native Monorepo", "Design Tokens", "Localization (i18n)", "Reusable UI", "Performance Updates"],
      highlights: [
        "Develops production features across shared packages, reusable UI components, and modular feature libraries in a React Native monorepo.",
        "Implemented a design-token-driven theming system for shared UI layers and strengthened multi-language support for localization readiness.",
        "Partners with engineering, design, and product teams to ship production features, review code, and improve maintainability through refactoring and performance-focused updates.",
      ],
    },
    {
      company: "Ecaps",
      role: "Senior React Native Developer",
      period: "October 2024 - March 2026",
      summary:
        "Led React Native delivery across multiple client projects with hands-on ownership in implementation, architecture input, mentoring, backend collaboration, and production delivery.",
      scope: ["React Native Delivery", "NestJS Architecture", "Payment Integrations", "WebSockets", "Production Deployments"],
      highlights: [
        "Led React Native delivery across multiple client projects, mentoring developers and reinforcing engineering best practices through technical guidance and code reviews.",
        "Designed NestJS backend architecture and supporting database models for fintech workflows, enabling secure API integrations and reliable data exchange with external systems.",
        "Built gold investment, logistics, and Smart TV products spanning payment-backed workflows, booking and tracking flows, WebSocket-driven bidding, and remote-control navigation.",
        "Owned production deployments and issue resolution across multiple applications while supporting stable releases and performance troubleshooting.",
      ],
    },
    {
      company: "Experion Technologies",
      role: "Software Engineer (Promoted from Associate Software Engineer)",
      period: "December 2021 - October 2024",
      summary:
        "Delivered React Native, Angular, and NestJS solutions across EV charging and talent acquisition products, with responsibility spanning multi-tenant architecture, Redux patterns, testing foundations, and Firebase-backed production workflows.",
      scope: ["React Native", "Multi-tenant Architecture", "Redux", "Jest", "Firebase", "Angular + NestJS"],
      highlights: [
        "Delivered React Native features for production applications, translating complex product requirements into maintainable mobile experiences.",
        "Designed and implemented multi-tenant architecture for the Android experience of an EV charging platform, supporting client-specific configurations within a shared application foundation.",
        "Built reusable components and Redux state management patterns to improve consistency, maintainability, and development efficiency across features.",
        "Established a Jest-based testing setup, built an Angular + NestJS talent acquisition portal, and integrated Firebase Crashlytics and push notifications for monitoring and engagement.",
      ],
    },
  ],
  projects: [
    {
      title: "Telecommunications SIM Management Platform",
      summary:
        "Telecommunications product built within a React Native monorepo using shared packages, reusable UI components, and modular feature libraries.",
      problem:
        "The platform needed production-ready mobile features that could scale across shared modules while keeping design consistency and localization support aligned across teams.",
      solution:
        "I contribute feature development inside the monorepo, improve shared UI layers, and support localization and maintainability work so the product can grow without duplicating feature logic.",
      architecture:
        "Large-scale React Native monorepo with shared packages, reusable UI components, modular feature libraries, design-token-driven theming, and multi-language support.",
      technologies: ["React Native", "TypeScript", "Monorepo Development", "Design Tokens", "Localization (i18n)"],
      challenges: [
        "Maintaining consistency across shared UI layers and modular feature libraries as the platform evolves.",
        "Improving localization readiness without fragmenting feature ownership across the monorepo.",
      ],
      architectureDecisions: [
        "Used design-token-driven theming to keep shared UI components and feature modules visually consistent.",
        "Worked within modular feature boundaries and reusable packages to reduce duplication and improve maintainability.",
      ],
      impact: [
        "Improved production-readiness for shared UI layers and multilingual feature delivery.",
        "Supported maintainability through refactoring and performance-focused updates across mobile modules.",
      ],
      lessons: [
        "Shared-platform products benefit from strong UI system boundaries and reusable feature modules.",
        "Localization is easier to scale when it is built into the platform architecture instead of added late.",
      ],
    },
    {
      title: "Gold Investment Fintech Application",
      summary:
        "Digital gold investment product covering investment journeys, SIP setup, portfolio visibility, and secure payment interactions.",
      problem:
        "The product needed to make investment actions, recurring plans, and portfolio awareness feel trustworthy and understandable for users managing financial decisions on mobile.",
      solution:
        "I helped build React Native experiences that structured transaction-heavy workflows into reusable screens, typed state, and clear action boundaries for investment, SIP, and portfolio features.",
      architecture:
        "React Native interfaces backed by secure APIs, modular state management, and reusable transaction flows designed for consistent financial UX.",
      technologies: ["React Native", "TypeScript", "Payment Integrations", "Portfolio Management", "SIP Workflows"],
      challenges: [
        "Designing recurring investment flows that stayed understandable without hiding important financial detail.",
        "Maintaining responsive transaction UX while keeping data integrity and trust cues front and center.",
      ],
      architectureDecisions: [
        "Used reusable transaction patterns so investment, SIP, and portfolio features could evolve without duplicating logic.",
        "Separated portfolio visibility concerns from transaction initiation flows to keep high-risk interactions clearer to users.",
      ],
      impact: [
        "Enabled investment, SIP, and payment journeys inside one cohesive product flow.",
        "Created maintainable UI and state patterns that supported future financial feature expansion.",
      ],
      lessons: [
        "Financial UX benefits from explicit status messaging and predictable sequencing more than visual complexity.",
        "Reusable transaction architecture reduces risk when multiple investment journeys share similar rules.",
      ],
    },
    {
      title: "Shipment Logistics Mobile Application",
      summary:
        "Operations-focused logistics product supporting bookings, shipment visibility, notifications, and payment-linked workflows.",
      problem:
        "Operational users needed a product that could handle multi-step bookings, delivery tracking, and status changes without becoming confusing or brittle as workflows expanded.",
      solution:
        "I delivered workflow-oriented screens and state handling that made booking, tracking, and notification flows easier to follow across shipment lifecycles.",
      architecture:
        "Workflow-oriented frontend architecture with modular forms, status tracking, and API integrations tailored for operational clarity.",
      technologies: ["React Native", "TypeScript", "Redux Toolkit", "Push Notifications", "REST APIs"],
      challenges: [
        "Handling multi-step booking flows without overwhelming users who care more about task completion than interface novelty.",
        "Synchronizing delivery states, notifications, and payment touchpoints consistently across screens.",
      ],
      architectureDecisions: [
        "Organized state around workflow stages so booking and delivery progress remained easier to reason about.",
        "Used modular forms and screen boundaries to reduce coupling between booking inputs, tracking state, and downstream updates.",
      ],
      impact: [
        "Improved clarity across booking-to-delivery journeys for operations-heavy product usage.",
        "Created a structure that made future shipment states and workflow steps easier to extend.",
      ],
      lessons: [
        "Operational software succeeds when state transitions are obvious and friction stays low.",
        "Workflow products benefit from architecture that mirrors the real process users follow.",
      ],
    },
    {
      title: "Smart TV Dynamic Content Bidding Platform",
      summary:
        "Smart TV advertising and bidding solution with real-time content delivery, targeting logic, and location-aware decision making.",
      problem:
        "The platform needed to support dynamic bidding and responsive content matching in a real-time environment where latency and relevance both affected product value.",
      solution:
        "I contributed to the frontend and service integration patterns that connected real-time events, targeting logic, and content delivery into a dependable bidding experience.",
      architecture:
        "Real-time event-driven architecture using WebSockets, content matching strategies, and Redis-aware backend caching.",
      technologies: ["React Native", "TypeScript", "WebSockets", "Redis", "Smart TV"],
      challenges: [
        "Balancing bidding responsiveness with content relevance and platform reliability.",
        "Designing flows that could support dynamic matching without turning real-time behavior into operational chaos.",
      ],
      architectureDecisions: [
        "Used WebSocket-driven communication for timely updates where polling would have added delay and noise.",
        "Supported backend caching decisions so frequently accessed matching logic could respond more efficiently.",
      ],
      impact: [
        "Delivered real-time bidding functionality with dynamic content matching and targeting responsiveness.",
        "Supported a system shape that was better suited to low-latency decision making than standard request-response flows.",
      ],
      lessons: [
        "Real-time products need architecture that protects reliability, not just raw speed.",
        "Event-driven systems are easier to maintain when data flow boundaries are explicit.",
      ],
    },
    {
      title: "Electric Vehicle Charging Platform",
      summary:
        "EV charging ecosystem for station monitoring, tenant-aware operations, and connected device visibility.",
      problem:
        "The product needed to support tenant-specific behavior and real-time operational monitoring without making the frontend state model difficult to extend or reason about.",
      solution:
        "I worked on the React Native application architecture, Firebase-backed workflows, and Redux patterns needed to keep charging operations visible and tenant-aware.",
      architecture:
        "Multi-tenant application architecture integrating Firebase services, structured Redux state, and monitoring features for charging operations.",
      technologies: ["React Native", "Redux Toolkit", "Firebase", "TypeScript", "Multi-tenant Architecture"],
      challenges: [
        "Supporting tenant-aware behavior without compromising maintainability.",
        "Managing real-time operational visibility and state consistency across charging workflows.",
      ],
      architectureDecisions: [
        "Modeled product behavior around shared platform patterns with tenant-specific operational differences layered in.",
        "Used structured Redux state and Firebase event flows to keep monitoring and device-related updates coherent.",
      ],
      impact: [
        "Implemented frontend foundations for a scalable multi-tenant charging product.",
        "Improved operational visibility through dependable state patterns and connected workflow handling.",
      ],
      lessons: [
        "Multi-tenant products need clear ownership boundaries between shared behavior and tenant-specific rules.",
        "Connected-device UX becomes manageable when the state model is designed for operational clarity first.",
      ],
    },
    {
      title: "Talent Acquisition Portal",
      summary:
        "Enterprise recruitment platform supporting role-based workflows, collaboration, and structured hiring operations.",
      problem:
        "The hiring product needed to coordinate role-based workflows across frontend and backend layers without losing clarity around permissions, extensibility, and enterprise process rules.",
      solution:
        "I contributed to Angular and NestJS implementation that supported role-aware workflows, modular business logic, and maintainable permission boundaries.",
      architecture:
        "Angular frontend paired with NestJS backend services to support role-based access control, modular business logic, and enterprise extensibility.",
      technologies: ["Angular", "NestJS", "Node.js", "REST APIs", "Role-Based Access Control"],
      challenges: [
        "Coordinating frontend and backend responsibilities across a role-heavy enterprise system.",
        "Keeping workflows extensible while enforcing permissions and data access constraints.",
      ],
      architectureDecisions: [
        "Used clear role-based access boundaries so workflow behavior and data access remained easier to reason about.",
        "Kept frontend and backend responsibilities modular to support enterprise growth without tightly coupling flows.",
      ],
      impact: [
        "Delivered enterprise workflows with clearer permission boundaries and maintainable business logic.",
        "Supported a product structure that could grow with additional roles and process complexity.",
      ],
      lessons: [
        "Enterprise products need permission models that remain understandable to both engineers and stakeholders.",
        "Role-heavy workflows stay healthier when extensibility is designed in early.",
      ],
    },
  ],
  achievement: {
    title: "Award of Excellence",
    organization: "Experion Technologies",
    summary:
      "Received for consistently exceeding expectations and contributing meaningfully to project delivery at Experion Technologies.",
    pillars: [
      {
        title: "Leadership",
        description: "Recognized for taking ownership beyond feature implementation and supporting team execution when delivery pressure was high.",
      },
      {
        title: "Performance",
        description: "Reflected consistent contribution across active product work, engineering quality, and dependable execution.",
      },
      {
        title: "Innovation",
        description: "Acknowledged practical problem solving and architectural thinking applied to real product constraints.",
      },
      {
        title: "Team contribution",
        description: "Highlighted collaboration, knowledge sharing, and a willingness to help teams move work forward.",
      },
    ],
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
