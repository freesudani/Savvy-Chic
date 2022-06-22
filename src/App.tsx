import React, { FC } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Welcome from "./pages/Welcome.tsx";
import StoreSections from "./pages/StoreSections.tsx";
import Footer from "./components/Footer.tsx";
import NewlyArrived from "./pages/NewlyArrived.tsx";
import PickupDelivery from "./pages/PickupDelivery.tsx";
import PrintDetails from "./pages/PrintDetails.tsx";
import CheckoutOrder from "./pages/CheckoutOrder.tsx";
/* import Sidebar from "./components/Sidebar.tsx"; */

const App: FC = () => {
  return (
    <div className="overflow-hidden">
      {/* <Sidebar openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} /> */}
      <Routes>
        <Route path="/" element={<Navigate to="/welcome" />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/welcome/printing-details" element={<PrintDetails />} />
        <Route path="/sections" element={<StoreSections />} />
        <Route path="/new" element={<NewlyArrived />} />
        <Route path="/delivery" element={<PickupDelivery />} />
        <Route path="/checkout" element={<CheckoutOrder />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
