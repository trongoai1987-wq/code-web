import Link from "next/link";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { site } from "@/lib/site";
import { categories } from "@/lib/data";

export function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-100 bg-brand-800 text-brand-50">
      <div className="container-x grid gap-10 py-12 md:grid-cols-2 lg:grid-cols-4">
        {/* Thương hiệu */}
        <div>
          <div className="mb-3 flex items-center gap-2.5">
            <span className="flex size-10 items-center justify-center rounded-xl bg-white text-brand-700">
              <svg viewBox="0 0 24 24" className="size-6" fill="none" aria-hidden="true">
                <path d="M12 3v18M3 12h18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
            </span>
            <span className="text-lg font-extrabold uppercase leading-tight">
              Nhà Thuốc<br />
              <span className="text-accent-400">Thiện Hạnh</span>
            </span>
          </div>
          <p className="text-sm leading-relaxed text-brand-100/90">{site.slogan}. {site.description}</p>
          <div className="mt-4 flex gap-2">
            {site.social.facebook && (
            <a href={site.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="flex size-9 items-center justify-center rounded-lg bg-brand-700 hover:bg-brand-600">
              <svg viewBox="0 0 24 24" className="size-4.5" fill="currentColor" aria-hidden="true">
                <path d="M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.25-1.5 1.55-1.5H17V3.6c-.29-.04-1.28-.12-2.43-.12-2.4 0-4.07 1.47-4.07 4.17V9.9H7.8V13h2.7v8h3z" />
              </svg>
            </a>
            )}
            {site.social.zaloOA && (
            <a href={site.social.zaloOA} target="_blank" rel="noopener noreferrer" aria-label="Zalo" className="flex size-9 items-center justify-center rounded-lg bg-brand-700 hover:bg-brand-600">
              <MessageCircle className="size-4.5" />
            </a>
            )}
            {site.social.youtube && (
            <a href={site.social.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="flex size-9 items-center justify-center rounded-lg bg-brand-700 hover:bg-brand-600">
              <svg viewBox="0 0 24 24" className="size-4.5" fill="currentColor" aria-hidden="true">
                <path d="M23 12s0-3.2-.41-4.73a2.5 2.5 0 0 0-1.76-1.77C19.3 5.09 12 5.09 12 5.09s-7.3 0-8.83.41a2.5 2.5 0 0 0-1.76 1.77C1 8.8 1 12 1 12s0 3.2.41 4.73a2.5 2.5 0 0 0 1.76 1.77c1.53.41 8.83.41 8.83.41s7.3 0 8.83-.41a2.5 2.5 0 0 0 1.76-1.77C23 15.2 23 12 23 12zM9.75 15.02V8.98L15 12l-5.25 3.02z" />
              </svg>
            </a>
            )}
          </div>
        </div>

        {/* Danh mục */}
        <div>
          <h3 className="mb-4 text-sm font-bold uppercase tracking-wide text-white">Danh mục</h3>
          <ul className="space-y-2.5 text-sm">
            {categories.slice(0, 6).map((c) => (
              <li key={c.slug}>
                <Link href={`/danh-muc/${c.slug}/`} className="inline-block py-1 text-brand-100/90 transition-colors hover:text-white">
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Liên kết */}
        <div>
          <h3 className="mb-4 text-sm font-bold uppercase tracking-wide text-white">Về Thiện Hạnh</h3>
          <ul className="space-y-2.5 text-sm">
            <li><Link href="/gioi-thieu/" className="inline-block py-1 text-brand-100/90 hover:text-white">Giới thiệu</Link></li>
            <li><Link href="/he-thong-nha-thuoc/" className="inline-block py-1 text-brand-100/90 hover:text-white">Hệ thống nhà thuốc</Link></li>
            <li><Link href="/tin-suc-khoe/" className="inline-block py-1 text-brand-100/90 hover:text-white">Tin sức khỏe</Link></li>
            <li><Link href="/lien-he/" className="inline-block py-1 text-brand-100/90 hover:text-white">Liên hệ</Link></li>
            <li><Link href="/san-pham/" className="inline-block py-1 text-brand-100/90 hover:text-white">Tất cả sản phẩm</Link></li>
            <li><Link href="/chinh-sach-doi-tra/" className="inline-block py-1 text-brand-100/90 hover:text-white">Chính sách đổi trả</Link></li>
          </ul>
        </div>

        {/* Liên hệ */}
        <div>
          <h3 className="mb-4 text-sm font-bold uppercase tracking-wide text-white">Liên hệ</h3>
          <ul className="space-y-3 text-sm text-brand-100/90">
            <li className="flex gap-2.5">
              <MapPin className="mt-0.5 size-4.5 shrink-0 text-accent-400" aria-hidden="true" />
              <span>{site.address}</span>
            </li>
            <li className="flex gap-2.5">
              <Phone className="mt-0.5 size-4.5 shrink-0 text-accent-400" aria-hidden="true" />
              <a href={`tel:${site.hotline.replace(/\s/g, "")}`} className="hover:text-white">
                Hotline: {site.hotline}
              </a>
            </li>
            <li className="flex gap-2.5">
              <Mail className="mt-0.5 size-4.5 shrink-0 text-accent-400" aria-hidden="true" />
              <a href={`mailto:${site.email}`} className="hover:text-white">{site.email}</a>
            </li>
            <li className="flex gap-2.5">
              <Clock className="mt-0.5 size-4.5 shrink-0 text-accent-400" aria-hidden="true" />
              <span>{site.workingHours}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-brand-700">
        <div className="container-x flex flex-col items-center justify-between gap-2 py-5 text-xs text-brand-100/70 sm:flex-row">
          <p>© {new Date().getFullYear()} {site.name}. Bảo lưu mọi quyền.</p>
          <p>Giấy chứng nhận đủ điều kiện kinh doanh dược số: {site.license}</p>
          <p>Website mang tính chất tham khảo, không thay thế tư vấn y khoa chuyên môn.</p>
        </div>
      </div>
    </footer>
  );
}
