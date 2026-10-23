// role-data.js
export const ROLE_EXPERIENCE_DATA = [
  {
    id: "organizer",
    label: "Organisateur",
    accent: "#3b82f6",
    useCase: "Pilotage Stratégique & Logistique",
    title: "Maximisez l'impact de vos événements",
    problem: "Difficulté à cibler l'audience locale et à coordonner le terrain.",
    solution: "Tracez vos zones d'influence et automatisez la gestion des flux.",
    features: ["Zonage Dynamique", "Repèrage des zones actives", "Fiche d'information", "Alertes en temps réel"],
    guideSteps: [
      { icon: "MapPin", text: "Définissez le périmètre sur la carte interactive." },
      { icon: "Calendar", text: "Configurez les créneaux et points de contrôle." },
      { icon: "Activity", text: "Suivez l'évolution des inscriptions en temps réel." },
      { icon: "BellRing", text: "Diffusez des alertes aux participants de la zone." }
    ],
    visualStats: [{ label: "Portée", value: "+60%" }, { label: "Engagement", value: "Haut" }]
  },
  {
    id: "participant",
    label: "Participant",
    accent: "#1e3a8a",
    useCase: "Expérience Immersive & Mobile",
    title: "Découvrez et participez aux événements autour de vous",
    problem: "Perte de temps à chercher des activités pertinentes proches de soi.",
    solution: "Accédez instantanément aux zones actives avec guidage intégré.",
    features: ["Ticket numérique", "GPS en temps réel", "Filtres de distance", "Partage sur les réseaux sociaux"],
    guideSteps: [
      { icon: "Compass", text: "Explorez les événements actifs autour de vous." },
      { icon: "Ticket", text: "Réservez votre place et obtenez votre QR Code." },
      { icon: "Navigation", text: "Laissez-vous guider jusqu'au lieu exact." },
      { icon: "Star", text: "Notez l'expérience et partagez vos moments forts." }
    ],
    visualStats: [{ label: "Gain temps", value: "2x" }, { label: "Score", value: "4.9/5" }]
  },
  {
    id: "visitor",
    label: "Visiteur",
    accent: "#6366f1",
    useCase: "Prospection & Découverte Flash",
    title: "Explorez sans engagement",
    problem: "Besoin de voir les activités à proximité avant de créer un compte.",
    solution: "Consultez une vue locale des zones les plus actives en un clic.",
    features: ["Vue Anonyme", "Top Tendances", "Aperçu Photos", "Inscription Rapide"],
    guideSteps: [
      { icon: "Globe", text: "Visualisez la carte globale des zones d'activité." },
      { icon: "Eye", text: "Survolez les événements pour un aperçu rapide." },
      { icon: "TrendingUp", text: "Consultez les tendances locales du moment." },
      { icon: "UserPlus", text: "Créez votre profil pour sauvegarder vos favoris." }
    ],
    visualStats: [{ label: "Accès", value: "Libre" }, { label: "Vitesse", value: "Instant" }]
  },
];