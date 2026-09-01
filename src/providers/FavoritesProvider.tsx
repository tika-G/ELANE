"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import type { FavoritesState } from "@/lib/types";
import {
  emptyFavorites,
  FAVORITES_KEY,
  readJson,
  writeFavorites,
} from "@/lib/storage";

interface FavoritesContextValue {
  favorites: FavoritesState;
  isReady: boolean;
  isTreatmentFavorite: (id: string) => boolean;
  isProfessionalFavorite: (id: string) => boolean;
  toggleTreatment: (id: string) => void;
  toggleProfessional: (id: string) => void;
}

const FavoritesContext = createContext<FavoritesContextValue | null>(null);
const CHANGE_EVENT = "elane:favorites";

function subscribe(onStoreChange: () => void) {
  window.addEventListener("storage", onStoreChange);
  window.addEventListener(CHANGE_EVENT, onStoreChange);
  return () => {
    window.removeEventListener("storage", onStoreChange);
    window.removeEventListener(CHANGE_EVENT, onStoreChange);
  };
}

function getSnapshot() {
  return window.localStorage.getItem(FAVORITES_KEY) ?? "";
}

function getServerSnapshot() {
  return "";
}

function parseFavorites(raw: string): FavoritesState {
  if (!raw) return emptyFavorites;
  try {
    const stored = JSON.parse(raw) as FavoritesState;
    return {
      treatments: stored.treatments ?? [],
      professionals: stored.professionals ?? [],
    };
  } catch {
    return emptyFavorites;
  }
}

function emitChange() {
  window.dispatchEvent(new Event(CHANGE_EVENT));
}

export function FavoritesProvider({ children }: { children: ReactNode }) {
  const raw = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const isReady = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );
  const favorites = useMemo(() => parseFavorites(raw), [raw]);

  const toggle = useCallback((list: string[], id: string) => {
    return list.includes(id) ? list.filter((item) => item !== id) : [...list, id];
  }, []);

  const toggleTreatment = useCallback(
    (id: string) => {
      const current = readJson<FavoritesState>(FAVORITES_KEY, emptyFavorites);
      writeFavorites({
        ...current,
        treatments: toggle(current.treatments ?? [], id),
      });
      emitChange();
    },
    [toggle],
  );

  const toggleProfessional = useCallback(
    (id: string) => {
      const current = readJson<FavoritesState>(FAVORITES_KEY, emptyFavorites);
      writeFavorites({
        ...current,
        professionals: toggle(current.professionals ?? [], id),
      });
      emitChange();
    },
    [toggle],
  );

  const value = useMemo<FavoritesContextValue>(
    () => ({
      favorites,
      isReady,
      isTreatmentFavorite: (id) => favorites.treatments.includes(id),
      isProfessionalFavorite: (id) => favorites.professionals.includes(id),
      toggleTreatment,
      toggleProfessional,
    }),
    [favorites, isReady, toggleProfessional, toggleTreatment],
  );

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error("useFavorites debe usarse dentro de FavoritesProvider");
  }
  return context;
}
