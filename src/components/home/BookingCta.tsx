import Link from "next/link";
import { Button } from "@/components/ui/button";

export function BookingCta() {
  return (
    <section className="border-t border-[var(--line)] bg-[var(--ink-raised)]">
      <div className="mx-auto max-w-[900px] px-5 py-24 text-center sm:px-8 lg:py-32">
        <h2 className="display text-5xl sm:text-6xl lg:text-7xl">
          ¿Lista para tu momento?
        </h2>
        <p className="mx-auto mt-6 max-w-md text-sm leading-7 text-muted">
          Reserva un hueco en el estudio. Eliges tratamiento, profesional, día
          y hora. Sin prisa.
        </p>
        <div className="mt-10">
          <Button asChild size="lg">
            <Link href="/reservar">Reservar cita</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
