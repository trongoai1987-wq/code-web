/** Định dạng giá tiền VND: 125000 -> "125.000₫" */
export function formatPrice(value: number): string {
  return new Intl.NumberFormat("vi-VN").format(value) + "₫";
}

/** Ghép className có điều kiện. */
export function cn(...parts: Array<string | false | null | undefined>): string {
  return parts.filter(Boolean).join(" ");
}
