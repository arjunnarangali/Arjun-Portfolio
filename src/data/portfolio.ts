import { DOMAIN_URL, EMAIL_URL, GITHUB_URL, LINKEDIN_URL, RESUME_URL } from "@/config/envConstants"
import type { PortfolioContent } from "@/types/portfolio"

export const portfolio: PortfolioContent = {
  name: "Arjun N",
  role: "Senior React Native Developer",
  location: "Bangalore, India",
  seo: {
    siteName: "Arjun N Portfolio",
    title: "Arjun N | Senior React Native Developer",
    description:
      "Senior React Native Developer crafting scalable mobile and web platforms for fintech, logistics, EV charging, talent acquisition, and Smart TV ecosystems.",
    siteUrl: DOMAIN_URL,
    keywords: [
      "Arjun N",
      "Senior React Native Developer",
      "React Native portfolio",
      "TypeScript engineer",
      "NestJS developer",
      "mobile architecture",
      "frontend engineer Bangalore",
    ],
  },
  navigation: [
    { id: "about", label: "About" },
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
      description: "Professional network and leadership profile",
    },
    github: {
      label: "GitHub",
      href: GITHUB_URL,
      description: "Code samples, side projects, and experiments",
    },
    email: {
      label: "Email",
      href: EMAIL_URL,
      description: "Direct contact for hiring and consulting",
    },
  },
  hero: {
    headline:
      "Building scalable mobile experiences for fintech, logistics and enterprise platforms.",
    description:
      "Senior React Native Developer with 4+ years of experience leading delivery across mobile, web, and backend systems. I focus on architecture clarity, product velocity, performance, and intuitive user journeys.",
    badges: ["React Native Specialist", "Scalable Architecture", "Team Leadership"],
    featuredStack: ["React Native", "React", "TypeScript", "Redux Toolkit", "Node.js", "NestJS"],
    stats: [
      { value: "4+", label: "Years building production software" },
      { value: "5", label: "Industry domains delivered" },
      { value: "E2E", label: "Mobile, web, and backend ownership" },
      { value: "Lead", label: "Hands-on team leadership experience" },
    ],
  },
  about: {
    story: [
      "Over the last 4+ years, I have built and shipped digital products that balance engineering rigor with real business outcomes. My core strength is React Native, where I architect reliable mobile experiences that scale with evolving product complexity.",
      "Alongside mobile engineering, I bring strong frontend expertise in React and TypeScript, backend implementation with NestJS and Node.js, and practical leadership across delivery teams. I enjoy solving multi-tenant, data-heavy, and performance-sensitive problems while keeping the user experience clear and polished.",
    ],
    highlights: [
      {
        title: "React Native at scale",
        description:
          "Production experience spanning fintech, logistics, EV charging, Smart TV, and enterprise workflows.",
      },
      {
        title: "Leadership mindset",
        description:
          "Experienced in team guidance, mentoring, architectural decisions, and execution planning.",
      },
      {
        title: "Full-stack delivery",
        description:
          "Comfortable extending into NestJS services, integrations, APIs, and collaborative backend architecture.",
      },
      {
        title: "Business problem solving",
        description:
          "Focused on systems that improve product velocity, stability, maintainability, and user trust.",
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
        "Delivered mobile and web solutions across EV charging and talent acquisition products with a focus on reusable architecture, Redux patterns, and testability.",
      highlights: [
        "Built and enhanced an EV charging platform with multi-tenant architecture and Firebase-powered workflows.",
        "Established scalable Redux architecture patterns and strengthened maintainability across complex feature sets.",
        "Worked with Jest-driven testing foundations to improve confidence in releases and refactors.",
        "Contributed to an Angular + NestJS talent acquisition portal with role-aware enterprise workflows.",
      ],
    },
    {
      company: "Ecaps",
      role: "Senior Developer",
      period: "2024 - Present",
      summary:
        "Leading implementation across fintech, logistics, Smart TV, and backend systems while driving architectural decisions and team execution quality.",
      highlights: [
        "Built a gold investment fintech platform covering investment flows, SIP management, and portfolio visibility.",
        "Delivered a shipment management application with workflow-heavy booking and delivery tracking journeys.",
        "Engineered a Smart TV dynamic bidding platform with real-time communication and content targeting.",
        "Contributed NestJS backend architecture and hands-on team leadership across multiple product tracks.",
      ],
    },
  ],
  projects: [
    {
      title: "Gold Investment Fintech Platform",
      summary:
        "A modern fintech platform enabling digital gold investment, SIP configuration, portfolio tracking, and secure payment experiences.",
      architecture:
        "React Native and React-powered interfaces backed by secure APIs, modular state management, and reusable transaction flows designed for financial trust and scale.",
      technologies: ["React Native", "React", "TypeScript", "Redux Toolkit", "Node.js"],
      challenges: [
        "Designing intuitive flows for recurring investments and portfolio visibility.",
        "Maintaining responsive transaction UX while keeping security and data integrity front and center.",
      ],
      achievements: [
        "Shipped investment, SIP, and payments journeys in a cohesive product experience.",
        "Improved maintainability through typed state management and reusable UI architecture.",
      ],
    },
    {
      title: "Shipment Logistics Platform",
      summary:
        "A logistics operations product supporting bookings, shipment visibility, notifications, and payment-linked workflows.",
      architecture:
        "Workflow-oriented frontend architecture with modular forms, status tracking, and API integrations tailored for operational clarity across shipment lifecycles.",
      technologies: ["React Native", "TypeScript", "Redux Toolkit", "REST APIs"],
      challenges: [
        "Handling multi-step booking flows without overwhelming operational users.",
        "Synchronizing delivery states, notifications, and payment touchpoints consistently.",
      ],
      achievements: [
        "Enabled smoother booking-to-delivery workflows for operations-heavy use cases.",
        "Structured state and screens for clearer tracking and feature scalability.",
      ],
    },
    {
      title: "Smart TV Dynamic Bidding Platform",
      summary:
        "A Smart TV advertising and bidding solution with real-time content delivery, location awareness, and responsive audience targeting.",
      architecture:
        "Real-time event-driven architecture using WebSockets, content matching strategies, and backend caching to support dynamic bidding experiences.",
      technologies: ["React", "TypeScript", "WebSockets", "NestJS", "Redis"],
      challenges: [
        "Balancing real-time bidding responsiveness with content relevance and platform reliability.",
        "Designing services that could scale dynamic matching and reduce latency bottlenecks.",
      ],
      achievements: [
        "Delivered real-time bidding functionality with dynamic content matching.",
        "Used Redis-backed caching to support more efficient response times and throughput.",
      ],
    },
    {
      title: "EV Charging Platform",
      summary:
        "An EV charging ecosystem for station monitoring, tenant-aware operations, and connected device experiences.",
      architecture:
        "Multi-tenant application architecture integrating Firebase services, structured Redux state, and monitoring features for charging operations.",
      technologies: ["React Native", "Redux Toolkit", "Firebase", "TypeScript"],
      challenges: [
        "Supporting tenant-aware behavior without compromising maintainability.",
        "Managing real-time operational visibility and state consistency across charging workflows.",
      ],
      achievements: [
        "Implemented multi-tenant architecture foundations for a scalable product setup.",
        "Integrated Firebase services and Redux patterns for dependable operational UX.",
      ],
    },
    {
      title: "Talent Acquisition Portal",
      summary:
        "An enterprise recruitment platform supporting role-based workflows, collaboration, and structured hiring operations.",
      architecture:
        "Angular frontend paired with NestJS backend services to support role-based access control, modular business logic, and enterprise extensibility.",
      technologies: ["Angular", "NestJS", "Node.js", "Role-Based Access Control"],
      challenges: [
        "Coordinating frontend and backend responsibilities across a role-heavy enterprise system.",
        "Keeping workflows extensible while enforcing permissions and data access constraints.",
      ],
      achievements: [
        "Delivered role-based enterprise workflows with clear access control boundaries.",
        "Extended product capability through coordinated Angular and NestJS implementation.",
      ],
    },
  ],
  achievement: {
    title: "Award of Excellence",
    organization: "Experion Technologies",
    summary:
      "Recognized for consistent leadership, strong performance, innovative problem solving, and meaningful contribution to team success.",
    pillars: ["Leadership", "Performance", "Innovation", "Team contribution"],
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
    headline: "Lets build resilient products that users trust.",
    summary:
      "I am open to senior engineering roles, freelance product builds, architecture consulting, and technical leadership conversations.",
    email: EMAIL_URL,
    resumeHref: RESUME_URL,
  },
}
