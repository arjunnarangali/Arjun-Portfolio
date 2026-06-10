import type { ReactNode } from "react"
import { cn } from "@/lib/cn"

interface BadgeProps {
  children: ReactNode
  className?: string
}

export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.24em] text-accent",
        className,
      )}
    >
      {children}
    </span>
  )
}
