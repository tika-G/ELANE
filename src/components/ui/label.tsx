import type { LabelHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Label({
  className,
  ...props
}: LabelHTMLAttributes<HTMLLabelElement>) {
  return (
    <label
      className={cn(
        "block text-[10px] uppercase tracking-[0.28em] text-[var(--muted)]",
        className,
      )}
      {...props}
    />
  );
}
