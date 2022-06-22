import React, { FC } from "react";
import Image from "../images/arturo-rivera-9J2yHuHK7Ac-unsplash.jpg";

const CheckoutItem: FC = () => {
  return (
    <div className="w-4/6 h-[30rem] shadow-lg  mx-auto  rounded-xl">
      <div className="h-[5rem] flex justify-end items-center  border-b-2 border-secondary-200">
        <div className="mr-5">
          <h5 className="text-red-600 text-2xl">To be delivered</h5>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"
          />
        </svg>
      </div>
      <div className="flex justify-between items-center py-5 border-b-2 border-secondary-200">
        <div className="flex justify-start items-start">
          <img src={Image} alt="image1" className="w-2/6 h-2-6" />
          <div className="px-5">
            <h3 className="text-3xl">Product 1</h3>
            <body className="text-3xl">3X</body>
          </div>
        </div>
        <div className="mr-5">
          <h2 className="text-4xl">45$</h2>
        </div>
      </div>
      <div className="flex justify-end items-center py-5">
        <button className="mdbt primarybt mx-5">Buy Again</button>
        <button className="mdbt primarybt mx-5">Contact Seller</button>
        <button className="mdbt primarybt mx-5">View Rating</button>
      </div>
    </div>
  );
};

export default CheckoutItem;
