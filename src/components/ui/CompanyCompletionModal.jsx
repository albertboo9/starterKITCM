import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Building2,
  Briefcase,
  MapPin,
  Calendar,
  FileText,
  CheckCircle,
  Clock,
  Loader2,
  AlertCircle,
} from "lucide-react";

// Formes juridiques camerounaises
const LEGAL_FORMS = [
  { value: "ei", label: "Entreprise Individuelle (EI)" },
  { value: "sarl", label: "Société à Responsabilité Limitée (SARL)" },
  { value: "snc", label: "Société en Nom Collectif (SNC)" },
  { value: "scs", label: "Société en Commandite Simple (SCS)" },
  { value: "sa", label: "Société Anonyme (SA)" },
  { value: "sas", label: "Société par Actions Simplifiée (SAS)" },
  { value: "gie", label: "Groupement d'Intérêt Économique (GIE)" },
  { value: "autoentrepreneur", label: "Auto-Entrepreneur" },
];

// Secteurs d'activité
const SECTORS = [
  { value: "commerce", label: "Commerce" },
  { value: "services", label: "Services" },
  { value: "industrie", label: "Industrie" },
  { value: "agriculture", label: "Agriculture" },
  { value: "btp", label: "BTP / Construction" },
  { value: "transport", label: "Transport" },
  { value: "sante", label: "Santé" },
  { value: "education", label: "Éducation" },
  { value: "telecom", label: "Télécommunications" },
  { value: " restauration", label: "Restauration" },
  { value: "autre", label: "Autre" },
];

// Régions du Cameroun
const REGIONS = [
  { value: "adamawa", label: "Adamaoua" },
  { value: "centre", label: "Centre (Yaoundé)" },
  { value: "est", label: "Est" },
  { value: "extreme_nord", label: "Extrême-Nord" },
  { value: "littoral", label: "Littoral (Douala)" },
  { value: "nord", label: "Nord" },
  { value: "nord_oueste", label: "Nord-Ouest" },
  { value: "ouest", label: "Ouest" },
  { value: "sud", label: "Sud" },
  { value: "sud_oueste", label: "Sud-Ouest" },
];

export default function CompanyCompletionModal({ 
  isOpen, 
  onClose, 
  onSubmit,
  isDemoMode = false // For presentation - allows resetting
}) {
  const [step, setStep] = useState(1); // 1: Form, 2: Processing, 3: Success
  
  const [formData, setFormData] = useState({
    companyName: "",
    legalForm: "",
    creationDate: "",
    sector: "",
    region: "",
    // Additional fields for existing businesses
    rccm: "", // Registre du Commerce et du Crédit Mobilier
    niu: "", // Numéro d'Identification Universel
    acf: "", // Attestation de Conformité Fiscale
    nif: "", // Numéro d'Identification Fiscale
    siege: "", // Adresse du siège
    employeeCount: "",
    capital: "",
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (isOpen) {
      setStep(1);
      setFormData({
        companyName: "",
        legalForm: "",
        creationDate: "",
        sector: "",
        region: "",
        rccm: "",
        niu: "",
        acf: "",
        nif: "",
        siege: "",
        employeeCount: "",
        capital: "",
      });
      setErrors({});
    }
  }, [isOpen]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const validate = () => {
    const newErrors = {};
    
    // Basic required fields
    if (!formData.companyName || formData.companyName.trim().length < 2) {
      newErrors.companyName = "Le nom de l'entreprise est requis";
    }
    if (!formData.legalForm) {
      newErrors.legalForm = "Sélectionnez une forme juridique";
    }
    if (!formData.creationDate) {
      newErrors.creationDate = "La date de création est requise";
    }
    if (!formData.sector) {
      newErrors.sector = "Sélectionnez un secteur d'activité";
    }
    if (!formData.region) {
      newErrors.region = "Sélectionnez une région";
    }
    if (!formData.siege || formData.siege.trim().length < 5) {
      newErrors.siege = "L'adresse du siège est requise";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Go to processing step
      setStep(2);
      
      // Simulate agent processing (2 seconds)
      setTimeout(() => {
        setStep(3);
        // Actually submit after showing success
        setTimeout(() => {
          onSubmit(formData);
        }, 1500);
      }, 2000);
    }
  };

  const inputClass =
    "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors";
  const labelClass = "block text-sm font-medium text-gray-700 mb-1";
  const errorClass = "text-red-500 text-xs mt-1";

  // Step 2: Processing animation
  if (step === 2) {
    return (
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9999]"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="fixed inset-0 flex items-center justify-center z-[9999] p-4"
            >
              <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-10 text-center">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Loader2 className="w-10 h-10 text-blue-600 animate-spin" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Traitement en cours...
                </h3>
                <p className="text-gray-600 mb-6">
                  Un agent MINPMEESA vérifie vos informations.
                </p>
                <div className="bg-gray-50 rounded-xl p-4">
                  <p className="text-sm text-gray-500">
                    <Clock className="w-4 h-4 inline mr-1" />
                    Temps estimé: quelques secondes
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    );
  }

  // Step 3: Success
  if (step === 3) {
    return (
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9999]"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="fixed inset-0 flex items-center justify-center z-[9999] p-4"
            >
              <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-10 text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  ✅ Accès accordé !
                </h3>
                <p className="text-gray-600 mb-6">
                  Votre demande a été validée. Vous avez maintenant accès aux parcours financement et normalisation.
                </p>
                <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-6">
                  <p className="text-sm text-green-800 font-medium">
                    <AlertCircle className="w-4 h-4 inline mr-1" />
                    Accès valide jusqu'au:{new Date(Date.now() + 365*24*60*60*1000).toLocaleDateString('fr-FR')}
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    );
  }

  // Step 1: Form
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9999]"
            onClick={onClose}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-0 flex items-center justify-center z-[9999] p-4 overflow-y-auto"
          >
            <div className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full my-8">
              <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-6 rounded-t-2xl">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                      <Building2 className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-white">
                        🎉 Finalisez votre dossier
                      </h2>
                      <p className="text-indigo-100 text-sm">
                        Entrez les informations de votre entreprise
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={onClose}
                    className="p-2 hover:bg-white/20 rounded-full transition-colors"
                  >
                    <X className="w-5 h-5 text-white" />
                  </button>
                </div>
              </div>

              <div className="p-6 bg-indigo-50 border-b border-indigo-100">
                <p className="text-gray-700 text-center">
                  Pour <strong>accéder aux parcours Financement et Normalisation</strong>, 
                 Veuillez fournir les informations de votre entreprise. 
                  Un agent MINPMEESA traitera votre demande.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="p-6 space-y-5">
                {/* Section: Identité de l'entreprise */}
                <div className="border-b border-gray-200 pb-4 mb-4">
                  <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Building2 className="w-5 h-5 text-indigo-600" />
                    Identité de l'entreprise
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className={labelClass}>
                        <span className="flex items-center gap-2">
                          <Building2 className="w-4 h-4 text-indigo-600" />
                          Dénomination sociale *
                        </span>
                      </label>
                      <input
                        type="text"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        className={`${inputClass} ${errors.companyName ? "border-red-500" : ""}`}
                        placeholder="Ex: ABC Solutions SARL"
                      />
                      {errors.companyName && <p className={errorClass}>{errors.companyName}</p>}
                    </div>

                    <div>
                      <label className={labelClass}>
                        <span className="flex items-center gap-2">
                          <FileText className="w-4 h-4 text-indigo-600" />
                          Forme juridique *
                        </span>
                      </label>
                      <select
                        name="legalForm"
                        value={formData.legalForm}
                        onChange={handleChange}
                        className={`${inputClass} ${errors.legalForm ? "border-red-500" : ""}`}
                      >
                        <option value="">Sélectionnez...</option>
                        {LEGAL_FORMS.map((form) => (
                          <option key={form.value} value={form.value}>
                            {form.label}
                          </option>
                        ))}
                      </select>
                      {errors.legalForm && <p className={errorClass}>{errors.legalForm}</p>}
                    </div>

                    <div>
                      <label className={labelClass}>
                        <span className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-indigo-600" />
                          Date de création *
                        </span>
                      </label>
                      <input
                        type="date"
                        name="creationDate"
                        value={formData.creationDate}
                        onChange={handleChange}
                        className={`${inputClass} ${errors.creationDate ? "border-red-500" : ""}`}
                      />
                      {errors.creationDate && <p className={errorClass}>{errors.creationDate}</p>}
                    </div>

                    <div>
                      <label className={labelClass}>
                        <span className="flex items-center gap-2">
                          <Briefcase className="w-4 h-4 text-indigo-600" />
                          Secteur d'activité *
                        </span>
                      </label>
                      <select
                        name="sector"
                        value={formData.sector}
                        onChange={handleChange}
                        className={`${inputClass} ${errors.sector ? "border-red-500" : ""}`}
                      >
                        <option value="">Sélectionnez...</option>
                        {SECTORS.map((sector) => (
                          <option key={sector.value} value={sector.value}>
                            {sector.label}
                          </option>
                        ))}
                      </select>
                      {errors.sector && <p className={errorClass}>{errors.sector}</p>}
                    </div>
                  </div>
                </div>

                {/* Section: Localisation */}
                <div className="border-b border-gray-200 pb-4 mb-4">
                  <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-indigo-600" />
                    Localisation
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className={labelClass}>
                        <span className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-indigo-600" />
                          Région *
                        </span>
                      </label>
                      <select
                        name="region"
                        value={formData.region}
                        onChange={handleChange}
                        className={`${inputClass} ${errors.region ? "border-red-500" : ""}`}
                      >
                        <option value="">Sélectionnez...</option>
                        {REGIONS.map((region) => (
                          <option key={region.value} value={region.value}>
                            {region.label}
                          </option>
                        ))}
                      </select>
                      {errors.region && <p className={errorClass}>{errors.region}</p>}
                    </div>

                    <div>
                      <label className={labelClass}>
                        <span className="flex items-center gap-2">
                          <Building2 className="w-4 h-4 text-indigo-600" />
                          Adresse du siège *
                        </span>
                      </label>
                      <input
                        type="text"
                        name="siege"
                        value={formData.siege}
                        onChange={handleChange}
                        className={`${inputClass} ${errors.siege ? "border-red-500" : ""}`}
                        placeholder="BP, Rue, Quartier, Ville"
                      />
                      {errors.siege && <p className={errorClass}>{errors.siege}</p>}
                    </div>
                  </div>
                </div>

                {/* Section: Identifiants fiscaux et administratifs */}
                <div className="pb-4 mb-4">
                  <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <FileText className="w-5 h-5 text-indigo-600" />
                    Identifiants (Optionnel pour entreprises nouvelles)
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className={labelClass}>
                        <span className="flex items-center gap-2">
                          <FileText className="w-4 h-4 text-gray-400" />
                          RCCM (Registre du Commerce)
                        </span>
                      </label>
                      <input
                        type="text"
                        name="rccm"
                        value={formData.rccm}
                        onChange={handleChange}
                        className={inputClass}
                        placeholder="Ex: RC/YA/2023/000123"
                      />
                    </div>

                    <div>
                      <label className={labelClass}>
                        <span className="flex items-center gap-2">
                          <FileText className="w-4 h-4 text-gray-400" />
                          NIF (Numéro d'Identité Fiscale)
                        </span>
                      </label>
                      <input
                        type="text"
                        name="nif"
                        value={formData.nif}
                        onChange={handleChange}
                        className={inputClass}
                        placeholder="Ex: M0123456789"
                      />
                    </div>

                    <div>
                      <label className={labelClass}>
                        <span className="flex items-center gap-2">
                          <FileText className="w-4 h-4 text-gray-400" />
                          ACF (Attestation de Conformité Fiscale)
                        </span>
                      </label>
                      <input
                        type="text"
                        name="acf"
                        value={formData.acf}
                        onChange={handleChange}
                        className={inputClass}
                        placeholder="Ex: ACF-2023-001234"
                      />
                    </div>

                    <div>
                      <label className={labelClass}>
                        <span className="flex items-center gap-2">
                          <FileText className="w-4 h-4 text-gray-400" />
                          NIU (Numéro d'Identification Universel)
                        </span>
                      </label>
                      <input
                        type="text"
                        name="niu"
                        value={formData.niu}
                        onChange={handleChange}
                        className={inputClass}
                        placeholder="Ex: M01234567890"
                      />
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-3 pt-4">
                  <button
                    type="button"
                    onClick={onClose}
                    className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                  >
                    Annuler
                  </button>
                  <button
                    type="submit"
                    className="flex-1 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-colors font-medium flex items-center justify-center gap-2"
                  >
                    <CheckCircle className="w-5 h-5" />
                    Soumettre ma demande
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
