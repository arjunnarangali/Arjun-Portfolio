const trimTrailingSlashes = (value?: string) => value?.replace(/\/+$/, "")

export const GITHUB_URL = trimTrailingSlashes(import.meta.env.VITE_GITHUB_URL) ?? ""
export const LINKEDIN_URL = import.meta.env.VITE_LINKEDIN_URL
export const EMAIL_URL = import.meta.env.VITE_EMAIL_URL
export const RESUME_URL = import.meta.env.VITE_RESUME_URL
export const DOMAIN_URL = import.meta.env.VITE_DOMAIN_URL
export const NPM_PACKAGE_BASE_URL = trimTrailingSlashes(import.meta.env.VITE_NPM_PACKAGE_BASE_URL)
export const NPM_PACKAGES_URL = import.meta.env.VITE_NPM_PACKAGES_URL
export const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
export const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY
export const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID

export const getGitHubRepositoryUrl = (repositorySlug: string) =>
  GITHUB_URL ? `${GITHUB_URL}/${repositorySlug}` : undefined

export const getNpmPackageUrl = (packageName: string) =>
  NPM_PACKAGE_BASE_URL ? `${NPM_PACKAGE_BASE_URL}/${encodeURIComponent(packageName)}` : undefined
