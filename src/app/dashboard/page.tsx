import Link from "next/link";
import type { Metadata } from "next";
import {
  dashboardGreetingName,
  dashboardMetrics,
  demoAgenda,
} from "@/data/studio";
import { getProfessionals } from "@/lib/catalog";
import { formatLongDate } from "@/lib/format";
import { statusLabels } from "@/lib/navigation";

export const metadata: Metadata = {
  title: "Estudio",
};

export default function DashboardPage() {
  const professionals = getProfessionals();
  const today = demoAgenda.filter((entry) => entry.date === "2026-09-01");
  const upcoming = demoAgenda.filter((entry) => entry.date > "2026-09-01");

  return (
    <main className="px-5 py-10 sm:px-8 lg:px-10 lg:py-14">
      <p className="eyebrow">Resumen</p>
      <h1 className="display mt-4 text-5xl">
        Buenos días, {dashboardGreetingName}.
      </h1>

      <dl className="mt-12 grid gap-10 sm:grid-cols-2 xl:grid-cols-4">
        {dashboardMetrics.map((metric) => (
          <div key={metric.id} className="border-t border-[var(--line)] pt-5">
            <dt className="text-[10px] tracking-[0.24em] uppercase text-muted">
              {metric.label}
            </dt>
            <dd className="display mt-3 text-4xl">{metric.value}</dd>
          </div>
        ))}
      </dl>

      <section className="mt-16">
        <div className="flex items-end justify-between">
          <h2 className="display text-3xl">Agenda de hoy</h2>
          <Link
            href="/dashboard/agenda"
            className="text-[11px] tracking-[0.22em] uppercase text-gold"
          >
            Ver agenda
          </Link>
        </div>
        <AgendaTable
          entries={today}
          professionals={professionals}
        />
      </section>

      <section className="mt-16 grid gap-16 lg:grid-cols-2">
        <div>
          <h2 className="display text-3xl">Reservas recientes</h2>
          <AgendaTable
            entries={demoAgenda.slice(0, 4)}
            professionals={professionals}
            compact
          />
        </div>
        <div>
          <h2 className="display text-3xl">Próximas citas</h2>
          <AgendaTable
            entries={upcoming}
            professionals={professionals}
            compact
          />
        </div>
      </section>
    </main>
  );
}

function AgendaTable({
  entries,
  professionals,
  compact,
}: {
  entries: typeof demoAgenda;
  professionals: ReturnType<typeof getProfessionals>;
  compact?: boolean;
}) {
  if (entries.length === 0) {
    return (
      <p className="mt-6 text-sm text-muted">No hay citas en este periodo.</p>
    );
  }

  return (
    <div className="mt-6 overflow-x-auto">
      <table className="w-full min-w-[640px] text-left text-sm">
        <thead>
          <tr className="text-[10px] tracking-[0.2em] uppercase text-muted">
            {!compact ? <th className="py-3 font-medium">Hora</th> : (
              <th className="py-3 font-medium">Fecha</th>
            )}
            <th className="py-3 font-medium">Clienta</th>
            <th className="py-3 font-medium">Tratamiento</th>
            <th className="py-3 font-medium">Profesional</th>
            <th className="py-3 font-medium">Estado</th>
          </tr>
        </thead>
        <tbody>
          {entries.map((entry) => {
            const professional = professionals.find(
              (item) => item.id === entry.professionalId,
            );
            return (
              <tr key={entry.id} className="border-t border-[var(--line)]">
                <td className="py-4 text-ivory-soft">
                  {compact
                    ? `${formatLongDate(entry.date)} · ${entry.time}`
                    : entry.time}
                </td>
                <td className="py-4">{entry.clientName}</td>
                <td className="py-4">{entry.treatmentName}</td>
                <td className="py-4">{professional?.name}</td>
                <td className="py-4 text-gold">{statusLabels[entry.status]}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
