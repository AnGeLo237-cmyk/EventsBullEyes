// frontend/src/app/landing/page.js
import React from 'react';

// Importation des composants de la section Landing
import Hero from '../components/landing/hero/hero';
import ExplorationMap from '../components/landing/exploration-map/exploration-map';
import RoleExperience from '../components/landing/role-experience/role-experience';
import PopularEvents from '../components/landing/popular-events/popular-events';
import DemoProduct from '../components/landing/demo-product/demo-product';
import SocialProof from '../components/landing/social-proof/social-proof';
import FAQ from '../components/landing/faq/faq';
import FinalCTA from '../components/landing/final-cta/final-cta';
import Footer from '../components/landing/footer/footer';

// Importation de la Navbar partagée
import Navbar from '../components/shared/navbar';

/**
 * Page d'accueil (Landing Page)
 * Assemble les sections définies dans src/app/components/landing/
 */
export default function LandingPage() {
  const navigationLinks = [
    { label: "Accueil", href: "/" },
    { label: "Explorer", href: "#exploration-map" },
    { label: "Organisateurs", href: "/organizer" },
    { label: "À propos", href: "/about" },
  ];

  return (
    <>
      {/* Navigation fixe ou sticky */}
      <Navbar 
        navItems={navigationLinks} 
        brandName="EventsBullsEyes"
        logoSrc="/images/logo.png" 
        logoAlt="EventsBullsEyes_Logo"   
      />

      <main className="flex-grow">
        {/* Section d'accroche avec la carte du Cameroun */}
        <Hero />

        {/* Section Preuve Sociale (Statistiques / Témoignages) */}
        <SocialProof />

        {/* Section de présentation par rôle (Organisateur, Participant, etc.) */}
        <RoleExperience />

        {/* Section d'exploration des événements sur la carte */}
        <ExplorationMap />

        {/* Section de mise en avant des événements populaires */}
        <PopularEvents />

        {/* Section Démonstration Vidéo (Thème sombre selon ton arborescence) */}
        <DemoProduct />

        {/* Section FAQ pour lever les doutes */}
        <FAQ />

        {/* Appel à l'action final avant le footer */}
        <FinalCTA />
      </main>

      {/* Pied de page compact */}
      <Footer />
    </>
  );
}