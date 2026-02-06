import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";

function Header() {
  const location = useLocation();
  const { language, setLanguage } = useLanguage();

  const isActive = (path) => location.pathname === path;

  const navItems = [
    { path: "/parcours", label: language === "fr" ? "Parcours" : "Paths" },
    {
      path: "/formations",
      label: language === "fr" ? "Formations" : "Training",
    },
    {
      path: "/certification",
      label: language === "fr" ? "Certification" : "Certification",
    },
  ];

  return (
    <header className="main-header">
      <div className="header-container">
        {/* Logo */}
        <Link to="/" className="header-logo">
          <div className="header-logo-icon">
            <img
              src="https://www.minpmeesa.cm/site/inhoud/uploads/2018/11/logo-1.png"
              alt="logo minpmeesa"
              srcset=""
            />
          </div>
          <span className="header-logo-text">STARTERKITCM</span>
        </Link>

        {/* Navigation */}
        <nav className="header-nav">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={isActive(item.path) ? "active" : ""}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="header-actions">
          <button
            className="lang-switch"
            onClick={() => setLanguage(language === "fr" ? "en" : "fr")}
            title={language === "fr" ? "English" : "Français"}
          >
            {language === "fr" ? "EN" : "FR"}
          </button>
          <Link to="/login">
            <button
              className="btn-outline"
              style={{
                borderColor: "rgba(255,255,255,0.3)",
                color: "white",
                padding: "10px 20px",
              }}
            >
              {language === "fr" ? "Connexion" : "Login"}
            </button>
          </Link>
          <Link to="/signup">
            <button className="btn-primary" style={{ padding: "10px 20px" }}>
              {language === "fr" ? "Inscription" : "Sign Up"}
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
