import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "../../pages/Home/Home";
import SattaChart from "../../pages/SattaChart/SattaChart";
import TajSattaKing from "../../pages/TajSattaKing/TajSattaKing";
import About from "../../pages/About/About";
import Updates from "../../pages/Updates/Updates";
import LogIn from "../../pages/Login/LogIn";
import AdminRouter from "../Admin/AdminRouter/AdminRouter";
import Navbar from "../Navbar";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <MainRoutes />
    </BrowserRouter>
  );
};

const MainRoutes = () => {
  const location = useLocation();

  // Only show navbar for public pages
  const showNavbar = !location.pathname.startsWith("/admin");

  return (
    <>
      {showNavbar && <Navbar />}
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/SattaChart" element={<SattaChart />} />
        <Route path="/TajSattaKing" element={<TajSattaKing />} />
        <Route path="/about" element={<About />} />
        <Route path="/updates" element={<Updates />} />
        <Route path="/login" element={<LogIn />} />

        {/* Admin Routes */}
        <Route path="/admin/*" element={<AdminRouter />} />

        {/* Fallback */}
        <Route path="*" element={<div>Page Not Found</div>} />
      </Routes>
    </>
  );
};

export default AppRouter;
