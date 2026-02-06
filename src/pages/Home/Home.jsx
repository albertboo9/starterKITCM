import { useRef, useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useInView,
  AnimatePresence,
} from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";

// ============================================
// PROFESSIONAL ICONS SVG COMPONENTS
// ============================================

const IconLightbulb = ({ size = 24, color = "#635bff" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 18h6" />
    <path d="M10 22h4" />
    <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0018 8 6 6 0 006 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 018.91 14" />
  </svg>
);

const IconUsers = ({ size = 24, color = "#635bff" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const IconUserPlus = ({ size = 24, color = "#635bff" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="8.5" cy="7" r="4" />
    <line x1="20" y1="8" x2="20" y2="14" />
    <line x1="23" y1="11" x2="17" y2="11" />
  </svg>
);

const IconGrowth = ({ size = 24, color = "#635bff" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
    <polyline points="17 6 23 6 23 12" />
  </svg>
);

const IconScale = ({ size = 24, color = "#635bff" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2" />
    <path d="M12 6v6" />
    <path d="M6 12a6 6 0 0 1 12 0" />
    <path d="M18 12a6 6 0 0 0-12 0" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const IconRocket = ({ size = 24, color = "#635bff" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
    <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
    <path d="M9 9 4 4" />
    <path d="m15 15 5 5" />
  </svg>
);

const IconCheck = ({ size = 24, color = "#10b981" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const IconLock = ({ size = 24, color = "#f59e0b" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);

const IconArrowRight = ({ size = 20, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

const IconSparkles = ({ size = 24, color = "#635bff" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3z" />
    <path d="M12 12l1.5 4.5L18 18l-4.5 1.5L12 24l-1.5-4.5L6 18l4.5-1.5L12 12z" />
    <path d="M12 21l1.5 4.5L18 27l-4.5 1.5L12 33l-1.5-4.5L6 27l4.5-1.5L12 21z" />
  </svg>
);

const IconChat = ({ size = 24, color = "#635bff" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);

// ============================================
// NEED OPTIONS DATA
// ============================================

const needOptions = [
  {
    id: "sensibiliser",
    title: "Me sensibiliser",
    subtitle: "Decouvrez l'ecosysteme entrepreneurial",
    icon: IconLightbulb,
    color: "#635bff",
    bgColor: "rgba(99, 91, 255, 0.08)",
    borderColor: "rgba(99, 91, 255, 0.2)",
    parcours: [
      { title: "M'informer", badge: "Gratuit", badgeColor: "#10b981" },
      { title: "Debuter dans l'entrepreneuriat", badge: "Guide", badgeColor: "#635bff" },
    ],
  },
  {
    id: "reseau",
    title: "Developper mon reseau",
    subtitle: "Rencontrez des pairs et partenaires",
    icon: IconUsers,
    color: "#10b981",
    bgColor: "rgba(16, 185, 129, 0.08)",
    borderColor: "rgba(16, 185, 129, 0.2)",
    parcours: [
      { title: "Reseau de partenaires", badge: "Gratuit", badgeColor: "#10b981" },
      { title: "Evenements networking", badge: "Calendrier", badgeColor: "#635bff" },
    ],
  },
  {
    id: "equipe",
    title: "Trouver une equipe",
    subtitle: "Recrutez ou rejoignez une equipe",
    icon: IconUserPlus,
    color: "#8b5cf6",
    bgColor: "rgba(139, 92, 246, 0.08)",
    borderColor: "rgba(139, 92, 246, 0.2)",
    parcours: [
      { title: "Co-fondateurs", badge: "Plateforme", badgeColor: "#635bff" },
      { title: "Recrutement", badge: "Outils", badgeColor: "#f59e0b" },
    ],
  },
  {
    id: "activite",
    title: "Developper mon activite",
    subtitle: "Augmentez votre chiffre d'affaires",
    icon: IconGrowth,
    color: "#06b6d4",
    bgColor: "rgba(6, 182, 212, 0.08)",
    borderColor: "rgba(6, 182, 212, 0.2)",
    parcours: [
      { title: "Marketing digital", badge: "Formation", badgeColor: "#635bff" },
      { title: "Strategie commerciale", badge: "Conseil", badgeColor: "#f59e0b" },
    ],
  },
  {
    id: "probleme",
    title: "Resoudre un probleme",
    subtitle: "RH, fiscal, juridique ou financier",
    icon: IconScale,
    color: "#f97316",
    bgColor: "rgba(249, 115, 22, 0.08)",
    borderColor: "rgba(249, 115, 22, 0.2)",
    parcours: [
      { title: "Assistance technique", badge: "Gratuit", badgeColor: "#10b981" },
      { title: "Mise en relation APME", badge: "Agent", badgeColor: "#635bff" },
    ],
  },
  {
    id: "autrement",
    title: "Entreprendre autrement",
    subtitle: "Vous avez un projet atypique?",
    icon: IconRocket,
    color: "#ec4899",
    bgColor: "rgba(236, 72, 153, 0.08)",
    borderColor: "rgba(236, 72, 153, 0.2)",
    parcours: [
      { title: "Innovation sociale", badge: "Programme", badgeColor: "#635bff" },
      { title: "Projet alternatif", badge: "Conseil", badgeColor: "#f59e0b" },
    ],
  },
];

// ============================================
// PARCOURS DATA
// ============================================

const parcoursData = [
  {
    id: "informer",
    title: "M'informer",
    subtitle: "Decouvrez l'ecosysteme entrepreneurial camerounais",
    description: "Accedez a des ressources completes sur l'environnement entrepreneurial, les opportunites et les acteurs cles.",
    conditions: "libre",
    icon: IconLightbulb,
  },
  {
    id: "former",
    title: "Me former",
    subtitle: "Developpez vos competences entrepreneuriales",
    description: "Suivez des formations certifiantes dispensees par notre campus e-learning partenaire.",
    conditions: "libre",
    icon: IconUsers,
  },
  {
    id: "financement",
    title: "Soumettre dossier appui financier",
    subtitle: "Obtenez un financement pour votre projet",
    description: "Presentez votre dossier pour obtenir un appui financier de nos partenaires.",
    conditions: "formelle",
    icon: IconCheck,
  },
  {
    id: "investisseurs",
    title: "Mise en relation investisseurs",
    subtitle: "Trouvez des partenaires financiers",
    description: "Connectez-vous avec des investisseurs interesses par votre projet.",
    conditions: "formelle",
    icon: IconUsers,
  },
  {
    id: "apme",
    title: "Mise en relation APME",
    subtitle: "Etre accompagne par un agent specialise",
    description: "Planifiez des rendez-vous avec des agents de l'APME pour un accompagnement personnalise.",
    conditions: "libre",
    icon: IconUsers,
  },
  {
    id: "creer",
    title: "Aide a la creation d'entreprise",
    subtitle: "Formalisez votre entreprise",
    description: "Guide etape par etape pour la creation et la formalisation de votre entreprise.",
    conditions: "libre",
    icon: IconCheck,
  },
  {
    id: "normalisation",
    title: "Procedure de normalisation",
    subtitle: "Obtenez la certification MINPEEMSA",
    description: "Validez vos competences et recevez une reconnaissance officielle du Ministere.",
    conditions: "formations",
    icon: IconCheck,
  },
  {
    id: "partenaires",
    title: "Reseau de partenaires",
    subtitle: "Developpez votre ecosysteme",
    description: "Etablissez des collaborations avec des partenaires strategiques.",
    conditions: "libre",
    icon: IconUsers,
  },
];

// ============================================
// NEED CARD COMPONENT
// ============================================

const NeedCard = ({ option, isSelected, onSelect, index }) => {
  return (
    <motion.button
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      whileHover={{ scale: 1.02, y: -4 }}
      whileTap={{ scale: 0.98 }}
      onClick={() => onSelect(option)}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "8px",
        padding: "20px 24px",
        background: isSelected ? option.bgColor : "white",
        border: `2px solid ${isSelected ? option.color : option.borderColor}`,
        borderRadius: "16px",
        cursor: "pointer",
        transition: "all 0.3s ease",
        boxShadow: isSelected
          ? `0 8px 30px ${option.color}25`
          : "0 4px 20px rgba(0,0,0,0.05)",
        minWidth: "160px",
        flex: "1 1 160px",
        maxWidth: "200px",
      }}
    >
      <div
        style={{
          width: "48px",
          height: "48px",
          borderRadius: "12px",
          background: isSelected ? option.color : option.bgColor,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "all 0.3s ease",
        }}
      >
        <option.icon size={24} color={isSelected ? "white" : option.color} />
      </div>
      <div style={{ textAlign: "left" }}>
        <h3
          style={{
            fontSize: "15px",
            fontWeight: 700,
            color: isSelected ? option.color : "#1a1a2e",
            marginBottom: "4px",
          }}
        >
          {option.title}
        </h3>
        <p
          style={{
            fontSize: "12px",
            color: "#6b7280",
            lineHeight: 1.4,
          }}
        >
          {option.subtitle}
        </p>
      </div>
    </motion.button>
  );
};

// ============================================
// PARCOURS CARD COMPONENT
// ============================================

const ParcoursCard = ({ parcours, index }) => {
  const isConditionne = parcours.conditions !== "libre";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
      whileHover={{ y: -4, boxShadow: "0 12px 40px rgba(0,0,0,0.12)" }}
      style={{
        background: "white",
        borderRadius: "16px",
        padding: "24px",
        border: "1px solid #e5e7eb",
        boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
        transition: "all 0.3s ease",
        cursor: "pointer",
      }}
    >
      <div style={{ display: "flex", alignItems: "flex-start", gap: "16px", marginBottom: "16px" }}>
        <div
          style={{
            width: "52px",
            height: "52px",
            borderRadius: "14px",
            background: "linear-gradient(135deg, #635bff 0%, #7c3aed 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          <parcours.icon size={26} color="white" />
        </div>
        <div style={{ flex: 1 }}>
          <h3
            style={{
              fontSize: "17px",
              fontWeight: 700,
              color: "#1a1a2e",
              marginBottom: "4px",
            }}
          >
            {parcours.title}
          </h3>
          <p
            style={{
              fontSize: "13px",
              color: "#6b7280",
              lineHeight: 1.5,
            }}
          >
            {parcours.subtitle}
          </p>
        </div>
      </div>

      <p
        style={{
          fontSize: "14px",
          color: "#4b5563",
          lineHeight: 1.6,
          marginBottom: "16px",
        }}
      >
        {parcours.description}
      </p>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            padding: "6px 12px",
            background: isConditionne ? "rgba(245, 158, 11, 0.1)" : "rgba(16, 185, 129, 0.1)",
            borderRadius: "20px",
          }}
        >
          {isConditionne ? (
            <IconLock size={14} color="#f59e0b" />
          ) : (
            <IconCheck size={14} color="#10b981" />
          )}
          <span
            style={{
              fontSize: "12px",
              fontWeight: 600,
              color: isConditionne ? "#f59e0b" : "#10b981",
            }}
          >
            {isConditionne ? `Conditions: ${parcours.conditions}` : "Acces libre"}
          </span>
        </div>

        <motion.button
          whileHover={{ x: 4 }}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "6px",
            padding: "8px 16px",
            background: "linear-gradient(135deg, #635bff 0%, #7c3aed 100%)",
            border: "none",
            borderRadius: "8px",
            color: "white",
            fontSize: "13px",
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          Commencer
          <IconArrowRight size={16} color="white" />
        </motion.button>
      </div>
    </motion.div>
  );
};

// ============================================
// HERO SECTION WITH INTELLIGENT ASSISTANT
// ============================================

function HeroSection() {
  const [selectedNeeds, setSelectedNeeds] = useState([]);

  const toggleNeed = (option) => {
    setSelectedNeeds((prev) => {
      const isSelected = prev.some((n) => n.id === option.id);
      if (isSelected) {
        return prev.filter((n) => n.id !== option.id);
      } else {
        return [...prev, option];
      }
    });
  };

  const clearSelection = () => setSelectedNeeds([]);

  return (
    <section
      style={{
        minHeight: "100vh",
        position: "relative",
        background: "#ffffff",
        overflow: "hidden",
      }}
    >
      {/* Background Effects */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `
            linear-gradient(rgba(99, 91, 255, 0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99, 91, 255, 0.02) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
          pointerEvents: "none",
        }}
      />

      {/* Animated Orbs */}
      <motion.div
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute",
          top: "10%",
          right: "10%",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(99, 91, 255, 0.06) 0%, transparent 70%)",
          filter: "blur(80px)",
          pointerEvents: "none",
        }}
      />
      <motion.div
        animate={{
          x: [0, -30, 0],
          y: [0, 50, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute",
          bottom: "15%",
          left: "5%",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(16, 185, 129, 0.04) 0%, transparent 70%)",
          filter: "blur(80px)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "50px 24px 70px",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Split Layout: Left = Text, Right = Image */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "60px",
            alignItems: "center",
          }}
        >
          {/* Left Column: Text Content */}
          <div>
            {/* Header Badge with Logo */}
            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "14px",
                marginBottom: "28px",
              }}
            >
              <img
                src="https://www.minpmeesa.cm/site/inhoud/uploads/2018/11/logo-1.png"
                alt="MINPMEESA Logo"
                style={{
                  height: "52px",
                  width: "auto",
                }}
              />
              <div
                style={{
                  width: "2px",
                  height: "36px",
                  background: "linear-gradient(180deg, #635bff 0%, #10b981 100%)",
                  borderRadius: "2px",
                }}
              />
              <span
                style={{
                  fontSize: "13px",
                  fontWeight: 600,
                  color: "#635bff",
                  letterSpacing: "0.5px",
                }}
              >
                PORTAIL OFFICIEL MINPMEESA
              </span>
            </motion.div> */}

            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.7 }}
              style={{
                fontSize: "clamp(36px, 4.5vw, 52px)",
                fontWeight: 800,
                color: "#1a1a2e",
                lineHeight: 1.1,
                marginBottom: "24px",
                letterSpacing: "-0.03em",
                marginTop: "10vh",
              }}
            >
              ENTREPRENEZ EN TOUTE CONFIANCE
              <br />
              <span
                style={{
                  background: "linear-gradient(135deg, #635bff 0%, #7c3aed 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                AU CAMEROUN
              </span>
            </motion.h1>

            {/* Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              style={{
                fontSize: "clamp(16px, 1.6vw, 18px)",
                color: "#4b5563",
                lineHeight: 1.75,
                marginBottom: "36px",
                maxWidth: "520px",
              }}
            >
              STARTERKITCM est la porte d'entree officielle de l'entrepreneuriat au
              Cameroun. Orientez, structurez, validez et lancez votre projet avec
              l'accompagnement des experts et la reconnaissance du Ministere.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.5 }}
              style={{
                display: "flex",
                gap: "40px",
                marginBottom: "40px",
              }}
            >
              {[
                { value: "5,000+", label: "Entrepreneurs", color: "#635bff" },
                { value: "50+", label: "Formations", color: "#10b981" },
                { value: "2,500+", label: "Certifications", color: "#f59e0b" },
              ].map((stat, index) => (
                <div key={index}>
                  <p
                    style={{
                      fontSize: "26px",
                      fontWeight: 800,
                      color: stat.color,
                      marginBottom: "2px",
                    }}
                  >
                    {stat.value}
                  </p>
                  <p
                    style={{
                      fontSize: "13px",
                      color: "#6b7280",
                    }}
                  >
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Column: Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            style={{
              position: "relative",
              maxHeight: "450px",
            }}
          >
            <div
              style={{
                borderRadius: "20px",
                overflow: "hidden",
                boxShadow: "0 20px 60px rgba(0, 0, 0, 0.12)",
              }}
            >
              <img
                src="/hero.jpg"
                alt="Hero"
                style={{
                  width: "100%",
                  height: "auto",
                  maxHeight: "400px",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </div>

            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{
                opacity: 1,
                y: [0, -8, 0],
                scale: 1,
              }}
              transition={{
                delay: 0.7,
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              whileHover={{ scale: 1.05 }}
              style={{
                position: "absolute",
                bottom: "-25px",
                left: "-25px",
                background: "white",
                padding: "20px 28px",
                borderRadius: "16px",
                boxShadow: "0 10px 40px rgba(0, 0, 0, 0.1)",
                display: "flex",
                alignItems: "center",
                gap: "16px",
              }}
            >
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "14px",
                  background: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <IconCheck size={24} color="white" />
              </div>
              <div>
                <p
                  style={{
                    fontSize: "13px",
                    color: "#6b7280",
                    marginBottom: "2px",
                  }}
                >
                  Parcours validés
                </p>
                <p
                  style={{
                    fontSize: "20px",
                    fontWeight: 700,
                    color: "#1a1a2e",
                  }}
                >
                  Certification MINPMEESA
                </p>
              </div>
            </motion.div>

            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{
                opacity: 1,
                y: [0, -6, 0],
                x: [0, 4, 0],
              }}
              transition={{
                delay: 0.8,
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              whileHover={{ scale: 1.05 }}
              style={{
                position: "absolute",
                top: "-30px",
                right: "-20px",
                background: "white",
                padding: "14px 20px",
                borderRadius: "14px",
                boxShadow: "0 8px 30px rgba(0, 0, 0, 0.1)",
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
             <img
                src="https://www.minpmeesa.cm/site/inhoud/uploads/2018/11/logo-1.png"
                alt="MINPMEESA Logo"
                style={{
                  height: "52px",
                  width: "auto",
                }}
              />
              <div
                style={{
                  width: "2px",
                  height: "36px",
                  background: "linear-gradient(180deg, #635bff 0%, #10b981 100%)",
                  borderRadius: "2px",
                }}
              />
              <span
                style={{
                  fontSize: "13px",
                  fontWeight: 600,
                  color: "#635bff",
                  letterSpacing: "0.5px",
                }}
              >
                PORTAIL OFFICIEL MINPMEESA
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>

        {/* Assistant Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          style={{
            background: "white",
            borderRadius: "24px",
            padding: "40px",
            boxShadow: "0 8px 40px rgba(0,0,0,0.08)",
            border: "1px solid #e5e7eb",
            
          }}
        >
          {/* Assistant Header */}
          <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "32px" }}>
            <div
              style={{
                width: "56px",
                height: "56px",
                borderRadius: "16px",
                background: "linear-gradient(135deg, #635bff 0%, #7c3aed 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <IconChat size={28} color="white" />
            </div>
            <div>
              <h2
                style={{
                  fontSize: "22px",
                  fontWeight: 700,
                  color: "#1a1a2e",
                  marginBottom: "4px",
                }}
              >
                Comment pouvons-nous vous aider aujourd'hui?
              </h2>
              <p
                style={{
                  fontSize: "14px",
                  color: "#6b7280",
                }}
              >
                Choisissez ce que vous souhaitez faire et laissez-vous guider
              </p>
            </div>
          </div>

          {/* Need Options Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
              gap: "16px",
              marginBottom: selectedNeeds.length > 0 ? "32px" : 0,
            }}
          >
            {needOptions.map((option, index) => (
              <NeedCard
                key={option.id}
                option={option}
                isSelected={selectedNeeds.some((n) => n.id === option.id)}
                onSelect={toggleNeed}
                index={index}
              />
            ))}
          </div>

          {/* Selected Parcours */}
          <AnimatePresence>
            {selectedNeeds.length > 0 && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4 }}
                style={{ overflow: "hidden" }}
              >
                <div
                  style={{
                    paddingTop: "32px",
                    borderTop: "1px solid #e5e7eb",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "24px", flexWrap: "wrap" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                        <span
                          style={{
                            fontSize: "16px",
                            fontWeight: 700,
                            color: "#1a1a2e",
                          }}
                        >
                          {selectedNeeds.length} besoin{selectedNeeds.length > 1 ? "x" : ""} selectionne{selectedNeeds.length > 1 ? "s" : ""}
                        </span>
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={clearSelection}
                        style={{
                          padding: "6px 14px",
                          background: "transparent",
                          border: "1px solid #e5e7eb",
                          borderRadius: "8px",
                          color: "#6b7280",
                          fontSize: "13px",
                          fontWeight: 500,
                          cursor: "pointer",
                          marginLeft: "auto",
                        }}
                      >
                        Effacer la selection
                      </motion.button>
                    </div>

                    {/* Selected Needs Summary */}
                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "10px",
                        marginBottom: "24px",
                      }}
                    >
                      {selectedNeeds.map((need) => (
                        <motion.div
                          key={need.id}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "8px",
                            padding: "8px 16px",
                            background: need.bgColor,
                            borderRadius: "20px",
                            border: `1px solid ${need.color}30`,
                          }}
                        >
                          <need.icon size={16} color={need.color} />
                          <span
                            style={{
                              fontSize: "13px",
                              fontWeight: 600,
                              color: need.color,
                            }}
                          >
                            {need.title}
                          </span>
                          <button
                            onClick={() => toggleNeed(need)}
                            style={{
                              background: "none",
                              border: "none",
                              cursor: "pointer",
                              padding: "2px",
                              display: "flex",
                            }}
                          >
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={need.color} strokeWidth="2">
                              <line x1="18" y1="6" x2="6" y2="18" />
                              <line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                          </button>
                        </motion.div>
                        ))}
                     
                    </div>

                  {/* Recommended Parcours Grid */}
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                      gap: "16px",
                    }}
                  >
                    {selectedNeeds.map((need) => (
                      need.parcours.map((parcours, index) => (
                        <motion.div
                          key={`${need.id}-${index}`}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                          style={{
                            background: "white",
                            borderRadius: "14px",
                            padding: "20px",
                            border: "1px solid #e5e7eb",
                            cursor: "pointer",
                            transition: "all 0.2s ease",
                          }}
                          whileHover={{
                            borderColor: "#635bff",
                            boxShadow: "0 4px 20px rgba(99, 91, 255, 0.15)",
                          }}
                        >
                          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                              <div
                                style={{
                                  width: "44px",
                                  height: "44px",
                                  borderRadius: "12px",
                                  background: "linear-gradient(135deg, #635bff 0%, #7c3aed 100%)",
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                }}
                              >
                                <IconCheck size={20} color="white" />
                              </div>
                              <div>
                                <h4
                                  style={{
                                    fontSize: "15px",
                                    fontWeight: 600,
                                    color: "#1a1a2e",
                                    marginBottom: "2px",
                                  }}
                                >
                                  {parcours.title}
                                </h4>
                                <p
                                  style={{
                                    fontSize: "12px",
                                    color: "#6b7280",
                                  }}
                                >
                                  {parcours.subtitle}
                                </p>
                              </div>
                            </div>
                            <span
                              style={{
                                padding: "4px 10px",
                                background: `${parcours.badgeColor}15`,
                                color: parcours.badgeColor,
                                fontSize: "11px",
                                fontWeight: 600,
                                borderRadius: "12px",
                              }}
                            >
                              {parcours.badge}
                            </span>
                          </div>
                        </motion.div>
                      ))
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div
                    style={{
                      display: "flex",
                      gap: "12px",
                      marginTop: "24px",
                      flexWrap: "wrap",
                    }}
                  >
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "10px",
                        padding: "14px 28px",
                        background: "linear-gradient(135deg, #635bff 0%, #7c3aed 100%)",
                        border: "none",
                        borderRadius: "12px",
                        color: "white",
                        fontSize: "15px",
                        fontWeight: 600,
                        cursor: "pointer",
                        boxShadow: "0 4px 15px rgba(99, 91, 255, 0.35)",
                      }}
                    >
                      Acceder a ces parcours
                      <IconArrowRight size={18} color="white" />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setSelectedNeed(null)}
                      style={{
                        padding: "14px 28px",
                        background: "white",
                        border: "1px solid #e5e7eb",
                        borderRadius: "12px",
                        color: "#4b5563",
                        fontSize: "15px",
                        fontWeight: 600,
                        cursor: "pointer",
                      }}
                    >
                      Poser une autre question
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "60px",
            flexWrap: "wrap",
          }}
        >
          {[
            { value: "5,000+", label: "Entrepreneurs accompagnes", color: "#635bff" },
            { value: "50+", label: "Formations disponibles", color: "#10b981" },
            { value: "2,500+", label: "Certifications delivrees", color: "#f59e0b" },
          ].map((stat, index) => (
            <div key={index} style={{ textAlign: "center" }}>
              <p
                style={{
                  fontSize: "32px",
                  fontWeight: 800,
                  color: stat.color,
                  marginBottom: "4px",
                }}
              >
                {stat.value}
              </p>
              <p
                style={{
                  fontSize: "14px",
                  color: "#6b7280",
                }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
     
    </section>
  );
}

// ============================================
// PARCOURS SECTION
// ============================================

function ParcoursSection() {
  return (
    <section
      style={{
        padding: "100px 24px",
        background: "#f8fafc",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: "60px" }}
        >
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 40px)",
              fontWeight: 800,
              color: "#1a1a2e",
              marginBottom: "16px",
            }}
          >
            Decouvrez nos parcours
          </h2>
          <p
            style={{
              fontSize: "18px",
              color: "#6b7280",
              maxWidth: "600px",
              margin: "0 auto",
            }}
          >
            Chaque parcours est concu pour vous accompagner dans votre demarche entrepreneuriale
          </p>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "24px",
          }}
        >
          {parcoursData.map((parcours, index) => (
            <ParcoursCard key={parcours.id} parcours={parcours} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================
// FEATURES SECTION
// ============================================

function FeaturesSection() {
  const features = [
    {
      icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2",
      title: "Orientation Strategique",
      description: "Decouvrez le parcours adapte a votre profil, vos competences et vos ambitions.",
    },
    {
      icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
      title: "Formation de Qualite",
      description: "Accedez a des formations certifiantes sur notre campus e-learning partenaire.",
    },
    {
      icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z",
      title: "Certification Officielle",
      description: "Validez vos competences avec une reconnaissance du Ministere.",
    },
    {
      icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
      title: "Reseau Entrepreneurial",
      description: "Rejoignez une communaute dynamique d'entrepreneurs et de partenaires.",
    },
  ];

  return (
    <section
      style={{
        padding: "100px 24px",
        background: "white",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: "60px" }}
        >
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 40px)",
              fontWeight: 800,
              color: "#1a1a2e",
              marginBottom: "16px",
            }}
          >
            Pourquoi choisir STARTERKITCM?
          </h2>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "32px",
          }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -8 }}
              style={{
                background: "#f8fafc",
                borderRadius: "20px",
                padding: "32px",
                textAlign: "center",
                border: "1px solid #e5e7eb",
                transition: "all 0.3s ease",
              }}
            >
              <div
                style={{
                  width: "64px",
                  height: "64px",
                  borderRadius: "16px",
                  background: "linear-gradient(135deg, #635bff 0%, #7c3aed 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 20px",
                }}
              >
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d={feature.icon} />
                </svg>
              </div>
              <h3
                style={{
                  fontSize: "20px",
                  fontWeight: 700,
                  color: "#1a1a2e",
                  marginBottom: "12px",
                }}
              >
                {feature.title}
              </h3>
              <p
                style={{
                  fontSize: "15px",
                  color: "#6b7280",
                  lineHeight: 1.7,
                }}
              >
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================
// CTA SECTION
// ============================================

function CTASection() {
  return (
    <section
      style={{
        padding: "100px 24px",
        background: "linear-gradient(135deg, #1a1a2e 0%, #2d1b69 50%, #1a1a2e 100%)",
      }}
    >
      <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 42px)",
              fontWeight: 800,
              color: "white",
              marginBottom: "20px",
            }}
          >
            Pret a demarrer votre parcours entrepreneurial?
          </h2>
          <p
            style={{
              fontSize: "18px",
              color: "rgba(255,255,255,0.7)",
              marginBottom: "40px",
              lineHeight: 1.7,
            }}
          >
            Rejoignez des milliers d'entrepreneurs camerounais qui ont choisi STARTERKITCM
            pour les accompagner dans leur projet.
          </p>

          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link to="/signup">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "12px",
                  padding: "18px 36px",
                  background: "linear-gradient(135deg, #635bff 0%, #7c3aed 100%)",
                  border: "none",
                  borderRadius: "14px",
                  color: "white",
                  fontSize: "16px",
                  fontWeight: 600,
                  cursor: "pointer",
                  boxShadow: "0 8px 30px rgba(99, 91, 255, 0.4)",
                }}
              >
                Commencer mon parcours
                <IconArrowRight size={20} color="white" />
              </motion.button>
            </Link>
            <Link to="/parcours">
              <motion.button
                whileHover={{ scale: 1.02, background: "rgba(255,255,255,0.1)" }}
                whileTap={{ scale: 0.98 }}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "12px",
                  padding: "18px 36px",
                  background: "transparent",
                  border: "2px solid rgba(255,255,255,0.3)",
                  borderRadius: "14px",
                  color: "white",
                  fontSize: "16px",
                  fontWeight: 600,
                  cursor: "pointer",
                }}
              >
                Decouvrir les parcours
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ============================================
// MAIN HOME COMPONENT
// ============================================

function Home() {
  return (
    <>
      <Helmet>
        <title>STARTERKITCM - L'Entrepreneuriat au Cameroun</title>
        <meta
          name="description"
          content="Portez votre projet entrepreneurial au Cameroun. Orientation, formation et certification MINPEEMSA."
        />
      </Helmet>

      {/* Hero with Intelligent Assistant */}
      <HeroSection />

      {/* Parcours Section */}
      <ParcoursSection />

      {/* Features Section */}
      <FeaturesSection />

      {/* CTA Section */}
      <CTASection />

      <style>{`
        @media (max-width: 768px) {
          section {
            padding: 60px 16px !important;
          }
        }
      `}</style>
    </>
  );
}

export default Home;
