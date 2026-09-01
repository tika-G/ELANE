import Link from "next/link";
import type { Professional } from "@/lib/types";
import { RemoteImage } from "@/components/media/RemoteImage";

export function FeaturedProfessionals({
  professionals,
}: {
  professionals: Professional[];
}) {
  return (
    <section className="border-t border-[var(--line)]">
      <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="eyebrow">El equipo</p>
            <h2 className="display mt-4 text-4xl sm:text-5xl">
              Profesionales
            </h2>
          </div>
          <Link
            href="/profesionales"
            className="text-[11px] tracking-[0.28em] uppercase text-gold hover:text-gold-bright"
          >
            Conocer al equipo
          </Link>
        </div>
        <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {professionals.map((professional) => (
            <article key={professional.id}>
              <Link href={`/profesionales/${professional.slug}`} className="group block">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <RemoteImage
                    image={professional.portrait}
                    className="transition-transform duration-700 group-hover:scale-[1.03]"
                    sizes="(min-width: 1024px) 22vw, 50vw"
                  />
                </div>
                <h3 className="display mt-5 text-3xl">{professional.name}</h3>
                <p className="mt-2 text-[11px] tracking-[0.22em] uppercase text-gold">
                  {professional.specialty}
                </p>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
