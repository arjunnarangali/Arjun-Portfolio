import { HiMoon, HiSun } from "react-icons/hi2"
import { useTheme } from "@/hooks/use-theme"

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === "dark"

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="ring-focus inline-flex h-11 w-11 items-center justify-center rounded-full border border-border/70 bg-card/60 text-foreground transition hover:border-accent/30 hover:text-accent"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDark ? <HiSun className="h-5 w-5" /> : <HiMoon className="h-5 w-5" />}
    </button>
  )
}
