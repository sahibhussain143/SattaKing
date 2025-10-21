import { Routes, Route, Navigate } from "react-router-dom";
import AdminLayOut from "../AdminLayOut/AdminLayOut";
import Dashboard from "../AdminPages/DashBoard/DashBoard";
import Benner from "../AdminPages/Bennar/Bennar";
import AddBennar from "../AdminPages/Bennar/AddBennar";
import BennarList from "../AdminPages/Bennar/BennarList";
import ManageRecentlyAdded from "../AdminPages/Bennar/ManageRecentlyAdded";
import LogOut from "../AdminPages/Logout/LogOut";
import GameBenner from "../AdminPages/GameBennar/GameBennar";
import AddGameBennar from "../AdminPages/GameBennar/AddGameBennar";
import GameBennarList from "../AdminPages/GameBennar/GameBennarList";
import ManageRecentlyGameAdded from "../AdminPages/GameBennar/ManageRecentlyGameAdded";

const AdminRouter = () => {
  return (
    <Routes>
      {/* All admin routes wrapped in AdminLayOut */}
      <Route element={<AdminLayOut />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="benner" element={<Benner />} />
        <Route path="addbennar" element={<AddBennar />} />
        <Route path="bennarlist" element={<BennarList />} />
        <Route path="ManageRecentlyAdded" element={<ManageRecentlyAdded />} />



        <Route path="Gamebenner" element={<GameBenner />} />
        <Route path="addGamebenner" element={<AddGameBennar />} />
        <Route path="Gamebennarlist" element={<GameBennarList />} />
        <Route path="ManageRecentlyGameAdded" element={<ManageRecentlyGameAdded />} />



        <Route path="logout" element={<LogOut />} />

        {/* Default route */}
        <Route path="" element={<Navigate to="dashboard" />} />
      </Route>
    </Routes>
  );
};

export default AdminRouter;
