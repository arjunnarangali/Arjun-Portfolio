import { Helmet } from "react-helmet-async"
import { PortfolioTemplate } from "@/components/templates/portfolio-template"
import { portfolio } from "@/data/portfolio"

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "Person",
    name: portfolio.name,
    jobTitle: portfolio.role,
    description: portfolio.seo.description,
    address: {
      "@type": "PostalAddress",
      addressLocality: portfolio.location,
    },
    email: portfolio.contact.email,
    sameAs: [portfolio.socials.linkedin.href, portfolio.socials.github.href],
    knowsAbout: [
      "React Native",
      "React",
      "TypeScript",
      "Redux Toolkit",
      "Node.js",
      "NestJS",
      "Mobile Architecture",
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: portfolio.seo.siteName,
    url: portfolio.seo.siteUrl,
    description: portfolio.seo.description,
  },
]

function HomePage() {
  return (
    <>
      <Helmet>
        <title>{portfolio.seo.title}</title>
        <meta name="description" content={portfolio.seo.description} />
        <meta name="keywords" content={portfolio.seo.keywords.join(", ")} />
        <meta name="author" content={portfolio.name} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={portfolio.seo.siteUrl} />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={portfolio.seo.title} />
        <meta property="og:description" content={portfolio.seo.description} />
        <meta property="og:url" content={portfolio.seo.siteUrl} />
        <meta property="og:image" content={`${portfolio.seo.siteUrl}/og-cover.svg`} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={portfolio.seo.title} />
        <meta name="twitter:description" content={portfolio.seo.description} />
        <meta name="twitter:image" content={`${portfolio.seo.siteUrl}/og-cover.svg`} />

        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <PortfolioTemplate portfolio={portfolio} />
    </>
  )
}

export default HomePage
