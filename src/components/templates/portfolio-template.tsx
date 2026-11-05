import { useState } from "react"
import { motion } from "framer-motion"
import {
  HiArrowDownTray,
  HiArrowRight,
  HiBars3,
  HiEnvelope,
  HiXMark,
} from "react-icons/hi2"
import { FaGithub, FaLinkedin } from "react-icons/fa6"
import { SiNpm } from "react-icons/si"
import { Button } from "@/components/atoms/button"
import { SectionHeading } from "@/components/molecules/section-heading"
import { ThemeToggle } from "@/components/molecules/theme-toggle"
import { useContactForm } from "@/hooks/use-contact-form"
import { fadeInUp, staggerContainer } from "@/lib/motion"
import type {
  ExperienceItem,
  NpmPackageItem,
  PortfolioContent,
  ProjectItem,
  SkillCategory,
} from "@/types/portfolio"

interface PortfolioTemplateProps {
  portfolio: PortfolioContent
}

export function PortfolioTemplate({ portfolio }: PortfolioTemplateProps) {
  return (
    <div className="relative min-h-screen overflow-x-clip">
      <a
        href="#content"
        className="ring-focus absolute left-4 top-4 z-[60] -translate-y-20 rounded-md border border-accent bg-background px-4 py-2 text-sm font-medium uppercase tracking-[0.14em] text-accent transition focus:translate-y-0"
      >
        Skip to content
      </a>

      <SiteHeader portfolio={portfolio} />

      <main id="content">
        <HeroSection portfolio={portfolio} />
        <AboutSection portfolio={portfolio} />
        <SkillsSection skills={portfolio.skills} productDomains={portfolio.productDomains} />
        <ExperienceSection experience={portfolio.experience} />
        <ProjectsSection projects={portfolio.projects} />
        <NpmPackagesSection packages={portfolio.npmPackages} />
        <AchievementsSection portfolio={portfolio} />
        {/* <BlogSection posts={portfolio.blogPosts} /> */}
        <ContactSection portfolio={portfolio} />
      </main>

      <SiteFooter portfolio={portfolio} />
    </div>
  )
}

function SiteHeader({ portfolio }: PortfolioTemplateProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95">
      <div className="section-shell flex min-h-20 items-center justify-between gap-4">
        <a href="#hero" className="ring-focus group min-w-0 rounded-xl">
          <div className="font-display text-base font-medium tracking-[0.2em] text-foreground">
            {portfolio.name}
          </div>
          <div className="truncate text-xs text-muted-foreground">{portfolio.role}</div>
        </a>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
          {portfolio.navigation.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="ring-focus border-b border-transparent pb-1 text-sm uppercase tracking-[0.14em] text-muted-foreground hover:border-accent/50 hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center lg:flex">
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            className="ring-focus inline-flex h-11 w-11 items-center justify-center rounded-md border border-border bg-card text-foreground"
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            onClick={() => setIsMenuOpen((currentState) => !currentState)}
          >
            {isMenuOpen ? <HiXMark className="h-6 w-6" /> : <HiBars3 className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen ? (
        <nav
          className="section-shell flex flex-col gap-3 border-t border-border py-5 lg:hidden"
          aria-label="Mobile"
        >
          {portfolio.navigation.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="ring-focus rounded-md border border-border bg-card px-4 py-3 text-sm uppercase tracking-[0.14em] text-foreground"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>
      ) : null}
    </header>
  )
}

function HeroSection({ portfolio }: PortfolioTemplateProps) {
  const recruiterLinks = [
    { label: portfolio.socials.linkedin.label, href: portfolio.socials.linkedin.href },
    { label: portfolio.socials.github.label, href: portfolio.socials.github.href },
    ...(portfolio.npmPackagesUrl ? [{ label: "npm packages", href: portfolio.npmPackagesUrl }] : []),
  ]

  return (
    <section id="hero" className="relative overflow-hidden border-b border-border pb-20 pt-16 md:pb-28 md:pt-20">
      <div className="pointer-events-none absolute inset-0 grid-overlay" />

      <div className="section-shell relative">
        <motion.div
          className="max-w-5xl"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp}>
            <div className="mb-6 flex flex-wrap items-center gap-3">
              <span className="editorial-label border-b border-accent/50 pb-1">
                Open to senior React Native and mobile platform roles
              </span>
              <span className="text-sm italic text-muted-foreground">{portfolio.location}</span>
            </div>
            <h1 className="max-w-4xl text-balance text-5xl font-medium leading-[1.05] tracking-tight text-foreground md:text-6xl lg:text-7xl">
              {portfolio.hero.headline}
            </h1>
            <p className="mt-4 text-lg font-medium text-foreground md:text-xl">{portfolio.role}</p>
            <p className="mt-6 max-w-3xl text-lg leading-9 text-muted-foreground md:text-xl">
              {portfolio.hero.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {portfolio.hero.badges.map((badge) => (
                <span
                  key={badge}
                  className="rounded-sm border border-border bg-card px-4 py-2 text-sm text-foreground"
                >
                  {badge}
                </span>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button href="#projects" icon={<HiArrowRight />}>
                View Case Studies
              </Button>
              <Button
                href={portfolio.contact.resumeHref}
                variant="secondary"
                icon={<HiArrowDownTray />}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Resume
              </Button>
            </div>

            <div className="mt-8 flex flex-wrap gap-5 text-sm text-muted-foreground">
              {recruiterLinks.map((entry) => (
                <a
                  key={entry.label}
                  href={entry.href}
                  target="_blank"
                  rel="noreferrer"
                  className="ring-focus inline-flex items-center gap-2 border-b border-border pb-1 hover:border-accent/60 hover:text-foreground"
                >
                  <span>{entry.label}</span>
                  <HiArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

function AboutSection({ portfolio }: PortfolioTemplateProps) {
  return (
    <section id="about" className="section-divider py-20 md:py-28">
      <div className="section-shell">
        <SectionHeading
          eyebrow="About"
          title="Thoughtful, collaborative, and hands-on."
          description={portfolio.about.story}
        />
      </div>
    </section>
  )
}

function SkillsSection({ skills, productDomains }: { skills: SkillCategory[]; productDomains: string[] }) {
  return (
    <section id="skills" className="section-divider py-20 md:py-28">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Technical Skills"
          title="A focused stack shaped by shipped products."
          description="Technologies used across mobile, frontend, backend integration, testing, and delivery."
        />

        <div className="mt-12 grid gap-x-8 md:grid-cols-2 xl:grid-cols-3">
          {skills.map((category) => (
            <div key={category.category} className="border-t border-border py-5">
              <h3 className="text-lg font-semibold text-foreground">{category.category}</h3>
              <p className="mt-3 text-base leading-7 text-muted-foreground">{category.skills.join(" · ")}</p>
            </div>
          ))}
        </div>

        <div className="mt-4 grid gap-3 border-y border-border py-5 md:grid-cols-[minmax(220px,0.85fr)_minmax(0,2.15fr)] md:gap-12">
          <h3 className="text-lg font-semibold text-foreground">Product domains</h3>
          <p className="text-base leading-7 text-muted-foreground">{productDomains.join(" · ")}</p>
        </div>
      </div>
    </section>
  )
}

function ExperienceSection({ experience }: { experience: ExperienceItem[] }) {
  return (
    <section id="experience" className="section-divider py-20 md:py-28">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Experience"
          title="Experience across product teams and client engagements."
          description="Ownership spanning mobile implementation, architecture, testing, and production delivery."
        />

        <div className="mt-12 divide-y divide-border border-y border-border">
          {experience.map((item) => (
            <article
              key={`${item.company}-${item.period}`}
              className="grid gap-4 py-8 md:grid-cols-[minmax(220px,0.85fr)_minmax(0,2.15fr)] md:gap-12 md:py-9"
            >
              <div>
                <p className="text-lg font-semibold text-foreground">{item.company}</p>
                <p className="mt-1 text-sm text-muted-foreground">{item.period}</p>
                <p className="mt-1 text-sm text-muted-foreground">{item.location}</p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-foreground md:text-3xl">{item.role}</h3>
                <p className="mt-3 text-base leading-7 text-muted-foreground">{item.summary}</p>
                <ul className="mt-5 space-y-3 text-base leading-7 text-muted-foreground">
                  {item.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-3">
                      <span className="mt-[0.7rem] h-2 w-2 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectsSection({ projects }: { projects: ProjectItem[] }) {
  const featuredProjects = projects.filter(
    (project): project is ProjectItem & { caseStudy: NonNullable<ProjectItem["caseStudy"]> } => Boolean(project.caseStudy),
  )
  const additionalProjects = projects.filter((project) => !project.caseStudy)

  return (
    <section id="projects" className="section-divider py-20 md:py-28">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Selected Work"
          title="A few projects that show how I approach mobile product engineering."
          description="Featured studies focus on my contribution, the key engineering decision, and what the work delivered. Other projects are summarized for a quick scan."
        />

        <div className="mt-12 space-y-6">
          {featuredProjects.map((project) => (
            <article key={project.title} className="surface-panel p-6 md:p-8">
              <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
                <div className="max-w-3xl">
                  <p className="editorial-label">Featured case study</p>
                  <h3 className="mt-3 text-2xl font-semibold text-foreground md:text-3xl">{project.title}</h3>
                  <p className="mt-3 text-base leading-7 text-muted-foreground">{project.summary}</p>
                </div>
                {project.links?.length ? (
                  <div className="flex shrink-0 flex-wrap gap-x-5 gap-y-3 md:pt-1">
                    {project.links.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        className="ring-focus inline-flex items-center gap-2 border-b border-border pb-1 text-sm text-accent hover:border-accent/60"
                      >
                        {link.label}
                        <HiArrowRight className="h-4 w-4" aria-hidden="true" />
                      </a>
                    ))}
                  </div>
                ) : null}
              </div>

              <div className="mt-5 flex flex-wrap gap-2" aria-label={`${project.title} technology stack`}>
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-sm border border-border bg-paper/30 px-3 py-1.5 text-sm text-foreground"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              <dl className="mt-6 grid gap-4 md:grid-cols-3">
                <ProjectCaseStudyDetail title="My contribution" description={project.caseStudy.contribution} />
                <ProjectCaseStudyDetail title="Key engineering decision" description={project.caseStudy.engineeringDecision} />
                <ProjectCaseStudyDetail title="Outcome" description={project.caseStudy.outcome} />
              </dl>
            </article>
          ))}
        </div>

        {additionalProjects.length ? (
          <div className="mt-12">
            <h3 className="text-xl font-semibold text-foreground">More projects</h3>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              {additionalProjects.map((project) => (
                <article key={project.title} className="surface-panel p-5 md:p-6">
                  <h4 className="text-lg font-semibold text-foreground">{project.title}</h4>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{project.summary}</p>
                  <div className="mt-4 flex flex-wrap gap-2" aria-label={`${project.title} technology stack`}>
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-sm border border-border bg-paper/30 px-2.5 py-1 text-xs text-foreground"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                  {project.links?.length ? (
                    <div className="mt-4 flex flex-wrap gap-x-5 gap-y-3">
                      {project.links.map((link) => (
                        <a
                          key={link.href}
                          href={link.href}
                          target="_blank"
                          rel="noreferrer"
                          className="ring-focus inline-flex items-center gap-2 border-b border-border pb-1 text-sm text-accent hover:border-accent/60"
                        >
                          {link.label}
                          <HiArrowRight className="h-4 w-4" aria-hidden="true" />
                        </a>
                      ))}
                    </div>
                  ) : null}
                </article>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </section>
  )
}

function ProjectCaseStudyDetail({
  title,
  description,
}: {
  title: string
  description: string
}) {
  return (
    <div className="rounded-md border border-border bg-paper/40 p-4 md:p-5">
      <dt className="text-sm font-medium text-foreground">{title}</dt>
      <dd className="mt-2 text-sm leading-6 text-muted-foreground">{description}</dd>
    </div>
  )
}

function NpmPackagesSection({ packages }: { packages: NpmPackageItem[] }) {
  return (
    <section id="packages" className="section-divider scroll-mt-24 py-14 md:py-20">
      <div className="section-shell">
        <SectionHeading
          eyebrow="npm Packages"
          title="Published tools for React Native teams."
          description="Open-source packages built to solve practical mobile release challenges."
        />

        <div className="mt-10 divide-y divide-border border-y border-border">
          {packages.map((packageItem) => (
            <article
              key={packageItem.name}
              className="grid gap-4 py-6 md:grid-cols-[minmax(220px,0.85fr)_minmax(0,2.15fr)] md:items-center md:gap-12"
            >
              <div className="flex items-center gap-3">
                <SiNpm className="h-7 w-10 shrink-0 text-accent" aria-hidden="true" />
                <h3 className="font-mono text-lg font-semibold text-foreground">{packageItem.name}</h3>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-base leading-7 text-muted-foreground">{packageItem.summary}</p>
                {packageItem.href ? (
                  <a
                    href={packageItem.href}
                    target="_blank"
                    rel="noreferrer"
                    className="ring-focus inline-flex shrink-0 items-center gap-2 self-start border-b border-border pb-1 text-sm text-accent hover:border-accent/60 sm:self-center"
                  >
                    View on npm
                    <HiArrowRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function AchievementsSection({ portfolio }: PortfolioTemplateProps) {
  return (
    <section id="achievements" className="section-divider py-14 md:py-20">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Recognition"
          title={portfolio.achievement.title}
          description={`${portfolio.achievement.organization} · ${portfolio.achievement.summary}`}
        />
      </div>
    </section>
  )
}

// function BlogSection({ posts }: { posts: BlogPost[] }) {
//   return (
//     <section id="blog" className="section-divider py-20 md:py-28">
//       <div className="section-shell">
//         <SectionHeading
//           eyebrow="Blog"
//           title="Upcoming technical writing focused on mobile architecture, scale, and backend craftsmanship."
//           description="These placeholder topics outline the content direction for the portfolios engineering voice and personal brand."
//         />

//         <motion.div
//           className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.2 }}
//           variants={staggerContainer}
//         >
//           {posts.map((post) => (
//             <motion.article key={post.title} variants={fadeInUp} className="surface-panel flex h-full flex-col p-6">
//               <div className="flex items-center justify-between gap-3 text-xs uppercase tracking-[0.2em] text-accent">
//                 <span>Placeholder article</span>
//                 <span className="text-muted-foreground">{post.readTime}</span>
//               </div>
//               <h3 className="mt-5 text-xl font-semibold text-foreground">{post.title}</h3>
//               <p className="mt-4 flex-1 text-sm leading-7 text-muted-foreground">{post.summary}</p>
//               <div className="mt-6 flex flex-wrap gap-2">
//                 {post.tags.map((tag) => (
//                   <span
//                     key={tag}
//                     className="rounded-sm border border-border bg-paper/40 px-3 py-1.5 text-xs uppercase tracking-[0.18em] text-muted-foreground"
//                   >
//                     {tag}
//                   </span>
//                 ))}
//               </div>
//             </motion.article>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   )
// }

function ContactSection({ portfolio }: PortfolioTemplateProps) {
  const { values, updateField, handleSubmit, submitState, statusMessage } = useContactForm(
    portfolio.contact.email,
  )

  const socialEntries = [
    { icon: <FaLinkedin className="h-5 w-5" aria-hidden="true" />, ...portfolio.socials.linkedin },
    { icon: <FaGithub className="h-5 w-5" aria-hidden="true" />, ...portfolio.socials.github },
    {
      icon: <SiNpm className="h-6 w-6" />,
      label: "npm packages",
      href: "#packages",
      description: "Published React Native packages",
    },
    { icon: <HiEnvelope className="h-5 w-5" />, ...portfolio.socials.email },
  ]

  return (
    <section id="contact" className="section-divider py-20 md:py-28">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Contact"
          title={portfolio.contact.headline}
          description={portfolio.contact.summary}
        />

        <motion.div
          className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(340px,1.1fr)]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp}>
            <div className="divide-y divide-border border-y border-border">
              {socialEntries.map((entry) => (
                <a
                  key={entry.label}
                  href={entry.href}
                  target={entry.href.startsWith("http") ? "_blank" : undefined}
                  rel={entry.href.startsWith("http") ? "noreferrer" : undefined}
                  className="ring-focus flex items-center gap-4 py-5 hover:text-accent"
                >
                  <span className="inline-flex w-7 shrink-0 items-center justify-center text-accent">{entry.icon}</span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-lg font-medium text-foreground">{entry.label}</span>
                    <span className="mt-1 block text-sm leading-6 text-muted-foreground">{entry.description}</span>
                  </span>
                  <HiArrowRight className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.form variants={fadeInUp} onSubmit={handleSubmit} className="surface-panel p-7 md:p-8">
            <div className="grid gap-5">
              <label className="grid gap-2 text-sm text-muted-foreground">
                <span>Name</span>
                <input
                  name="name"
                  value={values.name}
                  onChange={(event) => updateField("name", event.target.value)}
                  className="ring-focus min-h-12 rounded-md border border-border bg-background px-4 text-foreground placeholder:text-muted-foreground"
                  placeholder="Your name"
                  autoComplete="name"
                  required
                />
              </label>

              <label className="grid gap-2 text-sm text-muted-foreground">
                <span>Email</span>
                <input
                  name="email"
                  type="email"
                  value={values.email}
                  onChange={(event) => updateField("email", event.target.value)}
                  className="ring-focus min-h-12 rounded-md border border-border bg-background px-4 text-foreground placeholder:text-muted-foreground"
                  placeholder="you@example.com"
                  autoComplete="email"
                  required
                />
              </label>

              <label className="grid gap-2 text-sm text-muted-foreground">
                <span>Message</span>
                <textarea
                  name="message"
                  value={values.message}
                  onChange={(event) => updateField("message", event.target.value)}
                  className="ring-focus min-h-40 rounded-md border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground"
                  placeholder="Tell me about the role, project, or architecture challenge you are solving."
                  required
                />
              </label>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-4">
              <Button type="submit" size="lg" disabled={submitState === "sending"}>
                {submitState === "sending" ? "Sending..." : "Send Message"}
              </Button>
              <Button
                href={portfolio.contact.resumeHref}
                variant="secondary"
                target="_blank"
                rel="noreferrer"
              >
                View Resume
              </Button>
            </div>

            {statusMessage ? (
              <p
                className={`mt-4 text-sm leading-7 ${submitState === "error" ? "text-rose-400" : "text-success"}`}
                role="status"
                aria-live="polite"
              >
                {statusMessage}
              </p>
            ) : null}
          </motion.form>
        </motion.div>
      </div>
    </section>
  )
}

function SiteFooter({ portfolio }: PortfolioTemplateProps) {
  return (
    <footer className="border-t border-border py-10">
      <div className="section-shell">
        <div>
          <p className="font-display text-lg font-medium tracking-[0.16em] text-foreground">{portfolio.name}</p>
          <p className="mt-2 text-sm text-muted-foreground">
            {portfolio.role} • React Native, TypeScript, and product-minded frontend architecture.
          </p>
          <nav className="mt-4 flex items-center gap-2" aria-label="Social links">
            <a
              href={portfolio.socials.linkedin.href}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile"
              title="LinkedIn"
              className="ring-focus inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-muted-foreground hover:text-accent"
            >
              <FaLinkedin className="h-5 w-5 translate-x-px" aria-hidden="true" />
            </a>
            <a
              href={portfolio.socials.github.href}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile"
              title="GitHub"
              className="ring-focus inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-muted-foreground hover:text-accent"
            >
              <FaGithub className="h-5 w-5" aria-hidden="true" />
            </a>
            <a
              href={portfolio.socials.email.href}
              aria-label="Send email"
              title="Email"
              className="ring-focus inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-muted-foreground hover:text-accent"
            >
              <HiEnvelope className="h-5 w-5" aria-hidden="true" />
            </a>
            <a
              href="#packages"
              aria-label="View npm packages"
              title="npm packages"
              className="ring-focus inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-muted-foreground hover:text-accent"
            >
              <SiNpm className="h-5 w-5" aria-hidden="true" />
            </a>
          </nav>
        </div>
      </div>
    </footer>
  )
}
