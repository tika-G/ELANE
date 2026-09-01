"use client";

import { useState } from "react";
import { demoAgenda } from "@/data/studio";
import { getProfessionals } from "@/lib/catalog";
import { formatLongDate } from "@/lib/format";
import { statusLabels } from "@/lib/navigation";
import type { BookingStatus } from "@/lib/types";
import { cn } from "@/lib/utils";

const filters: Array<BookingStatus | "todas"> = [
  "todas",
  "pendiente",
  "confirmada",
  "completada",
  "cancelada",
];

export default function ReservationsPage() {
  const [filter, setFilter] = useState<BookingStatus | "todas">("todas");
  const professionals = getProfessionals();
  const rows = demoAgenda.filter((entry) =>
    filter === "todas" ? true : entry.status === filter,
  );

  return (
    <main className="px-5 py-10 sm:px-8 lg:px-10 lg:py-14">
      <p className="eyebrow">Estudio</p>
      <h1 className="display mt-4 text-5xl">Reservas</h1>
      <div className="mt-10 flex flex-wrap gap-6">
        {filters.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setFilter(item)}
            className={cn(
              "text-[11px] tracking-[0.22em] uppercase",
              filter === item ? "text-gold" : "text-muted hover:text-ivory",
            )}
          >
            {item === "todas" ? "Todas" : statusLabels[item]}
          </button>
        ))}
      </div>
      <div className="mt-8 overflow-x-auto">
        <table className="w-full min-w-[720px] text-left text-sm">
          <thead>
            <tr className="text-[10px] tracking-[0.2em] uppercase text-muted">
              <th className="py-3 font-medium">Clienta</th>
              <th className="py-3 font-medium">Tratamiento</th>
              <th className="py-3 font-medium">Profesional</th>
              <th className="py-3 font-medium">Fecha</th>
              <th className="py-3 font-medium">Hora</th>
              <th className="py-3 font-medium">Estado</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((entry) => {
              const professional = professionals.find(
                (item) => item.id === entry.professionalId,
              );
              return (
                <tr key={entry.id} className="border-t border-[var(--line)]">
                  <td className="py-4">{entry.clientName}</td>
                  <td className="py-4">{entry.treatmentName}</td>
                  <td className="py-4">{professional?.name}</td>
                  <td className="py-4">{formatLongDate(entry.date)}</td>
                  <td className="py-4">{entry.time}</td>
                  <td className="py-4 text-gold">
                    {statusLabels[entry.status]}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {rows.length === 0 ? (
          <p className="mt-8 text-sm text-muted">
            No hay reservas con ese estado.
          </p>
        ) : null}
      </div>
    </main>
  );
}
