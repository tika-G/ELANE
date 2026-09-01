import type { ImageAsset, ImageFrame, ImageGrade } from "@/lib/types";

/**
 * ÉLANE image library — one editorial campaign.
 * Swap `resolveImageSrc` later for CDN / Supabase Storage.
 *
 * Sources: Unsplash License (https://unsplash.com/license).
 * No Unsplash+ / Getty / iStock. IDs verified HTTP 200 before shipping.
 */
const IMAGE_ORIGIN =
  process.env.NEXT_PUBLIC_IMAGE_ORIGIN ?? "https://images.unsplash.com";

const FALLBACK_PHOTO_ID = "1585945037805-5fd82c2e60b1";

export function resolveImageSrc(path: string): string {
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }

  const origin = IMAGE_ORIGIN.replace(/\/$/, "");
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${origin}${normalized}`;
}

function photoUrl(photoId: string, width: number, height: number): string {
  return resolveImageSrc(
    `/photo-${photoId}?auto=format&fit=crop&w=${width}&h=${height}&q=85`,
  );
}

function photo(
  photoId: string,
  alt: string,
  width: number,
  height: number,
  options?: {
    objectPosition?: string;
    frame?: ImageFrame;
    grade?: ImageGrade;
  },
): ImageAsset {
  return {
    src: photoUrl(photoId, width, height),
    fallbackSrc: photoUrl(FALLBACK_PHOTO_ID, width, height),
    alt,
    width,
    height,
    objectPosition: options?.objectPosition ?? "center",
    frame: options?.frame,
    grade: options?.grade ?? "none",
  };
}

const cinematic = (
  id: string,
  alt: string,
  position?: string,
  grade?: ImageGrade,
) =>
  photo(id, alt, 2400, 1600, {
    objectPosition: position,
    frame: "cinematic",
    grade,
  });

const portrait = (
  id: string,
  alt: string,
  position?: string,
  grade?: ImageGrade,
) =>
  photo(id, alt, 1400, 1750, {
    objectPosition: position,
    frame: "portrait",
    grade,
  });

const landscape = (
  id: string,
  alt: string,
  position?: string,
  grade?: ImageGrade,
) =>
  photo(id, alt, 1800, 1200, {
    objectPosition: position,
    frame: "landscape",
    grade,
  });

const square = (
  id: string,
  alt: string,
  position?: string,
  grade?: ImageGrade,
) =>
  photo(id, alt, 1400, 1400, {
    objectPosition: position,
    frame: "square",
    grade,
  });

export const images = {
  // HOME
  homeHero: cinematic(
    "1581182815808-b6eb627a8798",
    "Retrato de belleza en clave editorial: piel luminosa, luz cinematográfica y un fondo oscuro.",
    "center 22%",
  ),
  homeTreatment: portrait(
    "1761718210089-ba3bb5ccb54f",
    "Ritual facial contemporáneo: mascarilla, brocha y una luz de estudio contenida.",
    "center 28%",
  ),
  homeEditorial01: portrait(
    "1693004927824-f2623bbedc8b",
    "Primer plano de skincare: crema sobre la piel y un gesto de calma.",
    "center 30%",
  ),
  homeEditorial02: square(
    "1761718209852-54ca4210183e",
    "Tratamiento de belleza editorial: herramientas metálicas y una piel hidratada.",
    "center 40%",
  ),
  homeStudio: portrait(
    "1761718209793-cb6d348831e0",
    "Mascarilla facial en el estudio: textura, brocha y una paleta crema.",
    "center 32%",
  ),

  // TREATMENTS
  treatmentFacial: portrait(
    "1761718209835-c8586b7dcac0",
    "Aplicación de producto en un ritual facial, con brocha y piel natural.",
    "center 42%",
  ),
  treatmentSkin: portrait(
    "1561228987-8e7379dde477",
    "Piel natural en primer plano: cuello, manos y una luz suave.",
    "center 18%",
  ),
  treatmentBody: portrait(
    "1619451427882-6aaaded0cc61",
    "Gesto de hidratación corporal: manos, textura y un dispensador de ritual.",
    "center 40%",
  ),
  treatmentRitual: portrait(
    "1748543668676-ea8241cb3886",
    "Naturaleza muerta de skincare: texturas, hojas y una paleta beige.",
    "center",
  ),
  treatmentDetail01: portrait(
    "1603291000179-afd74889979c",
    "Cercanía de belleza: textura de piel, mirada y una iluminación de campaña.",
    "center 40%",
  ),
  treatmentDetail02: square(
    "1771329064159-33f758d91f4a",
    "Sérums en vidrio ámbar, composición editorial sobre fondo claro.",
    "center",
  ),
  treatmentRoom: landscape(
    "1731514771613-991a02407132",
    "Ritual facial en cabina: producto, manos y estantería de skincare.",
    "center 35%",
  ),
  treatmentMaterial: square(
    "1620916297397-a4a5402a3c6c",
    "Manos y un dropper de sérum. El gesto como materia del ritual.",
    "center 42%",
  ),
  treatmentCalm: portrait(
    "1675194085165-70274e53812b",
    "Retrato de calma: ojos cerrados, piel natural y una luz dirigida.",
    "center 18%",
  ),
  treatmentTexture: square(
    "1748543668751-902d6461890d",
    "Macro de textura: aceites, gel y una paleta champagne.",
    "center",
  ),
  categoryFacial: landscape(
    "1616683693504-3ea7e9ad6fec",
    "Composición facial editorial, recorte apaisado para el descubrimiento de rituales.",
    "center 28%",
  ),
  categoryBody: landscape(
    "1534528741775-53994a69daeb",
    "Piel luminosa en clave de campaña, con una luz cinematográfica.",
    "center 22%",
  ),
  categoryMasaje: landscape(
    "1643684391140-c5056cfd3436",
    "Masaje facial de estudio: piel hidratada y una luz de editorial.",
    "center 45%",
  ),
  categoryBienestar: landscape(
    "1631730486572-226d1f595b68",
    "Ritual de bienestar: aceites, sérums y una paleta rosa champán.",
    "center",
  ),

  // PROFESSIONALS
  professional01: portrait(
    "1557296387-5358ad7997bb",
    "Retrato editorial de Anna Serra, facialista.",
    "center 22%",
  ),
  professional02: portrait(
    "1531746020798-e6953c6e8e04",
    "Retrato cinematográfico de Marta Vidal, masaje y corporal.",
    "center 16%",
  ),
  professional03: portrait(
    "1611594547712-9e5d7da58684",
    "Retrato de Lucía Ferrer, bienestar.",
    "center 18%",
  ),
  professional04: portrait(
    "1665703156181-b92723e119a2",
    "Retrato de Elena Roca, rituales faciales.",
    "center 20%",
  ),

  // STUDIO — beauty/skincare stills, never residential interiors
  studioExterior: cinematic(
    "1777840347880-747242e0db00",
    "Naturaleza muerta de estudio: frascos ámbar sobre piedra y una paleta arena.",
    "center 70%",
  ),
  studioReception: landscape(
    "1580870069867-74c57ee1bb07",
    "Línea de producto en recepción: vidrio, textura y una paleta marfil.",
    "center 55%",
  ),
  studioInterior01: portrait(
    "1608571423902-eed4a5ad8108",
    "Sérum en vidrio ámbar, luz dirigida y sombra de follaje.",
    "center 45%",
  ),
  studioInterior02: landscape(
    "1611930022073-b7a4ba5fcccd",
    "Composición de estudio: vidrio ámbar, matcha y carbón sobre fondo beige.",
    "center",
  ),
  studioTreatmentRoom: portrait(
    "1598440947619-2c35fc9aa908",
    "Mesa de ritual: cremas, jade roller y una paleta de cuidado.",
    "center",
  ),
  studioDetail: square(
    "1556228720-195a672e8a03",
    "Detalle de producto: textura de hidratación sobre un tubo mate.",
    "center",
  ),

  // JOURNAL
  journal01: landscape(
    "1608248543803-ba4f8c70ae0b",
    "Naturaleza muerta de cuidado: tubo, caja y una luz cinematográfica.",
    "center",
  ),
  journal02: landscape(
    "1620916566398-39f1143ab7be",
    "Tubo de skincare sobre fondo champagne, recorte editorial.",
    "center",
  ),
  journal03: square(
    "1612817288484-6f916006741a",
    "Ritual de producto: vidrio ámbar, piedras y una paleta botánica.",
    "center",
  ),
  journal04: landscape(
    "1516975080664-ed2fc6a32937",
    "Brochas y herramientas de belleza, composición de revista.",
    "center 35%",
  ),
  journal05: landscape(
    "1748543668643-1ada33167539",
    "Texturas de skincare: aceite, crema y gel sobre un fondo beige.",
    "center",
  ),
  journal06: landscape(
    "1552046122-03184de85e08",
    "Manos y un frasco oscuro. El gesto mínimo del ritual.",
    "center 40%",
  ),

  fallback: landscape(
    FALLBACK_PHOTO_ID,
    "Textura de crema sobre un fondo beige, usada como reserva visual.",
    "center",
  ),
} as const satisfies Record<string, ImageAsset>;

export type ImageKey = keyof typeof images;

export function getImage(key: ImageKey): ImageAsset {
  return images[key];
}

export const frameClassName: Record<ImageFrame, string> = {
  cinematic: "aspect-[3/2]",
  portrait: "aspect-[4/5]",
  landscape: "aspect-[3/2]",
  square: "aspect-square",
};
