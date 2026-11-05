"use client";

import { useState } from "react";
import { MessageCircle, Mail, Send } from "lucide-react";
import { site, zaloLink } from "@/lib/site";

/**
 * Form liên hệ (không cần backend).
 * Khi gửi, soạn sẵn nội dung và mở Zalo hoặc email của khách.
 */
export function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [touched, setTouched] = useState(false);
  const [copied, setCopied] = useState(false);

  const nameError = touched && name.trim() === "";
  const phoneError = touched && phone.trim() === "";

  function buildMessage() {
    return [
      "Xin chào Nhà thuốc Thiện Hạnh!",
      `Họ tên: ${name || "(chưa điền)"}`,
      `SĐT: ${phone || "(chưa điền)"}`,
      `Nội dung: ${message || "(chưa điền)"}`,
    ].join("\n");
  }

  async function handleZalo(e: React.FormEvent) {
    e.preventDefault();
    setTouched(true);
    if (name.trim() === "" || phone.trim() === "") return;
    const text = buildMessage();
    // Zalo OA không nhận sẵn nội dung qua đường link, nên chép vào bộ nhớ tạm
    // để khách chỉ việc dán vào khung chat.
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
    } catch {
      setCopied(false);
    }
    window.open(zaloLink(text), "_blank", "noopener,noreferrer");
  }

  function handleEmail() {
    setTouched(true);
    if (name.trim() === "" || phone.trim() === "") return;
    const subject = encodeURIComponent(`Liên hệ từ ${name}`);
    const body = encodeURIComponent(buildMessage());
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
  }

  return (
    <form onSubmit={handleZalo} className="space-y-4" noValidate>
      <div>
        <label
          htmlFor="name"
          className="mb-1.5 block text-sm font-medium text-slate-700"
        >
          Họ và tên <span className="text-rose-500">*</span>
        </label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          autoComplete="name"
          placeholder="Nguyễn Văn A"
          aria-invalid={nameError}
          className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-200"
        />
        {nameError && (
          <p className="mt-1 text-xs text-rose-500">Vui lòng nhập họ tên.</p>
        )}
      </div>

      <div>
        <label
          htmlFor="phone"
          className="mb-1.5 block text-sm font-medium text-slate-700"
        >
          Số điện thoại <span className="text-rose-500">*</span>
        </label>
        <input
          id="phone"
          type="tel"
          inputMode="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          autoComplete="tel"
          placeholder="09xx xxx xxx"
          aria-invalid={phoneError}
          className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-200"
        />
        {phoneError && (
          <p className="mt-1 text-xs text-rose-500">
            Vui lòng nhập số điện thoại.
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-1.5 block text-sm font-medium text-slate-700"
        >
          Nội dung cần tư vấn
        </label>
        <textarea
          id="message"
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Bạn cần tư vấn sản phẩm hoặc thông tin gì?"
          className="w-full resize-y rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-200"
        />
      </div>

      <div className="flex flex-col gap-3 sm:flex-row">
        <button
          type="submit"
          className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-accent-500 px-5 py-3 font-semibold text-white shadow-sm transition-colors hover:bg-accent-600"
        >
          <MessageCircle className="size-5" aria-hidden="true" />
          Gửi qua Zalo
        </button>
        <button
          type="button"
          onClick={handleEmail}
          className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border-2 border-brand-600 px-5 py-3 font-semibold text-brand-700 transition-colors hover:bg-brand-50"
        >
          <Mail className="size-5" aria-hidden="true" />
          Gửi email
        </button>
      </div>

      {copied && (
        <p
          role="status"
          className="rounded-xl bg-brand-50 px-4 py-3 text-sm font-medium text-brand-800"
        >
          Đã sao chép nội dung. Khi cửa sổ Zalo mở ra, bạn chỉ cần nhấn giữ vào
          khung chat rồi chọn <strong>Dán</strong> và gửi.
        </p>
      )}

      <p className="flex items-start gap-1.5 text-[13px] text-slate-500">
        <Send className="mt-0.5 size-3.5 shrink-0" aria-hidden="true" />
        Nhấn “Gửi qua Zalo” để nhắn cho dược sĩ, hoặc “Gửi email” để mở sẵn thư.
        Chúng tôi sẽ phản hồi trong thời gian sớm nhất.
      </p>
    </form>
  );
}
