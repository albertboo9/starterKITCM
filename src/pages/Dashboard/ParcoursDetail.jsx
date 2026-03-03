import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  BookOpen,
  FileText,
  PlayCircle,
  Users,
  ChevronRight,
  Lock,
  CheckCircle,
  X,
  Maximize2,
  Download,
  Info,
  Clock,
  ArrowRight,
  TrendingUp,
  Target,
  MessageCircle,
  Award,
} from "lucide-react";
import { mockParcours } from "../../data/parcours.mock";
import {
  ResourceCard,
  FormationsCard,
  PartnersCard,
  SocialCard,
  InfoPointCard,
  OpportunitiesCard,
  PremiumTabs,
  BentoGrid,
  GlassContainer,
} from "../../components/parcours/ParcoursSections";

function ParcoursDetail() {
  const { id } = useParams();
  const [activeStep, setActiveStep] = useState(0);
  const [viewingResource, setViewingResource] = useState(null);

  const parcours = mockParcours.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeStep]);

  if (!parcours) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Parcours introuvable
        </h2>
        <Link
          to="/dashboard/parcours"
          className="text-primaryBlue font-bold flex items-center gap-2"
        >
          <ArrowLeft size={18} /> Retour à l'accueil
        </Link>
      </div>
    );
  }

  const iconMap = {
    BookOpen,
    FileText,
    PlayCircle,
    Users,
    Info,
    MessageCircle,
    Target,
    TrendingUp,
  };

  const steps = parcours.steps.map((step) => ({
    ...step,
    icon: iconMap[step.icon] || Info,
  }));

  const handleNext = () => {
    if (activeStep < steps.length - 1) setActiveStep(activeStep + 1);
  };

  const renderStepContent = (stepId) => {
    switch (stepId) {
      case "toolbox":
        return (
          <BentoGrid>
            {parcours.toolbox?.map((tool, idx) => (
              <div
                key={tool.id}
                className={`${idx === 0 ? "md:col-span-12 lg:col-span-8" : "md:col-span-6 lg:col-span-4"}`}
              >
                <ResourceCard item={tool} onClick={setViewingResource} />
              </div>
            ))}
          </BentoGrid>
        );
      case "info":
        return (
          <BentoGrid>
            <div className="md:col-span-12 lg:col-span-7">
              <InfoPointCard items={parcours.infoPoint || []} />
            </div>
            <div className="md:col-span-12 lg:col-span-5 space-y-6">
              <GlassContainer className="bg-primary/5 border-primary/10">
                <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <BookOpen className="text-primaryBlue" size={18} /> Vision
                  Stratégique
                </h4>
                <p className="text-sm text-gray-500 leading-relaxed italic">
                  "{parcours.concept}"
                </p>
              </GlassContainer>
              <GlassContainer className="bg-amber-500/5 border-amber-500/10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-500 text-white flex items-center justify-center">
                    <Info size={20} />
                  </div>
                  <h4 className="font-bold text-gray-900">Note de l'Expert</h4>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed font-medium">
                  "La réussite de votre parcours dépend de la compréhension
                  rigoureuse des textes en vigueur."
                </p>
              </GlassContainer>
            </div>
          </BentoGrid>
        );
      case "formations":
        return (
          <div className="space-y-8">
            <FormationsCard formations={parcours.formations || []} />
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-gray-900 p-12 rounded-[48px] flex flex-col md:flex-row items-center gap-12 relative overflow-hidden group shadow-2xl"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-primaryBlue/20 rounded-full blur-[120px] -mr-32 -mt-32" />
              <div className="relative z-10 flex-1">
                <span className="text-primaryBlue font-black text-[10px] uppercase tracking-[0.4em] mb-4 block">
                  Assistance Live
                </span>
                <h4 className="text-4xl font-black text-white mb-4 tracking-tight leading-tight">
                  Besoin d'un éclairage personnalisé ?
                </h4>
                <p className="text-gray-400 text-lg font-medium leading-relaxed">
                  Nos conseillers techniques sont à votre écoute pour lever vos
                  doutes stratégiques.
                </p>
              </div>
              <button className="relative z-10 px-10 py-5 bg-primaryBlue text-white rounded-[24px] font-black uppercase tracking-widest text-xs hover:bg-white hover:text-gray-900 transition-all shadow-xl shadow-primaryBlue/20">
                Parler à un expert
              </button>
            </motion.div>
          </div>
        );
      case "partners":
        return (
          <BentoGrid>
            <div className="md:col-span-12 lg:col-span-8">
              <PartnersCard partnerIds={parcours.partners || []} />
            </div>
            <div className="md:col-span-12 lg:col-span-4">
              <GlassContainer className="bg-primaryBlue/5 border-primaryBlue/10 h-full flex flex-col justify-center text-center p-12">
                <div className="w-20 h-20 rounded-3xl bg-white shadow-xl flex items-center justify-center mx-auto mb-8 text-primaryBlue">
                  <PlayCircle size={40} />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">
                  Guichet Unique
                </h4>
                <p className="text-sm text-gray-500 font-medium leading-relaxed">
                  Accédez à tous les services gouvernementaux en un seul point.
                </p>
              </GlassContainer>
            </div>
          </BentoGrid>
        );
      case "projects":
        return (
          <BentoGrid>
            {parcours.projects?.map((project, idx) => (
              <div key={project.id} className="md:col-span-6">
                <GlassContainer
                  className={`${idx === 0 ? "bg-indigo-50/30" : "bg-emerald-50/30"}`}
                >
                  <div className="mb-8">
                    <div
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-lg ${idx === 0 ? "bg-indigo-600 text-white" : "bg-emerald-600 text-white"}`}
                    >
                      {idx === 0 ? (
                        <TrendingUp size={28} />
                      ) : (
                        <Target size={28} />
                      )}
                    </div>
                    <h4 className="text-3xl font-black text-gray-900 mb-4 tracking-tight leading-tight">
                      {project.title}
                    </h4>
                    <p className="text-gray-500 font-medium leading-relaxed">
                      Accélérez votre croissance en soumettant votre dossier aux
                      commissions d'expertise dédiées.
                    </p>
                  </div>
                  <button
                    className={`w-full py-5 rounded-[20px] font-black uppercase tracking-widest text-xs shadow-xl transition-all ${idx === 0 ? "bg-indigo-600 text-white shadow-indigo-100" : "bg-emerald-600 text-white shadow-emerald-100"}`}
                  >
                    {project.action === "invest"
                      ? "Explorer les projets"
                      : "Nouvelle soumission"}
                  </button>
                </GlassContainer>
              </div>
            ))}
          </BentoGrid>
        );
      case "opportunities":
        return (
          <BentoGrid>
            <div className="md:col-span-12 lg:col-span-8">
              <OpportunitiesCard items={parcours.opportunities || []} />
            </div>
            <div className="md:col-span-12 lg:col-span-4">
              <SocialCard />
            </div>
          </BentoGrid>
        );
      case "social":
        return (
          <BentoGrid>
            <div className="md:col-span-12 lg:col-span-7">
              <SocialCard />
            </div>
            <div className="md:col-span-12 lg:col-span-5">
              <GlassContainer className="bg-primaryDark text-white h-full p-12 flex flex-col justify-between">
                <div>
                  <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center mb-10 border border-white/20">
                    <Award size={32} />
                  </div>
                  <h4 className="text-3xl font-black mb-6 tracking-tight leading-tight">
                    Accompagnement VIP
                  </h4>
                  <p className="text-gray-400 font-medium leading-relaxed mb-12">
                    Bénéficiez d'un suivi personnalisé par un mentor spécialisé
                    du MINPMEESA pour valider votre dossier.
                  </p>
                </div>
                <button className="w-full py-5 bg-white text-gray-900 rounded-[24px] font-black uppercase tracking-widest text-xs hover:bg-primaryBlue hover:text-white transition-all">
                  Consulter un mentor
                </button>
              </GlassContainer>
            </div>
          </BentoGrid>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-[#FDFDFD]">
      <Helmet>
        <title>{parcours.title} — Campus PME</title>
      </Helmet>

      <nav className="border-b border-gray-100 bg-white/60 backdrop-blur-2xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 h-14 sm:h-16 lg:h-20 flex items-center justify-between gap-2 sm:gap-8">
          <Link
            to="/dashboard/parcours"
            className="group flex items-center gap-3 text-gray-900 font-bold transition-all text-sm"
          >
            <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center group-hover:bg-primaryBlue group-hover:text-white transition-all border border-gray-100">
              <ArrowLeft size={18} />
            </div>
            <span className="hidden sm:inline">Retour aux Parcours</span>
          </Link>
          <div className="flex items-center gap-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
              <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1">
                Votre Avancement
              </span>
              <span className="text-sm font-black text-gray-900 tracking-tight">
                {parcours.progress}% complété
              </span>
            </div>
            <div className="w-24 sm:w-32 lg:w-48 h-2 bg-gray-100 rounded-full overflow-hidden border border-gray-100/50">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${parcours.progress}%` }}
                className="h-full bg-primaryBlue shadow-[0_0_20px_rgba(102,126,234,0.5)]"
              />
            </div>
          </div>
        </div>
      </nav>

      <header className="relative pt-16 pb-16 md:pt-24 md:pb-24 lg:pt-32 lg:pb-48 overflow-hidden bg-gray-50/50">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1400px] h-[600px] bg-primaryBlue/5 rounded-full blur-[140px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-3 px-6 py-2 bg-white/80 backdrop-blur-xl rounded-full text-[11px] font-black text-primaryBlue uppercase tracking-[0.3em] mb-12 border border-primaryBlue/10 shadow-xl shadow-primaryBlue/5"
          >
            <div className="w-2 h-2 rounded-full bg-primaryBlue animate-pulse" />
            {parcours.category}
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-6 sm:mb-8 tracking-tighter leading-[0.9]"
          >
            {parcours.title.split(" ").map((word, i) => (
              <span key={i} className={i === 1 ? "text-primaryBlue" : ""}>
                {word}{" "}
              </span>
            ))}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-base sm:text-lg md:text-xl text-gray-500 leading-relaxed max-w-3xl mx-auto font-medium tracking-tight"
          >
            {parcours.description}
          </motion.p>
        </div>
      </header>

      <div className="sticky top-14 sm:top-16 lg:top-20 z-40 py-4 sm:py-6 lg:py-8 bg-[#FDFDFD]/80 backdrop-blur-xl border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <PremiumTabs
            steps={steps}
            activeStep={activeStep}
            onStepClick={setActiveStep}
          />
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-12 md:py-20 lg:py-32 min-h-screen">
        <AnimatePresence mode="wait">
          <motion.div
            key={steps[activeStep].id}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex flex-col sm:flex-row justify-between items-end gap-4 sm:gap-8 mb-12 sm:mb-20">
              <div className="max-w-2xl">
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="text-primaryBlue font-black text-5xl sm:text-6xl opacity-10 mb-4 sm:mb-6 block leading-none"
                >
                  0{activeStep + 1}
                </motion.span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 tracking-tight leading-tight uppercase">
                  {steps[activeStep].title}
                </h2>
                <p className="text-lg text-gray-400 font-medium mt-4">
                  Module stratégique de votre parcours d'excellence.
                </p>
              </div>
              <div className="flex bg-gray-50 p-2 rounded-2xl border border-gray-100">
                <button
                  disabled={activeStep === 0}
                  onClick={() => setActiveStep(activeStep - 1)}
                  className={`w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-xl lg:rounded-2xl flex items-center justify-center transition-all ${activeStep === 0 ? "opacity-20" : "bg-white shadow-sm hover:bg-primaryBlue hover:text-white"}`}
                >
                  <ArrowLeft size={20} />
                </button>
                <div className="w-px h-10 bg-gray-200 my-auto mx-2" />
                <button
                  disabled={activeStep === steps.length - 1}
                  onClick={handleNext}
                  className={`w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-xl lg:rounded-2xl flex items-center justify-center transition-all ${activeStep === steps.length - 1 ? "opacity-20" : "bg-white shadow-sm hover:bg-primaryBlue hover:text-white"}`}
                >
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>

            {renderStepContent(steps[activeStep].id)}

            {/* Footer Navigation */}
            <footer className="mt-12 sm:mt-20 pt-8 sm:pt-12 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <button
                disabled={activeStep === 0}
                onClick={() => setActiveStep(activeStep - 1)}
                className={`px-6 py-3 rounded-xl font-bold text-sm transition-all ${activeStep === 0 ? "opacity-30" : "text-gray-500 hover:bg-gray-100"}`}
              >
                Précédent
              </button>
              {activeStep < steps.length - 1 ? (
                <button
                  onClick={handleNext}
                  className="px-6 sm:px-10 py-3 sm:py-4 bg-primaryBlue text-white rounded-xl sm:rounded-2xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-primaryBlueDark hover:translate-x-1 transition-all shadow-xl shadow-primaryBlue/20 w-full sm:w-auto"
                >
                  Étape suivante <ArrowRight size={18} />
                </button>
              ) : (
                <Link
                  to="/dashboard/parcours"
                  className="px-6 sm:px-10 py-3 sm:py-4 bg-gray-900 text-white rounded-xl sm:rounded-2xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-black transition-all shadow-xl w-full sm:w-auto"
                >
                  Terminer le parcours
                </Link>
              )}
            </footer>
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Resource Viewer Modal */}
      <AnimatePresence>
        {viewingResource && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-md flex items-center justify-center p-6 md:p-12"
          >
            <motion.div
              initial={{ scale: 0.95, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              className="bg-white w-full max-w-5xl rounded-[40px] overflow-hidden flex flex-col md:flex-row h-full md:max-h-[80vh] shadow-2xl"
            >
              <div className="flex-1 bg-gray-100 flex items-center justify-center relative min-h-[300px] md:min-h-0">
                {viewingResource.type === "video" ? (
                  <div className="w-full h-full bg-black flex items-center justify-center">
                    <VideoPlayer url={viewingResource.url} />
                  </div>
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center p-12 text-center bg-gray-50">
                    <div className="w-24 h-24 bg-white rounded-3xl shadow-xl flex items-center justify-center mb-8">
                      <FileText
                        size={40}
                        className="text-primaryBlue opacity-40"
                      />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-6">
                      {viewingResource.title}
                    </h4>
                    <div className="flex flex-wrap justify-center gap-4">
                      <a
                        href={viewingResource.url}
                        download
                        className="px-8 py-4 bg-primaryBlue text-white rounded-2xl font-bold flex items-center gap-2 hover:bg-primaryBlueDark"
                      >
                        <Download size={18} /> Télécharger document
                      </a>
                      <button
                        onClick={() => setViewingResource(null)}
                        className="px-8 py-4 bg-white border border-gray-200 text-gray-700 rounded-2xl font-bold"
                      >
                        Quitter l'aperçu
                      </button>
                    </div>
                  </div>
                )}
                <button
                  onClick={() => setViewingResource(null)}
                  className="absolute top-6 left-6 w-10 h-10 rounded-xl bg-white/20 backdrop-blur-md text-white flex items-center justify-center border border-white/20 hover:bg-white/40 transition-all"
                >
                  <X size={20} />
                </button>
              </div>
              <div className="w-full md:w-80 bg-white p-10 flex flex-col shrink-0 border-l border-gray-100">
                <div className="mb-10">
                  <span className="text-[10px] font-black uppercase text-primaryBlue tracking-[0.2em] mb-4 block">
                    Information
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {viewingResource.title}
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed font-medium">
                    Contenu certifié par l'expertise gouvernementale pour
                    sécuriser votre démarche entrepreneuriale.
                  </p>
                </div>
                <div className="flex-1 bg-gray-50 rounded-2xl p-6 border border-gray-100">
                  <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest block mb-4">
                    Notes personnelles
                  </span>
                  <textarea
                    placeholder="Point clés à retenir..."
                    className="w-full h-full bg-transparent border-none text-xs font-medium focus:ring-0 resize-none"
                  ></textarea>
                </div>
                <button
                  onClick={() => setViewingResource(null)}
                  className="mt-8 w-full py-4 bg-gray-900 text-white rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-black transition-all"
                >
                  Consulter terminé
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function VideoPlayer({ url }) {
  return (
    <div className="w-full h-full relative group">
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="w-20 h-20 rounded-full bg-primaryBlue text-white flex items-center justify-center shadow-2xl cursor-pointer"
        >
          <PlayCircle size={40} />
        </motion.div>
      </div>
      <div className="absolute bottom-10 left-10 p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 text-white">
        <p className="text-xs font-bold uppercase tracking-widest opacity-60 mb-1">
          Source Officielle
        </p>
        <p className="font-bold">Module Vidéo HD</p>
      </div>
    </div>
  );
}

export default ParcoursDetail;
