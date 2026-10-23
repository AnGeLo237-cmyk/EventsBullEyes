export default function HeroHeader({
  activeSlide,
  badge = "Plateforme PWA événementielle",
  className = "",
}) {
  return (
    <div className={className}>
      <div className="inline-flex items-center rounded-full border border-[var(--color-blue-light)]/25 bg-[var(--color-blue-light)]/12 px-3 py-1 text-[10px] font-extrabold uppercase tracking-[0.28em] text-[var(--color-blue-dark)] sm:text-[11px]">
        {badge}
      </div>

      <div className="mt-3 flex flex-wrap items-center gap-2">
        <span
          className="rounded-full px-3 py-1 text-[10px] font-extrabold uppercase tracking-[0.25em] text-white"
          style={{ backgroundColor: activeSlide.accent }}
          aria-live="polite"
        >
          {activeSlide.roleLabel}
        </span>

        <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[var(--color-gray-dark)] sm:text-[11px]">
          expérience locale
        </span>
      </div>

      <h1 className="mt-3 max-w-3xl text-2xl font-black tracking-tight text-[var(--color-black)] sm:text-3xl lg:text-4xl">
        Une plateforme locale pour{" "}
        <span style={{ color: activeSlide.accent }}>{activeSlide.keyword}</span>{" "}
        des événements cartographiés
        <span className="block">
          pensée pour{" "}
          <span style={{ color: activeSlide.accent }}>
            {activeSlide.roleLabel.toLowerCase()}
          </span>
          .
        </span>
      </h1>

      <p className="mt-2.5 max-w-2xl text-sm leading-6 text-[var(--color-gray-dark)] sm:text-[15px]">
        {activeSlide.subtitle}
      </p>
    </div>
  );
}