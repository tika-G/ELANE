import Link from "next/link";
import type { Treatment } from "@/lib/types";
import { formatDuration, formatPrice } from "@/lib/format";
import { RemoteImage } from "@/components/media/RemoteImage";
import { cn } from "@/lib/utils";

export function FeaturedTreatments({ treatments }: { treatments: Treatment[] }) {
  return (
    <section className="border-t border-[var(--line)]">
      <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="eyebrow">Selección</p>
            <h2 className="display mt-4 text-4xl sm:text-5xl">
              Tratamientos destacados
            </h2>
          </div>
          <Link
            href="/tratamientos"
            className="text-[11px] tracking-[0.28em] uppercase text-gold hover:text-gold-bright"
          >
            Ver todos
          </Link>
        </div>

        <div className="mt-16 grid gap-x-8 gap-y-16 sm:grid-cols-2">
          {treatments.map((treatment, index) => (
            <article
              key={treatment.id}
              className={index % 2 === 1 ? "sm:mt-16" : undefined}
            >
              <Link href={`/tratamientos/${treatment.slug}`} className="group block">
                <div
                  className={cn(
                    "relative overflow-hidden",
                    index % 2 === 0 ? "aspect-[4/5]" : "aspect-[3/4]",
                  )}
                >
                  <RemoteImage
                    image={treatment.image}
                    className="transition-transform duration-700 group-hover:scale-[1.03]"
                    sizes="(min-width: 1024px) 40vw, 100vw"
                  />
                </div>
                <div className="mt-6 flex items-baseline justify-between gap-4">
                  <h3 className="display text-3xl">{treatment.name}</h3>
                  <p className="text-[12px] tracking-[0.16em] text-gold">
                    {formatPrice(treatment.price)}
                  </p>
                </div>
                <p className="mt-3 max-w-md text-sm leading-7 text-muted">
                  {treatment.shortDescription}
                </p>
                <p className="mt-4 text-[11px] tracking-[0.22em] uppercase text-ivory/70">
                  {formatDuration(treatment.durationMinutes)}
                </p>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
