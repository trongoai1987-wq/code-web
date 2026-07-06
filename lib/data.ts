/**
 * DỮ LIỆU SẢN PHẨM & NỘI DUNG (mẫu).
 * Bạn có thể chỉnh sửa / thêm sản phẩm trực tiếp trong file này.
 * Khi có ảnh thật, thêm đường dẫn vào trường `image` (đặt ảnh trong thư mục /public).
 */

export type CategorySlug =
  | "thuoc"
  | "thuc-pham-chuc-nang"
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
  price: number;
  originalPrice?: number;
  unit: string;
  image?: string;
  shortDescription: string;
  description: string[];
  ingredients?: string;
  uses?: string[];
  dosage?: string;
  notes?: string;
  prescription: boolean;
  tags: Array<"hot" | "new" | "sale">;
  rating: number;
  sold: number;
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

export const products: Product[] = [
  {
    id: 1,
    slug: "vitamin-c-1000mg-thien-hanh",
    name: "Viên sủi Vitamin C 1000mg tăng đề kháng",
    category: "vitamin-khoang-chat",
    brand: "MediPlus",
    origin: "Việt Nam",
    price: 68000,
    originalPrice: 85000,
    unit: "Tuýp 20 viên",
    shortDescription:
      "Bổ sung Vitamin C liều cao, hỗ trợ tăng sức đề kháng, chống oxy hóa.",
    description: [
      "Viên sủi Vitamin C 1000mg cung cấp lượng vitamin C dồi dào giúp tăng cường hệ miễn dịch, hỗ trợ cơ thể chống lại các tác nhân gây bệnh.",
      "Dạng viên sủi dễ uống, hương cam tự nhiên, hấp thu nhanh, phù hợp cho cả gia đình.",
    ],
    ingredients: "Acid ascorbic (Vitamin C) 1000mg, hương cam, chất tạo ngọt.",
    uses: [
      "Tăng cường sức đề kháng, giảm mệt mỏi",
      "Chống oxy hóa, hỗ trợ làm đẹp da",
      "Hỗ trợ hấp thu sắt",
    ],
    dosage: "Người lớn: 1 viên/ngày, hòa tan trong 200ml nước.",
    notes: "Không dùng quá liều khuyến cáo. Bảo quản nơi khô ráo, thoáng mát.",
    prescription: false,
    tags: ["hot", "sale"],
    rating: 4.8,
    sold: 1250,
  },
  {
    id: 2,
    slug: "paracetamol-500mg",
    name: "Paracetamol 500mg giảm đau, hạ sốt",
    category: "thuoc",
    brand: "Pharmedic",
    origin: "Việt Nam",
    price: 32000,
    unit: "Hộp 10 vỉ x 10 viên",
    shortDescription:
      "Giảm các cơn đau nhẹ đến vừa và hạ sốt hiệu quả cho người lớn và trẻ em.",
    description: [
      "Paracetamol 500mg là thuốc giảm đau, hạ sốt thông dụng, dùng trong các trường hợp đau đầu, đau răng, đau cơ, cảm cúm, sốt.",
      "Sản phẩm đạt chuẩn GMP, an toàn khi dùng đúng liều.",
    ],
    ingredients: "Paracetamol 500mg.",
    uses: ["Giảm đau đầu, đau răng, đau cơ", "Hạ sốt do cảm cúm"],
    dosage: "Người lớn: 1–2 viên/lần, cách nhau tối thiểu 4–6 giờ.",
    notes:
      "Không dùng quá 8 viên/ngày. Thận trọng với người có bệnh gan. Đọc kỹ hướng dẫn trước khi dùng.",
    prescription: false,
    tags: ["hot"],
    rating: 4.9,
    sold: 3400,
  },
  {
    id: 3,
    slug: "men-vi-sinh-probio-kids",
    name: "Men vi sinh Probio Kids hỗ trợ tiêu hóa cho bé",
    category: "me-va-be",
    brand: "BioCare",
    origin: "Pháp",
    price: 155000,
    originalPrice: 180000,
    unit: "Hộp 20 gói",
    shortDescription:
      "Bổ sung lợi khuẩn, hỗ trợ tiêu hóa và tăng hấp thu dưỡng chất cho trẻ.",
    description: [
      "Men vi sinh Probio Kids chứa các chủng lợi khuẩn thiết yếu giúp cân bằng hệ vi sinh đường ruột, giảm rối loạn tiêu hóa ở trẻ nhỏ.",
      "Hương vị trái cây thơm ngon, bé dễ uống, có thể pha cùng sữa hoặc nước.",
    ],
    ingredients: "Lactobacillus, Bifidobacterium, chất xơ hòa tan FOS.",
    uses: [
      "Hỗ trợ tiêu hóa, giảm táo bón, tiêu chảy",
      "Tăng cường hấp thu dưỡng chất",
      "Bé ăn ngon miệng hơn",
    ],
    dosage: "Trẻ từ 1 tuổi: 1–2 gói/ngày sau ăn.",
    notes: "Không dùng cho trẻ dị ứng với thành phần sản phẩm.",
    prescription: false,
    tags: ["new", "sale"],
    rating: 4.7,
    sold: 890,
  },
  {
    id: 4,
    slug: "may-do-huyet-ap-omron",
    name: "Máy đo huyết áp bắp tay tự động",
    category: "thiet-bi-y-te",
    brand: "Omron",
    origin: "Nhật Bản",
    price: 890000,
    originalPrice: 1050000,
    unit: "Máy",
    shortDescription:
      "Đo huyết áp và nhịp tim chính xác tại nhà, màn hình lớn dễ đọc.",
    description: [
      "Máy đo huyết áp bắp tay tự động cho kết quả nhanh chóng, chính xác chỉ sau một chạm.",
      "Công nghệ IntelliSense giúp đo êm ái, lưu trữ kết quả các lần đo, cảnh báo nhịp tim bất thường.",
    ],
    uses: [
      "Theo dõi huyết áp tại nhà hằng ngày",
      "Phát hiện sớm dấu hiệu tăng huyết áp",
      "Phù hợp người cao tuổi, người bệnh tim mạch",
    ],
    notes: "Bảo hành chính hãng 5 năm.",
    prescription: false,
    tags: ["hot"],
    rating: 4.9,
    sold: 560,
  },
  {
    id: 5,
    slug: "dau-ca-omega-3",
    name: "Viên dầu cá Omega-3 bổ mắt, bổ não",
    category: "thuc-pham-chuc-nang",
    brand: "NatureGold",
    origin: "Mỹ",
    price: 210000,
    originalPrice: 250000,
    unit: "Lọ 100 viên",
    shortDescription:
      "Bổ sung DHA & EPA, hỗ trợ sức khỏe tim mạch, mắt và trí não.",
    description: [
      "Viên dầu cá Omega-3 cung cấp acid béo thiết yếu DHA và EPA, hỗ trợ chức năng não bộ, cải thiện thị lực và bảo vệ tim mạch.",
      "Chiết xuất từ cá biển sâu, tinh khiết, không mùi tanh.",
    ],
    ingredients: "Fish oil 1000mg (EPA 180mg, DHA 120mg).",
    uses: [
      "Hỗ trợ sức khỏe tim mạch",
      "Bổ mắt, giảm khô mắt",
      "Tăng cường trí nhớ",
    ],
    dosage: "1–2 viên/ngày sau bữa ăn.",
    prescription: false,
    tags: ["sale"],
    rating: 4.6,
    sold: 1120,
  },
  {
    id: 6,
    slug: "kem-chong-nang-sunplay",
    name: "Kem chống nắng dược mỹ phẩm SPF50+ PA++++",
    category: "my-pham-duoc",
    brand: "DermaShield",
    origin: "Hàn Quốc",
    price: 245000,
    unit: "Tuýp 50ml",
    shortDescription:
      "Bảo vệ da tối ưu khỏi tia UVA/UVB, kết cấu mỏng nhẹ, không bết dính.",
    description: [
      "Kem chống nắng phổ rộng SPF50+ PA++++ bảo vệ da toàn diện trước tác hại của ánh nắng, ngăn ngừa lão hóa và sạm nám.",
      "Thành phần lành tính, phù hợp cả da nhạy cảm, không gây bít tắc lỗ chân lông.",
    ],
    ingredients: "Zinc Oxide, Titanium Dioxide, Vitamin E, Hyaluronic Acid.",
    uses: ["Chống nắng, chống lão hóa", "Dưỡng ẩm, làm dịu da"],
    dosage: "Thoa trước khi ra nắng 15–20 phút, thoa lại sau mỗi 2–3 giờ.",
    prescription: false,
    tags: ["hot", "new"],
    rating: 4.8,
    sold: 2050,
  },
  {
    id: 7,
    slug: "nuoc-suc-mieng-khang-khuan",
    name: "Nước súc miệng kháng khuẩn bạc hà",
    category: "cham-soc-ca-nhan",
    brand: "FreshCare",
    origin: "Việt Nam",
    price: 55000,
    unit: "Chai 500ml",
    shortDescription:
      "Làm sạch khoang miệng, ngăn ngừa vi khuẩn, hơi thở thơm mát dài lâu.",
    description: [
      "Nước súc miệng kháng khuẩn giúp loại bỏ vi khuẩn gây hôi miệng, bảo vệ nướu và men răng.",
      "Hương bạc hà the mát, mang lại cảm giác sạch sẽ, tự tin.",
    ],
    uses: ["Ngăn ngừa sâu răng, viêm nướu", "Khử mùi hôi miệng"],
    dosage: "Súc miệng 20ml trong 30 giây, 2 lần/ngày.",
    prescription: false,
    tags: [],
    rating: 4.5,
    sold: 780,
  },
  {
    id: 8,
    slug: "canxi-d3-k2",
    name: "Canxi hữu cơ D3 K2 cho xương chắc khỏe",
    category: "vitamin-khoang-chat",
    brand: "MediPlus",
    origin: "Đức",
    price: 320000,
    originalPrice: 360000,
    unit: "Lọ 60 viên",
    shortDescription:
      "Bổ sung canxi, vitamin D3 và K2 giúp xương và răng chắc khỏe.",
    description: [
      "Canxi hữu cơ kết hợp D3 và K2 giúp tăng hấp thu canxi vào xương, phòng ngừa loãng xương ở người lớn tuổi và hỗ trợ phát triển chiều cao.",
    ],
    ingredients: "Calcium (dạng hữu cơ) 500mg, Vitamin D3 400IU, Vitamin K2 45mcg.",
    uses: [
      "Phòng ngừa loãng xương",
      "Hỗ trợ phát triển chiều cao",
      "Giảm đau nhức xương khớp",
    ],
    dosage: "1 viên/ngày sau bữa ăn.",
    prescription: false,
    tags: ["sale"],
    rating: 4.7,
    sold: 940,
  },
  {
    id: 9,
    slug: "khau-trang-y-te-4-lop",
    name: "Khẩu trang y tế kháng khuẩn 4 lớp",
    category: "thiet-bi-y-te",
    brand: "SafeGuard",
    origin: "Việt Nam",
    price: 45000,
    originalPrice: 60000,
    unit: "Hộp 50 cái",
    shortDescription:
      "Lọc bụi mịn, kháng khuẩn, thoáng khí, ôm khít khuôn mặt.",
    description: [
      "Khẩu trang y tế 4 lớp với lớp lọc kháng khuẩn giúp ngăn bụi mịn, vi khuẩn và giọt bắn hiệu quả.",
      "Chất liệu vải không dệt mềm mại, quai đeo co giãn êm tai.",
    ],
    uses: ["Bảo vệ hô hấp", "Ngăn bụi mịn PM2.5, giọt bắn"],
    prescription: false,
    tags: ["sale"],
    rating: 4.6,
    sold: 5600,
  },
  {
    id: 10,
    slug: "siro-ho-thao-duoc-be",
    name: "Siro ho thảo dược cho bé từ 6 tháng",
    category: "me-va-be",
    brand: "BioCare",
    origin: "Việt Nam",
    price: 78000,
    unit: "Chai 100ml",
    shortDescription:
      "Giảm ho, long đờm từ thảo dược tự nhiên, an toàn cho bé.",
    description: [
      "Siro ho thảo dược chiết xuất từ húng chanh, mật ong, quất giúp giảm ho, làm dịu cổ họng cho bé một cách tự nhiên.",
    ],
    ingredients: "Húng chanh, mật ong, quất, cát cánh.",
    uses: ["Giảm ho, long đờm", "Làm dịu cổ họng"],
    dosage: "Bé 6–12 tháng: 2.5ml x 2 lần/ngày. Trên 1 tuổi: 5ml x 2–3 lần/ngày.",
    prescription: false,
    tags: ["new"],
    rating: 4.7,
    sold: 670,
  },
  {
    id: 11,
    slug: "serum-vitamin-b5-phuc-hoi",
    name: "Serum Vitamin B5 phục hồi & cấp ẩm",
    category: "my-pham-duoc",
    brand: "DermaShield",
    origin: "Pháp",
    price: 189000,
    originalPrice: 230000,
    unit: "Chai 30ml",
    shortDescription:
      "Cấp ẩm sâu, phục hồi hàng rào bảo vệ da, làm dịu da kích ứng.",
    description: [
      "Serum Vitamin B5 (Panthenol) giúp cấp ẩm tức thì, phục hồi làn da khô, bong tróc và làm dịu da sau các liệu trình chăm sóc da.",
    ],
    ingredients: "Panthenol (B5) 5%, Hyaluronic Acid, chiết xuất rau má.",
    uses: ["Cấp ẩm, phục hồi da", "Làm dịu da kích ứng, mẩn đỏ"],
    dosage: "Thoa 2–3 giọt lên da sạch sáng và tối.",
    prescription: false,
    tags: ["hot", "sale"],
    rating: 4.8,
    sold: 1580,
  },
  {
    id: 12,
    slug: "vien-uong-collagen",
    name: "Viên uống Collagen tươi đẹp da",
    category: "cham-soc-sac-dep",
    brand: "NatureGold",
    origin: "Nhật Bản",
    price: 420000,
    originalPrice: 490000,
    unit: "Lọ 90 viên",
    shortDescription:
      "Bổ sung Collagen thủy phân giúp da căng mịn, giảm nếp nhăn.",
    description: [
      "Viên uống Collagen với công thức Collagen peptide thủy phân dễ hấp thu, kết hợp Vitamin C và Biotin giúp da căng bóng, tóc và móng chắc khỏe.",
    ],
    ingredients: "Collagen peptide 1000mg, Vitamin C, Biotin, Coenzyme Q10.",
    uses: ["Làm đẹp da, giảm nếp nhăn", "Hỗ trợ tóc và móng chắc khỏe"],
    dosage: "2 viên/ngày sau bữa ăn.",
    prescription: false,
    tags: ["hot"],
    rating: 4.7,
    sold: 1340,
  },
  {
    id: 13,
    slug: "thuoc-ho-bo-phe",
    name: "Thuốc ho bổ phế chỉ khái lộ",
    category: "thuoc",
    brand: "Pharmedic",
    origin: "Việt Nam",
    price: 42000,
    unit: "Chai 125ml",
    shortDescription:
      "Bổ phế, giảm ho, tiêu đờm, dùng cho ho gió, ho khan, ho có đờm.",
    description: [
      "Thuốc ho bổ phế từ các vị thuốc đông y cổ truyền giúp giảm nhanh triệu chứng ho, đau rát cổ họng, khản tiếng.",
    ],
    ingredients: "Bạch linh, cát cánh, tỳ bà diệp, bạc hà, cam thảo.",
    uses: ["Giảm ho gió, ho khan, ho có đờm", "Bổ phế, giảm đau họng"],
    dosage: "Người lớn: 15ml/lần x 3 lần/ngày.",
    notes: "Đọc kỹ hướng dẫn sử dụng trước khi dùng.",
    prescription: false,
    tags: [],
    rating: 4.5,
    sold: 810,
  },
  {
    id: 14,
    slug: "nhiet-ke-dien-tu",
    name: "Nhiệt kế điện tử đo trán hồng ngoại",
    category: "thiet-bi-y-te",
    brand: "Omron",
    origin: "Nhật Bản",
    price: 350000,
    originalPrice: 420000,
    unit: "Máy",
    shortDescription:
      "Đo thân nhiệt nhanh trong 1 giây, không tiếp xúc, an toàn cho bé.",
    description: [
      "Nhiệt kế hồng ngoại đo trán cho kết quả chính xác chỉ trong 1 giây mà không cần tiếp xúc, phù hợp đo cho trẻ nhỏ khi ngủ.",
    ],
    uses: ["Đo thân nhiệt nhanh, không tiếp xúc", "Cảnh báo sốt bằng đèn màu"],
    notes: "Bảo hành 12 tháng.",
    prescription: false,
    tags: ["new", "sale"],
    rating: 4.6,
    sold: 430,
  },
  {
    id: 15,
    slug: "vitamin-tong-hop-multi",
    name: "Vitamin tổng hợp Multivitamin cho người lớn",
    category: "vitamin-khoang-chat",
    brand: "NatureGold",
    origin: "Mỹ",
    price: 260000,
    unit: "Lọ 60 viên",
    shortDescription:
      "Bổ sung 13 vitamin và khoáng chất thiết yếu cho cơ thể mỗi ngày.",
    description: [
      "Viên uống Multivitamin cung cấp đầy đủ vitamin nhóm A, B, C, D, E và các khoáng chất giúp cơ thể khỏe mạnh, giảm mệt mỏi, tăng năng lượng.",
    ],
    ingredients: "Vitamin A, B1, B2, B6, B12, C, D3, E, kẽm, magie, sắt.",
    uses: ["Bổ sung vi chất hằng ngày", "Giảm mệt mỏi, tăng năng lượng"],
    dosage: "1 viên/ngày sau bữa ăn sáng.",
    prescription: false,
    tags: [],
    rating: 4.6,
    sold: 720,
  },
  {
    id: 16,
    slug: "sua-rua-mat-diu-nhe",
    name: "Sữa rửa mặt dịu nhẹ cho da nhạy cảm",
    category: "my-pham-duoc",
    brand: "DermaShield",
    origin: "Hàn Quốc",
    price: 135000,
    originalPrice: 160000,
    unit: "Tuýp 120ml",
    shortDescription:
      "Làm sạch dịu nhẹ, không gây khô căng, cân bằng độ pH cho da.",
    description: [
      "Sữa rửa mặt công thức dịu nhẹ, không chứa xà phòng và hương liệu, làm sạch bụi bẩn và dầu thừa mà vẫn giữ ẩm cho da.",
    ],
    ingredients: "Chiết xuất rau má, Ceramide, Glycerin.",
    uses: ["Làm sạch da nhẹ nhàng", "Phù hợp da nhạy cảm, da mụn"],
    dosage: "Rửa mặt 2 lần/ngày sáng và tối.",
    prescription: false,
    tags: ["sale"],
    rating: 4.7,
    sold: 1010,
  },
  {
    id: 17,
    slug: "keo-ngam-vitamin-c-be",
    name: "Kẹo ngậm Vitamin C hương cam cho bé",
    category: "me-va-be",
    brand: "BioCare",
    origin: "Việt Nam",
    price: 65000,
    unit: "Lọ 60 viên",
    shortDescription:
      "Bổ sung Vitamin C, tăng đề kháng, bé thích mê hương cam ngọt dịu.",
    description: [
      "Kẹo ngậm Vitamin C dạng viên nhai thơm ngon giúp bổ sung vitamin C, tăng cường sức đề kháng cho trẻ một cách nhẹ nhàng.",
    ],
    ingredients: "Vitamin C 100mg, hương cam tự nhiên.",
    uses: ["Tăng đề kháng cho bé", "Bổ sung vitamin C mỗi ngày"],
    dosage: "Bé trên 3 tuổi: 1–2 viên/ngày.",
    prescription: false,
    tags: ["new"],
    rating: 4.8,
    sold: 550,
  },
  {
    id: 18,
    slug: "dung-dich-ve-sinh-phu-nu",
    name: "Dung dịch vệ sinh phụ nữ dịu nhẹ",
    category: "cham-soc-ca-nhan",
    brand: "FreshCare",
    origin: "Việt Nam",
    price: 72000,
    unit: "Chai 200ml",
    shortDescription:
      "Làm sạch dịu nhẹ, cân bằng pH, ngăn ngừa vi khuẩn và mùi hôi.",
    description: [
      "Dung dịch vệ sinh với chiết xuất thiên nhiên giúp làm sạch nhẹ nhàng, duy trì cân bằng pH tự nhiên, mang lại cảm giác khô thoáng, tự tin.",
    ],
    ingredients: "Chiết xuất trà xanh, lá trầu không, acid lactic.",
    uses: ["Làm sạch, khử mùi", "Ngăn ngừa viêm nhiễm"],
    prescription: false,
    tags: [],
    rating: 4.6,
    sold: 690,
  },
  {
    id: 19,
    slug: "vien-uong-giam-can",
    name: "Viên uống hỗ trợ giảm cân từ thảo mộc",
    category: "cham-soc-sac-dep",
    brand: "NatureGold",
    origin: "Mỹ",
    price: 350000,
    originalPrice: 420000,
    unit: "Lọ 60 viên",
    shortDescription:
      "Hỗ trợ đốt mỡ, kiểm soát cảm giác thèm ăn từ chiết xuất thiên nhiên.",
    description: [
      "Viên uống hỗ trợ giảm cân với thành phần thảo mộc giúp thúc đẩy trao đổi chất, hỗ trợ đốt cháy mỡ thừa và kiểm soát cân nặng.",
    ],
    ingredients: "Chiết xuất trà xanh, Garcinia Cambogia, L-Carnitine.",
    uses: ["Hỗ trợ giảm mỡ", "Kiểm soát cảm giác thèm ăn"],
    dosage: "1 viên trước bữa ăn 30 phút, 2 lần/ngày.",
    notes: "Kết hợp chế độ ăn và tập luyện hợp lý. Không dùng cho phụ nữ có thai.",
    prescription: false,
    tags: ["sale"],
    rating: 4.3,
    sold: 480,
  },
  {
    id: 20,
    slug: "thuoc-nho-mat-natri-clorid",
    name: "Nước nhỏ mắt Natri Clorid 0.9%",
    category: "thuoc",
    brand: "Pharmedic",
    origin: "Việt Nam",
    price: 15000,
    unit: "Chai 10ml",
    shortDescription:
      "Làm sạch, rửa trôi bụi bẩn, giảm khô và mỏi mắt.",
    description: [
      "Nước nhỏ mắt Natri Clorid 0.9% giúp làm sạch mắt, rửa trôi bụi bẩn, giảm cảm giác khô rát, mỏi mắt do làm việc với máy tính.",
    ],
    ingredients: "Natri Clorid 0.9%.",
    uses: ["Làm sạch mắt, mũi", "Giảm khô, mỏi mắt"],
    dosage: "Nhỏ 1–2 giọt mỗi mắt, 3–4 lần/ngày.",
    prescription: false,
    tags: [],
    rating: 4.5,
    sold: 2100,
  },
  {
    id: 21,
    slug: "keo-ngam-ho-thao-moc",
    name: "Kẹo ngậm ho thảo mộc không đường",
    category: "thuc-pham-chuc-nang",
    brand: "MediPlus",
    origin: "Việt Nam",
    price: 28000,
    unit: "Gói 20 viên",
    shortDescription:
      "Làm dịu cổ họng, giảm ho, thơm mát từ thảo mộc, không đường.",
    description: [
      "Kẹo ngậm thảo mộc giúp làm dịu cổ họng, giảm ho, giảm khản tiếng, thích hợp cho người thường xuyên nói nhiều.",
    ],
    ingredients: "Bạc hà, gừng, cam thảo, mật ong.",
    uses: ["Làm dịu cổ họng", "Giảm ho, thơm miệng"],
    prescription: false,
    tags: [],
    rating: 4.4,
    sold: 930,
  },
  {
    id: 22,
    slug: "vien-sat-bo-mau-ba-bau",
    name: "Viên sắt bổ máu cho bà bầu",
    category: "me-va-be",
    brand: "BioCare",
    origin: "Pháp",
    price: 180000,
    originalPrice: 210000,
    unit: "Lọ 30 viên",
    shortDescription:
      "Bổ sung sắt và acid folic, phòng thiếu máu cho mẹ bầu.",
    description: [
      "Viên sắt kết hợp acid folic và vitamin B12 giúp phòng ngừa thiếu máu do thiếu sắt trong thai kỳ, hỗ trợ sự phát triển của thai nhi.",
    ],
    ingredients: "Sắt fumarat 60mg, Acid folic 400mcg, Vitamin B12.",
    uses: ["Phòng thiếu máu thai kỳ", "Hỗ trợ phát triển thai nhi"],
    dosage: "1 viên/ngày sau ăn, uống cùng nước cam để tăng hấp thu.",
    prescription: false,
    tags: ["hot"],
    rating: 4.8,
    sold: 1220,
  },
  {
    id: 23,
    slug: "gel-rua-tay-kho-khuan",
    name: "Gel rửa tay khô kháng khuẩn nhanh",
    category: "cham-soc-ca-nhan",
    brand: "SafeGuard",
    origin: "Việt Nam",
    price: 35000,
    unit: "Chai 250ml",
    shortDescription:
      "Diệt khuẩn nhanh không cần nước, giữ tay sạch khuẩn mọi lúc.",
    description: [
      "Gel rửa tay khô chứa cồn 70% giúp loại bỏ 99.9% vi khuẩn mà không cần rửa lại với nước, tiện lợi khi di chuyển.",
    ],
    ingredients: "Ethanol 70%, Glycerin dưỡng ẩm, tinh dầu.",
    uses: ["Diệt khuẩn tay nhanh", "Dưỡng ẩm, không khô da"],
    prescription: false,
    tags: [],
    rating: 4.5,
    sold: 1750,
  },
  {
    id: 24,
    slug: "may-xong-khi-dung",
    name: "Máy xông khí dung mũi họng cho bé",
    category: "thiet-bi-y-te",
    brand: "Omron",
    origin: "Nhật Bản",
    price: 720000,
    originalPrice: 850000,
    unit: "Máy",
    shortDescription:
      "Hỗ trợ điều trị các bệnh hô hấp, hạt sương mịn, êm ái cho bé.",
    description: [
      "Máy xông khí dung tạo hạt sương siêu mịn giúp thuốc thẩm thấu sâu vào đường hô hấp, hỗ trợ điều trị viêm mũi, viêm họng, hen suyễn.",
    ],
    uses: ["Hỗ trợ điều trị bệnh hô hấp", "Phù hợp cho cả trẻ em và người lớn"],
    notes: "Bảo hành chính hãng 24 tháng.",
    prescription: false,
    tags: ["new"],
    rating: 4.7,
    sold: 320,
  },
];

export interface Branch {
  id: number;
  name: string;
  address: string;
  phone: string;
  hours: string;
}

export const branches: Branch[] = [
  {
    id: 1,
    name: "Thiện Hạnh — Chi nhánh Quận 1",
    address: "123 Đường Sức Khỏe, P. An Bình, Quận 1, TP.HCM",
    phone: "0909 000 001",
    hours: "07:30 – 22:00",
  },
  {
    id: 2,
    name: "Thiện Hạnh — Chi nhánh Quận 3",
    address: "45 Nguyễn Đình Chiểu, P. Võ Thị Sáu, Quận 3, TP.HCM",
    phone: "0909 000 002",
    hours: "07:30 – 22:00",
  },
  {
    id: 3,
    name: "Thiện Hạnh — Chi nhánh Thủ Đức",
    address: "678 Võ Văn Ngân, P. Bình Thọ, TP. Thủ Đức, TP.HCM",
    phone: "0909 000 003",
    hours: "07:00 – 21:30",
  },
  {
    id: 4,
    name: "Thiện Hạnh — Chi nhánh Gò Vấp",
    address: "90 Quang Trung, P. 10, Quận Gò Vấp, TP.HCM",
    phone: "0909 000 004",
    hours: "07:30 – 22:00",
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
    title: "100% chính hãng",
    description: "Nguồn gốc rõ ràng, hóa đơn đầy đủ, cam kết hoàn tiền nếu phát hiện hàng giả.",
  },
  {
    icon: "UserRound",
    title: "Dược sĩ tư vấn tận tâm",
    description: "Đội ngũ dược sĩ đại học tư vấn miễn phí, đúng bệnh, đúng thuốc.",
  },
  {
    icon: "Truck",
    title: "Giao nhanh tận nơi",
    description: "Giao hàng nhanh trong khu vực nội thành, đặt qua Zalo hoặc hotline.",
  },
  {
    icon: "Wallet",
    title: "Giá tốt mỗi ngày",
    description: "Bình ổn giá, nhiều chương trình khuyến mãi và tích điểm thành viên.",
  },
];

// ——— Hàm truy vấn ———
export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: CategorySlug): Product[] {
  return products.filter((p) => p.category === category);
}

export function getFeaturedProducts(limit = 8): Product[] {
  return [...products]
    .filter((p) => p.tags.includes("hot"))
    .concat(products.filter((p) => !p.tags.includes("hot")))
    .slice(0, limit);
}

export function getRelatedProducts(product: Product, limit = 4): Product[] {
  return products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, limit);
}

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
