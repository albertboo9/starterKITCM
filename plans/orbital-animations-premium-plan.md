# 🎬 Plan Animations Premium - Orbital Bubbles

## Vision

Créer une expérience d'animation **masterclass** avec Framer Motion :

- **Entrée**: Effet orbital futuriste avec particules
- **Scroll**: Animations réactives au scroll
- **Central**: Contenu qui respire
- **Hover**: Interactions premium avec feedback haptique

---

## 1. Animation d'Entrée Futuriste

### Concept: "Cosmic Launch"

```
┌─────────────────────────────────────────────┐
│                                             │
│    ✨  ✨      ✨  ✨      ✨  ✨            │
│        ╭─────────────────────╮             │
│      ╱    ★ PARTICULES ★    ╲              │
│    ╱    qui convergent      ╲               │
│   │         vers            │               │
│   │    [ CENTRE ]          │               │
│    ╲    puis explosent      ╱               │
│      ╲    en orbites    ╱                  │
│        ╰─────────────────────╯             │
│    ○      ○      ○      ○      ○            │
│                                             │
└─────────────────────────────────────────────┘
```

### Techniques Framer Motion

```javascript
// Staggered orbital reveal avec effet élastique
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const bubbleVariants = {
  hidden: {
    opacity: 0,
    scale: 0,
    x: 0,
    y: 0,
    filter: "blur(20px)",
  },
  visible: {
    opacity: 1,
    scale: 1,
    x: (i) => calculateOrbitX(i),
    y: (i) => calculateOrbitY(i),
    filter: "blur(0px)",
    transition: {
      type: "spring",
      stiffness: 50,
      damping: 15,
      mass: 1,
      delay: i * 0.08,
    },
  },
};

// Effet de "convergence puis explosion"
const entrySequence = [
  { scale: 0, opacity: 0 }, // Départ: centre compact
  { scale: 1.2, opacity: 0.8 }, // Expansion
  { scale: 1, opacity: 1 }, // Position finale
];
```

---

## 2. Animations Scroll

### Scroll Trigger: Vitesse Orbitale

Les bulles accélèrent/décélèrent selon la vitesse de scroll.

```javascript
// Hook pour animation scroll
function useScrollAnimation() {
  const [scrollVelocity, setScrollVelocity] = useState(0);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      const velocity = Math.abs(currentY - lastScrollY.current);
      setScrollVelocity(velocity);
      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return scrollVelocity;
}
```

### Effets selon le Scroll

| Scroll Velocity | Effet                              |
| --------------- | ---------------------------------- |
| 0-5 (lent)      | Rotation normale, flottaison douce |
| 5-15 (moyen)    | Accélération rotation orbitale     |
| 15+ (rapide)    | Effet "warp speed", trails         |

### Parallax Vertical

```javascript
// Chaque rangée bouge à sa vitesse
const parallaxLayers = [
  { side: "top", speed: 0.3, direction: -1 },
  { side: "left", speed: 0.5, direction: 1 },
  { side: "right", speed: 0.5, direction: -1 },
  { side: "bottom", speed: 0.3, direction: 1 },
];
```

---

## 3. Animation du Contenu Central

### Effet "Breathing Core"

```javascript
const centralVariants = {
  idle: {
    scale: 1,
    boxShadow: "0 20px 60px rgba(99, 102, 241, 0.15)",
    transition: {
      duration: 3,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "mirror",
    },
  },
  active: {
    scale: 1.02,
    boxShadow: "0 25px 80px rgba(99, 102, 241, 0.25)",
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};
```

### Pulse Glow

```css
@keyframes coreGlow {
  0%,
  100% {
    box-shadow:
      0 20px 60px rgba(99, 102, 241, 0.15),
      inset 0 0 40px rgba(99, 102, 241, 0.05);
  }
  50% {
    box-shadow:
      0 30px 100px rgba(99, 102, 241, 0.25),
      inset 0 0 60px rgba(99, 102, 241, 0.1);
  }
}
```

---

## 4. Micro-interactions Premium

### Hover: "Magnetic Effect"

Les bulles sont légèrement attirées vers la souris.

```javascript
function useMagneticHover(bubbleId) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!isHovered) return;

      // Calculer direction vers souris
      const angle = Math.atan2(e.clientY - bubbleY, e.clientX - bubbleX);
      const distance = Math.min(20, calculateDistance());

      setPosition({
        x: Math.cos(angle) * distance,
        y: Math.sin(angle) * distance,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isHovered]);

  return position;
}
```

### Click: "Energy Burst"

```javascript
const clickBurst = {
  scale: [1, 1.3, 0.9, 1.1, 1],
  boxShadow: [
    "0 0 0 rgba(99, 102, 241, 0)",
    "0 0 60px rgba(99, 102, 241, 0.8)",
    "0 0 30px rgba(99, 102, 241, 0.4)",
    "0 0 0 rgba(99, 102, 241, 0)",
  ],
  transition: { duration: 0.6 },
};
```

---

## 5. Particules & Effets Visuels

### Particules d'Entrée

```javascript
const ParticleSystem = () => {
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    angle: (i / 20) * Math.PI * 2,
    delay: i * 0.05,
  }));

  return (
    <motion.div className="particles-container">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="particle"
          initial={{
            x: centerX,
            y: centerY,
            scale: 0,
            opacity: 1,
          }}
          animate={{
            x: centerX + Math.cos(p.angle) * 500,
            y: centerY + Math.sin(p.angle) * 500,
            scale: [1, 0],
            opacity: [1, 0],
          }}
          transition={{
            duration: 1.5,
            delay: p.delay,
            ease: "easeOut",
          }}
        />
      ))}
    </motion.div>
  );
};
```

---

## 6. Timeline d'Animation

```
0ms      ──────────────────────────────
          │                           │
          │  Particles convergent     │
          │  vers le centre           │
          │                           │
300ms    ─┼─────────────────────────────
          │                           │
          │  Central content fade in  │
          │  (scale 0.8 → 1)          │
          │                           │
600ms    ─┼─────────────────────────────
          │                           │
          │  Bulles Top row appear    │
          │  (cascade depuis centre)   │
          │                           │
800ms    ─┼─────────────────────────────
          │                           │
          │  Bulles Side appear       │
          │                           │
1000ms   ─┼─────────────────────────────
          │                           │
          │  Bulles Bottom appear     │
          │                           │
1200ms   ─┼─────────────────────────────
          │                           │
          │  Orbital float begins     │
          │  + Instructions fade in  │
          │                           │
∞         Continuous floating + mouse interactions
```

---

## 7. Configuration Framer Motion

```javascript
// Easing premium
const premiumEasings = {
  smooth: [0.4, 0, 0.2, 1], // easeInOut quint
  elastic: [0.68, -0.55, 0.265, 1.55], // elastic out
  explosive: [0, 0.8, 0.2, 1], // easeOut back
  magnetic: [0.5, 0, 0, 1], // easeOut quad
};

// Durations
const premiumDurations = {
  instant: 0.2,
  quick: 0.3,
  medium: 0.5,
  slow: 0.8,
  epic: 1.5,
};
```

---

## 8. Checklist Implémentation

- [ ] **Entrée**: Particles convergent system
- [ ] **Entrée**: Central content breathe animation
- [ ] **Entrée**: Staggered reveal des bulles (top, sides, bottom)
- [ ] **Scroll**: Parallax vertical différencié
- [ ] **Scroll**: Vitesse orbitale réactive
- [ ] **Hover**: Magnetic effect
- [ ] **Hover**: Scale + glow premium
- [ ] **Click**: Energy burst particles
- [ ] **Continu**: Floating idle animation
- [ ] **Mobile**: Simplified animations

---

## 9. Inspirations

- Stripe.com - Floating elements premium
- Apple.com - Smooth scroll interactions
- Linear.app - Micro-interactions polish
- Framer.com - Product animations

---

_Document de référence pour implémentation Phase 2_
