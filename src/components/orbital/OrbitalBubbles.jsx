import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Hand } from "lucide-react";
import { OrbitalBubble } from "./OrbitalBubble";
import { orbitalBubblesConfig } from "../../data/orbital-bubbles.config";
import { useReducedMotion } from "../../hooks/useOrbitalAnimation";
import "../../styles/orbital-bubbles.css";

/**
 * Layout: Rounded Rectangle Surrounding
 *
 *     ○  ○  ○  ○         ← HAUT (4 bulles)
 *   ○              ○       ← GAUCHE (2 bulles)
 *   ○              ○       ← DROITE (2 bulles)
 *     ○  ○  ○  ○         ← BAS (4 bulles)
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

  const sideOffsetX = width * 0.38;
  const sideOffsetY = height * 0.38;

  // HAUT (4 bulles)
  const topCount = 4;
  const topSpacing = (width * 0.65) / (topCount - 1);
  for (let i = 0; i < topCount && i < count; i++) {
    const bubble = bubbles[i];
    const x = centerX - (width * 0.65) / 2 + topSpacing * i;
    positions[bubble.id] = {
      x: x - 40,
      y: centerY - sideOffsetY - 40,
      side: "top",
    };
  }

  // GAUCHE (2 bulles)
  const leftStart = 4;
  const leftCount = 2;
  const leftSpacing = (height * 0.25) / (leftCount - 1);
  for (let i = 0; i < leftCount && leftStart + i < count; i++) {
    const bubble = bubbles[leftStart + i];
    const y = centerY - (height * 0.25) / 2 + leftSpacing * i;
    const curvedX =
      centerX - sideOffsetX + Math.sin(((i + 1) * Math.PI) / 3) * 30;
    positions[bubble.id] = {
      x: curvedX - 40,
      y: y - 40,
      side: "left",
    };
  }

  // DROITE (2 bulles)
  const rightStart = 6;
  for (let i = 0; i < leftCount && rightStart + i < count; i++) {
    const bubble = bubbles[rightStart + i];
    const y = centerY - (height * 0.25) / 2 + leftSpacing * i;
    const curvedX =
      centerX + sideOffsetX - Math.sin(((i + 1) * Math.PI) / 3) * 30;
    positions[bubble.id] = {
      x: curvedX - 40,
      y: y - 40,
      side: "right",
    };
  }

  // BAS (4 bulles)
  const bottomStart = 8;
  const bottomCount = 4;
  for (let i = 0; i < bottomCount && bottomStart + i < count; i++) {
    const bubble = bubbles[bottomStart + i];
    const x = centerX - (width * 0.65) / 2 + topSpacing * i;
    positions[bubble.id] = {
      x: x - 40,
      y: centerY + sideOffsetY - 40,
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
          Bienvenue sur <span className="highlight">STARTERKIT CM</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          Votre plateforme complète pour développer votre entreprise au
          Cameroun.
          <br />
          Découvrez nos services et ressources adaptés à vos besoins.
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

      {/* Instructions */}
      {!prefersReducedMotion && (
        <motion.div
          className="orbital-instructions"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <Hand size={16} />
          Survolez les bulles pour les explorer
        </motion.div>
      )}
    </div>
  );
}

export default OrbitalBubbles;
