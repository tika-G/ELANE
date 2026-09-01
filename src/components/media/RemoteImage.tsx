"use client";

import Image from "next/image";
import { useState } from "react";
import type { ImageAsset } from "@/lib/types";
import { cn } from "@/lib/utils";

const CHARCOAL_BLUR =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYGD4DwABBAEAwQ2p5QAAAABJRU5ErkJggg==";

interface RemoteImageProps {
  image: ImageAsset;
  className?: string;
  priority?: boolean;
  sizes?: string;
}

export function RemoteImage({
  image,
  className,
  priority,
  sizes = "(min-width: 1024px) 50vw, 100vw",
}: RemoteImageProps) {
  return (
    <RemoteImageInner
      key={image.src}
      image={image}
      className={className}
      priority={priority}
      sizes={sizes}
    />
  );
}

function RemoteImageInner({
  image,
  className,
  priority,
  sizes,
}: RemoteImageProps) {
  const [src, setSrc] = useState(image.src);
  const [failed, setFailed] = useState(false);
  const grade = image.grade ?? "none";

  return (
    <div
      className="absolute inset-0 bg-[var(--ink-raised)]"
      role={failed ? "img" : undefined}
      aria-label={failed ? image.alt : undefined}
    >
      {failed ? null : (
        <Image
          src={src}
          alt={image.alt}
          fill
          priority={priority}
          quality={85}
          sizes={sizes}
          placeholder="blur"
          blurDataURL={CHARCOAL_BLUR}
          onError={() => {
            if (
              src === image.src &&
              image.fallbackSrc &&
              image.fallbackSrc !== image.src
            ) {
              setSrc(image.fallbackSrc);
              return;
            }
            setFailed(true);
          }}
          style={{ objectPosition: image.objectPosition ?? "center" }}
          className={cn(
            "object-cover",
            grade === "subtle" &&
              "saturate-[0.94] contrast-[1.03] brightness-[0.97]",
            className,
          )}
        />
      )}
    </div>
  );
}
