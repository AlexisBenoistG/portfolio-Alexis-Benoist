export const projects = [
  {
    id: 1,
    title: "Application Web Enedis",
    period: "Juin 2025 - Août 2025",
    status: "completed",
    type: "professional",
    description: "Refonte complète d'un module d'application interne pour Enedis, utilisant l'architecture PHP/Symfony (MVC), JavaScript/jQuery et SQL. Ce projet a englobé la conception et la réalisation du module, l'implémentation d'un système avancé de gestion des rôles et des accès compatible avec les structures existantes et nouvelles, ainsi que l'optimisation des performances par la séparation front/back et l'amélioration des requêtes SQL (préparées et jointures).",
    technologies: ["PHP", "Symfony", "JavaScript", "HTML/CSS", "Twig", "jQuery", "AJAX", "SQL", "DataTables"],
    highlights: [
      "Système de gestion des rôles et accès",
      "Interface utilisateur avec DataTables",
      "Optimisation des performances (séparation front/back)",
      "Amélioration des requêtes SQL"
    ],
    media: {
      type: "image", 
      url: "./Logo-Enedis.png"
    },
    github: null, 
    demo: null
  },
  {
    id: 2,
    title: "Site Web Angular + ASP.NET",
    period: "2024-2025 (Semestre 5)",
    status: "in-progress",
    type: "academic",
    description: "Le projet Recettes Parfaites, développé avec Angular pour le front-end et ASP.NET pour le back-end, est une application web de cuisine visant à personnaliser l'expérience utilisateur. Ses fonctionnalités principales incluent la recherche avancée de recettes selon des filtres précis (ingrédients, type de plat, allergies), l'ajustement automatique des quantités d'ingrédients en fonction du nombre de convives, la génération de listes de courses interactives, la gestion des recettes favorites, ainsi qu'un système de recommandation intelligent qui tient compte des produits disponibles dans le réfrigérateur de l'utilisateur.",
    technologies: ["Angular", "ASP.NET", "TypeScript", "C#", "SQL"],
    highlights: [
      "Recueil des besoins client en AGILE",
      "Architecture front-end avec Angular",
      "API REST avec ASP.NET",
      "Base de données relationnelle"
    ],
    media: {
      type: "video",
      url: "./Recettes-de-saison.mp4",
      thumbnail: "./8550147.png"
    },
    github: null,
    demo: null
  },
  {
    id: 3,
    title: "Développement 3D avec Unity",
    period: "2024 (Semestre 4 - Irlande)",
    status: "completed",
    type: "academic",
    description: "Ce semestre d'études a été axé sur le Développement 3D et la création de contenu immersif. Les activités principales comprenaient la modélisation 3D d'objets et de terrains, ainsi que l'animation de personnages au sein de l'environnement de développement Unity, complété par l'utilisation du logiciel de modélisation Maya.",
    technologies: ["Unity", "Maya", "C#"],
    highlights: [
      "Modélisation 3D d'objets et terrains",
      "Animation de personnages",
      "Intégration dans Unity",
      "Expérience internationale"
    ],
    media: [
      {
      type: "video",
      url: "./first3D.mp4",
      thumbnail: "./111111.png"
    },
    {
      type: "video",
      url: "./second3D.mp4",
      thumbnail: "./222222.png"
    },
    {
      type: "video",
      url: "./third3D.mp4",
      thumbnail: "./333333.png"
    },
    ],
    github: null,
    demo: null
  },
  {
    id: 4,
    title: "Site Web PHP",
    period: "2023-2024 (Semestre 3)",
    status: "completed",
    type: "academic",
    description: "L’objectif de cette application web est de présenter/recommander des films rétro. Cela doit permettre aux employés de préparer leurs rendez-vous. Ils doivent pouvoir choisir une année de référence afin de voir les films qui étaient à l’affiche il y a 10, 20 ou 30 ans. Par ailleurs, les employés peuvent également voir les films qui sont sortis dans les trois mois suivant la date sélectionnée. Il est également possible de chercher des films en fonction de plusieurs critères : le titre, le réalisateur, ou un acteur",
    technologies: ["PHP", "MySQL", "HTML", "CSS"],
    highlights: [
      "Site web full-stack en PHP",
      "Base de données relationnelle MySQL",
      "Architecture MVC",
      "Gestion utilisateurs"
    ],
    media: {
      type: "video",
      url: "./SAE3.mp4",
      thumbnail: "./9550147.png"
    },
    github: null,
    demo: null
  }
];

export const pageContent = {
  title: "Mes projets",
  description: "Découvrez une sélection de mes projets académiques et professionnels, allant du développement web au développement 3D.",
  categories: {
    all: "Tous",
    professional: "Professionnels",
    academic: "Académiques",
    // personal: "Personnels"
  },
  status: {
    "in-progress": "En cours",
    completed: "Terminé",
    archived: "Archivé"
  }
};