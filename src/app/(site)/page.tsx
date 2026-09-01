import { BookingCta } from "@/components/home/BookingCta";
import { FeaturedProfessionals } from "@/components/home/FeaturedProfessionals";
import { FeaturedTreatments } from "@/components/home/FeaturedTreatments";
import { HomeHero } from "@/components/home/HomeHero";
import { HomeIntro } from "@/components/home/HomeIntro";
import { JournalPreview } from "@/components/home/JournalPreview";
import { RitualFinder } from "@/components/home/RitualFinder";
import {
  getArticles,
  getFeaturedProfessionals,
  getFeaturedTreatments,
} from "@/lib/catalog";

export default function HomePage() {
  const treatments = getFeaturedTreatments();
  const professionals = getFeaturedProfessionals();
  const articles = getArticles();

  return (
    <main>
      <HomeHero />
      <HomeIntro />
      <FeaturedTreatments treatments={treatments} />
      <RitualFinder />
      <FeaturedProfessionals professionals={professionals} />
      <JournalPreview articles={articles} />
      <BookingCta />
    </main>
  );
}
