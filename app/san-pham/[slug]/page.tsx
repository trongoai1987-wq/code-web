import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  ShieldCheck,
  Truck,
  BadgeCheck,
  MapPin,
  Check,
  FileText,
} from "lucide-react";
import { Breadcrumb } from "@/components/Breadcrumb";
import { ProductThumb } from "@/components/ProductThumb";
import { ProductCard } from "@/components/ProductCard";
import { ZaloButton, CallButton } from "@/components/ContactButtons";
import { SectionHeading } from "@/components/Section";
import {
  products,
  categoryMap,
  getProductBySlug,
  getRelatedProducts,
  isSupplement,
} from "@/lib/data";
import { formatPrice } from "@/lib/format";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Không tìm thấy sản phẩm" };
  return {
    title: product.name,
    description: product.shortDescription,
    openGraph: {
      title: product.name,
      description: product.shortDescription,
    },
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const cat = categoryMap[product.category];
  const related = getRelatedProducts(product, 4);
  const supplement = isSupplement(product);
  // Thuốc kê đơn: chỉ tra cứu thông tin và hỏi dược sĩ, không mời đặt hàng.
  const canOrder = !product.prescription;

  const zaloMessage = canOrder
    ? `Xin chào Nhà thuốc Thiện Hạnh, tôi muốn đặt mua: ${product.name} (${product.unit}).`
    : `Xin chào Nhà thuốc Thiện Hạnh, tôi muốn hỏi dược sĩ về: ${product.name}.`;

  return (
    <>
      <Breadcrumb
        items={[
          { label: "Sản phẩm", href: "/san-pham/" },
          { label: cat.name, href: `/danh-muc/${cat.slug}/` },
          { label: product.name },
        ]}
      />

      <section className="container-x py-8">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Ảnh */}
          <div>
            <div className="relative overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-card">
              <div className="aspect-square">
                <ProductThumb product={product} />
              </div>
            </div>
          </div>

          {/* Thông tin */}
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-brand-600">
              {product.brand}
            </span>
            <h1 className="mt-1 text-2xl font-extrabold leading-snug text-slate-900 sm:text-3xl">
              {product.name}
            </h1>

            <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-slate-600">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="size-4 text-slate-400" aria-hidden="true" />
                {product.origin}
              </span>
            </div>

            {/* Giá */}
            <div className="mt-5 rounded-2xl bg-brand-50/70 p-5">
              <div className="flex flex-wrap items-end gap-3">
                {canOrder && product.price > 0 ? (
                  <span className="text-3xl font-extrabold text-accent-600">
                    {formatPrice(product.price)}
                  </span>
                ) : (
                  <span className="text-2xl font-extrabold text-brand-700">
                    Liên hệ dược sĩ
                  </span>
                )}
                <span className="pb-1 text-sm text-slate-500">
                  / {product.unit}
                </span>
              </div>
              {product.prescription && (
                <p className="mt-3 flex items-start gap-1.5 rounded-lg bg-amber-50 px-3 py-2 text-sm font-medium text-amber-800">
                  <FileText
                    className="mt-0.5 size-4 shrink-0"
                    aria-hidden="true"
                  />
                  Thuốc kê đơn — thông tin trên trang chỉ để tra cứu. Chỉ dùng
                  khi có chỉ định của bác sĩ. Vui lòng mang đơn thuốc đến nhà
                  thuốc.
                </p>
              )}
            </div>

            <p className="mt-5 text-slate-600">{product.shortDescription}</p>

            {/* Công dụng nhanh */}
            {product.uses && product.uses.length > 0 && (
              <ul className="mt-4 space-y-2">
                {product.uses.map((u) => (
                  <li
                    key={u}
                    className="flex items-start gap-2 text-sm text-slate-700"
                  >
                    <Check
                      className="mt-0.5 size-4 shrink-0 text-brand-600"
                      aria-hidden="true"
                    />
                    {u}
                  </li>
                ))}
              </ul>
            )}

            {/* Câu cảnh báo bắt buộc với thực phẩm chức năng */}
            {supplement && (
              <p className="mt-4 rounded-xl border border-amber-200 bg-amber-50 p-3 text-sm font-medium text-amber-900">
                Sản phẩm này không phải là thuốc và không có tác dụng thay thế
                thuốc chữa bệnh.
              </p>
            )}

            {/* CTA */}
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <ZaloButton
                message={zaloMessage}
                className="flex-1"
                label={canOrder ? "Đặt hàng qua Zalo" : "Hỏi dược sĩ qua Zalo"}
              />
              <CallButton className="flex-1" />
            </div>

            {/* Cam kết nhỏ */}
            <div className="mt-6 grid grid-cols-3 gap-3 border-t border-slate-100 pt-6 text-center">
              <MiniTrust icon={BadgeCheck} label="Nguồn gốc rõ ràng" />
              <MiniTrust icon={ShieldCheck} label="Dược sĩ tư vấn" />
              <MiniTrust icon={Truck} label="Đặt hàng qua Zalo" />
            </div>
          </div>
        </div>

        {/* Chi tiết mô tả */}
        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="text-xl font-extrabold text-slate-900">
              Thông tin sản phẩm
            </h2>
            <div className="mt-4 space-y-3 text-slate-600">
              {product.description.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            {product.ingredients && (
              <DetailBlock title="Thành phần">
                <p className="text-slate-600">{product.ingredients}</p>
              </DetailBlock>
            )}
            {product.dosage && (
              <DetailBlock title="Cách dùng">
                <p className="text-slate-600">{product.dosage}</p>
              </DetailBlock>
            )}
            {product.notes && (
              <DetailBlock title="Lưu ý">
                <p className="text-slate-600">{product.notes}</p>
              </DetailBlock>
            )}

            {(product.distributor || product.manufacturer) && (
              <DetailBlock title="Nhà sản xuất & phân phối">
                <div className="space-y-2 text-slate-600">
                  {product.distributor && (
                    <p>
                      <span className="font-medium text-slate-700">
                        Sản phẩm của:
                      </span>{" "}
                      {product.distributor}
                    </p>
                  )}
                  {product.manufacturer && (
                    <p>
                      <span className="font-medium text-slate-700">
                        Sản xuất tại:
                      </span>{" "}
                      {product.manufacturer}
                    </p>
                  )}
                </div>
              </DetailBlock>
            )}

            {product.infoImage && (
              <DetailBlock title="Thông tin từ nhà sản xuất">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={product.infoImage}
                  alt={product.infoImageAlt ?? product.name}
                  loading="lazy"
                  className="w-full rounded-2xl border border-slate-100"
                />
              </DetailBlock>
            )}
          </div>

          {/* Bảng thông số */}
          <aside>
            <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-card">
              <h3 className="mb-3 font-bold text-slate-800">Thông số</h3>
              <dl className="divide-y divide-slate-100 text-sm">
                <SpecRow label="Thương hiệu" value={product.brand} />
                <SpecRow label="Xuất xứ" value={product.origin} />
                <SpecRow label="Danh mục" value={cat.name} />
                <SpecRow label="Quy cách" value={product.unit} />
                <SpecRow
                  label="Loại"
                  value={product.prescription ? "Kê đơn" : "Không kê đơn"}
                />
              </dl>
            </div>
            <p className="mt-4 rounded-xl bg-slate-50 p-4 text-sm leading-relaxed text-slate-600">
              Thông tin sản phẩm chỉ mang tính tham khảo, không thay thế cho tư
              vấn y khoa. Vui lòng đọc kỹ hướng dẫn sử dụng và hỏi ý kiến dược sĩ
              trước khi dùng.
            </p>
          </aside>
        </div>

        {/* Sản phẩm liên quan */}
        {related.length > 0 && (
          <div className="mt-14">
            <SectionHeading
              title="Sản phẩm liên quan"
              subtitle={`Cùng danh mục ${cat.name}`}
            />
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </section>
    </>
  );
}

function MiniTrust({
  icon: IconCmp,
  label,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
}) {
  return (
    <div className="flex flex-col items-center gap-1.5">
      <span className="flex size-10 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
        <IconCmp className="size-5" />
      </span>
      <span className="text-xs font-medium text-slate-600">{label}</span>
    </div>
  );
}

function DetailBlock({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mt-6">
      <h3 className="mb-2 font-bold text-slate-800">{title}</h3>
      {children}
    </div>
  );
}

function SpecRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between gap-4 py-2.5">
      <dt className="text-slate-500">{label}</dt>
      <dd className="text-right font-medium text-slate-800">{value}</dd>
    </div>
  );
}
