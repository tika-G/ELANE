import type { TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Textarea({
  className,
  ...props
}: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      className={cn(
        "min-h-28 w-full resize-y border-b border-[var(--line)] bg-transparent py-3 text-[15px] text-[var(--ivory)] placeholder:text-[var(--muted)] transition-colors focus:border-[var(--gold)] focus-visible:outline-none",
        className,
      )}
      {...props}
    />
  );
}
