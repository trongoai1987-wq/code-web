import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function SectionHeading({
  title,
  subtitle,
  href,
  linkLabel = "Xem tất cả",
}: {
  title: string;
  subtitle?: string;
  href?: string;
  linkLabel?: string;
}) {
  return (
    <div className="mb-6 flex items-end justify-between gap-4">
      <div>
        <h2 className="text-xl font-extrabold text-slate-900 sm:text-2xl">{title}</h2>
        {subtitle && <p className="mt-1 text-sm text-slate-500">{subtitle}</p>}
      </div>
      {href && (
        <Link
          href={href}
          className="inline-flex shrink-0 items-center gap-1 text-sm font-semibold text-brand-700 hover:text-brand-800"
        >
          {linkLabel}
          <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      )}
    </div>
  );
}
