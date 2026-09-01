"use client";

import Link from "next/link";
import { getProfessionals, getTreatments } from "@/lib/catalog";
import { frameClassName } from "@/lib/images";
import { RemoteImage } from "@/components/media/RemoteImage";
import { useFavorites } from "@/providers/FavoritesProvider";

export function FavoritesView() {
  const { favorites, isReady, toggleTreatment, toggleProfessional } =
    useFavorites();

  const treatments = getTreatments().filter((item) =>
    favorites.treatments.includes(item.id),
  );
  const professionals = getProfessionals().filter((item) =>
    favorites.professionals.includes(item.id),
  );

  if (!isReady) {
    return <p className="text-sm text-muted">Cargando favoritos…</p>;
  }

  if (treatments.length === 0 && professionals.length === 0) {
    return (
      <p className="mt-10 max-w-md text-sm leading-7 text-muted">
        Aún no has guardado nada. Cuando un tratamiento o una profesional te
        interese, usa Guardar para encontrarla después.
      </p>
    );
  }

  return (
    <div className="mt-16 space-y-20">
      {treatments.length > 0 ? (
        <section>
          <h2 className="display text-4xl">Tratamientos</h2>
          <ul className="mt-10 grid gap-12 sm:grid-cols-2">
            {treatments.map((treatment) => (
              <li key={treatment.id}>
                <Link href={`/tratamientos/${treatment.slug}`} className="block">
                  <div
                    className={`relative ${frameClassName[treatment.image.frame ?? "portrait"]}`}
                  >
                    <RemoteImage image={treatment.image} sizes="40vw" />
                  </div>
                  <h3 className="display mt-4 text-3xl">{treatment.name}</h3>
                </Link>
                <button
                  type="button"
                  className="mt-3 text-[11px] tracking-[0.22em] uppercase text-muted hover:text-gold"
                  onClick={() => toggleTreatment(treatment.id)}
                >
                  Quitar
                </button>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {professionals.length > 0 ? (
        <section>
          <h2 className="display text-4xl">Profesionales</h2>
          <ul className="mt-10 grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
            {professionals.map((professional) => (
              <li key={professional.id}>
                <Link href={`/profesionales/${professional.slug}`} className="block">
                  <div className="relative aspect-[3/4]">
                    <RemoteImage image={professional.portrait} sizes="25vw" />
                  </div>
                  <h3 className="display mt-4 text-2xl">{professional.name}</h3>
                </Link>
                <button
                  type="button"
                  className="mt-3 text-[11px] tracking-[0.22em] uppercase text-muted hover:text-gold"
                  onClick={() => toggleProfessional(professional.id)}
                >
                  Quitar
                </button>
              </li>
            ))}
          </ul>
        </section>
      ) : null}
    </div>
  );
}
