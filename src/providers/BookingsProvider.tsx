"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import type { Booking, BookingStatus, GuestDetails } from "@/lib/types";
import { STUDIO_LOCATION } from "@/lib/format";
import { BOOKINGS_KEY, readBookings, writeBookings } from "@/lib/storage";

interface CreateBookingInput {
  treatmentId: string;
  professionalId: string;
  date: string;
  time: string;
  guest: GuestDetails;
}

interface BookingsContextValue {
  bookings: Booking[];
  isReady: boolean;
  createBooking: (input: CreateBookingInput) => Booking;
  cancelBooking: (id: string) => void;
  rescheduleBooking: (id: string, date: string, time: string) => void;
  updateStatus: (id: string, status: BookingStatus) => void;
  getBooking: (id: string) => Booking | undefined;
}

const BookingsContext = createContext<BookingsContextValue | null>(null);
const CHANGE_EVENT = "elane:bookings";

function subscribe(onStoreChange: () => void) {
  window.addEventListener("storage", onStoreChange);
  window.addEventListener(CHANGE_EVENT, onStoreChange);
  return () => {
    window.removeEventListener("storage", onStoreChange);
    window.removeEventListener(CHANGE_EVENT, onStoreChange);
  };
}

function getSnapshot() {
  return window.localStorage.getItem(BOOKINGS_KEY) ?? "";
}

function getServerSnapshot() {
  return "";
}

function parseBookings(raw: string): Booking[] {
  if (!raw) return [];
  try {
    return JSON.parse(raw) as Booking[];
  } catch {
    return [];
  }
}

function emitChange() {
  window.dispatchEvent(new Event(CHANGE_EVENT));
}

function createId() {
  return `res-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 7)}`;
}

function commit(next: Booking[]) {
  writeBookings(next);
  emitChange();
}

export function BookingsProvider({ children }: { children: ReactNode }) {
  const raw = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const isReady = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );
  const bookings = useMemo(() => parseBookings(raw), [raw]);

  const createBooking = useCallback((input: CreateBookingInput) => {
    const booking: Booking = {
      id: createId(),
      treatmentId: input.treatmentId,
      professionalId: input.professionalId,
      date: input.date,
      time: input.time,
      location: STUDIO_LOCATION,
      status: "confirmada",
      guest: input.guest,
      createdAt: new Date().toISOString(),
    };
    commit([booking, ...readBookings()]);
    return booking;
  }, []);

  const cancelBooking = useCallback((id: string) => {
    commit(
      readBookings().map((booking) =>
        booking.id === id ? { ...booking, status: "cancelada" } : booking,
      ),
    );
  }, []);

  const rescheduleBooking = useCallback(
    (id: string, date: string, time: string) => {
      commit(
        readBookings().map((booking) =>
          booking.id === id
            ? { ...booking, date, time, status: "confirmada" }
            : booking,
        ),
      );
    },
    [],
  );

  const updateStatus = useCallback((id: string, status: BookingStatus) => {
    commit(
      readBookings().map((booking) =>
        booking.id === id ? { ...booking, status } : booking,
      ),
    );
  }, []);

  const getBooking = useCallback(
    (id: string) => bookings.find((booking) => booking.id === id),
    [bookings],
  );

  const value = useMemo<BookingsContextValue>(
    () => ({
      bookings,
      isReady,
      createBooking,
      cancelBooking,
      rescheduleBooking,
      updateStatus,
      getBooking,
    }),
    [
      bookings,
      cancelBooking,
      createBooking,
      getBooking,
      isReady,
      rescheduleBooking,
      updateStatus,
    ],
  );

  return (
    <BookingsContext.Provider value={value}>{children}</BookingsContext.Provider>
  );
}

export function useBookings() {
  const context = useContext(BookingsContext);
  if (!context) {
    throw new Error("useBookings debe usarse dentro de BookingsProvider");
  }
  return context;
}
