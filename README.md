# EventsBullEyes

EventsBullEyes est un projet de plateforme événementielle qui présente une interface de découverte d’événements au Cameroun, notamment à l’aide d’une carte et d’un classement par catégories. La page s’adresse aux organisateurs, aux participants et aux visiteurs intéressés par les événements locaux. Le dépôt documente ici la page d’accueil du projet ; les éléments visibles ne constituent pas la preuve qu’un service de gestion d’événements ou un backend est opérationnel.

## Sommaire

- [Démonstration en ligne](#démonstration-en-ligne)
- [Ma contribution](#ma-contribution)
- [Contenu de la page d’accueil](#contenu-de-la-page-daccueil)
- [Technologies et outils](#technologies-et-outils)
- [Prérequis et lancement local](#prérequis-et-lancement-local)
- [Structure du dépôt](#structure-du-dépôt)
- [Déploiement et code source](#déploiement-et-code-source)
- [Statut du projet](#statut-du-projet)

## Démonstration en ligne

La démonstration de la page d’accueil est disponible à l’adresse suivante :

**[events-bull-eyes.vercel.app](https://events-bull-eyes.vercel.app/)**

## Ma contribution

Je suis étudiant en ingénierie logicielle et développeur web junior. Ma contribution personnelle à EventsBullEyes porte **exclusivement sur la page d’accueil**. Elle comprend :

- la conception visuelle et la structuration de cette page ;
- la création et l’intégration de ses composants frontend ;
- l’adaptation de la page aux différentes tailles d’écran ;
- le déploiement de la page d’accueil.

Cette description ne m’attribue pas le développement de l’ensemble de la plateforme, d’un backend, d’API, d’un système d’authentification ou d’autres pages.

## Contenu de la page d’accueil

La page assemble plusieurs sections de présentation :

- **Navigation et introduction** : navigation du site, présentation du concept et carrousel qui met en avant différents profils.
- **Présentation par profil** : panneaux interactifs décrivant des parcours d’organisateur, de participant et de visiteur.
- **Carte et exploration** : carte du Cameroun avec des marqueurs sélectionnables, des filtres par type d’événement et des détails sur l’événement sélectionné.
- **Événements populaires** : cartes d’événements pouvant être filtrées par catégorie.
- **Preuve sociale et FAQ** : statistiques, témoignages et réponses affichés dans des sections dédiées, avec une FAQ repliable.
- **Démonstration produit, appel à l’action et pied de page** : sections de présentation complémentaires et navigation de bas de page.

Les événements, compteurs, témoignages et textes de présentation sont définis dans des fichiers de données du frontend. Les filtres et sélections visibles s’appliquent à ces contenus locaux : ils ne démontrent pas une connexion à un backend ni l’existence d’événements réels. La carte récupère également son fond géographique depuis un fichier GeoJSON hébergé sur jsDelivr ; une connexion Internet est donc nécessaire pour le charger.

La section de démonstration référence des vidéos MP4 sous `public/videos/landing/demo-product/`, mais ces fichiers ne sont pas présents dans les ressources du dépôt. Leur lecture n’est donc pas disponible à partir de ce dépôt tel quel.

## Technologies et outils

### Technologies utilisées

- **Next.js 16.2.5** : framework de l’application, avec l’App Router.
- **React 19.2.4** : création des composants d’interface.
- **Tailwind CSS 4** : styles utilitaires, intégré via PostCSS.
- **`@vnedyalk0v/react19-simple-maps`** : rendu de la carte et de ses marqueurs.
- **`lucide-react`** : icônes de l’interface.

### Outil d’assistance au développement

**ChatGPT** a été utilisé comme outil d’assistance au développement. Il ne s’agit pas d’une dépendance du projet et cela ne remplace pas la conception, l’intégration et le déploiement réalisés dans le périmètre de ma contribution.

## Prérequis et lancement local

Le projet requiert **Node.js 20.9 ou une version ultérieure**. Le dépôt contient un `package-lock.json` ; les commandes ci-dessous utilisent donc **npm**.

Aucune variable d’environnement n’est requise par le code de la page d’accueil.

```bash
git clone https://github.com/AnGeLo237-cmyk/EventsBullEyes.git
cd EventsBullEyes
npm ci
npm run dev
```

Ouvrez ensuite [http://localhost:3000](http://localhost:3000) dans votre navigateur. Le fond géographique de la carte nécessite une connexion Internet.

### Vérifications et lancement de production

Les scripts suivants sont définis dans `package.json` :

```bash
npm run lint
npm run build
npm run start
```

`npm run start` lance le serveur de production après la création du build avec `npm run build`.

## Structure du dépôt

```text
app/
  page.js                         Point d’entrée de la route d’accueil
  layout.js                       Layout global et métadonnées
  globals.css                     Styles globaux et import Tailwind CSS
landing/
  page.js                         Assemblage des sections de la page d’accueil
components/
  landing/                        Sections, composants et données de présentation
  shared/navbar.js                Barre de navigation partagée
public/
  images/                         Logo et visuels utilisés par la page
package.json                      Dépendances et scripts npm
package-lock.json                 Verrouillage des dépendances npm
next.config.mjs                   Configuration Next.js
postcss.config.mjs                Configuration PostCSS/Tailwind CSS
```

La route `/` est définie dans `app/page.js`, qui affiche la page assemblée dans `landing/page.js`. Les composants de cette page et leurs données se trouvent dans `components/landing/`.

## Déploiement et code source

- **Démonstration en ligne** : [https://events-bull-eyes.vercel.app/](https://events-bull-eyes.vercel.app/)
- **Dépôt source** : [github.com/AnGeLo237-cmyk/EventsBullEyes](https://github.com/AnGeLo237-cmyk/EventsBullEyes)

La démonstration est publiée sur Vercel. Le dépôt ne documente pas de procédure de déploiement spécifique.

## Statut du projet

Ce README présente le projet et le périmètre de ma contribution frontend à sa page d’accueil. Les contenus de démonstration et les interactions locales décrits ici ne doivent pas être interprétés comme une validation des fonctionnalités d’une plateforme complète ou prête pour la production.
