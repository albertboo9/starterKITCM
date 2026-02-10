import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion, AnimatePresence } from "framer-motion";
import { useAuth } from "../../context/AuthContext";
import {
  Route,
  CheckCircle,
  Lock,
  PlayCircle,
  ChevronRight,
  Clock,
  Award,
  BookOpen,
  FileText,
  GraduationCap,
  ExternalLink,
  ArrowRight,
  Users,
  Building2,
  TrendingUp,
  Target,
} from "lucide-react";

function DashboardParcours() {
  const { user } = useAuth();
  const [expandedParcours, setExpandedParcours] = useState(null);

  // Comprehensive parcours data with articles, formations, certifications
  const parcoursData = [
    {
      id: "sensibilisation",
      title: "Sensibilisation à l'entrepreneuriat",
      description:
        "Découvrez les fondamentaux de l'entrepreneuriat au Cameroun et évaluez votre potentiel entrepreneurial",
      progress: 100,
      status: "completed",
      totalItems: 6,
      completedItems: 6,
      enrolledDate: "2025-01-01",
      completedDate: "2025-01-15",
      certificate: true,
      certificateId: "CERT-2025-001",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      icon: Target,
      content: {
        articles: [
          {
            id: "a1",
            title: "Qu'est-ce que l'entrepreneuriat?",
            read: true,
            url: "#",
          },
          {
            id: "a2",
            title: "Le paysage entrepreneurial camerounais",
            read: true,
            url: "#",
          },
        ],
        formations: [
          {
            id: "f1",
            title: "Introduction à l'entrepreneuriat",
            duration: "2h",
            completed: true,
            externalUrl:
              "https://campus.studieslearning.com/course/view.php?id=1344",
          },
          {
            id: "f2",
            title: "Business Model Canvas",
            duration: "1.5h",
            completed: true,
            externalUrl:
              "https://campus.studieslearning.com/course/view.php?id=1344",
          },
        ],
        certifications: [
          { id: "c1", title: "Attestation de sensibilisation", obtained: true },
        ],
      },
    },
    {
      id: "creation",
      title: "Création d'entreprise",
      description:
        "Structurez et formalisez votre entreprise selon les règles en vigueur au Cameroun",
      progress: 45,
      status: "in_progress",
      totalItems: 10,
      completedItems: 4,
      enrolledDate: "2025-01-16",
      completedDate: null,
      certificate: false,
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)", // Abstract pink
      content: {
        articles: [
          {
            id: "a3",
            title: "Les différentes formes juridiques au Cameroun",
            read: true,
            url: "#",
          },
          {
            id: "a4",
            title: "Procédures d'immatriculation au RCCM",
            read: false,
            url: "#",
          },
          {
            id: "a5",
            title: "Les obligations fiscales des PME",
            read: false,
            url: "#",
          },
        ],
        formations: [
          {
            id: "f3",
            title: "Choix de la forme juridique",
            duration: "2h",
            completed: true,
            externalUrl:
              "https://campus.studieslearning.com/course/view.php?id=1344",
          },
          {
            id: "f4",
            title: "Rédaction des statuts",
            duration: "3h",
            completed: true,
            externalUrl:
              "https://campus.studieslearning.com/course/view.php?id=1344",
          },
          {
            id: "f5",
            title: "Fiscalité des PME",
            duration: "2.5h",
            completed: false,
            externalUrl:
              "https://campus.studieslearning.com/course/view.php?id=1344",
          },
          {
            id: "f6",
            title: "Licences et autorisations",
            duration: "2h",
            completed: false,
            externalUrl:
              "https://campus.studieslearning.com/course/view.php?id=1344",
          },
        ],
        certifications: [
          {
            id: "c2",
            title: "Attestation de création d'entreprise",
            obtained: false,
          },
        ],
      },
    },
    {
      id: "financement",
      title: "Recherche de financement",
      description:
        "Apprenez à solliciter les subventions, concours et financements pour votre entreprise",
      progress: 0,
      status: "locked",
      totalItems: 8,
      completedItems: 0,
      enrolledDate: null,
      completedDate: null,
      certificate: false,
      condition: "Terminer Création d'entreprise",
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)", // Abstract blue
      content: {
        articles: [
          {
            id: "a6",
            title: "Sources de financement au Cameroun",
            read: false,
            url: "#",
          },
          {
            id: "a7",
            title: "Comment rédiger un dossier de demande?",
            read: false,
            url: "#",
          },
        ],
        formations: [
          {
            id: "f7",
            title: "Subventions et concours",
            duration: "2h",
            completed: false,
            externalUrl:
              "https://campus.studieslearning.com/course/view.php?id=1344",
          },
          {
            id: "f8",
            title: "Business plan pour investisseurs",
            duration: "3h",
            completed: false,
            externalUrl:
              "https://campus.studieslearning.com/course/view.php?id=1344",
          },
        ],
        certifications: [
          { id: "c3", title: "Attestation de financement", obtained: false },
        ],
      },
    },
    {
      id: "marketing",
      title: "Marketing digital",
      description:
        "Maîtrisez les stratégies de marketing digital pour développer votre clientèle",
      progress: 0,
      status: "locked",
      totalItems: 8,
      completedItems: 0,
      enrolledDate: null,
      completedDate: null,
      certificate: false,
      condition: "Terminer Création d'entreprise",
      gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)", // Abstract green
      content: {
        articles: [
          {
            id: "a8",
            title: "Les bases du marketing digital",
            read: false,
            url: "#",
          },
          {
            id: "a9",
            title: "Réseaux sociaux pour entrepreneurs",
            read: false,
            url: "#",
          },
        ],
        formations: [
          {
            id: "f9",
            title: "SEO et référencement",
            duration: "2.5h",
            completed: false,
            externalUrl:
              "https://campus.studieslearning.com/course/view.php?id=1344",
          },
          {
            id: "f10",
            title: "Publicité sur les réseaux sociaux",
            duration: "2h",
            completed: false,
            externalUrl:
              "https://campus.studieslearning.com/course/view.php?id=1344",
          },
        ],
        certifications: [
          {
            id: "c4",
            title: "Certification Marketing Digital",
            obtained: false,
          },
        ],
      },
    },
  ];

  const enrolledParcours = parcoursData.filter((p) => p.status !== "locked");
  const lockedParcours = parcoursData.filter((p) => p.status === "locked");

  const toggleParcours = (id) => {
    setExpandedParcours(expandedParcours === id ? null : id);
  };

  const handleFormationClick = (externalUrl) => {
    window.open(externalUrl, "_blank");
  };

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

  const renderParcoursCard = (item, index) => (
    <motion.div
      key={item.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 * index }}
      style={{
        background: "white",
        borderRadius: "16px",
        overflow: "hidden",
        boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
        border: "1px solid #f3f4f6",
        marginBottom: "16px",
      }}
    >
      {/* Header */}
      <div
        style={{
          padding: "20px",
          cursor: "pointer",
        }}
        onClick={() => toggleParcours(item.id)}
      >
        <div
          style={{
            display: "flex",
            gap: "16px",
            alignItems: "flex-start",
          }}
        >
          {/* Abstract Gradient Icon */}
          <div
            style={{
              width: "64px",
              height: "64px",
              borderRadius: "16px",
              background:
                item.gradient ||
                "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <Target size={32} style={{ color: "white" }} />
          </div>

          {/* Content */}
          <div style={{ flex: 1 }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                marginBottom: "8px",
              }}
            >
              <h3
                style={{
                  fontSize: "16px",
                  fontWeight: 600,
                  color: "#1a1a2e",
                  margin: 0,
                }}
              >
                {item.title}
              </h3>
              {getStatusBadge(item)}
            </div>

            <p
              style={{
                fontSize: "13px",
                color: "#6b7280",
                margin: "0 0 12px",
                lineHeight: 1.5,
              }}
            >
              {item.description}
            </p>

            {/* Progress */}
            {item.status !== "locked" && (
              <div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "6px",
                  }}
                >
                  <span style={{ fontSize: "12px", color: "#6b7280" }}>
                    {item.completedItems} / {item.totalItems} éléments complétés
                  </span>
                  <span
                    style={{
                      fontSize: "12px",
                      fontWeight: 600,
                      color: "#635bff",
                    }}
                  >
                    {item.progress}%
                  </span>
                </div>
                <div
                  style={{
                    width: "100%",
                    height: "6px",
                    background: "#e5e7eb",
                    borderRadius: "3px",
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
                      borderRadius: "3px",
                    }}
                  />
                </div>
              </div>
            )}

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
                }}
              >
                <Lock size={16} style={{ color: "#6b7280" }} />
                <span style={{ fontSize: "13px", color: "#6b7280" }}>
                  Condition: Terminer <strong>"{item.condition}"</strong> pour
                  débloquer
                </span>
              </div>
            )}
          </div>

          {/* Expand Arrow */}
          <ChevronRight
            size={20}
            style={{
              color: "#6b7280",
              transform:
                expandedParcours === item.id ? "rotate(90deg)" : "rotate(0deg)",
              transition: "transform 0.2s",
              flexShrink: 0,
              marginTop: "8px",
            }}
          />
        </div>
      </div>

      {/* Expanded Content */}
      <AnimatePresence>
        {expandedParcours === item.id && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              borderTop: "1px solid #f3f4f6",
              overflow: "hidden",
            }}
          >
            <div style={{ padding: "20px" }}>
              {/* Articles Section */}
              <div style={{ marginBottom: "24px" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    marginBottom: "12px",
                  }}
                >
                  <FileText size={18} style={{ color: "#f59e0b" }} />
                  <h4
                    style={{
                      fontSize: "14px",
                      fontWeight: 600,
                      color: "#1a1a2e",
                      margin: 0,
                    }}
                  >
                    Articles à lire
                  </h4>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",
                  }}
                >
                  {item.content.articles.map((article) => (
                    <div
                      key={article.id}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding: "12px 16px",
                        background: article.read
                          ? "rgba(16, 185, 129, 0.05)"
                          : "#f8f9fa",
                        borderRadius: "10px",
                        border: "1px solid",
                        borderColor: article.read
                          ? "rgba(16, 185, 129, 0.2)"
                          : "#e5e7eb",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                        }}
                      >
                        {article.read ? (
                          <CheckCircle size={16} style={{ color: "#10b981" }} />
                        ) : (
                          <div
                            style={{
                              width: "16px",
                              height: "16px",
                              borderRadius: "50%",
                              border: "2px solid #e5e7eb",
                            }}
                          />
                        )}
                        <span
                          style={{
                            fontSize: "13px",
                            color: article.read ? "#10b981" : "#374151",
                            fontWeight: article.read ? 500 : 400,
                          }}
                        >
                          {article.title}
                        </span>
                      </div>
                      <a
                        href={article.url}
                        style={{
                          fontSize: "12px",
                          color: "#635bff",
                          textDecoration: "none",
                          display: "flex",
                          alignItems: "center",
                          gap: "4px",
                        }}
                      >
                        Lire <ArrowRight size={12} />
                      </a>
                    </div>
                  ))}
                </div>
              </div>

              {/* Formations Section */}
              <div style={{ marginBottom: "24px" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    marginBottom: "12px",
                  }}
                >
                  <GraduationCap size={18} style={{ color: "#635bff" }} />
                  <h4
                    style={{
                      fontSize: "14px",
                      fontWeight: 600,
                      color: "#1a1a2e",
                      margin: 0,
                    }}
                  >
                    Formations en ligne
                  </h4>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",
                  }}
                >
                  {item.content.formations.map((formation) => (
                    <div
                      key={formation.id}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding: "14px 16px",
                        background: formation.completed
                          ? "rgba(16, 185, 129, 0.05)"
                          : "rgba(99, 91, 255, 0.04)",
                        borderRadius: "10px",
                        border: "1px solid",
                        borderColor: formation.completed
                          ? "rgba(16, 185, 129, 0.2)"
                          : "rgba(99, 91, 255, 0.2)",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "12px",
                        }}
                      >
                        {formation.completed ? (
                          <CheckCircle size={18} style={{ color: "#10b981" }} />
                        ) : (
                          <PlayCircle size={18} style={{ color: "#635bff" }} />
                        )}
                        <div>
                          <span
                            style={{
                              fontSize: "13px",
                              color: formation.completed
                                ? "#10b981"
                                : "#374151",
                              fontWeight: 500,
                            }}
                          >
                            {formation.title}
                          </span>
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "6px",
                              marginTop: "2px",
                            }}
                          >
                            <Clock size={12} style={{ color: "#6b7280" }} />
                            <span
                              style={{ fontSize: "11px", color: "#6b7280" }}
                            >
                              {formation.duration}
                            </span>
                          </div>
                        </div>
                      </div>
                      <button
                        onClick={() =>
                          handleFormationClick(formation.externalUrl)
                        }
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "6px",
                          padding: "8px 14px",
                          background: formation.completed
                            ? "#10b981"
                            : "#635bff",
                          border: "none",
                          borderRadius: "8px",
                          color: "white",
                          fontSize: "12px",
                          fontWeight: 600,
                          cursor: "pointer",
                        }}
                      >
                        {formation.completed ? (
                          <>
                            <CheckCircle size={14} /> Terminé
                          </>
                        ) : (
                          <>
                            <PlayCircle size={14} /> Commencer
                          </>
                        )}
                        <ExternalLink size={12} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Certifications Section */}
              <div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    marginBottom: "12px",
                  }}
                >
                  <Award size={18} style={{ color: "#f59e0b" }} />
                  <h4
                    style={{
                      fontSize: "14px",
                      fontWeight: 600,
                      color: "#1a1a2e",
                      margin: 0,
                    }}
                  >
                    Certifications
                  </h4>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",
                  }}
                >
                  {item.content.certifications.map((cert) => (
                    <div
                      key={cert.id}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding: "14px 16px",
                        background: cert.obtained
                          ? "rgba(245, 158, 11, 0.08)"
                          : "rgba(107, 114, 128, 0.08)",
                        borderRadius: "10px",
                        border: "1px solid",
                        borderColor: cert.obtained
                          ? "rgba(245, 158, 11, 0.3)"
                          : "rgba(107, 114, 128, 0.2)",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                        }}
                      >
                        {cert.obtained ? (
                          <Award size={18} style={{ color: "#f59e0b" }} />
                        ) : (
                          <Lock size={16} style={{ color: "#6b7280" }} />
                        )}
                        <span
                          style={{
                            fontSize: "13px",
                            color: cert.obtained ? "#f59e0b" : "#6b7280",
                            fontWeight: 500,
                          }}
                        >
                          {cert.title}
                        </span>
                      </div>
                      {cert.obtained ? (
                        <button
                          style={{
                            padding: "8px 14px",
                            background: "#f59e0b",
                            border: "none",
                            borderRadius: "8px",
                            color: "white",
                            fontSize: "12px",
                            fontWeight: 600,
                            cursor: "pointer",
                          }}
                        >
                          Voir le certificat
                        </button>
                      ) : (
                        <span
                          style={{
                            fontSize: "12px",
                            color: "#6b7280",
                            display: "flex",
                            alignItems: "center",
                            gap: "4px",
                          }}
                        >
                          <Target size={12} /> À obtenir
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );

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
          Suivez votre progression dans vos parcours entrepreneuriaux -
          articles, formations et certifications
        </p>
      </motion.div>

      {/* Stats Summary */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
          gap: "16px",
          marginBottom: "32px",
        }}
      >
        {[
          {
            label: "Parcours terminés",
            value: enrolledParcours.filter((p) => p.status === "completed")
              .length,
            color: "#10b981",
            icon: CheckCircle,
          },
          {
            label: "En cours",
            value: enrolledParcours.filter((p) => p.status === "in_progress")
              .length,
            color: "#635bff",
            icon: Route,
          },
          {
            label: "Articles lus",
            value: enrolledParcours.reduce(
              (acc, p) => acc + p.content.articles.filter((a) => a.read).length,
              0,
            ),
            color: "#f59e0b",
            icon: FileText,
          },
          {
            label: "Formations terminées",
            value: enrolledParcours.reduce(
              (acc, p) =>
                acc + p.content.formations.filter((f) => f.completed).length,
              0,
            ),
            color: "#8b5cf6",
            icon: GraduationCap,
          },
          {
            label: "Certificats",
            value: enrolledParcours.filter((p) => p.certificate).length,
            color: "#ec4899",
            icon: Award,
          },
        ].map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index }}
            style={{
              background: "white",
              borderRadius: "16px",
              padding: "20px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
              border: "1px solid #f3f4f6",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                marginBottom: "8px",
              }}
            >
              <stat.icon size={18} style={{ color: stat.color }} />
              <p style={{ fontSize: "13px", color: "#6b7280", margin: 0 }}>
                {stat.label}
              </p>
            </div>
            <p
              style={{
                fontSize: "28px",
                fontWeight: 700,
                color: stat.color,
                margin: 0,
              }}
            >
              {stat.value}
            </p>
          </motion.div>
        ))}
      </motion.div>

      {/* Enrolled Parcours */}
      {enrolledParcours.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          style={{ marginBottom: "32px" }}
        >
          <h2
            style={{
              fontSize: "18px",
              fontWeight: 600,
              color: "#1a1a2e",
              marginBottom: "16px",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <Route size={20} style={{ color: "#635bff" }} />
            Mes parcours actifs
          </h2>
          {enrolledParcours.map((item, index) =>
            renderParcoursCard(item, index),
          )}
        </motion.div>
      )}

      {/* Locked Parcours */}
      {lockedParcours.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h2
            style={{
              fontSize: "18px",
              fontWeight: 600,
              color: "#6b7280",
              marginBottom: "16px",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <Lock size={20} />
            Parcours verrouillés
          </h2>
          {lockedParcours.map((item, index) => renderParcoursCard(item, index))}
        </motion.div>
      )}
    </>
  );
}

export default DashboardParcours;
