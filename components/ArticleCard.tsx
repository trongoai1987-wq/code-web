import Link from "next/link";
import {
  CalendarDays,
  Clock,
  ArrowRight,
  HeartPulse,
  Pill,
  Sparkles,
  Leaf,
  type LucideIcon,
} from "lucide-react";
import { type Article } from "@/lib/data";

/**
 * Mỗi chuyên mục bài viết có icon và màu riêng.
 * Tên lớp phải viết đầy đủ (không ghép chuỗi) để Tailwind sinh ra CSS.
 */
type Look = {
  icon: LucideIcon;
  cover: string;
  blob: string;
  glyph: string;
  chip: string;
};

const looks: Record<string, Look> = {
  "Sống khỏe": {
    icon: HeartPulse,
    cover: "from-brand-500 to-brand-700",
    blob: "bg-brand-400/30",
    glyph: "text-white/90",
    chip: "bg-white/95 text-brand-700",
  },
  "Dùng thuốc": {
    icon: Pill,
    cover: "from-sky-500 to-blue-700",
    blob: "bg-sky-300/30",
    glyph: "text-white/90",
    chip: "bg-white/95 text-blue-700",
  },
  "Làm đẹp": {
    icon: Sparkles,
    cover: "from-accent-400 to-accent-600",
    blob: "bg-amber-200/30",
    glyph: "text-white/90",
    chip: "bg-white/95 text-accent-700",
  },
};

const fallback: Look = {
  icon: Leaf,
  cover: "from-slate-500 to-slate-700",
  blob: "bg-white/20",
  glyph: "text-white/90",
  chip: "bg-white/95 text-slate-700",
};

function lookOf(category: string): Look {
  return looks[category] ?? fallback;
}

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("vi-VN", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
}

/** Ảnh bìa minh họa theo chuyên mục (chưa có ảnh thật cho bài viết). */
function Cover({
  article,
  className,
  iconClass,
}: {
  article: Article;
  className: string;
  iconClass: string;
}) {
  const look = lookOf(article.category);
  const Glyph = look.icon;
  return (
    <div
      className={`relative overflow-hidden bg-gradient-to-br ${look.cover} ${className}`}
    >
      <span
        aria-hidden="true"
        className={`absolute -right-8 -top-10 size-36 rounded-full ${look.blob}`}
      />
      <span
        aria-hidden="true"
        className={`absolute -bottom-12 -left-6 size-32 rounded-full ${look.blob}`}
      />
      <Glyph
        className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ${look.glyph} ${iconClass} transition-transform duration-300 group-hover:scale-110`}
        aria-hidden="true"
      />
      <span
        className={`absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-bold shadow-sm ${look.chip}`}
      >
        {article.category}
      </span>
    </div>
  );
}

/** Thẻ bài viết thường (dùng ở lưới 3 cột). */
export function ArticleCard({ article }: { article: Article }) {
  return (
    <Link
      href={`/tin-suc-khoe/${article.slug}/`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-card transition-all duration-200 hover:-translate-y-1 hover:border-brand-200 hover:shadow-pop"
    >
      <Cover article={article} className="h-40 shrink-0" iconClass="size-16" />

      <div className="flex flex-1 flex-col p-5">
        <span className="mb-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-400">
          <span className="inline-flex items-center gap-1.5">
            <CalendarDays className="size-3.5" aria-hidden="true" />
            {formatDate(article.date)}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Clock className="size-3.5" aria-hidden="true" />
            {article.readingTime}
          </span>
        </span>

        <h3 className="line-clamp-2 text-[15px] font-bold leading-snug text-slate-800 transition-colors group-hover:text-brand-700">
          {article.title}
        </h3>
        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-slate-500">
          {article.excerpt}
        </p>

        <span className="mt-auto inline-flex items-center gap-1.5 pt-4 text-sm font-semibold text-brand-700">
          Đọc tiếp
          <ArrowRight
            className="size-4 transition-transform duration-200 group-hover:translate-x-1"
            aria-hidden="true"
          />
        </span>
      </div>
    </Link>
  );
}

/** Thẻ bài nổi bật, nằm ngang, dùng ở đầu trang Tin sức khỏe. */
export function FeaturedArticleCard({ article }: { article: Article }) {
  return (
    <Link
      href={`/tin-suc-khoe/${article.slug}/`}
      className="group grid overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-card transition-all duration-200 hover:border-brand-200 hover:shadow-pop md:grid-cols-2"
    >
      <Cover
        article={article}
        className="h-52 md:h-full md:min-h-[17rem]"
        iconClass="size-24"
      />

      <div className="flex flex-col justify-center p-6 sm:p-8">
        <span className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-400">
          <span className="inline-flex items-center gap-1.5">
            <CalendarDays className="size-3.5" aria-hidden="true" />
            {formatDate(article.date)}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Clock className="size-3.5" aria-hidden="true" />
            {article.readingTime}
          </span>
        </span>

        <h2 className="mt-2 text-xl font-extrabold leading-snug text-slate-900 transition-colors group-hover:text-brand-700 sm:text-2xl">
          {article.title}
        </h2>
        <p className="mt-3 leading-relaxed text-slate-600">{article.excerpt}</p>

        <span className="mt-5 inline-flex w-fit items-center gap-1.5 rounded-xl bg-brand-50 px-4 py-2 text-sm font-semibold text-brand-700 transition-colors group-hover:bg-brand-600 group-hover:text-white">
          Đọc bài viết
          <ArrowRight
            className="size-4 transition-transform duration-200 group-hover:translate-x-1"
            aria-hidden="true"
          />
        </span>
      </div>
    </Link>
  );
}
