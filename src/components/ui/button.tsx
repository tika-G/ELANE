import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-[11px] font-medium uppercase tracking-[0.28em] transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--gold)] disabled:pointer-events-none disabled:opacity-40",
  {
    variants: {
      variant: {
        gold: "bg-[var(--gold)] text-[var(--ink)] hover:bg-[var(--gold-bright)]",
        outline:
          "border border-[var(--gold)] bg-transparent text-[var(--ivory)] hover:bg-[var(--gold)] hover:text-[var(--ink)]",
        ghost:
          "border-b border-transparent text-[var(--ivory)] hover:border-[var(--gold)] hover:text-[var(--gold)] px-0 rounded-none",
        inverse:
          "bg-[var(--ivory)] text-[var(--ink)] hover:bg-[var(--gold)]",
      },
      size: {
        default: "h-12 px-8",
        lg: "h-14 px-10",
        sm: "h-10 px-5 tracking-[0.22em]",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "gold",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}

export { buttonVariants };
