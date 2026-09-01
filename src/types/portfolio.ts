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
  summary: string
  highlights: string[]
}

export interface ProjectLink {
  label: string
  href: string
}

export interface ProjectItem {
  title: string
  period: string
  summary: string
  role: string
  problem: string
  solution: string
  engineering: string
  impact: string
  technologies: string[]
  links?: ProjectLink[]
  confidential?: boolean
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
    stack: string[]
  }
  about: string[]
  skills: SkillCategory[]
  experience: ExperienceItem[]
  projects: ProjectItem[]
  achievement: {
    title: string
    organization: string
    summary: string
  }
  contact: {
    headline: string
    summary: string
    email: string
    resumeHref: string
  }
}
