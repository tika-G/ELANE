import type { Booking, FavoritesState } from "@/lib/types";

export const FAVORITES_KEY = "elane:favorites";
export const BOOKINGS_KEY = "elane:bookings";

export const emptyFavorites: FavoritesState = {
  treatments: [],
  professionals: [],
};

export function readJson<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") {
    return fallback;
  }

  try {
    const raw = window.localStorage.getItem(key);
    if (!raw) return fallback;
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

export function writeJson<T>(key: string, value: T) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(key, JSON.stringify(value));
}

export function readFavorites(): FavoritesState {
  const stored = readJson<FavoritesState>(FAVORITES_KEY, emptyFavorites);
  return {
    treatments: stored.treatments ?? [],
    professionals: stored.professionals ?? [],
  };
}

export function writeFavorites(value: FavoritesState) {
  writeJson(FAVORITES_KEY, value);
}

export function readBookings(): Booking[] {
  return readJson<Booking[]>(BOOKINGS_KEY, []);
}

export function writeBookings(value: Booking[]) {
  writeJson(BOOKINGS_KEY, value);
}
