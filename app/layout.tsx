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
      streetAddress: site.address,
      addressCountry: "VN",
    },
    openingHours: "Mo-Su 07:30-22:00",
    slogan: site.slogan,
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
