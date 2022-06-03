import React, { FC } from "react";
import Navbar from "./Navbar.tsx";
import ModelImg1 from "../images/dom-hill-nimElTcTNyY-unsplash_prev_ui.png";
import ModelImg2 from "../images/pooja-chaudhary-bqnbKxiIGZI-unsplash_prev_ui.png";

const New: FC = () => {
  return (
    <div className="relative h-screen mb:h-[75rem]  w-screen bg-hero-bg bg-no-repeat bg-center bg-cover">
      <Navbar />
      <div className="absolute -left-5 -bottom-20 md:-bottom-16  mb:hidden">
        <img src={ModelImg1} alt="model1" className="w-100 md:w-[325px]" />
      </div>
      <div className="flex justify-center items-center mt-14 text-8xl uppercase text-center font-extrabold leading-loose">
        <h1>
          We keep tabs <br /> on the{" "}
          <span className="text-primary-200">fashion industry</span> <br />
          and the latest <br />{" "}
          <span className="text-primary-200">fashion trends.</span>
        </h1>
      </div>
      <div className="absolute right-1 -bottom-1.5 mb:hidden ">
        <img src={ModelImg2} alt="model2" className="w-100 md:w-[400px]" />
      </div>
    </div>
  );
};

export default New;
