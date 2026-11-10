import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
import { ArticleCard, FeaturedArticleCard } from "@/components/ArticleCard";
import { articles } from "@/lib/data";
import { canonical } from "@/lib/site";

export const metadata: Metadata = {
  title: "Tin sức khỏe",
  description:
    "Kiến thức chăm sóc sức khỏe, hướng dẫn dùng thuốc an toàn và bí quyết sống khỏe từ đội ngũ dược sĩ Nhà Thuốc Thiện Hạnh.",
  alternates: { canonical: canonical("/tin-suc-khoe/") },
};

export default function NewsPage() {
  const [featured, ...rest] = articles;

  return (
    <>
      <Breadcrumb items={[{ label: "Tin sức khỏe" }]} />

      <section className="container-x py-8">
        <div className="mb-6">
          <h1 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
            Tin sức khỏe
          </h1>
          <p className="mt-1 text-sm text-slate-500">
            Kiến thức chăm sóc sức khỏe và dùng thuốc an toàn từ dược sĩ.
          </p>
        </div>

        {/* Bài nổi bật */}
        {featured && (
          <div className="mb-8">
            <FeaturedArticleCard article={featured} />
          </div>
        )}

        {/* Danh sách còn lại */}
        {rest.length > 0 && (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((a) => (
              <ArticleCard key={a.slug} article={a} />
            ))}
          </div>
        )}
      </section>
    </>
  );
}
