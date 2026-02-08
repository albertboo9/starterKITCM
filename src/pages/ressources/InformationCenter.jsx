import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import {
  Search,
  FileText,
  Scale,
  Calendar,
  Link as LinkIcon,
  Download,
  Bookmark,
  ChevronRight,
  Filter,
  BookOpen,
} from "lucide-react";

// Mock data - Information Center
const informations = [
  {
    id: 1,
    title: "Loi sur l'entrepreneuriat au Cameroun 2023",
    type: "Texte de loi",
    category: "Législation",
    date: "2023-12-01",
    description:
      "Texte complet de la loi relative à l'orientation de l'activité entrepreneuriale au Cameroun.",
    link: "/documents/loi-entrepreneuriat-2023.pdf",
    isNew: true,
  },
  {
    id: 2,
    title: "Décret d'application - Statut auto-entrepreneur",
    type: "Décret",
    category: "Décrets",
    date: "2023-11-15",
    description:
      "Décret présidentiel définissant les conditions d'application du statut d'auto-entrepreneur.",
    link: "/documents/decret-auto-entrepreneur.pdf",
    isNew: false,
  },
  {
    id: 3,
    title: "Guide des procédures de création d'entreprise",
    type: "Guide",
    category: "Guides",
    date: "2023-11-10",
    description:
      "Guide pratique détaillant toutes les étapes pour créer votre entreprise au Cameroun.",
    link: "/documents/guide-creation.pdf",
    isNew: false,
  },
  {
    id: 4,
    title: "Réglementation fiscale des PME",
    type: "Réglementation",
    category: "Fiscalité",
    date: "2023-10-28",
    description:
      "Comprendre le régime fiscal applicable aux petites et moyennes entreprises.",
    link: "/documents/fiscalite-pme.pdf",
    isNew: false,
  },
  {
    id: 5,
    title: "Formulaire de demande de financement MINPMEESA",
    type: "Formulaire",
    category: "Formulaires",
    date: "2023-10-20",
    description:
      "Formulaire à remplir pour soumettre votre dossier de demande de financement.",
    link: "/documents/formulaire-financement.xlsx",
    isNew: true,
  },
  {
    id: 6,
    title: "Calendrier des événements MINPMEESA 2024",
    type: "Événement",
    category: "Événements",
    date: "2023-10-15",
    description:
      "Liste des événements, salons et journées portes ouvertes organisés par le MINPMEESA.",
    link: "/evenements",
    isNew: false,
  },
  {
    id: 7,
    title: "Liens utiles - Institutions publiques",
    type: "Liens",
    category: "Liens utiles",
    date: "2023-10-01",
    description:
      "Compilation des liens vers les institutions publiques et organismes de soutien.",
    link: "/liens-utiles",
    isNew: false,
  },
  {
    id: 8,
    title: "Convention collective applicable aux employés de PME",
    type: "Convention",
    category: "Social",
    date: "2023-09-20",
    description:
      "Convention collective régissant les relations de travail dans les petites et moyennes entreprises.",
    link: "/documents/convention-collective.pdf",
    isNew: false,
  },
];

const categories = [
  { id: "all", label: "Tout", count: 24 },
  { id: "Législation", label: "Législation", count: 5 },
  { id: "Décrets", label: "Décrets", count: 3 },
  { id: "Fiscalité", label: "Fiscalité", count: 4 },
  { id: "Guides", label: "Guides", count: 6 },
  { id: "Événements", label: "Événements", count: 3 },
  { id: "Formulaires", label: "Formulaires", count: 3 },
];

function InformationCenter() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [bookmarked, setBookmarked] = useState([]);
  const [showFilters, setShowFilters] = useState(false);

  const filteredInfos = informations.filter((info) => {
    const matchesCategory =
      selectedCategory === "all" || info.category === selectedCategory;
    const matchesSearch =
      searchQuery === "" ||
      info.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      info.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleBookmark = (id) => {
    setBookmarked((prev) =>
      prev.includes(id) ? prev.filter((b) => b !== id) : [...prev, id]
    );
  };

  const typeIcons = {
    "Texte de loi": FileText,
    Décret: Scale,
    Guide: BookOpen,
    Réglementation: FileText,
    Formulaire: FileText,
    Événement: Calendar,
    Liens: LinkIcon,
    Convention: FileText,
  };

  return (
    <div className="info-page">
      <Helmet>
        <title>
          Point d'informations | STARTERKIT CM - Centre de ressources
          administratives
        </title>
        <meta
          name="description"
          content="Accédez aux textes de loi, décrets, réglementations et informations administratives du Cameroun."
        />
      </Helmet>

      {/* Hero Section */}
      <section className="info-hero">
        <div className="info-hero-content">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="info-badge">
              <Search size={18} />
              <span>Moteur de recherche</span>
            </div>
            <h1>
              Point<br />
              <span className="gradient-text">d'informations</span>
            </h1>
            <p>
              Accédez à toutes les informations administratives, textes de loi,
              décrets et ressources officielles pour votre entreprise au Cameroun.
            </p>
          </motion.div>

          {/* Search Bar */}
          <motion.div
            className="info-search"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <Search size={22} className="search-icon" />
            <input
              type="text"
              placeholder="Rechercher un texte de loi, décret, réglementation..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="search-btn">Rechercher</button>
          </motion.div>

          {/* Quick Filters */}
          <div className="quick-filters">
            <span>Rechercher par:</span>
            {["Textes de loi", "Décrets", "Formulaires", "Événements"].map(
              (filter) => (
                <button
                  key={filter}
                  className="quick-filter"
                  onClick={() => setSearchQuery(filter)}
                >
                  {filter}
                </button>
              )
            )}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="info-content">
        <div className="info-layout">
          {/* Sidebar Categories */}
          <aside className="info-sidebar">
            <h3>Catégories</h3>
            <div className="category-list">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  className={`category-item ${
                    selectedCategory === cat.id ? "active" : ""
                  }`}
                  onClick={() => setSelectedCategory(cat.id)}
                >
                  <span className="cat-name">{cat.label}</span>
                  <span className="cat-count">{cat.count}</span>
                </button>
              ))}
            </div>

            {/* Bookmarks */}
            <div className="bookmarks-section">
              <h4>
                <Bookmark size={18} />
                Mes favoris
              </h4>
              {bookmarked.length > 0 ? (
                <ul className="bookmark-list">
                  {bookmarked.slice(0, 3).map((id) => {
                    const info = informations.find((i) => i.id === id);
                    return info ? (
                      <li key={id}>
                        <a href={info.link}>{info.title}</a>
                      </li>
                    ) : null;
                  })}
                </ul>
              ) : (
                <p className="no-bookmarks">
                  Aucun favori ajouté. Cliquez sur l'icône pour ajouter.
                </p>
              )}
            </div>
          </aside>

          {/* Results */}
          <main className="info-main">
            {/* Results Header */}
            <div className="results-header">
              <h2>
                <FileText size={24} />
                {selectedCategory === "all"
                  ? "Toutes les ressources"
                  : selectedCategory}
                <span className="count">({filteredInfos.length})</span>
              </h2>
              <button
                className="filter-toggle"
                onClick={() => setShowFilters(!showFilters)}
              >
                <Filter size={18} />
                Filtres
              </button>
            </div>

            {/* Results List */}
            <div className="info-list">
              {filteredInfos.map((info, index) => {
                const TypeIcon = typeIcons[info.type] || FileText;
                const isBookmarked = bookmarked.includes(info.id);

                return (
                  <motion.div
                    key={info.id}
                    className="info-card"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.4 }}
                  >
                    <div className="info-icon">
                      <TypeIcon size={24} />
                    </div>
                    <div className="info-content">
                      <div className="info-header">
                        {info.isNew && <span className="new-badge">Nouveau</span>}
                        <span className="info-type">{info.type}</span>
                      </div>
                      <h3>{info.title}</h3>
                      <p>{info.description}</p>
                      <div className="info-meta">
                        <span className="info-date">
                          <Calendar size={14} />
                          {new Date(info.date).toLocaleDateString("fr-FR", {
                            day: "numeric",
                            month: "long",
                            year: "numeric",
                          })}
                        </span>
                        <span className="info-category">{info.category}</span>
                      </div>
                    </div>
                    <div className="info-actions">
                      <button
                        className={`bookmark-btn ${isBookmarked ? "active" : ""}`}
                        onClick={() => toggleBookmark(info.id)}
                      >
                        <Bookmark size={20} fill={isBookmarked ? "currentColor" : "none"} />
                      </button>
                      <a href={info.link} className="download-btn">
                        <Download size={20} />
                        <span>Télécharger</span>
                      </a>
                      <ChevronRight size={20} className="arrow" />
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {filteredInfos.length === 0 && (
              <div className="no-results">
                <Search size={48} />
                <p>Aucun résultat trouvé pour "{searchQuery}"</p>
                <button onClick={() => setSearchQuery("")}>
                  Effacer la recherche
                </button>
              </div>
            )}
          </main>
        </div>
      </section>

      <style>{`
        .info-page {
          min-height: 100vh;
          background: #f8fafc;

        }

        /* Hero */
        .info-hero {
          background: linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%);
          padding: 80px 24px;
        }

        .info-hero-content {
          max-width: 1200px;
          margin: 0 auto;
        }

        .info-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(255, 255, 255, 0.2);
          color: white;
          padding: 8px 16px;
          border-radius: 20px;
          font-size: 14px;
          font-weight: 500;
          margin-bottom: 24px;
        }

        .info-hero h1 {
          font-size: clamp(40px, 6vw, 64px);
          font-weight: 800;
          color: white;
          line-height: 1.1;
          margin-bottom: 20px;
        }

        .gradient-text {
          background: linear-gradient(135deg, #fef3c7 0%, #fcd34d 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .info-hero p {
          font-size: 18px;
          color: rgba(255, 255, 255, 0.8);
          max-width: 600px;
          line-height: 1.6;
          margin-bottom: 40px;
        }

        /* Search */
        .info-search {
          display: flex;
          align-items: center;
          background: white;
          border-radius: 16px;
          padding: 8px 8px 8px 20px;
          max-width: 700px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
        }

        .info-search .search-icon {
          color: #9ca3af;
          margin-right: 12px;
        }

        .info-search input {
          flex: 1;
          border: none;
          outline: none;
          font-size: 16px;
          color: #1a1a2e;
        }

        .info-search .search-btn {
          background: linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%);
          color: white;
          border: none;
          padding: 14px 28px;
          border-radius: 12px;
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .info-search .search-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(14, 165, 233, 0.4);
        }

        /* Quick Filters */
        .quick-filters {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-top: 24px;
          flex-wrap: wrap;
        }

        .quick-filters span {
          color: rgba(255, 255, 255, 0.8);
          font-size: 14px;
        }

        .quick-filter {
          background: rgba(255, 255, 255, 0.15);
          border: 1px solid rgba(255, 255, 255, 0.3);
          color: white;
          padding: 8px 16px;
          border-radius: 20px;
          font-size: 13px;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .quick-filter:hover {
          background: rgba(255, 255, 255, 0.25);
        }

        /* Content */
        .info-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 48px 24px;
        }

        .info-layout {
          display: grid;
          grid-template-columns: 280px 1fr;
          gap: 40px;
        }

        /* Sidebar */
        .info-sidebar {
          background: white;
          border-radius: 20px;
          padding: 24px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
          height: fit-content;
          position: sticky;
          top: 96px;
        }

        .info-sidebar h3 {
          font-size: 16px;
          font-weight: 700;
          color: #1a1a2e;
          margin-bottom: 16px;
        }

        .category-list {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .category-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px 16px;
          border-radius: 10px;
          background: transparent;
          border: none;
          cursor: pointer;
          transition: all 0.2s ease;
          text-align: left;
        }

        .category-item:hover {
          background: #f3f4f6;
        }

        .category-item.active {
          background: #e0f2fe;
          color: #0284c7;
        }

        .cat-name {
          font-size: 14px;
          font-weight: 500;
          color: #374151;
        }

        .cat-count {
          font-size: 12px;
          color: #9ca3af;
          background: #f3f4f6;
          padding: 2px 8px;
          border-radius: 10px;
        }

        .category-item.active .cat-count {
          background: #bae6fd;
          color: #0284c7;
        }

        /* Bookmarks */
        .bookmarks-section {
          margin-top: 24px;
          padding-top: 24px;
          border-top: 1px solid #e5e7eb;
        }

        .bookmarks-section h4 {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 14px;
          font-weight: 600;
          color: #374151;
          margin-bottom: 12px;
        }

        .bookmark-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .bookmark-list li {
          margin-bottom: 8px;
        }

        .bookmark-list a {
          font-size: 13px;
          color: #6b7280;
          text-decoration: none;
          line-height: 1.4;
          transition: color 0.2s ease;
        }

        .bookmark-list a:hover {
          color: #0284c7;
        }

        .no-bookmarks {
          font-size: 13px;
          color: #9ca3af;
          line-height: 1.5;
        }

        /* Main */
        .info-main {
          min-height: 500px;
        }

        .results-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 24px;
        }

        .results-header h2 {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 22px;
          font-weight: 700;
          color: #1a1a2e;
        }

        .results-header .count {
          font-size: 16px;
          font-weight: 400;
          color: #9ca3af;
        }

        .filter-toggle {
          display: flex;
          align-items: center;
          gap: 8px;
          background: white;
          border: 1px solid #e5e7eb;
          padding: 10px 16px;
          border-radius: 10px;
          font-size: 14px;
          color: #6b7280;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .filter-toggle:hover {
          border-color: #0284c7;
          color: #0284c7;
        }

        /* Info Cards */
        .info-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .info-card {
          display: flex;
          align-items: flex-start;
          gap: 20px;
          background: white;
          border-radius: 16px;
          padding: 24px;
          box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
          transition: all 0.3s ease;
        }

        .info-card:hover {
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
          transform: translateY(-2px);
        }

        .info-icon {
          width: 56px;
          height: 56px;
          background: #e0f2fe;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #0284c7;
          flex-shrink: 0;
        }

        .info-content {
          flex: 1;
          min-width: 0;
        }

        .info-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 8px;
        }

        .new-badge {
          background: #fef3c7;
          color: #d97706;
          padding: 4px 10px;
          border-radius: 6px;
          font-size: 11px;
          font-weight: 600;
        }

        .info-type {
          background: #f3f4f6;
          color: #6b7280;
          padding: 4px 10px;
          border-radius: 6px;
          font-size: 11px;
          font-weight: 500;
        }

        .info-card h3 {
          font-size: 18px;
          font-weight: 600;
          color: #1a1a2e;
          margin-bottom: 8px;
        }

        .info-card p {
          font-size: 14px;
          color: #6b7280;
          line-height: 1.6;
          margin-bottom: 12px;
        }

        .info-meta {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .info-date {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 13px;
          color: #9ca3af;
        }

        .info-category {
          font-size: 12px;
          color: #0284c7;
          background: #e0f2fe;
          padding: 4px 10px;
          border-radius: 6px;
        }

        .info-actions {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-shrink: 0;
        }

        .bookmark-btn {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          border: 1px solid #e5e7eb;
          background: transparent;
          color: #9ca3af;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
        }

        .bookmark-btn:hover {
          border-color: #0284c7;
          color: #0284c7;
        }

        .bookmark-btn.active {
          border-color: #0284c7;
          color: #0284c7;
        }

        .download-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          background: #0284c7;
          color: white;
          padding: 10px 16px;
          border-radius: 10px;
          font-size: 14px;
          font-weight: 500;
          text-decoration: none;
          transition: all 0.2s ease;
        }

        .download-btn:hover {
          background: #0369a1;
          transform: translateY(-1px);
        }

        .arrow {
          color: #d1d5db;
        }

        /* No Results */
        .no-results {
          text-align: center;
          padding: 60px 20px;
          color: #9ca3af;
        }

        .no-results svg {
          margin-bottom: 16px;
          opacity: 0.5;
        }

        .no-results p {
          font-size: 18px;
          margin-bottom: 16px;
        }

        .no-results button {
          background: #0284c7;
          color: white;
          border: none;
          padding: 12px 24px;
          border-radius: 10px;
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
        }

        @media (max-width: 900px) {
          .info-layout {
            grid-template-columns: 1fr;
          }

          .info-sidebar {
            position: static;
          }

          .category-list {
            flex-direction: row;
            flex-wrap: wrap;
          }

          .info-card {
            flex-direction: column;
          }

          .info-actions {
            width: 100%;
            margin-top: 16px;
          }

          .download-btn {
            flex: 1;
            justify-content: center;
          }
        }
      `}</style>
    </div>
  );
}

export default InformationCenter;
