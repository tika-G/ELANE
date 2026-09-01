import type { Metadata } from "next";
import { demoClients } from "@/data/studio";
import { formatLongDate } from "@/lib/format";
import { statusLabels } from "@/lib/navigation";

export const metadata: Metadata = {
  title: "Clientes",
};

export default function ClientsPage() {
  return (
    <main className="px-5 py-10 sm:px-8 lg:px-10 lg:py-14">
      <p className="eyebrow">Estudio</p>
      <h1 className="display mt-4 text-5xl">Clientes</h1>
      <div className="mt-10 overflow-x-auto">
        <table className="w-full min-w-[640px] text-left text-sm">
          <thead>
            <tr className="text-[10px] tracking-[0.2em] uppercase text-muted">
              <th className="py-3 font-medium">Nombre</th>
              <th className="py-3 font-medium">Última cita</th>
              <th className="py-3 font-medium">Total</th>
              <th className="py-3 font-medium">Estado</th>
            </tr>
          </thead>
          <tbody>
            {demoClients.map((client) => (
              <tr key={client.id} className="border-t border-[var(--line)]">
                <td className="py-4">
                  <p>{client.name}</p>
                  <p className="mt-1 text-muted">{client.email}</p>
                </td>
                <td className="py-4">{formatLongDate(client.lastAppointment)}</td>
                <td className="py-4">{client.totalAppointments}</td>
                <td className="py-4 text-gold">{statusLabels[client.status]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
