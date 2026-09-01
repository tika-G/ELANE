"use client";

import { Heart } from "lucide-react";
import { useFavorites } from "@/providers/FavoritesProvider";
import { cn } from "@/lib/utils";

export function FavoriteButton({
  id,
  kind,
  name,
}: {
  id: string;
  kind: "treatment" | "professional";
  name: string;
}) {
  const {
    isReady,
    isTreatmentFavorite,
    isProfessionalFavorite,
    toggleTreatment,
    toggleProfessional,
  } = useFavorites();

  const active =
    kind === "treatment"
      ? isTreatmentFavorite(id)
      : isProfessionalFavorite(id);

  return (
    <button
      type="button"
      disabled={!isReady}
      onClick={() =>
        kind === "treatment" ? toggleTreatment(id) : toggleProfessional(id)
      }
      className={cn(
        "inline-flex items-center gap-2 text-[11px] tracking-[0.22em] uppercase transition-colors hover:text-gold",
        active ? "text-gold" : "text-ivory/80",
      )}
      aria-pressed={active}
      aria-label={
        active ? `Quitar ${name} de favoritos` : `Guardar ${name} en favoritos`
      }
    >
      <Heart
        className="h-4 w-4"
        strokeWidth={1.5}
        fill={active ? "currentColor" : "none"}
      />
      {active ? "Guardado" : "Guardar"}
    </button>
  );
}
