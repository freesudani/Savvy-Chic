import React from "react";
import Hero from "./components/Hero.tsx";
import Print from "./components/Print.tsx";
import Partnering from "./components/Partnering.tsx";
import Explore from "./components/Explore.tsx";
import Store from "./components/Store.tsx";
import Subscribe from "./components/Subscribe.tsx";

const App = () => {
  return (
    <div className="h-90">
      <Hero />
      <Print />
      <Partnering />
      <Explore />
      <Store />
      <Subscribe />
    </div>
  );
};

export default App;
