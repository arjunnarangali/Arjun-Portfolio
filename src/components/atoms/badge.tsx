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
        "inline-flex items-center rounded-sm border border-accent/30 bg-transparent px-3 py-1 text-[11px] font-medium uppercase tracking-[0.28em] text-accent",
        className,
      )}
    >
      {children}
    </span>
  )
}
