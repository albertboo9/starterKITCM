

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
      <OrbitalBubbles onClick={handleBubbleClick} />
    </div>
  );
}

export default TestOrbitalBubbles;
