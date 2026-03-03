export const mockParcours = [
  {
    id: "creation",
    title: "Création d'Entreprise",
    category: "Lancement",
    description: "De l'idée à l'immatriculation : les étapes pour lancer votre activité en 72 heures.",
    concept: "La création d'entreprise au Cameroun est simplifiée. Ce parcours vous guide à travers le choix juridique, la rédaction des statuts, et l'enregistrement administratif au CFCE.",
    progress: 65,
    status: "en_cours",
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    icon: "Target",
    steps: [
      { id: "toolbox", title: "Boîte à Outils", label: "Boîte à Outils", sub: "Ressources", icon: "FileText" },
      { id: "info", title: "Point d'Information", label: "Point d'Information", sub: "Législation", icon: "Info" },
      { id: "formations", title: "Formations", label: "Formations", sub: "Apprendre", icon: "PlayCircle" },
      { id: "partners", title: "Annuaire des Parties Prenantes", label: "Annuaire", sub: "Accompagnement", icon: "Users" },
      { id: "social", title: "Social Networking", label: "Communauté", sub: "Réseau", icon: "MessageCircle" }
    ],
    toolbox: [
      {
        id: "t1",
        title: "Statuts Type SARL",
        type: "pdf",
        url: "/DOSSIER MINPMEESA/PARCOURS CREATION D_ENTREPRISE/Boite à outils création d_entreprise /Documents téléchargeables /STATUTS SARL.pdf",
        preview_text: "Modèle standard pour la création d'une SARL."
      },
      {
        id: "t2",
        title: "Modèle OHADA SAS",
        type: "pdf",
        url: "/DOSSIER MINPMEESA/PARCOURS CREATION D_ENTREPRISE/Boite à outils création d_entreprise /Documents téléchargeables /modele-statuts-ohada-sas.pdf",
        preview_text: "Structure pour les projets à fort potentiel."
      },
      {
        id: "v1",
        title: "Mon entreprise en 72H",
        type: "video",
        url: "/DOSSIER MINPMEESA/PARCOURS CREATION D_ENTREPRISE/Boite à outils création d_entreprise /Vidéos explicatives/Mon entreprise en 72H.mp4",
        preview: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=400",
        duration: "05:12"
      }
    ],
    infoPoint: [
      { id: "i1", title: "Articles sur la création", description: "Comprendre les bases de l'écosystème." },
      { id: "i2", title: "Guide de l'entrepreneur", description: "Les étapes clés du succès au Cameroun." },
      { id: "i3", title: "Loi PME 2015", description: "Le cadre légal de promotion des PME." }
    ],
    formations: [
      { id: "f1", title: "Élaborer et pitcher un Business plan", duration: "4h", completed: true },
      { id: "f2", title: "Maîtriser les techniques commerciales", duration: "3h", completed: false },
      { id: "f3", title: "Appréhender les problématiques financières", duration: "5h", completed: false },
      { id: "f4", title: "Acquérir les connaissances à la création", duration: "4h", completed: false },
      { id: "f5", title: "Importance des aspects juridiques", duration: "2h", completed: false },
      { id: "f6", title: "Productivité de soi", duration: "2h", completed: false },
      { id: "f7", title: "Etude de marché", duration: "4h", completed: false },
      { id: "f8", title: "Gérer les contrats de travail", duration: "3h", completed: false },
      { id: "f9", title: "Open Innovation", duration: "3h", completed: false }
    ],
    partners: ["minpmeesa", "apme", "cfce"]
  },
  {
    id: "financement",
    title: "Recherche de Financement",
    category: "Croissance",
    description: "Préparez votre dossier financier et accédez aux mécanismes de soutien bancaires.",
    concept: "Le financement est le moteur de la croissance. Ce parcours vous aide à préparer votre business plan et à solliciter les fonds de garantie.",
    progress: 30,
    status: "en_cours",
    gradient: "linear-gradient(135deg, #1a1a2e 0%, #0f3460 100%)",
    icon: "TrendingUp",
    steps: [
      { id: "toolbox", title: "Boîte à Outils", label: "Boîte à Outils", sub: "Conseils", icon: "FileText" },
      { id: "info", title: "Points d'Information", label: "Information", sub: "Ressources", icon: "Info" },
      { id: "formations", title: "Formations", label: "Formations", sub: "Finance", icon: "PlayCircle" },
      { id: "partners", title: "Annuaire des Parties Prenantes", label: "Annuaire", sub: "Banques", icon: "Users" },
      { id: "projects", title: "Projets", label: "Projets", sub: "Opportunités", icon: "Target" },
      { id: "opportunities", title: "Opportunités", label: "Opportunités", sub: "Concours", icon: "TrendingUp" },
      { id: "social", title: "Social Networking", label: "Communauté", sub: "Réseau", icon: "MessageCircle" }
    ],
    toolbox: [
      { id: "t1", title: "Modèle de demande de financement", type: "pdf", url: "#", preview_text: "Formulaire type pour solliciter un prêt." },
      { id: "t2", title: "Articles & Conseils experts", type: "pdf", url: "#", preview_text: "Comment maximiser ses chances de financement." }
    ],
    infoPoint: [
      { id: "i1", title: "PACDPME : Programme d'Appui", description: "Mécanismes de financement public." },
      { id: "i2", title: "Loi de Finances PME", description: "Dispositions fiscales avantageuses." },
      { id: "v1", title: "Vidéos: Réussir sa levée", type: "video", url: "#", duration: "10:00" }
    ],
    formations: [
      { id: "f1", title: "Introduction au financement d'entreprise", duration: "3h", completed: true },
      { id: "f2", title: "Lecture et compréhension des états financiers", duration: "5h", completed: true },
      { id: "f3", title: "Notions de rentabilité et seuil", duration: "4h", completed: false },
      { id: "f4", title: "Rédaction du business plan pour levée", duration: "6h", completed: false },
      { id: "f5", title: "Modélisation financière simplifiée (Excel)", duration: "8h", completed: false },
      { id: "f6", title: "Pitch deck structuré pour investisseurs", duration: "4h", completed: false },
      { id: "f7", title: "Recherche de subventions et financements", duration: "5h", completed: false },
      { id: "f8", title: "Levée de fonds auprès d'investisseurs", duration: "6h", completed: false }
    ],
    partners: ["minpmeesa", "bc-pme", "minfi"],
    projects: [
      { id: "p1", title: "Investir sur un projet", action: "invest" },
      { id: "p2", title: "Soumettre une demande de projet", action: "submit" }
    ],
    opportunities: [
      { id: "o1", title: "Participations aux concours", type: "contest" },
      { id: "o2", title: "Annonces Appel à candidature", type: "call" }
    ]
  },
  {
    id: "normalisation",
    title: "Normalisation & Qualité",
    category: "Excellence",
    description: "Mettez vos produits aux normes ANOR et conquérez de nouveaux marchés.",
    concept: "La certification assure la qualité et la sécurité. Ce parcours vous guide dans le processus de marquage NC et de certification ISO.",
    progress: 0,
    status: "locked",
    gradient: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
    icon: "ShieldCheck",
    steps: [
      { id: "toolbox", title: "Boîtes à Outils", label: "Boîte à Outils", sub: "Certification", icon: "FileText" },
      { id: "info", title: "Point d'Information", label: "Information", sub: "Standards", icon: "Info" },
      { id: "formations", title: "Formations", label: "Formations", sub: "Qualité", icon: "PlayCircle" },
      { id: "partners", title: "Annuaire des Parties Prenantes", label: "Annuaire", sub: "ANOR", icon: "Users" },
      { id: "social", title: "Social Networking", label: "Communauté", sub: "Réseau", icon: "MessageCircle" }
    ],
    toolbox: [
      { id: "t1", title: "Demande de Certification", type: "pdf", url: "#", preview_text: "Formulaire officiel ANOR." },
      { id: "v1", title: "Procédure de Certification", type: "video", url: "/DOSSIER MINPMEESA/PARCOURS NORMALISATION /Boite à outils normalisation/Vidéos explicatives/Procedure de certification.mp4", duration: "08:45" }
    ],
    infoPoint: [
      { id: "i1", title: "Loi 1996 sur la normalisation", description: "Le socle de la qualité au Cameroun." },
      { id: "i2", title: "Guide de marquage NC", description: "Comment obtenir le label national." }
    ],
    formations: [
      { id: "f1", title: "Comprendre les normes produits", duration: "2h", completed: false },
      { id: "f2", title: "ISO expliquée simplement", duration: "3h", completed: false },
      { id: "f3", title: "HACCP & normes alimentaires", duration: "5h", completed: false },
      { id: "f4", title: "Étiquetage et réglementation produits", duration: "4h", completed: false },
      { id: "f5", title: "Sécurité produit et obligations légales", duration: "3h", completed: false }
    ],
  }
];

export const mockCategories = [
  { id: "en_cours", title: "Mes Parcours Actifs", count: 2 },
  { id: "a_venir", title: "Nouveautés / À venir", count: 1 }
];
