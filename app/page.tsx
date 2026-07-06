import Link from "next/link";
import {
  ShieldCheck,
  ArrowRight,
  Star,
  Store,
  CalendarDays,
} from "lucide-react";
import { Icon } from "@/components/Icon";
import { SectionHeading } from "@/components/Section";
import { ProductCard } from "@/components/ProductCard";
import { ZaloButton, CallButton } from "@/components/ContactButtons";
import {
  categories,
  commitments,
  products,
  articles,
  getFeaturedProducts,
} from "@/lib/data";
import { site } from "@/lib/site";

export default function HomePage() {
  const featured = getFeaturedProducts(8);
  const newest = products.filter((p) => p.tags.includes("new")).slice(0, 4);

  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-700 via-brand-600 to-brand-500 text-white">
        <div className="absolute -right-16 -top-16 size-72 rounded-full bg-white/10" />
        <div className="absolute -bottom-24 left-1/4 size-72 rounded-full bg-accent-500/20" />
        <div className="container-x relative grid gap-10 py-12 lg:grid-cols-2 lg:py-20">
          <div className="flex flex-col justify-center">
            <span className="mb-4 inline-flex w-fit items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-sm font-medium backdrop-blur">
              <ShieldCheck className="size-4" aria-hidden="true" />
              Thuốc chính hãng · Dược sĩ tư vấn tận tâm
            </span>
            <h1 className="text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
              Chăm sóc sức khỏe <br className="hidden sm:block" />
              gia đình bạn mỗi ngày
            </h1>
            <p className="mt-4 max-w-lg text-base text-brand-50/90 sm:text-lg">
              {site.name} — tra cứu hàng nghìn sản phẩm thuốc, thực phẩm chức năng,
              thiết bị y tế chính hãng. Đặt hàng nhanh chóng qua Zalo hoặc hotline.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/san-pham/"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-brand-700 shadow-sm transition hover:bg-brand-50"
              >
                Xem sản phẩm
                <ArrowRight className="size-5" aria-hidden="true" />
              </Link>
              <ZaloButton />
            </div>
            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm">
              <Stat value="10.000+" label="Sản phẩm chính hãng" />
              <Stat value="4 chi nhánh" label="Trên toàn thành phố" />
              <Stat value="50.000+" label="Khách hàng tin dùng" />
            </div>
          </div>

          {/* Thẻ nổi cam kết */}
          <div className="relative hidden items-center justify-center lg:flex">
            <div className="w-full max-w-sm rounded-3xl bg-white p-6 text-slate-800 shadow-pop">
              <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                <span className="flex size-12 items-center justify-center rounded-2xl bg-brand-600 text-white">
                  <ShieldCheck className="size-7" aria-hidden="true" />
                </span>
                <div>
                  <p className="font-bold text-slate-900">Cam kết Thiện Hạnh</p>
                  <p className="text-sm text-slate-500">Vì sức khỏe cộng đồng</p>
                </div>
              </div>
              <ul className="mt-4 space-y-3">
                {commitments.map((c) => (
                  <li key={c.title} className="flex items-start gap-3">
                    <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                      <Icon name={c.icon} className="size-5" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-slate-800">{c.title}</p>
                      <p className="text-xs text-slate-500">{c.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CAM KẾT ===== */}
      <section className="border-b border-slate-100 bg-white">
        <div className="container-x grid grid-cols-2 gap-4 py-6 lg:grid-cols-4">
          {commitments.map((c) => (
            <div key={c.title} className="flex items-center gap-3">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                <Icon name={c.icon} className="size-6" />
              </span>
              <div>
                <p className="text-sm font-bold text-slate-800">{c.title}</p>
                <p className="hidden text-xs text-slate-500 sm:block">{c.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== DANH MỤC ===== */}
      <section className="container-x py-12">
        <SectionHeading
          title="Danh mục sản phẩm"
          subtitle="Đa dạng sản phẩm chăm sóc sức khỏe cho cả gia đình"
        />
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8">
          {categories.map((c) => (
            <Link
              key={c.slug}
              href={`/danh-muc/${c.slug}/`}
              className="group flex flex-col items-center gap-3 rounded-2xl border border-slate-100 bg-white p-4 text-center shadow-card transition-all duration-200 hover:-translate-y-1 hover:border-brand-200 hover:shadow-pop"
            >
              <span className="flex size-14 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-white">
                <Icon name={c.icon} className="size-7" />
              </span>
              <span className="text-sm font-semibold text-slate-700">{c.name}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* ===== SẢN PHẨM NỔI BẬT ===== */}
      <section className="bg-slate-50/70 py-12">
        <div className="container-x">
          <SectionHeading
            title="Sản phẩm nổi bật"
            subtitle="Được khách hàng tin dùng nhiều nhất"
            href="/san-pham/"
          />
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {featured.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* ===== BANNER KHUYẾN MÃI ===== */}
      <section className="container-x py-12">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-accent-500 to-accent-600 px-6 py-10 text-white sm:px-12 sm:py-14">
          <div className="absolute -right-10 -top-10 size-48 rounded-full bg-white/10" />
          <div className="relative flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
            <div>
              <p className="mb-2 inline-flex items-center gap-2 rounded-full bg-white/20 px-3 py-1 text-sm font-medium">
                <Star className="size-4 fill-white" aria-hidden="true" /> Ưu đãi thành viên
              </p>
              <h2 className="text-2xl font-extrabold sm:text-3xl">
                Tư vấn miễn phí cùng dược sĩ
              </h2>
              <p className="mt-2 max-w-xl text-white/90">
                Nhắn tin Zalo hoặc gọi hotline để được dược sĩ tư vấn sản phẩm phù
                hợp và nhận nhiều ưu đãi hấp dẫn.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <ZaloButton className="bg-white text-accent-600 hover:bg-brand-50" label="Nhắn Zalo ngay" />
              <CallButton className="border-white text-white hover:bg-white/10" />
            </div>
          </div>
        </div>
      </section>

      {/* ===== HÀNG MỚI VỀ ===== */}
      {newest.length > 0 && (
        <section className="container-x pb-12">
          <SectionHeading title="Hàng mới về" subtitle="Cập nhật sản phẩm mới nhất" href="/san-pham/" />
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {newest.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}

      {/* ===== TIN SỨC KHỎE ===== */}
      <section className="bg-slate-50/70 py-12">
        <div className="container-x">
          <SectionHeading title="Tin sức khỏe" subtitle="Kiến thức chăm sóc sức khỏe từ dược sĩ" href="/tin-suc-khoe/" />
          <div className="grid gap-5 md:grid-cols-3">
            {articles.map((a) => (
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
                    {new Date(a.date).toLocaleDateString("vi-VN")} · {a.readingTime}
                  </span>
                  <h3 className="line-clamp-2 font-bold text-slate-800 transition-colors group-hover:text-brand-700">
                    {a.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-sm text-slate-500">{a.excerpt}</p>
                  <span className="mt-auto pt-4 text-sm font-semibold text-brand-700">
                    Đọc tiếp →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="text-xl font-extrabold text-white">{value}</p>
      <p className="text-xs text-brand-50/80">{label}</p>
    </div>
  );
}
