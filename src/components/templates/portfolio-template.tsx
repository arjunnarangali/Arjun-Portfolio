import { useState } from "react"
import { motion } from "framer-motion"
import { HiArrowDownTray, HiArrowRight, HiBars3, HiCodeBracket, HiEnvelope, HiLink, HiXMark } from "react-icons/hi2"
import { Button } from "@/components/atoms/button"
import { SectionHeading } from "@/components/molecules/section-heading"
import { ThemeToggle } from "@/components/molecules/theme-toggle"
import { useContactForm } from "@/hooks/use-contact-form"
import { fadeInUp, staggerContainer } from "@/lib/motion"
import type { ExperienceItem, PortfolioContent, ProjectItem, SkillCategory } from "@/types/portfolio"

export function PortfolioTemplate({ portfolio }: { portfolio: PortfolioContent }) {
  return (
    <div className="min-h-screen overflow-hidden">
      <a href="#content" className="ring-focus absolute left-4 top-4 z-[60] -translate-y-20 rounded-md border border-accent bg-background px-4 py-2 text-sm font-medium focus:translate-y-0">
        Skip to content
      </a>
      <SiteHeader portfolio={portfolio} />
      <main id="content">
        <HeroSection portfolio={portfolio} />
        <ProjectsSection projects={portfolio.projects} />
        <ExperienceSection experience={portfolio.experience} />
        <SkillsSection skills={portfolio.skills} />
        <AboutSection portfolio={portfolio} />
        <RecognitionSection portfolio={portfolio} />
        <ContactSection portfolio={portfolio} />
      </main>
      <SiteFooter portfolio={portfolio} />
    </div>
  )
}

function SiteHeader({ portfolio }: { portfolio: PortfolioContent }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
      <div className="section-shell flex min-h-16 items-center justify-between gap-4">
        <a href="#hero" className="ring-focus min-w-0 rounded-md">
          <div className="font-display text-base font-medium tracking-[0.12em] text-foreground">{portfolio.name}</div>
          <div className="truncate text-xs text-muted-foreground">{portfolio.role}</div>
        </a>
        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
          {portfolio.navigation.map((item) => <a key={item.id} href={`#${item.id}`} className="ring-focus text-sm text-muted-foreground hover:text-foreground">{item.label}</a>)}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />
          <Button href="#contact" variant="secondary" size="sm">Contact</Button>
        </div>
        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button type="button" className="ring-focus inline-flex h-11 w-11 items-center justify-center rounded-md border border-border bg-card" aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"} onClick={() => setIsMenuOpen((open) => !open)}>
            {isMenuOpen ? <HiXMark className="h-6 w-6" /> : <HiBars3 className="h-6 w-6" />}
          </button>
        </div>
      </div>
      {isMenuOpen ? <nav className="section-shell flex flex-col gap-2 border-t border-border py-4 lg:hidden" aria-label="Mobile">
        {portfolio.navigation.map((item) => <a key={item.id} href={`#${item.id}`} className="ring-focus rounded-md border border-border px-4 py-3 text-sm" onClick={() => setIsMenuOpen(false)}>{item.label}</a>)}
        <Button href="#contact" variant="secondary" onClick={() => setIsMenuOpen(false)}>Contact</Button>
      </nav> : null}
    </header>
  )
}

function HeroSection({ portfolio }: { portfolio: PortfolioContent }) {
  return (
    <section id="hero" className="border-b border-border pb-20 pt-20 md:pb-28 md:pt-28">
      <div className="section-shell">
        <motion.div className="max-w-4xl" initial="hidden" animate="visible" variants={staggerContainer}>
          <motion.p variants={fadeInUp} className="editorial-label">{portfolio.location} · Open to senior opportunities</motion.p>
          <motion.h1 variants={fadeInUp} className="mt-6 max-w-3xl text-balance text-5xl font-medium leading-[1.05] tracking-tight md:text-7xl">{portfolio.hero.headline}</motion.h1>
          <motion.p variants={fadeInUp} className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground md:text-xl">{portfolio.hero.description}</motion.p>
          <motion.div variants={fadeInUp} className="mt-8 flex flex-wrap gap-3">
            <Button href="#projects" icon={<HiArrowRight />}>View selected work</Button>
            <Button href={portfolio.contact.resumeHref} variant="secondary" icon={<HiArrowDownTray />} target="_blank" rel="noopener noreferrer">View resume</Button>
          </motion.div>
          <motion.div variants={fadeInUp} className="mt-10 flex flex-wrap gap-x-5 gap-y-2 border-t border-border pt-5 text-sm text-muted-foreground">
            {portfolio.hero.stack.map((item) => <span key={item}>{item}</span>)}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

function ProjectsSection({ projects }: { projects: ProjectItem[] }) {
  return <section id="projects" className="section-divider py-20 md:py-28"><div className="section-shell">
    <SectionHeading eyebrow="Selected work" title="Products built around real workflows and technical constraints." description="A few projects that show my work across mobile architecture, integrations, real-time systems, and testing." />
    <div className="mt-12 grid gap-6 lg:grid-cols-3">{projects.map((project) => <ProjectCard key={project.title} project={project} />)}</div>
  </div></section>
}

function ProjectCard({ project }: { project: ProjectItem }) {
  return <motion.article className="surface-panel flex h-full flex-col p-6 md:p-7" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} variants={fadeInUp}>
    <div className="flex items-start justify-between gap-4"><p className="editorial-label">{project.period}</p>{project.confidential ? <span className="text-xs text-muted-foreground">Client work</span> : null}</div>
    <h3 className="mt-4 text-2xl font-semibold">{project.title}</h3>
    <p className="mt-3 text-sm leading-7 text-muted-foreground">{project.summary}</p>
    <p className="mt-5 text-sm font-medium">My contribution</p>
    <p className="mt-2 text-sm leading-7 text-muted-foreground">{project.role}</p>
    <div className="mt-6 space-y-4 border-t border-border pt-5 text-sm leading-7">
      <div><p className="font-medium">Problem</p><p className="text-muted-foreground">{project.problem}</p></div>
      <div><p className="font-medium">Engineering</p><p className="text-muted-foreground">{project.engineering}</p></div>
      <div><p className="font-medium">Impact</p><p className="text-muted-foreground">{project.impact}</p></div>
    </div>
    <div className="mt-auto pt-6"><div className="flex flex-wrap gap-2">{project.technologies.map((technology) => <span key={technology} className="rounded-sm border border-border bg-paper/40 px-2.5 py-1 text-xs text-foreground">{technology}</span>)}</div>
      {project.links?.length ? <div className="mt-5 flex gap-4 text-sm">{project.links.map((link) => <a key={link.label} href={link.href} className="ring-focus inline-flex items-center gap-1 border-b border-border pb-1 hover:border-accent hover:text-accent">{link.label}<HiArrowRight aria-hidden="true" /></a>)}</div> : null}
    </div>
  </motion.article>
}

function ExperienceSection({ experience }: { experience: ExperienceItem[] }) {
  return <section id="experience" className="section-divider py-20 md:py-28"><div className="section-shell">
    <SectionHeading eyebrow="Experience" title="Five years of production software delivery." description="Roles across product teams and client engagements, with ownership spanning implementation, architecture, testing, and releases." />
    <div className="mt-12 divide-y divide-border border-y border-border">{experience.map((item) => <article key={item.company} className="grid gap-5 py-8 md:grid-cols-[180px_1fr] md:gap-10">
      <div><p className="text-sm text-accent">{item.period}</p><p className="mt-2 text-sm text-muted-foreground">{item.company}</p></div>
      <div><h3 className="text-2xl font-semibold">{item.role}</h3><p className="mt-3 text-muted-foreground">{item.summary}</p><ul className="mt-5 space-y-2 text-sm leading-7 text-muted-foreground">{item.highlights.map((highlight) => <li key={highlight} className="flex gap-3"><span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />{highlight}</li>)}</ul></div>
    </article>)}</div>
  </div></section>
}

function SkillsSection({ skills }: { skills: SkillCategory[] }) {
  return <section id="skills" className="section-divider py-20 md:py-28"><div className="section-shell">
    <SectionHeading eyebrow="Technical skills" title="A focused stack shaped by shipped products." description="Technologies I have used across mobile, frontend, backend integration, testing, and delivery." />
    <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{skills.map((category) => <div key={category.category} className="border-t border-border pt-4"><h3 className="font-semibold">{category.category}</h3><p className="mt-3 text-sm leading-7 text-muted-foreground">{category.skills.join(" · ")}</p></div>)}</div>
  </div></section>
}

function AboutSection({ portfolio }: { portfolio: PortfolioContent }) {
  return <section id="about" className="section-divider py-20 md:py-28"><div className="section-shell grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:gap-20">
    <SectionHeading eyebrow="About" title="Mobile engineering with product context." description="I work best where technical decisions need to stay close to the user workflow." />
    <div className="space-y-5 text-lg leading-8 text-muted-foreground">{portfolio.about.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
  </div></section>
}

function RecognitionSection({ portfolio }: { portfolio: PortfolioContent }) {
  return <section id="recognition" className="section-divider py-14"><div className="section-shell flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"><div><p className="editorial-label">Recognition</p><h2 className="mt-2 text-xl font-semibold">{portfolio.achievement.title}</h2><p className="mt-1 text-sm text-muted-foreground">{portfolio.achievement.organization} · {portfolio.achievement.summary}</p></div></div></section>
}

function ContactSection({ portfolio }: { portfolio: PortfolioContent }) {
  const { values, updateField, handleSubmit, submitState, statusMessage } = useContactForm(portfolio.contact.email)
  const socialEntries = [{ icon: <HiLink />, ...portfolio.socials.linkedin }, { icon: <HiCodeBracket />, ...portfolio.socials.github }, { icon: <HiEnvelope />, ...portfolio.socials.email }]
  return <section id="contact" className="section-divider py-20 md:py-28"><div className="section-shell"><SectionHeading eyebrow="Contact" title={portfolio.contact.headline} description={portfolio.contact.summary} /><div className="mt-10 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
    <div className="space-y-3">{socialEntries.map((entry) => <a key={entry.label} href={entry.href} target={entry.href.startsWith("http") ? "_blank" : undefined} rel={entry.href.startsWith("http") ? "noreferrer" : undefined} className="ring-focus flex items-center gap-4 border-b border-border py-4 hover:text-accent"><span className="text-accent">{entry.icon}</span><span><span className="block font-medium">{entry.label}</span><span className="text-sm text-muted-foreground">{entry.description}</span></span></a>)}</div>
    <form onSubmit={handleSubmit} className="surface-panel p-6 md:p-8"><div className="grid gap-4"><label className="grid gap-2 text-sm text-muted-foreground">Name<input name="name" value={values.name} onChange={(event) => updateField("name", event.target.value)} className="ring-focus min-h-12 rounded-md border border-border bg-background px-4 text-foreground" autoComplete="name" required /></label><label className="grid gap-2 text-sm text-muted-foreground">Email<input name="email" type="email" value={values.email} onChange={(event) => updateField("email", event.target.value)} className="ring-focus min-h-12 rounded-md border border-border bg-background px-4 text-foreground" autoComplete="email" required /></label><label className="grid gap-2 text-sm text-muted-foreground">Message<textarea name="message" value={values.message} onChange={(event) => updateField("message", event.target.value)} className="ring-focus min-h-32 rounded-md border border-border bg-background px-4 py-3 text-foreground" required /></label></div><div className="mt-5 flex flex-wrap gap-3"><Button type="submit" disabled={submitState === "sending"}>{submitState === "sending" ? "Sending..." : "Send message"}</Button><Button href={portfolio.contact.resumeHref} variant="secondary" target="_blank" rel="noreferrer">View resume</Button></div>{statusMessage ? <p className={`mt-4 text-sm ${submitState === "error" ? "text-rose-400" : "text-success"}`} role="status" aria-live="polite">{statusMessage}</p> : null}</form>
  </div></div></section>
}

function SiteFooter({ portfolio }: { portfolio: PortfolioContent }) {
  return <footer className="border-t border-border py-8"><div className="section-shell flex flex-col gap-4 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between"><p>{portfolio.name} · {portfolio.role}</p><nav className="flex flex-wrap gap-4" aria-label="Footer">{portfolio.navigation.map((item) => <a key={item.id} href={`#${item.id}`} className="ring-focus hover:text-foreground">{item.label}</a>)}</nav></div></footer>
}
