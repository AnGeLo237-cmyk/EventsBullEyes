"use client";

import { useMemo } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "@vnedyalk0v/react19-simple-maps";
import { MapPinned, Radar, Layers3 } from "lucide-react";
import EventMarker from "./event-marker";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

export default function MapCanvas({
  events = [],
  selectedEventId = null,
  onSelectEvent,
  className = "",
}) {
  const stats = useMemo(() => {
    const regions = new Set(events.map((event) => event.region)).size;
    const cities = new Set(events.map((event) => event.city)).size;

    return {
      total: events.length,
      regions,
      cities,
    };
  }, [events]);

  return (
    <div
      className={[
        "relative overflow-hidden rounded-2xl border border-[var(--color-white)]/10 bg-[#0d1a2e] p-3 shadow-[0_20px_55px_rgba(0,0,0,0.26)] sm:p-4",
        className,
      ].join(" ")}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.16),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.06),transparent_30%)]" />

      <div className="relative flex flex-wrap items-start justify-between gap-3">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-[var(--color-blue-light)]/20 bg-[var(--color-blue-light)]/10 px-3 py-1 text-[10px] font-extrabold uppercase tracking-[0.26em] text-[var(--color-blue-light)] sm:text-[11px]">
            <Radar size={13} />
            Cameroun
          </div>

          <h3 className="mt-2 text-base font-black tracking-tight text-[var(--color-white)] sm:text-lg">
            Carte des événements locaux
          </h3>

          <p className="mt-1 max-w-xl text-sm leading-6 text-[var(--color-white)]/82">
            Observez la répartition des événements par ville et région, et découvrez les activités locales en un coup d'œil.
          </p>
        </div>

        <div className="flex items-center gap-2 rounded-full border border-[var(--color-white)]/10 bg-[var(--color-white)]/6 px-3 py-2 text-[10px] font-bold uppercase tracking-wide text-[var(--color-white)]/85 sm:text-[11px]">
          <Layers3 size={14} />
          {stats.total} événements
        </div>
      </div>

      <div className="relative mt-3 h-[300px] overflow-hidden rounded-2xl border border-[var(--color-white)]/10 bg-[#09111f] sm:h-[340px] lg:h-[360px]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:42px_42px] opacity-20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_35%,rgba(0,0,0,0.22)_100%)]" />

        <ComposableMap
          projection="geoMercator"
          projectionConfig={{
            center: [12.1, 5.8],
            scale: 1180,
          }}
          style={{ width: "100%", height: "100%" }}
        >
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  style={{
                    default: {
                      fill: "rgba(10, 22, 40, 0.98)",
                      stroke: "rgba(148, 163, 184, 0.22)",
                      strokeWidth: 0.55,
                      outline: "none",
                    },
                    hover: {
                      fill: "rgba(17, 29, 51, 0.98)",
                      stroke: "rgba(147, 197, 253, 0.35)",
                      strokeWidth: 0.55,
                      outline: "none",
                    },
                    pressed: {
                      fill: "rgba(17, 29, 51, 0.98)",
                      outline: "none",
                    },
                  }}
                />
              ))
            }
          </Geographies>

          {events.map((event) => (
            <Marker
              key={event.id}
              coordinates={[event.longitude, event.latitude]}
            >
              <EventMarker
                event={event}
                isSelected={selectedEventId === event.id}
                onClick={() => onSelectEvent?.(event.id)}
              />
            </Marker>
          ))}
        </ComposableMap>

        <div className="pointer-events-none absolute left-3 top-3 flex max-w-[80%] flex-col gap-2 sm:max-w-none">
          <div className="rounded-full border border-[var(--color-white)]/10 bg-black/35 px-3 py-2 text-[10px] font-semibold text-[var(--color-white)]/86 backdrop-blur-sm">
            {stats.regions} régions représentées
          </div>
          <div className="rounded-full border border-[var(--color-white)]/10 bg-black/35 px-3 py-2 text-[10px] font-semibold text-[var(--color-white)]/86 backdrop-blur-sm">
            {stats.cities} villes visibles
          </div>
        </div>

        <div className="pointer-events-none absolute bottom-3 left-3 right-3 flex flex-wrap items-center justify-between">
          <div className="rounded-full border border-[var(--color-blue-light)]/20 bg-[var(--color-blue-light)]/10 px-3 py-2 text-[10px] font-bold uppercase tracking-wide text-[var(--color-blue-light)] backdrop-blur-sm">
            <MapPinned size={13} className="inline -translate-y-[1px]" /> Découverte
          </div>
        </div>
      </div>
    </div>
  );
}