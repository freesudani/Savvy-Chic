import React, { FC } from "react";

const PrinthtmlForm: FC = () => {
  return (
    <div className="bg-secondary-200 h-min w-screen p-10">
      <div className="mb-6">
        <h1 className="text-4xl text-center">
          Please Fill below htmlForm We'll email you price qoutation accoridngly
        </h1>
      </div>

      <form className="grid grid-cols-2 grid-row-3 mb:flex mb:flex-col ">
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
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 mb:w-full h-20 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="name@flowbite.com"
            required=""
          />
        </div>
        <div className="my-6 col-start-2 row-start-1 ">
          <label
            htmlFor="email"
            className="block mb-2 text-2xl font-medium text-gray-900 dark:text-gray-300"
          >
            Your Email
          </label>
          <input
            type="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 mb:w-full h-20 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required=""
          />
        </div>
        <div className="my-6 row-start-2 col-start-1 ">
          <label
            htmlFor="phone"
            className="block mb-2 text-2xl font-medium text-gray-900 dark:text-gray-300"
          >
            Your Phone
          </label>
          <input
            type="number"
            id="phone"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 mb:w-full h-20 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required=""
          />
        </div>

        <fieldset className="my-6 col-start-2 row-start-2 ">
          <legend className="text-2xl">Shirt Color</legend>
          <div className="flex justify-between items-center md:grid md:grid-cols-3 w-3/6 my-3">
            <div className="flex items-center mb-4">
              <input
                id="color-option-1"
                type="radio"
                name="colors"
                value="Black"
                class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                checked=""
              />
              <label
                htmlFor="color-option-1"
                className="block ml-2 text-2xl font-medium text-gray-900 dark:text-gray-300"
              >
                Black
              </label>
            </div>
            <div className="flex items-center mb-4">
              <input
                id="color-option-2"
                type="radio"
                name="colors"
                value="White"
                className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="color-option-2"
                className="block ml-2 text-2xl  font-medium text-gray-900 dark:text-gray-300"
              >
                White
              </label>
            </div>
            <div className="flex items-center mb-4">
              <input
                id="color-option-3"
                type="radio"
                name="colors"
                value="Red"
                className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="color-option-3"
                className="block ml-2 text-2xl font-medium text-gray-900 dark:text-gray-300"
              >
                Red
              </label>
            </div>
            <div className="flex items-center mb-4">
              <input
                id="color-option-4"
                type="radio"
                name="colors"
                value="Blue"
                className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring:blue-300 dark:focus-ring-blue-600 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="color-option-4"
                className="block ml-2 text-2xl  font-medium text-gray-900 dark:text-gray-300"
              >
                Blue
              </label>
            </div>
            <div className="flex items-center mb-4">
              <input
                id="color-option-5"
                type="radio"
                name="colors"
                value="Grey"
                className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring:blue-300 dark:focus-ring-blue-600 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="color-option-5"
                className="block ml-2 text-2xl  font-medium text-gray-900 dark:text-gray-300"
              >
                Grey
              </label>
            </div>
          </div>
        </fieldset>
        <fieldset className="my-6 col-start-2 row-start-3">
          <legend className="text-2xl">Printing Method</legend>
          <div className="flex justify-between items-center md:grid md:grid-cols-2 w-4/6 my-3">
            <div className="flex items-center mb-4">
              <input
                id="machine-option-1"
                type="radio"
                name="machines"
                value="DTG"
                class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                checked=""
              />
              <label
                htmlFor="machine-option-1"
                className="block ml-2 text-2xl font-medium text-gray-900 dark:text-gray-300"
              >
                DTG
              </label>
            </div>
            <div className="flex items-center mb-4">
              <input
                id="machine-option-2"
                type="radio"
                name="machines"
                value="Heat Press Printing"
                className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="machine-option-2"
                className="block ml-2 text-2xl  font-medium text-gray-900 dark:text-gray-300"
              >
                Heat Press Printing
              </label>
            </div>
            <div className="flex items-center mb-4">
              <input
                id="machine-option-3"
                type="radio"
                name="machines"
                value="Sublimation"
                className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="machine-option-3"
                className="block ml-2 text-2xl font-medium text-gray-900 dark:text-gray-300"
              >
                Sublimation
              </label>
            </div>
            <div className="flex items-center mb-4">
              <input
                id="machine-option-4"
                type="radio"
                name="machines"
                value="Stenciling"
                className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring:blue-300 dark:focus-ring-blue-600 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="machine-option-4"
                className="block ml-2 text-2xl  font-medium text-gray-900 dark:text-gray-300"
              >
                Stenciling
              </label>
            </div>
          </div>
        </fieldset>
        <div>
          <label
            className="block mb-2 text-2xl font-medium text-gray-900 dark:text-gray-300"
            htmlFor="image_print"
          >
            Upload image
          </label>
          <input
            className="block w-3/6 mb:w-full md:w-4/6 h-12 text-2xl text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            aria-describedby="image_print_help"
            id="image_print"
            type="file"
          />
          <div
            className="mt-1 text-2xl text-black dark:text-gray-300"
            id="image_print_help"
          >
            Please Provide with the image you want to be printed
          </div>
        </div>

        <button type="submit" className="lgbt primarybt mb:mt-10 mb:ml-32">
          Submit
        </button>
      </form>
    </div>
  );
};

export default PrinthtmlForm;
