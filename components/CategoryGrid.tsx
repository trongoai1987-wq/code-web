import Link from "next/link";
import { Icon } from "@/components/Icon";
import { categories, type CategorySlug } from "@/lib/data";

/**
 * Màu riêng cho từng danh mục.
 * Lưu ý: phải ghi đầy đủ tên lớp (không ghép chuỗi), nếu không Tailwind
 * sẽ không tạo ra lớp CSS tương ứng khi build.
 */
const styles: Record<CategorySlug, { chip: string; bar: string; hover: string }> = {
  thuoc: {
    chip: "from-brand-500 to-brand-700",
    bar: "from-brand-400 to-brand-600",
    hover: "group-hover:border-brand-200",
  },
  "thuc-pham-chuc-nang": {
    chip: "from-emerald-400 to-emerald-600",
    bar: "from-emerald-300 to-emerald-500",
    hover: "group-hover:border-emerald-200",
  },
  "do-uong-suc-khoe": {
    chip: "from-sky-400 to-sky-600",
    bar: "from-sky-300 to-sky-500",
    hover: "group-hover:border-sky-200",
  },
  "vitamin-khoang-chat": {
    chip: "from-amber-400 to-amber-600",
    bar: "from-amber-300 to-amber-500",
    hover: "group-hover:border-amber-200",
  },
  "me-va-be": {
    chip: "from-rose-400 to-rose-600",
    bar: "from-rose-300 to-rose-500",
    hover: "group-hover:border-rose-200",
  },
  "cham-soc-ca-nhan": {
    chip: "from-violet-400 to-violet-600",
    bar: "from-violet-300 to-violet-500",
    hover: "group-hover:border-violet-200",
  },
  "my-pham-duoc": {
    chip: "from-cyan-400 to-cyan-600",
    bar: "from-cyan-300 to-cyan-500",
    hover: "group-hover:border-cyan-200",
  },
  "thiet-bi-y-te": {
    chip: "from-blue-400 to-blue-600",
    bar: "from-blue-300 to-blue-500",
    hover: "group-hover:border-blue-200",
  },
  "cham-soc-sac-dep": {
    chip: "from-accent-400 to-accent-600",
    bar: "from-accent-300 to-accent-500",
    hover: "group-hover:border-accent-200",
  },
};

export function CategoryGrid() {
  return (
    <div className="grid grid-cols-3 gap-2.5 sm:gap-4">
      {categories.map((c) => {
        const s = styles[c.slug];
        return (
          <Link
            key={c.slug}
            href={`/danh-muc/${c.slug}/`}
            className={`group relative flex flex-col items-center gap-2.5 overflow-hidden rounded-2xl border border-slate-100 bg-white p-3 text-center shadow-card transition-all duration-200 hover:-translate-y-1 hover:shadow-pop sm:p-5 lg:flex-row lg:gap-4 lg:p-5 lg:text-left ${s.hover}`}
          >
            {/* Vạch màu chạy ngang mép trên, hiện rõ khi rê chuột */}
            <span
              aria-hidden="true"
              className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${s.bar} opacity-60 transition-opacity duration-200 group-hover:opacity-100`}
            />

            <span
              className={`flex size-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br text-white shadow-sm transition-transform duration-200 group-hover:scale-110 sm:size-14 ${s.chip}`}
            >
              <Icon name={c.icon} className="size-5 sm:size-7" />
            </span>

            <span className="block min-w-0">
              {/* Chừa sẵn chỗ cho tên dài 3 dòng để các thẻ cao bằng nhau
                  trên điện thoại; từ màn hình lớn thì không cần nữa. */}
              <span className="flex min-h-[3.4rem] items-start justify-center text-[13px] font-semibold leading-snug text-slate-800 transition-colors group-hover:text-brand-700 sm:min-h-[3.6rem] sm:text-sm lg:block lg:min-h-0 lg:text-[15px]">
                {c.name}
              </span>
              <span className="mt-1 hidden text-xs leading-snug text-slate-500 lg:block">
                {c.description}
              </span>
            </span>
          </Link>
        );
      })}
    </div>
  );
}
