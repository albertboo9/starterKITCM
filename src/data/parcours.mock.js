// Données des parcours MINPMEESA avec fichiers réels
// Les chemins pointent vers DOSSIER_MINPMEESA

export const mockParcours = [
  {
    id: "creation",
    title: "Création d'Entreprise",
    category: "Lancement",
    description:
      "De l'idée à l'immatriculation : les étapes pour lancer votre activité en 72 heures.",
    concept:
      "La création d'entreprise au Cameroun est simplifiée. Ce parcours vous guide à travers le choix juridique, la rédaction des statuts, et l'enregistrement administratif au CFCE.",
    progress: 65,
    status: "en_cours",
    accessLevel: "libre", // libre = accès sans condition, conditionnel = nécessite info entreprise
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    icon: "Target",
    steps: [
      {
        id: "toolbox",
        title: "Boîte à Outils",
        label: "Boîte à Outils",
        sub: "Ressources",
        icon: "FileText",
      },
      {
        id: "info",
        title: "Point d'Information",
        label: "Point d'Information",
        sub: "Législation",
        icon: "Info",
      },
      {
        id: "formations",
        title: "Formations",
        label: "Formations",
        sub: "Apprendre",
        icon: "PlayCircle",
      },
      {
        id: "partners",
        title: "Annuaire des Parties Prenantes",
        label: "Annuaire",
        sub: "Accompagnement",
        icon: "Users",
      },
      {
        id: "social",
        title: "Social Networking",
        label: "Communauté",
        sub: "Réseau",
        icon: "MessageCircle",
      },
    ],
    // Toolbox - Documents et vidéos réels
    toolbox: [
      {
        id: "v1",
        title: "Mon entreprise en 72H",
        type: "video",
        url: "/docs/creation/mon-entreprise-72h.mp4",
        previewUrl: "/docs/creation/preview_vidéo.png",
        duration: "05:12",
        description:
          "Vidéo explicative complète du processus de création en 72 heures.",
      },
      {
        id: "t1",
        title: "Statuts Type SARL",
        type: "pdf",
        url: "/docs/creation/statuts-sarl.pdf",
        previewUrl: "/docs/creation/preview_SRL.png",
        preview_text:
          "Modèle standard pour la création d'une SARL au Cameroun.",
        size: "156 Ko",
      },
      {
        id: "t2",
        title: "Modèle Statuts SNC",
        type: "pdf",
        url: "/docs/creation/modele-statuts-snc.pdf",
        previewUrl: "/docs/creation/preview_SNC.png",
        preview_text: "Modèle de statuts pour Société en Nom Collectif.",
        size: "216 Ko",
      },
      {
        id: "t3",
        title: "Modèle OHADA SAS",
        type: "pdf",
        url: "/docs/creation/modele-statuts-ohada-sas.pdf",
        previewUrl: "/docs/creation/preview_ohd.png",
        preview_text:
          "Structure juridique OHADA pour les projets à fort potentiel.",
        size: "202 Ko",
      },
      {
        id: "t4",
        title: "Notifications d'une Citation",
        type: "pdf",
        url: "/docs/creation/notifications-d_une-citation.pdf",
        previewUrl: "/docs/creation/preview_notifs.png",
        preview_text: "Guide sur les procédures de notification judiciaire.",
        size: "59 Ko",
      },
    ],
    infoPoint: [
      {
        id: "i1",
        title: "Articles sur la création",
        description:
          "Comprendre les bases de l'écosystème entrepreneurial camerounais.",
        type: "article",
      },
      {
        id: "i2",
        title: "Guide de l'entrepreneur",
        description: "Les étapes clés du succès au Cameroun.",
        type: "article",
      },
      {
        id: "i3",
        title: "Loi PME 2015",
        description: "Le cadre légal de promotion des PME au Cameroun.",
        url: "/DOSSIER_MINPMEESA/PARCOURS%20CREATION%20D_ENTREPRISE/Points%20d_interrogation%20cr%C3%A9ation%20d_entreprise/loipme2015.pdf",
        type: "pdf",
      },
    ],
    formations: [
      {
        id: "f1",
        title: "Création d'entreprise",
        duration: "4h",
        completed: false,
        accessLevel: "libre", // Accès libre
        lmsUrl: "https://campus.studieslearning.com/course/view.php?id=1344",
        description:
          "Apprenez les bases de la création d'entreprise au Cameroun, de l'idée à l'immatriculation.",
        previewImage: "/training.jpg",
      },
      {
        id: "f2",
        title: "Business Model Canvas",
        duration: "3h",
        completed: false,
        accessLevel: "libre", // Accès libre
        lmsUrl: "https://campus.studieslearning.com/course/view.php?id=1346",
        description:
          "Maîtrisez l'outil Canvas pour structurer et valider votre modèle économique.",
        previewImage: "/training2.jpg",
      },
      {
        id: "f3",
        title: "Réussir le lancement de votre entreprise",
        duration: "2h",
        completed: false,
        accessLevel: "conditionnel", // Requiert financement MINPMEESA
        financingInfo:
          "Formation financée par le MINPMEESA - Soumettez une demande de financement",
        lmsUrl: "https://campus.studieslearning.com/course/view.php?id=1345",
        description:
          "Découvrez les 5 erreurs à éviter lors du lancement de votre entreprise.",
        previewImage: "/training3.jpg",
      },
      {
        id: "f4",
        title: "Etude de faisabilité commerciale",
        duration: "4h",
        completed: false,
        accessLevel: "conditionnel", // Requiert financement MINPMEESA
        financingInfo:
          "Formation financée par le MINPMEESA - Soumettez une demande de financement",
        lmsUrl: "https://campus.studieslearning.com/course/view.php?id=1347",
        description:
          "Étapes à suivre et outils pour réaliser une étude de faisabilité commerciale.",
        previewImage: "/training4.jpg",
      },
      {
        id: "f5",
        title: "Etude financière",
        duration: "5h",
        completed: false,
        accessLevel: "libre", // Accès libre
        lmsUrl: "https://campus.studieslearning.com/course/view.php?id=1351",
        description:
          "Apprenez à monter un budget prévisionnel et un plan financier rigoureux.",
        previewImage: "/training5.jpg",
      },
      {
        id: "f6",
        title: "Etude faisabilité technique et institutionnelle",
        duration: "3h",
        completed: false,
        accessLevel: "conditionnel", // Requiert financement MINPMEESA
        financingInfo:
          "Formation financée par le MINPMEESA - Soumettez une demande de financement",
        lmsUrl: "https://campus.studieslearning.com/course/view.php?id=1348",
        description:
          "Évaluez la faisabilité technique et institutionnelle de votre projet.",
        previewImage: "/training6.jpg",
      },
      {
        id: "f7",
        title: "Elaborer un business plan",
        duration: "6h",
        completed: false,
        accessLevel: "libre", // Accès libre
        lmsUrl: "https://campus.studieslearning.com/course/view.php?id=274",
        description:
          "Guide complet pour rédiger un business plan professionnel.",
        previewImage: "/training7.jpg",
      },
      {
        id: "f8",
        title: "Réussir l'analyse SWOT",
        duration: "2h",
        completed: false,
        accessLevel: "libre", // Accès libre
        lmsUrl: "https://campus.studieslearning.com/course/view.php?id=1241",
        description: "Maîtrisez l'analyse SWOT pour évaluer votre projet.",
        previewImage: "/employees-explaining-business.jpg",
      },
      {
        id: "f9",
        title: "Gérer son temps en tant qu'entrepreneur",
        duration: "2h",
        completed: false,
        accessLevel: "conditionnel", // Requiert financement MINPMEESA
        financingInfo:
          "Formation financée par le MINPMEESA - Soumettez une demande de financement",
        lmsUrl: "https://campus.studieslearning.com/course/view.php?id=1354",
        description:
          "Conseils et techniques pour optimiser votre productivité.",
        previewImage: "/employees-explaining-business2.jpg",
      },
      {
        id: "f10",
        title: "Open innovation de A à Z",
        duration: "3h",
        completed: false,
        accessLevel: "conditionnel", // Requiert financement MINPMEESA
        financingInfo:
          "Formation financée par le MINPMEESA - Soumettez une demande de financement",
        lmsUrl: "https://campus.studieslearning.com/course/view.php?id=1539",
        description:
          "Comprenez et appliquez l'innovation ouverte dans votre stratégie.",
        previewImage:
          "/university-students-learning-accounting-principles-financial-analysis.jpg",
      },
    ],
    partners: ["minpmeesa", "apme", "cfce"],
    directory: [
      {
        id: "apme",
        name: "APME - Association des Patrons de Medium Entreprises",
        type: "Organisation Patronale",
        region: "Centre",
        city: "Yaoundé",
        address: "Siège à Yaoundé",
        phone: "+",
        email: "contact@apme.cm",
        website: "https://apme.cm/accueil/",
      },
      {
        id: "cfce-yaounde",
        name: "CFCE Yaoundé",
        type: "Centre de Formalités",
        region: "Centre",
        city: "Yaoundé",
        address: "A Côté de la CRTV RADIO",
        phone: "+237 22 22 18 73",
        email: "yaounde@cfce.cm",
        website: null,
      },
      {
        id: "cfce-douala",
        name: "CFCE Douala",
        type: "Centre de Formalités",
        region: "Littoral",
        city: "Douala",
        address: "Immeuble CAMBANIS 3eme étage, face Hôtel beau séjour",
        phone: "+237 33 42 57 18",
        email: "douala@cfce.cm",
        website: null,
      },
      {
        id: "cfce-bafoussam",
        name: "CFCE Bafoussam",
        type: "Centre de Formalités",
        region: "Ouest",
        city: "Bafoussam",
        address: "Imm. Ministériel Bafoussam – Derrière le siège de l'UCCAO",
        phone: "+237 33 44 60 09",
        email: "bafoussam@cfce.cm",
        website: null,
      },
      {
        id: "cfce-bamenda",
        name: "CFCE Bamenda",
        type: "Centre de Formalités",
        region: "Nord-Ouest",
        city: "Bamenda",
        address: "OPPOSIT CRTV BAMENDA",
        phone: "+237 33 36 27 91",
        email: "bamenda@cfce.cm",
        website: null,
      },
      {
        id: "cfce-garoua",
        name: "CFCE Garoua",
        type: "Centre de Formalités",
        region: "Nord",
        city: "Garoua",
        address: "SIS AU QUARTIER PLATEAU",
        phone: "+237 22 27 17 10",
        email: "garoua@cfce.cm",
        website: null,
      },
      {
        id: "cfce-maroua",
        name: "CFCE Maroua",
        type: "Centre de Formalités",
        region: "Extrême-Nord",
        city: "Maroua",
        address: "SIS au Carrefour PARA à l'entrée de la ville de Maroua",
        phone: null,
        email: "maroua@cfce.cm",
        website: null,
      },
      {
        id: "cfce-limbe",
        name: "CFCE Limbe",
        type: "Centre de Formalités",
        region: "Sud-Ouest",
        city: "Limbé",
        address: "MILE 4 BONADIKOMBO, at the police check point",
        phone: null,
        email: "limbe@cfce.cm",
        website: null,
      },
      {
        id: "cfce-ebolowa",
        name: "CFCE Ebolowa",
        type: "Centre de Formalités",
        region: "Sud",
        city: "Ebolowa",
        address: "sis au Carrefour ELAT, Monument des armées",
        phone: "+237 22 28 47 61",
        email: "ebolowa@cfce.cm",
        website: null,
      },
    ],
  },
  {
    id: "financement",
    title: "Recherche de Financement",
    category: "Croissance",
    description:
      "Préparez votre dossier financier et accédez aux mécanismes de soutien bancaires.",
    concept:
      "Le financement est le moteur de la croissance. Ce parcours vous aide à préparer votre business plan et à solliciter les fonds de garantie.",
    progress: 30,
    status: "en_cours",
    accessLevel: "conditionnel", // Nécessite completion du parcours Création
    gradient: "linear-gradient(135deg, #1a1a2e 0%, #0f3460 100%)",
    icon: "TrendingUp",
    steps: [
      {
        id: "toolbox",
        title: "Boîte à Outils",
        label: "Boîte à Outils",
        sub: "Conseils",
        icon: "FileText",
      },
      {
        id: "info",
        title: "Points d'Information",
        label: "Information",
        sub: "Ressources",
        icon: "Info",
      },
      {
        id: "formations",
        title: "Formations",
        label: "Formations",
        sub: "Finance",
        icon: "PlayCircle",
      },
      {
        id: "partners",
        title: "Annuaire des Parties Prenantes",
        label: "Annuaire",
        sub: "Banques",
        icon: "Users",
      },
      {
        id: "projects",
        title: "Projets",
        label: "Projets",
        sub: "Opportunités",
        icon: "Target",
      },
      {
        id: "opportunities",
        title: "Opportunités",
        label: "Opportunités",
        sub: "Concours",
        icon: "TrendingUp",
      },
      {
        id: "social",
        title: "Social Networking",
        label: "Communauté",
        sub: "Réseau",
        icon: "MessageCircle",
      },
    ],
    // Toolbox - Documents réels
    toolbox: [
      {
        id: "t1",
        title: "Guide d'Accompagnement des PME",
        type: "pdf",
        url: "/docs/financement/guide-pme.pdf",
        previewUrl: "/hero.jpg",
        preview_text:
          "Guide complet pour l'accompagnement des PME camerounaises.",
        size: "3.9 Mo",
      },
      {
        id: "t2",
        title: "Les Banques PME",
        type: "docx",
        url: "/DOSSIER_MINPMEESA/PARCOURS%20FINANCEMENT/Boite%20%C3%A0%20outils%20financement/articles%20/les%20banques%20PME.docx",
        preview_text: "Liste et coordonnées des banques partenaires des PME.",
        size: "39 Ko",
      },
      {
        id: "t3",
        title: "PACDPME - Plan d'Action",
        type: "pdf",
        url: "/docs/financement/pacdpme.pdf",
        previewUrl: "/bubble.jpg",
        preview_text: "Programme d'Appui aux Centres de Développement des PME.",
        size: "905 Ko",
      },
      {
        id: "t4",
        title: "PMEESA 3 - Stratégie Nationale",
        type: "pdf",
        url: "/docs/financement/pmeesa3.pdf",
        previewUrl: "/design.png",
        preview_text: "Troisième phase de la stratégie nationale pour les PME.",
        size: "13.4 Mo",
      },
    ],
    infoPoint: [
      {
        id: "i1",
        title: "PACDPME : Programme d'Appui",
        description: "Mécanismes de financement public pour les PME.",
        type: "article",
      },
      {
        id: "i2",
        title: "Loi de Finances PME",
        description:
          "Dispositions fiscales avantageuses pour les petites entreprises.",
        type: "article",
      },
    ],
    formations: [
      {
        id: "f1",
        title: "Introduction au financement d'entreprise",
        duration: "3h",
        completed: true,
      },
      {
        id: "f2",
        title: "Lecture et compréhension des états financiers",
        duration: "5h",
        completed: true,
      },
      {
        id: "f3",
        title: "Notions de rentabilité et seuil",
        duration: "4h",
        completed: false,
      },
      {
        id: "f4",
        title: "Rédaction du business plan pour levée",
        duration: "6h",
        completed: false,
      },
      {
        id: "f5",
        title: "Modélisation financière simplifiée (Excel)",
        duration: "8h",
        completed: false,
      },
      {
        id: "f6",
        title: "Pitch deck structuré pour investisseurs",
        duration: "4h",
        completed: false,
      },
      {
        id: "f7",
        title: "Recherche de subventions et financements",
        duration: "5h",
        completed: false,
      },
      {
        id: "f8",
        title: "Levée de fonds auprès d'investisseurs",
        duration: "6h",
        completed: false,
      },
    ],
    partners: ["minpmeesa", "bc-pme", "minfi"],
    projects: [
      { id: "p1", title: "Investir sur un projet", action: "invest" },
      { id: "p2", title: "Soumettre une demande de projet", action: "submit" },
    ],
    opportunities: [
      { id: "o1", title: "Participations aux concours", type: "contest" },
      { id: "o2", title: "Annonces Appel à candidature", type: "call" },
    ],
  },
  {
    id: "normalisation",
    title: "Normalisation & Qualité",
    category: "Excellence",
    description:
      "Mettez vos produits aux normes ANOR et conquérez de nouveaux marchés.",
    concept:
      "La certification assure la qualité et la sécurité. Ce parcours vous guide dans le processus de marquage NC et de certification ISO.",
    progress: 0,
    status: "locked",
    accessLevel: "conditionnel", // Nécessite completion du parcours Création
    gradient: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
    icon: "ShieldCheck",
    steps: [
      {
        id: "toolbox",
        title: "Boîtes à Outils",
        label: "Boîte à Outils",
        sub: "Certification",
        icon: "FileText",
      },
      {
        id: "info",
        title: "Point d'Information",
        label: "Information",
        sub: "Standards",
        icon: "Info",
      },
      {
        id: "formations",
        title: "Formations",
        label: "Formations",
        sub: "Qualité",
        icon: "PlayCircle",
      },
      {
        id: "partners",
        title: "Annuaire des Parties Prenantes",
        label: "Annuaire",
        sub: "ANOR",
        icon: "Users",
      },
      {
        id: "social",
        title: "Social Networking",
        label: "Communauté",
        sub: "Réseau",
        icon: "MessageCircle",
      },
    ],
    // Toolbox - Documents et vidéos réels
    toolbox: [
      {
        id: "t1",
        title: "Demande de Certification",
        type: "docx",
        url: "/docs/normalisation/demande-certification.docx",
        previewUrl: "/meta.png",
        preview_text: "Formulaire officiel de demande de certification ANOR.",
        size: "739 Ko",
      },
      {
        id: "t2",
        title: "Questionnaire d'Enquête",
        type: "pdf",
        url: "/docs/normalisation/questionnaire-enquete.pdf",
        previewUrl: "/bubble.jpg",
        preview_text: "Questionnaire pour l'évaluation de conformité.",
        size: "101 Ko",
      },
      {
        id: "t3",
        title: "Grille Tarifaire",
        type: "pdf",
        url: "/docs/normalisation/tarifaire.pdf",
        previewUrl: "/design.png",
        preview_text: "Tarifs des services de normalisation ANOR.",
        size: "67 Ko",
      },
      {
        id: "v1",
        title: "Procédure de Certification",
        type: "video",
        url: "/DOSSIER_MINPMEESA/PARCOURS%20NORMALISATION%20/Boite%20%C3%A0%20outils%20normalisation/Vid%C3%A9os%20explicatives/Procedure%20de%20certification.mp4",
        duration: "08:45",
        description:
          "Vidéo explicative complète du processus de certification.",
      },
    ],
    infoPoint: [
      {
        id: "i1",
        title: "Loi 1996 sur la normalisation",
        description: "Le socle de la qualité au Cameroun.",
        url: "/DOSSIER_MINPMEESA/PARCOURS NORMALISATION /Points d_informations normalisation /Documents téléchargeables/Loi_1996_sur_la_normalisation.pdf",
        type: "pdf",
      },
      {
        id: "i2",
        title: "Décret ANOR",
        description: "Création et fonctionnement de l'ANOR.",
        url: "/DOSSIER_MINPMEESA/PARCOURS NORMALISATION /Points d_informations normalisation /Documents téléchargeables/Decret de creation et fonctionnement ANOR.pdf",
        type: "pdf",
      },
      {
        id: "i3",
        title: "Guide de marquage NC",
        description: "Comment obtenir le label national conformité.",
        type: "article",
      },
      {
        id: "i4",
        title: "Grille Tarifaire des Normes",
        description: "Tarifs homologués des normes publiées.",
        url: "/DOSSIER_MINPMEESA/PARCOURS NORMALISATION /Points d_informations normalisation /articles/Grille tarifaire des normes.pdf",
        type: "pdf",
      },
    ],
    formations: [
      {
        id: "f1",
        title: "Comprendre les normes produits",
        duration: "2h",
        completed: false,
      },
      {
        id: "f2",
        title: "ISO expliquée simplement",
        duration: "3h",
        completed: false,
      },
      {
        id: "f3",
        title: "HACCP & normes alimentaires",
        duration: "5h",
        completed: false,
      },
      {
        id: "f4",
        title: "Étiquetage et réglementation produits",
        duration: "4h",
        completed: false,
      },
      {
        id: "f5",
        title: "Sécurité produit et obligations légales",
        duration: "3h",
        completed: false,
      },
    ],
    partners: ["minpmeesa", "anor"],
  },
];

export const mockCategories = [
  { id: "en_cours", title: "Mes Parcours Actifs", count: 2 },
  { id: "a_venir", title: "Nouveautés / À venir", count: 1 },
];
