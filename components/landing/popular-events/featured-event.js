export default function FeaturedEvent({ event, className = "" }) {
  if (!event) return null;

  return (
    <article
      className={[
        "relative overflow-hidden rounded-[1.75rem] border border-white/12 bg-[#0b1527]/95 shadow-[0_18px_50px_rgba(0,0,0,0.22)]",
        className,
      ].join(" ")}
    >
      <div className="grid gap-0 md:grid-cols-[1.12fr_0.88fr]">
        <div
          className="relative min-h-[190px] bg-cover bg-center sm:min-h-[230px] md:min-h-[270px]"
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(5,10,20,0.12), rgba(5,10,20,0.52)), url(${event.imageSrc})`,
          }}
        >
          <div className="absolute left-3 top-3 inline-flex items-center rounded-full border border-white/15 bg-white/90 px-3 py-1 text-[10px] font-extrabold uppercase tracking-[0.22em] text-[var(--color-blue-dark)] backdrop-blur-sm">
            Événement vedette
          </div>

          <div className="absolute bottom-3 left-3 right-3 rounded-2xl border border-white/15 bg-black/24 p-3 text-white backdrop-blur-md sm:p-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-[var(--color-blue-light)] px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-[var(--color-black)]">
                {event.categoryLabel}
              </span>
              <span className="rounded-full bg-white/15 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-white">
                {event.status}
              </span>
            </div>

            <h3 className="mt-2.5 text-lg font-black tracking-tight sm:text-2xl">
              {event.title}
            </h3>

            <p className="mt-1.5 text-sm leading-6 text-white/84">
              {event.summary}
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-between p-3.5 sm:p-4">
          <div>
            <p className="text-[10px] font-extrabold uppercase tracking-[0.24em] text-white/55">
              Vue rapide
            </p>

            <div className="mt-3 grid gap-2.5">
              <div className="rounded-2xl border border-white/10 bg-white/6 px-3 py-2.5">
                <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/55">
                  Ville
                </div>
                <div className="mt-1 text-sm font-black text-white">
                  {event.city}
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/6 px-3 py-2.5">
                <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/55">
                  Région
                </div>
                <div className="mt-1 text-sm font-black text-white">
                  {event.region}
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/6 px-3 py-2.5">
                <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/55">
                  Participants
                </div>
                <div className="mt-1 text-sm font-black text-white">
                  {event.attendees}+
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 rounded-2xl border border-[var(--color-blue-light)]/18 bg-[var(--color-blue-light)]/10 px-3.5 py-3">
            <p className="text-[10px] font-extrabold uppercase tracking-[0.24em] text-[var(--color-blue-light)]">
              Date
            </p>
            <p className="mt-1 text-sm font-bold text-white">
              {event.date}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}