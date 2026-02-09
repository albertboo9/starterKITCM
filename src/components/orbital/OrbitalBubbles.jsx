import { useState, useEffect, useRef, useCallback } from "react";
import { motion, useAnimation } from "framer-motion";
import { OrbitalBubble } from "./OrbitalBubble";
import { orbitalBubblesConfig } from "../../data/orbital-bubbles.config";
import "../../styles/orbital-bubbles.css";

/**
 * Simple orbital animation with Framer Motion
 */
export function OrbitalBubbles({ onBubbleClick }) {
  const containerRef = useRef(null);
  const [positions, setPositions] = useState({});
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  // Controls for each bubble
  const controlsRef = useRef({});

  // Update dimensions
  useEffect(() => {
    const updateDimensions = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      setDimensions({
        width: rect.width,
        height: rect.height,
      });
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  // Calculate orbit positions for 6 bubbles in 3 zones (2 per zone)
  const getOrbitConfig = useCallback(
    (index, bubbleId) => {
      const zoneIndex = Math.floor(index / 2) % 3;
      const bubbleInZone = index % 2; // 0 or 1

      // Zone centers (horizontal positions)
      const zoneCenters = [0.17, 0.5, 0.83]; // Left, Center, Right

      // Orbit parameters
      const centerX = dimensions.width * zoneCenters[zoneIndex];
      const centerY = dimensions.height * 0.5;

      // Much slower orbital speed for smooth, elegant movement
      const baseSpeed = 0.00015; // Much slower than 0.0008
      const speed = baseSpeed + index * 0.00002;
      const direction = bubbleInZone === 0 ? 1 : -1;

      // Larger orbit radius for more dramatic movement
      const radiusX = dimensions.width * 0.14;
      const radiusY = dimensions.height * 0.3;

      // Phase offset - 2 bubbles per zone: one at top (0), one at bottom (PI)
      // This ensures bubbles in same zone are 180° apart
      const phase = bubbleInZone === 0 ? 80 : -80;

      return {
        centerX,
        centerY,
        radiusX,
        radiusY,
        speed,
        direction,
        phase,
      };
    },
    [dimensions],
  );

  // Animation loop using requestAnimationFrame
  useEffect(() => {
    if (dimensions.width === 0) return;

    let animationFrameId;
    let startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;

      const newPositions = {};

      orbitalBubblesConfig.forEach((bubble, index) => {
        const config = getOrbitConfig(index, bubble.id);

        const t = elapsed * config.speed * config.direction + config.phase;

        const x = config.centerX + Math.cos(t) * config.radiusX - 55;
        const y = config.centerY + Math.sin(t) * config.radiusY - 55;

        newPositions[bubble.id] = { x, y };
      });

      setPositions(newPositions);
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [dimensions, getOrbitConfig]);

  const handleBubbleClick = useCallback(
    (bubble) => {
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
      aria-label="Navigation orbitale"
    >
      {/* Decorative orbs */}
      <div className="orbital-orb orbital-orb--primary" />
      <div className="orbital-orb orbital-orb--secondary" />

      {/* Orbit paths (subtle) */}
      <svg
        className="orbital-orbits"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
          zIndex: 1,
        }}
      >
        {[0.17, 0.5, 0.83].map((centerX, i) => (
          <ellipse
            key={i}
            cx={dimensions.width * centerX}
            cy={dimensions.height * 0.5}
            rx={dimensions.width * 0.12}
            ry={dimensions.height * 0.25}
            fill="none"
            stroke="rgba(99, 102, 241, 0.06)"
            strokeWidth="1"
            strokeDasharray="4 4"
          />
        ))}
      </svg>

      {/* Institutionnal logos in outer orbits */}
      {dimensions.width > 0 && (
        <>
          {/* Left orbit logo - MINPMEESA */}
          <div
            className="orbital-institution-logo orbital-institution-logo--left"
            style={{
              position: "absolute",
              left: dimensions.width * 0.17,
              top: dimensions.height * 0.5,
              transform: "translate(-50%, -50%)",
              width: "var(--institution-logo-size)",
              height: "var(--institution-logo-size)",
              borderRadius: "50%",
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.85) 100%)",
              boxShadow:
                "0 4px 20px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,1)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 2,
              overflow: "hidden",
            }}
          >
            <img
              src="/logos/minpmeesa.png"
              alt="MINPMEESA"
              style={{
                width: "75%",
                height: "75%",
                objectFit: "contain",
              }}
            />
          </div>

          {/* Right orbit logo - EMBLEME */}
          <div
            className="orbital-institution-logo orbital-institution-logo--right"
            style={{
              position: "absolute",
              left: dimensions.width * 0.83,
              top: dimensions.height * 0.5,
              transform: "translate(-50%, -50%)",
              width: "var(--institution-logo-size)",
              height: "var(--institution-logo-size)",
              borderRadius: "50%",
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.85) 100%)",
              boxShadow:
                "0 4px 20px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,1)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 2,
              overflow: "hidden",
            }}
          >
            <img
              src="/logos/embleme.png"
              alt="Emblème"
              style={{
                width: "75%",
                height: "75%",
                objectFit: "contain",
              }}
            />
          </div>
        </>
      )}

      {/* Bubbles */}
      {orbitalBubblesConfig.map((bubble, index) => {
        const pos = positions[bubble.id] || { x: 0, y: 0 };

        // Assigner chaque bulle à un coin
        const corners = [
          "top-left",
          "top-right",
          "bottom-right",
          "bottom-left",
          "top-right",
          "bottom-left",
        ];
        const corner = corners[index % corners.length];

        return (
          <OrbitalBubble
            key={bubble.id}
            {...bubble}
            position={pos}
            index={index}
            corner={corner}
            image="/bubble.jpg"
            onClick={handleBubbleClick}
          />
        );
      })}

      {/* Central content - VERSION IMPACTANTE */}
      <div
        className="orbital-central-content"
        style={{ transform: "translate(-90px, -95px)" }}
      >
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.5,
            duration: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          style={{
            fontSize: "clamp(42px, 10vw, 72px)",
            fontWeight: 900,
            letterSpacing: "-1px",
           
            textShadow:
              "0 2px 10px rgba(0, 0, 0, 0.15), 0 4px 30px rgba(0, 0, 0, 0.1), 0 0 60px rgba(99, 102, 241, 0.1)",
          }}
        >
          BIENVENUE SUR LE <span className="highlight">STARTER</span>
          <span style={{ color: "#ef4444", fontWeight: 700 }}>KIT</span>
          <span style={{ color: "rgb(255 240 0 / 81%)", fontWeight: 700 }}>
            {" "}
            CM
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.8,
            duration: 0.7,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          style={{
            fontSize: "clamp(18px, 2.8vw, 26px)",
            fontWeight: 600,
            letterSpacing: "0.5px",
            textShadow: "0 1px 10px rgba(0, 0, 0, 0.08)",
            whiteSpace: "nowrap",
          }}
        >
          La plateforme connectée du{" "}
          <span style={{ color: "#10b981", fontWeight: 700 }}>CAMEROUN</span>{" "}
          pour entreprendre en toute confiance.
        </motion.p>

        <motion.div
          className="cta-container"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 1.1,
            duration: 0.6,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          <motion.button
            className="btn-primary"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.25 }}
          >
            Découvrir
          </motion.button>

          {/* Logo APME Circle */}
          <motion.div
            className="apme-logo-circle"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.3, duration: 0.5 }}
            whileHover={{ scale: 1.08 }}
          >
            <img
              src="/logos/partners/APME.png"
              alt="APME Cameroun"
              className="apme-logo-img"
            />
          </motion.div>

          <motion.button
            className="btn-secondary"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.25 }}
          >
            Parcours
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}

export default OrbitalBubbles;
