import type { Metadata } from "next";
import { TreatmentDiscovery } from "@/components/treatments/TreatmentDiscovery";

export const metadata: Metadata = {
  title: "Tratamientos",
  description:
    "Rituales faciales, corporales, de masaje y bienestar en ÉLANE, Barcelona.",
};

export default async function TreatmentsPage({
  searchParams,
}: {
  searchParams: Promise<{ categoria?: string }>;
}) {
  const params = await searchParams;

  return (
    <main className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
      <p className="eyebrow">El cuidado</p>
      <h1 className="display mt-5 text-6xl sm:text-7xl lg:text-8xl">
        Tratamientos
      </h1>
      <p className="mt-6 max-w-xl text-lg leading-8 text-ivory-soft">
        Rituales diseñados para acompañarte.
      </p>
      <div className="mt-16">
        <TreatmentDiscovery initialCategory={params.categoria} />
      </div>
    </main>
  );
}
