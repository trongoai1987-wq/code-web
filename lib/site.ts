/**
 * Cấu hình chung của website.
 * >>> BẠN CHỈ CẦN SỬA CÁC GIÁ TRỊ TRONG FILE NÀY để cập nhật thông tin liên hệ. <<<
 *
 * Giờ mở cửa và địa chỉ chỉ được ghi MỘT LẦN ở đây, mọi trang đều lấy từ đây
 * nên không còn phải sửa nhiều chỗ.
 */

/** Số nhà + tên đường (hiện ở trang chủ cho gọn). */
const addressShort = "216 Nguyễn Tất Thành";
/** Xã/huyện/tỉnh. */
const addressArea = "M'Đrắk, Đắk Lắk";
/** Giờ mở cửa — sửa 2 giá trị này là đổi toàn bộ website. */
const openTime = "06:00";
const closeTime = "21:00";

export const site = {
  name: "Nhà Thuốc Thiện Hạnh",
  shortName: "Thiện Hạnh",
  slogan: "Tận tâm chăm sóc sức khỏe gia đình bạn",
  description:
    "Nhà thuốc Thiện Hạnh tại M'Đrắk, Đắk Lắk — tư vấn dược sĩ tận tình. Tra cứu sản phẩm và đặt hàng nhanh qua Zalo hoặc điện thoại.",
  domain: "nhathuocthienhanh.com",
  url: "https://nhathuocthienhanh.com",

  // ——— THÔNG TIN LIÊN HỆ (hãy thay bằng số thật của bạn) ———
  hotline: "0946 544 440",
  phone: "0962 380 448",
  // Số Zalo cá nhân — chỉ dùng dự phòng nếu chưa khai báo Zalo OA bên dưới.
  zalo: "0946544440",
  // Hộp thư cskh@nhathuocthienhanh.com chưa được tạo nên tạm dùng Gmail của chủ
  // nhà thuốc (xác nhận 04/11/2026). Khi lập hộp thư theo tên miền thì đổi lại.
  email: "trongoai@gmail.com",
  address: `${addressShort}, ${addressArea}`,
  addressShort,
  addressArea,
  hoursShort: `${openTime} – ${closeTime}`,
  workingHours: `${openTime} – ${closeTime} (Tất cả các ngày trong tuần)`,
  /** Dạng Google/schema.org, dùng cho dữ liệu có cấu trúc. */
  openingHoursSchema: `Mo-Su ${openTime}-${closeTime}`,
  // Số Giấy chứng nhận đủ điều kiện kinh doanh dược (anh cung cấp 04/11/2026) — đối chiếu lại với bản giấy.
  license: "23525/ĐKKDD-ĐL",

  social: {
    facebook: "",
    // Zalo OA chính thức của nhà thuốc — mọi nút Zalo trên web đều trỏ về đây.
    zaloOA: "https://zalo.me/1403435172595404466",
    youtube: "",
  },
} as const;

/**
 * Tạo link chat Zalo (kèm nội dung soạn sẵn nếu có).
 * Ưu tiên Zalo OA của nhà thuốc; nếu chưa khai báo OA thì dùng số Zalo cá nhân.
 */
export function zaloLink(message?: string): string {
  const oa: string = site.social.zaloOA;
  const base = oa !== "" ? oa : `https://zalo.me/${site.zalo}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

/** Link gọi điện. */
export function telLink(): string {
  return `tel:${site.hotline.replace(/\s/g, "")}`;
}
