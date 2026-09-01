import Link from "next/link";
import type { Metadata } from "next";
import { RemoteImage } from "@/components/media/RemoteImage";
import { getArticles } from "@/lib/catalog";
import { formatLongDate } from "@/lib/format";

export const metadata: Metadata = {
  title: "Journal",
  description: "Textos de ÉLANE sobre tiempo, cuidado y rituales.",
};

export default function JournalPage() {
  const articles = getArticles();

  return (
    <main className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
      <p className="eyebrow">Lecturas</p>
      <h1 className="display mt-5 text-6xl sm:text-7xl">Journal</h1>
      <ul className="mt-20 space-y-20">
        {articles.map((article) => (
          <li key={article.id} className="grid gap-8 lg:grid-cols-12 lg:items-center">
            <Link
              href={`/journal/${article.slug}`}
              className="relative aspect-[3/2] overflow-hidden lg:col-span-7"
            >
              <RemoteImage image={article.image} sizes="60vw" />
            </Link>
            <div className="lg:col-span-4 lg:col-start-9">
              <p className="text-[11px] tracking-[0.22em] uppercase text-muted">
                {formatLongDate(article.date)}
              </p>
              <h2 className="display mt-4 text-4xl">
                <Link href={`/journal/${article.slug}`}>{article.title}</Link>
              </h2>
              <p className="mt-5 text-sm leading-7 text-muted">{article.excerpt}</p>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
