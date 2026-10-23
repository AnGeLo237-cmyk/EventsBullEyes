export default function ExplorationMapFilters({
  filters = [],
  activeFilter = "all",
  onFilterChange,
  totalEvents = 0,
  className = "",
}) {
  return (
    <div
      className={[
        "rounded-2xl border border-[var(--color-white)]/10 bg-[#12213a]/95 p-3 shadow-sm backdrop-blur-sm sm:p-4",
        className,
      ].join(" ")}
    >
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-[10px] font-extrabold uppercase tracking-[0.28em] text-[var(--color-white)]/55">
            Filtres
          </p>
          <p className="mt-1 text-sm font-semibold text-[var(--color-white)]/85">
            {totalEvents} événement{totalEvents > 1 ? "s" : ""} affiché
            {totalEvents > 1 ? "s" : ""}
          </p>
        </div>

        <div className="rounded-full border border-[var(--color-blue-light)]/20 bg-[var(--color-blue-light)]/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-[var(--color-blue-light)] sm:text-[11px]">
          Vue globale
        </div>
      </div>

      <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
        {filters.map((filter) => {
          const isActive = filter.key === activeFilter;

          return (
            <button
              key={filter.key}
              type="button"
              onClick={() => onFilterChange?.(filter.key)}
              aria-pressed={isActive}
              className={[
                "shrink-0 rounded-full border px-3 py-2 text-[11px] font-extrabold uppercase tracking-wide transition-all duration-200 sm:px-4",
                isActive
                  ? "border-[var(--color-blue-light)] bg-[var(--color-blue-light)] text-[var(--color-black)]"
                  : "border-[var(--color-white)]/10 bg-[var(--color-white)]/5 text-[var(--color-white)]/82 hover:border-[var(--color-blue-light)]/30 hover:bg-[var(--color-blue-dark)]/45 hover:text-[var(--color-white)]",
              ].join(" ")}
            >
              {filter.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}