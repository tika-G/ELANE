import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aviso legal",
};

export default function LegalPage() {
  return (
    <main className="mx-auto max-w-2xl px-5 py-16 sm:px-8 lg:py-24">
      <h1 className="display text-5xl">Aviso legal</h1>
      <div className="mt-10 space-y-5 text-sm leading-7 text-ivory-soft">
        <p>
          ÉLANE es una marca de demostración creada para un portafolio de
          desarrollo web. No representa un negocio registrado ni ofrece
          servicios reales de belleza o bienestar.
        </p>
        <p>
          Los tratamientos, precios, horarios y profesionales que aparecen en
          estas páginas son datos de catálogo para mostrar la interfaz. No
          constituyen una oferta comercial.
        </p>
        <p>
          Barcelona se usa como contexto de marca. La dirección del estudio es
          un emplazamiento de barrio, no un local en funcionamiento.
        </p>
      </div>
    </main>
  );
}
