import type { InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Input({
  className,
  ...props
}: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={cn(
        "h-12 w-full border-b border-[var(--line)] bg-transparent px-0 text-[15px] text-[var(--ivory)] placeholder:text-[var(--muted)] transition-colors focus:border-[var(--gold)] focus-visible:outline-none",
        className,
      )}
      {...props}
    />
  );
}
