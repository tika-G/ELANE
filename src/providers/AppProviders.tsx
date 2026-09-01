"use client";

import type { ReactNode } from "react";
import { BookingsProvider } from "@/providers/BookingsProvider";
import { FavoritesProvider } from "@/providers/FavoritesProvider";

export function AppProviders({ children }: { children: ReactNode }) {
  return (
    <FavoritesProvider>
      <BookingsProvider>{children}</BookingsProvider>
    </FavoritesProvider>
  );
}
