import type { Metadata } from "next";
import { CalendarCheck, ReceiptText, ShieldAlert } from "lucide-react";
import { Breadcrumb } from "@/components/Breadcrumb";
import { ZaloButton, CallButton } from "@/components/ContactButtons";
import { site, canonical } from "@/lib/site";

export const metadata: Metadata = {
  title: "Chính sách đổi trả & bảo hành",
  description: `Chính sách đổi trả, hoàn tiền và bảo hành tại ${site.name}: đổi sản phẩm mới hoặc hoàn tiền 100% trong 30 ngày khi lỗi do nhà sản xuất.`,
  alternates: { canonical: canonical("/chinh-sach-doi-tra/") },
};

/**
 * NỘI DUNG CHÍNH SÁCH — sửa trực tiếp ở đây khi nhà thuốc thay đổi quy định.
 * Nhớ sửa luôn phần "Đổi trả trong 30 ngày" trong `commitments` (lib/data.ts)
 * để trang chủ và trang này không nói khác nhau.
 */
const ngayApDung = "05/11/2026";

const nhomSanPham = [
  {
    ten: "1) Thuốc",
    mo: null,
  },
  { ten: "2) Thực phẩm chức năng", mo: null },
  {
    ten: "3) Thiết bị y tế",
    mo: "bộ kit test, dung dịch xịt mũi, khẩu trang, vớ y khoa…",
  },
  {
    ten: "4) Hóa dược mỹ phẩm",
    mo: "chăm sóc sức khỏe, sắc đẹp",
  },
];

export default function ReturnPolicyPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Chính sách đổi trả" }]} />

      <section className="border-b border-slate-100 bg-gradient-to-br from-brand-50 to-white">
        <div className="container-x py-10">
          <h1 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
            Chính sách đổi trả &amp; bảo hành
          </h1>
          <p className="mt-2 text-sm text-slate-600">
            Áp dụng tại {site.name} từ ngày {ngayApDung}.
          </p>
        </div>
      </section>

      <section className="container-x py-10">
        {/* Tóm tắt nhanh */}
        <div className="grid gap-4 sm:grid-cols-3">
          <SummaryCard
            icon={CalendarCheck}
            title="30 ngày"
            text="Đổi sản phẩm mới hoặc hoàn tiền 100% khi lỗi do nhà sản xuất."
          />
          <SummaryCard
            icon={ReceiptText}
            title="Giữ hóa đơn"
            text="Mang hóa đơn/biên nhận, hoặc đọc số điện thoại đã dùng khi mua hàng."
          />
          <SummaryCard
            icon={ShieldAlert}
            title="Lỗi nhà sản xuất"
            text="Không áp dụng cho hư hỏng do người sử dụng gây ra."
          />
        </div>

        {/* Nhóm 1–4 */}
        <PolicyBlock title="Thuốc, thực phẩm chức năng, thiết bị y tế, hóa dược mỹ phẩm">
          <div className="mb-4 flex flex-wrap gap-2">
            {nhomSanPham.map((n) => (
              <span
                key={n.ten}
                className="rounded-xl bg-brand-50 px-3 py-1.5 text-sm font-medium text-brand-800"
              >
                {n.ten}
                {n.mo && (
                  <span className="font-normal text-brand-700"> ({n.mo})</span>
                )}
              </span>
            ))}
          </div>

          <p className="font-bold text-slate-900">
            Đổi sản phẩm mới hoặc hoàn tiền 100% trong 30 ngày
          </p>
          <p className="mt-1 text-slate-600">
            Áp dụng cho trường hợp lỗi phát sinh do nhà sản xuất.
          </p>

          <ul className="mt-4 space-y-2 text-slate-600">
            <Bullet>
              Không áp dụng cho mặt hàng trữ lạnh và hàng tiêm chích.
            </Bullet>
            <Bullet>
              Sản phẩm cận hạn sử dụng: không đổi sản phẩm mới, chỉ áp dụng hoàn
              tiền 100% giá trị hóa đơn.
            </Bullet>
          </ul>

          <ConditionBox>
            Hóa đơn / biên nhận của nhà thuốc, hoặc số điện thoại đã dùng khi
            mua hàng.
          </ConditionBox>
        </PolicyBlock>

        {/* Nhóm 5 */}
        <PolicyBlock title="Máy y khoa">
          <p className="font-bold text-slate-900">
            1. Một đổi một trong 30 ngày với sản phẩm lỗi do nhà sản xuất
          </p>
          <p className="mt-1 text-slate-600">
            Trường hợp hết sản phẩm để đổi, nhà thuốc quy đổi ra e-voucher có
            giá trị bằng 100% giá trị hóa đơn. E-voucher không quy đổi thành
            tiền mặt và có giá trị trong 1 tháng.
          </p>

          <p className="mt-5 font-bold text-slate-900">
            2. Cam kết thời gian bảo hành 15 ngày
          </p>
          <ul className="mt-2 space-y-2 text-slate-600">
            <Bullet>
              Sản phẩm đem đi bảo hành được hoàn tất trong 15 ngày.
            </Bullet>
            <Bullet>
              Nếu nhà thuốc vi phạm cam kết này, khách hàng được tặng e-voucher
              trị giá 20% giá trị hóa đơn (tối đa 200.000đ), không quy đổi thành
              tiền mặt, có giá trị trong 1 tháng.
            </Bullet>
            <Bullet>
              Thời gian bảo hành được kéo dài thêm 15 ngày tiếp theo. Đến ngày
              thứ 30 mà khách hàng vẫn chưa nhận được máy, nhà thuốc nhập trả và
              hoàn tiền, trừ 20% phí sử dụng.
            </Bullet>
          </ul>

          <ConditionBox>
            <span className="block">
              • Lỗi do nhà sản xuất, không áp dụng với lỗi do người sử dụng.
            </span>
            <span className="mt-1 block">
              • Sản phẩm đáp ứng đủ điều kiện và còn thời gian bảo hành của
              hãng.
            </span>
          </ConditionBox>
        </PolicyBlock>

        {/* Liên hệ */}
        <div className="mt-10 rounded-3xl bg-brand-700 px-6 py-8 text-center text-white sm:px-10">
          <h2 className="text-xl font-extrabold sm:text-2xl">
            Cần đổi trả hoặc bảo hành?
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-brand-50/90">
            Gọi hoặc nhắn Zalo cho dược sĩ, mang theo sản phẩm và hóa đơn đến
            nhà thuốc tại {site.address}.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <ZaloButton
              variant="accent"
              label="Nhắn Zalo"
              message="Xin chào Nhà thuốc Thiện Hạnh, tôi cần hỗ trợ đổi trả sản phẩm."
            />
            <CallButton variant="outlineWhite" />
          </div>
        </div>
      </section>
    </>
  );
}

function SummaryCard({
  icon: IconCmp,
  title,
  text,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-card">
      <span className="flex size-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 text-white">
        <IconCmp className="size-6" />
      </span>
      <p className="mt-3 font-bold text-slate-900">{title}</p>
      <p className="mt-1 text-sm leading-relaxed text-slate-600">{text}</p>
    </div>
  );
}

function PolicyBlock({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mt-6 overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-card">
      <h2 className="border-b border-slate-100 bg-slate-50/70 px-5 py-4 text-lg font-extrabold text-slate-900 sm:px-6">
        {title}
      </h2>
      <div className="px-5 py-5 sm:px-6 sm:py-6">{children}</div>
    </div>
  );
}

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-2.5">
      <span
        aria-hidden="true"
        className="mt-2 size-1.5 shrink-0 rounded-full bg-brand-500"
      />
      <span>{children}</span>
    </li>
  );
}

function ConditionBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-5 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
      <p className="mb-1 font-bold">Điều kiện đổi trả</p>
      {children}
    </div>
  );
}
