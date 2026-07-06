import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Xuất trang tĩnh (HTML/CSS/JS) — deploy được lên Vercel, Hostinger, Mắt Bão...
  output: "export",
  // Static export không dùng bộ tối ưu ảnh của Next => tắt để build ảnh thường.
  images: { unoptimized: true },
  // Mỗi route là một thư mục có index.html (URL kết thúc bằng "/").
  trailingSlash: true,
};

export default nextConfig;
