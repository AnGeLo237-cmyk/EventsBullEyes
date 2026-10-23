export default function DemoProductHighlights({
  stats = [],
  bullets = [],
  className = "",
}) {
  return (
    <div className={className}>
      <div className="grid gap-3 sm:grid-cols-3">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-2xl border border-white/12 bg-white/6 px-4 py-3 shadow-sm"
          >
            <div className="text-lg font-black text-white">
              {stat.value}
            </div>
            <div className="mt-1 text-[10px] font-bold uppercase tracking-[0.2em] text-white/55">
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {bullets.map((item) => (
          <span
            key={item}
            className="rounded-full border border-white/12 bg-white/6 px-3 py-1 text-[10px] font-bold text-white/75"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}