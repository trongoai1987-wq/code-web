import type { Metadata } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingContact } from "@/components/FloatingContact";
import { site } from "@/lib/site";

const beVietnam = Be_Vietnam_Pro({
  variable: "--font-be-vietnam",
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.slogan}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "nhà thuốc",
    "nhà thuốc Thiện Hạnh",
    "thuốc chính hãng",
    "thực phẩm chức năng",
    "thiết bị y tế",
    "tư vấn dược sĩ",
  ],
  openGraph: {
    type: "website",
    locale: "vi_VN",
    siteName: site.name,
    title: `${site.name} — ${site.slogan}`,
    description: site.description,
    url: site.url,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Pharmacy",
    name: site.name,
    description: site.description,
    url: site.url,
    telephone: site.hotline,
    email: site.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.addressShort,
      addressLocality: site.addressLocality,
      addressRegion: site.addressRegion,
      addressCountry: "VN",
    },
    // Toạ độ GPS — giúp Google đặt nhà thuốc đúng vị trí trên bản đồ và xuất hiện
    // trong các tìm kiếm kiểu "nhà thuốc gần đây".
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.geo.lat,
      longitude: site.geo.lng,
    },
    hasMap: `https://www.google.com/maps/search/?api=1&query=${site.geo.lat},${site.geo.lng}`,
    // Ảnh mặt tiền thật, để Google có hình nhận diện cửa hàng.
    image: `${site.url}/nha-thuoc/mat-tien.jpg`,
    openingHours: site.openingHoursSchema,
    slogan: site.slogan,
    // Các trang chính thức khác của nhà thuốc. Google dùng "sameAs" để hiểu
    // website, Facebook và Zalo đều là cùng một cơ sở kinh doanh.
    sameAs: [site.social.facebook, site.social.zaloOA, site.social.youtube].filter(Boolean),
  };

  return (
    <html lang="vi" className={`${beVietnam.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-white text-slate-800">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingContact />
      </body>
    </html>
  );
}
