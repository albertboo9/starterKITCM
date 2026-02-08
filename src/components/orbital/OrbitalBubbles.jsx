import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Hand, Sparkles } from "lucide-react";
import { OrbitalBubble } from "./OrbitalBubble";
import {
  orbitalBubblesConfig,
  animationConfig,
} from "../../data/orbital-bubbles.config";
import {
  useMousePosition,
  useReducedMotion,
} from "../../hooks/useOrbitalAnimation";
import "../../styles/orbital-bubbles.css";

/**
 * Layout: Rounded Rectangle Surrounding
 *
 *     ○  ○  ○  ○         ← HAUT (4 bulles, écartées)
 *   ○              ○       ← GAUCHE + DROITE (rapproché vers centre)
 *   ○              ○       ← Forme légèrement incurvée
 *     ○  ○  ○  ○         ← BAS (4 bulles, écartées)
 *
 * Les côtés sont légèrement incurvés vers le centre
 */
function calculateSurroundingPositions(
  bubbles,
  centerX,
  centerY,
  width,
  height
) {
  const positions = {};
  const count = bubbles.length;

  // Distances depuis le centre
  const sideOffsetX = width * 0.38; // Légèrement réduit vers le centre
  const sideOffsetY = height * 0.38;

  // Bulles HAUT (4 bulles - plus écartées)
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

  // Bulles GAUCHE (2 bulles - plus rapprochées, vers le centre)
  const leftStart = 4;
  const leftCount = 2;
  // Les rapprocher verticalement
  const leftSpacing = (height * 0.25) / (leftCount - 1);
  for (let i = 0; i < leftCount && leftStart + i < count; i++) {
    const bubble = bubbles[leftStart + i];
    const y = centerY - (height * 0.25) / 2 + leftSpacing * i;
    // Légèrement vers le centre
    const curvedX = centerX - sideOffsetX + Math.sin((i + 1) * Math.PI / 3) * 30;
    positions[bubble.id] = {
      x: curvedX - 40,
      y: y - 40,
      side: "left",
    };
  }

  // Bulles DROITE (2 bulles - plus rapprochées, vers le centre)
  const rightStart = 6;
  for (let i = 0; i < leftCount && rightStart + i < count; i++) {
    const bubble = bubbles[rightStart + i];
    const y = centerY - (height * 0.25) / 2 + leftSpacing * i;
    // Légèrement vers le centre (courbe inverse)
    const curvedX = centerX + sideOffsetX - Math.sin((i + 1) * Math.PI / 3) * 30;
    positions[bubble.id] = {
      x: curvedX - 40,
      y: y - 40,
      side: "right",
    };
  }

  // Bulles BAS (4 bulles - plus écartées)
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
 * Layout: Ellipse Courbe (alternative plus fluide)
 */
function calculateCurvedPositions(
  bubbles,
  centerX,
  centerY,
  width,
  height
) {
  const positions = {};
  const count = bubbles.length;

  // Facteur de courbure (0 = rectangle, 1 = cercle)
  const curvature = 0.15;

  bubbles.forEach((bubble, index) => {
    // Distribution sur les 4 côtés
    const sideLength = count / 4;
    const side = Math.floor(index / sideLength);
    const sideIndex = index % sideLength;

    let baseAngle, radius;

    switch (side) {
      case 0: // HAUT
        baseAngle = -Math.PI / 2;
        radius = Math.min(width, height) * 0.42;
        const topX = centerX + (sideIndex - (sideLength - 1) / 2) * (width * 0.2);
        const topY = centerY - radius * (1 - curvature);
        positions[bubble.id] = {
          x: topX - 40,
          y: topY - 40,
        };
        break;
      case 1: // DROITE
        baseAngle = 0;
        radius = Math.min(width, height) * 0.42;
        const rightY = centerY + (sideIndex - (sideLength - 1) / 2) * (height * 0.12);
        const rightX = centerX + radius * (1 - curvature);
        positions[bubble.id] = {
          x: rightX - 40,
          y: rightY - 40,
        };
        break;
      case 2: // BAS
        baseAngle = Math.PI / 2;
        radius = Math.min(width, height) * 0.42;
        const bottomX = centerX + ((sideLength - 1) / 2 - sideIndex) * (width * 0.2);
        const bottomY = centerY + radius * (1 - curvature);
        positions[bubble.id] = {
          x: bottomX - 40,
          y: bottomY - 40,
        };
        break;
      case 3: // GAUCHE
        baseAngle = Math.PI;
        radius = Math.min(width, height) * 0.42;
        const leftY = centerY + ((sideLength - 1) / 2 - sideIndex) * (height * 0.12);
        const leftX = centerX - radius * (1 - curvature);
        positions[bubble.id] = {
          x: leftX - 40,
          y: leftY - 40,
        };
        break;
    }
  });

  return positions;
}

/**
 * Composant Principal - Orbital Bubbles
 *
 * Layout: Rounded Rectangle avec côtés incurvés
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
    }, 150);

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
      height
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
    [onBubbleClick]
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
                  ref={null}
                  {...bubble}
                  index={index}
                  position={{ x: position.x || 0, y: position.y || 0 }}
                  onClick={handleBubbleClick}
                  className="orbital-bubble--entering"
                />
              );
            })}
        </AnimatePresence>
      </div>

      {/* Contenu central */}
      <div
        className="orbital-central-content"
        style={{
          maxWidth: "320px",
          padding: "28px 36px",
        }}
      >
        <h1
          style={{
            fontSize: "clamp(16px, 2vw, 22px)",
            marginBottom: "8px",
          }}
        >
          Bienvenue sur <span>STARTERKIT CM</span>
        </h1>
        <p
          style={{
            fontSize: "clamp(10px, 1.2vw, 13px)",
            marginBottom: "16px",
            lineHeight: "1.4",
          }}
        >
          Votre plateforme pour développer votre entreprise au Cameroun.
        </p>
        <div className="cta-container" style={{ gap: "6px" }}>
          <motion.button
            className="btn-primary"
            style={{ padding: "6px 14px", fontSize: "11px" }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Découvrir
          </motion.button>
          <motion.button
            className="btn-outline"
            style={{ padding: "6px 14px", fontSize: "11px" }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Parcours
          </motion.button>
        </div>
      </div>

      {/* Instructions */}
      {!prefersReducedMotion && (
        <motion.div
          className="orbital-instructions"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          <Hand size={16} />
          Survolez les bulles pour les explorer
        </motion.div>
      )}
    </div>
  );
}

export default OrbitalBubbles;
