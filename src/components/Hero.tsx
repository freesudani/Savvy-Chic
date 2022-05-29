import React, { FC } from "react";
import Navbar from "./Navbar.tsx";
import Logo from "../images/logo.png";
import FashionImage from "../images/Girls-Fashion-Trends_prev_ui.png";

const Hero: FC = () => {
  return (
    <div className="relative h-screen mb:h-[75rem]  w-screen bg-hero-bg bg-no-repeat bg-center bg-cover">
      <Navbar />
      <div className="absolute left-20 top-10 sm:left-10 sm:top-5 mb:left-5">
        <img src={Logo} alt="logo" className="w-60 mb:w-40" />
      </div>
      <div className="absolute right-1 bottom-0 md:right-10">
        <img src={FashionImage} alt="fashion" className="w-100" />
      </div>
      <div className="ml-36 mt-60 2xl:mt-72 md:ml-48 sm:text-center sm:ml-0">
        <h1 className="text-9xl sm:text-8xl mb:text-7xl mb:text-white bold uppercase leading-relaxed">
          Be Each
          <br /> day{" "}
          <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 mb:before:-skew-y-5 before:bg-primary-200 relative inline-block">
            <span className="relative text-white">Beautiful</span>
          </span>
        </h1>
      </div>
    </div>
  );
};

export default Hero;
