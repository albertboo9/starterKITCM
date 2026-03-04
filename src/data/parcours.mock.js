// Données des parcours MINPMEESA avec fichiers réels
// Les chemins pointent vers DOSSIER_MINPMEESA

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
    // Toolbox - Documents et vidéos réels
    toolbox: [
      {
        id: "t1",
        title: "Statuts Type SARL",
        type: "pdf",
        url: "/DOSSIER_MINPMEESA/PARCOURS%20CREATION%20D_ENTREPRISE/Boite%20%C3%A0%20outils%20cr%C3%A9ation%20d_entreprise%20/Documents%20t%C3%A9l%C3%A9chargeables/STATUTS%20SARL.pdf",
        previewUrl: "/DOSSIER_MINPMEESA/PARCOURS CREATION D_ENTREPRISE/Boite à outils création d_entreprise /Documents téléchargeables /preview_SRL.png",
        preview_text: "Modèle standard pour la création d'une SARL au Cameroun.",
        size: "156 Ko"
      },
      {
        id: "t2",
        title: "Modèle Statuts SNC",
        type: "pdf",
        url: "/DOSSIER_MINPMEESA/PARCOURS%20CREATION%20D_ENTREPRISE/Boite%20%C3%A0%20outils%20cr%C3%A9ation%20d_entreprise%20/Documents%20t%C3%A9l%C3%A9chargeables/mod%C3%A8le%20statut%20SNC.pdf",
        previewUrl: "/DOSSIER_MINPMEESA/PARCOURS CREATION D_ENTREPRISE/Boite à outils création d_entreprise /Documents téléchargeables /preview_SNC.png",
        preview_text: "Modèle de statuts pour Société en Nom Collectif.",
        size: "216 Ko"
      },
      {
        id: "t3",
        title: "Modèle OHADA SAS",
        type: "pdf",
        url: "/DOSSIER_MINPMEESA/PARCOURS%20CREATION%20D_ENTREPRISE/Boite%20%C3%A0%20outils%20cr%C3%A9ation%20d_entreprise%20/Documents%20t%C3%A9l%C3%A9chargeables/modele-statuts-ohada-sas.pdf",
        previewUrl: "/DOSSIER_MINPMEESA/PARCOURS CREATION D_ENTREPRISE/Boite à outils création d_entreprise /Documents téléchargeables /preview_ohd.png",
        preview_text: "Structure juridique OHADA pour les projets à fort potentiel.",
        size: "202 Ko"
      },
      {
        id: "t4",
        title: "Notifications d'une Citation",
        type: "pdf",
        url: "/DOSSIER_MINPMEESA/PARCOURS%20CREATION%20D_ENTREPRISE/Boite%20%C3%A0%20outils%20cr%C3%A9ation%20d_entreprise%20/Documents%20t%C3%A9l%C3%A9chargeables/notifications-d_une-citation.pdf",
        previewUrl: "/DOSSIER_MINPMEESA/PARCOURS CREATION D_ENTREPRISE/Boite à outils création d_entreprise /Documents téléchargeables /preview_notifs.png",
        preview_text: "Guide sur les procédures de notification judiciaire.",
        size: "59 Ko"
      },
      {
        id: "v1",
        title: "Mon entreprise en 72H",
        type: "video",
        url: "/DOSSIER_MINPMEESA/PARCOURS%20CREATION%20D_ENTREPRISE/Boite%20%C3%A0%20outils%20cr%C3%A9ation%20d_entreprise%20/Vid%C3%A9os%20explicatives/Mon%20entreprise%20en%2072H.mp4",
        previewUrl: "/DOSSIER_MINPMEESA/PARCOURS CREATION D_ENTREPRISE/Boite à outils création d_entreprise /Vidéos explicatives/preview.png",
        duration: "05:12",
        description: "Vidéo explicative complète du processus de création en 72 heures."
      }
    ],
    infoPoint: [
      { 
        id: "i1", 
        title: "Articles sur la création", 
        description: "Comprendre les bases de l'écosystème entrepreneurial camerounais.",
        type: "article"
      },
      { 
        id: "i2", 
        title: "Guide de l'entrepreneur", 
        description: "Les étapes clés du succès au Cameroun.",
        type: "article"
      },
      { 
        id: "i3", 
        title: "Loi PME 2015", 
        description: "Le cadre légal de promotion des PME au Cameroun.",
        url: "/DOSSIER_MINPMEESA/PARCOURS CREATION D_ENTREPRISE/Points  d_interrogation création d_entreprise /loipme2015.pdf",
        type: "pdf"
      }
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
    // Toolbox - Documents réels
    toolbox: [
      {
        id: "t1",
        title: "Guide d'Accompagnement des PME",
        type: "pdf",
        url: "/DOSSIER_MINPMEESA/PARCOURS%20FINANCEMENT/Boite%20%C3%A0%20outils%20financement/documents/Guide-daccompagnement-des-PME....pdf",
        previewUrl: "/DOSSIER_MINPMEESA/PARCOURS FINANCEMENT/Boite à outils financement/documents/preview_guide_pme.png",
        preview_text: "Guide complet pour l'accompagnement des PME camerounaises.",
        size: "3.9 Mo"
      },
      {
        id: "t2",
        title: "Les Banques PME",
        type: "docx",
        url: "/DOSSIER_MINPMEESA/PARCOURS%20FINANCEMENT/Boite%20%C3%A0%20outils%20financement/articles%20/les%20banques%20PME.docx",
        preview_text: "Liste et coordonnées des banques partenaires des PME.",
        size: "39 Ko"
      },
      {
        id: "t3",
        title: "PACDPME - Plan d'Action",
        type: "pdf",
        url: "/DOSSIER_MINPMEESA/PARCOURS%20FINANCEMENT/Points%20d_information%20financement%20/Documents/pacdpme.pdf",
        previewUrl: "/DOSSIER_MINPMEESA/PARCOURS FINANCEMENT/Points d_information financement /Documents/preview_pcdpme.png",
        preview_text: "Programme d'Appui aux Centres de Développement des PME.",
        size: "905 Ko"
      },
      {
        id: "t4",
        title: "PMEESA 3 - Stratégie Nationale",
        type: "pdf",
        url: "/DOSSIER_MINPMEESA/PARCOURS%20FINANCEMENT/Points%20d_information%20financement%20/Documents/pmeesa3.pdf",
        previewUrl: "/DOSSIER_MINPMEESA/PARCOURS FINANCEMENT/Points d_information financement /Documents/preview_pmees3.png",
        preview_text: "Troisième phase de la stratégie nationale pour les PME.",
        size: "13.4 Mo"
      }
    ],
    infoPoint: [
      { 
        id: "i1", 
        title: "PACDPME : Programme d'Appui", 
        description: "Mécanismes de financement public pour les PME.",
        type: "article"
      },
      { 
        id: "i2", 
        title: "Loi de Finances PME", 
        description: "Dispositions fiscales avantageuses pour les petites entreprises.",
        type: "article"
      }
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
    // Toolbox - Documents et vidéos réels
    toolbox: [
      {
        id: "t1",
        title: "Demande de Certification",
        type: "docx",
        url: "/DOSSIER_MINPMEESA/PARCOURS%20NORMALISATION%20/Boite%20%C3%A0%20outils%20normalisation/Documents%20t%C3%A9l%C3%A9chargeables/demande-de-certification.docx",
        preview_text: "Formulaire officiel de demande de certification ANOR.",
        size: "739 Ko"
      },
      {
        id: "t2",
        title: "Questionnaire d'Enquête",
        type: "pdf",
        url: "/DOSSIER_MINPMEESA/PARCOURS%20NORMALISATION%20/Boite%20%C3%A0%20outils%20normalisation/Documents%20t%C3%A9l%C3%A9chargeables/questionnaire-enquete.pdf",
        preview_text: "Questionnaire pour l'évaluation de conformité.",
        size: "101 Ko"
      },
      {
        id: "t3",
        title: "Grille Tarifaire",
        type: "pdf",
        url: "/DOSSIER_MINPMEESA/PARCOURS%20NORMALISATION%20/Boite%20%C3%A0%20outils%20normalisation/Documents%20t%C3%A9l%C3%A9chargeables/tarifaire.pdf",
        preview_text: "Tarifs des services de normalisation ANOR.",
        size: "67 Ko"
      },
      {
        id: "v1",
        title: "Procédure de Certification",
        type: "video",
        url: "/DOSSIER_MINPMEESA/PARCOURS%20NORMALISATION%20/Boite%20%C3%A0%20outils%20normalisation/Vid%C3%A9os%20explicatives/Procedure%20de%20certification.mp4",
        duration: "08:45",
        description: "Vidéo explicative complète du processus de certification."
      }
    ],
    infoPoint: [
      { 
        id: "i1", 
        title: "Loi 1996 sur la normalisation", 
        description: "Le socle de la qualité au Cameroun.",
        url: "/DOSSIER_MINPMEESA/PARCOURS NORMALISATION /Points d_informations normalisation /Documents téléchargeables/Loi_1996_sur_la_normalisation.pdf",
        type: "pdf"
      },
      { 
        id: "i2", 
        title: "Décret ANOR", 
        description: "Création et fonctionnement de l'ANOR.",
        url: "/DOSSIER_MINPMEESA/PARCOURS NORMALISATION /Points d_informations normalisation /Documents téléchargeables/Decret de creation et fonctionnement ANOR.pdf",
        type: "pdf"
      },
      { 
        id: "i3", 
        title: "Guide de marquage NC", 
        description: "Comment obtenir le label national conformité.",
        type: "article"
      },
      { 
        id: "i4", 
        title: "Grille Tarifaire des Normes", 
        description: "Tarifs homologués des normes publiées.",
        url: "/DOSSIER_MINPMEESA/PARCOURS NORMALISATION /Points d_informations normalisation /articles/Grille tarifaire des normes.pdf",
        type: "pdf"
      }
    ],
    formations: [
      { id: "f1", title: "Comprendre les normes produits", duration: "2h", completed: false },
      { id: "f2", title: "ISO expliquée simplement", duration: "3h", completed: false },
      { id: "f3", title: "HACCP & normes alimentaires", duration: "5h", completed: false },
      { id: "f4", title: "Étiquetage et réglementation produits", duration: "4h", completed: false },
      { id: "f5", title: "Sécurité produit et obligations légales", duration: "3h", completed: false }
    ],
    partners: ["minpmeesa", "anor"]
  }
];

export const mockCategories = [
  { id: "en_cours", title: "Mes Parcours Actifs", count: 2 },
  { id: "a_venir", title: "Nouveautés / À venir", count: 1 }
];
