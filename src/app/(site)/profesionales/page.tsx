import Link from "next/link";
import type { Metadata } from "next";
import { RemoteImage } from "@/components/media/RemoteImage";
import { getProfessionals } from "@/lib/catalog";

export const metadata: Metadata = {
  title: "Profesionales",
  description:
    "El equipo de ÉLANE en Barcelona: facialistas, masaje, corporal y bienestar.",
};

export default function ProfessionalsPage() {
  const professionals = getProfessionals();

  return (
    <main className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
      <p className="eyebrow">El equipo</p>
      <h1 className="display mt-5 text-6xl sm:text-7xl">Profesionales</h1>
      <p className="mt-6 max-w-xl text-lg leading-8 text-ivory-soft">
        Manos precisas, criterio propio y un ritmo que no acelera el cuerpo.
      </p>
      <ul className="mt-20 space-y-24">
        {professionals.map((professional, index) => (
          <li
            key={professional.id}
            className="grid items-center gap-10 lg:grid-cols-12"
          >
            <Link
              href={`/profesionales/${professional.slug}`}
              className={`relative aspect-[3/4] overflow-hidden lg:col-span-5 ${
                index % 2 === 1 ? "lg:col-start-8" : ""
              }`}
            >
              <RemoteImage
                image={professional.portrait}
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
            </Link>
            <div
              className={`lg:col-span-6 ${
                index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : "lg:col-start-7"
              }`}
            >
              <p className="text-[11px] tracking-[0.28em] uppercase text-gold">
                {professional.specialty}
              </p>
              <h2 className="display mt-4 text-5xl">
                <Link href={`/profesionales/${professional.slug}`}>
                  {professional.name}
                </Link>
              </h2>
              <p className="mt-6 max-w-md text-sm leading-7 text-muted">
                {professional.bio}
              </p>
              <p className="mt-4 text-[11px] tracking-[0.2em] uppercase text-ivory/70">
                {professional.yearsOfExperience} años de oficio
              </p>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
