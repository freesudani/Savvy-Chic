import React, { FC } from "react";
import Navbar from "./Navbar.tsx";
import StoreImg from "../images/willian-justen-de-vasconcellos-8lX8jl0y3CI-unsplash.jpg";

interface Props {
  setOpenSidebar: (arg: boolean) => void;
  openSidebar: boolean;
}

const Arrangment: FC<Props> = (props) => {
  return (
    <div className="relative h-screen mb:h-[75rem]  w-screen bg-hero-bg bg-no-repeat bg-center bg-cover">
      <Navbar
        openSidebar={props.openSidebar}
        setOpenSidebar={props.setOpenSidebar}
      />
      <div className="flex justify-between items-center mt-14 md:flex-col">
        <div className="flex justify-center items-center mt-14 ml-10 mb:ml-0 text-7xl lg:text-6xl uppercase text-left mb:text-center font-extrabold leading-loose underline decoration-primary-200">
          <h1>
            we constantly find
            <br /> best ways
            <br /> to display & arrange
            <br /> our products in our store
          </h1>
        </div>
        <div className="">
          <img
            src={StoreImg}
            alt="store"
            className="w-[550px] mt-8  mr-10 mb:w-[350px] mb:mr-0"
          />
        </div>
      </div>
    </div>
  );
};

export default Arrangment;
