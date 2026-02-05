import { useRef } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

function Home() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  const features = [
    {
      icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01",
      title: "Orientation Strategique",
      description:
        "Decouvrez le parcours entrepreneurial adapte a votre profil, vos competences et vos ambitions professionnelles.",
    },
    {
      icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
      title: "Formation de Qualite",
      description:
        "Accedez a des formations certifiantes dispensees par notre campus e-learning partenaire, concues par des experts.",
    },
    {
      icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z",
      title: "Certification Officielle",
      description:
        "Validez vos competences avec une reconnaissance officielle du Ministere de la Petite et Moyenne Entreprise.",
    },
    {
      icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
      title: "Reseau Entrepreneurial",
      description:
        "Rejoignez une communaute dynamique d entrepreneurs, de mentors et de partenaires institutionnels engagees.",
    },
  ];

  const steps = [
    {
      step: "01",
      title: "Evaluez votre profil",
      description:
        "Repondez a quelques questions pour identifier votre niveau et vos objectifs entrepreneuriaux.",
      icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4",
    },
    {
      step: "02",
      title: "Suivez les formations",
      description:
        "Accedez a notre catalogue de formations et developpez vos competences entrepreneuriales.",
      icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
    },
    {
      step: "03",
      title: "Obtenez la certification",
      description:
        "Validez vos acquis et recevez votre certification MINPEEMSA pour credibiliser votre projet.",
      icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z",
    },
    {
      step: "04",
      title: "Lancez votre entreprise",
      description:
        "Beneficiez de l'accompagnement necessaire pour formaliser et developper votre entreprise.",
      icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
    },
  ];

  const testimonials = [
    {
      name: "Marie-Claire N.",
      role: "Fondatrice, TechStart Cameroon",
      image:
        "/img/african-woman-manager-looking-camera-smiling-holding-clipboard-while-diverse-coworkers-talking-background.jpg",
      quote:
        "STARTERKITCM m'a permis de structurer mon projet et d'obtenir ma certification en seulement 3 mois.",
    },
    {
      name: "Jean-Pierre M.",
      role: " Entrepreneur, AgroTech Solutions",
      image: "/img/black-employees-explaining-business-analytics.jpg",
      quote:
        "L'accompagnement et les ressources disponibles sont exceptionnels. Je recommande vivement.",
    },
  ];

  const partners = [
    { name: "MINPEEMSA", logo: "🏛" },
    { name: "PNUD", logo: "🌍" },
    { name: "CCIM", logo: "🏢" },
    { name: "BANGE", logo: "🏦" },
    { name: "APME", logo: "🤝" },
  ];

  const stats = [
    { value: "5,000+", label: "Entrepreneurs accompagnés" },
    { value: "50+", label: "Formations disponibles" },
    { value: "98%", label: "Taux de satisfaction" },
    { value: "2,500+", label: "Certifications delivrees" },
  ];

  return (
    <>
      <Helmet>
        <title>STARTERKITCM - L'Entrepreneuriat au Cameroun</title>
        <meta
          name="description"
          content="Portez votre projet entrepreneurial au Cameroun. Orientation, formation et certification MINPEEMSA."
        />
      </Helmet>

      {/* Hero Section */}
      <section
        style={{
          minHeight: "100vh",
          position: "relative",
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
          background: "#ffffff",
        }}
      >
        {/* Background Image */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 0,
          }}
        >
          <img
            src="/img/university-students-learning-accounting-principles-financial-analysis.jpg"
            alt="Students learning"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              opacity: 0.15,
            }}
          />
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(248,249,250,0.9) 100%)",
            }}
          />
        </div>

        {/* Floating Elements */}
        <motion.div
          animate={{ rotate: [0, 5, -5, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
          style={{
            position: "absolute",
            top: "15%",
            right: "8%",
            width: "200px",
            height: "200px",
            borderRadius: "50%",
            background:
              "linear-gradient(135deg, rgba(99, 91, 255, 0.08) 0%, rgba(124, 58, 237, 0.05) 100%)",
            filter: "blur(40px)",
          }}
        />
        <motion.div
          animate={{ rotate: [0, -5, 5, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
          style={{
            position: "absolute",
            bottom: "20%",
            left: "5%",
            width: "300px",
            height: "300px",
            borderRadius: "50%",
            background:
              "linear-gradient(135deg, rgba(16, 185, 129, 0.05) 0%, rgba(5, 150, 105, 0.03) 100%)",
            filter: "blur(60px)",
          }}
        />

        <div
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            padding: "120px 24px",
            position: "relative",
            zIndex: 1,
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "80px",
              alignItems: "center",
            }}
          >
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  padding: "10px 20px",
                  background: "rgba(99, 91, 255, 0.08)",
                  borderRadius: "30px",
                  marginBottom: "32px",
                  border: "1px solid rgba(99, 91, 255, 0.15)",
                }}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#635bff"
                  strokeWidth="2"
                >
                  <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
                <span
                  style={{
                    fontSize: "13px",
                    fontWeight: 600,
                    color: "#635bff",
                  }}
                >
                  Portail Officiel MINPEEMSA
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                style={{
                  fontSize: "clamp(42px, 5vw, 64px)",
                  fontWeight: 800,
                  color: "#1a1a2e",
                  lineHeight: 1.1,
                  marginBottom: "24px",
                  letterSpacing: "-0.03em",
                }}
              >
                Lancez votre entreprise
                <br />
                <span
                  style={{
                    background:
                      "linear-gradient(135deg, #635bff 0%, #7c3aed 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  avec confiance
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                style={{
                  fontSize: "clamp(16px, 1.8vw, 20px)",
                  color: "#4b5563",
                  maxWidth: "520px",
                  margin: "0 auto 40px",
                  lineHeight: 1.8,
                }}
              >
                STARTERKITCM est la porte d'entree officielle de
                l'entrepreneuriat au Cameroun. Orientez, structurez, validez et
                lancez votre projet avec l'accompagnement des experts et la
                reconnaissance du Ministere.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}
              >
                <Link to="/signup">
                  <motion.button
                    whileHover={{
                      scale: 1.02,
                      boxShadow: "0 8px 30px rgba(99, 91, 255, 0.4)",
                    }}
                    whileTap={{ scale: 0.98 }}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "12px",
                      padding: "18px 36px",
                      background:
                        "linear-gradient(135deg, #635bff 0%, #7c3aed 100%)",
                      border: "none",
                      borderRadius: "14px",
                      color: "white",
                      fontSize: "16px",
                      fontWeight: 600,
                      cursor: "pointer",
                      boxShadow: "0 4px 20px rgba(99, 91, 255, 0.35)",
                      transition: "box-shadow 0.3s",
                    }}
                  >
                    Demarrer mon parcours
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </motion.button>
                </Link>
                <Link to="/parcours">
                  <motion.button
                    whileHover={{ scale: 1.02, background: "#f8f9fa" }}
                    whileTap={{ scale: 0.98 }}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "12px",
                      padding: "18px 36px",
                      background: "white",
                      border: "2px solid #e5e7eb",
                      borderRadius: "14px",
                      color: "#1a1a2e",
                      fontSize: "16px",
                      fontWeight: 600,
                      cursor: "pointer",
                      transition: "all 0.3s",
                    }}
                  >
                    Decouvrir la plateforme
                  </motion.button>
                </Link>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                style={{
                  display: "flex",
                  gap: "40px",
                  marginTop: "60px",
                  paddingTop: "40px",
                  borderTop: "1px solid #e5e7eb",
                }}
              >
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.2 }}
                    style={{ textAlign: "left" }}
                  >
                    <p
                      style={{
                        fontSize: "28px",
                        fontWeight: 800,
                        color: "#635bff",
                        marginBottom: "4px",
                      }}
                    >
                      {stat.value}
                    </p>
                    <p
                      style={{
                        fontSize: "13px",
                        color: "#6b7280",
                        lineHeight: 1.4,
                      }}
                    >
                      {stat.label}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              style={{ position: "relative" }}
            >
              <motion.div
                style={{
                  borderRadius: "24px",
                  overflow: "hidden",
                  boxShadow: "0 25px 80px rgba(0, 0, 0, 0.15)",
                }}
              >
                <img
                  src="/img/african-woman-manager-looking-camera-smiling-holding-clipboard-while-diverse-coworkers-talking-background.jpg"
                  alt="Entrepreneur"
                  style={{ width: "100%", height: "500px", objectFit: "cover" }}
                />
              </motion.div>
              {/* Floating Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                style={{
                  position: "absolute",
                  bottom: "-30px",
                  left: "-30px",
                  background: "white",
                  padding: "20px 28px",
                  borderRadius: "16px",
                  boxShadow: "0 10px 40px rgba(0, 0, 0, 0.12)",
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                }}
              >
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "12px",
                    background:
                      "linear-gradient(135deg, #10b981 0%, #059669 100%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
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
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p
                    style={{
                      fontSize: "14px",
                      fontWeight: 600,
                      color: "#1a1a2e",
                      marginBottom: "2px",
                    }}
                  >
                    Certification
                  </p>
                  <p style={{ fontSize: "12px", color: "#6b7280" }}>
                    MINPEEMSA validée
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section style={{ padding: "120px 24px", background: "#f8f9fa" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ textAlign: "center", marginBottom: "80px" }}
          >
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "8px 16px",
                background: "rgba(99, 91, 255, 0.08)",
                borderRadius: "20px",
                marginBottom: "20px",
                fontSize: "13px",
                fontWeight: 600,
                color: "#635bff",
              }}
            >
              Qu'est-ce que STARTERKITCM ?
            </span>
            <h2
              style={{
                fontSize: "clamp(32px, 4vw, 48px)",
                fontWeight: 800,
                color: "#1a1a2e",
                marginBottom: "20px",
                letterSpacing: "-0.02em",
              }}
            >
              Votre companion officiel de l'entrepreneuriat
            </h2>
            <p
              style={{
                fontSize: "18px",
                color: "#6b7280",
                maxWidth: "700px",
                margin: "0 auto",
                lineHeight: 1.8,
              }}
            >
              STARTERKITCM est bien plus qu'une plateforme. C'est un ecosysteme
              complet concu pour accompagner chaque Camerounais dans son
              parcours entrepreneurial, de l'idee jusqu'a la creation
              d'entreprise officiellement reconnue.
            </p>
          </motion.div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "60px",
              alignItems: "center",
            }}
          >
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="/img/black-employees-explaining-business-analytics.jpg"
                alt="Business team"
                style={{
                  width: "100%",
                  borderRadius: "20px",
                  boxShadow: "0 20px 60px rgba(0, 0, 0, 0.1)",
                }}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3
                style={{
                  fontSize: "28px",
                  fontWeight: 700,
                  color: "#1a1a2e",
                  marginBottom: "24px",
                }}
              >
                Une vision claire pour l'avenir economique du Cameroun
              </h3>
              <p
                style={{
                  fontSize: "16px",
                  color: "#4b5563",
                  lineHeight: 1.8,
                  marginBottom: "24px",
                }}
              >
                Le Cameroun regorge de talents et d'idees entrepreneuriales.
                Pourtant, de nombreux projets ne voient jamais le jour par
                manque d'orientation, de structuration ou de reconnaissance
                officielle.
              </p>
              <p
                style={{
                  fontSize: "16px",
                  color: "#4b5563",
                  lineHeight: 1.8,
                  marginBottom: "32px",
                }}
              >
                STARTERKITCM repond a ce defi en offrant un parcours guide, des
                formations de qualite et une certification qui ouvre des portes
                aupres des partenaires financiers et institutionnels.
              </p>
              <ul style={{ listStyle: "none", padding: 0 }}>
                {[
                  "Orientation personnalisee selon votre profil",
                  "Formations certifiantes reconnues par l'Etat",
                  "Accompagnement a chaque etape",
                  "Acces a un reseau d'entrepreneurs",
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      marginBottom: "16px",
                      fontSize: "15px",
                      color: "#374151",
                    }}
                  >
                    <span
                      style={{
                        width: "24px",
                        height: "24px",
                        borderRadius: "50%",
                        background:
                          "linear-gradient(135deg, #10b981 0%, #059669 100%)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                        strokeWidth="3"
                      >
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section style={{ padding: "120px 24px", background: "white" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ textAlign: "center", marginBottom: "80px" }}
          >
            <h2
              style={{
                fontSize: "clamp(32px, 4vw, 48px)",
                fontWeight: 800,
                color: "#1a1a2e",
                marginBottom: "20px",
                letterSpacing: "-0.02em",
              }}
            >
              Tout ce dont vous avez besoin pour reussir
            </h2>
            <p
              style={{
                fontSize: "18px",
                color: "#6b7280",
                maxWidth: "600px",
                margin: "0 auto",
                lineHeight: 1.7,
              }}
            >
              Des outils et ressources adaptes a chaque etape de votre parcours
              entrepreneurial.
            </p>
          </motion.div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "24px",
            }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{
                  y: -8,
                  boxShadow: "0 20px 60px rgba(99, 91, 255, 0.15)",
                }}
                style={{
                  padding: "36px 28px",
                  background: "#f8f9fa",
                  borderRadius: "20px",
                  border: "1px solid #f3f4f6",
                  transition: "all 0.3s ease",
                  cursor: "default",
                }}
              >
                <div
                  style={{
                    width: "64px",
                    height: "64px",
                    borderRadius: "16px",
                    background:
                      "linear-gradient(135deg, rgba(99, 91, 255, 0.1) 0%, rgba(124, 58, 237, 0.1) 100%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "24px",
                  }}
                >
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#635bff"
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

      {/* How It Works */}
      <section
        style={{
          padding: "120px 24px",
          background: "linear-gradient(135deg, #1a1a2e 0%, #2d2d4a 100%)",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ textAlign: "center", marginBottom: "80px" }}
          >
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "8px 16px",
                background: "rgba(255, 255, 255, 0.1)",
                borderRadius: "20px",
                marginBottom: "20px",
                fontSize: "13px",
                fontWeight: 600,
                color: "rgba(255, 255, 255, 0.8)",
              }}
            >
              Comment ca marche ?
            </span>
            <h2
              style={{
                fontSize: "clamp(32px, 4vw, 48px)",
                fontWeight: 800,
                color: "white",
                marginBottom: "20px",
                letterSpacing: "-0.02em",
              }}
            >
              Votre parcours en 4 etapes simples
            </h2>
            <p
              style={{
                fontSize: "18px",
                color: "rgba(255, 255, 255, 0.6)",
                maxWidth: "600px",
                margin: "0 auto",
                lineHeight: 1.7,
              }}
            >
              Un processus clair et structure pour vous guider de l'idee a
              l'entreprise.
            </p>
          </motion.div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "32px",
              position: "relative",
            }}
          >
            {/* Connecting Line */}
            <div
              style={{
                position: "absolute",
                top: "60px",
                left: "15%",
                right: "15%",
                height: "2px",
                background:
                  "linear-gradient(90deg, rgba(255,255,255,0.1) 0%, rgba(99, 91, 255, 0.5) 50%, rgba(255,255,255,0.1) 100%)",
              }}
            />

            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                style={{ textAlign: "center", position: "relative" }}
              >
                <div
                  style={{
                    width: "80px",
                    height: "80px",
                    borderRadius: "20px",
                    background:
                      "linear-gradient(135deg, #635bff 0%, #7c3aed 100%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 24px",
                    boxShadow: "0 10px 40px rgba(99, 91, 255, 0.4)",
                  }}
                >
                  <span
                    style={{
                      fontSize: "14px",
                      fontWeight: 700,
                      color: "white",
                    }}
                  >
                    {step.step}
                  </span>
                </div>
                <h3
                  style={{
                    fontSize: "20px",
                    fontWeight: 700,
                    color: "white",
                    marginBottom: "12px",
                  }}
                >
                  {step.title}
                </h3>
                <p
                  style={{
                    fontSize: "15px",
                    color: "rgba(255, 255, 255, 0.6)",
                    lineHeight: 1.7,
                  }}
                >
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ padding: "120px 24px", background: "#f8f9fa" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ textAlign: "center", marginBottom: "60px" }}
          >
            <h2
              style={{
                fontSize: "clamp(32px, 4vw, 48px)",
                fontWeight: 800,
                color: "#1a1a2e",
                marginBottom: "20px",
                letterSpacing: "-0.02em",
              }}
            >
              Ils ont choisi STARTERKITCM
            </h2>
          </motion.div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "32px",
            }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                whileHover={{ y: -4 }}
                style={{
                  background: "white",
                  borderRadius: "24px",
                  overflow: "hidden",
                  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.05)",
                  border: "1px solid #f3f4f6",
                }}
              >
                <div style={{ height: "200px", overflow: "hidden" }}>
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div style={{ padding: "32px" }}>
                  <div
                    style={{
                      display: "flex",
                      gap: "8px",
                      marginBottom: "16px",
                    }}
                  >
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="#f59e0b"
                        stroke="#f59e0b"
                        strokeWidth="2"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>
                  <p
                    style={{
                      fontSize: "17px",
                      color: "#374151",
                      lineHeight: 1.8,
                      marginBottom: "24px",
                      fontStyle: "italic",
                    }}
                  >
                    "{testimonial.quote}"
                  </p>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                    }}
                  >
                    <div
                      style={{
                        width: "48px",
                        height: "48px",
                        borderRadius: "50%",
                        background:
                          "linear-gradient(135deg, #635bff 0%, #7c3aed 100%)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "white",
                        fontWeight: 600,
                      }}
                    >
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <div>
                      <p
                        style={{
                          fontSize: "15px",
                          fontWeight: 600,
                          color: "#1a1a2e",
                          marginBottom: "2px",
                        }}
                      >
                        {testimonial.name}
                      </p>
                      <p style={{ fontSize: "13px", color: "#6b7280" }}>
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section
        style={{
          padding: "80px 24px",
          background: "white",
          borderTop: "1px solid #f3f4f6",
          borderBottom: "1px solid #f3f4f6",
        }}
      >
        <div
          style={{ maxWidth: "1000px", margin: "0 auto", textAlign: "center" }}
        >
          <p
            style={{
              fontSize: "14px",
              fontWeight: 600,
              color: "#9ca3af",
              marginBottom: "40px",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
            }}
          >
            Ils nous font confiance
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "60px",
              flexWrap: "wrap",
            }}
          >
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0.5 }}
                whileHover={{ opacity: 1, scale: 1.1 }}
                transition={{ duration: 0.2 }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  fontSize: "18px",
                  fontWeight: 700,
                  color: "#6b7280",
                }}
              >
                <span style={{ fontSize: "28px" }}>{partner.logo}</span>
                <span>{partner.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        style={{
          padding: "120px 24px",
          background: "linear-gradient(135deg, #635bff 0%, #7c3aed 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background Elements */}
        <div
          style={{
            position: "absolute",
            top: "-100px",
            right: "-100px",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background: "rgba(255, 255, 255, 0.05)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-150px",
            left: "-150px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "rgba(255, 255, 255, 0.05)",
          }}
        />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            maxWidth: "700px",
            margin: "0 auto",
            textAlign: "center",
            position: "relative",
          }}
        >
          <h2
            style={{
              fontSize: "clamp(36px, 4vw, 52px)",
              fontWeight: 800,
              color: "white",
              marginBottom: "24px",
              letterSpacing: "-0.02em",
            }}
          >
            Pret a lancer votre projet entrepreneurial ?
          </h2>
          <p
            style={{
              fontSize: "18px",
              color: "rgba(255, 255, 255, 0.85)",
              marginBottom: "48px",
              lineHeight: 1.8,
              maxWidth: "550px",
              margin: "0 auto 48px",
            }}
          >
            Rejoignez les milliers d'entrepreneurs qui ont choisi STARTERKITCM
            pour structurer, valider et developper leur projet au Cameroun.
          </p>
          <div
            style={{
              display: "flex",
              gap: "20px",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <Link to="/signup">
              <motion.button
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 8px 30px rgba(0, 0, 0, 0.2)",
                }}
                whileTap={{ scale: 0.98 }}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "12px",
                  padding: "20px 40px",
                  background: "white",
                  border: "none",
                  borderRadius: "14px",
                  color: "#635bff",
                  fontSize: "16px",
                  fontWeight: 700,
                  cursor: "pointer",
                }}
              >
                Commencer gratuitement
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.button>
            </Link>
            <Link to="/formations">
              <motion.button
                whileHover={{
                  scale: 1.02,
                  background: "rgba(255, 255, 255, 0.15)",
                }}
                whileTap={{ scale: 0.98 }}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "12px",
                  padding: "20px 40px",
                  background: "transparent",
                  border: "2px solid rgba(255, 255, 255, 0.3)",
                  borderRadius: "14px",
                  color: "white",
                  fontSize: "16px",
                  fontWeight: 600,
                  cursor: "pointer",
                  transition: "all 0.3s",
                }}
              >
                Voir les formations
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </section>
    </>
  );
}

export default Home;
