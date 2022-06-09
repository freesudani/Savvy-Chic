import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import { StoresProps } from "../models/types.types";

const Section: FC<StoresProps> = (props) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-center items-center w-[25rem] lg:w-[22rem] mb:w-[28rem] bg-primary-200 rounded-md ">
      <div className="px-2 py-2">
        <h1 className="text-4xl uppercase text-white">{props.title}</h1>
      </div>
      <div>
        <img
          src={props.image}
          alt="Jean Section"
          className="w-[30rem]  h-[20rem]"
        />
      </div>
      <div>
        <button
          className="primarybt lgbt w-full px-5"
          onClick={() => navigate(`/sections/${props.path}`)}
        >
          Click For Details
        </button>
      </div>
    </div>
  );
};

export default Section;
