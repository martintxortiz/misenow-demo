import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "cn"

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-lg border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default:
          "border-black/25 border-b-black/35 bg-primary text-primary-foreground shadow-[inset_0_1px_0_rgb(255_255_255/0.2),inset_0_-1px_0_rgb(0_0_0/0.2),0_1px_2px_rgb(0_0_0/0.15)] hover:bg-primary/80 hover:shadow-[inset_0_1px_0_rgb(255_255_255/0.25),inset_0_-1px_0_rgb(0_0_0/0.2),0_1px_2px_rgb(0_0_0/0.15),0_4px_8px_-4px_rgb(0_0_0/0.25)] aria-expanded:shadow-[inset_0_1px_0_rgb(255_255_255/0.25),inset_0_-1px_0_rgb(0_0_0/0.2),0_1px_2px_rgb(0_0_0/0.15),0_4px_8px_-4px_rgb(0_0_0/0.25)]",
        outline:
          "border-foreground/15 border-b-foreground/20 bg-background shadow-[inset_0_1px_0_rgb(255_255_255/0.8),inset_0_-1px_0_rgb(0_0_0/0.05),0_1px_2px_rgb(0_0_0/0.08)] hover:bg-muted hover:text-foreground hover:shadow-[inset_0_1px_0_rgb(255_255_255/0.8),inset_0_-1px_0_rgb(0_0_0/0.05),0_1px_2px_rgb(0_0_0/0.08),0_4px_8px_-4px_rgb(0_0_0/0.15)] aria-expanded:bg-muted aria-expanded:text-foreground aria-expanded:shadow-[inset_0_1px_0_rgb(255_255_255/0.8),inset_0_-1px_0_rgb(0_0_0/0.05),0_1px_2px_rgb(0_0_0/0.08),0_4px_8px_-4px_rgb(0_0_0/0.15)] dark:border-white/15 dark:border-b-black/50 dark:bg-input/30 dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.12),0_1px_2px_rgb(0_0_0/0.4)] dark:hover:bg-input/50 dark:hover:shadow-[inset_0_1px_0_rgb(255_255_255/0.15),0_1px_2px_rgb(0_0_0/0.4),0_4px_8px_-4px_rgb(0_0_0/0.5)] dark:aria-expanded:shadow-[inset_0_1px_0_rgb(255_255_255/0.15),0_1px_2px_rgb(0_0_0/0.4),0_4px_8px_-4px_rgb(0_0_0/0.5)]",
        secondary:
          "border-foreground/10 border-b-foreground/15 bg-secondary text-secondary-foreground shadow-[inset_0_1px_0_rgb(255_255_255/0.7),inset_0_-1px_0_rgb(0_0_0/0.05),0_1px_2px_rgb(0_0_0/0.08)] hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] hover:shadow-[inset_0_1px_0_rgb(255_255_255/0.8),inset_0_-1px_0_rgb(0_0_0/0.05),0_1px_2px_rgb(0_0_0/0.08),0_4px_8px_-4px_rgb(0_0_0/0.15)] aria-expanded:bg-secondary aria-expanded:text-secondary-foreground aria-expanded:shadow-[inset_0_1px_0_rgb(255_255_255/0.8),inset_0_-1px_0_rgb(0_0_0/0.05),0_1px_2px_rgb(0_0_0/0.08),0_4px_8px_-4px_rgb(0_0_0/0.15)] dark:border-white/10 dark:border-b-black/50 dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.12),0_1px_2px_rgb(0_0_0/0.4)] dark:hover:shadow-[inset_0_1px_0_rgb(255_255_255/0.15),0_1px_2px_rgb(0_0_0/0.4),0_4px_8px_-4px_rgb(0_0_0/0.5)] dark:aria-expanded:shadow-[inset_0_1px_0_rgb(255_255_255/0.15),0_1px_2px_rgb(0_0_0/0.4),0_4px_8px_-4px_rgb(0_0_0/0.5)]",
        ghost:
          "hover:border-foreground/[0.06] hover:bg-muted hover:text-foreground hover:shadow-[inset_0_1px_0_rgb(255_255_255/0.25),0_1px_2px_rgb(0_0_0/0.025)] aria-expanded:border-foreground/[0.06] aria-expanded:bg-muted aria-expanded:text-foreground aria-expanded:shadow-[inset_0_1px_0_rgb(255_255_255/0.25),0_1px_2px_rgb(0_0_0/0.025)] aria-pressed:border-foreground/[0.06] aria-pressed:bg-muted aria-pressed:shadow-[inset_0_1px_0_rgb(255_255_255/0.25),0_1px_2px_rgb(0_0_0/0.025)] dark:hover:border-white/[0.06] dark:hover:bg-muted/50 dark:hover:shadow-[inset_0_1px_0_rgb(255_255_255/0.05),0_1px_2px_rgb(0_0_0/0.15)] dark:aria-expanded:border-white/[0.06] dark:aria-expanded:shadow-[inset_0_1px_0_rgb(255_255_255/0.05),0_1px_2px_rgb(0_0_0/0.15)] dark:aria-pressed:border-white/[0.06] dark:aria-pressed:shadow-[inset_0_1px_0_rgb(255_255_255/0.05),0_1px_2px_rgb(0_0_0/0.15)]",
        destructive:
          "border-destructive/25 border-b-destructive/35 bg-destructive/10 text-destructive shadow-[inset_0_1px_0_rgb(255_255_255/0.5),inset_0_-1px_0_rgb(0_0_0/0.05),0_1px_2px_rgb(0_0_0/0.08)] hover:bg-destructive/20 hover:shadow-[inset_0_1px_0_rgb(255_255_255/0.6),inset_0_-1px_0_rgb(0_0_0/0.05),0_1px_2px_rgb(0_0_0/0.08),0_4px_8px_-4px_rgb(0_0_0/0.15)] aria-expanded:focus-visible:border-destructive/40 focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:border-white/10 dark:border-b-black/50 dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.12),0_1px_2px_rgb(0_0_0/0.4)] dark:hover:bg-destructive/30 dark:hover:shadow-[inset_0_1px_0_rgb(255_255_255/0.15),0_1px_2px_rgb(0_0_0/0.4),0_4px_8px_-4px_rgb(0_0_0/0.5)] dark:focus-visible:ring-destructive/40",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default:
          "h-8 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
        xs: "h-6 gap-1 rounded-[min(var(--radius-md),10px)] px-2 text-xs in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-7 gap-1 rounded-[min(var(--radius-md),12px)] px-2.5 text-[0.8rem] in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3.5",
        lg: "h-9 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
        icon: "size-8",
        "icon-xs":
          "size-6 rounded-[min(var(--radius-md),10px)] in-data-[slot=button-group]:rounded-lg [&_svg:not([class*='size-'])]:size-3",
        "icon-sm":
          "size-7 rounded-[min(var(--radius-md),12px)] in-data-[slot=button-group]:rounded-lg",
        "icon-lg": "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
