import React, { FC, useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Hero from "./components/Hero.tsx";
import Print from "./components/Print.tsx";
import Partnering from "./components/Partnering.tsx";
import Explore from "./components/Explore.tsx";
import Store from "./components/Store.tsx";
import Subscribe from "./components/Subscribe.tsx";
import Footer from "./components/Footer.tsx";
import Pickup from "./components/Pickup.tsx";
import Bracnhes from "./components/Bracnhes.tsx";
import PickupPoint from "./components/PickupPoint.tsx";
import New from "./components/New.tsx";
import News from "./components/News.tsx";
import Sources from "./components/Sources.tsx";
import Arrangment from "./components/Arrangment.tsx";
import Sections from "./components/Sections.tsx";
/* import Sidebar from "./components/Sidebar.tsx"; */

const App: FC = () => {
  const [openSidebar, setOpenSidebar] = useState<boolean>(false);
  return (
    <div className="overflow-hidden">
      {/* <Sidebar openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} /> */}
      <Routes>
        <Route path="/" element={<Navigate to="/welcome" />} />
        <Route
          path="/welcome"
          element={
            <>
              <Hero openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
              <Print />
              <Partnering />
              <Explore />
              <Store />
              <Subscribe />
            </>
          }
        />
        <Route
          path="/sections"
          element={
            <>
              <Arrangment />
              <Sections />
            </>
          }
        />
        <Route
          path="/new"
          element={
            <>
              <New />
              <News />
              <Sources />
            </>
          }
        />
        <Route
          path="/delivery"
          element={
            <>
              <Pickup />
              <Bracnhes />
              <PickupPoint />
            </>
          }
        />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
