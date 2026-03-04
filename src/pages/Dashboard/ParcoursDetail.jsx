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
import ResourceViewerModal from "../../components/ui/ResourceViewerModal";

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
            <FormationsCard
              formations={parcours.formations || []}
              onFormationClick={(formation) => {
                if (formation.lmsUrl) {
                  window.open(formation.lmsUrl, "_blank");
                }
              }}
            />
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
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>{parcours.title} — Campus PME</title>
      </Helmet>

      {/* Navbar minimaliste - z-60 pour être AU-DESSUS du header global */}
      <nav className="border-b border-gray-100 bg-white sticky top-0 z-[60]">
        <div className="max-w-7xl mx-auto px-4 h-12 flex items-center justify-between">
          <Link
            to="/dashboard/parcours"
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors"
          >
            <ArrowLeft size={16} />
            <span>Retour</span>
          </Link>
          <div className="flex items-center gap-3">
            <span className="text-xs text-gray-500">{parcours.progress}%</span>
            <div className="w-16 h-1.5 bg-gray-100 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${parcours.progress}%` }}
                className="h-full bg-primaryBlue"
              />
            </div>
          </div>
        </div>
      </nav>

      {/* Tabs fines - z-59 */}
      <div className="sticky top-12 z-[59] bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <PremiumTabs
            steps={steps}
            activeStep={activeStep}
            onStepClick={setActiveStep}
          />
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 py-6 min-h-screen">
        <AnimatePresence mode="wait">
          <motion.div
            key={steps[activeStep].id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {renderStepContent(steps[activeStep].id)}

            {/* Navigation simple */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-100">
              <button
                disabled={activeStep === 0}
                onClick={() => setActiveStep(activeStep - 1)}
                className={`text-sm font-medium transition-colors ${activeStep === 0 ? "text-gray-300" : "text-gray-500 hover:text-gray-900"}`}
              >
                ← Précédent
              </button>
              {activeStep < steps.length - 1 ? (
                <button
                  onClick={handleNext}
                  className="px-4 py-2 bg-primaryBlue text-white text-sm font-medium rounded-lg hover:bg-primaryBlueDark transition-colors"
                >
                  Suivant →
                </button>
              ) : (
                <Link
                  to="/dashboard/parcours"
                  className="px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-black transition-colors"
                >
                  Terminer
                </Link>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Resource Viewer Modal - Nouveau composant intégré */}
      <ResourceViewerModal
        isOpen={!!viewingResource}
        onClose={() => setViewingResource(null)}
        resource={viewingResource}
        size="xl"
      />
    </div>
  );
}

export default ParcoursDetail;
