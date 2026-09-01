"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { getProfessionalBySlug, getTreatmentBySlug, getProfessionals, getTreatments } from "@/lib/catalog";
import { formatLongDate } from "@/lib/format";
import { statusLabels } from "@/lib/navigation";
import type { Booking } from "@/lib/types";
import { useBookings } from "@/providers/BookingsProvider";

export function AppointmentsView() {
  const { bookings, isReady, cancelBooking } = useBookings();
  const [selected, setSelected] = useState<Booking | null>(null);

  const { upcoming, history } = useMemo(() => {
    const sorted = [...bookings].sort((a, b) =>
      `${a.date}${a.time}`.localeCompare(`${b.date}${b.time}`),
    );
    const today = new Date().toISOString().slice(0, 10);
    return {
      upcoming: sorted.filter(
        (booking) => booking.status !== "cancelada" && booking.status !== "completada" && booking.date >= today,
      ),
      history: sorted.filter(
        (booking) => booking.status === "cancelada" || booking.status === "completada" || booking.date < today,
      ),
    };
  }, [bookings]);

  if (!isReady) {
    return <p className="text-sm text-muted">Cargando tus citas…</p>;
  }

  return (
    <div className="space-y-20">
      <section>
        <h2 className="display text-4xl">Próxima cita</h2>
        {upcoming.length === 0 ? (
          <div className="mt-8 max-w-lg">
            <p className="text-sm leading-7 text-muted">
              Todavía no tienes una cita reservada en este dispositivo.
            </p>
            <div className="mt-8">
              <Button asChild>
                <Link href="/reservar">Reservar cita</Link>
              </Button>
            </div>
          </div>
        ) : (
          <ul className="mt-10 space-y-6">
            {upcoming.map((booking) => (
              <li key={booking.id}>
                <AppointmentCard
                  booking={booking}
                  onCancel={() => cancelBooking(booking.id)}
                  onDetails={() => setSelected(booking)}
                />
              </li>
            ))}
          </ul>
        )}
      </section>

      <section>
        <h2 className="display text-4xl">Historial</h2>
        {history.length === 0 ? (
          <p className="mt-8 text-sm text-muted">Aún no hay visitas anteriores.</p>
        ) : (
          <ul className="mt-10 space-y-6">
            {history.map((booking) => (
              <li key={booking.id}>
                <AppointmentCard
                  booking={booking}
                  onDetails={() => setSelected(booking)}
                />
              </li>
            ))}
          </ul>
        )}
      </section>

      {selected ? (
        <div
          className="fixed inset-0 z-50 flex items-end justify-center bg-black/70 p-5 sm:items-center"
          role="dialog"
          aria-modal="true"
          aria-labelledby="detalle-cita"
        >
          <div className="w-full max-w-lg border border-[var(--line)] bg-ink p-8">
            <h3 id="detalle-cita" className="display text-3xl">
              Detalle de la cita
            </h3>
            <BookingDetails booking={selected} />
            <button
              type="button"
              className="mt-8 text-[11px] tracking-[0.22em] uppercase text-gold"
              onClick={() => setSelected(null)}
            >
              Cerrar
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}

function AppointmentCard({
  booking,
  onCancel,
  onDetails,
}: {
  booking: Booking;
  onCancel?: () => void;
  onDetails: () => void;
}) {
  const treatment =
    getTreatmentBySlug(booking.treatmentId) ??
    getTreatments().find((item) => item.id === booking.treatmentId);
  const professional =
    getProfessionalBySlug(booking.professionalId) ??
    getProfessionals().find((item) => item.id === booking.professionalId);

  return (
    <article className="border-t border-[var(--line)] pt-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-[10px] tracking-[0.24em] uppercase text-gold">
            {statusLabels[booking.status]}
          </p>
          <h3 className="display mt-2 text-3xl">
            {treatment?.name ?? "Tratamiento"}
          </h3>
          <p className="mt-3 text-sm text-ivory-soft">
            {professional?.name} · {formatLongDate(booking.date)} · {booking.time}
          </p>
          <p className="mt-2 text-sm text-muted">{booking.location}</p>
        </div>
        <div className="flex flex-wrap gap-4">
          <button
            type="button"
            onClick={onDetails}
            className="text-[11px] tracking-[0.22em] uppercase text-ivory hover:text-gold"
          >
            Ver detalle
          </button>
          {onCancel && booking.status !== "cancelada" ? (
            <>
              <Link
                href={`/reservar?reprogramar=${booking.id}`}
                className="text-[11px] tracking-[0.22em] uppercase text-ivory hover:text-gold"
              >
                Reprogramar
              </Link>
              <button
                type="button"
                onClick={onCancel}
                className="text-[11px] tracking-[0.22em] uppercase text-[var(--danger)]"
              >
                Cancelar
              </button>
            </>
          ) : null}
        </div>
      </div>
    </article>
  );
}

function BookingDetails({ booking }: { booking: Booking }) {
  const treatment = getTreatments().find((item) => item.id === booking.treatmentId);
  const professional = getProfessionals().find(
    (item) => item.id === booking.professionalId,
  );

  return (
    <dl className="mt-6 space-y-3 text-sm leading-7 text-ivory-soft">
      <div>
        <dt className="text-[10px] tracking-[0.22em] uppercase text-muted">
          Tratamiento
        </dt>
        <dd>{treatment?.name}</dd>
      </div>
      <div>
        <dt className="text-[10px] tracking-[0.22em] uppercase text-muted">
          Profesional
        </dt>
        <dd>{professional?.name}</dd>
      </div>
      <div>
        <dt className="text-[10px] tracking-[0.22em] uppercase text-muted">
          Fecha y hora
        </dt>
        <dd>
          {formatLongDate(booking.date)} · {booking.time}
        </dd>
      </div>
      <div>
        <dt className="text-[10px] tracking-[0.22em] uppercase text-muted">
          Lugar
        </dt>
        <dd>{booking.location}</dd>
      </div>
      <div>
        <dt className="text-[10px] tracking-[0.22em] uppercase text-muted">
          Estado
        </dt>
        <dd>{statusLabels[booking.status]}</dd>
      </div>
    </dl>
  );
}
