import type { Metadata } from "next";
import { MapPin, Phone, Clock, Navigation } from "lucide-react";
import { Breadcrumb } from "@/components/Breadcrumb";
import { ZaloButton } from "@/components/ContactButtons";
import { branches } from "@/lib/data";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Hệ thống nhà thuốc",
  description: `Tìm chi nhánh ${site.name} gần bạn nhất. Địa chỉ, số điện thoại và giờ mở cửa các nhà thuốc Thiện Hạnh.`,
};

export default function BranchesPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Hệ thống nhà thuốc" }]} />

      <section className="border-b border-slate-100 bg-gradient-to-br from-brand-50 to-white">
        <div className="container-x py-10 text-center">
          <h1 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
            Hệ thống nhà thuốc Thiện Hạnh
          </h1>
          <p className="mx-auto mt-2 max-w-2xl text-sm text-slate-600">
            Nhà thuốc phục vụ bà con tại M'Đrắk. Ghé nhà
            thuốc hoặc đặt hàng nhanh qua Zalo/điện thoại.
          </p>
        </div>
      </section>

      <section className="container-x py-10">
        <div className="grid gap-5 md:grid-cols-2">
          {branches.map((b) => {
            const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
              b.address,
            )}`;
            return (
              <div
                key={b.id}
                className="flex flex-col rounded-2xl border border-slate-100 bg-white p-6 shadow-card transition-shadow hover:shadow-pop"
              >
                <h2 className="text-lg font-bold text-slate-900">{b.name}</h2>
                <ul className="mt-4 space-y-3 text-sm text-slate-600">
                  <li className="flex items-start gap-3">
                    <MapPin
                      className="mt-0.5 size-5 shrink-0 text-brand-600"
                      aria-hidden="true"
                    />
                    <span>{b.address}</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Phone
                      className="size-5 shrink-0 text-brand-600"
                      aria-hidden="true"
                    />
                    <a
                      href={`tel:${b.phone.replace(/\s/g, "")}`}
                      className="font-medium text-slate-800 hover:text-brand-700"
                    >
                      {b.phone}
                    </a>
                  </li>
                  <li className="flex items-center gap-3">
                    <Clock
                      className="size-5 shrink-0 text-brand-600"
                      aria-hidden="true"
                    />
                    <span>Mở cửa: {b.hours}</span>
                  </li>
                </ul>
                <div className="mt-5 flex flex-wrap gap-3 pt-1">
                  <a
                    href={mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border-2 border-brand-600 px-4 py-2.5 text-sm font-semibold text-brand-700 transition-colors hover:bg-brand-50"
                  >
                    <Navigation className="size-4" aria-hidden="true" />
                    Chỉ đường
                  </a>
                  <ZaloButton
                    className="px-4 py-2.5 text-sm"
                    label="Đặt qua Zalo"
                    message={`Xin chào ${b.name}, tôi muốn được tư vấn sản phẩm.`}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
