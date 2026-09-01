import Link from "next/link";
import { studioCity, studioInstagram } from "@/data/studio";

const footerLinks = [
  { href: "/tratamientos", label: "Tratamientos" },
  { href: "/profesionales", label: "Profesionales" },
  { href: "/journal", label: "Journal" },
  { href: "/contacto", label: "Contacto" },
];

const legalLinks = [
  { href: "/privacidad", label: "Política de privacidad" },
  { href: "/aviso-legal", label: "Aviso legal" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--line)] bg-ink">
      <div className="mx-auto grid max-w-[1440px] gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1.2fr_1fr_1fr] lg:px-12 lg:py-20">
        <div>
          <p className="display text-4xl tracking-[0.18em]">ÉLANE</p>
          <p className="mt-4 text-sm text-muted">{studioCity}</p>
        </div>
        <nav aria-label="Pie de página" className="flex flex-col gap-3">
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[11px] tracking-[0.24em] uppercase text-ivory/80 hover:text-gold"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex flex-col gap-3">
          <p className="text-[11px] tracking-[0.24em] uppercase text-ivory/80">
            Instagram
          </p>
          <p className="text-sm text-muted">{studioInstagram}</p>
          <div className="mt-6 flex flex-col gap-3">
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[11px] tracking-[0.18em] uppercase text-muted hover:text-gold"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
