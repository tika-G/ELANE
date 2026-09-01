import type { Metadata } from "next";
import { demoAgenda } from "@/data/studio";
import { getProfessionals } from "@/lib/catalog";
import { formatLongDate } from "@/lib/format";
import { statusLabels } from "@/lib/navigation";

export const metadata: Metadata = {
  title: "Agenda",
};

export default function AgendaPage() {
  const professionals = getProfessionals();
  const grouped = demoAgenda.reduce<Record<string, typeof demoAgenda>>(
    (acc, entry) => {
      acc[entry.date] ??= [];
      acc[entry.date].push(entry);
      return acc;
    },
    {},
  );

  return (
    <main className="px-5 py-10 sm:px-8 lg:px-10 lg:py-14">
      <p className="eyebrow">Calendario</p>
      <h1 className="display mt-4 text-5xl">Agenda</h1>
      <div className="mt-12 space-y-14">
        {Object.entries(grouped).map(([date, entries]) => (
          <section key={date}>
            <h2 className="display text-3xl">{formatLongDate(date)}</h2>
            <ol className="mt-6">
              {entries.map((entry) => {
                const professional = professionals.find(
                  (item) => item.id === entry.professionalId,
                );
                return (
                  <li
                    key={entry.id}
                    className="grid grid-cols-[5rem_1fr] gap-6 border-t border-[var(--line)] py-5 sm:grid-cols-[6rem_1.2fr_1fr_8rem]"
                  >
                    <p className="text-sm tracking-[0.12em]">{entry.time}</p>
                    <div>
                      <p>{entry.clientName}</p>
                      <p className="mt-1 text-sm text-muted">
                        {entry.treatmentName}
                      </p>
                    </div>
                    <p className="hidden text-sm text-ivory-soft sm:block">
                      {professional?.name}
                    </p>
                    <p className="text-[11px] tracking-[0.18em] uppercase text-gold">
                      {statusLabels[entry.status]}
                    </p>
                  </li>
                );
              })}
            </ol>
          </section>
        ))}
      </div>
    </main>
  );
}
