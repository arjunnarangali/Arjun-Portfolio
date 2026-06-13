import { createContext } from "react"

export type Theme = "dark" | "light"

export interface ThemeContextValue {
  theme: Theme
  toggleTheme: () => void
}

export const STORAGE_KEY = "portfolio-theme"

export const ThemeContext = createContext<ThemeContextValue | undefined>(undefined)

export function getInitialTheme(): Theme {
  if (typeof window === "undefined") {
    return "light"
  }

  const storedTheme = window.localStorage.getItem(STORAGE_KEY)
  if (storedTheme === "dark" || storedTheme === "light") {
    return storedTheme
  }

  return "light"
}
