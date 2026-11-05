export interface NavItem {
  id: string
  label: string
}

export interface SocialLink {
  label: string
  href: string
  description: string
}

export interface SkillCategory {
  category: string
  skills: string[]
}

export interface ExperienceItem {
  company: string
  role: string
  period: string
  location: string
  summary: string
  highlights: string[]
}

export interface NpmPackageItem {
  name: string
  summary: string
  href?: string
}

export interface ProjectItem {
  title: string
  summary: string
  links?: { label: string; href: string }[]
  technologies: string[]
  caseStudy?: {
    contribution: string
    engineeringDecision: string
    outcome: string
  }
}

export interface BlogPost {
  title: string
  summary: string
  readTime: string
  tags: string[]
}

export interface Achievement {
  title: string
  organization: string
  summary: string
}

export interface PortfolioContent {
  name: string
  role: string
  location: string
  seo: {
    siteName: string
    title: string
    description: string
    siteUrl: string
    keywords: string[]
  }
  navigation: NavItem[]
  socials: {
    linkedin: SocialLink
    github: SocialLink
    email: SocialLink
  }
  hero: {
    headline: string
    description: string
    badges: string[]
  }
  about: {
    story: string
  }
  skills: SkillCategory[]
  productDomains: string[]
  experience: ExperienceItem[]
  projects: ProjectItem[]
  npmPackages: NpmPackageItem[]
  npmPackagesUrl?: string
  achievement: Achievement
  blogPosts: BlogPost[]
  contact: {
    headline: string
    summary: string
    email: string
    resumeHref: string
  }
}
