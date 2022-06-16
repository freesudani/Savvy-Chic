import React, { FC } from "react";
import { SignInProps } from "../models/types.types";

const SignIn: FC<SignInProps> = ({ open, onClose }) => {
  return (
    <div
      className={`fixed h-min z-10 inset-72 ml-[25rem] lg:ml-[7rem] md:ml-[0rem] md:inset-60 sm:inset-52 mb:inset-0 mb:mt-60 rounded-lg ${
        open ? "" : "pointer-events-none"
      }`}
    >
      {/* backdrop */}
      <div
        className={`fixed inset-0 bg-black ${
          open ? "opacity-50" : "pointer-events-none opacity-0"
        }`}
        onClick={onClose}
      />

      {/* content */}
      <form
        className={`fixed  w-2/6 lg:w-3/6 md:w-4/6 mb:w-full bg-white shadow-lg  max-w-screen-sm p-10 ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="my-6 col-start-1 row-start-1">
          <label
            htmlFor="name"
            className="block mb-2 text-2xl font-medium text-gray-900 dark:text-gray-300"
          >
            Your Name
          </label>
          <input
            type="text"
            id="name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full mb:w-full h-20 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="name@savvychic.com"
            required=""
          />
        </div>
        <div className="my-6 col-start-2 row-start-1 ">
          <label
            htmlFor="password"
            className="block mb-2 text-2xl font-medium text-gray-900 dark:text-gray-300"
          >
            Your Password
          </label>
          <input
            type="password"
            id="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full mb:w-full h-20 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required=""
          />
        </div>
        <div className="text-center p-10 w-full">
          <button className="mdbt primarybt  uppercase" onClick={onClose}>
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
