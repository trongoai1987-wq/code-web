/**
 * DỮ LIỆU SẢN PHẨM & NỘI DUNG.
 * Bạn có thể chỉnh sửa / thêm sản phẩm trực tiếp trong file này.
 * Khi có ảnh thật, thêm đường dẫn vào trường `image` (đặt ảnh trong thư mục /public).
 *
 * CHỈ ĐƯA VÀO ĐÂY THÔNG TIN THẬT. Không ghi giá giảm, nhãn "hot", số sao hay
 * số lượng đã bán nếu đó không phải số liệu thật của nhà thuốc.
 */

import { site } from "@/lib/site";

export type CategorySlug =
  | "thuoc"
  | "thuc-pham-chuc-nang"
  | "do-uong-suc-khoe"
  | "vitamin-khoang-chat"
  | "me-va-be"
  | "cham-soc-ca-nhan"
  | "my-pham-duoc"
  | "thiet-bi-y-te"
  | "cham-soc-sac-dep";

export interface Category {
  slug: CategorySlug;
  name: string;
  icon: string; // tên icon Lucide
  description: string;
}

export interface Product {
  id: number;
  slug: string;
  name: string;
  category: CategorySlug;
  brand: string;
  origin: string;
  /** Giá niêm yết (đồng). Để 0 nếu chưa muốn công khai giá. */
  price: number;
  unit: string;
  image?: string;
  /** Ảnh thông tin của nhà sản xuất, hiện ở cuối trang chi tiết (tuỳ chọn). */
  infoImage?: string;
  infoImageAlt?: string;
  shortDescription: string;
  description: string[];
  ingredients?: string;
  uses?: string[];
  dosage?: string;
  notes?: string;
  /** "Sản phẩm của ..." — chép đúng như ghi trên nhãn. */
  distributor?: string;
  /** "Sản xuất tại ..." — chép đúng như ghi trên nhãn. */
  manufacturer?: string;
  /** true = thuốc kê đơn: web chỉ hiển thị thông tin tra cứu, không có nút đặt hàng. */
  prescription: boolean;
}

export const categories: Category[] = [
  {
    slug: "thuoc",
    name: "Thuốc",
    icon: "Pill",
    description: "Thuốc kê đơn và không kê đơn, chính hãng từ nhà sản xuất uy tín.",
  },
  {
    slug: "thuc-pham-chuc-nang",
    name: "Thực phẩm chức năng",
    icon: "Leaf",
    description: "Hỗ trợ tăng cường sức khỏe, đề kháng và phòng ngừa bệnh tật.",
  },
  {
    slug: "do-uong-suc-khoe",
    name: "Đồ uống sức khỏe",
    icon: "CupSoda",
    description: "Nước giải khát và đồ uống hỗ trợ sức khỏe hằng ngày.",
  },
  {
    slug: "vitamin-khoang-chat",
    name: "Vitamin & Khoáng chất",
    icon: "Sparkles",
    description: "Bổ sung vi chất thiết yếu cho mọi lứa tuổi.",
  },
  {
    slug: "me-va-be",
    name: "Mẹ & Bé",
    icon: "Baby",
    description: "Sản phẩm chăm sóc sức khỏe cho mẹ bầu, sau sinh và trẻ nhỏ.",
  },
  {
    slug: "cham-soc-ca-nhan",
    name: "Chăm sóc cá nhân",
    icon: "HeartPulse",
    description: "Sản phẩm vệ sinh, chăm sóc cơ thể hằng ngày.",
  },
  {
    slug: "my-pham-duoc",
    name: "Mỹ phẩm dược",
    icon: "Droplets",
    description: "Chăm sóc da chuyên sâu, được khuyên dùng bởi dược sĩ.",
  },
  {
    slug: "thiet-bi-y-te",
    name: "Thiết bị y tế",
    icon: "Stethoscope",
    description: "Máy đo, dụng cụ và thiết bị hỗ trợ theo dõi sức khỏe tại nhà.",
  },
  {
    slug: "cham-soc-sac-dep",
    name: "Chăm sóc sắc đẹp",
    icon: "Flower2",
    description: "Sản phẩm hỗ trợ làm đẹp da, tóc và vóc dáng.",
  },
];

export const categoryMap: Record<CategorySlug, Category> = Object.fromEntries(
  categories.map((c) => [c.slug, c]),
) as Record<CategorySlug, Category>;

/**
 * DANH SÁCH SẢN PHẨM.
 *
 * Hiện đang TRỐNG — chờ danh sách sản phẩm thật của nhà thuốc.
 * Toàn bộ 24 sản phẩm mẫu (thương hiệu không tồn tại, giá và nhãn giảm giá
 * không thật) đã được gỡ ngày 04/11/2026 để không đăng thông tin sai lên
 * tên miền thật.
 *
 * CÁCH THÊM SẢN PHẨM: thêm từng khối như ví dụ dưới đây vào trong dấu [ ].
 *
 *   {
 *     id: 1,
 *     slug: "paracetamol-500mg",          // chữ không dấu, nối bằng dấu gạch
 *     name: "Paracetamol 500mg",
 *     category: "thuoc",                   // chọn 1 trong các mã ở CategorySlug
 *     brand: "Pharmedic",
 *     origin: "Việt Nam",
 *     price: 32000,                        // để 0 nếu chưa công khai giá
 *     unit: "Hộp 10 vỉ x 10 viên",
 *     image: "/san-pham/paracetamol.jpg",  // ảnh đặt trong thư mục public/
 *     shortDescription: "Giảm đau, hạ sốt.",
 *     description: ["Đoạn mô tả 1.", "Đoạn mô tả 2."],
 *     prescription: false,                 // true nếu là thuốc kê đơn
 *   },
 */
export const products: Product[] = [
  {
    id: 1,
    slug: "kirin-imuse-huong-chanh-sua-chua",
    name: "KIRIN iMUSE — Nước giải khát hương chanh & sữa chua",
    category: "do-uong-suc-khoe",
    brand: "KIRIN",
    origin: "Việt Nam",
    price: 10000,
    unit: "Chai 430ml",
    image: "/san-pham/kirin-imuse-chanh-sua-chua.jpg",
    infoImage: "/san-pham/kirin-imuse-thong-tin.jpg",
    infoImageAlt:
      "Thông tin sản phẩm KIRIN iMUSE và Lc-PLASMA do Tập đoàn Kirin cung cấp.",
    shortDescription:
      "Nước giải khát hương chanh & sữa chua, thanh mát sảng khoái, chứa 100 tỷ Lc-PLASMA mỗi chai.",
    description: [
      "iMUSE là nước giải khát của Tập đoàn Kirin (Nhật Bản), kết hợp hương chanh và sữa chua cho vị thanh mát, sảng khoái. Ngon nhất khi uống lạnh.",
      "Mỗi chai chứa 100 tỷ Lc-PLASMA (Lactococcus lactis) — chủng vi khuẩn axit lactic được Tập đoàn Kirin nghiên cứu, giúp hỗ trợ tăng đề kháng.",
      "Giá bán lẻ 10.000đ/chai. Mua nguyên thùng 24 chai: 240.000đ.",
    ],
    uses: [
      "Hỗ trợ tăng đề kháng với 100 tỷ Lc-PLASMA mỗi chai",
      "Hương chanh & sữa chua, thanh mát sảng khoái",
    ],
    notes:
      "Đây là nước giải khát, không phải thuốc. Thông tin về Lc-PLASMA theo công bố của Tập đoàn Kirin.",
    distributor:
      "Công ty Cổ phần Thực phẩm Quốc tế — Lô 13, KCN Tam Phước, P. Tam Phước, TP. Đồng Nai.",
    manufacturer:
      "Công ty TNHH Nước giải khát Kirin Việt Nam — Lô D3A-CN, KCN Mỹ Phước 2, P. Bến Cát, TP. Hồ Chí Minh, Việt Nam.",
    prescription: false,
  },
];

export interface Branch {
  id: number;
  name: string;
  address: string;
  phone: string;
  hours: string;
}

/** Cơ sở nhà thuốc. Thông tin lấy từ lib/site.ts để không phải sửa 2 nơi. */
export const branches: Branch[] = [
  {
    id: 1,
    name: site.name,
    address: site.address,
    phone: site.hotline,
    hours: site.hoursShort,
  },
];

export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readingTime: string;
  content: string[];
}

export const articles: Article[] = [
  {
    slug: "cach-tang-suc-de-khang-mua-lanh",
    title: "5 cách tăng sức đề kháng cho cả gia đình khi trời trở lạnh",
    excerpt:
      "Thời tiết chuyển mùa là lúc cơ thể dễ mắc bệnh. Cùng dược sĩ Thiện Hạnh tìm hiểu cách bảo vệ sức khỏe gia đình.",
    category: "Sống khỏe",
    date: "2026-06-20",
    readingTime: "5 phút đọc",
    content: [
      "Khi thời tiết trở lạnh, hệ miễn dịch của cơ thể thường suy giảm, tạo điều kiện cho vi khuẩn và virus tấn công. Việc chủ động tăng cường sức đề kháng là vô cùng quan trọng.",
      "1. Bổ sung đầy đủ vitamin và khoáng chất, đặc biệt là Vitamin C, D và kẽm. 2. Uống đủ nước mỗi ngày. 3. Ngủ đủ giấc 7–8 tiếng. 4. Vận động thể chất đều đặn. 5. Giữ ấm cơ thể, đặc biệt là vùng cổ và bàn chân.",
      "Nếu cần tư vấn thêm về các sản phẩm hỗ trợ tăng đề kháng, hãy liên hệ dược sĩ của Nhà thuốc Thiện Hạnh để được hướng dẫn phù hợp với thể trạng từng người.",
    ],
  },
  {
    slug: "huong-dan-su-dung-thuoc-khang-sinh-an-toan",
    title: "Hướng dẫn sử dụng thuốc kháng sinh an toàn, đúng cách",
    excerpt:
      "Lạm dụng kháng sinh gây ra tình trạng kháng thuốc nguy hiểm. Đâu là nguyên tắc sử dụng kháng sinh đúng?",
    category: "Dùng thuốc",
    date: "2026-06-12",
    readingTime: "6 phút đọc",
    content: [
      "Kháng sinh là vũ khí quan trọng trong điều trị nhiễm khuẩn, nhưng chỉ hiệu quả khi được sử dụng đúng cách.",
      "Nguyên tắc quan trọng: chỉ dùng kháng sinh khi có chỉ định của bác sĩ, uống đủ liều và đủ số ngày ngay cả khi đã thấy khỏe, không tự ý mua và dùng lại đơn thuốc cũ.",
      "Việc tự ý ngừng thuốc sớm hoặc dùng không đủ liều là nguyên nhân hàng đầu gây kháng kháng sinh. Hãy tham khảo dược sĩ trước khi dùng bất kỳ loại kháng sinh nào.",
    ],
  },
  {
    slug: "cham-soc-da-mua-he-dung-cach",
    title: "Chăm sóc da mùa hè đúng cách để tránh sạm nám",
    excerpt:
      "Ánh nắng gay gắt mùa hè là kẻ thù của làn da. Cùng khám phá quy trình chăm sóc da mùa hè khoa học.",
    category: "Làm đẹp",
    date: "2026-05-30",
    readingTime: "4 phút đọc",
    content: [
      "Mùa hè với cường độ tia UV cao khiến da dễ bị sạm, nám và lão hóa sớm. Chăm sóc da đúng cách giúp bảo vệ và duy trì làn da khỏe mạnh.",
      "Quy trình cơ bản gồm: làm sạch dịu nhẹ, dưỡng ẩm, và đặc biệt không thể thiếu kem chống nắng SPF50+ thoa lại sau mỗi 2–3 giờ. Bổ sung thêm serum Vitamin C và uống đủ nước để da luôn tươi sáng.",
      "Đừng quên bảo vệ da bằng mũ, kính râm khi ra ngoài trời nắng. Ghé Nhà thuốc Thiện Hạnh để được dược sĩ tư vấn sản phẩm phù hợp với loại da của bạn.",
    ],
  },
];

// Cam kết / điểm mạnh
export const commitments = [
  {
    icon: "BadgeCheck",
    title: "Nguồn gốc rõ ràng",
    description: "Sản phẩm có nguồn gốc xuất xứ, hóa đơn chứng từ đầy đủ.",
  },
  {
    icon: "UserRound",
    title: "Dược sĩ tư vấn tận tâm",
    description: "Dược sĩ tư vấn đúng nhu cầu, hướng dẫn sử dụng an toàn.",
  },
  {
    icon: "Truck",
    title: "Đặt hàng qua Zalo",
    description: "Nhắn Zalo hoặc gọi điện để được hỗ trợ đặt hàng nhanh.",
  },
  {
    icon: "Wallet",
    title: "Giá niêm yết rõ ràng",
    description: "Giá công khai, tư vấn sản phẩm phù hợp nhu cầu và chi phí.",
  },
];

// ——— Hàm truy vấn ———
export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: CategorySlug): Product[] {
  return products.filter((p) => p.category === category);
}

/** Sản phẩm hiện ở trang chủ — lấy theo thứ tự trong danh sách. */
export function getFeaturedProducts(limit = 8): Product[] {
  return products.slice(0, limit);
}

/** Các nhóm cần hiển thị câu cảnh báo bắt buộc của thực phẩm chức năng. */
const supplementCategories: CategorySlug[] = [
  "thuc-pham-chuc-nang",
  "do-uong-suc-khoe",
  "vitamin-khoang-chat",
  "cham-soc-sac-dep",
];

export function isSupplement(product: Product): boolean {
  return supplementCategories.includes(product.category);
}

export function getRelatedProducts(product: Product, limit = 4): Product[] {
  return products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, limit);
}

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
