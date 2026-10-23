"use client";

import { useMemo, useState } from "react";
import FeaturedEvent from "./featured-event";
import PopularEventCard from "./popular-event-card";
import {
  popularEventCategories,
  popularEventsData,
} from "./popular-events-data";

export default function PopularEvents({ className = "" }) {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredEvents = useMemo(() => {
    if (activeCategory === "all") return popularEventsData;
    return popularEventsData.filter(
      (event) => event.categoryKey === activeCategory
    );
  }, [activeCategory]);

  const featuredEvent = useMemo(() => {
    const fromFilter = filteredEvents.find((event) => event.featured);
    return fromFilter ?? filteredEvents[0] ?? null;
  }, [filteredEvents]);

  const compactEvents = useMemo(() => {
    return filteredEvents.filter((event) => event.id !== featuredEvent?.id);
  }, [filteredEvents, featuredEvent]);

  return (
    <section
      id="popular-events"
      className={[
        "relative overflow-hidden py-8 sm:py-10 lg:py-12",
        className,
      ].join(" ")}
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(180deg,#081120_0%,#0d1a2e_45%,#09111f_100%)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.16),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.06),transparent_28%)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:58px_58px] opacity-20" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center rounded-full border border-white/14 bg-white/10 px-3 py-1 text-[10px] font-extrabold uppercase tracking-[0.28em] text-white sm:text-[11px]">
            Événements populaires
          </div>

          <h2 className="mt-3 text-2xl font-black tracking-tight text-white sm:text-3xl lg:text-4xl">
            Appréciez nos évènements populaires.
          </h2>

          <p className="mt-2.5 text-sm leading-6 text-white/80 sm:text-[15px]">
            Parcourez notre palette diversifiée d'évènements.
          </p>
        </div>

        <div className="mt-5 flex gap-2 overflow-x-auto pb-1 sm:flex-wrap sm:overflow-visible">
          {popularEventCategories.map((category) => {
            const isActive = category.key === activeCategory;

            return (
              <button
                key={category.key}
                type="button"
                onClick={() => setActiveCategory(category.key)}
                className={[
                  "shrink-0 rounded-full border px-3.5 py-2 text-[11px] font-extrabold uppercase tracking-wide transition-all duration-200",
                  isActive
                    ? "border-white/15 bg-white text-[var(--color-blue-dark)]"
                    : "border-white/18 bg-white/10 text-white hover:bg-white/16",
                ].join(" ")}
              >
                {category.label}
              </button>
            );
          })}
        </div>

        <div className="mt-5">
          <FeaturedEvent event={featuredEvent} />
        </div>

        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {compactEvents.map((event) => (
            <PopularEventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </section>
  );
}