import Link from "next/link";
import { ProductThumb } from "@/components/ProductThumb";
import { type Product } from "@/lib/data";
import { formatPrice } from "@/lib/format";

export function ProductCard({ product }: { product: Product }) {
  const href = `/san-pham/${product.slug}/`;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-card transition-all duration-200 hover:-translate-y-1 hover:shadow-pop">
      <Link href={href} className="relative block aspect-square overflow-hidden">
        <ProductThumb product={product} />
        {product.prescription && (
          <span className="absolute left-3 top-3 rounded-full bg-amber-100 px-2.5 py-1 text-[11px] font-bold leading-none text-amber-800">
            THUỐC KÊ ĐƠN
          </span>
        )}
      </Link>

      <div className="flex flex-1 flex-col p-4">
        <span className="mb-1 text-xs font-medium text-brand-600">
          {product.brand}
        </span>
        <h3 className="line-clamp-2 min-h-[2.8rem] text-[15px] font-semibold leading-snug text-slate-800">
          <Link href={href} className="transition-colors hover:text-brand-700">
            {product.name}
          </Link>
        </h3>

        <div className="mt-auto pt-3">
          {product.prescription || product.price <= 0 ? (
            <span className="text-base font-bold text-brand-700">
              Liên hệ dược sĩ
            </span>
          ) : (
            <span className="text-lg font-bold text-accent-600">
              {formatPrice(product.price)}
            </span>
          )}
          <span className="block text-[13px] text-slate-500">
            / {product.unit}
          </span>
          {product.variants?.map((v) => (
            <span key={v.unit} className="block text-[13px] text-slate-500">
              {v.unit}:{" "}
              <span className="font-semibold text-accent-600">
                {formatPrice(v.price)}
              </span>
            </span>
          ))}
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
