import Link from "next/link";
import { images } from "@/lib/images";
import { RemoteImage } from "@/components/media/RemoteImage";
import { Button } from "@/components/ui/button";

export function HomeHero() {
  return (
    <section className="relative min-h-svh overflow-hidden">
      <RemoteImage
        image={images.homeHero}
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(12,11,10,0.22)_0%,rgba(12,11,10,0.08)_42%,rgba(12,11,10,0.72)_100%)]" />
      <div className="relative flex min-h-svh flex-col justify-end px-5 pb-16 pt-32 sm:px-8 sm:pb-20 lg:px-16 lg:pb-24">
        <div className="max-w-4xl">
          <p className="display text-[18vw] leading-none tracking-[0.08em] text-ivory sm:text-[12vw] lg:text-[9.5rem]">
            ÉLANE
          </p>
          <p className="mt-4 display text-3xl text-ivory-soft sm:text-4xl lg:text-5xl">
            El arte de cuidarte.
          </p>
          <p className="mt-6 max-w-md text-[15px] leading-7 text-ivory/80">
            Tratamientos de belleza y bienestar diseñados alrededor de ti.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button asChild size="lg">
              <Link href="/reservar">Reservar cita</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/tratamientos">Descubrir tratamientos</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
