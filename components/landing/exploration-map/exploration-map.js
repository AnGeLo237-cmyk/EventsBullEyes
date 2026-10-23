"use client";

import { useMemo, useState } from "react";
import ExplorationMapHeader from "./exploration-map-header";
import ExplorationMapFilters from "./exploration-map-filters";
import MapCanvas from "./map-canvas";
import EventDetailCard from "./event-detail-card";
import {
  explorationMapEvents,
  explorationMapFilters,
} from "./exploration-map-data";

export default function ExplorationMap({ className = "" }) {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedEventId, setSelectedEventId] = useState(
    explorationMapEvents[0]?.id ?? null
  );

  const filteredEvents = useMemo(() => {
    if (activeFilter === "all") return explorationMapEvents;
    return explorationMapEvents.filter((event) => event.typeKey === activeFilter);
  }, [activeFilter]);

  const selectedEvent = useMemo(() => {
    if (!filteredEvents.length) return null;

    const found = filteredEvents.find((event) => event.id === selectedEventId);
    return found ?? filteredEvents[0];
  }, [filteredEvents, selectedEventId]);

  const handleFilterChange = (nextFilter) => {
    setActiveFilter(nextFilter);

    const nextEvents =
      nextFilter === "all"
        ? explorationMapEvents
        : explorationMapEvents.filter((event) => event.typeKey === nextFilter);

    setSelectedEventId(nextEvents[0]?.id ?? null);
  };

  return (
    <section
      id="exploration-map"
      className={[
        "relative overflow-hidden py-12 sm:py-14 lg:py-16",
        className,
      ].join(" ")}
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.12),transparent_34%),linear-gradient(180deg,rgba(15,23,42,0.98),rgba(9,15,28,0.98))]" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] opacity-40" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ExplorationMapHeader />

        <div className="mt-7 grid gap-4 lg:grid-cols-[minmax(0,1.65fr)_320px] lg:items-start">
          <div className="space-y-4">
            <ExplorationMapFilters
              filters={explorationMapFilters}
              activeFilter={activeFilter}
              onFilterChange={handleFilterChange}
              totalEvents={filteredEvents.length}
            />

            <MapCanvas
              events={filteredEvents}
              selectedEventId={selectedEventId}
              onSelectEvent={setSelectedEventId}
            />
          </div>

          <EventDetailCard
            event={selectedEvent}
            totalEvents={filteredEvents.length}
            onPrimaryAction={() => {
              // Branche ce bouton plus tard vers la vraie fiche événement.
            }}
          />
        </div>
      </div>
    </section>
  );
}