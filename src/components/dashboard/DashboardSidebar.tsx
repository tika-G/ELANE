"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { dashboardNav } from "@/lib/navigation";
import { cn } from "@/lib/utils";

export function DashboardSidebar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="flex h-16 items-center justify-between border-b border-[var(--line)] px-5 lg:hidden">
        <Link href="/dashboard" className="display text-2xl tracking-[0.18em]">
          ÉLANE
        </Link>
        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
        >
          <span className="sr-only">Menú del estudio</span>
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      <aside
        className={cn(
          "border-[var(--line)] bg-ink lg:flex lg:min-h-svh lg:w-64 lg:flex-col lg:border-r",
          open ? "block" : "hidden lg:flex",
        )}
      >
        <div className="hidden px-8 py-10 lg:block">
          <Link href="/dashboard" className="display text-3xl tracking-[0.18em]">
            ÉLANE
          </Link>
          <p className="mt-3 text-[10px] tracking-[0.28em] uppercase text-muted">
            Estudio
          </p>
        </div>
        <nav aria-label="Estudio" className="flex flex-col gap-1 px-5 py-6 lg:px-8">
          {dashboardNav.map((item) => {
            const active =
              item.href === "/dashboard"
                ? pathname === "/dashboard"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "py-2 text-[12px] tracking-[0.2em] uppercase transition-colors",
                  active ? "text-gold" : "text-ivory/75 hover:text-ivory",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <p className="mt-auto hidden px-8 pb-8 text-[10px] tracking-[0.2em] uppercase text-muted lg:block">
          Datos de demostración
        </p>
      </aside>
    </>
  );
}
