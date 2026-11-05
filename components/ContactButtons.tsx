import { MessageCircle, Phone } from "lucide-react";
import { site, zaloLink, telLink } from "@/lib/site";
import { cn } from "@/lib/format";

/**
 * Kiểu màu của nút.
 * Phải khai báo sẵn ở đây, KHÔNG chồng màu qua className — vì nút đã có sẵn
 * màu nền và màu chữ, chồng thêm sẽ xung đột (đã từng làm nút Zalo ở banner
 * cam thành chữ trắng trên nền trắng, không đọc được).
 */
type Variant = "accent" | "brand" | "outlineWhite";

const zaloVariants: Record<Variant, string> = {
  accent: "bg-accent-500 text-white shadow-sm hover:bg-accent-600",
  brand: "bg-brand-600 text-white shadow-sm hover:bg-brand-700",
  outlineWhite: "border-2 border-white bg-transparent text-white hover:bg-white/15",
};

const callVariants: Record<Variant, string> = {
  accent: "border-2 border-accent-500 bg-transparent text-accent-600 hover:bg-accent-50",
  brand: "border-2 border-brand-600 bg-transparent text-brand-700 hover:bg-brand-50",
  outlineWhite: "border-2 border-white bg-transparent text-white hover:bg-white/15",
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 font-semibold transition-colors duration-200";

/** Nút "Đặt hàng qua Zalo". */
export function ZaloButton({
  message,
  className,
  label = "Đặt hàng qua Zalo",
  variant = "accent",
}: {
  message?: string;
  className?: string;
  label?: string;
  variant?: Variant;
}) {
  return (
    <a
      href={zaloLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(base, zaloVariants[variant], className)}
    >
      <MessageCircle className="size-5" aria-hidden="true" />
      {label}
    </a>
  );
}

/** Nút "Gọi ngay". */
export function CallButton({
  className,
  label,
  variant = "brand",
}: {
  className?: string;
  label?: string;
  variant?: Variant;
}) {
  return (
    <a
      href={telLink()}
      className={cn(base, callVariants[variant], className)}
    >
      <Phone className="size-5" aria-hidden="true" />
      {label ?? `Gọi ${site.hotline}`}
    </a>
  );
}
