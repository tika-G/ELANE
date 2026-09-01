import type { Metadata } from "next";
import { Suspense } from "react";
import { BookingFlow } from "@/components/booking/BookingFlow";
import { RemoteImage } from "@/components/media/RemoteImage";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Reservar",
  description: "Reserva un tratamiento en ÉLANE, Barcelona.",
};

export default function BookingPage() {
  return (
    <main>
      <div className="relative h-[42vh] min-h-[240px] overflow-hidden">
        <RemoteImage image={images.studioReception} priority sizes="100vw" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(12,11,10,0.2)_0%,rgba(12,11,10,0.55)_100%)]" />
      </div>
      <Suspense
        fallback={
          <p className="px-5 py-24 text-sm text-muted sm:px-8">
            Preparando la reserva…
          </p>
        }
      >
        <BookingFlow />
      </Suspense>
    </main>
  );
}
