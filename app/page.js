// frontend/app/page.js
import Landing from '../landing/page';

/**
 * Point d'entrée principal de l'application.
 * Redirige ou affiche directement la Landing Page pour les tests.
 */
export default function Home() {
  return (
    <>
      <Landing />
    </>    
  );
}