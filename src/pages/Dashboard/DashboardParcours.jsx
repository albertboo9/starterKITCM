import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { useAuth } from "../../context/AuthContext";
import {
  Route,
  CheckCircle,
  Lock,
  PlayCircle,
  ChevronRight,
  Clock,
  Award,
} from "lucide-react";

function DashboardParcours() {
  const { user } = useAuth();

  // User's enrolled parcours data
  const enrolledParcours = [
    {
      id: "sensibilisation",
      title: "Sensibilisation à l'entrepreneuriat",
      description: "Découvrez les fondamentaux de l'entrepreneuriat au Cameroun",
      progress: 100,
      status: "completed",
      modulesCompleted: 4,
      totalModules: 4,
      enrolledDate: "2025-01-01",
      completedDate: "2025-01-15",
      certificate: true,
    },
    {
      id: "creation",
      title: "Création d'entreprise",
      description: "Structurez et formalisez votre entreprise selon les règles en vigueur",
      progress: 45,
      status: "in_progress",
      modulesCompleted: 4,
      totalModules: 8,
      enrolledDate: "2025-01-16",
      completedDate: null,
      certificate: false,
      condition: "Terminer Sensibilisation",
    },
    {
      id: "financement",
      title: "Recherche de financement",
      description: "Sollicitez les subventions et concours financiers",
      progress: 0,
      status: "locked",
      modulesCompleted: 0,
      totalModules: 5,
      enrolledDate: null,
      completedDate: null,
      certificate: false,
      condition: "Terminer Création d'entreprise",
    },
    {
      id: "marketing",
      title: "Marketing digital",
      description: "Apprenez à promouvoir votre entreprise en ligne",
      progress: 0,
      status: "locked",
      modulesCompleted: 0,
      totalModules: 5,
      enrolledDate: null,
      completedDate: null,
      certificate: false,
      condition: "Terminer Création d'entreprise",
    },
  ];

  const getStatusBadge = (item) => {
    if (item.status === "completed") {
      return (
        <span
          style={{
            display: "flex",
            alignItems: "center",
            gap: "4px",
            padding: "4px 12px",
            borderRadius: "20px",
            fontSize: "12px",
            fontWeight: 600,
            background: "rgba(16, 185, 129, 0.1)",
            color: "#10b981",
          }}
        >
          <CheckCircle size={14} />
          Terminé
        </span>
      );
    }
    if (item.status === "in_progress") {
      return (
        <span
          style={{
            display: "flex",
            alignItems: "center",
            gap: "4px",
            padding: "4px 12px",
            borderRadius: "20px",
            fontSize: "12px",
            fontWeight: 600,
            background: "rgba(99, 91, 255, 0.1)",
            color: "#635bff",
          }}
        >
          <PlayCircle size={14} />
          En cours - {item.progress}%
        </span>
      );
    }
    return (
      <span
        style={{
          display: "flex",
          alignItems: "center",
          gap: "4px",
          padding: "4px 12px",
          borderRadius: "20px",
          fontSize: "12px",
          fontWeight: 600,
          background: "rgba(107, 114, 128, 0.1)",
          color: "#6b7280",
        }}
      >
        <Lock size={14} />
        Verrouillé
      </span>
    );
  };

  const getProgressBarColor = (status) => {
    if (status === "completed") return "#10b981";
    return "linear-gradient(90deg, #635bff 0%, #7c3aed 100%)";
  };

  return (
    <>
      <Helmet>
        <title>Mes parcours - Dashboard STARTERKITCM</title>
      </Helmet>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        style={{ marginBottom: "32px" }}
      >
        <h1
          style={{
            fontSize: "28px",
            fontWeight: 700,
            color: "#1a1a2e",
            marginBottom: "8px",
          }}
        >
          Mes parcours
        </h1>
        <p style={{ fontSize: "15px", color: "#6b7280" }}>
          Suivez votre progression dans vos parcours entrepreneuriaux
        </p>
      </motion.div>

      {/* Stats Summary */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "16px",
          marginBottom: "32px",
        }}
      >
        {[
          {
            label: "Parcours terminés",
            value: enrolledParcours.filter((p) => p.status === "completed").length,
            color: "#10b981",
          },
          {
            label: "En cours",
            value: enrolledParcours.filter((p) => p.status === "in_progress").length,
            color: "#635bff",
          },
          {
            label: "Verrouillés",
            value: enrolledParcours.filter((p) => p.status === "locked").length,
            color: "#6b7280",
          },
          {
            label: "Certificats obtenus",
            value: enrolledParcours.filter((p) => p.certificate).length,
            color: "#f59e0b",
          },
        ].map((stat, index) => (
          <div
            key={stat.label}
            style={{
              background: "white",
              borderRadius: "16px",
              padding: "20px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
              border: "1px solid #f3f4f6",
            }}
          >
            <p style={{ fontSize: "13px", color: "#6b7280", marginBottom: "8px" }}>
              {stat.label}
            </p>
            <p
              style={{
                fontSize: "32px",
                fontWeight: 700,
                color: stat.color,
                margin: 0,
              }}
            >
              {stat.value}
            </p>
          </div>
        ))}
      </motion.div>

      {/* Parcours List */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        style={{
          background: "white",
          borderRadius: "16px",
          padding: "24px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
          border: "1px solid #f3f4f6",
        }}
      >
        <h2
          style={{
            fontSize: "18px",
            fontWeight: 600,
            color: "#1a1a2e",
            marginBottom: "20px",
          }}
        >
          Tous mes parcours
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {enrolledParcours.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              style={{
                padding: "20px",
                background:
                  item.status === "in_progress"
                    ? "rgba(99, 91, 255, 0.04)"
                    : "#f8f9fa",
                borderRadius: "12px",
                border:
                  item.status === "in_progress"
                    ? "1px solid rgba(99, 91, 255, 0.2)"
                    : "1px solid transparent",
                opacity: item.status === "locked" ? 0.7 : 1,
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  marginBottom: "16px",
                }}
              >
                <div style={{ flex: 1 }}>
                  <h3
                    style={{
                      fontSize: "16px",
                      fontWeight: 600,
                      color: "#1a1a2e",
                      marginBottom: "6px",
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "13px",
                      color: "#6b7280",
                      margin: 0,
                      lineHeight: 1.5,
                    }}
                  >
                    {item.description}
                  </p>
                </div>
                {getStatusBadge(item)}
              </div>

              {/* Locked Condition */}
              {item.status === "locked" && (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "10px 14px",
                    background: "rgba(107, 114, 128, 0.08)",
                    borderRadius: "10px",
                    marginBottom: "16px",
                  }}
                >
                  <Lock size={16} style={{ color: "#6b7280" }} />
                  <span style={{ fontSize: "13px", color: "#6b7280" }}>
                    Condition: Terminer{" "}
                    <strong>\"{item.condition}\"</strong> pour débloquer
                  </span>
                </div>
              )}

              {/* Progress Bar (for active parcours) */}
              {item.status !== "locked" && (
                <div style={{ marginBottom: "16px" }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginBottom: "8px",
                    }}
                  >
                    <span style={{ fontSize: "12px", color: "#6b7280" }}>
                      {item.modulesCompleted} / {item.totalModules} modules
                    </span>
                    <span style={{ fontSize: "12px", color: "#6b7280" }}>
                      {item.progress}%
                    </span>
                  </div>
                  <div
                    style={{
                      width: "100%",
                      height: "8px",
                      background: "#e5e7eb",
                      borderRadius: "4px",
                      overflow: "hidden",
                    }}
                  >
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${item.progress}%` }}
                      transition={{ delay: 0.3 + index * 0.1, duration: 0.8 }}
                      style={{
                        height: "100%",
                        background: getProgressBarColor(item.status),
                        borderRadius: "4px",
                      }}
                    />
                  </div>
                </div>
              )}

              {/* Actions */}
              <div
                style={{
                  display: "flex",
                  gap: "12px",
                  alignItems: "center",
                }}
              >
                {item.status === "completed" && item.certificate && (
                  <button
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                      padding: "10px 16px",
                      background: "#f59e0b",
                      border: "none",
                      borderRadius: "10px",
                      color: "white",
                      fontSize: "13px",
                      fontWeight: 600,
                      cursor: "pointer",
                    }}
                  >
                    <Award size={16} />
                    Voir certificat
                  </button>
                )}

                {item.status === "in_progress" && (
                  <button
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                      padding: "10px 16px",
                      background: "#635bff",
                      border: "none",
                      borderRadius: "10px",
                      color: "white",
                      fontSize: "13px",
                      fontWeight: 600,
                      cursor: "pointer",
                    }}
                  >
                    <PlayCircle size={16} />
                    Continuer
                  </button>
                )}

                {item.status === "locked" && (
                  <button
                    disabled
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                      padding: "10px 16px",
                      background: "#e5e7eb",
                      border: "none",
                      borderRadius: "10px",
                      color: "#9ca3af",
                      fontSize: "13px",
                      fontWeight: 600,
                      cursor: "not-allowed",
                    }}
                  >
                    <Lock size={16} />
                    Bloqué
                  </button>
                )}

                {item.completedDate && (
                  <span style={{ fontSize: "12px", color: "#10b981" }}>
                    Terminé le {new Date(item.completedDate).toLocaleDateString("fr-FR")}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </>
  );
}

export default DashboardParcours;
