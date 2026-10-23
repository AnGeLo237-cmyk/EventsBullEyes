export default function PopularEventCard({ event, className = "" }) {
  if (!event) return null;

  return (
    <article
      className={[
        "group overflow-hidden rounded-[1.4rem] border border-white/10 bg-[#0b1527]/92 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(0,0,0,0.20)]",
        className,
      ].join(" ")}
    >
      <div
        className="relative h-28 bg-cover bg-center sm:h-30"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(5,10,20,0.05), rgba(5,10,20,0.44)), url(${event.imageSrc})`,
        }}
      >
        <div className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-[9px] font-extrabold uppercase tracking-[0.2em] text-[var(--color-blue-dark)] backdrop-blur-sm">
          {event.categoryLabel}
        </div>

        <div className="absolute bottom-3 right-3 rounded-full bg-black/25 px-2.5 py-1 text-[9px] font-bold uppercase tracking-wide text-white backdrop-blur-sm">
          {event.status}
        </div>
      </div>

      <div className="p-3.5">
        <h3 className="text-sm font-black tracking-tight text-white sm:text-[15px]">
          {event.title}
        </h3>

        <p className="mt-1 text-[12px] leading-5 text-white/72">
          {event.city} • {event.region}
        </p>

        <div className="mt-3 flex items-center justify-between gap-3">
          <span className="text-[11px] font-semibold text-white/70">
            {event.date}
          </span>

          <span className="rounded-full bg-[var(--color-blue-light)]/16 px-2.5 py-1 text-[10px] font-bold text-white">
            {event.attendees}+
          </span>
        </div>
      </div>
    </article>
  );
}