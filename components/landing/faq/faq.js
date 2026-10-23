"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, HelpCircle } from "lucide-react";
import FaqItem from "./faq-item";
import { faqItems } from "./faq-data";

export default function FAQ({ className = "" }) {
  const [openId, setOpenId] = useState(faqItems[0]?.id ?? null);

  const toggleItem = (id) => {
    setOpenId((current) => (current === id ? null : id));
  };

  return (
    <section
      id="faq"
      className={[
        "relative overflow-hidden py-8 sm:py-10 lg:py-12",
        className,
      ].join(" ")}
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(180deg,#081120_0%,#0d1a2e_48%,#09111f_100%)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.16),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.05),transparent_28%)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:58px_58px] opacity-18" />

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center rounded-full border border-white/14 bg-white/10 px-3 py-1 text-[10px] font-extrabold uppercase tracking-[0.28em] text-white sm:text-[11px]">
            FAQ
          </div>

          <h2 className="mt-3 text-2xl font-black tracking-tight text-white sm:text-3xl lg:text-4xl">
            Tout ce que vous devez savoir sur notre plateforme.
          </h2>

          <p className="mt-2.5 text-sm leading-6 text-white/78 sm:text-[15px]">
            Des réponses courtes à vos questions récurrentes.
          </p>
        </div>

        <div className="mt-5 grid gap-3">
          {faqItems.map((item, index) => (
            <div
              key={item.id}
              className="motion-safe:animate-[fadeIn_0.35s_ease-out] [animation-fill-mode:both]"
              style={{ animationDelay: `${index * 45}ms` }}
            >
              <FaqItem
                item={item}
                isOpen={openId === item.id}
                onToggle={() => toggleItem(item.id)}
              />
            </div>
          ))}
        </div>

        <div className="mt-5 rounded-[1.5rem] border border-white/10 bg-white/6 p-4 shadow-[0_12px_28px_rgba(0,0,0,0.14)] backdrop-blur-sm sm:p-5">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-3">
              <span className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/8 text-white">
                <HelpCircle size={18} />
              </span>

              <div>
                <p className="text-[10px] font-extrabold uppercase tracking-[0.24em] text-white/55">
                  Encore une hésitation ?
                </p>
                <p className="mt-1 text-sm font-semibold text-white">
                  Passe à la suite et profite d'une experience unique.
                </p>
              </div>
            </div>

            <Link
              href="#final-cta"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-[var(--color-blue-light)] px-5 text-[12px] font-extrabold uppercase tracking-wide text-[var(--color-black)] transition-colors duration-200 hover:bg-white"
            >
                Explorer l'application
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(6px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}