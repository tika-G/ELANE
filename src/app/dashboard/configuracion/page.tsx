import type { Metadata } from "next";
import {
  studioAddressLine,
  studioEmail,
  studioHours,
  studioInstagram,
} from "@/data/studio";
import { integrations } from "@/lib/integrations";

export const metadata: Metadata = {
  title: "Configuración",
};

export default function SettingsPage() {
  return (
    <main className="px-5 py-10 sm:px-8 lg:px-10 lg:py-14">
      <p className="eyebrow">Estudio</p>
      <h1 className="display mt-4 text-5xl">Configuración</h1>
      <dl className="mt-12 max-w-xl space-y-8">
        <Row label="Dirección" value={studioAddressLine} />
        <Row label="Horario" value={studioHours} />
        <Row label="Correo" value={studioEmail} />
        <Row label="Instagram" value={studioInstagram} />
        <Row
          label="Supabase"
          value={
            integrations.supabase.isConfigured
              ? "Conectado"
              : "Pendiente de credenciales"
          }
        />
        <Row label="Favoritos" value="Almacenamiento local" />
        <Row label="Reservas" value="Almacenamiento local" />
      </dl>
    </main>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-t border-[var(--line)] pt-5">
      <dt className="text-[10px] tracking-[0.24em] uppercase text-muted">
        {label}
      </dt>
      <dd className="mt-3 text-sm">{value}</dd>
    </div>
  );
}
