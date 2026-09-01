"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { DurationFilter, PriceFilter, Treatment, TreatmentCategory } from "@/lib/types";
import { categoryLabels } from "@/data/treatments";
import { filterTreatments } from "@/lib/catalog";
import { formatDuration, formatPrice } from "@/lib/format";
import { frameClassName } from "@/lib/images";
import { RemoteImage } from "@/components/media/RemoteImage";
import { cn } from "@/lib/utils";

const categories: Array<TreatmentCategory | "todas"> = [
  "todas",
  "facial",
  "corporal",
  "masaje",
  "bienestar",
];

const durationOptions: { value: DurationFilter; label: string }[] = [
  { value: "todas", label: "Cualquier duración" },
  { value: "60", label: "60 min" },
  { value: "75", label: "75 min" },
  { value: "90", label: "90 min" },
];

const priceOptions: { value: PriceFilter; label: string }[] = [
  { value: "todos", label: "Cualquier precio" },
  { value: "hasta100", label: "Hasta 100 €" },
  { value: "100a140", label: "100 € – 140 €" },
  { value: "mas140", label: "Más de 140 €" },
];

export function TreatmentDiscovery({
  initialCategory,
}: {
  initialCategory?: string;
}) {
  const startingCategory =
    initialCategory && initialCategory in categoryLabels
      ? (initialCategory as TreatmentCategory)
      : "todas";

  const [category, setCategory] = useState<TreatmentCategory | "todas">(
    startingCategory,
  );
  const [duration, setDuration] = useState<DurationFilter>("todas");
  const [price, setPrice] = useState<PriceFilter>("todos");

  const results = useMemo(
    () => filterTreatments({ category, duration, price }),
    [category, duration, price],
  );

  return (
    <div>
      <nav
        aria-label="Categorías"
        className="flex flex-wrap gap-x-8 gap-y-3 border-b border-[var(--line)]"
      >
        {categories.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setCategory(item)}
            className={cn(
              "pb-4 text-[11px] tracking-[0.28em] uppercase transition-colors",
              category === item
                ? "border-b border-gold text-gold"
                : "text-muted hover:text-ivory",
            )}
          >
            {item === "todas" ? "Todos" : categoryLabels[item]}
          </button>
        ))}
      </nav>

      <div className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:gap-10">
        <label className="flex min-w-40 flex-col gap-3">
          <span className="text-[10px] tracking-[0.28em] uppercase text-muted">
            Duración
          </span>
          <select
            value={duration}
            onChange={(event) =>
              setDuration(event.target.value as DurationFilter)
            }
            className="h-11 border-b border-[var(--line)] bg-transparent text-sm text-ivory focus-visible:outline-none"
          >
            {durationOptions.map((option) => (
              <option key={option.value} value={option.value} className="bg-ink">
                {option.label}
              </option>
            ))}
          </select>
        </label>
        <label className="flex min-w-40 flex-col gap-3">
          <span className="text-[10px] tracking-[0.28em] uppercase text-muted">
            Precio
          </span>
          <select
            value={price}
            onChange={(event) => setPrice(event.target.value as PriceFilter)}
            className="h-11 border-b border-[var(--line)] bg-transparent text-sm text-ivory focus-visible:outline-none"
          >
            {priceOptions.map((option) => (
              <option key={option.value} value={option.value} className="bg-ink">
                {option.label}
              </option>
            ))}
          </select>
        </label>
      </div>

      {results.length === 0 ? (
        <p className="mt-20 max-w-md text-sm leading-7 text-muted">
          No hay tratamientos con esos filtros. Prueba otra duración o categoría.
        </p>
      ) : (
        <ul className="mt-16 grid gap-x-10 gap-y-20 lg:grid-cols-2">
          {results.map((treatment) => (
            <li key={treatment.id}>
              <TreatmentRow treatment={treatment} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function TreatmentRow({ treatment }: { treatment: Treatment }) {
  return (
    <article className="grid gap-6 sm:grid-cols-[minmax(0,0.9fr)_1.1fr] sm:items-start">
      <Link
        href={`/tratamientos/${treatment.slug}`}
        className={cn(
          "relative block overflow-hidden",
          frameClassName[treatment.image.frame ?? "portrait"],
        )}
      >
        <RemoteImage
          image={treatment.image}
          sizes="(min-width: 1024px) 30vw, 100vw"
        />
      </Link>
      <div className="sm:pt-4">
        <p className="text-[10px] tracking-[0.28em] uppercase text-gold">
          {categoryLabels[treatment.category]}
        </p>
        <h2 className="display mt-3 text-4xl">
          <Link href={`/tratamientos/${treatment.slug}`}>{treatment.name}</Link>
        </h2>
        <p className="mt-4 max-w-md text-sm leading-7 text-muted">
          {treatment.shortDescription}
        </p>
        <p className="mt-6 text-[12px] tracking-[0.18em] uppercase text-ivory/75">
          {formatDuration(treatment.durationMinutes)} · {formatPrice(treatment.price)}
        </p>
      </div>
    </article>
  );
}
