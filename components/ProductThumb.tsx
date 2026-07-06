import { Icon } from "@/components/Icon";
import { categoryMap, type Product } from "@/lib/data";
import { cn } from "@/lib/format";

/**
 * Ảnh minh họa sản phẩm.
 * - Nếu có `product.image` (đặt ảnh trong /public) -> hiển thị ảnh thật.
 * - Nếu chưa có ảnh -> hiển thị khối minh họa theo danh mục (đẹp, đồng bộ thương hiệu).
 */
export function ProductThumb({
  product,
  className,
}: {
  product: Product;
  className?: string;
}) {
  const cat = categoryMap[product.category];

  if (product.image) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={product.image}
        alt={product.name}
        loading="lazy"
        className={cn("h-full w-full object-cover", className)}
      />
    );
  }

  return (
    <div
      className={cn(
        "relative flex h-full w-full items-center justify-center overflow-hidden bg-gradient-to-br from-brand-50 to-white",
        className,
      )}
      aria-hidden="true"
    >
      <div className="absolute -right-6 -top-6 size-24 rounded-full bg-brand-100/60" />
      <div className="absolute -bottom-8 -left-4 size-20 rounded-full bg-accent-100/50" />
      <div className="relative flex size-20 items-center justify-center rounded-2xl bg-white shadow-sm ring-1 ring-brand-100">
        <Icon name={cat.icon} className="size-9 text-brand-600" />
      </div>
    </div>
  );
}
