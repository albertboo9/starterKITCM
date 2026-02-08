/**
 * Page de Test - Orbital Bubbles
 *
 * Cette page sert à tester et développer le composant OrbitalBubbles
 * Accéder via: /test-orbital
 */

import { useState } from "react";
import { OrbitalBubbles } from "../components/orbital/OrbitalBubbles";

export function TestOrbitalBubbles() {
  const [lastClicked, setLastClicked] = useState(null);

  const handleBubbleClick = (bubble) => {
    console.log("🫧 Bubble cliqué:", bubble);
    setLastClicked(bubble);
  };

  return (
    <div style={{ width: "100%", height: "100vh" }}>
      {/* Overlay pour voir les clics */}
      <div
        style={{
          position: "fixed",
          top: 20,
          left: 20,
          zIndex: 1000,
          background: "rgba(15, 23, 42, 0.95)",
          color: "white",
          padding: "16px 24px",
          borderRadius: "12px",
          fontFamily: "Inter, sans-serif",
          fontSize: "14px",
          boxShadow: "0 10px 40px rgba(0,0,0,0.2)",
        }}
      >
        <h3 style={{ margin: "0 0 8px 0", fontSize: "16px", fontWeight: 700 }}>
          🧪 Panel de Test
        </h3>
        <p style={{ margin: 0, opacity: 0.8 }}>
          Dernier clic:{" "}
          <strong>{lastClicked ? lastClicked.title : "Aucun"}</strong>
        </p>
        <p style={{ margin: "8px 0 0 0", fontSize: "12px", opacity: 0.6 }}>
          Catégorie: {lastClicked?.category || "-"}
        </p>
      </div>

      {/* Instructions */}
      <div
        style={{
          position: "fixed",
          top: 20,
          right: 20,
          zIndex: 1000,
          background: "rgba(15, 23, 42, 0.95)",
          color: "white",
          padding: "16px 24px",
          borderRadius: "12px",
          fontFamily: "Inter, sans-serif",
          fontSize: "13px",
          maxWidth: "280px",
          boxShadow: "0 10px 40px rgba(0,0,0,0.2)",
        }}
      >
        <h4 style={{ margin: "0 0 12px 0", fontSize: "14px", fontWeight: 600 }}>
          📋 Instructions de Test
        </h4>
        <ul style={{ margin: 0, padding: "0 0 0 16px", opacity: 0.8 }}>
          <li style={{ marginBottom: "4px" }}>
            Survolez les bulles pour voir l'effet hover
          </li>
          <li style={{ marginBottom: "4px" }}>Observez l'animation d'entrée</li>
          <li style={{ marginBottom: "4px" }}>Cliquez pour voir les données</li>
          <li style={{ marginBottom: "4px" }}>
            Testez le responsive (redimensionnez)
          </li>
          <li>Vérifiez les 12 catégories</li>
        </ul>
      </div>

      {/* Composant à tester */}
      <OrbitalBubbles onClick={handleBubbleClick} />
    </div>
  );
}

export default TestOrbitalBubbles;
