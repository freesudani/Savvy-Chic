import React, { FC } from "react";
import { Link } from "react-router-dom";
import { data } from "../data/Navbardata.ts";
import { Links } from "../models/types.ts";

interface Props {
  setOpenSidebar: (arg: boolean) => void;
  openSidebar: boolean;
}

const Sidebar: FC<Props> = (props) => {
  return (
    <div
      className={`z-10 absolute  h-screen w-screen  bg-primary-100 text-white grid items-center  ${
        props.openSidebar
          ? "translate-x-0 translate-y-[500px]"
          : "translate-x-full translate-y-[500px] "
      } duration-500 ease-in-out`}
    >
      <button
        className="absolute top-4 right-4 bg-transparent border-transparent cursor-pointer outline-none"
        onClick={() => props.setOpenSidebar(false)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-32 w-32"
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
            className={
              "px-1 py-12 mx-3 text-5xl uppercase border-b-2 border-transparent hover:border-primary-200 transition-all duration-300"
            }
          >
            {item.title}
          </Link>
        ))}
      </div>
      <div className="flex justify-center">
        <button className="px-4 outlinedbt border-white text-white lgbt uppercase">
          Order Now
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
