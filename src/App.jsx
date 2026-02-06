import { Suspense, lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { useAuth } from "./context/AuthContext";

// Layouts
import PublicLayout from "./components/layout/PublicLayout";
import PrivateLayout from "./components/layout/PrivateLayout";
import ProtectedRoute from "./components/auth/ProtectedRoute";

// Lazy loading pages
const Home = lazy(() => import("./pages/Home/Home"));
const Login = lazy(() => import("./pages/Auth/Login"));
const Signup = lazy(() => import("./pages/Auth/Signup"));
const Dashboard = lazy(() => import("./pages/Dashboard/Dashboard"));
const Parcours = lazy(() => import("./pages/Parcours/Parcours"));
const Formations = lazy(() => import("./pages/Formations/Formations"));
const Certification = lazy(() => import("./pages/Certification/Certification"));
const Partenaires = lazy(() => import("./pages/Partenaires/Partenaires"));
const Upload = lazy(() => import("./pages/Upload/Upload"));
const Assistant = lazy(() => import("./components/assistant/Assistant"));

// Resources pages
const ToolsAndTips = lazy(() => import("./pages/ressources/ToolsAndTips"));
const InformationCenter = lazy(
  () => import("./pages/ressources/InformationCenter"),
);
const ProfessionalDirectory = lazy(
  () => import("./pages/ressources/ProfessionalDirectory"),
);
const InnovationCompetitivite = lazy(
  () => import("./pages/ressources/InnovationCompetitivite"),
);
const EntrepreneurProjects = lazy(
  () => import("./pages/ressources/EntrepreneurProjects"),
);
const StarterCommunity = lazy(
  () => import("./pages/ressources/StarterCommunity"),
);

// Loading component
function LoadingSpinner() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#f8f9fa",
      }}
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        style={{
          width: "40px",
          height: "40px",
          border: "3px solid #e5e7eb",
          borderTopColor: "#635bff",
          borderRadius: "50%",
        }}
      />
    </div>
  );
}

function App() {
  const { isAuthenticated } = useAuth();

  return (
    <>
      <Helmet>
        <html lang="fr" />
        <title>STARTERKITCM - Portail de l'Entrepreneuriat Camerounais</title>
      </Helmet>

      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          {/* Public Routes */}
          <Route element={<PublicLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/parcours" element={<Parcours />} />
            <Route path="/formations" element={<Formations />} />
            <Route path="/partenaires" element={<Partenaires />} />

            {/* Resources Routes */}
            <Route
              path="/ressources/outils-bons-plans"
              element={<ToolsAndTips />}
            />
            <Route
              path="/ressources/informations"
              element={<InformationCenter />}
            />
            <Route
              path="/ressources/annuaire"
              element={<ProfessionalDirectory />}
            />
            <Route
              path="/ressources/innovation"
              element={<InnovationCompetitivite />}
            />
            <Route
              path="/ressources/projets"
              element={<EntrepreneurProjects />}
            />
            <Route
              path="/ressources/communaute"
              element={<StarterCommunity />}
            />
          </Route>

          {/* Private Routes */}
          <Route
            element={
              <ProtectedRoute>
                <PrivateLayout />
              </ProtectedRoute>
            }
          >
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/certification" element={<Certification />} />
            <Route path="/upload" element={<Upload />} />
          </Route>

          {/* Redirect to dashboard if authenticated */}
          <Route
            path="/login"
            element={
              isAuthenticated ? <Navigate to="/dashboard" replace /> : <Login />
            }
          />
          <Route
            path="/signup"
            element={
              isAuthenticated ? (
                <Navigate to="/dashboard" replace />
              ) : (
                <Signup />
              )
            }
          />

          {/* Catch all */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
