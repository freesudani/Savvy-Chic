import React, { FC } from "react";
import Navbar from "./Navbar.tsx";
import ShirtPrintImg from "../images/malcolm-lightbody-E4Kuj7GsBjg-unsplash.jpg";
import ShirtPrintintImg from "../images/marty-o-neill-hsD3q4I_VIQ-unsplash.jpg";
import { ArrangmentProps } from "../models/types.types";

const PrintingHead: FC<ArrangmentProps> = (props) => {
  return (
    <div className="relative  h-screen xl:h-[70rem] lg:h-[65rem] sm:h-[55rem] mb:h-[50rem] w-screen bg-hero-bg bg-no-repeat bg-center bg-cover">
      <Navbar
        openSidebar={props.openSidebar}
        setOpenSidebar={props.setOpenSidebar}
      />
      <div className="flex justify-around items-center mt-10 ">
        <div>
          <img
            src={ShirtPrintImg}
            alt="shirt"
            className="w-[300px] mb:hidden"
          />
        </div>
        <div className="w-[55rem] md:ml-10">
          <h1 className="text-7xl md:text-6xl  bg-gradient-to-r from-primary-100 via-primary-200 to-black bg-clip-text text-transparent bold uppercase leading-relaxed">
            we have the ultimate technology for creating high-impact t-shirts
            and apparel for a demanding market
          </h1>
        </div>
        <div>
          <img
            src={ShirtPrintintImg}
            alt="shirt2"
            className="w-[300px] lg:hidden"
          />
        </div>
      </div>
    </div>
  );
};

export default PrintingHead;
