/**
 * Configuration des données du Footer
 * Assurez-vous que les clés 'icon' correspondent aux clés de l'objet SVGIcons dans footer.js
 */

export const footerMeta = {
  brandName: "EventsBullsEyes",
  slogan: "L'événementiel à portée de clic.",
  copyright: `© ${new Date().getFullYear()} EventsBullsEyes. Tous droits réservés.`,
};

export const footerNavigationLinks = [
  { label: "Accueil", href: "#hero" },
  { label: "Carte d'évènements", href: "#exploration-map" },
  { label: "Top Événements", href: "#popular-events" },
  { label: "Démonstration", href: "#demo-product" },
  { label: "FAQ", href: "#faq" },
];

export const footerSupportLinks = [
  { label: "Centre d'aide", href: "#faq" },
  { label: "Nous contacter", href: "#final-cta" },
  { label: "Règles de confidentialité", href: "/privacy" },
  { label: "Conditions d'utilisation", href: "/terms" },
];

export const footerSocialLinks = [
  { label: "Facebook", href: "https://facebook.com", icon: "facebook" },
  { label: "Instagram", href: "https://instagram.com", icon: "instagram" },
  { label: "X", href: "https://x.com", icon: "twitter" },
  { label: "YouTube", href: "https://youtube.com", icon: "youtube" },
];

export const footerNewsletter = {
  title: "Restez informé",
  description:
    "Rejoignez notre communauté et recevez les dernières mises à jour sur les événements cartographiés.",
  placeholder: "votre.email@exemple.com",
  buttonLabel: "S'abonner maintenant",
};