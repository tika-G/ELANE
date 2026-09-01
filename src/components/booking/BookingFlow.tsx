"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RemoteImage } from "@/components/media/RemoteImage";
import {
  getProfessionals,
  getProfessionalsForTreatment,
  getTreatmentBySlug,
  getTreatments,
  timeSlots,
} from "@/lib/catalog";
import {
  formatDayNumber,
  formatDuration,
  formatLongDate,
  formatPrice,
  formatWeekday,
  toISODate,
} from "@/lib/format";
import type { GuestDetails, Professional, Treatment } from "@/lib/types";
import { useBookings } from "@/providers/BookingsProvider";
import { cn } from "@/lib/utils";

const steps = [
  "Tratamiento",
  "Especialista",
  "Fecha",
  "Hora",
  "Datos",
  "Confirmación",
];

function upcomingDates(count = 14) {
  const dates: string[] = [];
  const start = new Date();
  for (let i = 0; i < count; i += 1) {
    const date = new Date(start);
    date.setDate(start.getDate() + i);
    dates.push(toISODate(date));
  }
  return dates;
}

export function BookingFlow() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { createBooking, rescheduleBooking, getBooking, isReady } = useBookings();

  const treatments = getTreatments();
  const rescheduleId = searchParams.get("reprogramar");
  const existing = rescheduleId && isReady ? getBooking(rescheduleId) : undefined;

  const queryTreatment = getTreatmentBySlug(
    searchParams.get("tratamiento") ?? "",
  );
  const queryProfessional = getProfessionals().find(
    (item) => item.slug === searchParams.get("profesional"),
  );

  const [step, setStep] = useState(queryTreatment ? 2 : 1);
  const [treatment, setTreatment] = useState<Treatment | undefined>(
    queryTreatment,
  );
  const [professional, setProfessional] = useState<Professional | undefined>(
    queryProfessional,
  );
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guest, setGuest] = useState<GuestDetails>({
    nombre: "",
    apellidos: "",
    email: "",
    telefono: "",
    notas: "",
  });
  const [confirmedId, setConfirmedId] = useState<string | null>(null);
  const [restored, setRestored] = useState(false);

  if (existing && !restored) {
    const foundTreatment = treatments.find(
      (item) => item.id === existing.treatmentId,
    );
    const foundProfessional = getProfessionals().find(
      (item) => item.id === existing.professionalId,
    );
    setRestored(true);
    if (foundTreatment) setTreatment(foundTreatment);
    if (foundProfessional) setProfessional(foundProfessional);
    setDate(existing.date);
    setTime(existing.time);
    setGuest(existing.guest);
    setStep(3);
  }

  const professionals = treatment
    ? getProfessionalsForTreatment(treatment.id)
    : getProfessionals();

  const dates = upcomingDates();

  function goNext() {
    setStep((current) => Math.min(6, current + 1));
  }

  function goBack() {
    setStep((current) => Math.max(1, current - 1));
  }

  function confirm() {
    if (!treatment || !professional || !date || !time) return;

    if (existing) {
      rescheduleBooking(existing.id, date, time);
      setConfirmedId(existing.id);
    } else {
      const booking = createBooking({
        treatmentId: treatment.id,
        professionalId: professional.id,
        date,
        time,
        guest,
      });
      setConfirmedId(booking.id);
    }
    setStep(6);
  }

  if (confirmedId && step === 6) {
    return (
      <Confirmation
        treatment={treatment}
        professional={professional}
        date={date}
        time={time}
        onSeeAppointments={() => router.push("/mis-citas")}
      />
    );
  }

  return (
    <div className="mx-auto max-w-[1100px] px-5 py-16 sm:px-8 lg:py-24">
      <p className="eyebrow">Reserva</p>
      <h1 className="display mt-4 text-5xl sm:text-6xl">
        {existing ? "Reprogramar cita" : "Reservar cita"}
      </h1>

      <ol className="mt-12 flex gap-2 overflow-x-auto pb-2" aria-label="Progreso">
        {steps.map((label, index) => {
          const number = index + 1;
          const current = number === step;
          const done = number < step;
          return (
            <li
              key={label}
              className={cn(
                "min-w-28 border-t pt-3 text-[10px] tracking-[0.2em] uppercase",
                current
                  ? "border-gold text-gold"
                  : done
                    ? "border-ivory/40 text-ivory/70"
                    : "border-[var(--line)] text-muted",
              )}
            >
              0{number} {label}
            </li>
          );
        })}
      </ol>

      <div className="mt-14">
        {step === 1 && (
          <StepLayout title="¿Qué te gustaría reservar?">
            <div className="grid gap-8 sm:grid-cols-2">
              {treatments.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => {
                    setTreatment(item);
                    setProfessional(undefined);
                    goNext();
                  }}
                  className="group text-left"
                >
                  <div className="relative aspect-[16/11] overflow-hidden">
                    <RemoteImage image={item.image} sizes="40vw" />
                  </div>
                  <p className="display mt-4 text-3xl">{item.name}</p>
                  <p className="mt-2 text-[11px] tracking-[0.18em] uppercase text-muted">
                    {formatDuration(item.durationMinutes)} · {formatPrice(item.price)}
                  </p>
                </button>
              ))}
            </div>
          </StepLayout>
        )}

        {step === 2 && treatment && (
          <StepLayout
            title="Elige tu especialista."
            onBack={goBack}
          >
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
              {professionals.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => {
                    setProfessional(item);
                    goNext();
                  }}
                  className="text-left"
                >
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <RemoteImage image={item.portrait} sizes="25vw" />
                  </div>
                  <p className="display mt-4 text-2xl">{item.name}</p>
                  <p className="mt-2 text-[11px] tracking-[0.18em] uppercase text-gold">
                    {item.specialty}
                  </p>
                </button>
              ))}
            </div>
          </StepLayout>
        )}

        {step === 3 && (
          <StepLayout title="Elige una fecha." onBack={goBack}>
            <div className="grid grid-cols-3 gap-3 sm:grid-cols-7">
              {dates.map((iso) => (
                <button
                  key={iso}
                  type="button"
                  onClick={() => {
                    setDate(iso);
                    goNext();
                  }}
                  className={cn(
                    "flex flex-col items-center border px-2 py-4 transition-colors",
                    date === iso
                      ? "border-gold text-gold"
                      : "border-[var(--line)] text-ivory hover:border-gold",
                  )}
                >
                  <span className="text-[10px] tracking-[0.18em] uppercase">
                    {formatWeekday(iso)}
                  </span>
                  <span className="display mt-2 text-3xl">
                    {formatDayNumber(iso)}
                  </span>
                </button>
              ))}
            </div>
          </StepLayout>
        )}

        {step === 4 && (
          <StepLayout title="Elige una hora." onBack={goBack}>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-5">
              {timeSlots.map((slot) => (
                <button
                  key={slot}
                  type="button"
                  onClick={() => {
                    setTime(slot);
                    goNext();
                  }}
                  className={cn(
                    "h-16 border text-[13px] tracking-[0.18em] transition-colors",
                    time === slot
                      ? "border-gold text-gold"
                      : "border-[var(--line)] hover:border-gold",
                  )}
                >
                  {slot}
                </button>
              ))}
            </div>
          </StepLayout>
        )}

        {step === 5 && treatment && professional && (
          <StepLayout title="Tus datos." onBack={goBack}>
            <div className="grid gap-12 lg:grid-cols-[1fr_0.8fr]">
              <form
                className="space-y-8"
                onSubmit={(event) => {
                  event.preventDefault();
                  confirm();
                }}
              >
                <div className="grid gap-8 sm:grid-cols-2">
                  <Field
                    label="Nombre"
                    value={guest.nombre}
                    onChange={(value) => setGuest({ ...guest, nombre: value })}
                    autoComplete="given-name"
                    required
                  />
                  <Field
                    label="Apellidos"
                    value={guest.apellidos}
                    onChange={(value) =>
                      setGuest({ ...guest, apellidos: value })
                    }
                    autoComplete="family-name"
                    required
                  />
                </div>
                <Field
                  label="Correo electrónico"
                  type="email"
                  value={guest.email}
                  onChange={(value) => setGuest({ ...guest, email: value })}
                  autoComplete="email"
                  required
                />
                <Field
                  label="Teléfono"
                  type="tel"
                  value={guest.telefono}
                  onChange={(value) => setGuest({ ...guest, telefono: value })}
                  autoComplete="tel"
                  required
                />
                <div className="space-y-3">
                  <Label htmlFor="notas">Notas (opcional)</Label>
                  <Textarea
                    id="notas"
                    value={guest.notas}
                    onChange={(event) =>
                      setGuest({ ...guest, notas: event.target.value })
                    }
                  />
                </div>
                <Button type="submit">Confirmar reserva</Button>
              </form>
              <aside className="border-t border-[var(--line)] pt-6 lg:border-t-0 lg:border-l lg:pl-10 lg:pt-0">
                <p className="text-[10px] tracking-[0.28em] uppercase text-muted">
                  Resumen
                </p>
                <p className="display mt-4 text-3xl">{treatment.name}</p>
                <p className="mt-3 text-sm text-ivory-soft">{professional.name}</p>
                <p className="mt-3 text-sm text-muted">
                  {formatLongDate(date)} · {time}
                </p>
                <p className="mt-6 text-[12px] tracking-[0.16em] uppercase text-gold">
                  {formatPrice(treatment.price)} · {formatDuration(treatment.durationMinutes)}
                </p>
              </aside>
            </div>
          </StepLayout>
        )}
      </div>
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
  autoComplete,
  required,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  autoComplete?: string;
  required?: boolean;
}) {
  const id = label.toLowerCase().replace(/\s+/g, "-");
  return (
    <div className="space-y-3">
      <Label htmlFor={id}>{label}</Label>
      <Input
        id={id}
        type={type}
        value={value}
        required={required}
        autoComplete={autoComplete}
        onChange={(event) => onChange(event.target.value)}
      />
    </div>
  );
}

function StepLayout({
  title,
  children,
  onBack,
}: {
  title: string;
  children: ReactNode;
  onBack?: () => void;
}) {
  return (
    <section>
      <h2 className="display max-w-2xl text-4xl sm:text-5xl">{title}</h2>
      <div className="mt-10">{children}</div>
      {onBack ? (
        <button
          type="button"
          onClick={onBack}
          className="mt-10 text-[11px] tracking-[0.22em] uppercase text-muted hover:text-gold"
        >
          Volver
        </button>
      ) : null}
    </section>
  );
}

function Confirmation({
  treatment,
  professional,
  date,
  time,
  onSeeAppointments,
}: {
  treatment?: Treatment;
  professional?: Professional;
  date: string;
  time: string;
  onSeeAppointments: () => void;
}) {
  return (
    <div className="mx-auto max-w-2xl px-5 py-24 text-center sm:px-8 lg:py-32">
      <p className="eyebrow">Lista</p>
      <h1 className="display mt-4 text-5xl sm:text-6xl">Tu cita está reservada.</h1>
      {treatment && professional ? (
        <p className="mt-8 text-base leading-8 text-ivory-soft">
          {treatment.name} con {professional.name}.
          <br />
          {formatLongDate(date)} a las {time}.
        </p>
      ) : null}
      <p className="mt-6 text-sm text-muted">
        La reserva se guarda en este dispositivo hasta que el estudio conecte
        la agenda.
      </p>
      <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
        <Button type="button" onClick={onSeeAppointments}>
          Ver mis citas
        </Button>
        <Button asChild variant="outline">
          <Link href="/">Volver al inicio</Link>
        </Button>
      </div>
    </div>
  );
}
