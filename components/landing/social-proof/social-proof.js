import SocialProofCard from "./social-proof-card";
import {
  socialProofStats,
  socialProofItems,
} from "./social-proof-data";

export default function SocialProof({ className = "" }) {
  return (
    <section
      id="social-proof"
      className={[
        "relative overflow-hidden py-8 sm:py-10 lg:py-12",
        className,
      ].join(" ")}
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(180deg,#ffffff_0%,#f8fbff_46%,#eef4ff_100%)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.08),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.9),transparent_28%)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(15,23,42,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.025)_1px,transparent_1px)] bg-[size:58px_58px] opacity-22" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center rounded-full border border-[var(--color-blue-light)]/25 bg-[var(--color-blue-light)]/12 px-3 py-1 text-[10px] font-extrabold uppercase tracking-[0.28em] text-[var(--color-blue-dark)] sm:text-[11px]">
            Preuve sociale
          </div>

          <h2 className="mt-3 text-2xl font-black tracking-tight text-[var(--color-black)] sm:text-3xl lg:text-4xl">
            Obtenir votre confiance est notre objectif.
          </h2>

          <p className="mt-2.5 text-sm leading-6 text-[var(--color-gray-dark)] sm:text-[15px]">
            Les avis de nos clients et les chiffres pour justifier notre crédibilité.
          </p>
        </div>

        <div className="mt-5 grid gap-3 sm:grid-cols-3">
          {socialProofStats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-[1.4rem] border border-[var(--color-gray-light)]/80 bg-[var(--color-white)]/95 p-4 shadow-sm"
            >
              <div className="text-2xl font-black tracking-tight text-[var(--color-black)] sm:text-3xl">
                {stat.value}
              </div>
              <div className="mt-1 text-[10px] font-bold uppercase tracking-[0.22em] text-[var(--color-gray-dark)]">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {socialProofItems.map((item) => (
            <SocialProofCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}