export default function SocialProofCard({
  item,
  className = "",
}) {
  if (!item) return null;

  return (
    <article
      className={[
        "rounded-[1.5rem] border border-[var(--color-gray-light)]/80 bg-[var(--color-white)]/92 p-4 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_14px_30px_rgba(15,23,42,0.10)]",
        className,
      ].join(" ")}
      style={{
        boxShadow: `0 14px 30px ${item.accent === "var(--color-gray-dark)" ? "rgba(75,85,99,0.08)" : "rgba(59,130,246,0.08)"}`,
      }}
    >
      <div className="flex items-center justify-between gap-3">
        <span
          className="rounded-full px-3 py-1 text-[10px] font-extrabold uppercase tracking-[0.24em] text-white"
          style={{ backgroundColor: item.accent }}
        >
          {item.type}
        </span>

        <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[var(--color-gray-dark)]">
          {item.author}
        </span>
      </div>

      <h3 className="mt-3 text-base font-black tracking-tight text-[var(--color-black)]">
        {item.title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-[var(--color-gray-dark)]">
        {item.text}
      </p>
    </article>
  );
}