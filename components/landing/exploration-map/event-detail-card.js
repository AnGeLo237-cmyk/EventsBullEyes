"use client";

import {
  ArrowRight,
  CalendarDays,
  MapPin,
  Users,
  Sparkles,
  Building2,
  Signal,
} from "lucide-react";

export default function EventDetailCard({
  event = null,
  totalEvents = 0,
  onPrimaryAction,
  className = "",
}) {
  return (
    <aside className={["lg:sticky lg:top-20", className].join(" ")}>
      <div className="rounded-2xl border border-[var(--color-white)]/10 bg-[#12213a]/96 p-4 shadow-sm backdrop-blur-sm sm:p-5">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-[10px] font-extrabold uppercase tracking-[0.28em] text-[var(--color-white)]/55">
              Carte détail
            </p>
            <p className="mt-1 text-sm font-semibold text-[var(--color-white)]/82">
              {totalEvents} événement{totalEvents > 1 ? "s" : ""} dans cette vue
            </p>
          </div>

          <div className="rounded-full border border-[var(--color-blue-light)]/20 bg-[var(--color-blue-light)]/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-[var(--color-blue-light)]">
            {event ? event.status : "Aucun choix"}
          </div>
        </div>

        {!event ? (
          <div className="mt-5 rounded-2xl border border-dashed border-[var(--color-white)]/10 bg-black/15 p-4 text-center">
            <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--color-blue-light)]/20 bg-[var(--color-blue-light)]/10 text-[var(--color-blue-light)]">
              <Sparkles size={20} />
            </div>
            <h3 className="mt-3 text-base font-black text-[var(--color-white)]">
              Sélectionnez un événement
            </h3>
            <p className="mt-2 text-sm leading-6 text-[var(--color-white)]/78">
              Cliquez sur un point de la carte pour afficher les informations utiles ici.
            </p>
          </div>
        ) : (
          <div className="mt-5 space-y-4">
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full border border-[var(--color-blue-light)]/20 bg-[var(--color-blue-light)]/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-[var(--color-blue-light)]">
                  {event.typeLabel}
                </span>
                <span className="rounded-full border border-[var(--color-white)]/10 bg-[var(--color-white)]/6 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-[var(--color-white)]/80">
                  {event.format}
                </span>
              </div>

              <h3 className="mt-3 text-xl font-black tracking-tight text-[var(--color-white)] sm:text-2xl">
                {event.name}
              </h3>

              <p className="mt-2 text-sm leading-6 text-[var(--color-white)]/82">
                {event.description}
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-xl border border-[var(--color-white)]/10 bg-black/15 p-3.5">
                <div className="flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-wide text-[var(--color-white)]/58">
                  <CalendarDays size={14} />
                  Date
                </div>
                <p className="mt-2 text-sm font-bold text-[var(--color-white)]">
                  {event.date}
                </p>
              </div>

              <div className="rounded-xl border border-[var(--color-white)]/10 bg-black/15 p-3.5">
                <div className="flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-wide text-[var(--color-white)]/58">
                  <MapPin size={14} />
                  Ville / région
                </div>
                <p className="mt-2 text-sm font-bold text-[var(--color-white)]">
                  {event.city}, {event.region}
                </p>
                <p className="mt-1 text-xs text-[var(--color-white)]/72">
                  {event.venue}
                </p>
              </div>

              <div className="rounded-xl border border-[var(--color-white)]/10 bg-black/15 p-3.5">
                <div className="flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-wide text-[var(--color-white)]/58">
                  <Users size={14} />
                  Participants
                </div>
                <p className="mt-2 text-sm font-bold text-[var(--color-white)]">
                  {event.attendees.toLocaleString()} personnes
                </p>
              </div>

              <div className="rounded-xl border border-[var(--color-white)]/10 bg-black/15 p-3.5">
                <div className="flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-wide text-[var(--color-white)]/58">
                  <Building2 size={14} />
                  Public cible
                </div>
                <p className="mt-2 text-sm font-bold text-[var(--color-white)]">
                  {event.audience}
                </p>
              </div>
            </div>

            <div className="rounded-xl border border-[var(--color-white)]/10 bg-black/15 p-3.5">
              <div className="flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-wide text-[var(--color-white)]/58">
                <Signal size={14} />
                Informations rapides
              </div>

              <div className="mt-3 flex flex-wrap gap-2">
                <span className="rounded-full bg-[var(--color-blue-dark)]/70 px-3 py-1 text-[10px] font-bold text-[var(--color-white)]">
                  {event.status}
                </span>
                <span className="rounded-full bg-[var(--color-white)]/8 px-3 py-1 text-[10px] font-bold text-[var(--color-white)]/82">
                  {event.region}
                </span>
                <span className="rounded-full bg-[var(--color-white)]/8 px-3 py-1 text-[10px] font-bold text-[var(--color-white)]/82">
                  {event.format}
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={onPrimaryAction}
              className="inline-flex h-10 w-full items-center justify-center gap-2 rounded-xl bg-[var(--color-blue-light)] px-4 text-[11px] font-extrabold uppercase tracking-wide text-[var(--color-black)] transition-all duration-200 hover:bg-[var(--color-blue-medium)] hover:text-[var(--color-white)]"
            >
              Voir l’événement
              <ArrowRight size={15} />
            </button>
          </div>
        )}
      </div>
    </aside>
  );
}