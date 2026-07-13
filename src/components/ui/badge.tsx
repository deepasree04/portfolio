import * as React from "react"
import { cn } from "../../utils/cn"

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'primary' | 'secondary' | 'emerald' | 'outline' | 'default';
}

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = 'default', ...props }, ref) => {
    const baseStyles = "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold font-mono tracking-wider transition-colors duration-300"
    
    const variants = {
      default: "bg-white/5 text-muted-light border border-white/10",
      primary: "bg-primary/10 text-primary-light border border-primary/20 shadow-[0_0_10px_rgba(139,92,246,0.1)]",
      secondary: "bg-secondary/10 text-secondary-light border border-secondary/20 shadow-[0_0_10px_rgba(6,182,212,0.1)]",
      emerald: "bg-emerald-accent/10 text-emerald-accent border border-emerald-accent/20 shadow-[0_0_10px_rgba(16,185,129,0.1)]",
      outline: "border border-white/20 text-foreground"
    }

    return (
      <span
        ref={ref}
        className={cn(baseStyles, variants[variant], className)}
        {...props}
      />
    )
  }
)

Badge.displayName = "Badge"
