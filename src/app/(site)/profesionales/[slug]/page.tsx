import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { FavoriteButton } from "@/components/favorites/FavoriteButton";
import { RemoteImage } from "@/components/media/RemoteImage";
import { Button } from "@/components/ui/button";
import {
  getProfessionalBySlug,
  getProfessionals,
  getTreatmentsForProfessional,
} from "@/lib/catalog";

export function generateStaticParams() {
  return getProfessionals().map((professional) => ({ slug: professional.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const professional = getProfessionalBySlug(slug);
  if (!professional) return { title: "Profesional" };
  return { title: professional.name, description: professional.bio };
}

export default async function ProfessionalDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const professional = getProfessionalBySlug(slug);
  if (!professional) notFound();

  const treatments = getTreatmentsForProfessional(professional);

  return (
    <main>
      <div className="mx-auto grid max-w-[1440px] gap-12 px-5 py-16 sm:px-8 lg:grid-cols-12 lg:px-12 lg:py-24">
        <div className="relative aspect-[3/4] lg:col-span-5">
          <RemoteImage image={professional.portrait} priority sizes="50vw" />
        </div>
        <div className="lg:col-span-6 lg:col-start-7 lg:pt-8">
          <p className="eyebrow">{professional.specialty}</p>
          <h1 className="display mt-4 text-6xl">{professional.name}</h1>
          <p className="mt-4 text-[11px] tracking-[0.22em] uppercase text-gold">
            {professional.yearsOfExperience} años de oficio
          </p>
          <p className="mt-8 max-w-xl text-lg leading-8 text-ivory-soft">
            {professional.about}
          </p>
          <div className="mt-10">
            <h2 className="text-[11px] tracking-[0.28em] uppercase text-muted">
              Especialidades
            </h2>
            <p className="mt-3 text-sm text-ivory-soft">
              {professional.specialties.join(" · ")}
            </p>
          </div>
          <div className="mt-10">
            <h2 className="text-[11px] tracking-[0.28em] uppercase text-muted">
              Disponibilidad
            </h2>
            <p className="mt-3 text-sm text-ivory-soft">
              {professional.availability}
            </p>
          </div>
          <div className="mt-10">
            <h2 className="text-[11px] tracking-[0.28em] uppercase text-muted">
              Tratamientos
            </h2>
            <ul className="mt-4 space-y-2">
              {treatments.map((treatment) => (
                <li key={treatment.id}>
                  <Link
                    href={`/tratamientos/${treatment.slug}`}
                    className="text-sm text-ivory hover:text-gold"
                  >
                    {treatment.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button asChild>
              <Link href={`/reservar?profesional=${professional.slug}`}>
                Reservar con {professional.firstName}
              </Link>
            </Button>
            <FavoriteButton
              id={professional.id}
              kind="professional"
              name={professional.name}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
