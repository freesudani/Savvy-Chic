import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Hero from "./components/Hero.tsx";
import Print from "./components/Print.tsx";
import Partnering from "./components/Partnering.tsx";
import Explore from "./components/Explore.tsx";
import Store from "./components/Store.tsx";
import Subscribe from "./components/Subscribe.tsx";
import Footer from "./components/Footer.tsx";
import Navbar from "./components/Navbar.tsx";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to="/welcome" />} />
        <Route
          path="/welcome"
          element={
            <>
              <Hero />
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
            <box>
              <Navbar />
              <box>Sections</box>
            </box>
          }
        />
        <Route
          path="/new"
          element={
            <box>
              <Navbar />
              <div>new</div>
            </box>
          }
        />
        <Route
          path="/delivery"
          element={
            <box>
              <Navbar />
              <box>Pickup & Delivery</box>{" "}
            </box>
          }
        />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
