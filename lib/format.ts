/** Định dạng giá tiền VND: 125000 -> "125.000₫" */
export function formatPrice(value: number): string {
  return new Intl.NumberFormat("vi-VN").format(value) + "₫";
}

/** Tính % giảm giá từ giá gốc và giá bán. */
export function discountPercent(price: number, original?: number): number {
  if (!original || original <= price) return 0;
  return Math.round(((original - price) / original) * 100);
}

/** Ghép className có điều kiện. */
export function cn(...parts: Array<string | false | null | undefined>): string {
  return parts.filter(Boolean).join(" ");
}
