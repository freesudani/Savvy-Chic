import React, { FC } from "react";
import { useNavigate } from "react-router";
import ShirtPrintImg from "../images/shirtprinting_prev_ui.png";

const Print: FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-around items-center bg-print-bg h-100  bg-no-repeat bg-cover bg-center px-10 py-5">
      <div className=" 2xl:mt-72 mb:mt-28 md:ml-0 sm:text-center sm:ml-0  -translate-y-20">
        <h1 className="text-8xl text-white text-left  md:text-7xl sm:text-6xl mb:text-5xl bold uppercase">
          spice up your shirts
          <br /> and Add style{" "}
        </h1>
        <p className="text-2xl text-white text-left my-11 mb:my-9">
          use our latest technology and Stand out from the crowd with custom
          T-shirts in a range of designs,
          <br /> colors and styles.
        </p>
        <div className="flex justify-start">
          <button
            className="secondarybt lgbt"
            onClick={() => navigate("/welcome/printing-details")}
          >
            Learn More
          </button>
        </div>
      </div>
      <div className="mb:-mt-40">
        <img src={ShirtPrintImg} alt="ShirtPrint" className="w-100 h-auto" />
      </div>
    </div>
  );
};

export default Print;
