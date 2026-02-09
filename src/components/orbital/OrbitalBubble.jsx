import { forwardRef } from "react";
import { motion } from "framer-motion";
import * as Icons from "lucide-react";

/**
 * OrbitalBubble - Bulle avec animation premium et fluide
 * Animations lentes, élégantes avec entrée staggerée
 */

// Délais d'entrée pour chaque index (0-5) - entrée cascade élégante
const enterDelays = [0, 0.2, 0.4, 0.6, 0.8, 1.0];

// Durées d'animation pour effet premium
const ANIMATION_DURATION = 0.8;
const HOVER_DURATION = 0.4;

export const OrbitalBubble = forwardRef(function OrbitalBubble(
  {
    id,
    title,
    icon,
    category,
    color,
    description,
    index,
    position,
    onClick,
    className,
    style,
    ...props
  },
  ref,
) {
  // Récupérer le composant d'icône
  const IconComponent = Icons[icon] || Icons.HelpCircle;

  // Délai de'entrée selon l'index
  const enterDelay = enterDelays[index % enterDelays.length];

  return (
    <motion.div
      ref={ref}
      className={`orbital-bubble ${className || ""}`}
      data-category={category}
      style={{
        ...style,
        "--glow-color": color,
        left: position?.x,
        top: position?.y,
      }}
      // Entrée élégante avec scale et opacity
      initial={{ opacity: 0, scale: 0.3, y: 50 }}
      animate={{
        opacity: 1,
        scale: 1,
        y: 0,
      }}
      transition={{
        duration: ANIMATION_DURATION,
        delay: enterDelay,
        ease: [0.25, 0.46, 0.45, 0.94], // Ease premium smooth
      }}
      // Hover avec effet de "levée" elegant
      whileHover={{
        scale: 1.12,
        y: -12,
        transition: { duration: HOVER_DURATION, ease: "easeOut" }
      }}
      whileTap={{ scale: 0.96 }}
      onClick={() => onClick?.({ id, title, category })}
      role="button"
      tabIndex={0}
      aria-label={`${title} - ${description || category}`}
      {...props}
    >
      {/* Glow effect au hover */}
      <motion.span
        className="orbital-bubble-glow"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        style={{
          position: "absolute",
          inset: -8,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${color}20 0%, transparent 70%)`,
          filter: "blur(12px)",
          zIndex: -1,
        }}
      />

      {/* Icône */}
      <span className="orbital-bubble-icon">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: enterDelay + 0.2, duration: 0.4 }}
        >
          <IconComponent size={28} strokeWidth={1.5} color={color} />
        </motion.div>
      </span>

      {/* Titre avec révélation */}
      <motion.span
        className="orbital-bubble-title"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: enterDelay + 0.15, duration: 0.4 }}
        style={{ color: color }}
      >
        {title}
      </motion.span>

      {/* Description courte */}
      {description && (
        <motion.span
          className="orbital-bubble-description"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.85 }}
          transition={{ delay: enterDelay + 0.25, duration: 0.4 }}
        >
          {description}
        </motion.span>
      )}
    </motion.div>
  );
});

export default OrbitalBubble;
