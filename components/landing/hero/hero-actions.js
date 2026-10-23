import Link from "next/link";
import { ArrowRight, MapPinned } from "lucide-react";

export default function HeroActions({
  activeSlide,
  className = "",
}) {
  return (
    <div className={className}>
      <div className="flex flex-wrap gap-3">
        <Link
          href={activeSlide.primaryHref}
          className="inline-flex h-10 items-center gap-2 rounded-xl bg-[var(--color-blue-medium)] px-4.5 text-[12px] font-extrabold uppercase tracking-wide text-[var(--color-white)] transition-all duration-200 hover:bg-[var(--color-blue-dark)] sm:h-11 sm:px-5"
        >
          <MapPinned size={16} />
          {activeSlide.primaryLabel}
        </Link>

        <Link
          href={activeSlide.secondaryHref}
          className="inline-flex h-10 items-center gap-2 rounded-xl border border-[var(--color-gray-medium)]/35 bg-[var(--color-white)]/72 px-4.5 text-[12px] font-extrabold uppercase tracking-wide text-[var(--color-black)] transition-all duration-200 hover:border-[var(--color-blue-medium)]/35 hover:bg-[var(--color-white)] sm:h-11 sm:px-5"
        >
          {activeSlide.secondaryLabel}
          <ArrowRight size={15} />
        </Link>
      </div>
    </div>
  );
}