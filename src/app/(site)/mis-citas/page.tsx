import type { Metadata } from "next";
import { AppointmentsView } from "@/components/appointments/AppointmentsView";

export const metadata: Metadata = {
  title: "Mis citas",
  description: "Consulta y gestiona tus reservas en ÉLANE.",
};

export default function MyAppointmentsPage() {
  return (
    <main className="mx-auto max-w-[960px] px-5 py-16 sm:px-8 lg:py-24">
      <p className="eyebrow">Tu agenda</p>
      <h1 className="display mt-4 text-6xl">Mis citas</h1>
      <div className="mt-16">
        <AppointmentsView />
      </div>
    </main>
  );
}
