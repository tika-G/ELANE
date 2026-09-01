import type { Metadata } from "next";
import {
  studioAddressLine,
  studioEmail,
  studioHours,
  studioInstagram,
} from "@/data/studio";

export const metadata: Metadata = {
  title: "Contacto",
  description: "Contacto del estudio ÉLANE en Barcelona.",
};

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-3xl px-5 py-16 sm:px-8 lg:py-24">
      <p className="eyebrow">Estudio</p>
      <h1 className="display mt-4 text-6xl">Contacto</h1>
      <dl className="mt-14 space-y-10">
        <div>
          <dt className="text-[10px] tracking-[0.28em] uppercase text-muted">
            Dirección
          </dt>
          <dd className="mt-3 text-lg">{studioAddressLine}</dd>
        </div>
        <div>
          <dt className="text-[10px] tracking-[0.28em] uppercase text-muted">
            Horario
          </dt>
          <dd className="mt-3 text-lg">{studioHours}</dd>
        </div>
        <div>
          <dt className="text-[10px] tracking-[0.28em] uppercase text-muted">
            Correo
          </dt>
          <dd className="mt-3 text-lg">
            <a href={`mailto:${studioEmail}`} className="hover:text-gold">
              {studioEmail}
            </a>
          </dd>
        </div>
        <div id="redes">
          <dt className="text-[10px] tracking-[0.28em] uppercase text-muted">
            Instagram
          </dt>
          <dd className="mt-3 text-lg text-ivory-soft">{studioInstagram}</dd>
          <p className="mt-2 text-sm text-muted">
            El perfil público se anunciará con la apertura del estudio.
          </p>
        </div>
      </dl>
    </main>
  );
}
