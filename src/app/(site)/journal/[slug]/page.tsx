import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { RemoteImage } from "@/components/media/RemoteImage";
import { getArticleBySlug, getArticles } from "@/lib/catalog";
import { formatLongDate } from "@/lib/format";

export function generateStaticParams() {
  return getArticles().map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return { title: "Journal" };
  return { title: article.title, description: article.excerpt };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  return (
    <article>
      <div className="relative min-h-[55vh] overflow-hidden">
        <RemoteImage image={article.image} priority sizes="100vw" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(12,11,10,0.15)_0%,rgba(12,11,10,0.82)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 mx-auto max-w-3xl px-5 pb-12 sm:px-8">
          <p className="eyebrow">{formatLongDate(article.date)}</p>
          <h1 className="display mt-4 text-5xl sm:text-6xl">{article.title}</h1>
        </div>
      </div>
      <div className="mx-auto max-w-2xl px-5 py-16 sm:px-8 lg:py-24">
        <div className="space-y-6 text-[17px] leading-8 text-ivory-soft">
          {article.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </article>
  );
}
