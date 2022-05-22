import React from "react";
import { Link } from "react-router-dom";

const Deals = ({ title, image, path }) => {
  return (
    <div className="flex flex-col justify-around items-center">
      <div>
        <img
          src={image}
          alt={title}
          className="w-[170px] h-[170px] md:w-[280px] md:h-[280px] mb:w-[180px] mb:h-[180px] rounded-full hover:scale-110 duration-300 ease-in"
        />
      </div>
      <div className="mt-10">
        <Link
          to={path}
          className="text-white text-2xl uppercase border-b-2 border-transparent hover:border-secondary-200 transition-all duration-300"
        >
          {title}
        </Link>
      </div>
    </div>
  );
};

export default Deals;
