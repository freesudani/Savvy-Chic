import React, { FC } from "react";
import { Link } from "react-router-dom";
import { data } from "../data/Navbardata.ts";
import { Links } from "../models/types.ts";

const Sidebar: FC = () => {
  return (
    <div className="fixed z-10 w-80 h-full right-${} bg-white grid items-center top-0 transition-all duration-300 ease-in md:w-screen">
      <button className="absolute top-4 right-4 bg-transparent border-transparent cursor-pointer outline-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
      <div className="grid grid-cols-1 grid-rows-3 text-center">
        {data.map((item: Links, i: number) => (
          <Link
            key={i}
            to={item.path}
            className="flex justify-center items-center text-xl decoration-0 list-none transition-all duration-200 ease-in-out text-black cursor-pointer hover:text-white hover:bg-primary-200"
          >
            {item.title}
          </Link>
        ))}
      </div>
      <div className="flex justify-center">
        <button className="px-4 outlinedbt mdbt uppercase">Order Now</button>
      </div>
    </div>
  );
};

export default Sidebar;
