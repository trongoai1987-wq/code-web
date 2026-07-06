import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Icon } from "@/components/Icon";
import { Breadcrumb } from "@/components/Breadcrumb";
import { ProductCard } from "@/components/ProductCard";
import {
  categories,
  categoryMap,
  getProductsByCategory,
  type CategorySlug,
} from "@/lib/data";

export function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const cat = categoryMap[slug as CategorySlug];
  if (!cat) return { title: "Không tìm thấy danh mục" };
  return {
    title: cat.name,
    description: cat.description,
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cat = categoryMap[slug as CategorySlug];
  if (!cat) notFound();

  const items = getProductsByCategory(cat.slug);

  return (
    <>
      <Breadcrumb
        items={[
          { label: "Sản phẩm", href: "/san-pham/" },
          { label: cat.name },
        ]}
      />

      {/* Header danh mục */}
      <section className="border-b border-slate-100 bg-gradient-to-br from-brand-50 to-white">
        <div className="container-x flex flex-col items-start gap-4 py-8 sm:flex-row sm:items-center">
          <span className="flex size-16 items-center justify-center rounded-2xl bg-white text-brand-600 shadow-card ring-1 ring-brand-100">
            <Icon name={cat.icon} className="size-8" />
          </span>
          <div>
            <h1 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
              {cat.name}
            </h1>
            <p className="mt-1 max-w-2xl text-sm text-slate-600">
              {cat.description}
            </p>
          </div>
        </div>
      </section>

      {/* Chip các danh mục khác */}
      <section className="container-x pt-6">
        <div className="flex flex-wrap gap-2">
          {categories.map((c) => (
            <Link
              key={c.slug}
              href={`/danh-muc/${c.slug}/`}
              className={
                c.slug === cat.slug
                  ? "rounded-full border border-brand-600 bg-brand-600 px-4 py-1.5 text-sm font-medium text-white"
                  : "rounded-full border border-slate-200 bg-white px-4 py-1.5 text-sm font-medium text-slate-600 transition-colors hover:border-brand-200 hover:text-brand-700"
              }
            >
              {c.name}
            </Link>
          ))}
        </div>
      </section>

      {/* Danh sách sản phẩm */}
      <section className="container-x py-8">
        <p className="mb-4 text-sm text-slate-500">
          <span className="font-semibold text-slate-800">{items.length}</span>{" "}
          sản phẩm trong danh mục
        </p>
        {items.length > 0 ? (
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {items.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-slate-200 bg-slate-50 py-16 text-center">
            <p className="font-semibold text-slate-700">
              Chưa có sản phẩm trong danh mục này
            </p>
            <p className="mt-1 text-sm text-slate-500">
              Vui lòng liên hệ dược sĩ để được tư vấn sản phẩm phù hợp.
            </p>
          </div>
        )}
      </section>
    </>
  );
}
