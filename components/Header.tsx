"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Search,
  Menu,
  X,
  Phone,
  MapPin,
  Clock,
  ChevronRight,
} from "lucide-react";
import { Icon } from "@/components/Icon";
import { site } from "@/lib/site";
import { categories } from "@/lib/data";

const navLinks = [
  { href: "/", label: "Trang chủ" },
  { href: "/san-pham/", label: "Sản phẩm" },
  { href: "/he-thong-nha-thuoc/", label: "Hệ thống nhà thuốc" },
  { href: "/tin-suc-khoe/", label: "Tin sức khỏe" },
  { href: "/gioi-thieu/", label: "Giới thiệu" },
  { href: "/lien-he/", label: "Liên hệ" },
];

export function Header() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");

  function submitSearch(e: React.FormEvent) {
    e.preventDefault();
    const term = q.trim();
    router.push(term ? `/san-pham/?q=${encodeURIComponent(term)}` : "/san-pham/");
    setOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      {/* Thanh trên cùng */}
      <div className="hidden bg-brand-700 text-brand-50 lg:block">
        <div className="container-x flex h-9 items-center justify-between text-xs">
          <span className="inline-flex items-center gap-1.5">
            <Clock className="size-3.5" aria-hidden="true" />
            Giờ mở cửa: {site.workingHours}
          </span>
          <div className="flex items-center gap-5">
            <a
              href="/he-thong-nha-thuoc/"
              className="inline-flex items-center gap-1.5 hover:text-white"
            >
              <MapPin className="size-3.5" aria-hidden="true" />
              Hệ thống {branchesCountLabel()}
            </a>
            <a
              href={`tel:${site.hotline.replace(/\s/g, "")}`}
              className="inline-flex items-center gap-1.5 font-medium hover:text-white"
            >
              <Phone className="size-3.5" aria-hidden="true" />
              Hotline: {site.hotline}
            </a>
          </div>
        </div>
      </div>

      {/* Hàng chính */}
      <div className="container-x flex h-16 items-center gap-4">
        {/* Nút menu mobile */}
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="inline-flex size-10 items-center justify-center rounded-lg text-brand-700 hover:bg-brand-50 lg:hidden"
          aria-label="Mở menu"
        >
          <Menu className="size-6" />
        </button>

        <Logo />

        {/* Tìm kiếm (desktop) */}
        <form
          onSubmit={submitSearch}
          className="ml-2 hidden flex-1 items-center md:flex"
          role="search"
        >
          <div className="relative w-full max-w-xl">
            <Search
              className="pointer-events-none absolute left-3 top-1/2 size-5 -translate-y-1/2 text-slate-400"
              aria-hidden="true"
            />
            <input
              type="search"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Tìm thuốc, thực phẩm chức năng, thiết bị y tế…"
              aria-label="Tìm kiếm sản phẩm"
              className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2.5 pl-10 pr-24 text-sm outline-none transition focus:border-brand-500 focus:bg-white"
            />
            <button
              type="submit"
              className="absolute right-1.5 top-1/2 -translate-y-1/2 rounded-lg bg-brand-600 px-4 py-1.5 text-sm font-semibold text-white hover:bg-brand-700"
            >
              Tìm
            </button>
          </div>
        </form>

        {/* Hotline (desktop) */}
        <a
          href={`tel:${site.hotline.replace(/\s/g, "")}`}
          className="ml-auto hidden items-center gap-2 rounded-xl bg-accent-50 px-4 py-2 text-accent-700 lg:flex"
        >
          <Phone className="size-5" aria-hidden="true" />
          <span className="text-sm leading-tight">
            <span className="block text-[11px] text-accent-600">Tư vấn miễn phí</span>
            <span className="font-bold">{site.hotline}</span>
          </span>
        </a>
      </div>

      {/* Thanh danh mục (desktop) */}
      <nav className="hidden border-t border-slate-100 lg:block" aria-label="Danh mục chính">
        <div className="container-x flex items-center gap-1">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="px-4 py-3 text-sm font-medium text-slate-700 transition-colors hover:text-brand-700"
            >
              {l.label}
            </Link>
          ))}
        </div>
      </nav>

      {/* Tìm kiếm (mobile) */}
      <form onSubmit={submitSearch} className="container-x pb-3 md:hidden" role="search">
        <div className="relative">
          <Search
            className="pointer-events-none absolute left-3 top-1/2 size-5 -translate-y-1/2 text-slate-400"
            aria-hidden="true"
          />
          <input
            type="search"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Tìm sản phẩm…"
            aria-label="Tìm kiếm sản phẩm"
            className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2.5 pl-10 pr-4 text-sm outline-none focus:border-brand-500 focus:bg-white"
          />
        </div>
      </form>

      {/* Menu mobile (drawer) */}
      {open && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <button
            className="absolute inset-0 bg-slate-900/50"
            aria-label="Đóng menu"
            onClick={() => setOpen(false)}
          />
          <div className="absolute left-0 top-0 h-full w-80 max-w-[85%] overflow-y-auto bg-white shadow-xl">
            <div className="flex items-center justify-between border-b border-slate-100 p-4">
              <Logo />
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="inline-flex size-9 items-center justify-center rounded-lg text-slate-600 hover:bg-slate-100"
                aria-label="Đóng menu"
              >
                <X className="size-5" />
              </button>
            </div>
            <nav className="p-2" aria-label="Menu di động">
              {navLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-brand-50"
                >
                  {l.label}
                  <ChevronRight className="size-4 text-slate-400" />
                </Link>
              ))}
            </nav>
            <div className="border-t border-slate-100 p-4">
              <p className="mb-2 px-1 text-xs font-semibold uppercase tracking-wide text-slate-400">
                Danh mục sản phẩm
              </p>
              <div className="grid grid-cols-1 gap-1">
                {categories.map((c) => (
                  <Link
                    key={c.slug}
                    href={`/danh-muc/${c.slug}/`}
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-3 rounded-lg px-4 py-2.5 text-sm text-slate-700 hover:bg-brand-50"
                  >
                    <Icon name={c.icon} className="size-5 text-brand-600" />
                    {c.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2.5" aria-label={site.name}>
      <span className="flex size-10 items-center justify-center rounded-xl bg-brand-600 text-white shadow-sm">
        <svg viewBox="0 0 24 24" className="size-6" fill="none" aria-hidden="true">
          <path
            d="M12 3v18M3 12h18"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </svg>
      </span>
      <span className="leading-tight">
        <span className="block text-[15px] font-extrabold uppercase tracking-tight text-brand-700">
          Nhà Thuốc
        </span>
        <span className="block text-[15px] font-extrabold uppercase tracking-tight text-accent-500">
          Thiện Hạnh
        </span>
      </span>
    </Link>
  );
}

function branchesCountLabel() {
  return "nhà thuốc";
}
