import React from "react";
import BrImage from "../images/welovebarcelona-de-gOe4rbB8K6U-unsplash.jpg";
import Person1 from "../images/74.jpg";
import Person2 from "../images/93.jpg";

const Bracnhes = () => {
  return (
    <div className="bg-branches-bg bg-no-repeat bg-cover bg-center h-screen w-screen  text-white grid grid-cols-2 grid-rows-3">
      <div className="col-span-1 row-span-2 justify-self-center self-center">
        <h1 className="text-6xl mb-5">C-Center Branch</h1>
        <h2 className="text-4xl mb-5">64 Street District 5 Los Angeles</h2>
        <div className="flex flex-col justify-between mb-5">
          <div>
            <h3 className="text-2xl">Tel : 882-5125</h3>
            <h3 className="text-2xl">Emial : LACService@savvychic.com</h3>
          </div>
          <div>
            <h3 className="text-2xl">Branch Manager : Jospesh Kinyasa</h3>
          </div>
        </div>
        <div className="flex  items-center mb-5">
          <div>
            <img src={Person1} alt="Person1" className="w-32 mr-3" />
          </div>
          <div>
            <img src={Person2} alt="Person2" className="w-32 mr-3" />
          </div>
        </div>
        <div>
          <button className="mdbt secondarybt">Contact Branch</button>
        </div>
      </div>
      <div className="col-span-1 row-span-2 justify-self-center self-center ">
        <img
          src={BrImage}
          alt="branch img"
          className=" w-[65rem] h-[55rem] lg:h-[60rem]"
        />
      </div>
      <div className="col-span-1 row-span-1 justify-self-center self-center flex gap-2 -translate-y-5 lg:-translate-y-8">
        <button className="outlinedbt border-transparent mdbt flex justify-center items-end">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-28 w-28"
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
        </button>
        <button className="outlinedbt border-transparent mdbt flex justify-center items-end">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-28 w-28"
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
        </button>
      </div>
    </div>
  );
};

export default Bracnhes;
