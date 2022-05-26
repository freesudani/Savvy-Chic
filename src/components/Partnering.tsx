import React, { FC } from "react";
import PartnerLogo from "../images/cecf96b6522f4362aa3b28dbb74c90cc.png";

const Partnering: FC = () => {
  return (
    <div className="flex justify-center items-center h-screen lg:h-[80vh]">
      <div className="flex flex-col justify-evenly h-5/6 2xl:h-4/6 w-9/12 shadow-xl rounded-md bg-partner-bg bg-cover bg-center bg-fixed md:h-full">
        <div className="flex justify-center items-center h-36">
          <h2 className="text-white text-7xl md:text-6xl mb:text-center mb:text-5xl">
            Drops 7th August
          </h2>
        </div>
        <div className="flex justify-around items-center md:flex-col">
          <div className="w-1/2 md:w-full">
            <h3 className="text-white text-5xl md:text-center sm:text-4xl mb:text-3xl">
              <span className="text-primary-200">Savvy Chic</span> is partnering
              with <span className="text-[#D6BFA9]">Friendly Fashionista </span>
              to bring to you a limited-time Clothing, Cosmetics and accessories
              from the{" "}
              <span className="text-[#D6BFA9]">Friendly Fashionista </span>
              Target collection bursting with endless joy and variety.
            </h3>
          </div>
          <div className="md:mt-32">
            <img src={PartnerLogo} alt="Partner Logo" className="rounded-md" />
          </div>
        </div>
        <div className="flex justify-center items-center  ">
          <button className="primarybt lgbt h-32 w-72 uppercase sm:h-28 sm:w-64">
            Preview The Collection
          </button>
        </div>
      </div>
    </div>
  );
};

export default Partnering;
