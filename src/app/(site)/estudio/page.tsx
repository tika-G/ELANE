import type { Metadata } from "next";
import Link from "next/link";
import { RemoteImage } from "@/components/media/RemoteImage";
import { Button } from "@/components/ui/button";
import {
  studioAddressLine,
  studioCity,
  studioHours,
} from "@/data/studio";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "El estudio",
  description:
    "ÉLANE, estudio de belleza y bienestar en el Eixample de Barcelona.",
};

export default function StudioPage() {
  return (
    <main>
      <div className="relative min-h-[60vh] overflow-hidden">
        <RemoteImage image={images.studioExterior} priority sizes="100vw" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(12,11,10,0.2)_0%,rgba(12,11,10,0.75)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 px-5 pb-12 sm:px-8 lg:px-16">
          <p className="eyebrow">{studioCity}</p>
          <h1 className="display mt-4 text-6xl sm:text-8xl">El estudio</h1>
        </div>
      </div>

      <div className="mx-auto grid max-w-[1440px] gap-16 px-5 py-20 sm:px-8 lg:grid-cols-12 lg:px-12">
        <div className="lg:col-span-6">
          <h2 className="display text-4xl sm:text-5xl">
            Un espacio contenido, en el Eixample.
          </h2>
          <div className="mt-8 space-y-5 text-[16px] leading-8 text-ivory-soft">
            <p>
              ÉLANE está en Barcelona, en el Eixample. El estudio está pensado
              para que la visita sea clara: una sala, una camilla, tiempo de
              verdad. Sin un vestíbulo ruidoso ni un recorrido de escaparate.
            </p>
            <p>
              Trabajamos facial, corporal, masaje y bienestar. El criterio es el
              mismo en todos: menos gestos superfluos, más atención a lo que
              pides ese día. No inventamos una historia fundacional ni una lista
              de distinciones. El trabajo se sostiene en la sala.
            </p>
          </div>
          <dl className="mt-12 grid gap-8 sm:grid-cols-2">
            <div>
              <dt className="text-[10px] tracking-[0.28em] uppercase text-muted">
                Dirección
              </dt>
              <dd className="mt-3 text-sm leading-7">{studioAddressLine}</dd>
            </div>
            <div>
              <dt className="text-[10px] tracking-[0.28em] uppercase text-muted">
                Horario
              </dt>
              <dd className="mt-3 text-sm leading-7">{studioHours}</dd>
            </div>
          </dl>
          <div className="mt-12">
            <Button asChild>
              <Link href="/reservar">Reservar cita</Link>
            </Button>
          </div>
        </div>
        <div className="grid gap-4 lg:col-span-5 lg:col-start-8">
          <div className="relative aspect-[4/5]">
            <RemoteImage image={images.studioTreatmentRoom} sizes="40vw" />
          </div>
          <div className="relative aspect-square">
            <RemoteImage image={images.studioDetail} sizes="40vw" />
          </div>
        </div>
      </div>
    </main>
  );
}
