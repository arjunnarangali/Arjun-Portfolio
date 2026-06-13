import { DOMAIN_URL, EMAIL_URL, GITHUB_URL, LINKEDIN_URL, RESUME_URL } from "@/config/envConstants"
import type { PortfolioContent } from "@/types/portfolio"

const siteUrl = DOMAIN_URL?.replace(/\/$/, "") ?? ""

export const portfolio: PortfolioContent = {
  name: "Arjun N",
  role: "Senior React Native Engineer",
  location: "Bangalore, India",
  seo: {
    siteName: "Arjun N Portfolio",
    title: "Arjun N | Senior React Native Engineer",
    description:
      "Senior React Native Engineer in Bangalore building React Native, React, and NestJS products across fintech, logistics, EV charging, Smart TV, and enterprise platforms.",
    siteUrl,
    keywords: [
      "Arjun N",
      "Senior React Native Engineer",
      "React Native portfolio",
      "TypeScript engineer",
      "NestJS developer",
      "mobile architecture",
      "product engineer Bangalore",
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
      href: EMAIL_URL,
      description: "Direct contact for senior roles, consulting, and product builds",
    },
  },
  hero: {
    headline:
      "Arjun N builds React Native products for fintech, logistics, and enterprise platforms.",
    description:
      "Senior React Native Engineer with 4+ years of experience shipping workflow-heavy mobile and full-stack products. I specialize in React Native architecture, TypeScript-driven frontend systems, and product delivery that stays reliable as complexity grows.",
    badges: ["React Native", "TypeScript", "Mobile Architecture", "Product Delivery"],
    featuredStack: ["React Native", "React", "TypeScript", "Redux Toolkit", "Node.js", "NestJS"],
    stats: [
      { value: "4+", label: "Years shipping production software" },
      { value: "5", label: "Product domains across mobile and web" },
      { value: "2", label: "Core delivery environments across product teams" },
      { value: "Senior", label: "Role with implementation and architecture ownership" },
    ],
    proofMetrics: [
      {
        label: "React Native focus",
        detail: "Production work across fintech, logistics, EV charging, Smart TV, and enterprise workflows.",
      },
      {
        label: "Architecture exposure",
        detail: "Typed state systems, multi-tenant product flows, WebSockets, and NestJS-backed services.",
      },
      {
        label: "Leadership signal",
        detail: "Hands-on implementation guidance, mentoring support, and delivery ownership across product tracks.",
      },
    ],
  },
  about: {
    story: [
      "I am a Senior React Native Engineer based in Bangalore with 4+ years of experience building products where release quality, workflow clarity, and reliability matter. My strongest work sits in applications that carry operational complexity: financial flows, logistics coordination, tenant-aware platforms, and enterprise systems with real user consequences.",
      "React Native is my core specialization, but I work comfortably across React, TypeScript, Node.js, and NestJS when product delivery needs deeper ownership. I care about maintainable architecture, clear state boundaries, dependable integrations, and user journeys that stay understandable even when the business logic underneath them is complex.",
    ],
    highlights: [
      {
        title: "Mobile architecture",
        description:
          "Builds React Native applications with typed state, reusable patterns, and feature structures that remain workable as products expand.",
      },
      {
        title: "Product execution",
        description:
          "Experienced in workflow-heavy product delivery where UX clarity, release confidence, and coordination across teams matter.",
      },
      {
        title: "Full-stack collaboration",
        description:
          "Comfortable contributing to NestJS services, API contracts, WebSocket flows, and frontend-backend integration decisions.",
      },
      {
        title: "Team contribution",
        description:
          "Supports delivery through implementation ownership, architecture discussions, mentoring, and practical execution discipline.",
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
          "Built and shipped mobile experiences for fintech, logistics, EV charging, and operational products where workflow quality directly affects trust.",
        evidence: [
          "Production delivery across transaction-heavy, tracking-heavy, and role-aware user journeys.",
          "UI architecture shaped around reusable screens, typed state, and maintainable feature boundaries.",
          "Focus on predictable UX for products where state transitions and edge cases matter.",
        ],
      },
      {
        title: "Architecture for complex workflows",
        summary:
          "Most of my work lives in applications that are difficult because of product complexity, not because of visual polish alone.",
        evidence: [
          "Multi-tenant EV charging flows with shared platform behavior and tenant-specific operations.",
          "Shipment workflows with bookings, tracking, notifications, and payment-linked states.",
          "Financial flows that require trustworthy sequencing, clear status handling, and reusable transaction patterns.",
        ],
      },
      {
        title: "Backend and real-time collaboration",
        summary:
          "I extend beyond the client layer when APIs, WebSockets, or service structure affect product delivery.",
        evidence: [
          "NestJS-backed service collaboration across fintech, enterprise, and Smart TV products.",
          "WebSocket and Redis-oriented thinking in real-time content and bidding workflows.",
          "REST API integration with typed frontend boundaries and operationally clear state management.",
        ],
      },
      {
        title: "Delivery quality and leadership",
        summary:
          "I contribute as an engineer who can implement deeply, support team execution, and keep architecture decisions practical.",
        evidence: [
          "Senior role responsibilities across multiple active product tracks at Ecaps.",
          "Testing awareness through Jest-driven release confidence and refactor safety.",
          "Experience mentoring, guiding implementation, and contributing to architectural direction.",
        ],
      },
    ],
  },
  skills: [
    {
      category: "Frontend",
      skills: ["React", "React Native", "TypeScript", "JavaScript", "Redux Toolkit", "Angular"],
    },
    {
      category: "Backend",
      skills: ["Node.js", "NestJS", "REST APIs", "WebSockets"],
    },
    {
      category: "Cloud & DevOps",
      skills: ["AWS", "Firebase", "Crashlytics", "Git"],
    },
    {
      category: "Testing",
      skills: ["Jest", "React Native Testing Library", "Unit Testing", "Integration Testing"],
    },
    {
      category: "Leadership",
      skills: ["Team Leadership", "Mentoring", "Agile", "Scrum"],
    },
  ],
  experience: [
    {
      company: "Experion Technologies",
      role: "React Native Developer",
      period: "2021 - 2024",
      summary:
        "Built mobile and web solutions across EV charging and talent acquisition products, with responsibility spanning React Native implementation, Redux architecture, testing foundations, and enterprise workflow delivery.",
      scope: ["React Native", "Redux Architecture", "Firebase", "Jest", "Angular + NestJS"],
      highlights: [
        "Implemented tenant-aware EV charging workflows with Firebase integrations and operational visibility requirements.",
        "Established reusable Redux Toolkit patterns that made complex feature growth easier to manage and extend.",
        "Supported release confidence through Jest-based testing foundations and safer refactoring practices.",
        "Contributed to an Angular + NestJS talent acquisition portal with role-based enterprise flows and cross-team collaboration.",
      ],
    },
    {
      company: "Ecaps",
      role: "Senior Developer",
      period: "2024 - Present",
      summary:
        "Contributes across fintech, logistics, Smart TV, and backend systems with hands-on ownership in implementation, architecture input, and team execution quality.",
      scope: ["Senior Delivery", "React Native", "React", "NestJS", "WebSockets"],
      highlights: [
        "Built a gold investment platform covering investment journeys, SIP configuration, and portfolio visibility flows.",
        "Delivered a shipment management application with booking, tracking, notification, and payment-linked workflows.",
        "Engineered Smart TV bidding functionality with real-time communication, targeting logic, and responsive content delivery.",
        "Supported NestJS backend architecture, implementation planning, and day-to-day technical guidance across multiple product tracks.",
      ],
    },
  ],
  projects: [
    {
      title: "Gold Investment Fintech Platform",
      summary:
        "Digital gold investment product covering investment journeys, SIP setup, portfolio visibility, and secure payment interactions.",
      problem:
        "The product needed to make investment actions, recurring plans, and portfolio awareness feel trustworthy and understandable for users managing financial decisions on mobile.",
      solution:
        "I helped build React Native and React experiences that structured transaction-heavy workflows into reusable screens, typed state, and clear action boundaries for investment, SIP, and portfolio features.",
      architecture:
        "React Native and React interfaces backed by secure APIs, modular state management, and reusable transaction flows designed for consistent financial UX.",
      technologies: ["React Native", "React", "TypeScript", "Redux Toolkit", "React-Query"],
      challenges: [
        "Designing recurring investment flows that stayed understandable without hiding important financial detail.",
        "Maintaining responsive transaction UX while keeping data integrity and trust cues front and center.",
      ],
      architectureDecisions: [
        "Used typed state and reusable transaction patterns so investment, SIP, and portfolio features could evolve without duplicating logic.",
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
      title: "Shipment Logistics Platform",
      summary:
        "Operations-focused logistics product supporting bookings, shipment visibility, notifications, and payment-linked workflows.",
      problem:
        "Operational users needed a product that could handle multi-step bookings, delivery tracking, and status changes without becoming confusing or brittle as workflows expanded.",
      solution:
        "I delivered workflow-oriented screens and state handling that made booking, tracking, and notification flows easier to follow across shipment lifecycles.",
      architecture:
        "Workflow-oriented frontend architecture with modular forms, status tracking, and API integrations tailored for operational clarity.",
      technologies: ["React Native", "TypeScript", "Redux Toolkit", "REST APIs", "React-Query"],
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
      title: "Smart TV Dynamic Bidding Platform",
      summary:
        "Smart TV advertising and bidding solution with real-time content delivery, targeting logic, and location-aware decision making.",
      problem:
        "The platform needed to support dynamic bidding and responsive content matching in a real-time environment where latency and relevance both affected product value.",
      solution:
        "I contributed to the frontend and service integration patterns that connected real-time events, targeting logic, and content delivery into a dependable bidding experience.",
      architecture:
        "Real-time event-driven architecture using WebSockets, content matching strategies, and Redis-aware backend caching.",
      technologies: ["React", "TypeScript", "WebSockets", "Redis"],
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
      title: "EV Charging Platform",
      summary:
        "EV charging ecosystem for station monitoring, tenant-aware operations, and connected device visibility.",
      problem:
        "The product needed to support tenant-specific behavior and real-time operational monitoring without making the frontend state model difficult to extend or reason about.",
      solution:
        "I worked on the React Native application architecture, Firebase-backed workflows, and Redux patterns needed to keep charging operations visible and tenant-aware.",
      architecture:
        "Multi-tenant application architecture integrating Firebase services, structured Redux state, and monitoring features for charging operations.",
      technologies: ["React Native", "Redux Toolkit", "Firebase", "TypeScript"],
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
      technologies: ["Angular", "NestJS", "Node.js", "Role-Based Access Control"],
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
      "Recognized for delivery consistency, technical contribution, and the ability to support both product outcomes and team execution.",
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
    headline: "Open to senior React Native roles, product engineering work, and architecture-led conversations.",
    summary:
      "If you are hiring for a product where React Native architecture, workflow-heavy UX, and reliable delivery matter, I would be glad to talk. Reach out for full-time roles, consulting, or product builds.",
    email: EMAIL_URL,
    resumeHref: RESUME_URL,
  },
}
