import { images } from "@/lib/images";
import { RemoteImage } from "@/components/media/RemoteImage";

export function HomeIntro() {
  return (
    <section className="mx-auto grid max-w-[1440px] items-center gap-12 px-5 py-24 sm:px-8 lg:grid-cols-12 lg:gap-16 lg:px-12 lg:py-32">
      <div className="lg:col-span-5">
        <p className="eyebrow">Barcelona</p>
        <h2 className="display mt-6 max-w-md text-5xl text-ivory sm:text-6xl">
          Un estudio para volver a ti.
        </h2>
        <div className="mt-8 space-y-5 text-[16px] leading-8 text-ivory-soft">
          <p>
            ÉLANE es un estudio de belleza y bienestar en Barcelona. Un espacio
            contenido, pensado para rituales faciales, corporales y de masaje
            que se adaptan a tu ritmo.
          </p>
          <p>
            Aquí el cuidado no se improvisa. Cada tratamiento se diseña
            alrededor de ti: tu piel, tu tiempo, lo que necesitas ahora.
          </p>
        </div>
      </div>
      <div className="relative aspect-[4/5] lg:col-span-7">
        <RemoteImage
          image={images.homeStudio}
          sizes="(min-width: 1024px) 55vw, 100vw"
        />
      </div>
    </section>
  );
}
