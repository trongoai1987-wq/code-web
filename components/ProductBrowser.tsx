"use client";

import { useMemo, useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { ProductCard } from "@/components/ProductCard";
import { ZaloButton, CallButton } from "@/components/ContactButtons";
import { categories, products, type CategorySlug } from "@/lib/data";
import { cn } from "@/lib/format";

type SortKey = "default" | "price-asc" | "price-desc";

const sortOptions: Array<{ key: SortKey; label: string }> = [
  { key: "default", label: "Mặc định" },
  { key: "price-asc", label: "Giá thấp → cao" },
  { key: "price-desc", label: "Giá cao → thấp" },
];

/** Danh sách + tìm kiếm + lọc sản phẩm (client). */
export function ProductBrowser({
  initialCategory,
}: {
  initialCategory?: CategorySlug;
}) {
  const searchParams = useSearchParams();
  const queryFromUrl = searchParams.get("q") ?? "";

  const [keyword, setKeyword] = useState(queryFromUrl);
  const [activeCategory, setActiveCategory] = useState<CategorySlug | "all">(
    initialCategory ?? "all",
  );
  const [sort, setSort] = useState<SortKey>("default");
  const [showFilters, setShowFilters] = useState(false);

  // Đồng bộ ô tìm kiếm khi URL ?q= thay đổi (điều hướng từ Header).
  useEffect(() => {
    setKeyword(queryFromUrl);
  }, [queryFromUrl]);

  const result = useMemo(() => {
    const kw = keyword.trim().toLowerCase();
    let list = products.filter((p) => {
      const matchCat =
        activeCategory === "all" ? true : p.category === activeCategory;
      const matchKw =
        kw === ""
          ? true
          : p.name.toLowerCase().includes(kw) ||
            p.brand.toLowerCase().includes(kw) ||
            p.shortDescription.toLowerCase().includes(kw);
      return matchCat && matchKw;
    });

    list = [...list].sort((a, b) => {
      switch (sort) {
        case "price-asc":
          return a.price - b.price;
        case "price-desc":
          return b.price - a.price;
        default:
          return a.id - b.id;
      }
    });
    return list;
  }, [keyword, activeCategory, sort]);

  // Chưa có sản phẩm nào trong danh sách: không hiện ô tìm kiếm / bộ lọc rỗng.
  if (products.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-slate-200 bg-slate-50 px-6 py-16 text-center">
        <p className="text-lg font-semibold text-slate-700">
          Danh mục sản phẩm đang được cập nhật
        </p>
        <p className="mx-auto mt-2 max-w-md text-sm text-slate-500">
          Nhà thuốc đang đưa dần danh sách sản phẩm lên website. Trong lúc chờ,
          bạn cần sản phẩm nào xin gọi hoặc nhắn Zalo để dược sĩ kiểm tra hàng
          và báo giá.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <ZaloButton label="Hỏi dược sĩ qua Zalo" />
          <CallButton />
        </div>
      </div>
    );
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[240px_1fr]">
      {/* Sidebar danh mục (desktop) */}
      <aside className="hidden lg:block">
        <div className="sticky top-24 rounded-2xl border border-slate-100 bg-white p-4 shadow-card">
          <p className="mb-3 px-2 text-sm font-bold text-slate-800">Danh mục</p>
          <ul className="space-y-1">
            <li>
              <button
                type="button"
                onClick={() => setActiveCategory("all")}
                className={cn(
                  "w-full rounded-xl px-3 py-2 text-left text-sm font-medium transition-colors",
                  activeCategory === "all"
                    ? "bg-brand-600 text-white"
                    : "text-slate-600 hover:bg-brand-50 hover:text-brand-700",
                )}
              >
                Tất cả sản phẩm
              </button>
            </li>
            {categories.map((c) => (
              <li key={c.slug}>
                <button
                  type="button"
                  onClick={() => setActiveCategory(c.slug)}
                  className={cn(
                    "w-full rounded-xl px-3 py-2 text-left text-sm font-medium transition-colors",
                    activeCategory === c.slug
                      ? "bg-brand-600 text-white"
                      : "text-slate-600 hover:bg-brand-50 hover:text-brand-700",
                  )}
                >
                  {c.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </aside>

      {/* Nội dung */}
      <div>
        {/* Thanh công cụ */}
        <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center">
          <div className="relative flex-1">
            <Search
              className="pointer-events-none absolute left-3 top-1/2 size-5 -translate-y-1/2 text-slate-400"
              aria-hidden="true"
            />
            <input
              type="search"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              placeholder="Tìm theo tên, thương hiệu..."
              aria-label="Tìm kiếm sản phẩm"
              className="w-full rounded-xl border border-slate-200 bg-white py-2.5 pl-11 pr-4 text-sm outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-200"
            />
            {keyword && (
              <button
                type="button"
                onClick={() => setKeyword("")}
                aria-label="Xóa từ khóa"
                className="absolute right-2 top-1/2 flex size-7 -translate-y-1/2 items-center justify-center rounded-lg text-slate-400 hover:bg-slate-100 hover:text-slate-600"
              >
                <X className="size-4" aria-hidden="true" />
              </button>
            )}
          </div>

          <div className="flex items-center gap-2">
            <label className="sr-only" htmlFor="sort">
              Sắp xếp
            </label>
            <select
              id="sort"
              value={sort}
              onChange={(e) => setSort(e.target.value as SortKey)}
              className="rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm font-medium text-slate-700 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-200"
            >
              {sortOptions.map((o) => (
                <option key={o.key} value={o.key}>
                  {o.label}
                </option>
              ))}
            </select>
            <button
              type="button"
              onClick={() => setShowFilters((s) => !s)}
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50 lg:hidden"
            >
              <SlidersHorizontal className="size-4" aria-hidden="true" />
              Lọc
            </button>
          </div>
        </div>

        {/* Chip danh mục (mobile) */}
        {showFilters && (
          <div className="mb-5 flex flex-wrap gap-2 lg:hidden">
            <CategoryChip
              label="Tất cả"
              active={activeCategory === "all"}
              onClick={() => setActiveCategory("all")}
            />
            {categories.map((c) => (
              <CategoryChip
                key={c.slug}
                label={c.name}
                active={activeCategory === c.slug}
                onClick={() => setActiveCategory(c.slug)}
              />
            ))}
          </div>
        )}

        <p className="mb-4 text-sm text-slate-500">
          Tìm thấy{" "}
          <span className="font-semibold text-slate-800">{result.length}</span>{" "}
          sản phẩm
        </p>

        {result.length > 0 ? (
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4">
            {result.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-slate-200 bg-slate-50 px-6 py-16 text-center">
            <p className="font-semibold text-slate-700">
              Không tìm thấy sản phẩm phù hợp
            </p>
            <p className="mt-1 text-sm text-slate-500">
              Thử từ khóa khác hoặc liên hệ dược sĩ để được tư vấn.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

function CategoryChip({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "rounded-full border px-4 py-1.5 text-sm font-medium transition-colors",
        active
          ? "border-brand-600 bg-brand-600 text-white"
          : "border-slate-200 bg-white text-slate-600 hover:border-brand-200 hover:text-brand-700",
      )}
    >
      {label}
    </button>
  );
}
