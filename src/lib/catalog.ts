import { articles } from "@/data/articles";
import { professionals } from "@/data/professionals";
import { treatments } from "@/data/treatments";
import type {
  Article,
  DurationFilter,
  PriceFilter,
  Professional,
  Treatment,
  TreatmentCategory,
} from "@/lib/types";

export function getTreatments(): Treatment[] {
  return treatments.filter((treatment) => treatment.active);
}

export function getAllTreatments(): Treatment[] {
  return treatments;
}

export function getFeaturedTreatments(): Treatment[] {
  return getTreatments()
    .filter((treatment) => treatment.featured)
    .slice(0, 4);
}

export function getTreatmentBySlug(slug: string): Treatment | undefined {
  return getTreatments().find((treatment) => treatment.slug === slug);
}

export function getTreatmentsByCategory(
  category: TreatmentCategory,
): Treatment[] {
  return getTreatments().filter((treatment) => treatment.category === category);
}

export function filterTreatments(options: {
  category?: TreatmentCategory | "todas";
  duration?: DurationFilter;
  price?: PriceFilter;
}): Treatment[] {
  return getTreatments().filter((treatment) => {
    if (
      options.category &&
      options.category !== "todas" &&
      treatment.category !== options.category
    ) {
      return false;
    }

    if (options.duration && options.duration !== "todas") {
      if (treatment.durationMinutes !== Number(options.duration)) {
        return false;
      }
    }

    if (options.price && options.price !== "todos") {
      if (options.price === "hasta100" && treatment.price > 100) return false;
      if (
        options.price === "100a140" &&
        (treatment.price < 100 || treatment.price > 140)
      ) {
        return false;
      }
      if (options.price === "mas140" && treatment.price <= 140) return false;
    }

    return true;
  });
}

export function getProfessionals(): Professional[] {
  return professionals;
}

export function getFeaturedProfessionals(): Professional[] {
  return professionals.filter((professional) => professional.featured);
}

export function getProfessionalBySlug(slug: string): Professional | undefined {
  return professionals.find((professional) => professional.slug === slug);
}

export function getProfessionalsForTreatment(
  treatmentId: string,
): Professional[] {
  return professionals.filter((professional) =>
    professional.treatmentIds.includes(treatmentId),
  );
}

export function getTreatmentsForProfessional(
  professional: Professional,
): Treatment[] {
  return getTreatments().filter((treatment) =>
    professional.treatmentIds.includes(treatment.id),
  );
}

export function getArticles(): Article[] {
  return articles;
}

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug);
}

export const timeSlots = ["10:00", "11:30", "13:00", "16:30", "18:00"] as const;
