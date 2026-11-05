import Link from "next/link";
import { ShieldCheck, ArrowRight, MessageCircle } from "lucide-react";
import { Icon } from "@/components/Icon";
import { SectionHeading } from "@/components/Section";
import { CategoryGrid } from "@/components/CategoryGrid";
import { ArticleCard } from "@/components/ArticleCard";
import { ProductCard } from "@/components/ProductCard";
import { ZaloButton, CallButton } from "@/components/ContactButtons";
import { commitments, articles, getFeaturedProducts } from "@/lib/data";
import { site } from "@/lib/site";

export default function HomePage() {
  const featured = getFeaturedProducts(8);

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
              {site.name} tại {site.addressArea} — thuốc, thực phẩm chức năng và
              thiết bị y tế có nguồn gốc rõ ràng. Gọi hoặc nhắn Zalo để dược sĩ
              kiểm tra hàng và báo giá.
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
              <Stat value={site.addressShort} label={site.addressArea} />
              <Stat value={site.hoursShort} label="Mở cửa mỗi ngày" />
              <Stat value={`Hotline ${site.hotline}`} label="Gọi hoặc nhắn Zalo" />
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
      <section className="border-b border-slate-100 bg-gradient-to-b from-brand-50/60 to-white">
        <div className="container-x grid grid-cols-2 gap-3 py-7 sm:gap-4 lg:grid-cols-4">
          {commitments.map((c) => {
            const noiDung = (
              <>
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-sm">
                  <Icon name={c.icon} className="size-6" />
                </span>
                <span className="block min-w-0">
                  <span className="block text-sm font-bold leading-snug text-slate-800">
                    {c.title}
                  </span>
                  <span className="mt-0.5 hidden text-[13px] leading-snug text-slate-500 sm:block">
                    {c.description}
                  </span>
                </span>
              </>
            );
            const lop =
              "flex items-start gap-3 rounded-2xl bg-white/80 p-3 ring-1 ring-brand-100/70 backdrop-blur-sm sm:p-4";

            // Cam kết nào có trang nói rõ hơn thì bấm vào được
            return c.href ? (
              <Link
                key={c.title}
                href={c.href}
                className={`${lop} transition-shadow hover:shadow-card`}
              >
                {noiDung}
              </Link>
            ) : (
              <div key={c.title} className={lop}>
                {noiDung}
              </div>
            );
          })}
        </div>
      </section>

      {/* ===== DANH MỤC ===== */}
      <section className="relative overflow-hidden py-12">
        <div
          aria-hidden="true"
          className="absolute -right-24 top-10 size-72 rounded-full bg-brand-50/70 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="absolute -left-24 bottom-0 size-72 rounded-full bg-accent-50/70 blur-3xl"
        />
        <div className="container-x relative">
          <SectionHeading
            title="Danh mục sản phẩm"
            subtitle="Đa dạng sản phẩm chăm sóc sức khỏe cho cả gia đình"
          />
          <CategoryGrid />
        </div>
      </section>

      {/* ===== SẢN PHẨM NỔI BẬT ===== */}
      <section className="bg-slate-50/70 py-12">
        <div className="container-x">
          <SectionHeading
            title="Sản phẩm tại nhà thuốc"
            subtitle="Một số sản phẩm có tại nhà thuốc"
            href={featured.length > 0 ? "/san-pham/" : undefined}
          />
          {featured.length > 0 ? (
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
              {featured.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-dashed border-slate-200 bg-white p-8 text-center">
              <p className="font-semibold text-slate-700">
                Danh mục sản phẩm đang được cập nhật
              </p>
              <p className="mx-auto mt-2 max-w-md text-sm text-slate-500">
                Nhà thuốc đang hoàn thiện danh sách sản phẩm trên website. Bạn
                cần tìm thuốc hay sản phẩm nào, vui lòng gọi hoặc nhắn Zalo để
                dược sĩ kiểm tra và báo giá ngay.
              </p>
              <div className="mt-5 flex flex-wrap justify-center gap-3">
                <ZaloButton label="Hỏi dược sĩ qua Zalo" />
                <CallButton />
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ===== BANNER LIÊN HỆ DƯỢC SĨ ===== */}
      <section className="container-x py-12">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-accent-500 to-accent-600 px-6 py-10 text-white sm:px-12 sm:py-14">
          <div className="absolute -right-10 -top-10 size-48 rounded-full bg-white/10" />
          <div className="relative flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
            <div>
              <p className="mb-2 inline-flex items-center gap-2 rounded-full bg-white/20 px-3 py-1 text-sm font-medium">
                <MessageCircle className="size-4" aria-hidden="true" />
                Hỏi đáp cùng dược sĩ
              </p>
              <h2 className="text-2xl font-extrabold sm:text-3xl">
                Chưa biết nên dùng sản phẩm nào?
              </h2>
              <p className="mt-2 max-w-xl text-white/90">
                Nhắn Zalo hoặc gọi {site.hotline} để dược sĩ của nhà thuốc kiểm
                tra sản phẩm còn hàng, hướng dẫn cách dùng và báo giá.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <ZaloButton variant="brand" label="Nhắn Zalo ngay" />
              <CallButton variant="outlineWhite" />
            </div>
          </div>
        </div>
      </section>

      {/* ===== TIN SỨC KHỎE ===== */}
      <section className="bg-slate-50/70 py-12">
        <div className="container-x">
          <SectionHeading title="Tin sức khỏe" subtitle="Kiến thức chăm sóc sức khỏe từ dược sĩ" href="/tin-suc-khoe/" />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {articles.map((a) => (
              <ArticleCard key={a.slug} article={a} />
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
      <p className="text-lg font-extrabold text-white">{value}</p>
      <p className="text-[13px] text-brand-50/80">{label}</p>
    </div>
  );
}
