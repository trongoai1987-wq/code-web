import Link from "next/link";
import { Home, Search } from "lucide-react";

export default function NotFound() {
  return (
    <section className="container-x flex min-h-[60vh] flex-col items-center justify-center py-16 text-center">
      <p className="text-7xl font-extrabold text-brand-600">404</p>
      <h1 className="mt-4 text-2xl font-extrabold text-slate-900">
        Không tìm thấy trang
      </h1>
      <p className="mt-2 max-w-md text-slate-500">
        Trang bạn tìm có thể đã được di chuyển hoặc không tồn tại. Hãy quay về
        trang chủ hoặc tra cứu sản phẩm.
      </p>
      <div className="mt-6 flex flex-wrap justify-center gap-3">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-xl bg-brand-600 px-5 py-3 font-semibold text-white transition-colors hover:bg-brand-700"
        >
          <Home className="size-5" aria-hidden="true" />
          Về trang chủ
        </Link>
        <Link
          href="/san-pham/"
          className="inline-flex items-center gap-2 rounded-xl border-2 border-brand-600 px-5 py-3 font-semibold text-brand-700 transition-colors hover:bg-brand-50"
        >
          <Search className="size-5" aria-hidden="true" />
          Tra cứu sản phẩm
        </Link>
      </div>
    </section>
  );
}
