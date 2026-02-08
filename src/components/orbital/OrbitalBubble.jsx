import { forwardRef } from "react";
import { motion } from "framer-motion";
import * as Icons from "lucide-react";

/**
 * Composant OrbitalBubble
 *
 * Bulle individuelle avec icône, titre et animations
 *
 * @param {string} id - Identifiant unique
 * @param {string} title - Titre affiché
 * @param {string} icon - Nom de l'icône Lucide
 * @param {string} category - Catégorie pour la couleur
 * @param {string} color - Couleur CSS variable
 * @param {number} index - Index pour les animations staggerées
 * @param {object} position - Position {x, y}
 * @param {function} onClick - Handler click
 */
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
    style,
    className,
    ...props
  },
  ref,
) {
  // Récupérer le composant d'icône correspondant
  const IconComponent = Icons[icon] || Icons.HelpCircle;

  // Calculer le délai d'animation basé sur l'index
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
        // Position initiale pour l'animation
        x: 0,
        y: 80,
      }}
      initial={{ opacity: 0, scale: 0.5, y: 80 }}
      animate={{
        opacity: 1,
        scale: 1,
        y: 0,
        x: 0,
      }}
      transition={{
        duration: 0.8,
        delay: enterDelay,
        ease: [0.34, 1.56, 0.64, 1], // elastic
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

      {/* Titre (masqué sur mobile) */}
      <span className="orbital-bubble-title">{title}</span>
    </motion.div>
  );
});

export default OrbitalBubble;
