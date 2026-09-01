import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { FavoriteButton } from "@/components/favorites/FavoriteButton";
import { RemoteImage } from "@/components/media/RemoteImage";
import { Button } from "@/components/ui/button";
import { categoryLabels } from "@/data/treatments";
import { getTreatmentBySlug, getTreatments } from "@/lib/catalog";
import { formatDuration, formatPrice } from "@/lib/format";

export function generateStaticParams() {
  return getTreatments().map((treatment) => ({ slug: treatment.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const treatment = getTreatmentBySlug(slug);
  if (!treatment) return { title: "Tratamiento" };
  return { title: treatment.name, description: treatment.shortDescription };
}

export default async function TreatmentDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const treatment = getTreatmentBySlug(slug);
  if (!treatment) notFound();

  return (
    <main>
      <div className="relative min-h-[70vh] overflow-hidden">
        <RemoteImage
          image={treatment.image}
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(12,11,10,0.15)_0%,rgba(12,11,10,0.78)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 px-5 pb-12 sm:px-8 lg:px-16">
          <p className="eyebrow">{categoryLabels[treatment.category]}</p>
          <h1 className="display mt-4 max-w-4xl text-5xl sm:text-7xl">
            {treatment.name}
          </h1>
        </div>
      </div>

      <div className="mx-auto grid max-w-[1440px] gap-16 px-5 py-16 sm:px-8 lg:grid-cols-[1.2fr_0.8fr] lg:px-12 lg:py-24">
        <div>
          <p className="max-w-2xl text-lg leading-8 text-ivory-soft">
            {treatment.description}
          </p>
          <div className="mt-14">
            <h2 className="display text-3xl">Beneficios</h2>
            <ul className="mt-6 space-y-3 text-sm leading-7 text-muted">
              {treatment.benefits.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="mt-14">
            <h2 className="display text-3xl">Qué esperar</h2>
            <ol className="mt-6 space-y-3 text-sm leading-7 text-muted">
              {treatment.whatToExpect.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ol>
          </div>
          <div className="mt-14">
            <h2 className="display text-3xl">Frecuencia recomendada</h2>
            <p className="mt-6 max-w-xl text-sm leading-7 text-muted">
              {treatment.recommendedFrequency}
            </p>
          </div>
        </div>

        <aside className="lg:sticky lg:top-28 lg:self-start">
          <p className="text-[11px] tracking-[0.28em] uppercase text-gold">
            {formatDuration(treatment.durationMinutes)}
          </p>
          <p className="display mt-4 text-5xl">{formatPrice(treatment.price)}</p>
          <div className="mt-10 flex flex-col gap-4">
            <Button asChild>
              <Link href={`/reservar?tratamiento=${treatment.slug}`}>
                Reservar este tratamiento
              </Link>
            </Button>
            <FavoriteButton
              id={treatment.id}
              kind="treatment"
              name={treatment.name}
            />
          </div>
        </aside>
      </div>
    </main>
  );
}
