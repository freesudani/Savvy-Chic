import React, { FC } from "react";
import Navbar from "./Navbar.tsx";
import DeliveryImage from "../images/pexels-mikhail-nilov-6969948_prev_ui.png";

const Pickup: FC = () => {
  return (
    <div className="relative h-screen mb:h-[75rem]  w-screen bg-hero-bg bg-no-repeat bg-center bg-cover">
      <Navbar />
      <div className="ml-[400px] mt-32  w-[850px]  md:ml-48 sm:text-center sm:ml-0 border-8 border-primary-200 skew-x-12">
        <h1 className="text-9xl sm:text-8xl mb:text-7xl pl-6 bold -skew-x-12 mb:text-white bold uppercase leading-relaxed">
          Most convenient
          <br />
          shopping Solution
        </h1>
      </div>
      <div className="absolute left-1 bottom-0 md:left-10">
        <img src={DeliveryImage} alt="fashion" className="w-100" />
      </div>
    </div>
  );
};

export default Pickup;
