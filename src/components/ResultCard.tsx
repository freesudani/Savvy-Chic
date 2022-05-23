import React from "react";
import Image1 from "../images/anomaly-WWesmHEgXDs-unsplash.jpg";
import StarIcon from "./StarIcon.tsx";

const ResultCard = () => {
  return (
    <div className=" w-3/12 h-fit bg-white rounded-lg border-2 shadow-md">
      <div className="relative">
        <div>
          <img
            src={Image1}
            alt="product"
            className="overflow-hidden rounded-t-lg h-96 w-full"
          />
        </div>
        <div className="absolute top-4 left-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-9 w-9"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </div>
      </div>
      <div className="flex justify-center mt-4">
        <h4 className="text-3xl">First Product</h4>
      </div>
      <div className="flex justify-around items-center w-3/4 mt-7">
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <h5>125 reviews</h5>
      </div>
      <div className="grid grid-cols-2 mt-5 mx-1">
        <div>
          <h6 className="text-2xl">Pick A Color</h6>
          <div className="grid grid-cols-3 gap-1 pr-8">
            <div className="mt-3 border-2 border-solid border-black bg-red-600 w-8 h-8" />
            <div className="mt-3 border-2 border-solid border-black bg-blue-600 w-8 h-8" />
            <div className="mt-3 border-2 border-solid border-black bg-yellow-600 w-8 h-8" />
            <div className="mt-3 border-2 border-solid border-black bg-orange-600 w-8 h-8" />
            <div className="mt-3 border-2 border-solid border-black bg-pink-600 w-8 h-8" />
          </div>
          <div className="flex justify-start items-center mt-5">
            <h6 className="text-2xl">Total Price</h6>
            <h6 className="text-4xl ml-3 bg-primary-100">126$</h6>
          </div>
        </div>

        <div>
          <h6 className="text-2xl">Select size</h6>
          <div className="mb-4 mt-3">
            <label className="inline-flex items-center">
              <input
                type="radio"
                className="form-radio"
                name="accountType"
                value="1"
              />
              <span className="ml-2 text-xl">sm</span>
            </label>
            <label className="inline-flex items-center ml-6">
              <input
                type="radio"
                className="form-radio"
                name="accountType"
                value="2"
              />
              <span className="ml-2 text-xl">md</span>
            </label>
            <label className="inline-flex items-center ml-6">
              <input
                type="radio"
                className="form-radio"
                name="accountType"
                value="2"
              />
              <span className="ml-2 text-xl">lg</span>
            </label>
          </div>
          <div className="mt-6">
            <h6 className="text-2xl">Select Quantity</h6>
            <div className="flex flex-row h-10 w-10/12 mt-3 rounded-lg relative bg-transparent">
              <button
                data-action="decrement"
                className=" bg-secondary-200 text-black  hover:bg-secondary-100 h-full w-20 rounded-l cursor-pointer outline-none  border-2 border-black border-solid"
              >
                <span className="m-auto text-2xl font-thin">−</span>
              </button>
              <input
                type="text"
                className="outline-none focus:outline-none text-center w-full bg-secondary-200 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-black"
                name="custom-input-number"
                value="0"
              />
              <button
                data-action="increment"
                className="bg-secondary-200 text-black  hover:bg-secondary-100 h-full w-20 rounded-l cursor-pointer outline-none border-2 border-black border-solid"
              >
                <span className="m-auto text-2xl font-thin">+</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 mb-5 flex justify-center items-center">
        <button className="primarybt mdbt">Add to Cart</button>
      </div>
    </div>
  );
};

export default ResultCard;
