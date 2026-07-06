import { Phone, MessageCircle } from "lucide-react";
import { site, zaloLink, telLink } from "@/lib/site";

/** Nút liên hệ nổi (góc phải dưới) — luôn hiển thị trên mọi trang. */
export function FloatingContact() {
  return (
    <div className="fixed bottom-5 right-4 z-40 flex flex-col gap-3">
      <a
        href={zaloLink("Xin chào Nhà thuốc Thiện Hạnh, tôi cần tư vấn sản phẩm.")}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat Zalo"
        className="group flex size-13 items-center justify-center rounded-full bg-accent-500 text-white shadow-pop transition-transform duration-200 hover:scale-105"
      >
        <MessageCircle className="size-6" aria-hidden="true" />
        <span className="absolute inline-flex size-13 animate-ping rounded-full bg-accent-400/40" />
      </a>
      <a
        href={telLink()}
        aria-label={`Gọi ${site.hotline}`}
        className="flex size-13 items-center justify-center rounded-full bg-brand-600 text-white shadow-pop transition-transform duration-200 hover:scale-105"
      >
        <Phone className="size-6" aria-hidden="true" />
      </a>
    </div>
  );
}
