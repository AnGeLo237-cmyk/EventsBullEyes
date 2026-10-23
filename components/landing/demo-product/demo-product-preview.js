"use client";

import { useMemo, useState } from "react";
import { demoProductRoles } from "./demo-product-data";
import { Play, Video } from "lucide-react";

export default function DemoProductPreview({ className = "" }) {
  const [activeRoleId, setActiveRoleId] = useState(demoProductRoles[0].id);

  const activeRole = useMemo(
    () =>
      demoProductRoles.find((role) => role.id === activeRoleId) ??
      demoProductRoles[0],
    [activeRoleId]
  );

  return (
    <div
      className={[
        "rounded-[2rem] border border-white/12 bg-[#090909] p-3 shadow-[0_18px_48px_rgba(0,0,0,0.45)] sm:p-4",
        className,
      ].join(" ")}
    >
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-[10px] font-extrabold uppercase tracking-[0.24em] text-white/55">
            Démonstration vidéo
          </p>
          <h3 className="mt-1 text-lg font-black tracking-tight text-white sm:text-xl">
            {activeRole.previewLabel}
          </h3>
        </div>

        <div
          className="rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-white"
          style={{ backgroundColor: activeRole.accent }}
        >
          {activeRole.duration}
        </div>
      </div>

      <div className="mt-4 flex gap-2 overflow-x-auto pb-1">
        {demoProductRoles.map((role) => {
          const isActive = role.id === activeRoleId;

          return (
            <button
              key={role.id}
              type="button"
              onClick={() => setActiveRoleId(role.id)}
              className={[
                "shrink-0 rounded-full border px-3.5 py-2 text-[11px] font-extrabold uppercase tracking-wide transition-all duration-200",
                isActive
                  ? "border-transparent text-white"
                  : "border-white/12 bg-white/6 text-white/72 hover:border-white/22 hover:bg-white/10 hover:text-white",
              ].join(" ")}
              style={{
                backgroundColor: isActive ? role.accent : undefined,
              }}
            >
              {role.label}
            </button>
          );
        })}
      </div>

      <div className="mt-4 overflow-hidden rounded-[1.75rem] border border-white/10 bg-black">
        <div className="relative aspect-[16/10] w-full sm:aspect-[16/9]">
          <video
            key={activeRole.videoSrc}
            src={activeRole.videoSrc}
            poster={activeRole.posterSrc}
            className="h-full w-full object-cover object-center"
            autoPlay
            muted
            loop
            playsInline
            controls
          />

          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.02),rgba(0,0,0,0.38))]" />

          <div className="absolute left-3 top-3 inline-flex items-center gap-2 rounded-full border border-white/12 bg-black/45 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.22em] text-white backdrop-blur-md">
            <Video size={12} />
            {activeRole.label}
          </div>

          <div className="absolute bottom-3 left-3 right-3 rounded-2xl border border-white/12 bg-black/55 p-3 text-white backdrop-blur-md">
            <h4 className="text-sm font-black sm:text-base">
              {activeRole.title}
            </h4>
            <p className="mt-1 text-[12px] leading-5 text-white/75">
              {activeRole.subtitle}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}