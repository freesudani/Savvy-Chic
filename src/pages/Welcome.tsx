import React, { FC, useState } from "react";
import Hero from "../components/Hero.tsx";
import Print from "../components/Print.tsx";
import Partnering from "../components/Partnering.tsx";
import Explore from "../components/Explore.tsx";
import Store from "../components/Store.tsx";
import Subscribe from "../components/Subscribe.tsx";

const Welcome: FC = () => {
  const [openSidebar, setOpenSidebar] = useState<boolean>(false);

  return (
    <>
      <Hero openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
      <Print />
      <Partnering />
      <Explore />
      <Store />
      <Subscribe />
    </>
  );
};

export default Welcome;
