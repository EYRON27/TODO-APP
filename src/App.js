import React, { Suspense, lazy, useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import LoadingScreen from "./components/LoadingScreen";

const Login = lazy(() => import("./pages/Login"));
const Dashboard = lazy(() => import("./pages/Dashboard"));

function AppContent() {
  const location = useLocation();
  const [isRouteChanging, setIsRouteChanging] = useState(false);

  useEffect(() => {
    // Trigger loading animation whenever route changes
    setIsRouteChanging(true);

    const timer = setTimeout(() => {
      setIsRouteChanging(false);
    }, 700); // controls how long the loader appears (ms)

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <>
      {isRouteChanging && <LoadingScreen />}
      <Suspense fallback={<LoadingScreen />}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
