"use client";

import { useState } from "react";
import RoleTabs from "./role-tabs";
import RolePanel from "./role-panel";
import { ROLE_EXPERIENCE_DATA } from "./role-data";

export default function RoleExperience({ 
  badge = "Workflow Métier",
  title = "Une expérience adaptée à",
  className = "",
}) {
  const [activeRoleId, setActiveRoleId] = useState(ROLE_EXPERIENCE_DATA[0].id);
  const activeRole = ROLE_EXPERIENCE_DATA.find((r) => r.id === activeRoleId) ?? ROLE_EXPERIENCE_DATA[0];

  return (
    <section
      id="role-experience"
      className={["relative py-8 sm:py-12 bg-slate-50 overflow-hidden", className].join(" ")}
    >
      {/* Effets de fond Premium */}
      <div className="absolute inset-0 pointer-events-none opacity-40 bg-[radial-gradient(circle_at_top_right,#e2e8f0,transparent_50%),radial-gradient(circle_at_bottom_left,#f1f5f9,transparent_40%)]" />
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center rounded-full border border-[var(--color-blue-light)]/25 bg-[var(--color-blue-light)]/10 px-3 py-1 text-[10px] font-extrabold uppercase tracking-[0.3em] text-[var(--color-blue-light)] sm:text-[11px]">
              {badge}
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 leading-tight">
              {title} <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">votre rôle</span>
            </h2>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-[var(--color-gray-dark)]/80 sm:text-[15px]">
              Plongez dans un écosystème intelligent où chaque outil est à sa place pour optimiser et<br/>pour transformer votre manière d'explorer et d'organiser vos événements.
            </p>            
          </div>
          
          <RoleTabs
            roles={ROLE_EXPERIENCE_DATA}
            activeRoleId={activeRoleId}
            onChange={setActiveRoleId}
          />
        </div>

        <div className="transition-all duration-500 ease-in-out">
          {/* La clé force le re-rendu pour les animations CSS internes */}
          <RolePanel key={activeRoleId} role={activeRole} />
        </div>
      </div>
    </section>
  );
}