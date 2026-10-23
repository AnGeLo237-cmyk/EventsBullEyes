"use client";

import { useEffect, useState } from "react";
import HeroHeader from "./hero-header";
import HeroActions from "./hero-actions";
import HeroVisual from "./hero-visual";

const heroSlides = [
  {
    id: "organizer",
    roleLabel: "Organisateurs",
    keyword: "créer",
    subtitle:
      "Publiez et structurez vos événements plus vite, avec une vue locale claire et cartographiée.",
    primaryLabel: "Créer un événement",
    secondaryLabel: "Voir les outils",
    primaryHref: "#exploration-map",
    secondaryHref: "#role-experience",
    accent: "var(--color-blue-medium)",
    imageSrc: "/images/landing/hero/organizer.png",
    imageAlt: "Illustration pour les organisateurs",
    imageCaption: "Création et pilotage",
    visualTitle: "Créer et publier rapidement",
    visualBullets: ["Définir un lieu", "Diffuser aux participants"],
    stats: [
      { value: "+34", label: "Événements" },
      { value: "12", label: "Villes" },
      { value: "3", label: "Actions" },
    ],
    holdMs: 3600,
  },
  {
    id: "participant",
    roleLabel: "Participants",
    keyword: "rejoindre",
    subtitle:
      "Trouvez des événements utiles, comparez les options et rejoignez ce qui vous correspond.",
    primaryLabel: "Explorer les événements",
    secondaryLabel: "Découvrir la carte",
    primaryHref: "#exploration-map",
    secondaryHref: "#role-experience",
    accent: "var(--color-blue-dark)",
    imageSrc: "/images/landing/hero/participant.png",
    imageAlt: "Illustration pour les participants",
    imageCaption: "Parcours de découverte",
    visualTitle: "Trouver et rejoindre",
    visualBullets: ["Filtrer par type", "Accéder aux détails"],
    stats: [
      { value: "+120", label: "Découvertes" },
      { value: "4", label: "Catégories" },
      { value: "1", label: "Clic" },
    ],
    holdMs: 4500,
  },
  {
    id: "visitor",
    roleLabel: "Visiteurs",
    keyword: "explorer",
    subtitle:
      "Parcourez la carte, découvrez ce qui se passe autour de vous et repérez vite les événements populaires.",
    primaryLabel: "Voir la démo",
    secondaryLabel: "Comprendre",
    primaryHref: "#demo",
    secondaryHref: "#role-experience",
    accent: "var(--color-blue-light)",
    imageSrc: "/images/landing/hero/visitor.png",
    imageAlt: "Illustration pour les visiteurs",
    imageCaption: "Exploration libre",
    visualTitle: "Découvrir sans effort",
    visualBullets: ["Voir les points actifs", "Explorer les populaires"],
    stats: [
      { value: "+81", label: "Explorations" },
      { value: "10", label: "Zones" },
      { value: "Rapide", label: "Temps" },
    ],
    holdMs: 4000,
  },
  {
    id: "admin",
    roleLabel: "Administrateurs",
    keyword: "superviser",
    subtitle:
      "Gardez une vue d’ensemble pour suivre l’activité et maintenir la qualité de la plateforme.",
    primaryLabel: "Voir la plateforme",
    secondaryLabel: "Découvrir les rôles",
    primaryHref: "#role-experience",
    secondaryHref: "#role-experience",
    accent: "var(--color-gray-dark)",
    imageSrc: "/images/landing/hero/admin.png",
    imageAlt: "Illustration pour les administrateurs",
    imageCaption: "Supervision globale",
    visualTitle: "Superviser et valider",
    visualBullets: ["Contrôler les contenus", "Suivre l’activité"],
    stats: [
      { value: "360°", label: "Contrôle" },
      { value: "24/7", label: "Suivi" },
      { value: "OK", label: "Qualité" },
    ],
    holdMs: 4200,
  },
];

export default function Hero({ className = "" }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const activeSlide = heroSlides[activeIndex];

  useEffect(() => {
    if (paused) return;

    const timer = window.setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % heroSlides.length);
    }, activeSlide.holdMs);

    return () => window.clearTimeout(timer);
  }, [activeSlide.holdMs, activeIndex, paused]);

  const goToSlide = (index) => {
    if (index < 0) {
      setActiveIndex(heroSlides.length - 1);
      return;
    }
    if (index >= heroSlides.length) {
      setActiveIndex(0);
      return;
    }
    setActiveIndex(index);
  };

  return (
    <section
      id="hero"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      className={[
        "relative overflow-hidden py-15 sm:py-19 lg:py-23",
        className,
      ].join(" ")}
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(180deg,var(--color-whitesmoke)_0%,#fbfdff_48%,#eef4ff_100%)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.10),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.90),transparent_28%)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(15,23,42,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.03)_1px,transparent_1px)] bg-[size:62px_62px] opacity-25" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-5 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-8">
          <div className="max-w-2xl">
            <HeroHeader activeSlide={activeSlide} />
            <HeroActions activeSlide={activeSlide} className="mt-4 sm:mt-5" />
          </div>

          <HeroVisual
            slides={heroSlides}
            activeIndex={activeIndex}
            activeSlide={activeSlide}
            onSelectSlide={goToSlide}
          />
        </div>
      </div>
    </section>
  );
}