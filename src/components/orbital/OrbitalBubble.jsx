import { forwardRef } from "react";
import { motion } from "framer-motion";
import * as Icons from "lucide-react";

/**
 * OrbitalBubble - Bulle avec animation de flottaison simple
 */

/**
 * Configuration des animations de flottaison
 * Chaque bulle a un décalage de phase différent pour un effet naturel
 */
const floatDelays = {
  top: [0, 0.5, 1, 1.5],
  left: [0.3, 1.8],
  right: [0.8, 2.2],
  bottom: [0.2, 0.7, 1.2, 1.7],
};

export const OrbitalBubble = forwardRef(function OrbitalBubble(
  {
    id,
    title,
    icon,
    category,
    color,
    index,
    position,
    onClick,
    side = "top",
    className,
    style,
    ...props
  },
  ref,
) {
  // Récupérer le composant d'icône
  const IconComponent = Icons[icon] || Icons.HelpCircle;

  // Calculer le délai de flottaison basé sur le côté et l'index
  const sideDelays = floatDelays[side] || floatDelays.top;
  const floatDelay = sideDelays[index % sideDelays.length];

  // Délai d'entrée staggeré
  const enterDelay = index * 0.08;

  return (
    <motion.div
      ref={ref}
      className={`orbital-bubble ${className || ""}`}
      data-category={category}
      style={{
        ...style,
        "--glow-color": color,
        color: color,
        left: position?.x,
        top: position?.y,
      }}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{
        opacity: 1,
        scale: 1,
        y: [0, -8, 0], // Animation de flottaison simple: haut → bas → haut
      }}
      transition={{
        // Animation d'entrée
        duration: 0.8,
        delay: enterDelay,
        ease: [0.34, 1.56, 0.64, 1], // elastic easing

        // Animation de flottaison continue
        y: {
          duration: 3,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
          delay: floatDelay,
        },
      }}
      whileHover={{
        scale: 1.15,
        y: -24,
        boxShadow: `0 20px 40px rgba(0, 0, 0, 0.12), 0 0 30px ${color}`,
      }}
      whileTap={{ scale: 0.95 }}
      onClick={() => onClick?.({ id, title, category })}
      role="button"
      tabIndex={0}
      aria-label={`${title} - ${category}`}
      title={title}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick?.({ id, title, category });
        }
      }}
      {...props}
    >
      {/* Icône */}
      <span className="orbital-bubble-icon">
        <IconComponent size={24} strokeWidth={1.5} style={{ color: color }} />
      </span>

      {/* Titre */}
      <span className="orbital-bubble-title">{title}</span>
    </motion.div>
  );
});

export default OrbitalBubble;
