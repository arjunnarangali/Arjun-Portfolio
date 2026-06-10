import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react"
import { cn } from "@/lib/cn"

type ButtonVariant = "primary" | "secondary" | "ghost"
type ButtonSize = "sm" | "md" | "lg"

interface SharedButtonProps {
  children: ReactNode
  className?: string
  variant?: ButtonVariant
  size?: ButtonSize
  icon?: ReactNode
  iconPosition?: "left" | "right"
}

type AnchorProps = SharedButtonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string
  }

type NativeButtonProps = SharedButtonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined
  }

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-accent text-slate-950 shadow-lg shadow-accent/20 hover:bg-accent/90 focus-visible:ring-accent/70",
  secondary:
    "border border-border/80 bg-card/70 text-foreground hover:border-accent/30 hover:bg-card focus-visible:ring-accent/50",
  ghost: "bg-transparent text-foreground hover:bg-white/5 focus-visible:ring-accent/40",
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: "min-h-10 px-4 text-sm",
  md: "min-h-11 px-5 text-sm",
  lg: "min-h-12 px-6 text-base",
}

function buttonClasses(variant: ButtonVariant, size: ButtonSize) {
  return cn(
    "ring-focus inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-200",
    variantClasses[variant],
    sizeClasses[size],
  )
}

export function Button(props: AnchorProps | NativeButtonProps) {
  const {
    children,
    className,
    variant = "primary",
    size = "md",
    icon,
    iconPosition = "right",
    ...rest
  } = props

  const content = (
    <>
      {icon && iconPosition === "left" ? <span aria-hidden="true">{icon}</span> : null}
      <span>{children}</span>
      {icon && iconPosition === "right" ? <span aria-hidden="true">{icon}</span> : null}
    </>
  )

  if ("href" in props && props.href) {
    const anchorProps = rest as AnchorHTMLAttributes<HTMLAnchorElement>
    return (
      <a {...anchorProps} className={cn(buttonClasses(variant, size), className)}>
        {content}
      </a>
    )
  }

  const buttonProps = rest as ButtonHTMLAttributes<HTMLButtonElement>
  return (
    <button
      type={buttonProps.type ?? "button"}
      {...buttonProps}
      className={cn(buttonClasses(variant, size), className)}
    >
      {content}
    </button>
  )
}
