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
        border: "hsl(var(--border) / <alpha-value>)",
        accent: "hsl(var(--accent) / <alpha-value>)",
        success: "hsl(var(--success) / <alpha-value>)",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "monospace"],
      },
      boxShadow: {
        glass: "0 24px 80px rgba(15, 23, 42, 0.28)",
        glow: "0 0 0 1px rgba(148, 163, 184, 0.08), 0 20px 60px rgba(99, 102, 241, 0.28)",
      },
      backgroundImage: {
        "hero-radial":
          "radial-gradient(circle at top, rgba(99, 102, 241, 0.22), transparent 40%), radial-gradient(circle at 80% 20%, rgba(56, 189, 248, 0.18), transparent 32%), radial-gradient(circle at 20% 80%, rgba(168, 85, 247, 0.16), transparent 26%)",
      },
      animation: {
        float: "float 7s ease-in-out infinite",
        shimmer: "shimmer 7s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "200% 50%" },
        },
      },
    },
  },
  plugins: [typography],
}

export default config
