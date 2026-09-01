import type { Metadata } from "next";
import { FavoritesView } from "@/components/favorites/FavoritesView";

export const metadata: Metadata = {
  title: "Favoritos",
  description: "Tus tratamientos y profesionales guardados en ÉLANE.",
};

export default function FavoritesPage() {
  return (
    <main className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
      <p className="eyebrow">Guardados</p>
      <h1 className="display mt-4 text-6xl">Favoritos</h1>
      <FavoritesView />
    </main>
  );
}
