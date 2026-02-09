# 🚀 REDESIGN ORBITAL BUBBLES - 9 BULLES TOTAL

## 📋 Vue d'Ensemble du Projet

### Objectif
Rethinker la page d'accueil avec **9 bulles orbitales** au lieu de 6, comprenant:
- **3 bulles institutionnelles** (logos officiels)
- **3 bulles agrandies** (services clés)
- **3 bulles normales** (autres services)

---

## 🎯 Spécifications Détaillées

### Structure des 9 Bulles

| # | ID | Nom | Type | Taille | Zone |
|---|-----|-----|------|--------|------|
| 1 | `apme` | APME Cameroun | Institutionnelle | **150px** | Gauche (coin) |
| 2 | `embleme` | Emblème Cameroun | Institutionnelle | **150px** | Gauche (orbite) |
| 3 | `minpmeesa` | MINPMEESA | Institutionnelle | **150px** | Gauche (orbite) |
| 4 | `financement` | Financement | Service GRD | **140px** | Centre (haut) |
| 5 | `entreprise` | Entreprise | Service GRD | **140px** | Centre (milieu) |
| 6 | `formation` | Formation | Service GRD | **140px** | Centre (bas) |
| 7 | `reseau` | Réseau | Service Normal | 100px | Droite (haut) |
| 8 | `equipe` | Équipe | Service Normal | 100px | Droite (milieu) |
| 9 | `autrement` | Autrement | Service Normal | 100px | Droite (bas) |

---

## 📐 Architecture Technique

### 1. Configuration des Bulles (`orbital-bubbles.config.js`)

```javascript
export const orbitalBubblesConfig = [
  // BULLES INSTITUTIONNELLES (Zone Gauche - Coin fixe)
  {
    id: "apme",
    title: "APME Cameroun",
    icon: null, // Pas d'icône, juste le logo
    logo: "/logos/APME.png",
    type: "institution",
    size: 150,
    isFixed: true, // Position fixe, pas d'orbite
    corner: "top-left",
  },
  {
    id: "embleme",
    title: "République du Cameroun",
    icon: null,
    logo: "/logos/embleme.png",
    type: "institution",
    size: 150,
    isFixed: false,
  },
  {
    id: "minpmeesa",
    title: "MINPMEESA",
    icon: null,
    logo: "/logos/minpmeesa.png",
    type: "institution",
    size: 150,
    isFixed: false,
  },
  // BULLES SERVICES GRD (Zone Centre - Orbite verticale)
  {
    id: "financement",
    title: "Financement",
    icon: "💰",
    type: "service-grd",
    size: 140,
    category: "funding",
  },
  {
    id: "entreprise",
    title: "Entreprise",
    icon: "🏢",
    type: "service-grd",
    size: 140,
    category: "business",
  },
  {
    id: "formation",
    title: "Formation",
    icon: "📚",
    type: "service-grd",
    size: 140,
    category: "education",
  },
  // BULLES SERVICES NORMAUX (Zone Droite - Orbite verticale)
  {
    id: "reseau",
    title: "Réseau",
    icon: "👥",
    type: "service-normal",
    size: 100,
    category: "network",
  },
  {
    id: "equipe",
    title: "Équipe",
    icon: "➕",
    type: "service-normal",
    size: 100,
    category: "team",
  },
  {
    id: "autrement",
    title: "Autrement",
    icon: "🚀",
    type: "service-normal",
    size: 100,
    category: "other",
  },
];
```

### 2. Composant OrbitalBubbles - Modifications

```javascript
// Nouvelles fonctions pour gérer les différents types de bulles

const getOrbitConfig = useCallback((index, bubble) => {
  // Bulles institutionnelles (indices 0-2) : Zone gauche
  if (bubble.type === "institution") {
    const zoneCenters = [0.15, 0.25, 0.35]; // Zone gauche élargie
    return {
      centerX: dimensions.width * zoneCenters[index],
      centerY: dimensions.height * 0.5,
      radiusX: dimensions.width * 0.08,
      radiusY: dimensions.height * 0.25,
      speed: 0.0001,
      direction: index % 2 === 0 ? 1 : -1,
      phase: index * Math.PI / 3, // 60° d'écart
    };
  }
  
  // Bulles services GRD (indices 3-5) : Zone centre
  if (bubble.type === "service-grd") {
    return {
      centerX: dimensions.width * 0.5,
      centerY: dimensions.height * 0.5,
      radiusX: dimensions.width * 0.12,
      radiusY: dimensions.height * 0.30,
      speed: 0.00012,
      direction: index % 2 === 0 ? 1 : -1,
      phase: (index - 3) * Math.PI, // 180° d'écart
    };
  }
  
  // Bulles services normaux (indices 6-8) : Zone droite
  return {
    centerX: dimensions.width * 0.75,
    centerY: dimensions.height * 0.5,
    radiusX: dimensions.width * 0.08,
    radiusY: dimensions.height * 0.20,
    speed: 0.00015,
    direction: index % 2 === 0 ? 1 : -1,
    phase: (index - 6) * Math.PI, // 180° d'écart
  };
}, [dimensions]);
```

### 3. Composant OrbitalBubble - Améliorations

```javascript
export function OrbitalBubble({ logo, type, size, ...props }) {
  return (
    <motion.div
      className={`orbital-bubble orbital-bubble--${type}`}
      style={{
        width: size,
        height: size,
        "--bubble-size": `${size}px`,
      }}
      initial={...}
      whileHover={{ scale: 1.1 }}
    >
      {logo && (
        <img
          src={logo}
          alt={props.title}
          className="orbital-bubble-logo"
          style={{
            width: type === "institution" ? "80%" : "60%",
            height: "auto",
          }}
        />
      )}
      {!logo && <BubbleIcon {...props} />}
      <span className="orbital-bubble-title">{props.title}</span>
    </motion.div>
  );
}
```

### 4. CSS - Nouvelles Variables et Styles

```css
:root {
  /* Sizes */
  --bubble-size-institution: 150px;
  --bubble-size-grd: 140px;
  --bubble-size-normal: 100px;
  
  /* Colors */
  --color-institution: #1a1a2e;
  --color-grd: #6366f1;
  --color-normal: #64748b;
}

/* Institution bubbles */
.orbital-bubble--institution {
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.98) 0%,
    rgba(248, 250, 252, 0.95) 100%
  );
  border: 3px solid rgba(26, 26, 46, 0.1);
  box-shadow:
    0 8px 32px rgba(0, 0, 0, 0.08),
    0 2px 16px rgba(0, 0, 0, 0.04),
    inset 0 1px 0 rgba(255, 255, 255, 1);
}

.orbital-bubble--institution:hover {
  border-color: rgba(26, 26, 46, 0.3);
  box-shadow:
    0 12px 48px rgba(0, 0, 0, 0.12),
    0 4px 24px rgba(0, 0, 0, 0.06),
    inset 0 1px 0 rgba(255, 255, 255, 1),
    0 0 40px rgba(26, 26, 46, 0.1);
}

/* GRD Service bubbles */
.orbital-bubble--service-grd {
  border-width: 3px;
}

.orbital-bubble--service-grd:hover {
  transform: scale(1.15) translateY(-10px);
}

/* Normal Service bubbles */
.orbital-bubble--service-normal {
  opacity: 0.9;
}

.orbital-bubble--service-normal:hover {
  transform: scale(1.1) translateY(-5px);
}
```

---

## 🎨 Design Visuel

### Disposition des Zones

```
┌─────────────────────────────────────────────────────────────┐
│                                                              │
│    🖼️ APME           💰 FINANCEMENT           👥 RÉSEAU    │
│   (150px)           (140px)                   (100px)     │
│                                                              │
│    🖼️ EMBLÈME        🏢 ENTREPRISE             ➕ ÉQUIPE    │
│   (150px)           (140px)                   (100px)     │
│                                                              │
│    🖼️ MINPMEESA     📚 FORMATION              🚀 AUTREMENT││   (150px)           (140px)                   (100px)     │
│                                                              │
├─────────────────────────────────────────────────────────────┤
│                    CENTRE (LOGO APME)                       │
│                  DÉCOUVRIR    |    PARCOURS                 │
└─────────────────────────────────────────────────────────────┘
```

### Animations d'Entrée

| Type de Bulle | Direction d'Entrée | Délai |
|---------------|-------------------|-------|
| Institutionnelle (APME) | Depuis le haut-gauche | 0.1s |
| Institutionnelle (Emblème) | Depuis la gauche | 0.2s |
| Institutionnelle (MINPMEESA) | Depuis le bas-gauche | 0.3s |
| Service GRD (Haut) | Depuis le haut | 0.4s |
| Service GRD (Milieu) | Depuis le haut | 0.5s |
| Service GRD (Bas) | Depuis le haut | 0.6s |
| Service Normal (Haut) | Depuis le haut-droit | 0.7s |
| Service Normal (Milieu) | Depuis le haut-droit | 0.8s |
| Service Normal (Bas) | Depuis le haut-droit | 0.9s |

---

## 📝 Liste des Tâches

### Phase 1: Configuration
- [ ] Mettre à jour `orbital-bubbles.config.js` avec les 9 bulles
- [ ] Ajouter les logos dans le dossier public/logos/

### Phase 2: Composants
- [ ] Modifier `OrbitalBubble.jsx` pour supporter les logos
- [ ] Ajouter la prop `type` pour différencier les styles
- [ ] Ajouter la prop `size` pour les différentes tailles

### Phase 3: Animation
- [ ] Mettre à jour `OrbitalBubbles.jsx` pour gérer 3 zones
- [ ] Créer 3 fonctions d'orbite différentes (institution, GRD, normal)
- [ ] Ajuster les délais d'entrée par type de bulle

### Phase 4: Styles
- [ ] Mettre à jour `orbital-bubbles.css` avec les nouvelles variables
- [ ] Ajouter les styles pour les bulles institutionnelles
- [ ] Ajouter les styles pour les bulles agrandies

### Phase 5: Tests
- [ ] Vérifier l'affichage sur desktop (1920px, 1440px, 1280px)
- [ ] Vérifier l'affichage sur tablette (768px)
- [ ] Vérifier l'affichage sur mobile (375px)
- [ ] Tester les interactions hover

---

## 🔧 Fichiers à Modifier

| Fichier | Action |
|---------|--------|
| `src/data/orbital-bubbles.config.js` | Réécrire avec 9 bulles |
| `src/components/orbital/OrbitalBubble.jsx` | Ajouter support logo + type |
| `src/components/orbital/OrbitalBubbles.jsx` | Adapter pour 3 zones |
| `src/styles/orbital-bubbles.css` | Ajouter nouveaux styles |

---

## 📊 Tailles Comparatives

```
100px (Normal)  ←──→  140px (GRD)  ←──→  150px (Institution)
     ○                   ⊕                    ⊛
   Titres             Titres               Logos
   Icônes             Icônes              Institutionnels
   normaux            agrandis              visibles
```

---

## 🎯 Objectifs Visuels

1. **Lisibilité** : Bulles institutionnelles très visibles (150px)
2. **Hiérarchie** : Services GRD mis en avant (140px)
3. **Cohérence** : Services normaux discrets (100px)
4. **Impact** : Sentir le côté institutionnel immédiatement
5. **Animation** : Mouvement fluide et élégant
