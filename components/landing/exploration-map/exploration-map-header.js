export default function ExplorationMapHeader({
  badge = "Exploration de la Carte",
  title = "Explorez les événements du Cameroun",
  subtitle = "Une vue globale et stylisée pour découvrir les événements par ville, région et catégorie.",
  className = "",
}) {
  return (
    <div className={className}>
      <div className="inline-flex items-center rounded-full border border-[var(--color-blue-light)]/25 bg-[var(--color-blue-light)]/10 px-3 py-1 text-[10px] font-extrabold uppercase tracking-[0.3em] text-[var(--color-blue-light)] sm:text-[11px]">
        {badge}
      </div>

      <h2 className="mt-3 max-w-3xl text-2xl font-black tracking-tight text-[var(--color-white)] sm:text-3xl lg:text-4xl">
        {title}
      </h2>

      <p className="mt-2 max-w-2xl text-sm leading-6 text-[var(--color-white)]/80 sm:text-[15px]">
        {subtitle}
      </p>
    </div>
  );
}