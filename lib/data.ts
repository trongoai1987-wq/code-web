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

/** Một quy cách đóng gói khác của cùng sản phẩm (ví dụ chai 120 viên). */
export interface ProductVariant {
  unit: string;
  price: number;
}

export interface Product {
  id: number;
  slug: string;
  name: string;
  category: CategorySlug;
  brand: string;
  origin: string;
  /** Giá niêm yết (đồng) của quy cách chính. Để 0 nếu chưa muốn công khai giá. */
  price: number;
  /** Quy cách chính, ví dụ "Chai 30 viên". */
  unit: string;
  /** Các quy cách khác kèm giá (nếu sản phẩm có nhiều cỡ đóng gói). */
  variants?: ProductVariant[];
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
  {
    id: 2,
    slug: "khuong-thao-dan-gold-30-vien",
    name: "Khương Thảo Đan Gold",
    category: "thuc-pham-chuc-nang",
    brand: "Thái Minh",
    origin: "Việt Nam",
    price: 169000,
    unit: "Chai 30 viên",
    variants: [{ unit: "Chai 120 viên", price: 617500 }],
    image: "/san-pham/khuong-thao-dan-gold.jpg",
    infoImage: "/san-pham/khuong-thao-dan-gold-nhan.jpg",
    infoImageAlt:
      "Nhãn sản phẩm Khương Thảo Đan Gold: thành phần, công dụng, hướng dẫn sử dụng và số đăng ký 6922/2021/ĐKSP.",
    shortDescription:
      "Thực phẩm bảo vệ sức khỏe giúp giảm đau, làm trơn khớp và phục hồi sụn khớp.",
    description: [
      "Khương Thảo Đan Gold là thực phẩm bảo vệ sức khỏe dạng viên nang của Dược phẩm Thái Minh, kết hợp các vị thảo dược quen thuộc với hoạt chất KGA1 chiết xuất từ Địa liền, CARYOTIN chiết xuất từ quả Đủng đỉnh và Collagen type II.",
      "Đối tượng sử dụng: người bị thoái hóa khớp, thoái hóa đốt sống, vôi hóa cột sống, thoát vị đĩa đệm, gai đốt sống; người bị đau nhức mỏi khớp, đau lưng, đau vai gáy, sưng khớp, tê buồn chân tay do thoái hóa khớp.",
      "Số đăng ký sản phẩm: 6922/2021/ĐKSP. Hạn dùng 36 tháng kể từ ngày sản xuất, xem cụ thể trên bao bì.",
    ],
    ingredients:
      "Cho 1 viên 600mg — Cao tổng hợp 380mg (Cao Độc hoạt 76mg, Cao Tang ký sinh 76mg, Cao Ngưu tất 38mg, Cao Phòng phong 38mg, Cao Đương quy 38mg, Cao Thổ phục linh 38mg, Cao Hy thiêm 38mg, Cao Xuyên khung 19mg, Cao Quế chi 19mg); CARYOTIN (chiết xuất quả Đủng đỉnh) 70mg; KGA1 (chiết xuất Địa liền) 20mg; Collagen type II 20mg. Phụ liệu: vỏ nang gelatin, tinh bột, talc, calcium carbonate, magnesium stearate, ethanol 96%.",
    uses: [
      "Giúp làm trơn khớp và phục hồi sụn khớp",
      "Hỗ trợ giảm nguy cơ thoái hóa khớp, thoái hóa đốt sống, thoát vị đĩa đệm và giúp làm chậm quá trình thoái hóa khớp, thoái hóa cột sống",
      "Hỗ trợ giảm đau nhức, giảm các triệu chứng viêm khớp, đau mỏi vai gáy do thoái hóa khớp, thoái hóa cột sống",
    ],
    dosage:
      "Uống tăng cường: ngày 3 lần, mỗi lần 2 viên, uống sau khi ăn. Uống duy trì: ngày 2 lần, mỗi lần 2 viên, uống sau khi ăn.",
    notes:
      "Không dùng cho phụ nữ mang thai, phụ nữ đang cho con bú và trẻ em dưới 12 tuổi. Không dùng cho người mẫn cảm với bất kỳ thành phần nào của sản phẩm. Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp, để xa tầm tay trẻ em.",
    distributor:
      "Công ty Cổ phần Dược phẩm Thái Minh — Số 3, ngõ 2, phố Thọ Tháp, phường Dịch Vọng, quận Cầu Giấy, Hà Nội.",
    manufacturer:
      "Công ty Cổ phần Công nghệ cao Thái Minh — Lô CN5, Khu công nghiệp Thạch Thất – Quốc Oai, thị trấn Quốc Oai, huyện Quốc Oai, Hà Nội.",
    prescription: false,
  },
  {
    id: 3,
    slug: "siro-thien-mon-bo-phoi-premium",
    name: "Siro Thiên Môn Bổ Phổi Premium",
    category: "thuc-pham-chuc-nang",
    brand: "Titafa",
    origin: "Việt Nam",
    price: 75000,
    unit: "Chai 280ml",
    image: "/san-pham/thien-mon-bo-phoi-premium.jpg",
    infoImage: "/san-pham/thien-mon-bo-phoi-thanh-phan.jpg",
    infoImageAlt:
      "Thành phần Siro Thiên Môn Bổ Phổi Premium: AP-Bio chiết xuất Xuyên Tâm Liên kết hợp 12 loại dược liệu.",
    shortDescription:
      "Thực phẩm bảo vệ sức khỏe hỗ trợ giảm ho khan, ho gió, ho đờm và đau rát hầu họng.",
    description: [
      "Siro Thiên Môn Bổ Phổi Premium là thực phẩm bảo vệ sức khỏe dạng siro của Công ty Cổ phần Titafa, kết hợp AP-Bio (chiết xuất Xuyên Tâm Liên) và chiết xuất Lá Thường Xuân với 12 vị dược liệu quen thuộc như Thiên Môn Đông, Mạch Môn Đông, Húng Chanh, Lá Hen, Kinh Giới và Bách Bộ.",
      "Sản phẩm dùng cho trẻ từ 6 tuổi trở lên và người lớn bị ho khan, ho gió, ho có đờm, đau rát hầu họng, khàn tiếng.",
      "Số xác nhận nội dung quảng cáo: 896/2022/XNQC-ATTP.",
    ],
    ingredients:
      "Thành phần cấu tạo cho 280ml — AP-Bio (chiết xuất Xuyên Tâm Liên, Andrographis Paniculata, tỉ lệ chiết 14/1) 560mg; chiết xuất Lá Thường Xuân (Ivy Leaf Extract, nhập khẩu từ Thổ Nhĩ Kỳ) 1.200mg; 7.980mg cao lỏng hỗn hợp tương đương thảo mộc thô (tỉ lệ 1/10) gồm: Húng Chanh (Coleus Amboinicus) 14.000mg, Mạch Môn Đông (Ophiopogon Japonicus) 8.400mg, Thiên Môn Đông (Asparagus Cochinchinensis) 8.400mg, Kinh Giới (Elsholtzia Ciliata) 8.400mg, Bách Bộ (Stemona Tuberosa) 8.400mg, Tang Bạch Bì (Cortex Mori Albae Radicis) 8.400mg, Lá Hen (Calotropis Gigantea) 5.600mg, Trần Bì (Citrus Reticulata) 5.600mg, Bình Vôi (Stephania Glabra) 5.600mg, Gừng (Zingiber Officinale) 4.200mg, Actiso (Cynara Scolymus) 2.800mg. Phụ liệu: chất điều vị (Sorbitol, Acesulfam kali), chất chống oxy hóa (Dinatri ethylendiamintetra acetat), chất điều chỉnh độ axit (Acid citric), chất làm dày (Gôm xanthan), chất ổn định (Trinatri citrat), chất tạo màu (Tartrazin), hương liệu (hương cam tổng hợp), nước tinh khiết. Thể tích thực: 280ml ± 7,5%.",
    uses: [
      "Hỗ trợ giảm ho khan, ho gió, ho có đờm",
      "Hỗ trợ bổ phổi và dưỡng ẩm đường hô hấp",
      "Hỗ trợ giảm đau rát hầu họng, khàn tiếng do viêm họng, viêm phế quản",
    ],
    dosage:
      "Trẻ từ 6–14 tuổi: uống 20ml/lần, ngày 2 lần. Trẻ trên 14 tuổi và người lớn: uống 20ml/lần, ngày 3 lần. Nên uống trước hoặc sau khi ăn khoảng 30 phút để đạt hiệu quả tốt nhất.",
    distributor:
      "Công ty Cổ phần Titafa — 160 Hiền Vương, Phường Phú Thạnh, Thành phố Hồ Chí Minh, Việt Nam.",
    manufacturer: "Việt Nam",
    prescription: false,
  },
  {
    id: 4,
    slug: "haecho-k2",
    name: "HAECHO K2",
    category: "thuc-pham-chuc-nang",
    brand: "Lustrel Laboratoires",
    origin: "Pháp",
    // Chưa công khai giá — trang web sẽ hiện "Liên hệ dược sĩ" thay cho con số.
    price: 0,
    unit: "Hộp 60 viên",
    image: "/san-pham/haecho-k2.jpg",
    shortDescription:
      "Thực phẩm bảo vệ sức khỏe cung cấp canxi hữu cơ từ tảo biển đỏ kết hợp vitamin D3, K2, giúp hỗ trợ xương răng vững chắc cho người trưởng thành.",
    description: [
      "Haecho K2 cung cấp bộ ba canxi, D3 và K2 giúp nạp đủ dưỡng chất thiết yếu cho hệ vận động. Nhờ đó, sản phẩm hỗ trợ củng cố độ bền cho cấu trúc khung xương và duy trì men răng vững chắc.",
      "Đối tượng sử dụng: người lớn cần bù đắp lượng canxi thiếu hụt do chế độ dinh dưỡng chưa đủ chất; người già có hệ xương khớp suy yếu.",
      "Dạng bào chế: viên nang cứng. Số đăng ký sản phẩm: 7354/2023/ĐKSP.",
    ],
    ingredients:
      "Thành phần mỗi liều — Chiết xuất tảo biển đỏ (Lithothamnium Calcareum) 1.080mg (cung cấp Canxi 324mg, Magie 10,8mg); Magie oxide 120mg (cung cấp Magie 72,4mg); Kẽm oxide 3,75mg (cung cấp Kẽm 3mg); Mangan sulfate 2,12mg (cung cấp Mangan 0,7mg); Natri selenit 56mcg (cung cấp Selen 25mcg); Vitamin K2 (Menaquinone) 22,5mcg; Vitamin D3 (Cholecalciferol) 5mcg.",
    uses: [
      "Cung cấp bộ ba canxi, D3 và K2 cho hệ vận động",
      "Hỗ trợ củng cố độ bền cho cấu trúc khung xương",
      "Hỗ trợ duy trì men răng vững chắc",
    ],
    dosage:
      "Liều dùng 2 viên/ngày. Uống nguyên viên nang với nước, sau khi ăn.",
    notes:
      "Chống chỉ định: người có nồng độ canxi niệu và canxi máu vượt ngưỡng bình thường; người dị ứng với bất kỳ thành phần nào của sản phẩm; người đang dùng thuốc chống đông. Không tự ý tăng liều để tránh nguy cơ dư thừa canxi gây sỏi thận hoặc vôi hóa mạch máu. Trẻ dưới 18 tuổi cần có chỉ định của chuyên gia y tế; phụ nữ có thai và cho con bú chỉ dùng khi được bác sĩ đồng ý. Bảo quản nơi khô ráo, thoáng mát (dưới 30°C), tránh ánh nắng mạnh, để xa tầm tay trẻ em. Không dùng khi sản phẩm quá hạn sử dụng.",
    distributor: "Công ty TNHH Đầu tư Anh Gia Khánh.",
    prescription: false,
  },
  {
    id: 5,
    slug: "austar-ultra-omega-3-6-9",
    name: "Austar Ultra Omega 3-6-9",
    category: "thuc-pham-chuc-nang",
    brand: "Austar",
    origin: "Úc",
    // Chưa công khai giá — trang web sẽ hiện "Liên hệ dược sĩ" thay cho con số.
    price: 0,
    unit: "Hộp 60 viên nang mềm",
    image: "/san-pham/austar-ultra-omega-3-6-9.jpg",
    shortDescription:
      "Thực phẩm bảo vệ sức khỏe hỗ trợ cải thiện chỉ số triglycerid máu, hỗ trợ cải thiện trí nhớ và hỗ trợ sức khỏe mắt.",
    description: [
      "Austar Ultra Omega 3-6-9 kết hợp dầu cá tự nhiên, dầu hoa anh thảo và dầu hạt lanh, cung cấp các axit béo Omega-3, Omega-6 và Omega-9.",
      "Sản phẩm không chứa đường, gluten, trứng, sữa, các loại hạt, chất làm ngọt nhân tạo, hương thực phẩm và chất bảo quản. Không chứa thành phần biến đổi gen. Có chứa sulfites.",
      "Số đăng ký sản phẩm: 729/2025/ĐKSP.",
    ],
    ingredients: "Dầu cá, dầu hoa anh thảo, dầu hạt lanh.",
    uses: [
      "Hỗ trợ cải thiện chỉ số triglycerid máu",
      "Hỗ trợ cải thiện trí nhớ",
      "Hỗ trợ tăng cường sức khỏe tim mạch",
      "Hỗ trợ sức khỏe mắt",
    ],
    dosage:
      "Người lớn uống 2 viên mỗi lần, 1–3 lần mỗi ngày, trong bữa ăn, hoặc theo chỉ dẫn của chuyên gia y tế.",
    notes:
      "Sản phẩm có chứa sulfites. Không sử dụng nếu niêm phong nắp bị hỏng. Bảo quản dưới 25°C, nơi khô ráo, tránh ánh nắng trực tiếp.",
    distributor:
      "Công ty TNHH Austar Pharma Việt Nam — 350 Bình Lợi, Phường 13, Quận Bình Thạnh, TP.HCM (nhập khẩu và phân phối).",
    manufacturer:
      "Austar Pharma Pty Ltd — 6A Sturt Ave, Toorak Gardens SA 5065, Australia.",
    prescription: false,
  },
  {
    id: 6,
    slug: "canxi-tao-bien",
    name: "Canxi Tảo Biển",
    category: "thuc-pham-chuc-nang",
    brand: "Kingphar",
    origin: "Việt Nam",
    // Chưa công khai giá — trang web sẽ hiện "Liên hệ dược sĩ" thay cho con số.
    price: 0,
    unit: "Hộp 60 viên",
    image: "/san-pham/canxi-tao-bien.jpg",
    infoImage: "/san-pham/canxi-tao-bien-nhan.jpg",
    infoImageAlt:
      "Nhãn sau hộp Canxi Tảo Biển Kingphar: thành phần, cách dùng, bảo quản, hạn dùng và số tiêu chuẩn 34/VTV/2026.",
    shortDescription:
      "Thực phẩm bổ sung canxi tảo biển kết hợp magie oxid và collagen type II, dùng cho trẻ từ 6 tuổi trở lên và người lớn.",
    description: [
      "Thực phẩm bổ sung dạng viên, khối lượng mỗi viên 1.350mg (±10%).",
      "Đối tượng sử dụng: trẻ em từ 6 tuổi trở lên và người lớn.",
      "Tiêu chuẩn áp dụng: TCCS. Số tiêu chuẩn: 34/VTV/2026.",
      "Hạn sử dụng 36 tháng kể từ ngày sản xuất. Ngày sản xuất và hạn sử dụng được in trên bao bì sản phẩm.",
    ],
    ingredients:
      "Mỗi viên 1.350mg chứa: Canxi tảo biển 300mg; Magie oxid 50mg; Collagen type II 50mg; dầu đậu nành; chất ổn định (420(ii), 422, 322(i)); gelatin; ethyl vanilin; màu thực phẩm tổng hợp (155, 171, 172(ii)); chất bảo quản (202, 211); cồn 96°; nước tinh khiết vừa đủ.",
    dosage:
      "Người lớn và trẻ em trên 6 tuổi uống 2 viên mỗi ngày. Phụ nữ mang thai và đang cho con bú, người già có nguy cơ loãng xương, trẻ vị thành niên đang trong giai đoạn phát triển uống 3 viên mỗi ngày. Nên uống một lần vào buổi sáng.",
    notes:
      "Không dùng cho người mẫn cảm với bất kỳ thành phần nào của sản phẩm. Bảo quản nơi khô, mát, tránh ánh nắng mặt trời trực tiếp. Để xa tầm tay trẻ em.",
    distributor:
      "Công ty TNHH Sản xuất và Thương mại Vinh Thịnh Vượng — Thôn Bình Phú, Xã Việt Yên, Tỉnh Hưng Yên, Việt Nam.",
    manufacturer: "Việt Nam (Công ty TNHH Sản xuất và Thương mại Vinh Thịnh Vượng).",
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
export interface Commitment {
  icon: string;
  title: string;
  description: string;
  /** Trang nói rõ hơn về cam kết này (nếu có). */
  href?: string;
}

export const commitments: Commitment[] = [
  {
    icon: "UserRound",
    title: "Dược sĩ tư vấn tận tâm",
    description: "Dược sĩ tư vấn đúng nhu cầu, hướng dẫn sử dụng an toàn.",
  },
  {
    icon: "BadgeCheck",
    title: "Thuốc chính hãng",
    description:
      "Cam kết 100% chính hãng, có nguồn gốc xuất xứ và hóa đơn chứng từ đầy đủ.",
  },
  {
    icon: "RotateCcw",
    title: "Đổi trả trong 30 ngày",
    description:
      "Đổi sản phẩm mới hoặc hoàn tiền 100% khi lỗi do nhà sản xuất.",
    href: "/chinh-sach-doi-tra/",
  },
  {
    icon: "Truck",
    title: "Miễn phí giao hàng",
    description:
      "Áp dụng theo chính sách giao hàng của nhà thuốc. Gọi hoặc nhắn Zalo để biết khu vực giao.",
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
