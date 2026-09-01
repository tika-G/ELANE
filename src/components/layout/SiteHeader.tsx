"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CalendarDays, Heart, Menu, User, X } from "lucide-react";
import { useEffect, useState } from "react";
import { bookingHref, siteNav } from "@/lib/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [path, setPath] = useState(pathname);
  const isHome = pathname === "/";

  if (path !== pathname) {
    setPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "z-50 w-full",
        isHome ? "absolute top-0 left-0" : "sticky top-0 bg-ink",
      )}
    >
      <div
        className={cn(
          "mx-auto flex h-[4.5rem] max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:h-24 lg:px-12",
          isHome
            ? "bg-linear-to-b from-black/70 to-transparent"
            : "border-b border-[var(--line)]",
        )}
      >
        <Link
          href="/"
          className="display text-[1.65rem] tracking-[0.22em] text-ivory sm:text-[1.85rem]"
          aria-label="ÉLANE, inicio"
        >
          ÉLANE
        </Link>

        <nav
          className="hidden items-center gap-9 lg:flex"
          aria-label="Principal"
        >
          {siteNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-[11px] tracking-[0.28em] uppercase transition-colors hover:text-gold",
                pathname.startsWith(item.href)
                  ? "text-gold"
                  : "text-ivory/90",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-1 sm:gap-2">
          <Button asChild variant="outline" size="sm" className="hidden sm:inline-flex">
            <Link href={bookingHref}>Reservar</Link>
          </Button>
          <Link
            href="/mis-citas"
            className="inline-flex h-11 w-11 items-center justify-center text-ivory hover:text-gold"
            aria-label="Mis citas"
          >
            <CalendarDays className="h-4 w-4" strokeWidth={1.5} />
          </Link>
          <Link
            href="/favoritos"
            className="inline-flex h-11 w-11 items-center justify-center text-ivory hover:text-gold"
            aria-label="Favoritos"
          >
            <Heart className="h-4 w-4" strokeWidth={1.5} />
          </Link>
          <Link
            href="/login"
            className="inline-flex h-11 w-11 items-center justify-center text-ivory hover:text-gold"
            aria-label="Cuenta"
          >
            <User className="h-4 w-4" strokeWidth={1.5} />
          </Link>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center text-ivory lg:hidden"
            aria-expanded={open}
            aria-controls="menu-movil"
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">
              {open ? "Cerrar menú" : "Abrir menú"}
            </span>
            {open ? (
              <X className="h-5 w-5" strokeWidth={1.5} />
            ) : (
              <Menu className="h-5 w-5" strokeWidth={1.5} />
            )}
          </button>
        </div>
      </div>

      <div
        id="menu-movil"
        hidden={!open}
        className="fixed inset-0 z-40 bg-ink lg:hidden"
      >
        <div className="flex h-[4.5rem] items-center justify-between px-5">
          <span className="display text-[1.65rem] tracking-[0.22em]">ÉLANE</span>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center"
            onClick={() => setOpen(false)}
          >
            <span className="sr-only">Cerrar menú</span>
            <X className="h-5 w-5" strokeWidth={1.5} />
          </button>
        </div>
        <nav
          className="flex flex-col gap-7 px-7 pt-10"
          aria-label="Móvil"
        >
          {siteNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="display text-5xl text-ivory"
            >
              {item.label}
            </Link>
          ))}
          <Link href={bookingHref} className="display text-5xl text-gold">
            Reservar
          </Link>
          <div className="mt-8 flex flex-col gap-4 text-[12px] tracking-[0.22em] uppercase text-muted">
            <Link href="/favoritos">Favoritos</Link>
            <Link href="/mis-citas">Mis citas</Link>
            <Link href="/login">Cuenta</Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
