import { useState } from "react"
import { motion } from "framer-motion"
import {
  HiArrowDownTray,
  HiArrowRight,
  HiBars3,
  HiCodeBracket,
  HiEnvelope,
  HiLink,
  HiSparkles,
  HiXMark,
} from "react-icons/hi2"
import { Button } from "@/components/atoms/button"
import { SectionHeading } from "@/components/molecules/section-heading"
import { ThemeToggle } from "@/components/molecules/theme-toggle"
import { useContactForm } from "@/hooks/use-contact-form"
import { fadeInUp, staggerContainer } from "@/lib/motion"
import type {
  CredibilityItem,
  ExperienceItem,
  PortfolioContent,
  ProjectItem,
  SkillCategory,
} from "@/types/portfolio"

interface PortfolioTemplateProps {
  portfolio: PortfolioContent
}

export function PortfolioTemplate({ portfolio }: PortfolioTemplateProps) {
  return (
    <div className="relative min-h-screen overflow-hidden">
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
        <CredibilitySection portfolio={portfolio} />
        <SkillsSection skills={portfolio.skills} />
        <ExperienceSection experience={portfolio.experience} />
        <ProjectsSection projects={portfolio.projects} />
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

        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />
          <Button href="#contact" variant="secondary" size="sm">
            Contact Me
          </Button>
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
          <Button href="#contact" variant="secondary" onClick={() => setIsMenuOpen(false)}>
            Contact Me
          </Button>
        </nav>
      ) : null}
    </header>
  )
}

function HeroSection({ portfolio }: PortfolioTemplateProps) {
  const recruiterLinks = [portfolio.socials.linkedin, portfolio.socials.github]

  return (
    <section id="hero" className="relative overflow-hidden border-b border-border pb-20 pt-16 md:pb-28 md:pt-20">
      <div className="pointer-events-none absolute inset-0 grid-overlay" />

      <div className="section-shell relative">
        <motion.div
          className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(320px,0.8fr)]"
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
              <Button href="#contact" variant="ghost">
                Contact Me
              </Button>
            </div>

            <div className="mt-8 grid gap-4 border-y border-border py-5 md:grid-cols-3">
              {portfolio.hero.proofMetrics.map((metric) => (
                <div key={metric.label}>
                  <p className="editorial-label">{metric.label}</p>
                  <p className="mt-2 text-sm leading-7 text-muted-foreground">{metric.detail}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-3 text-sm text-muted-foreground">
              {portfolio.hero.featuredStack.map((item) => (
                <span key={item} className="rounded-sm border-b border-border/80 px-1 py-1.5">
                  {item}
                </span>
              ))}
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

          <motion.aside variants={fadeInUp} className="surface-panel p-6 md:p-8">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="editorial-label">Engineering snapshot</p>
                <h2 className="mt-3 text-2xl font-semibold text-foreground">
                  Senior-level product delivery across React Native, frontend systems, and backend collaboration.
                </h2>
              </div>
              <div className="rounded-sm border border-accent/30 px-3 py-2 text-xs uppercase tracking-[0.18em] text-accent">
                Bangalore, India
              </div>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {portfolio.hero.stats.map((stat, index) => (
                <div key={stat.label} className="rounded-md border border-border bg-paper/50 p-5">
                  <div className="editorial-label">{String(index + 1).padStart(2, "0")}</div>
                  <div className="text-2xl font-semibold text-foreground">{stat.value}</div>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-md border border-border bg-paper/50 p-5">
              <p className="text-sm font-medium text-foreground">Focus areas recruiters can scan quickly</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {["React Native", "Architecture", "Workflow UX", "Delivery Leadership"].map((item) => (
                  <span key={item} className="rounded-sm border border-accent/25 px-3 py-1 text-sm text-accent">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </motion.aside>
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
          eyebrow="About Me"
          title="Senior React Native delivery grounded in architecture clarity and product execution."
          description="I work best on products where state complexity, operational workflows, and user trust all need to hold up in production."
        />

        <motion.div
          className="mt-12 grid gap-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.95fr)]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="surface-panel p-8 md:p-10">
            <div className="space-y-5 text-base leading-8 text-muted-foreground md:text-lg">
              {portfolio.about.story.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2">
            {portfolio.about.highlights.map((highlight) => (
              <motion.div key={highlight.title} variants={fadeInUp} className="surface-panel p-6 md:p-7">
                <h3 className="text-lg font-semibold text-foreground">{highlight.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{highlight.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function CredibilitySection({ portfolio }: PortfolioTemplateProps) {
  return (
    <section id="proof" className="section-divider py-20 md:py-28">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Engineering Proof"
          title={portfolio.credibility.title}
          description={portfolio.credibility.description}
        />

        <motion.div
          className="mt-12 grid gap-6 xl:grid-cols-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          {portfolio.credibility.items.map((item) => (
            <CredibilityCard key={item.title} item={item} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function CredibilityCard({ item }: { item: CredibilityItem }) {
  return (
    <motion.article variants={fadeInUp} className="surface-panel p-7 md:p-8">
      <h3 className="text-2xl font-semibold text-foreground">{item.title}</h3>
      <p className="mt-4 text-sm leading-7 text-muted-foreground">{item.summary}</p>

      <ul className="mt-6 space-y-3 text-sm leading-7 text-muted-foreground">
        {item.evidence.map((evidencePoint) => (
          <li key={evidencePoint} className="flex gap-3">
            <span className="mt-2 h-2 w-2 rounded-full bg-accent" />
            <span>{evidencePoint}</span>
          </li>
        ))}
      </ul>
    </motion.article>
  )
}

function SkillsSection({ skills }: { skills: SkillCategory[] }) {
  return (
    <section id="skills" className="section-divider py-20 md:py-28">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Skills"
          title="A stack shaped by real product delivery rather than broad buzzword collection."
          description="These are the tools and practices that show up repeatedly in the mobile, frontend, backend, and delivery work I do most often."
        />

        <motion.div
          className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          {skills.map((category) => (
            <motion.article key={category.category} variants={fadeInUp} className="surface-panel p-6">
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-xl font-semibold text-foreground">{category.category}</h3>
                <span className="editorial-label">{category.skills.length} skills</span>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-sm border border-border bg-paper/40 px-3 py-2 text-sm text-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </motion.div>
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
          title="A delivery track record across mobile products, enterprise workflows, and architecture-heavy implementation."
          description="Each role below highlights the kind of ownership I carried, the systems I worked on, and the technical context behind that work."
        />

        <motion.div
          className="relative mt-12 space-y-12 before:absolute before:left-4 before:top-0 before:h-full before:w-px before:bg-border md:before:left-1/2 md:before:-translate-x-1/2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={staggerContainer}
        >
          {experience.map((item, index) => (
            <motion.article
              key={`${item.company}-${index}`}
              variants={fadeInUp}
              className="relative grid md:grid-cols-2 md:gap-12"
            >
              <div
                className="absolute left-4 top-8 h-4 w-4 rounded-full border-2 border-background bg-accent md:left-1/2 md:-translate-x-1/2"
              />

              {index % 2 === 0 ? (
                <>
                  <div className="md:pr-12">
                    <div className="surface-panel p-7 md:p-8">
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <div>
                          <p className="text-sm uppercase tracking-[0.22em] text-accent">
                            {item.period}
                          </p>

                          <h3 className="mt-2 text-2xl font-semibold text-foreground">
                            {item.company}
                          </h3>

                          <p className="mt-1 text-sm text-muted-foreground">
                            {item.role}
                          </p>
                        </div>

                        <span className="inline-flex h-10 w-10 items-center justify-center rounded-sm border border-accent/30 text-accent">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>

                      <p className="mt-5 text-sm leading-7 text-muted-foreground">
                        {item.summary}
                      </p>

                      <div className="mt-5 flex flex-wrap gap-2">
                        {item.scope.map((scopeItem) => (
                          <span
                            key={scopeItem}
                            className="rounded-sm border border-border bg-paper/40 px-3 py-1.5 text-xs uppercase tracking-[0.14em] text-muted-foreground"
                          >
                            {scopeItem}
                          </span>
                        ))}
                      </div>

                      <ul className="mt-6 space-y-3 text-sm leading-7 text-muted-foreground">
                        {item.highlights.map((highlight) => (
                          <li key={highlight} className="flex gap-3">
                            <span className="mt-2 h-2 w-2 rounded-full bg-accent" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div />
                </>
              ) : (
                <>
                  <div />

                  <div className="md:pl-12">
                    <div className="surface-panel p-7 md:p-8">
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <div>
                          <p className="text-sm uppercase tracking-[0.22em] text-accent">
                            {item.period}
                          </p>

                          <h3 className="mt-2 text-2xl font-semibold text-foreground">
                            {item.company}
                          </h3>

                          <p className="mt-1 text-sm text-muted-foreground">
                            {item.role}
                          </p>
                        </div>

                        <span className="inline-flex h-10 w-10 items-center justify-center rounded-sm border border-accent/30 text-accent">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>

                      <p className="mt-5 text-sm leading-7 text-muted-foreground">
                        {item.summary}
                      </p>

                      <div className="mt-5 flex flex-wrap gap-2">
                        {item.scope.map((scopeItem) => (
                          <span
                            key={scopeItem}
                            className="rounded-sm border border-border bg-paper/40 px-3 py-1.5 text-xs uppercase tracking-[0.14em] text-muted-foreground"
                          >
                            {scopeItem}
                          </span>
                        ))}
                      </div>

                      <ul className="mt-6 space-y-3 text-sm leading-7 text-muted-foreground">
                        {item.highlights.map((highlight) => (
                          <li key={highlight} className="flex gap-3">
                            <span className="mt-2 h-2 w-2 rounded-full bg-accent" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </>
              )}
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function ProjectsSection({ projects }: { projects: ProjectItem[] }) {
  return (
    <section id="projects" className="section-divider py-20 md:py-28">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Featured Projects"
          title="Selected case studies showing the kind of product and architecture work I have shipped."
          description="Every project is framed around the problem, the system shape, the technical decisions involved, and the product value the work needed to unlock."
        />

        <div className="mt-12 space-y-8">
          {projects.map((project) => (
            <article key={project.title} className="surface-panel flex h-full flex-col p-7 md:p-8">
              <div className="grid gap-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(260px,1.1fr)]">
                <div>
                  <p className="editorial-label">Case Study</p>
                  <h3 className="mt-3 text-2xl font-semibold text-foreground md:text-3xl">{project.title}</h3>
                  <p className="mt-4 text-base leading-8 text-muted-foreground">{project.summary}</p>

                  <div className="mt-6 rounded-md border border-border bg-paper/40 p-5">
                    <p className="text-sm font-medium text-foreground">Problem</p>
                    <p className="mt-2 text-sm leading-7 text-muted-foreground">{project.problem}</p>
                  </div>

                  <div className="mt-6 rounded-md border border-border bg-paper/40 p-5">
                    <p className="text-sm font-medium text-foreground">Solution</p>
                    <p className="mt-2 text-sm leading-7 text-muted-foreground">{project.solution}</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="rounded-md border border-border bg-paper/40 p-5">
                    <p className="text-sm font-medium text-foreground">Architecture</p>
                    <p className="mt-2 text-sm leading-7 text-muted-foreground">{project.architecture}</p>
                  </div>

                  <div>
                    <p className="text-sm font-medium text-foreground">Technology stack</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {project.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="rounded-sm border border-border bg-paper/30 px-3 py-1.5 text-sm text-foreground"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 grid gap-6 lg:grid-cols-2">
                <ProjectBulletList
                  title="Technical challenges"
                  items={project.challenges}
                  dotClassName="bg-accent/60"
                />
                <ProjectBulletList
                  title="Architecture decisions"
                  items={project.architectureDecisions}
                  dotClassName="bg-accent"
                />
                <ProjectBulletList title="Impact" items={project.impact} dotClassName="bg-success" />
                <ProjectBulletList
                  title="Lessons learned"
                  items={project.lessons}
                  dotClassName="bg-foreground/70"
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectBulletList({
  title,
  items,
  dotClassName,
}: {
  title: string
  items: string[]
  dotClassName: string
}) {
  return (
    <div>
      <p className="text-sm font-medium text-foreground">{title}</p>
      <ul className="mt-3 space-y-3 text-sm leading-7 text-muted-foreground">
        {items.map((item) => (
          <li key={item} className="flex gap-3">
            <span className={`mt-2 h-2 w-2 rounded-full ${dotClassName}`} />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

function AchievementsSection({ portfolio }: PortfolioTemplateProps) {
  return (
    <section id="achievements" className="section-divider py-20 md:py-28">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Recognition"
          title="Professional trust built through delivery consistency and team contribution."
          description="The strongest external signal on this page is recognition earned in a professional environment, not a self-assigned label."
        />

        <motion.div
          className="surface-panel mt-12 overflow-hidden p-8 md:p-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={fadeInUp}
        >
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(320px,1.1fr)] lg:items-center">
            <div>
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-md border border-accent/30 text-accent">
                <HiSparkles className="h-7 w-7" />
              </div>
              <p className="mt-5 text-sm uppercase tracking-[0.22em] text-accent">
                {portfolio.achievement.organization}
              </p>
              <h3 className="mt-3 text-3xl font-semibold text-foreground">
                {portfolio.achievement.title}
              </h3>
              <p className="mt-5 max-w-xl text-base leading-8 text-muted-foreground">
                {portfolio.achievement.summary}
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {portfolio.achievement.pillars.map((pillar) => (
                <div key={pillar.title} className="rounded-md border border-border bg-paper/40 p-5">
                  <p className="text-lg font-semibold text-foreground">{pillar.title}</p>
                  <p className="mt-2 text-sm leading-7 text-muted-foreground">{pillar.description}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
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
    { icon: <HiLink className="h-5 w-5" />, ...portfolio.socials.linkedin },
    { icon: <HiCodeBracket className="h-5 w-5" />, ...portfolio.socials.github },
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
          className="mt-12 grid gap-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(340px,1.1fr)]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="surface-panel p-7 md:p-8">
            <p className="editorial-label">Direct channels</p>
            <div className="mt-6 space-y-4">
              {socialEntries.map((entry) => (
                <a
                  key={entry.label}
                  href={entry.href}
                  target={entry.href.startsWith("http") ? "_blank" : undefined}
                  rel={entry.href.startsWith("http") ? "noreferrer" : undefined}
                  className="ring-focus flex items-start gap-4 rounded-md border border-border bg-paper/30 p-4 hover:border-accent/60"
                >
                  <span className="mt-1 inline-flex h-10 w-10 items-center justify-center rounded-sm border border-accent/30 text-accent">
                    {entry.icon}
                  </span>
                  <span>
                    <span className="block text-sm font-semibold text-foreground">{entry.label}</span>
                    <span className="mt-1 block text-sm leading-7 text-muted-foreground">
                      {entry.description}
                    </span>
                  </span>
                </a>
              ))}
            </div>

            <div className="mt-8 rounded-md border border-border bg-paper/30 p-5 text-sm leading-7 text-muted-foreground">
              <p className="font-medium text-foreground">Best fit conversations</p>
              <ul className="mt-3 space-y-3">
                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-accent" />
                  <span>Senior React Native and mobile platform roles</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-accent" />
                  <span>Architecture-heavy product builds and workflow design work</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-accent" />
                  <span>Consulting on React Native, TypeScript, and full-stack delivery</span>
                </li>
              </ul>
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
      <div className="section-shell flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-display text-lg font-medium tracking-[0.16em] text-foreground">{portfolio.name}</p>
          <p className="mt-2 text-sm text-muted-foreground">
            {portfolio.role} • React Native, TypeScript, and product-minded frontend architecture.
          </p>
        </div>

        <nav className="flex flex-wrap gap-4 text-sm text-muted-foreground" aria-label="Footer">
          {portfolio.navigation.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="ring-focus border-b border-transparent pb-1 uppercase tracking-[0.14em] hover:border-accent/50 hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  )
}
