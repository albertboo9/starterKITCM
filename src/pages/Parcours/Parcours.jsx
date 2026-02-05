import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";

function Parcours() {
  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    {
      id: "sensibilisation",
      title: "Me sensibiliser",
      icon: "💡",
      desc: "Comprendre les bases",
    },
    {
      id: "creation",
      title: "Créer mon entreprise",
      icon: "🏢",
      desc: "Formaliser mon projet",
    },
    {
      id: "formation",
      title: "Me former",
      icon: "📚",
      desc: "Acquérir des compétences",
    },
    {
      id: "financement",
      title: "Trouver un financement",
      icon: "💰",
      desc: "Obtenir des ressources",
    },
    {
      id: "reseau",
      title: "Développer mon réseau",
      icon: "🤝",
      desc: "Connexions professionnelles",
    },
    {
      id: "rh",
      title: "Problème RH / fiscal",
      icon: "⚖️",
      desc: "Résoudre des difficultés",
    },
  ];

  const recommendations = [
    {
      title: "Parcours Création",
      status: "recommended",
      duration: "6 semaines",
      description: "Apprenez à structurer votre entreprise.",
    },
    {
      title: "Parcours Sensibilisation",
      status: "recommended",
      duration: "2 semaines",
      description: "Découvrez les fondamentaux.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Parcours - STARTERKITCM</title>
      </Helmet>

      <div
        style={{
          padding: "100px 24px 60px",
          background: "#f8f9fa",
          minHeight: "100vh",
        }}
      >
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            style={{ textAlign: "center", marginBottom: "48px" }}
          >
            <h1
              style={{
                fontSize: "32px",
                fontWeight: 700,
                color: "#1a1a2e",
                marginBottom: "12px",
              }}
            >
              Quel parcours vous intéresse ?
            </h1>
            <p style={{ fontSize: "16px", color: "#666" }}>
              Choisissez l'accompagnement adapté à vos besoins.
            </p>
          </motion.div>

          {!selectedOption && (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "20px",
                marginBottom: "48px",
              }}
            >
              {options.map((option) => (
                <motion.div
                  key={option.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -4 }}
                  className="featured-card"
                  style={{ cursor: "pointer", padding: "24px" }}
                  onClick={() => setSelectedOption(option.id)}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "16px",
                    }}
                  >
                    <span style={{ fontSize: "40px" }}>{option.icon}</span>
                    <div>
                      <h3
                        style={{
                          fontSize: "18px",
                          fontWeight: 700,
                          color: "#1a1a2e",
                          marginBottom: "4px",
                        }}
                      >
                        {option.title}
                      </h3>
                      <p style={{ fontSize: "14px", color: "#666" }}>
                        {option.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {selectedOption && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <button
                onClick={() => setSelectedOption(null)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  background: "transparent",
                  border: "none",
                  color: "#635bff",
                  fontSize: "14px",
                  fontWeight: 600,
                  cursor: "pointer",
                  marginBottom: "24px",
                }}
              >
                ← Retour
              </button>

              <h2
                style={{
                  fontSize: "24px",
                  fontWeight: 700,
                  color: "#1a1a2e",
                  marginBottom: "24px",
                  textAlign: "center",
                }}
              >
                Recommandations
              </h2>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                  maxWidth: "700px",
                  margin: "0 auto",
                }}
              >
                {recommendations.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="featured-card"
                    style={{ padding: "24px" }}
                  >
                    <div style={{ display: "flex", gap: "16px" }}>
                      <div
                        style={{
                          width: "50px",
                          height: "50px",
                          borderRadius: "12px",
                          background:
                            "linear-gradient(135deg, #635bff 0%, #7c3aed 100%)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                        }}
                      >
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="white"
                          strokeWidth="2"
                        >
                          <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                        </svg>
                      </div>
                      <div style={{ flex: 1 }}>
                        <span className="badge badge-success">Recommandé</span>
                        <h3
                          style={{
                            fontSize: "18px",
                            fontWeight: 700,
                            color: "#1a1a2e",
                            margin: "12px 0 8px",
                          }}
                        >
                          {item.title}
                        </h3>
                        <p
                          style={{
                            fontSize: "14px",
                            color: "#666",
                            marginBottom: "16px",
                          }}
                        >
                          {item.description}
                        </p>
                        <Link to="/dashboard">
                          <button className="btn-primary">
                            Commencer ce parcours
                          </button>
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {!selectedOption && (
            <div style={{ textAlign: "center", marginTop: "48px" }}>
              <Link to="/dashboard">
                <button className="btn-secondary">Voir mes parcours</button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Parcours;
