import typography from "@tailwindcss/typography"
import type { Config } from "tailwindcss"

const config: Config = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  darkMode: ["class"],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background) / <alpha-value>)",
        foreground: "hsl(var(--foreground) / <alpha-value>)",
        muted: "hsl(var(--muted) / <alpha-value>)",
        "muted-foreground": "hsl(var(--muted-foreground) / <alpha-value>)",
        card: "hsl(var(--card) / <alpha-value>)",
        "card-foreground": "hsl(var(--card-foreground) / <alpha-value>)",
        border: "hsl(var(--border) / <alpha-value>)",
        accent: "hsl(var(--accent) / <alpha-value>)",
        success: "hsl(var(--success) / <alpha-value>)",
        paper: "hsl(var(--paper) / <alpha-value>)",
      },
      fontFamily: {
        sans: ["Inter", "Georgia", "ui-serif", "serif"],
        display: ["Iowan Old Style", "Palatino Linotype", "Book Antiqua", "Georgia", "serif"],
        mono: ["JetBrains Mono", "ui-monospace", "monospace"],
      },
      boxShadow: {
        card: "0 12px 30px rgba(17, 24, 39, 0.06)",
        elevated: "0 18px 40px rgba(17, 24, 39, 0.1)",
      },
    },
  },
  plugins: [typography],
}

export default config
