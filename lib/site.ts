/**
 * Cấu hình chung của website.
 * >>> BẠN CHỈ CẦN SỬA CÁC GIÁ TRỊ TRONG FILE NÀY để cập nhật thông tin liên hệ. <<<
 */
export const site = {
  name: "Nhà Thuốc Thiện Hạnh",
  shortName: "Thiện Hạnh",
  slogan: "Tận tâm chăm sóc sức khỏe gia đình bạn",
  description:
    "Hệ thống nhà thuốc Thiện Hạnh — thuốc chính hãng, tư vấn dược sĩ tận tình, giá tốt mỗi ngày. Tra cứu sản phẩm và đặt hàng nhanh qua Zalo hoặc hotline.",
  domain: "nhathuocthienhanh.com",
  url: "https://nhathuocthienhanh.com",

  // ——— THÔNG TIN LIÊN HỆ (hãy thay bằng số thật của bạn) ———
  hotline: "1800 6821",
  phone: "0909 000 000",
  // Link Zalo: dùng số điện thoại (bỏ số 0, thêm 84) hoặc để nguyên số
  zalo: "0909000000",
  email: "cskh@nhathuocthienhanh.com",
  address: "123 Đường Sức Khỏe, Phường An Bình, Quận 1, TP. Hồ Chí Minh",
  workingHours: "07:30 – 22:00 (Tất cả các ngày trong tuần)",

  social: {
    facebook: "https://facebook.com/",
    zaloOA: "https://zalo.me/",
    youtube: "https://youtube.com/",
  },
} as const;

/** Tạo link chat Zalo (kèm nội dung soạn sẵn nếu có). */
export function zaloLink(message?: string): string {
  const base = `https://zalo.me/${site.zalo}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

/** Link gọi điện. */
export function telLink(): string {
  return `tel:${site.hotline.replace(/\s/g, "")}`;
}
