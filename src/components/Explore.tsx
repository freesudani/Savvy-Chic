import React from "react";
import Deals from "./Deals.tsx";
import { data } from "../data/Exploredata.ts";
import Wimage from "../images/w.png";

const Explore = () => {
  return (
    <div className="relative h-[70vh] w-screen bg-primary-200 my-16 skew-x-[0deg] -skew-y-[1deg] 2xl:h-[45vh] md:h-full">
      <div className="absolute -z-10 right-0">
        <img src={Wimage} alt="W" />
      </div>
      <div className="skew-y-[1deg]">
        <h1 className="text-5xl text-white uppercase text-center p-10">
          Specials
        </h1>
        <div className="flex justify-around items-center mt-28 md:grid md:grid-cols-1 md:gap-y-32 md:pb-20">
          {data.map((item, index) => {
            return <Deals key={index} {...item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Explore;
