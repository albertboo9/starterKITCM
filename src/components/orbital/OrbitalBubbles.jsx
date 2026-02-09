import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Hand } from "lucide-react";
import { OrbitalBubble } from "./OrbitalBubble";
import { orbitalBubblesConfig } from "../../data/orbital-bubbles.config";
import { useReducedMotion } from "../../hooks/useOrbitalAnimation";
import "../../styles/orbital-bubbles.css";

/**
 * Layout: 6 Bulles - Disposition Équilibrée
 *
 *        ○  ○  ○            ← TOP (3 bulles)
 *
 *      ○        ○          ← SIDES (2 bulles)
 *
 *          ○              ← BOTTOM (1 bulle)
 */
function calculateSurroundingPositions(
  bubbles,
  centerX,
  centerY,
  width,
  height,
) {
  const positions = {};
  const count = bubbles.length;

  const offsetX = width * 0.35;
  const offsetY = height * 0.35;

  // TOP (3 bulles) - demi-cercle supérieur
  const topCount = 3;
  const topSpacing = (width * 0.5) / (topCount - 1);
  for (let i = 0; i < topCount && i < count; i++) {
    const bubble = bubbles[i];
    const x = centerX - (width * 0.5) / 2 + topSpacing * i;
    // Position en arc de cercle
    const angle = Math.PI + (Math.PI / topCount) * i;
    const curvedX = centerX + Math.cos(angle) * offsetX * 0.8;
    const curvedY = centerY - offsetY - Math.sin(angle) * offsetY * 0.3;
    positions[bubble.id] = {
      x: curvedX - 40,
      y: curvedY - 40,
      side: "top",
    };
  }

  // SIDES (2 bulles) - gauche et droite
  const sideStart = 3;
  const sideCount = 2;
  for (let i = 0; i < sideCount && sideStart + i < count; i++) {
    const bubble = bubbles[sideStart + i];
    const isLeft = i === 0;
    const y = centerY - (height * 0.15) + (height * 0.3) * i;
    const x = isLeft ? centerX - offsetX : centerX + offsetX;
    positions[bubble.id] = {
      x: x - 40,
      y: y - 40,
      side: isLeft ? "left" : "right",
    };
  }

  // BOTTOM (1 bulle) - centre bas
  const bottomStart = 5;
  if (bottomStart < count) {
    const bubble = bubbles[bottomStart];
    positions[bubble.id] = {
      x: centerX - 40,
      y: centerY + offsetY - 40,
      side: "bottom",
    };
  }

  return positions;
}

/**
 * Composant Principal - Orbital Bubbles
 */
export function OrbitalBubbles({ onBubbleClick }) {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [positions, setPositions] = useState({});
  const prefersReducedMotion = useReducedMotion();

  const [dimensions, setDimensions] = useState({
    centerX: 0,
    centerY: 0,
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const updateDimensions = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();

      setDimensions({
        centerX: rect.width / 2,
        centerY: rect.height / 2,
        width: rect.width,
        height: rect.height,
      });
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);

    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => {
      window.removeEventListener("resize", updateDimensions);
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    if (!dimensions.centerX || !dimensions.centerY) return;

    const { centerX, centerY, width, height } = dimensions;

    const newPositions = calculateSurroundingPositions(
      orbitalBubblesConfig,
      centerX,
      centerY,
      width,
      height,
    );

    setPositions(newPositions);
  }, [dimensions]);

  const handleBubbleClick = useCallback(
    (bubble) => {
      console.log("Bubble clicked:", bubble);
      if (onBubbleClick) {
        onBubbleClick(bubble);
      }
    },
    [onBubbleClick],
  );

  return (
    <div
      ref={containerRef}
      className="orbital-bubbles-container"
      role="region"
      aria-label="Navigation orbitale des services"
    >
      {/* Orbs décoratifs */}
      <div className="orbital-orb orbital-orb--primary" />
      <div className="orbital-orb orbital-orb--secondary" />

      {/* Wrapper pour les bulles */}
      <div className="orbital-bubbles-wrapper">
        <AnimatePresence mode="wait">
          {isVisible &&
            orbitalBubblesConfig.map((bubble, index) => {
              const position = positions[bubble.id] || { x: 0, y: 0 };

              return (
                <OrbitalBubble
                  key={bubble.id}
                  {...bubble}
                  index={index}
                  position={{ x: position.x || 0, y: position.y || 0 }}
                  onClick={handleBubbleClick}
                />
              );
            })}
        </AnimatePresence>
      </div>

      {/* Contenu central - VERSION AGRANDIE */}
      <div className="orbital-central-content">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Bienvenue sur le <span className="highlight">STARTER</span><span style={{color: "#ef4444", fontWeight: 700}}>KIT</span><span style={{color: "#eab308", fontWeight: 700}}> CM</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          La plateforme connectée du CAMEROUN pour entreprendre en toute
          confiance.
        </motion.p>

        <motion.div
          className="cta-container"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          <motion.button
            className="btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Découvrir
          </motion.button>
          <motion.button
            className="btn-secondary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Parcours
          </motion.button>
        </motion.div>
      </div>


    </div>
  );
}

export default OrbitalBubbles;
