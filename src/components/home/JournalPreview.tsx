import Link from "next/link";
import type { Article } from "@/lib/types";
import { RemoteImage } from "@/components/media/RemoteImage";

export function JournalPreview({ articles }: { articles: Article[] }) {
  return (
    <section className="border-t border-[var(--line)]">
      <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="eyebrow">Journal</p>
            <h2 className="display mt-4 max-w-lg text-4xl sm:text-5xl">
              Lecturas para ir más despacio
            </h2>
          </div>
          <Link
            href="/journal"
            className="text-[11px] tracking-[0.28em] uppercase text-gold hover:text-gold-bright"
          >
            Ver el journal
          </Link>
        </div>
        <div className="mt-16 grid gap-12 lg:grid-cols-3">
          {articles.map((article) => (
            <article key={article.id}>
              <Link href={`/journal/${article.slug}`} className="group block">
                <div className="relative aspect-[16/11] overflow-hidden">
                  <RemoteImage
                    image={article.image}
                    className="transition-transform duration-700 group-hover:scale-[1.03]"
                    sizes="(min-width: 1024px) 30vw, 100vw"
                  />
                </div>
                <h3 className="display mt-6 text-3xl leading-tight">
                  {article.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-muted">
                  {article.excerpt}
                </p>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
