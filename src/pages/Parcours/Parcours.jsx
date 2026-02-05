import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";

// Professional SVG Icons
const Icons = {
  sensibilisation: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
  ),
  creation: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  ),
  formation: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>
  ),
  financement: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  reseau: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  ),
  probleme: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  arrow: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M9 5l7 7-7 7" />
    </svg>
  ),
  check: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M5 13l4 4L19 7" />
    </svg>
  ),
  clock: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
};

function Parcours() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Categories with improved copywriting
  const categories = [
    {
      id: "sensibilisation",
      title: "Decouverte",
      subtitle: "Comprendre l'ecosysteme entrepreneurial",
      icon: "sensibilisation",
      gradient: "linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)",
      options: [
        {
          id: "sensibilisation",
          title: "Sensibilisation a l'entrepreneuriat",
          description: "Decouvrez les fondamentaux de l'entrepreneuriat au Cameroun",
          duration: "2 semaines",
          level: " Debutant",
          modules: 4,
          color: "#fbbf24",
        },
      ],
    },
    {
      id: "creation",
      title: "Formalisation",
      subtitle: "Creer votre entreprise legalement",
      icon: "creation",
      gradient: "linear-gradient(135deg, #635bff 0%, #7c3aed 100%)",
      options: [
        {
          id: "creation",
          title: "Creation d'entreprise",
          description: "Structurez et formalisez votre entreprise selon les regles en vigueur",
          duration: "6 semaines",
          level: " Intermediaire",
          modules: 8,
          color: "#635bff",
        },
        {
          id: "formalisation",
          title: "Formalites administratives",
          description: "Apprenez a effectuer les demarches administratives",
          duration: "2 semaines",
          level: " Debutant",
          modules: 3,
          color: "#635bff",
        },
      ],
    },
    {
      id: "formation",
      title: "Competences",
      subtitle: "Developpez vos savoir-faire",
      icon: "formation",
      gradient: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
      options: [
        {
          id: "gestion",
          title: "Gestion d'entreprise",
          description: "Maitrisez les bases de la gestion commerciale et financiere",
          duration: "4 semaines",
          level: " Intermediaire",
          modules: 6,
          color: "#10b981",
        },
        {
          id: "marketing",
          title: "Marketing digital",
          description: "Apprenez a promouvoir votre entreprise en ligne",
          duration: "3 semaines",
          level: " Tous niveaux",
          modules: 5,
          color: "#10b981",
        },
      ],
    },
    {
      id: "financement",
      title: "Ressources",
      subtitle: "Financez votre projet",
      icon: "financement",
      gradient: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)",
      options: [
        {
          id: "financement",
          title: "Recherche de financement",
          description: "Identifiez et sollicitez les sources de financement disponibles",
          duration: "3 semaines",
          level: " Intermediaire",
          modules: 4,
          color: "#f59e0b",
        },
      ],
    },
    {
      id: "reseau",
      title: "Connexions",
      subtitle: "Build votre reseau professionnel",
      icon: "reseau",
      gradient: "linear-gradient(135deg, #ec4899 0%, #db2777 100%)",
      options: [
        {
          id: "reseau",
          title: "Reseau entrepreneurial",
          description: "Connectez-vous avec d'autres entrepreneurs et partenaires",
          duration: " ongoing",
          level: " Tous niveaux",
          modules: 2,
          color: "#ec4899",
        },
      ],
    },
    {
      id: "probleme",
      title: "Support",
      subtitle: "Resolvez vos difficultes",
      icon: "probleme",
      gradient: "linear-gradient(135deg, #6b7280 0%, #4b5563 100%)",
      options: [
        {
          id: "probleme",
          title: "Assistance juridique et fiscale",
          description: "Obtenez des reponses a vos questions juridiques et fiscales",
          duration: "Sur demande",
          level: " Tous niveaux",
          modules: 1,
          color: "#6b7280",
        },
      ],
    },
  ];

  // Get selected category details
  const currentCategory = categories.find((cat) => cat.id === selectedCategory);

  return (
    <>
      <Helmet>
        <title>Parcours Entrepreneur - STARTERKITCM</title>
        <meta
          name="description"
          content="Choisissez le parcours entrepreneurial adapte a vos besoins au Cameroun"
        />
      </Helmet>

      <div
        style={{
          padding: "100px 24px 60px",
          background: "#f8fafc",
          minHeight: "100vh",
          position: "relative",
        }}
      >
        {/* Header */}


        {/* Category Grid */}
        {!selectedCategory && (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "24px",
              maxWidth: "1200px",
              margin: "0 auto",
            }}
          >
            {categories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setSelectedCategory(category.id)}
                style={{
                  background: "white",
                  borderRadius: "20px",
                  padding: "28px",
                  cursor: "pointer",
                  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.06)",
                  border: "1px solid rgba(0, 0, 0, 0.06)",
                  transition: "all 0.3s ease",
                }}
                whileHover={{
                  y: -8,
                  boxShadow: "0 20px 40px rgba(99, 91, 255, 0.15)",
                }}
              >
                {/* Icon Header */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "16px",
                    marginBottom: "20px",
                  }}
                >
                  <div
                    style={{
                      width: "56px",
                      height: "56px",
                      borderRadius: "16px",
                      background: category.gradient,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "white",
                    }}
                  >
                    {Icons[category.icon]}
                  </div>
                  <div>
                    <h3
                      style={{
                        fontSize: "20px",
                        fontWeight: 700,
                        color: "#1a1a2e",
                        marginBottom: "4px",
                      }}
                    >
                      {category.title}
                    </h3>
                    <p
                      style={{
                        fontSize: "14px",
                        color: "#6b7280",
                        margin: 0,
                      }}
                    >
                      {category.options.length} parcours disponible
                      {category.options.length > 1 ? "s" : ""}
                    </p>
                  </div>
                </div>

                <p
                  style={{
                    fontSize: "15px",
                    color: "#6b7280",
                    lineHeight: 1.6,
                    marginBottom: "20px",
                  }}
                >
                  {category.subtitle}
                </p>

                {/* Quick stats */}
                <div
                  style={{
                    display: "flex",
                    gap: "16px",
                    paddingTop: "16px",
                    borderTop: "1px solid #f1f5f9",
                  }}
                >
                  {category.options.map((option) => (
                    <span
                      key={option.id}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                        fontSize: "13px",
                        color: "#6b7280",
                      }}
                    >
                      {Icons.clock}
                      {option.duration}
                    </span>
                  ))}
                </div>

                {/* Arrow indicator */}
                <div
                  style={{
                    position: "absolute",
                    bottom: "28px",
                    right: "28px",
                    color: "#635bff",
                    opacity: 0,
                    transform: "translateX(-10px)",
                    transition: "all 0.3s ease",
                  }}
                  className="arrow-icon"
                >
                  {Icons.arrow}
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Detail View */}
        {selectedCategory && currentCategory && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {/* Back Button */}
            <button
              onClick={() => setSelectedCategory(null)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                background: "transparent",
                border: "none",
                color: "#635bff",
                fontSize: "15px",
                fontWeight: 600,
                cursor: "pointer",
                marginBottom: "32px",
                padding: "8px 0",
              }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M15 19l-7-7 7-7" />
              </svg>
              Retour aux categories
            </button>

            {/* Category Header */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "20px",
                marginBottom: "48px",
                maxWidth: "800px",
                margin: "0 auto 48px",
              }}
            >
              <div
                style={{
                  width: "80px",
                  height: "80px",
                  borderRadius: "20px",
                  background: currentCategory.gradient,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  flexShrink: 0,
                }}
              >
                {Icons[currentCategory.icon]}
              </div>
              <div>
                <h2
                  style={{
                    fontSize: "32px",
                    fontWeight: 800,
                    color: "#1a1a2e",
                    marginBottom: "8px",
                  }}
                >
                  {currentCategory.title}
                </h2>
                <p
                  style={{
                    fontSize: "16px",
                    color: "#6b7280",
                    margin: 0,
                  }}
                >
                  {currentCategory.subtitle}
                </p>
              </div>
            </div>

            {/* Options List */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "24px",
                maxWidth: "800px",
                margin: "0 auto",
              }}
            >
              {currentCategory.options.map((option, index) => (
                <motion.div
                  key={option.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  style={{
                    background: "white",
                    borderRadius: "20px",
                    padding: "32px",
                    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.06)",
                    border: "1px solid rgba(0, 0, 0, 0.06)",
                  }}
                  whileHover={{
                    boxShadow: "0 20px 40px rgba(99, 91, 255, 0.12)",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "24px",
                    }}
                  >
                    {/* Left: Icon */}
                    <div
                      style={{
                        width: "64px",
                        height: "64px",
                        borderRadius: "16px",
                        background: `${option.color}15`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: option.color,
                        flexShrink: 0,
                      }}
                    >
                      {Icons[currentCategory.icon]}
                    </div>

                    {/* Right: Content */}
                    <div style={{ flex: 1 }}>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "12px",
                          marginBottom: "12px",
                        }}
                      >
                        <h3
                          style={{
                            fontSize: "22px",
                            fontWeight: 700,
                            color: "#1a1a2e",
                            margin: 0,
                          }}
                        >
                          {option.title}
                        </h3>
                        <span
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "4px",
                            padding: "4px 12px",
                            background: `${option.color}15`,
                            borderRadius: "20px",
                            fontSize: "12px",
                            fontWeight: 600,
                            color: option.color,
                          }}
                        >
                          {Icons.check}
                          {option.level}
                        </span>
                      </div>

                      <p
                        style={{
                          fontSize: "15px",
                          color: "#6b7280",
                          lineHeight: 1.7,
                          marginBottom: "20px",
                        }}
                      >
                        {option.description}
                      </p>

                      {/* Meta info */}
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "24px",
                          paddingTop: "20px",
                          borderTop: "1px solid #f1f5f9",
                        }}
                      >
                        <span
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "8px",
                            fontSize: "14px",
                            color: "#6b7280",
                          }}
                        >
                          {Icons.clock}
                          {option.duration}
                        </span>
                        <span
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "8px",
                            fontSize: "14px",
                            color: "#6b7280",
                          }}
                        >
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path d="M4 6h16M4 12h16M4 18h16" />
                          </svg>
                          {option.modules} modules
                        </span>
                      </div>

                      {/* CTA */}
                      <div style={{ marginTop: "24px" }}>
                        <Link to="/dashboard">
                          <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            style={{
                              display: "inline-flex",
                              alignItems: "center",
                              gap: "8px",
                              padding: "14px 28px",
                              background: "linear-gradient(135deg, #635bff 0%, #7c3aed 100%)",
                              color: "white",
                              border: "none",
                              borderRadius: "12px",
                              fontSize: "15px",
                              fontWeight: 600,
                              cursor: "pointer",
                              boxShadow: "0 10px 30px rgba(99, 91, 255, 0.3)",
                            }}
                          >
                            Commencer ce parcours
                            {Icons.arrow}
                          </motion.button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Footer CTA */}
        {!selectedCategory && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            style={{
              textAlign: "center",
              marginTop: "60px",
              padding: "40px",
              background: "white",
              borderRadius: "24px",
              maxWidth: "700px",
              margin: "60px auto 0",
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.06)",
            }}
          >
            <h3
              style={{
                fontSize: "24px",
                fontWeight: 700,
                color: "#1a1a2e",
                marginBottom: "12px",
              }}
            >
              Vous ne savez pas par ou commencer ?
            </h3>
            <p
              style={{
                fontSize: "15px",
                color: "#6b7280",
                marginBottom: "24px",
              }}
            >
              Utilisez notre assistant intelligent pour obtenir une recommandation person
            </p>
            <Link to="/assistant">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "14px 28px",
                  background: "white",
                  color: "#635bff",
                  border: "2px solid #635bff",
                  borderRadius: "12px",
                  fontSize: "15px",
                  fontWeight: 600,
                  cursor: "pointer",
                }}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
                Decouvrir mon parcours ideal
              </motion.button>
            </Link>
          </motion.div>
        )}
      </div>
    </>
  );
}

export default Parcours;
