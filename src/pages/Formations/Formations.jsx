import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";

function Formations() {
  const [filter, setFilter] = useState("all");

  const formations = [
    {
      title: "Fondamentaux de l'entrepreneuriat",
      category: "Sensibilisation",
      duration: "2 semaines",
      level: "Débutant",
    },
    {
      title: "Business Model Canvas",
      category: "Création",
      duration: "1 semaine",
      level: "Débutant",
    },
    {
      title: "Étude de marché",
      category: "Création",
      duration: "2 semaines",
      level: "Intermédiaire",
    },
    {
      title: "Gestion financière",
      category: "Gestion",
      duration: "4 semaines",
      level: "Intermédiaire",
    },
    {
      title: "Marketing digital",
      category: "Marketing",
      duration: "3 semaines",
      level: "Intermédiaire",
    },
  ];

  const categories = [
    "all",
    "Sensibilisation",
    "Création",
    "Gestion",
    "Marketing",
  ];

  return (
    <>
      <Helmet>
        <title>Formations - STARTERKITCM</title>
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
            style={{ textAlign: "center", marginBottom: "40px" }}
          >
            <h1
              style={{
                fontSize: "32px",
                fontWeight: 700,
                color: "#1a1a2e",
                marginBottom: "12px",
              }}
            >
              Catalogue de formations
            </h1>
            <p style={{ fontSize: "16px", color: "#666" }}>
              Formations certifiées MINPEEMSA sur notre campus partenaire.
            </p>
          </motion.div>

          <div
            style={{
              display: "flex",
              gap: "12px",
              justifyContent: "center",
              marginBottom: "40px",
              flexWrap: "wrap",
            }}
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                style={{
                  padding: "10px 20px",
                  borderRadius: "25px",
                  border: "none",
                  background:
                    filter === cat
                      ? "linear-gradient(135deg, #635bff 0%, #7c3aed 100%)"
                      : "white",
                  color: filter === cat ? "white" : "#666",
                  fontSize: "14px",
                  fontWeight: 600,
                  cursor: "pointer",
                  boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
                }}
              >
                {cat === "all" ? "Toutes" : cat}
              </button>
            ))}
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "24px",
            }}
          >
            {formations.map((formation, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="featured-card"
                style={{ padding: "0", overflow: "hidden" }}
              >
                <div
                  style={{
                    padding: "20px",
                    background:
                      "linear-gradient(135deg, #635bff 0%, #7c3aed 100%)",
                    color: "white",
                  }}
                >
                  <span
                    style={{
                      fontSize: "12px",
                      background: "rgba(255,255,255,0.2)",
                      padding: "4px 10px",
                      borderRadius: "15px",
                      fontWeight: 600,
                    }}
                  >
                    {formation.category}
                  </span>
                  <h3
                    style={{
                      fontSize: "18px",
                      fontWeight: 700,
                      marginTop: "12px",
                    }}
                  >
                    {formation.title}
                  </h3>
                </div>
                <div style={{ padding: "20px" }}>
                  <div
                    style={{
                      display: "flex",
                      gap: "16px",
                      marginBottom: "16px",
                      fontSize: "13px",
                      color: "#666",
                    }}
                  >
                    <span>⏱ {formation.duration}</span>
                    <span>📊 {formation.level}</span>
                  </div>
                  <button className="btn-primary btn-block">
                    Accéder à la formation
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Formations;
