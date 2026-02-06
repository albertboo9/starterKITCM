import { Link, useLocation } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { Outlet } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";
import {
  BookOpen,
  Search,
  Users,
  Lightbulb,
  Rocket,
  Building2,
  ChevronDown,
} from "lucide-react";

function PublicLayout() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const { language, toggleLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const isTransparent = location.pathname === "/" && !scrolled;

  const navItems = [
    { path: "/parcours", label: "Parcours" },
    { path: "/formations", label: "Formations" },
  ];

  const resourcesMenu = [
    {
      path: "/ressources/outils-bons-plans",
      label: "Boîtes à outils & Bons plans",
      icon: BookOpen,
      color: "#8B5CF6",
      description: "Articles, modèles et conseils pratiques",
    },
    {
      path: "/ressources/informations",
      label: "Point d'informations",
      icon: Search,
      color: "#3B82F6",
      description: "Textes de loi, décrets, réglementations",
    },
    {
      path: "/ressources/annuaire",
      label: "Annuaire des professionnels",
      icon: Users,
      color: "#10B981",
      description: "Experts, partenaires et conseils",
    },
    {
      path: "/ressources/innovation",
      label: "Innovation & Compétitivité",
      icon: Lightbulb,
      color: "#EC4899",
      description: "Programmes, concours et outils d'innovation",
    },
    {
      path: "/ressources/projets",
      label: "Projets d'entrepreneurs",
      icon: Rocket,
      color: "#F59E0B",
      description: "Découvrez les projets des PME",
    },
    {
      path: "/ressources/communaute",
      label: "Communauté Starter",
      icon: Building2,
      color: "#06B6D4",
      description: "Échangez avec d'autres entrepreneurs",
    },
  ];

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
          {/* Logo */}
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
                borderRadius: "10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
                background: "white",
              }}
            >
              <img
                src="https://www.minpmeesa.cm/site/inhoud/uploads/2018/11/logo-1.png"
                alt="MINPMEESA"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
              />
            </div>
            <span
              style={{
                fontSize: "20px",
                fontWeight: 700,
                background: "linear-gradient(135deg, #635bff 0%, #7c3aed 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
              className="header-logo-text"
            >
              STARTERKITCM
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav
            style={{
              display: "flex",
              alignItems: "center",
              gap: "32px",
            }}
            className="desktop-nav"
          >
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                style={{
                  color: "#1a1a2e",
                  fontSize: "14px",
                  fontWeight: 500,
                  textDecoration: "none",
                  opacity: 0.7,
                  transition: "opacity 0.2s",
                }}
                onMouseEnter={(e) => (e.target.style.opacity = 1)}
                onMouseLeave={(e) => (e.target.style.opacity = 0.7)}
              >
                {item.label}
              </Link>
            ))}

            {/* Resources Dropdown */}
            <div
              style={{ position: "relative" }}
              onMouseEnter={() => setResourcesOpen(true)}
              onMouseLeave={() => setResourcesOpen(false)}
            >
              <Link
                to="/ressources/informations"
                style={{
                  color: "#1a1a2e",
                  fontSize: "14px",
                  fontWeight: 500,
                  textDecoration: "none",
                  opacity: 0.7,
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                  transition: "opacity 0.2s",
                }}
                onMouseEnter={(e) => { e.target.style.opacity = 1; setResourcesOpen(true); }}
                onMouseLeave={(e) => (e.target.style.opacity = 0.7)}
              >
                Ressources
                <ChevronDown
                  size={16}
                  style={{
                    transition: "transform 0.2s",
                    transform: resourcesOpen ? "rotate(180deg)" : "rotate(0deg)",
                  }}
                />
              </Link>

              {resourcesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  style={{
                    position: "absolute",
                    top: "100%",
                    left: "50%",
                    transform: "translateX(-50%)",
                    marginTop: "12px",
                    background: "white",
                    borderRadius: "16px",
                    boxShadow: "0 10px 40px rgba(0, 0, 0, 0.15)",
                    padding: "12px",
                    minWidth: "320px",
                    zIndex: 1001,
                  }}
                >
                  <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                    {resourcesMenu.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "12px",
                          padding: "12px 16px",
                          borderRadius: "12px",
                          textDecoration: "none",
                          transition: "background 0.2s",
                        }}
                        onMouseEnter={(e) => { e.currentTarget.style.background = "#f8fafc"; }}
                        onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; }}
                      >
                        <div
                          style={{
                            width: "40px",
                            height: "40px",
                            borderRadius: "10px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            backgroundColor: `${item.color}15`,
                            flexShrink: 0,
                          }}
                        >
                          <item.icon size={20} color={item.color} />
                        </div>
                        <div style={{ flex: 1 }}>
                          <span
                            style={{
                              display: "block",
                              fontSize: "14px",
                              fontWeight: 600,
                              color: "#1a1a2e",
                              marginBottom: "2px",
                            }}
                          >
                            {item.label}
                          </span>
                          <span
                            style={{
                              display: "block",
                              fontSize: "12px",
                              color: "#9ca3af",
                              lineHeight: 1.4,
                            }}
                          >
                            {item.description}
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>
          </nav>

          {/* Desktop Actions */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
            }}
            className="desktop-actions"
          >
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                padding: "8px 12px",
                background: "rgba(99, 91, 255, 0.1)",
                border: "none",
                borderRadius: "8px",
                color: "#635bff",
                fontSize: "13px",
                fontWeight: 600,
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
            >
              <span
                style={{
                  opacity: language === "fr" ? 1 : 0.5,
                  transition: "opacity 0.2s",
                }}
              >
                FR
              </span>
              <span style={{ color: "#635bff" }}>/</span>
              <span
                style={{
                  opacity: language === "en" ? 1 : 0.5,
                  transition: "opacity 0.2s",
                }}
              >
                EN
              </span>
            </button>
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
                  transition: "opacity 0.2s",
                }}
                onMouseEnter={(e) => (e.target.style.opacity = 1)}
                onMouseLeave={(e) => (e.target.style.opacity = 0.7)}
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

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              display: "none",
              background: "transparent",
              border: "none",
              cursor: "pointer",
              padding: "8px",
              zIndex: 1001,
            }}
            className="mobile-menu-btn"
            aria-label="Toggle menu"
          >
            <motion.div
              animate={{
                rotate: mobileMenuOpen ? 45 : 0,
              }}
              transition={{ duration: 0.2 }}
              style={{
                width: "24px",
                height: "2px",
                background: "#1a1a2e",
                marginBottom: "6px",
                borderRadius: "2px",
              }}
            />
            <motion.div
              animate={{
                opacity: mobileMenuOpen ? 0 : 1,
              }}
              transition={{ duration: 0.2 }}
              style={{
                width: "24px",
                height: "2px",
                background: "#1a1a2e",
                marginBottom: "6px",
                borderRadius: "2px",
              }}
            />
            <motion.div
              animate={{
                rotate: mobileMenuOpen ? -90 : 0,
              }}
              transition={{ duration: 0.2 }}
              style={{
                width: "24px",
                height: "2px",
                background: "#1a1a2e",
                borderRadius: "2px",
              }}
            />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: "rgba(0, 0, 0, 0.5)",
                zIndex: 999,
              }}
            />

            {/* Mobile Menu Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              style={{
                position: "fixed",
                top: 0,
                right: 0,
                bottom: 0,
                width: "280px",
                background: "white",
                zIndex: 1000,
                padding: "100px 24px 40px",
                display: "flex",
                flexDirection: "column",
                gap: "24px",
                boxShadow: "-10px 0 40px rgba(0, 0, 0, 0.1)",
              }}
              className="mobile-menu-drawer"
            >
              {/* Navigation Links */}
              <nav style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    style={{
                      padding: "16px 20px",
                      borderRadius: "12px",
                      textDecoration: "none",
                      color: "#1a1a2e",
                      fontSize: "16px",
                      fontWeight: 500,
                      background:
                        location.pathname === item.path
                          ? "rgba(99, 91, 255, 0.1)"
                          : "transparent",
                      transition: "all 0.2s ease",
                    }}
                  >
                    {item.label}
                  </Link>
                ))}

                {/* Resources Links in Mobile */}
                <div style={{ padding: "8px 0" }}>
                  <span
                    style={{
                      display: "block",
                      fontSize: "12px",
                      fontWeight: 600,
                      color: "#9ca3af",
                      textTransform: "uppercase",
                      letterSpacing: "0.5px",
                      marginBottom: "8px",
                      paddingLeft: "12px",
                    }}
                  >
                    Ressources
                  </span>
                  <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                    {resourcesMenu.slice(0, 3).map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        onClick={() => setMobileMenuOpen(false)}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                          padding: "12px 16px",
                          borderRadius: "10px",
                          textDecoration: "none",
                          color: "#4b5563",
                          fontSize: "14px",
                          fontWeight: 500,
                          background:
                            location.pathname === item.path
                              ? "rgba(99, 91, 255, 0.1)"
                              : "transparent",
                          transition: "all 0.2s ease",
                        }}
                      >
                        <item.icon size={16} color={item.color} />
                        {item.label}
                      </Link>
                    ))}
                    {resourcesMenu.slice(3).map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        onClick={() => setMobileMenuOpen(false)}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                          padding: "12px 16px",
                          borderRadius: "10px",
                          textDecoration: "none",
                          color: "#4b5563",
                          fontSize: "14px",
                          fontWeight: 500,
                          background:
                            location.pathname === item.path
                              ? "rgba(99, 91, 255, 0.1)"
                              : "transparent",
                          transition: "all 0.2s ease",
                        }}
                      >
                        <item.icon size={16} color={item.color} />
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </nav>

              {/* Divider */}
              <div style={{ height: "1px", background: "#e5e7eb" }} />

              {/* Action Buttons */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                {/* Language Toggle Mobile */}
                <button
                  onClick={toggleLanguage}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                    padding: "14px",
                    background: "rgba(99, 91, 255, 0.1)",
                    border: "none",
                    borderRadius: "12px",
                    color: "#635bff",
                    fontSize: "15px",
                    fontWeight: 600,
                    cursor: "pointer",
                  }}
                >
                  <span
                    style={{
                      opacity: language === "fr" ? 1 : 0.5,
                    }}
                  >
                    Francais
                  </span>
                  <span style={{ color: "#635bff" }}>/</span>
                  <span
                    style={{
                      opacity: language === "en" ? 1 : 0.5,
                    }}
                  >
                    English
                  </span>
                </button>

                <Link to="/login" style={{ width: "100%" }}>
                  <button
                    style={{
                      width: "100%",
                      padding: "14px",
                      background: "transparent",
                      border: "2px solid #e5e7eb",
                      borderRadius: "12px",
                      color: "#1a1a2e",
                      fontSize: "15px",
                      fontWeight: 600,
                      cursor: "pointer",
                    }}
                  >
                    Connexion
                  </button>
                </Link>

                <Link to="/signup" style={{ width: "100%" }}>
                  <button
                    style={{
                      width: "100%",
                      padding: "14px",
                      background:
                        "linear-gradient(135deg, #635bff 0%, #7c3aed 100%)",
                      border: "none",
                      borderRadius: "12px",
                      color: "white",
                      fontSize: "15px",
                      fontWeight: 600,
                      cursor: "pointer",
                      boxShadow: "0 4px 15px rgba(99, 91, 255, 0.3)",
                    }}
                  >
                    Commencer
                  </button>
                </Link>
              </div>

              {/* Footer in Menu */}
              <div
                style={{
                  marginTop: "auto",
                  paddingTop: "24px",
                  borderTop: "1px solid #e5e7eb",
                  textAlign: "center",
                }}
              >
                <p
                  style={{
                    fontSize: "13px",
                    color: "#9ca3af",
                  }}
                >
                  © 2025 STARTERKITCM
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Content */}
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          style={{
            paddingTop: location.pathname === "/" ? "0" : "72px",
          }}
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
                    borderRadius: "8px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    overflow: "hidden",
                    background: "white",
                  }}
                >
                  <img
                    src="https://www.minpmeesa.cm/site/inhoud/uploads/2018/11/logo-1.png"
                    alt="MINPMEESA"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                    }}
                  />
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

      {/* Responsive Styles */}
      <style>{`
        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }
          
          .desktop-actions {
            display: none !important;
          }
          
          .mobile-menu-btn {
            display: flex !important;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          }
        }
        
        @media (min-width: 769px) {
          .mobile-menu-btn {
            display: none !important;
          }
          
          .mobile-menu-drawer {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
}

export default PublicLayout;
