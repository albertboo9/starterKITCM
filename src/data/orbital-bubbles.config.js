/**
 * Configuration des Bulles Orbitales - STARTERKIT CM
 *
 * Mapping des catégories avec icônes Lucide et couleurs professionnelles
 */

export const orbitalBubblesConfig = [
  {
    id: "sensibiliser",
    title: "Me Sensibiliser",
    icon: "Lightbulb",
    color: "var(--category-sensibiliser)",
    category: "awareness",
    description: "Sensibilisation aux opportunités entrepreneuriales",
  },

    {
    id: "financement",
    title: "Financement",
    icon: "PiggyBank",
    color: "var(--category-financement)",
    category: "funding",
    description: "Solutions de financement",
  },


  {
    id: "entreprise",
    title: "Entreprise",
    icon: "Building2",
    color: "var(--category-entreprise)",
    category: "business",
    description: "Structuration et gestion d'entreprise",
  },
  {
    id: "certifier",
    title: "Certifier",
    icon: "Award",
    color: "var(--category-certifier)",
    category: "certification",
    description: "Certification et reconnaissance",
  },

  {
    id: "mentor",
    title: "Mentor",
    icon: "GraduationCap",
    color: "var(--category-mentor)",
    category: "guidance",
    description: "Accompagnement par des mentors",
  },
  {
    id: "formation",
    title: "Formation",
    icon: "BookOpen",
    color: "var(--category-formation)",
    category: "education",
    description: "Formation et développement des compétences",
  },
];

/**
 * Icônes Lucide disponibles pour les bulles
 */
export const bubbleIcons = {
  Lightbulb: "💡",
  Users: "👥",
  UserPlus: "➕",
  TrendingUp: "📈",
  AlertCircle: "⚖️",
  Sparkles: "🚀",
  Building2: "🏢",
  Award: "📜",
  PiggyBank: "💰",
  Truck: "🚚",
  GraduationCap: "🎓",
  BookOpen: "📚",
};

/**
 * Configuration des animations
 */
export const animationConfig = {
  enterDuration: 0.8,
  enterDelay: 0.1, // Delay entre chaque bulle
  hoverScale: 1.15,
  hoverTranslateY: -24,
  floatAmplitude: 8,
  floatDuration: 3000,
  orbitSpeed: 0.0003,
  repelRadius: 120,
  repelStrength: 30,
};

/**
 * Tailles responsive
 */
export const bubbleSizes = {
  xs: 40,
  sm: 48,
  md: 64,
  lg: 72,
  xl: 80,
};

export default orbitalBubblesConfig;
