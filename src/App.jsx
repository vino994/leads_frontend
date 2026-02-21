import { Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import { ToastContainer } from "react-toastify";
import { AuthContext } from "./context/AuthContext";

import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Upgrade from "./pages/Upgrade";
import Services from "./pages/Services";

function App() {
  const { token } = useContext(AuthContext);

  return (
    <>
      <Routes>

        {/* 🌍 PUBLIC ROUTES */}
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/services" element={<Services />} />

        {/* 🔒 PROTECTED ROUTES */}
        <Route
          path="/dashboard"
          element={token ? <Dashboard /> : <Navigate to="/login" />}
        />

        <Route
          path="/upgrade"
          element={token ? <Upgrade /> : <Navigate to="/login" />}
        />

        {/* ❌ UNKNOWN ROUTES */}
        <Route path="*" element={<Navigate to="/" />} />

      </Routes>

      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
}

export default App;