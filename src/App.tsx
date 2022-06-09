import React, { FC } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Welcome from "./pages/Welcome.tsx";
import StoreSections from "./pages/StoreSections.tsx";
import Footer from "./components/Footer.tsx";
import NewlyArrived from "./pages/NewlyArrived.tsx";
import PickupDelivery from "./pages/PickupDelivery.tsx";
/* import Sidebar from "./components/Sidebar.tsx"; */

const App: FC = () => {
  return (
    <div className="overflow-hidden">
      {/* <Sidebar openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} /> */}
      <Routes>
        <Route path="/" element={<Navigate to="/welcome" />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/sections" element={<StoreSections />} />
        <Route path="/new" element={<NewlyArrived />} />
        <Route path="/delivery" element={<PickupDelivery />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
