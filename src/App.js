import React from "react";
import Hero from "./components/Hero.tsx";
import Print from "./components/Print.tsx";
import Partnering from "./components/Partnering.tsx";
import Explore from "./components/Explore.tsx";
import Store from "./components/Store.tsx";

const App = () => {
  return (
    <div>
      <Hero />
      <Print />
      <Partnering />
      <Explore />
      <Store />
    </div>
  );
};

export default App;
