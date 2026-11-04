import { Suspense } from "react";
import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
import { ProductBrowser } from "@/components/ProductBrowser";
import { products } from "@/lib/data";

export const metadata: Metadata = {
  title: "Tất cả sản phẩm",
  description:
    "Tra cứu toàn bộ sản phẩm thuốc, thực phẩm chức năng, vitamin, mỹ phẩm dược và thiết bị y tế chính hãng tại Nhà Thuốc Thiện Hạnh.",
};

export default function ProductsPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Sản phẩm" }]} />
      <section className="container-x py-8">
        <div className="mb-6">
          <h1 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
            Tất cả sản phẩm
          </h1>
          <p className="mt-1 text-sm text-slate-500">
            {products.length > 0
              ? "Chọn danh mục, tìm kiếm và sắp xếp để tìm sản phẩm phù hợp với bạn."
              : "Danh sách sản phẩm đang được nhà thuốc cập nhật lên website."}
          </p>
        </div>
        <Suspense fallback={<BrowserFallback />}>
          <ProductBrowser />
        </Suspense>
      </section>
    </>
  );
}

function BrowserFallback() {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
      {Array.from({ length: 8 }).map((_, i) => (
        <div
          key={i}
          className="h-72 animate-pulse rounded-2xl border border-slate-100 bg-slate-50"
        />
      ))}
    </div>
  );
}
