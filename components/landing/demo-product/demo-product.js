"use client";

import DemoProductPreview from "./demo-product-preview";
import DemoProductHighlights from "./demo-product-highlights";
import { demoProductRoles } from "./demo-product-data";

export default function DemoProduct({ className = "" }) {
  return (
    <section
      id="demo-product"
      className={[
        "relative overflow-hidden py-8 sm:py-10 lg:py-12",
        className,
      ].join(" ")}
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(180deg,#050505_0%,#0b0b0b_52%,#111111_100%)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.14),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.05),transparent_30%)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:58px_58px] opacity-15" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center rounded-full border border-white/14 bg-white/8 px-3 py-1 text-[10px] font-extrabold uppercase tracking-[0.28em] text-white sm:text-[11px]">
            Démo produit
          </div>

          <h2 className="mt-3 text-2xl font-black tracking-tight text-white sm:text-3xl lg:text-4xl">
            Selon chaque rôle, des démonstration vidéos claires.
          </h2>

          <p className="mt-2.5 text-sm leading-6 text-white/78 sm:text-[15px]">
            Observez les différents types de parcours de nos utilisateurs.
          </p>
        </div>

        <div className="mt-5 grid gap-5 lg:grid-cols-[minmax(0,1.14fr)_minmax(280px,0.86fr)] lg:items-start">
          <DemoProductPreview />

          <div className="space-y-4">
            <div className="rounded-[2rem] border border-white/10 bg-white/6 p-4 shadow-sm backdrop-blur-sm">
              <p className="text-[10px] font-extrabold uppercase tracking-[0.24em] text-white/55">
                Ce que montre la démo
              </p>

              <div className="mt-3 space-y-3">
                {demoProductRoles.map((role) => (
                  <div
                    key={role.id}
                    className="rounded-2xl border border-white/10 bg-white/6 p-3"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <div className="text-sm font-black text-white">
                        {role.label}
                      </div>
                      <div
                        className="rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-white"
                        style={{ backgroundColor: role.accent }}
                      >
                        {role.duration}
                      </div>
                    </div>
                    <p className="mt-2 text-[12px] leading-5 text-white/72">
                      {role.subtitle}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <DemoProductHighlights
              stats={[
                { label: "Rôles", value: "3" },
                { label: "Vidéos", value: "3" },
                { label: "Démos", value: "3" },
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  );
}