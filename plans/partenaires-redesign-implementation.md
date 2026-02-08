# Refonte Page Partenaires - Plan d'Implémentation

## 🎯 Objectif

Créer une page Partenaires professionnelle avec animations modernes, cohérente avec le design system de l'application.

---

## Structure de la Page

```
┌─────────────────────────────────────────────────────────────────────────┐
│                                                                         │
│  🏛️ ✨ 🌍 ✨ 🏢 ✨ 🏦  →  Carrousel infini logos                      │
│                                                                         │
│  ┌─────────────────────────────────────────────────────────────────┐   │
│  │                                                                 │   │
│  │        Nos Partenaires Stratégiques                             │   │
│  │                                                                 │   │
│  │        Institutions, ONG et entreprises qui                      │   │
│  │        croient en l'entrepreneuriat camerounais.                │   │
│  │                                                                 │   │
│  │              [✨ Devenir partenaire ✨]                          │   │
│  │                                                                 │   │
│  └─────────────────────────────────────────────────────────────────┘   │
│                                                                         │
│  ┌───────────────────────────────────────────────────────────────┐    │
│  │  🏛️ GOUVERNEMENT & INSTITUTIONS                               │    │
│  │  ┌─────────┐  ┌─────────┐  ┌─────────┐                       │    │
│  │  │  🖼️    │  │  🖼️    │  │  🖼️    │  Cards avec          │    │
│  │  │ LOGO    │  │ LOGO    │  │ LOGO    │  animations          │    │
│  │  │         │  │         │  │         │  stagger             │    │
│  │  └─────────┘  └─────────┘  └─────────┘                       │    │
│  └───────────────────────────────────────────────────────────────┘    │
│                                                                         │
│  ┌───────────────────────────────────────────────────────────────┐    │
│  │  🏦 FINANCEURS & INVESTISSEURS                                 │    │
│  │  ┌─────────┐  ┌─────────┐  ┌─────────┐                       │    │
│  │  │  🖼️    │  │  🖼️    │  │  🖼️    │                       │    │
│  │  │ LOGO    │  │ LOGO    │  │ LOGO    │                       │    │
│  │  │ $ 15M   │  │ $ 8M    │  │ $ 3M    │  Stats visibles      │    │
│  │  └─────────┘  └─────────┘  └─────────┘                       │    │
│  └───────────────────────────────────────────────────────────────┘    │
│                                                                         │
│  ┌───────────────────────────────────────────────────────────────┐    │
│  │  🚀 INCUBATEURS & ACCÉLÉRATEURS                               │    │
│  │  ┌─────────┐  ┌─────────┐                                     │    │
│  │  │  🖼️    │  │  🖼️    │                                     │    │
│  │  │ LOGO    │  │ LOGO    │                                     │    │
│  │  │ 10+     │  │ 25+     │  Startups accompagnées              │    │
│  │  │ startups│  │ startups│                                     │    │
│  │  └─────────┘  └─────────┘                                     │    │
│  └───────────────────────────────────────────────────────────────┘    │
│                                                                         │
│  ┌───────────────────────────────────────────────────────────────┐    │
│  │  📢 Appels à Projets & Opportunités                           │    │
│  │  ┌─────────────────┐  ┌─────────────────┐                     │    │
│  │  │ ✅ OUVERT       │  │ 🏅 BIENTÔT     │  Cards avec         │    │
│  │  │ Programme Women │  │ Fonds Innovation│  badges animés      │    │
│  │  │ 💰 5M CFA      │  │ 💰 10M CFA     │                     │    │
│  │  │ 📅 31 mar 2025 │  │ 📅 31 déc 2025 │                     │    │
│  │  │ [Postuler]     │  │ [M’alerter]    │                     │    │
│  │  └─────────────────┘  └─────────────────┘                     │    │
│  └───────────────────────────────────────────────────────────────┘    │
│                                                                         │
│  ┌───────────────────────────────────────────────────────────────┐    │
│  │  🤝 Vous souhaitez devenir partenaire ?                      │    │
│  │                                                                 │   │
│  │      Rejoignez l’écosystème STARTERKITCM et                   │   │
│  │      accompagnez les entrepreneurs camerounais.                  │   │
│  │                                                                 │   │
│  │         [📩 Nous contacter]                                   │   │
│  └───────────────────────────────────────────────────────────────┘    │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## Animations Modernes (Framer Motion)

### 1. Hero Section - Fade + Scale

```javascript
import { motion } from "framer-motion";

const heroVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

const logoScrollVariants = {
  animate: {
    x: [0, -1000],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 20,
        ease: "linear"
      }
    }
  }
};
```

### 2. Cards Partenaires - Stagger Effect

```javascript
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  },
  hover: {
    y: -8,
    scale: 1.02,
    boxShadow: "0 20px 40px rgba(99, 91, 255, 0.15)",
    transition: {
      duration: 0.3
    }
  }
};
```

### 3. Badge Status - Pulse

```javascript
const badgeVariants = {
  open: {
    scale: [1, 1.1, 1],
    boxShadow: [
      "0 0 0 0 rgba(16, 185, 129, 0)",
      "0 0 0 8px rgba(16, 185, 129, 0.2)",
      "0 0 0 0 rgba(16, 185, 129, 0)"
    ],
    transition: {
      duration: 2,
      repeat: Infinity
    }
  }
};
```

### 4. CTA Button - Magnetic

```javascript
const magneticVariants = {
  hover: {
    scale: 1.05,
    boxShadow: "0 15px 40px rgba(99, 91, 255, 0.4)",
    transition: {
      duration: 0.3
    }
  },
  tap: {
    scale: 0.98
  }
};
```

### 5. Scroll Reveal

```javascript
const RevealOnScroll = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.div>
  );
};
```

---

## Données des Partenaires

```javascript
const partners = {
  gouvernement: [
    {
      name: "MINPMEESA",
      fullName: "Ministère de la Petite et Moyenne Entreprise",
      logo: "/logos/minpmeesa.png",
      category: "Gouvernement",
      since: "2022",
      projects: 15,
      color: "#635bff",
      website: "https://www.minpmeesa.cm",
      description: "Ministère de tutelle des PME au Cameroun"
    },
    {
      name: "CCIM",
      fullName: "Chambre de Commerce, d'Industrie et des Mines",
      logo: "/logos/ccim.png",
      category: "Institution",
      since: "2020",
      projects: 8,
      color: "#10B981",
      website: "https://www.ccim.cm",
      description: "Accompagnement des entreprises camerounaises"
    }
  ],
  ong: [
    {
      name: "PNUD",
      fullName: "Programme des Nations Unies pour le Développement",
      logo: "/logos/pnud.png",
      category: "Organisation internationale",
      since: "2021",
      projects: 12,
      funding: "$2M",
      color: "#3B82F6",
      website: "https://www.undp.org",
      description: "Agences ONU pour le développement"
    }
  ],
  financeurs: [
    {
      name: "BNF",
      fullName: "Banque Nationale des Formes",
      logo: "/logos/bnf.png",
      category: "Financeur",
      since: "2023",
      projects: 5,
      funding: "500M XAF",
      color: "#F59E0B",
      website: "#",
      description: "Banque partenaire des PME"
    },
    {
      name: "AFD",
      fullName: "Agence Française de Développement",
      logo: "/logos/afd.png",
      category: "Financeur",
      since: "2022",
      projects: 8,
      funding: "3M€",
      color: "#0066CC",
      website: "https://www.afd.fr",
      description: "Financeur du développement"
    }
  ],
  incubateurs: [
    {
      name: "Make Lab",
      fullName: "Make Lab Incubateur",
      logo: "/logos/makelab.png",
      category: "Incubateur",
      since: "2021",
      startups: 25,
      color: "#EC4899",
      website: "https://makelab.cm",
      description: "Premier incubateur tech du Cameroun"
    },
    {
      name: "Bantoo Hub",
      fullName: "Bantoo Innovation Hub",
      logo: "/logos/bantoo.png",
      category: "Incubateur",
      since: "2022",
      startups: 18,
      color: "#8B5CF6",
      website: "#",
      description: "Hub d'innovation sociale"
    }
  ]
};
```

---

## Composants

### PartnerCard.jsx

```javascript
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";

function PartnerCard({ partner, index }) {
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true }}
      style={{
        background: "white",
        borderRadius: "20px",
        padding: "32px",
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.06)",
        position: "relative",
        overflow: "hidden"
      }}
    >
      {/* Category Badge */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: index * 0.1 }}
        style={{
          position: "absolute",
          top: "16px",
          left: "16px",
          display: "flex",
          alignItems: "center",
          gap: "6px",
          padding: "6px 12px",
          background: `${partner.color}15`,
          borderRadius: "20px",
          fontSize: "12px",
          fontWeight: 600,
          color: partner.color
        }}
      >
        <div style={{
          width: "8px",
          height: "8px",
          borderRadius: "50%",
          background: partner.color
        }} />
        {partner.category}
      </motion.div>

      {/* Logo */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: index * 0.1 + 0.2 }}
        style={{
          width: "100px",
          height: "100px",
          margin: "40px auto 20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#f8fafc",
          borderRadius: "16px"
        }}
      >
        <img
          src={partner.logo}
          alt={partner.name}
          style={{
            width: "80px",
            height: "80px",
            objectFit: "contain"
          }}
        />
      </motion.div>

      {/* Content */}
      <motion.h3
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: index * 0.1 + 0.3 }}
        style={{
          fontSize: "20px",
          fontWeight: 700,
          color: "#1a1a2e",
          textAlign: "center",
          marginBottom: "8px"
        }}
      >
        {partner.name}
      </motion.h3>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: index * 0.1 + 0.4 }}
        style={{
          fontSize: "14px",
          color: "#6b7280",
          textAlign: "center",
          marginBottom: "16px"
        }}
      >
        {partner.description}
      </motion.p>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: index * 0.1 + 0.5 }}
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "24px",
          marginBottom: "20px"
        }}
      >
        {partner.projects && (
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "18px", fontWeight: 700, color: partner.color }}>
              {partner.projects}
            </div>
            <div style={{ fontSize: "11px", color: "#9ca3af" }}>Projets</div>
          </div>
        )}
        {partner.funding && (
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "18px", fontWeight: 700, color: partner.color }}>
              {partner.funding}
            </div>
            <div style={{ fontSize: "11px", color: "#9ca3af" }}>Financé</div>
          </div>
        )}
        {partner.startups && (
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "18px", fontWeight: 700, color: partner.color }}>
              {partner.startups}
            </div>
            <div style={{ fontSize: "11px", color: "#9ca3af" }}>Startups</div>
          </div>
        )}
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: "18px", fontWeight: 700, color: partner.color }}>
            {partner.since}
          </div>
          <div style={{ fontSize: "11px", color: "#9ca3af" }}>Depuis</div>
        </div>
      </motion.div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: index * 0.1 + 0.6 }}
        style={{
          display: "flex",
          gap: "8px"
        }}
      >
        <a
          href={partner.website}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "6px",
            padding: "12px 16px",
            background: partner.color,
            color: "white",
            borderRadius: "10px",
            fontSize: "13px",
            fontWeight: 600,
            textDecoration: "none",
            transition: "all 0.2s"
          }}
        >
          Site web
          <ExternalLink size={14} />
        </a>
      </motion.div>
    </motion.div>
  );
}
```

---

## Design Tokens

```css
:root {
  /* Partenaires */
  --partner-card-bg: #ffffff;
  --partner-card-radius: 20px;
  --partner-card-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
  --partner-card-shadow-hover: 0 20px 40px rgba(99, 91, 255, 0.15);
  
  --partner-logo-size: 100px;
  --partner-gap: 24px;
  
  /* Catégories */
  --cat-gouv-bg: rgba(99, 91, 255, 0.1);
  --cat-gouv-color: #635bff;
  
  --cat-ong-bg: rgba(16, 185, 129, 0.1);
  --cat-ong-color: #10B981;
  
  --cat-finance-bg: rgba(59, 130, 246, 0.1);
  --cat-finance-color: #3B82F6;
  
  --cat-incub-bg: rgba(236, 72, 153, 0.1);
  --cat-incub-color: #EC4899;
  
  /* Hero */
  --hero-padding: 100px 24px;
  --hero-bg: linear-gradient(135deg, #1a1a2e 0%, #2d2d4a 100%);
  
  /* CTA */
  --cta-primary-bg: linear-gradient(135deg, #635bff 0%, #7c3aed 100%);
  --cta-primary-shadow: 0 4px 15px rgba(99, 91, 255, 0.35);
  --cta-hover-shadow: 0 15px 40px rgba(99, 91, 255, 0.4);
}
```

---

## Responsive

```css
/* Desktop */
.partners-grid {
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 24px;
}

/* Tablet */
@media (max-width: 992px) {
  .partners-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Mobile */
@media (max-width: 768px) {
  .partners-grid {
    grid-template-columns: 1fr;
  }
  
  .hero h1 {
    font-size: 32px;
  }
  
  .partner-card {
    padding: 24px;
  }
}
```

---

## Checklist Implémentation

| Priorité | Tâche | Statut |
|----------|-------|--------|
| 🔴 | Créer données partenaires (logos, stats) | À faire |
| 🔴 | Créer PartnerCard.jsx | À faire |
| 🔴 | Créer Partenaires.jsx refondu | À faire |
| 🔴 | Ajouter animations Framer Motion | À faire |
| 🟡 | Responsive design | À faire |
| 🟢 | Accessibilité (ARIA) | À faire |

---

## Fichiers à Créer/Modifier

1. `src/pages/Partenaires/Partenaires.jsx` - Page complète
2. `src/data/partners.data.js` - Données partenaires
3. `public/logos/` - Dossier logos partenaires