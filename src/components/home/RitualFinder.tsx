import Link from "next/link";
import { images } from "@/lib/images";
import { RemoteImage } from "@/components/media/RemoteImage";

const categories = [
  { href: "/tratamientos?categoria=facial", label: "Facial", image: images.categoryFacial },
  { href: "/tratamientos?categoria=corporal", label: "Corporal", image: images.categoryBody },
  { href: "/tratamientos?categoria=masaje", label: "Masaje", image: images.categoryMasaje },
  { href: "/tratamientos?categoria=bienestar", label: "Bienestar", image: images.categoryBienestar },
];

export function RitualFinder() {
  return (
    <section className="border-t border-[var(--line)]">
      <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <p className="eyebrow">Descubrir</p>
        <h2 className="display mt-4 max-w-xl text-5xl sm:text-6xl">
          Encuentra tu ritual
        </h2>
        <div className="mt-14 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <Link
              key={category.label}
              href={category.href}
              className="group relative block aspect-[3/4] overflow-hidden sm:min-h-0"
            >
              <RemoteImage
                image={category.image}
                className="transition-transform duration-700 group-hover:scale-[1.04]"
                sizes="(min-width: 1024px) 25vw, 100vw"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(12,11,10,0.1)_0%,rgba(12,11,10,0.72)_100%)]" />
              <span className="absolute inset-x-0 bottom-8 text-center text-[12px] tracking-[0.38em] uppercase text-ivory">
                {category.label}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
