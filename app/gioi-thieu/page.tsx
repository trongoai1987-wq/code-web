import type { Metadata } from "next";
import { Target, Eye, HeartHandshake, Store, Users, Award } from "lucide-react";
import { Icon } from "@/components/Icon";
import { Breadcrumb } from "@/components/Breadcrumb";
import { ZaloButton, CallButton } from "@/components/ContactButtons";
import { commitments } from "@/lib/data";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Giới thiệu",
  description: `Câu chuyện và cam kết của ${site.name} — hệ thống nhà thuốc tận tâm chăm sóc sức khỏe gia đình bạn.`,
};

const stats = [
  { icon: Store, value: site.addressLocality, label: site.addressShort },
  { icon: Users, value: "Dược sĩ", label: "Tư vấn trực tiếp" },
  { icon: Award, value: "Nguồn gốc", label: "Rõ ràng, có hóa đơn" },
];

export default function AboutPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Giới thiệu" }]} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-700 to-brand-500 text-white">
        <div className="container-x py-14 text-center">
          <h1 className="text-3xl font-extrabold sm:text-4xl">
            Về {site.name}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-brand-50/90">
            {site.slogan}. Chúng tôi mang đến sản phẩm chính hãng cùng đội ngũ
            dược sĩ tận tâm, đồng hành cùng sức khỏe của mọi gia đình Việt.
          </p>
        </div>
      </section>

      {/* Câu chuyện */}
      <section className="container-x py-12">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="text-sm font-bold uppercase tracking-wide text-brand-600">
              Câu chuyện của chúng tôi
            </span>
            <h2 className="mt-2 text-2xl font-extrabold text-slate-900 sm:text-3xl">
              Nhà thuốc của niềm tin và sự tận tâm
            </h2>
            <div className="mt-4 space-y-3 text-slate-600">
              <p>
                {site.name} ra đời với mong muốn trở thành người bạn đồng hành
                đáng tin cậy về sức khỏe cho mọi gia đình. Chúng tôi hiểu rằng
                mỗi viên thuốc, mỗi lời tư vấn đều ảnh hưởng trực tiếp đến sức
                khỏe của khách hàng.
              </p>
              <p>
                Dược sĩ của nhà thuốc tư vấn sản phẩm phù hợp với nhu cầu, hướng
                dẫn cách dùng và liều dùng theo đúng hướng dẫn của nhà sản xuất.
                Với các trường hợp cần chẩn đoán hoặc thuốc kê đơn, chúng tôi
                luôn khuyên khách hàng đến khám tại cơ sở y tế.
              </p>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-100 to-brand-50 p-10">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl bg-white p-5 text-center shadow-card"
                >
                  <s.icon className="mx-auto size-7 text-brand-600" aria-hidden="true" />
                  <p className="mt-2 text-lg font-extrabold text-slate-900">
                    {s.value}
                  </p>
                  <p className="text-xs text-slate-500">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tầm nhìn - Sứ mệnh - Giá trị */}
      <section className="bg-slate-50/70 py-12">
        <div className="container-x grid gap-5 md:grid-cols-3">
          <ValueCard
            icon={Eye}
            title="Tầm nhìn"
            text="Trở thành hệ thống nhà thuốc bán lẻ được tin yêu, nơi mọi người dân dễ dàng tiếp cận sản phẩm chăm sóc sức khỏe chất lượng."
          />
          <ValueCard
            icon={Target}
            title="Sứ mệnh"
            text="Cung cấp thuốc và sản phẩm chăm sóc sức khỏe chính hãng với giá hợp lý, cùng dịch vụ tư vấn dược sĩ tận tâm cho mọi gia đình."
          />
          <ValueCard
            icon={HeartHandshake}
            title="Giá trị cốt lõi"
            text="Chính trực — Tận tâm — Chuyên nghiệp. Đặt sức khỏe và niềm tin của khách hàng làm trọng tâm trong mọi hoạt động."
          />
        </div>
      </section>

      {/* Cam kết */}
      <section className="container-x py-12">
        <h2 className="text-center text-2xl font-extrabold text-slate-900 sm:text-3xl">
          Cam kết của Thiện Hạnh
        </h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {commitments.map((c) => (
            <div
              key={c.title}
              className="rounded-2xl border border-slate-100 bg-white p-6 shadow-card"
            >
              <span className="flex size-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-600">
                <Icon name={c.icon} className="size-6" />
              </span>
              <h3 className="mt-4 font-bold text-slate-800">{c.title}</h3>
              <p className="mt-1 text-sm text-slate-500">{c.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container-x pb-14">
        <div className="rounded-3xl bg-brand-700 px-6 py-10 text-center text-white sm:px-12">
          <h2 className="text-2xl font-extrabold sm:text-3xl">
            Cần tư vấn về sức khỏe?
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-brand-50/90">
            Đội ngũ dược sĩ của {site.name} luôn sẵn sàng lắng nghe và tư vấn
            miễn phí cho bạn.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <ZaloButton className="bg-accent-500 hover:bg-accent-600" />
            <CallButton className="border-white text-white hover:bg-white/10" />
          </div>
        </div>
      </section>
    </>
  );
}

function ValueCard({
  icon: IconCmp,
  title,
  text,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-card">
      <span className="flex size-12 items-center justify-center rounded-2xl bg-accent-50 text-accent-600">
        <IconCmp className="size-6" />
      </span>
      <h3 className="mt-4 text-lg font-bold text-slate-900">{title}</h3>
      <p className="mt-2 text-sm text-slate-600">{text}</p>
    </div>
  );
}
