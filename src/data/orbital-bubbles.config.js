/**
 * Configuration des Bulles Orbitales - STARTERKIT CM
 *
 * Mapping des catégories avec icônes Lucide et couleurs professionnelles
 */

export const orbitalBubblesConfig = [
  {
    id: "sensibiliser",
    title: "Sensibiliser",
    icon: "Lightbulb",
    color: "var(--category-sensibiliser)",
    category: "awareness",
    description: "Sensibilisation aux opportunités entrepreneuriales",
  },
  {
    id: "reseau",
    title: "Réseau",
    icon: "Users",
    color: "var(--category-reseau)",
    category: "community",
    description: "Construction et développement de réseau professionnel",
  },
  {
    id: "equipe",
    title: "Équipe",
    icon: "UserPlus",
    color: "var(--category-equipe)",
    category: "team",
    description: "Montée et structuration d'équipe",
  },
  {
    id: "activite",
    title: "Activité",
    icon: "TrendingUp",
    color: "var(--category-activite)",
    category: "growth",
    description: "Développement et croissance d'activité",
  },
  {
    id: "probleme",
    title: "Problème",
    icon: "AlertCircle",
    color: "var(--category-probleme)",
    category: "challenge",
    description: "Résolution de problèmes entrepreneuriaux",
  },
  {
    id: "autrement",
    title: "Autrement",
    icon: "Sparkles",
    color: "var(--category-autrement)",
    category: "innovation",
    description: "Approches innovantes et alternatives",
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
    id: "financement",
    title: "Financement",
    icon: "PiggyBank",
    color: "var(--category-financement)",
    category: "funding",
    description: "Solutions de financement",
  },
  {
    id: "distribution",
    title: "Distribution",
    icon: "Truck",
    color: "var(--category-distribution)",
    category: "logistics",
    description: "Stratégies de distribution",
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
