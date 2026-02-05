import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

function PublicLayout() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isTransparent = location.pathname === "/" && !scrolled;

  return (
    <div style={{ minHeight: "100vh", background: "#ffffff" }}>
      {/* Header */}
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          background: isTransparent
            ? "transparent"
            : "rgba(255, 255, 255, 0.95)",
          backdropFilter: isTransparent ? "none" : "blur(20px)",
          borderBottom: scrolled ? "1px solid rgba(0, 0, 0, 0.08)" : "none",
          transition: "all 0.3s ease",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 24px",
            height: "72px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Link
            to="/"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              textDecoration: "none",
            }}
          >
            <div
              style={{
                width: "40px",
                height: "40px",
                background: "linear-gradient(135deg, #635bff 0%, #7c3aed 100%)",
                borderRadius: "10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
              >
                <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <span
              style={{
                fontSize: "20px",
                fontWeight: 700,
                background: "linear-gradient(135deg, #635bff 0%, #7c3aed 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              STARTERKITCM
            </span>
          </Link>
          <nav style={{ display: "flex", alignItems: "center", gap: "32px" }}>
            <Link
              to="/parcours"
              style={{
                color: "#1a1a2e",
                fontSize: "14px",
                fontWeight: 500,
                textDecoration: "none",
                opacity: 0.7,
              }}
            >
              Parcours
            </Link>
            <Link
              to="/formations"
              style={{
                color: "#1a1a2e",
                fontSize: "14px",
                fontWeight: 500,
                textDecoration: "none",
                opacity: 0.7,
              }}
            >
              Formations
            </Link>
          </nav>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <Link to="/login">
              <button
                style={{
                  padding: "10px 20px",
                  background: "transparent",
                  border: "none",
                  color: "#1a1a2e",
                  fontSize: "14px",
                  fontWeight: 600,
                  cursor: "pointer",
                  opacity: 0.7,
                }}
              >
                Connexion
              </button>
            </Link>
            <Link to="/signup">
              <button
                style={{
                  padding: "10px 20px",
                  background:
                    "linear-gradient(135deg, #635bff 0%, #7c3aed 100%)",
                  border: "none",
                  borderRadius: "8px",
                  color: "white",
                  fontSize: "14px",
                  fontWeight: 600,
                  cursor: "pointer",
                  boxShadow: "0 4px 12px rgba(99, 91, 255, 0.3)",
                }}
              >
                Commencer
              </button>
            </Link>
          </div>
        </div>
      </header>

      {/* Content */}
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          style={{ paddingTop: "72px" }}
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>

      {/* Footer */}
      <footer style={{ background: "#1a1a2e", padding: "60px 24px 30px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "40px",
              marginBottom: "40px",
            }}
          >
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  marginBottom: "16px",
                }}
              >
                <div
                  style={{
                    width: "36px",
                    height: "36px",
                    background:
                      "linear-gradient(135deg, #635bff 0%, #7c3aed 100%)",
                    borderRadius: "8px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                  >
                    <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <span
                  style={{ fontSize: "16px", fontWeight: 700, color: "white" }}
                >
                  STARTERKITCM
                </span>
              </div>
              <p
                style={{
                  fontSize: "14px",
                  color: "rgba(255,255,255,0.6)",
                  lineHeight: 1.7,
                }}
              >
                La porte d'entrée officielle de l'entrepreneuriat au Cameroun.
              </p>
            </div>
            <div>
              <h4
                style={{
                  fontSize: "14px",
                  fontWeight: 600,
                  color: "white",
                  marginBottom: "16px",
                }}
              >
                Plateforme
              </h4>
              <ul style={{ listStyle: "none", padding: 0 }}>
                {["Parcours", "Formations", "Certification"].map((item) => (
                  <li key={item} style={{ marginBottom: "10px" }}>
                    <a
                      href="#"
                      style={{
                        fontSize: "14px",
                        color: "rgba(255,255,255,0.6)",
                        textDecoration: "none",
                      }}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4
                style={{
                  fontSize: "14px",
                  fontWeight: 600,
                  color: "white",
                  marginBottom: "16px",
                }}
              >
                Contact
              </h4>
              <p
                style={{
                  fontSize: "14px",
                  color: "rgba(255,255,255,0.6)",
                  marginBottom: "8px",
                }}
              >
                contact@starterkitcm.cm
              </p>
              <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.6)" }}>
                Yaoundé, Cameroun
              </p>
            </div>
          </div>
          <div
            style={{
              paddingTop: "24px",
              borderTop: "1px solid rgba(255,255,255,0.1)",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "16px",
            }}
          >
            <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.5)" }}>
              © 2025 STARTERKITCM. Tous droits réservés.
            </p>
            <div style={{ display: "flex", gap: "24px" }}>
              <a
                href="#"
                style={{
                  fontSize: "13px",
                  color: "rgba(255,255,255,0.5)",
                  textDecoration: "none",
                }}
              >
                Confidentialité
              </a>
              <a
                href="#"
                style={{
                  fontSize: "13px",
                  color: "rgba(255,255,255,0.5)",
                  textDecoration: "none",
                }}
              >
                Conditions
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default PublicLayout;
