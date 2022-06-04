import React, { FC } from "react";
import { data } from "../data/Newsdata.ts";
import Slider from "react-perfect-slider";

const News: FC = () => {
  return (
    <div className="flex flex-col justify-around items-center bg-news-bg h-screen lg:h-[60rem] md:h-[90rem] bg-no-repeat bg-cover bg-center  py-5">
      <div>
        <h1 className="text-white text-7xl uppercase text-center font-bold leading-loose md:text-6xl">
          Recent Arrivals
        </h1>
      </div>
      <Slider
        renderControls={(next, previous) => [
          <button
            onClick={previous}
            className="outlinedbt border-transparent mdbt -mt-10 ml-[800px] lg:mt-0 lg:ml-10 "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"
              />
            </svg>
          </button>,
          <button
            onClick={next}
            className="outlinedbt border-transparent mdbt  "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>,
        ]}
      >
        {data.map((item) => {
          return (
            <div
              key={item.id}
              className="grid grid-cols-2 justify-center items-center mx-56 max-h-[70%] md:grid-cols-1  "
            >
              <div className="md:mb-5">
                <img
                  src={item.image}
                  alt={item.title}
                  className="rounded-3xl w-[80%]"
                />
              </div>
              <div className="text-white  w-[80%] md:text-center">
                <div>
                  <h1 className="text-5xl capitalize">{item.title}</h1>
                </div>
                <div className="my-5">
                  <body>{item.date}</body>
                </div>
                <div>
                  <h6 className="text-2xl">{item.details}</h6>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default News;
