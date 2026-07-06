import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

export function Breadcrumb({
  items,
}: {
  items: Array<{ label: string; href?: string }>;
}) {
  return (
    <nav aria-label="Breadcrumb" className="border-b border-slate-100 bg-slate-50">
      <ol className="container-x flex flex-wrap items-center gap-1.5 py-3 text-sm text-slate-500">
        <li>
          <Link href="/" className="inline-flex items-center gap-1 hover:text-brand-700">
            <Home className="size-4" aria-hidden="true" />
            <span className="sr-only sm:not-sr-only">Trang chủ</span>
          </Link>
        </li>
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-1.5">
            <ChevronRight className="size-4 text-slate-300" aria-hidden="true" />
            {item.href ? (
              <Link href={item.href} className="hover:text-brand-700">
                {item.label}
              </Link>
            ) : (
              <span className="font-medium text-slate-700">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
