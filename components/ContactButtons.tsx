import { MessageCircle, Phone } from "lucide-react";
import { site, zaloLink, telLink } from "@/lib/site";
import { cn } from "@/lib/format";

/** Nút "Đặt qua Zalo" (CTA cam chính). */
export function ZaloButton({
  message,
  className,
  label = "Đặt hàng qua Zalo",
}: {
  message?: string;
  className?: string;
  label?: string;
}) {
  return (
    <a
      href={zaloLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-xl bg-accent-500 px-5 py-3 font-semibold text-white shadow-sm transition-colors duration-200 hover:bg-accent-600",
        className,
      )}
    >
      <MessageCircle className="size-5" aria-hidden="true" />
      {label}
    </a>
  );
}

/** Nút "Gọi ngay" (viền xanh). */
export function CallButton({
  className,
  label,
}: {
  className?: string;
  label?: string;
}) {
  return (
    <a
      href={telLink()}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-xl border-2 border-brand-600 px-5 py-3 font-semibold text-brand-700 transition-colors duration-200 hover:bg-brand-50",
        className,
      )}
    >
      <Phone className="size-5" aria-hidden="true" />
      {label ?? `Gọi ${site.hotline}`}
    </a>
  );
}
