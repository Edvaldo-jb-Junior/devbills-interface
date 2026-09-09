import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import { AuthProvider } from "../context/authContext";
import PrivateRoutes from "./PriveteRoutes";
import Applayout from "../layout/Applayout";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />

          <Route element={<PrivateRoutes />}>
            <Route element={<Applayout />}>
             <Route path="/dashboard" element={<Dashboard />} />
            </Route>
          </Route>

          <Route path="*" element={<h2>Página não encontrada</h2>} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default AppRoutes;