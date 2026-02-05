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
  useMotionValue,
  useMotionTemplate,
} from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";

// Canvas-based Grid Trail Effect (no React re-renders)
const CanvasGridTrail = () => {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const trailRef = useRef([]);
  const animationRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Mouse tracking
    const handleMouseMove = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };

      // Add trail points
      trailRef.current.push({
        x: e.clientX,
        y: e.clientY,
        radius: 50,
        alpha: 1,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw base grid
      ctx.strokeStyle = "rgba(99, 91, 255, 0.01)";
      ctx.lineWidth = 1;
      const gridSize = 40;

      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Update and draw trail
      trailRef.current = trailRef.current.filter((point) => {
        point.radius -= 0.5;
        point.alpha -= 0.015;

        if (point.radius > 0 && point.alpha > 0) {
          // Draw glowing cells in the trail
          const cellSize = 40;
          const startX =
            Math.floor((point.x - point.radius) / cellSize) * cellSize;
          const endX =
            Math.ceil((point.x + point.radius) / cellSize) * cellSize;
          const startY =
            Math.floor((point.y - point.radius) / cellSize) * cellSize;
          const endY =
            Math.ceil((point.y + point.radius) / cellSize) * cellSize;

          for (let x = startX; x <= endX; x += cellSize) {
            for (let y = startY; y <= endY; y += cellSize) {
              const cellX = x + cellSize / 2;
              const cellY = y + cellSize / 2;
              const dist = Math.sqrt(
                Math.pow(cellX - point.x, 2) + Math.pow(cellY - point.y, 2),
              );

              if (dist < point.radius) {
                const intensity =
                  (1 - dist / point.radius) * point.alpha * 0.08;
                ctx.fillStyle = `rgba(99, 91, 255, ${intensity})`;
                ctx.fillRect(x, y, cellSize - 1, cellSize - 1);
              }
            }
          }

          return true;
        }
        return false;
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 0,
      }}
    />
  );
};

function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const { t } = useLanguage();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Floating animation for images
  const FloatingImage = ({ src, alt, delay = 0 }) => {
    return (
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay, type: "spring", stiffness: 100 }}
        style={{ position: "relative" }}
      >
        <motion.div
          animate={{
            y: [0, -15, 0],
            rotate: [0, 1, -1, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: delay,
          }}
          style={{ position: "relative", zIndex: 1 }}
        >
          <img
            src={src}
            alt={alt}
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "24px",
              boxShadow: "0 25px 80px rgba(0, 0, 0, 0.15)",
            }}
          />
        </motion.div>
      </motion.div>
    );
  };

  // Tilt Card Component (Stripe-like effect)
  const TiltCard = ({ children, className }) => {
    const [rotateX, setRotateX] = useState(0);
    const [rotateY, setRotateY] = useState(0);
    const [scale, setScale] = useState(1);

    const handleMouseMoveTilt = (e) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const rotateY = ((e.clientX - centerX) / rect.width) * 10;
      const rotateX = ((centerY - e.clientY) / rect.height) * 10;
      setRotateX(rotateX);
      setRotateY(rotateY);
      setScale(1.02);
    };

    const handleMouseLeave = () => {
      setRotateX(0);
      setRotateY(0);
      setScale(1);
    };

    return (
      <motion.div
        className={className}
        onMouseMove={handleMouseMoveTilt}
        onMouseLeave={handleMouseLeave}
        style={{
          perspective: 1000,
          transformStyle: "preserve-3d",
        }}
        animate={{
          rotateX: rotateX,
          rotateY: rotateY,
          scale: scale,
        }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
      >
        {children}
      </motion.div>
    );
  };

  // Enhanced Step Card Component with scroll reveal
  const StepCard = ({ step, index, total }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { margin: "-30% 0px -30% 0px" });
    const direction = index % 2 === 0 ? 1 : -1;

    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 100 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "60px",
          alignItems: "center",
          marginBottom: "60px",
          position: "relative",
        }}
      >
        {/* Content Side */}
        <motion.div
          initial={{ opacity: 0, x: direction * -50 }}
          animate={
            isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: direction * -50 }
          }
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Step Number Badge */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={
              isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }
            }
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 15,
              delay: 0.3,
            }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              width: "60px",
              height: "60px",
              borderRadius: "16px",
              background: "linear-gradient(135deg, #635bff 0%, #7c3aed 100%)",
              boxShadow: "0 10px 40px rgba(99, 91, 255, 0.4)",
              marginBottom: "24px",
            }}
          >
            <span style={{ fontSize: "20px", fontWeight: 800, color: "white" }}>
              {step.step}
            </span>
          </motion.div>

          {/* Title with gradient */}
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            style={{
              fontSize: "clamp(28px, 3vw, 36px)",
              fontWeight: 800,
              color: "#1a1a2e",
              marginBottom: "16px",
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
            }}
          >
            {step.title}
          </motion.h3>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            style={{
              fontSize: "17px",
              color: "#6b7280",
              lineHeight: 1.8,
              marginBottom: "24px",
            }}
          >
            {step.description}
          </motion.p>

          {/* Feature list */}
          <motion.ul
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            style={{ listStyle: "none", padding: 0, margin: 0 }}
          >
            {step.benefits.map((benefit, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={
                  isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                }
                transition={{ duration: 0.4, delay: 0.7 + i * 0.1 }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  marginBottom: "12px",
                  fontSize: "15px",
                  color: "#374151",
                }}
              >
                <span
                  style={{
                    width: "22px",
                    height: "22px",
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
                    width="10"
                    height="10"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="3"
                  >
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                {benefit}
              </motion.li>
            ))}
          </motion.ul>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            style={{ marginTop: "32px" }}
          >
            <motion.span
              whileHover={{ x: 8 }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                fontSize: "15px",
                fontWeight: 600,
                color: "#635bff",
                cursor: "pointer",
              }}
            >
              {step.cta}
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
            </motion.span>
          </motion.div>
        </motion.div>

        {/* Image Side */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={
            isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
          }
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ position: "relative" }}
        >
          {/* Floating illustration */}
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotate: [0, 2, -2, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.5,
            }}
          >
            <div
              style={{
                borderRadius: "24px",
                overflow: "hidden",
                boxShadow: "0 30px 100px rgba(99, 91, 255, 0.25)",
                position: "relative",
              }}
            >
              <img
                src={step.image}
                alt={step.title}
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                }}
              />
              {/* Overlay gradient */}
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: "30%",
                  background:
                    "linear-gradient(transparent, rgba(255,255,255,0.8))",
                }}
              />
            </div>
          </motion.div>

          {/* Floating badge */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={
              isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }
            }
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 15,
              delay: 0.5,
            }}
            whileHover={{ scale: 1.05 }}
            style={{
              position: "absolute",
              bottom: "-20px",
              right: "-20px",
              background: "white",
              padding: "16px 24px",
              borderRadius: "16px",
              boxShadow: "0 10px 40px rgba(0, 0, 0, 0.12)",
              display: "flex",
              alignItems: "center",
              gap: "12px",
            }}
          >
            <div
              style={{
                width: "44px",
                height: "44px",
                borderRadius: "12px",
                background: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
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
                <path d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div>
              <p
                style={{
                  fontSize: "13px",
                  fontWeight: 600,
                  color: "#1a1a2e",
                  margin: 0,
                }}
              >
                {step.badge}
              </p>
              <p style={{ fontSize: "11px", color: "#6b7280", margin: 0 }}>
                {step.duration}
              </p>
            </div>
          </motion.div>

          {/* Decorative element */}
          <motion.div
            animate={{
              y: [0, -15, 0],
              rotate: [0, 8, -8, 0],
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            style={{
              position: "absolute",
              top: "-15px",
              left: "-15px",
              width: "80px",
              height: "80px",
              borderRadius: "20px",
              background:
                "linear-gradient(135deg, rgba(99, 91, 255, 0.1) 0%, rgba(124, 58, 237, 0.1) 100%)",
              border: "1px solid rgba(99, 91, 255, 0.2)",
              zIndex: -1,
            }}
          />
        </motion.div>
      </motion.div>
    );
  };

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
      title: "Evaluez votre profil entrepreneurial",
      description:
        "Repondez a des questions strategiques pour identifier votre niveau, vos competences et vos objectifs. Cette etape fondatrice determine votre parcours personnalise.",
      image: "/img/plan_analize_illustration.jpg",
      benefits: [
        "Analyse approfondie de vos competances",
        "Identification de vos objectifs professionnels",
        "Recommandation de parcours sur mesure",
      ],
      cta: "Commencer l'evaluation",
      badge: "Gratuit",
      duration: "5 min",
    },
    {
      step: "02",
      title: "Suivez des formations accreditees",
      description:
        "Accedez a un catalogue riche de formations professionelles concues par des experts. Developpez les competances essentielles a votre reussite.",
      image: "/img/woman_working_illustration.jpg",
      benefits: [
        "50+ formations specialisees",
        "Contenus pedagogiques de qualite",
        "Suivi de progression personnalise",
      ],
      cta: "Explorer les formations",
      badge: "Certifiant",
      duration: "10-50h",
    },
    {
      step: "03",
      title: "Obtenez la certification MINPEEMSA",
      description:
        "Validez vos acquis et recevez une reconnaissance officielle du Ministere. Votre certification ouvre des portes et renforce votre credibilite.",
      image: "/img/grow_illustration.jpg",
      benefits: [
        "Validation officielle de vos competances",
        "Attestation reconnue par l'Etat",
        "Avantage concurrentiel significatif",
      ],
      cta: "En savoir plus",
      badge: "Officiel",
      duration: "Variable",
    },
    {
      step: "04",
      title: "Lancez votre entreprise",
      description:
        "Beneficiez d un accompagnement complet pour transformer votre projet en entreprise concrete. Nos experts vous guident vers le succes.",
      image: "/img/team_work_illustration.jpg",
      benefits: [
        "Accompagnement personnalise",
        "Mise en reseau avec des partenaires",
        "Support post-lancement inclus",
      ],
      cta: "Commencer maintenant",
      badge: "Guide",
      duration: "Ongoing",
    },
  ];

  const partners = [
    { name: "MINPEEMSA" },
    { name: "PNUD" },
    { name: "CCIM" },
    { name: "BANGE" },
    { name: "APME" },
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

      {/* Grid Trail Effect - Full page canvas */}

      {/* Hero Section */}
      <section
        ref={containerRef}
        style={{
          minHeight: "90vh",
          position: "relative",
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
          background: "#ffffff",
          cursor: "default",
        }}
      >
        {/* Grid Overlay Effect */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `
            linear-gradient(rgba(99, 91, 255, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99, 91, 255, 0.03) 1px, transparent 1px)
          `,
            backgroundSize: "50px 50px",
            pointerEvents: "none",
            zIndex: 0,
          }}
        />

        {/* Floating decorative blobs */}
        <motion.div
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          style={{
            position: "absolute",
            top: "10%",
            right: "15%",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(99, 91, 255, 0.08) 0%, rgba(124, 58, 237, 0.03) 70%)",
            filter: "blur(60px)",
            zIndex: 0,
          }}
        />
        <motion.div
          animate={{
            x: [0, -20, 0],
            y: [0, 30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          style={{
            position: "absolute",
            bottom: "15%",
            left: "10%",
            width: "300px",
            height: "300px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(16, 185, 129, 0.06) 0%, rgba(5, 150, 105, 0.02) 70%)",
            filter: "blur(60px)",
            zIndex: 0,
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
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
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
                transition={{ delay: 0.3, duration: 0.6 }}
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
                transition={{ delay: 0.4, duration: 0.6 }}
                style={{
                  fontSize: "clamp(16px, 1.8vw, 20px)",
                  color: "#4b5563",
                  maxWidth: "520px",
                  margin: "0 auto 40px",
                  lineHeight: 1.8,
                }}
              >
                STARTERKITCM est la porte d entree officielle de l
                entrepreneuriat au Cameroun. Orientez, structurez, validez et
                lancez votre projet avec l accompagnement des experts et la
                reconnaissance du Ministere.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
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
                transition={{ delay: 0.6, duration: 0.6 }}
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

            {/* Right Image with Stripe-like tilt effect */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              style={{ position: "relative" }}
            >
              <TiltCard className="">
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
                    style={{
                      width: "100%",
                      height: "500px",
                      objectFit: "cover",
                    }}
                  />
                </motion.div>
              </TiltCard>

              {/* Floating Card */}
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  delay: 0.8,
                  type: "spring",
                  stiffness: 200,
                  damping: 20,
                }}
                whileHover={{ scale: 1.05 }}
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
                  cursor: "pointer",
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
                    MINPEEMSA validee
                  </p>
                </div>
              </motion.div>

              {/* Floating decorative element */}
              <motion.div
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{
                  position: "absolute",
                  top: "-20px",
                  right: "-20px",
                  width: "100px",
                  height: "100px",
                  borderRadius: "20px",
                  background:
                    "linear-gradient(135deg, rgba(99, 91, 255, 0.1) 0%, rgba(124, 58, 237, 0.1) 100%)",
                  border: "1px solid rgba(99, 91, 255, 0.2)",
                  zIndex: -1,
                }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        style={{
          padding: "120px 24px",
          background: "#f8f9fa",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `
            linear-gradient(rgba(99, 91, 255, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99, 91, 255, 0.03) 1px, transparent 1px)
          `,
            backgroundSize: "50px 50px",
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            position: "relative",
            zIndex: 1,
          }}
        >
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
              Qu est-ce que STARTERKITCM ?
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
              Votre companion officiel de l entrepreneuriat
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
              STARTERKITCM est bien plus qu une plateforme. C est un ecosysteme
              complet concu pour accompagner chaque Camerounais dans son
              parcours entrepreneurial, de l idee jusqu a la creation d
              entreprise officiellement reconnue.
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
            <FloatingImage
              src="/img/black-employees-explaining-business-analytics.jpg"
              alt="Business team"
              delay={0.2}
            />

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
                Une vision claire pour l avenir economique du Cameroun
              </h3>
              <p
                style={{
                  fontSize: "16px",
                  color: "#4b5563",
                  lineHeight: 1.8,
                  marginBottom: "24px",
                }}
              >
                Le Cameroun regorge de talents et d idees entrepreneuriales.
                Pourtant, de nombreux projets ne voient jamais le jour par
                manque d orientation, de structuration ou de reconnaissance
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
                  "Formations certifiantes reconnues par l Etat",
                  "Accompagnement a chaque etape",
                  "Acces a un reseau d entrepreneurs",
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
      <CanvasGridTrail />
      <section
        style={{
          padding: "120px 24px",
          background: "white",
          position: "relative",
        }}
      >
        <CanvasGridTrail />
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

        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            position: "relative",
            zIndex: 1,
          }}
        >
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
              <TiltCard key={index} className="">
                <motion.div
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
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works - Section */}
      <section
        style={{
          padding: "140px 24px",
          background: "#f8fafc",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <CanvasGridTrail />
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            position: "relative",
            zIndex: 1,
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ textAlign: "center", marginBottom: "100px" }}
          >
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "8px 16px",
                background: "rgba(99, 91, 255, 0.1)",
                borderRadius: "20px",
                marginBottom: "20px",
                fontSize: "13px",
                fontWeight: 600,
                color: "#635bff",
              }}
            >
              Comment ca marche ?
            </span>
            <h2
              style={{
                fontSize: "clamp(36px, 4vw, 52px)",
                fontWeight: 800,
                color: "#1a1a2e",
                marginBottom: "20px",
                letterSpacing: "-0.02em",
              }}
            >
              Votre parcours vers le succes
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
              4 etapes simples mais essentielles pour transformer votre ambition
              en enterprise concrete.
            </p>
          </motion.div>

          {/* Steps */}
          <div style={{ position: "relative" }}>
            {steps.map((step, index) => (
              <StepCard
                key={index}
                step={step}
                index={index}
                total={steps.length}
              />
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
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
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
        <motion.div
          animate={{
            x: [0, -30, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
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
            Rejoignez les milliers d entrepreneurs qui ont choisi STARTERKITCM
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
