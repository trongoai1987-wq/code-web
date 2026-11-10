import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { Breadcrumb } from "@/components/Breadcrumb";
import { ContactForm } from "@/components/ContactForm";
import { site, zaloLink, telLink, canonical } from "@/lib/site";

export const metadata: Metadata = {
  title: "Liên hệ",
  description: `Liên hệ ${site.name} — hotline ${site.hotline}, Zalo, email. Gửi yêu cầu tư vấn để được dược sĩ hỗ trợ nhanh chóng.`,
  alternates: { canonical: canonical("/lien-he/") },
};

export default function ContactPage() {
  const infos = [
    {
      icon: MapPin,
      label: "Địa chỉ",
      value: site.address,
    },
    {
      icon: Phone,
      label: "Hotline",
      value: site.hotline,
      href: telLink(),
    },
    {
      icon: Mail,
      label: "Email",
      value: site.email,
      href: `mailto:${site.email}`,
    },
    {
      icon: Clock,
      label: "Giờ làm việc",
      value: site.workingHours,
    },
  ];

  return (
    <>
      <Breadcrumb items={[{ label: "Liên hệ" }]} />

      <section className="border-b border-slate-100 bg-gradient-to-br from-brand-50 to-white">
        <div className="container-x py-10 text-center">
          <h1 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
            Liên hệ với chúng tôi
          </h1>
          <p className="mx-auto mt-2 max-w-2xl text-sm text-slate-600">
            Bạn cần tư vấn sản phẩm hay có câu hỏi về sức khỏe? Đội ngũ dược sĩ
            Thiện Hạnh luôn sẵn sàng hỗ trợ bạn.
          </p>
        </div>
      </section>

      <section className="container-x py-10">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Thông tin liên hệ */}
          <div>
            <h2 className="text-xl font-extrabold text-slate-900">
              Thông tin liên hệ
            </h2>
            <ul className="mt-5 space-y-4">
              {infos.map((info) => (
                <li
                  key={info.label}
                  className="flex items-start gap-4 rounded-2xl border border-slate-100 bg-white p-4 shadow-card"
                >
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                    <info.icon className="size-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                      {info.label}
                    </p>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="font-semibold text-slate-800 hover:text-brand-700"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="font-semibold text-slate-800">
                        {info.value}
                      </p>
                    )}
                  </div>
                </li>
              ))}
            </ul>

            <a
              href={zaloLink("Xin chào Nhà thuốc Thiện Hạnh, tôi cần tư vấn.")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-accent-500 px-5 py-3.5 font-semibold text-white shadow-sm transition-colors hover:bg-accent-600"
            >
              <MessageCircle className="size-5" aria-hidden="true" />
              Chat Zalo với dược sĩ ngay
            </a>
          </div>

          {/* Form */}
          <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-card sm:p-8">
            <h2 className="text-xl font-extrabold text-slate-900">
              Gửi yêu cầu tư vấn
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              Điền thông tin bên dưới, chúng tôi sẽ liên hệ lại với bạn.
            </p>
            <div className="mt-5">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
