import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de privacidad",
};

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-2xl px-5 py-16 sm:px-8 lg:py-24">
      <h1 className="display text-5xl">Política de privacidad</h1>
      <div className="mt-10 space-y-5 text-sm leading-7 text-ivory-soft">
        <p>
          Esta web es un proyecto de portafolio. En esta fase no hay un backend
          de autenticación ni una base de datos conectada. Las reservas y los
          favoritos se guardan solo en tu navegador (almacenamiento local).
        </p>
        <p>
          Si más adelante se activa Supabase, esta página se actualizará para
          explicar qué datos se recogen, con qué fin y durante cuánto tiempo.
          Hasta entonces no se envían formularios a un servidor.
        </p>
        <p>
          Las imágenes se cargan desde un origen remoto de fotografía. No se
          instalan analíticas de terceros en esta versión.
        </p>
      </div>
    </main>
  );
}
