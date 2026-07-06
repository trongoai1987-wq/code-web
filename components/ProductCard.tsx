import Link from "next/link";
import { Star } from "lucide-react";
import { ProductThumb } from "@/components/ProductThumb";
import { type Product } from "@/lib/data";
import { formatPrice, discountPercent, cn } from "@/lib/format";

const tagStyles: Record<string, { label: string; className: string }> = {
  hot: { label: "HOT", className: "bg-accent-500 text-white" },
  new: { label: "MỚI", className: "bg-brand-600 text-white" },
  sale: { label: "GIẢM GIÁ", className: "bg-rose-500 text-white" },
};

export function ProductCard({ product }: { product: Product }) {
  const percent = discountPercent(product.price, product.originalPrice);
  const href = `/san-pham/${product.slug}/`;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-card transition-all duration-200 hover:-translate-y-1 hover:shadow-pop">
      <Link href={href} className="relative block aspect-square overflow-hidden">
        <ProductThumb product={product} />
        {/* Nhãn */}
        <div className="absolute left-3 top-3 flex flex-col gap-1.5">
          {product.tags.slice(0, 1).map((t) => (
            <span
              key={t}
              className={cn(
                "rounded-full px-2.5 py-1 text-[11px] font-bold leading-none",
                tagStyles[t]?.className,
              )}
            >
              {tagStyles[t]?.label}
            </span>
          ))}
        </div>
        {percent > 0 && (
          <span className="absolute right-3 top-3 rounded-lg bg-rose-500 px-2 py-1 text-xs font-bold text-white">
            -{percent}%
          </span>
        )}
      </Link>

      <div className="flex flex-1 flex-col p-4">
        <span className="mb-1 text-xs font-medium text-brand-600">
          {product.brand}
        </span>
        <h3 className="line-clamp-2 min-h-[2.6rem] text-sm font-semibold text-slate-800">
          <Link href={href} className="transition-colors hover:text-brand-700">
            {product.name}
          </Link>
        </h3>

        <div className="mt-1 flex items-center gap-1 text-xs text-slate-500">
          <Star className="size-3.5 fill-amber-400 text-amber-400" aria-hidden="true" />
          <span className="font-medium text-slate-700">{product.rating}</span>
          <span aria-hidden="true">·</span>
          <span>Đã bán {product.sold.toLocaleString("vi-VN")}</span>
        </div>

        <div className="mt-auto pt-3">
          <div className="flex items-end gap-2">
            <span className="text-lg font-bold text-accent-600">
              {formatPrice(product.price)}
            </span>
            {product.originalPrice && (
              <span className="pb-0.5 text-xs text-slate-400 line-through">
                {formatPrice(product.originalPrice)}
              </span>
            )}
          </div>
          <span className="text-xs text-slate-400">/ {product.unit}</span>
        </div>

        <Link
          href={href}
          className="mt-3 inline-flex items-center justify-center rounded-xl bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-brand-700"
        >
          Xem chi tiết
        </Link>
      </div>
    </article>
  );
}
