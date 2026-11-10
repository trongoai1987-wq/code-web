import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { CalendarDays, Store, ArrowLeft } from "lucide-react";
import { Breadcrumb } from "@/components/Breadcrumb";
import { ZaloButton, CallButton } from "@/components/ContactButtons";
import { articles, getArticleBySlug } from "@/lib/data";
import { canonical } from "@/lib/site";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return { title: "Không tìm thấy bài viết" };
  return {
    title: article.title,
    description: article.excerpt,
    alternates: { canonical: canonical(`/tin-suc-khoe/${article.slug}/`) },
    openGraph: {
      type: "article",
      title: article.title,
      description: article.excerpt,
    },
  };
}

export default async function ArticleDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const related = articles.filter((a) => a.slug !== article.slug).slice(0, 3);

  return (
    <>
      <Breadcrumb
        items={[
          { label: "Tin sức khỏe", href: "/tin-suc-khoe/" },
          { label: article.title },
        ]}
      />

      <article className="container-x py-8">
        <div className="mx-auto max-w-3xl">
          <span className="inline-flex items-center rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
            {article.category}
          </span>
          <h1 className="mt-3 text-2xl font-extrabold leading-snug text-slate-900 sm:text-3xl">
            {article.title}
          </h1>
          <p className="mt-3 inline-flex items-center gap-1.5 text-sm text-slate-400">
            <CalendarDays className="size-4" aria-hidden="true" />
            {new Date(article.date).toLocaleDateString("vi-VN")} ·{" "}
            {article.readingTime}
          </p>

          <div className="mt-6 flex h-56 items-center justify-center rounded-3xl bg-gradient-to-br from-brand-100 to-brand-50 sm:h-72">
            <Store className="size-20 text-brand-400" aria-hidden="true" />
          </div>

          <div className="mt-8 space-y-4 text-[15px] leading-relaxed text-slate-700">
            <p className="text-lg font-medium text-slate-800">
              {article.excerpt}
            </p>
            {article.content.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          {/* CTA tư vấn */}
          <div className="mt-10 rounded-3xl bg-brand-50/70 p-6 text-center sm:p-8">
            <h2 className="text-lg font-extrabold text-slate-900">
              Cần dược sĩ tư vấn thêm?
            </h2>
            <p className="mx-auto mt-1 max-w-md text-sm text-slate-600">
              Liên hệ Nhà thuốc Thiện Hạnh để được tư vấn miễn phí về sản phẩm và
              cách chăm sóc sức khỏe phù hợp.
            </p>
            <div className="mt-5 flex flex-wrap justify-center gap-3">
              <ZaloButton />
              <CallButton />
            </div>
          </div>

          <Link
            href="/tin-suc-khoe/"
            className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 hover:text-brand-800"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            Quay lại tin sức khỏe
          </Link>
        </div>

        {/* Bài viết liên quan */}
        {related.length > 0 && (
          <div className="mx-auto mt-12 max-w-5xl border-t border-slate-100 pt-8">
            <h2 className="mb-5 text-xl font-extrabold text-slate-900">
              Bài viết liên quan
            </h2>
            <div className="grid gap-5 md:grid-cols-3">
              {related.map((a) => (
                <Link
                  key={a.slug}
                  href={`/tin-suc-khoe/${a.slug}/`}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-card transition-all duration-200 hover:-translate-y-1 hover:shadow-pop"
                >
                  <div className="relative flex h-32 items-center justify-center bg-gradient-to-br from-brand-100 to-brand-50">
                    <Store className="size-10 text-brand-400" aria-hidden="true" />
                  </div>
                  <div className="flex flex-1 flex-col p-4">
                    <span className="text-xs text-slate-400">
                      {new Date(a.date).toLocaleDateString("vi-VN")}
                    </span>
                    <h3 className="mt-1 line-clamp-2 text-sm font-bold text-slate-800 transition-colors group-hover:text-brand-700">
                      {a.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </article>
    </>
  );
}
