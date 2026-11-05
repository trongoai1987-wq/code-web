/**
 * Cấu hình chung của website.
 * >>> BẠN CHỈ CẦN SỬA CÁC GIÁ TRỊ TRONG FILE NÀY để cập nhật thông tin liên hệ. <<<
 *
 * Giờ mở cửa và địa chỉ chỉ được ghi MỘT LẦN ở đây, mọi trang đều lấy từ đây
 * nên không còn phải sửa nhiều chỗ.
 */

/** Số nhà + tên đường (hiện ở trang chủ cho gọn). */
const addressShort = "216 Nguyễn Tất Thành";
/**
 * Xã và tỉnh. Viết đúng như trên Zalo OA và giấy tờ hành chính ("M'Drắk",
 * chữ D không gạch ngang) để Google nhận ra website, Zalo và Google Maps
 * cùng là một nhà thuốc.
 */
const locality = "M'Drắk";
const region = "Đắk Lắk";
const addressArea = `Xã ${locality}, Tỉnh ${region}`;
/** Giờ mở cửa — sửa 2 giá trị này là đổi toàn bộ website. */
const openTime = "06:00";
const closeTime = "21:00";
/** "06:00" -> "6h00", để viết trong câu văn cho tự nhiên. */
const gio = (t: string) => t.replace(/^0?(\d+):(\d+)$/, "$1h$2");

export const site = {
  name: "Nhà Thuốc Thiện Hạnh",
  shortName: "Thiện Hạnh",
  slogan: "Đủ thuốc – Giá rẻ",
  description:
    `Nhà thuốc Thiện Hạnh tại ${locality}, ${region} — tư vấn dược sĩ tận tình. Tra cứu sản phẩm và đặt hàng nhanh qua Zalo hoặc điện thoại.`,
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
  /** Dùng riêng cho dữ liệu có cấu trúc gửi Google. */
  addressLocality: locality,
  addressRegion: region,
  hoursShort: `${openTime} – ${closeTime}`,
  /** Dạng viết trong câu: "từ 6h00 đến 21h00". */
  hoursSentence: `từ ${gio(openTime)} đến ${gio(closeTime)}`,
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
