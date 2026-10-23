"use client";

import Link from "next/link";
import { ArrowRight, MapPinned, Sparkles, Download } from "lucide-react";
import { finalCtaData } from "./final-cta-data";

export default function FinalCTA({ className = "" }) {
  return (
    <section
      id="final-cta"
      className={[
        "relative overflow-hidden py-8 sm:py-10 lg:py-12",
        className,
      ].join(" ")}
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(180deg,#050505_0%,#0b0b0b_52%,#111111_100%)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.14),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.05),transparent_30%)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:58px_58px] opacity-15" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[1.8rem] border border-white/10 bg-white/6 p-5 shadow-[0_18px_48px_rgba(0,0,0,0.45)] backdrop-blur-sm sm:p-6 lg:p-8">
          <div className="pointer-events-none absolute -left-14 top-8 h-36 w-36 rounded-full bg-[var(--color-blue-light)]/12 blur-3xl motion-safe:animate-pulse" />
          <div className="pointer-events-none absolute -bottom-10 right-0 h-32 w-32 rounded-full bg-white/8 blur-3xl motion-safe:animate-pulse" />

          <div className="relative mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center rounded-full border border-white/14 bg-white/10 px-3 py-1 text-[10px] font-extrabold uppercase tracking-[0.28em] text-white sm:text-[11px]">
              {finalCtaData.badge}
            </div>

            <h2 className="mt-4 text-2xl font-black tracking-tight text-white sm:text-3xl lg:text-5xl">
              {finalCtaData.title}
            </h2>

            <p className="mx-auto mt-3 max-w-3xl text-sm leading-6 text-white/78 sm:text-[15px]">
              {finalCtaData.subtitle}
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center">
              <Link
                href={finalCtaData.primaryAction.href}
                className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-[var(--color-blue-light)] px-5 text-[12px] font-extrabold uppercase tracking-wide text-[var(--color-black)] transition-all duration-200 hover:bg-white"
              >
                <MapPinned size={16} />
                {finalCtaData.primaryAction.label}
              </Link>

              <Link
                href={finalCtaData.secondaryAction.href}
                className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-white/14 bg-white/8 px-5 text-[12px] font-extrabold uppercase tracking-wide text-white transition-all duration-200 hover:bg-white/12"
              >
                {finalCtaData.secondaryAction.label}
                <ArrowRight size={15} />
              </Link>

              <Link
                href={finalCtaData.tertiaryAction.href}
                className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-white/12 bg-white/6 px-5 text-[12px] font-extrabold uppercase tracking-wide text-white transition-all duration-200 hover:border-white/18 hover:bg-white/10"
              >
                <Download size={15} />
                {finalCtaData.tertiaryAction.label}
              </Link>
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
              {finalCtaData.indicators.map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/8 px-3 py-1.5 text-[10px] font-semibold text-white/78"
                >
                  <Sparkles size={12} className="text-[var(--color-blue-light)]" />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}