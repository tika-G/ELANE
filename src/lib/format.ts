const locale = "es-ES";
const timeZone = "Europe/Madrid";

export function formatPrice(amount: number): string {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(amount);
}

export function formatDuration(minutes: number): string {
  if (minutes < 60) {
    return `${minutes} min`;
  }

  const hours = Math.floor(minutes / 60);
  const rest = minutes % 60;

  if (rest === 0) {
    return hours === 1 ? "1 h" : `${hours} h`;
  }

  return `${hours} h ${rest} min`;
}

export function formatLongDate(isoDate: string): string {
  const date = parseLocalDate(isoDate);
  const formatted = new Intl.DateTimeFormat(locale, {
    weekday: "long",
    day: "numeric",
    month: "long",
    timeZone,
  }).format(date);

  return capitalize(formatted);
}

export function formatShortDate(isoDate: string): string {
  const date = parseLocalDate(isoDate);
  return new Intl.DateTimeFormat(locale, {
    day: "numeric",
    month: "short",
    timeZone,
  }).format(date);
}

export function formatWeekday(isoDate: string): string {
  const date = parseLocalDate(isoDate);
  return capitalize(
    new Intl.DateTimeFormat(locale, {
      weekday: "short",
      timeZone,
    }).format(date),
  );
}

export function formatDayNumber(isoDate: string): string {
  const date = parseLocalDate(isoDate);
  return new Intl.DateTimeFormat(locale, {
    day: "numeric",
    timeZone,
  }).format(date);
}

export function toISODate(date: Date): string {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(date);

  const year = parts.find((part) => part.type === "year")?.value;
  const month = parts.find((part) => part.type === "month")?.value;
  const day = parts.find((part) => part.type === "day")?.value;

  return `${year}-${month}-${day}`;
}

export function parseLocalDate(isoDate: string): Date {
  const [year, month, day] = isoDate.split("-").map(Number);
  return new Date(year, month - 1, day);
}

export function capitalize(value: string): string {
  if (!value) return value;
  return value.charAt(0).toUpperCase() + value.slice(1);
}

export const STUDIO_LOCATION = "ÉLANE, Eixample, Barcelona";
