import Link from "next/link";
import type { Metadata } from "next";
import { CalendarDays, Store, ArrowRight } from "lucide-react";
import { Breadcrumb } from "@/components/Breadcrumb";
import { articles } from "@/lib/data";

export const metadata: Metadata = {
  title: "Tin sức khỏe",
  description:
    "Kiến thức chăm sóc sức khỏe, hướng dẫn dùng thuốc an toàn và bí quyết sống khỏe từ đội ngũ dược sĩ Nhà Thuốc Thiện Hạnh.",
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
          <Link
            href={`/tin-suc-khoe/${featured.slug}/`}
            className="group mb-8 grid overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-card transition-shadow hover:shadow-pop md:grid-cols-2"
          >
            <div className="relative flex h-52 items-center justify-center bg-gradient-to-br from-brand-100 to-brand-50 md:h-full">
              <Store className="size-16 text-brand-400" aria-hidden="true" />
              <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-brand-700">
                {featured.category}
              </span>
            </div>
            <div className="flex flex-col justify-center p-6 sm:p-8">
              <span className="inline-flex items-center gap-1.5 text-xs text-slate-400">
                <CalendarDays className="size-3.5" aria-hidden="true" />
                {new Date(featured.date).toLocaleDateString("vi-VN")} ·{" "}
                {featured.readingTime}
              </span>
              <h2 className="mt-2 text-xl font-extrabold text-slate-900 transition-colors group-hover:text-brand-700 sm:text-2xl">
                {featured.title}
              </h2>
              <p className="mt-3 text-slate-600">{featured.excerpt}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-700">
                Đọc bài viết
                <ArrowRight className="size-4" aria-hidden="true" />
              </span>
            </div>
          </Link>
        )}

        {/* Danh sách còn lại */}
        {rest.length > 0 && (
          <div className="grid gap-5 md:grid-cols-3">
            {rest.map((a) => (
              <Link
                key={a.slug}
                href={`/tin-suc-khoe/${a.slug}/`}
                className="group flex flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-card transition-all duration-200 hover:-translate-y-1 hover:shadow-pop"
              >
                <div className="relative flex h-40 items-center justify-center bg-gradient-to-br from-brand-100 to-brand-50">
                  <Store className="size-12 text-brand-400" aria-hidden="true" />
                  <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-brand-700">
                    {a.category}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <span className="mb-2 inline-flex items-center gap-1.5 text-xs text-slate-400">
                    <CalendarDays className="size-3.5" aria-hidden="true" />
                    {new Date(a.date).toLocaleDateString("vi-VN")} ·{" "}
                    {a.readingTime}
                  </span>
                  <h3 className="line-clamp-2 font-bold text-slate-800 transition-colors group-hover:text-brand-700">
                    {a.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-sm text-slate-500">
                    {a.excerpt}
                  </p>
                  <span className="mt-auto pt-4 text-sm font-semibold text-brand-700">
                    Đọc tiếp →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>
    </>
  );
}
