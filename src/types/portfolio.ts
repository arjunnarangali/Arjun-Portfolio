export interface NavItem {
  id: string
  label: string
}

export interface SocialLink {
  label: string
  href: string
  description: string
}

export interface StatItem {
  value: string
  label: string
}

export interface HighlightItem {
  title: string
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

export interface ProjectItem {
  title: string
  summary: string
  architecture: string
  technologies: string[]
  challenges: string[]
  achievements: string[]
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
  pillars: string[]
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
    featuredStack: string[]
    stats: StatItem[]
  }
  about: {
    story: string[]
    highlights: HighlightItem[]
  }
  skills: SkillCategory[]
  experience: ExperienceItem[]
  projects: ProjectItem[]
  achievement: Achievement
  blogPosts: BlogPost[]
  contact: {
    headline: string
    summary: string
    email: string
    resumeHref: string
  }
}
