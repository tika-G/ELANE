import type { Metadata } from "next";
import { demoAgenda } from "@/data/studio";
import { getProfessionals } from "@/lib/catalog";
import { statusLabels } from "@/lib/navigation";

export const metadata: Metadata = {
  title: "Profesionales del estudio",
};

export default function ProfessionalsAdminPage() {
  const professionals = getProfessionals();

  return (
    <main className="px-5 py-10 sm:px-8 lg:px-10 lg:py-14">
      <p className="eyebrow">Equipo</p>
      <h1 className="display mt-4 text-5xl">Profesionales</h1>
      <ul className="mt-12 divide-y divide-[var(--line)] border-y border-[var(--line)]">
        {professionals.map((professional) => {
          const count = demoAgenda.filter(
            (entry) => entry.professionalId === professional.id,
          ).length;
          return (
            <li
              key={professional.id}
              className="grid gap-3 py-6 sm:grid-cols-[1.4fr_1fr_8rem_8rem]"
            >
              <p className="display text-2xl">{professional.name}</p>
              <p className="text-sm text-ivory-soft">{professional.specialty}</p>
              <p className="text-[11px] tracking-[0.18em] uppercase text-gold">
                {statusLabels[professional.status]}
              </p>
              <p className="text-sm text-muted">{count} citas</p>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
