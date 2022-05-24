import React from "react";

const CardColors = (props) => {
  return (
    <>
      <button
        className="cursor-pointer"
        onClick={() => props.setColorPick("red")}
      >
        <div className="mt-3 border-2 border-solid border-black bg-red-600 w-8 h-8">
          {props.colorPick === "red" && (
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
                d="M5 13l4 4L19 7"
              />
            </svg>
          )}
        </div>
      </button>
      <button
        className="cursor-pointer"
        onClick={() => props.setColorPick("blue")}
      >
        <div className="mt-3 border-2 border-solid border-black bg-blue-600 w-8 h-8">
          {props.colorPick === "blue" && (
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
                d="M5 13l4 4L19 7"
              />
            </svg>
          )}
        </div>
      </button>
      <button
        className="cursor-pointer"
        onClick={() => props.setColorPick("pink")}
      >
        <div className="mt-3 border-2 border-solid border-black bg-pink-600 w-8 h-8">
          {props.colorPick === "pink" && (
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
                d="M5 13l4 4L19 7"
              />
            </svg>
          )}
        </div>
      </button>
      <button
        className="cursor-pointer"
        onClick={() => props.setColorPick("black")}
      >
        <div className="mt-3 border-2 border-solid border-black bg-black w-8 h-8">
          {props.colorPick === "black" && (
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
                d="M5 13l4 4L19 7"
              />
            </svg>
          )}
        </div>
      </button>
      <button
        className="cursor-pointer"
        onClick={() => props.setColorPick("white")}
      >
        <div className="mt-3 border-2 border-solid border-black bg-white w-8 h-8">
          {props.colorPick === "white" && (
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
                d="M5 13l4 4L19 7"
              />
            </svg>
          )}
        </div>
      </button>
      <button
        className="cursor-pointer"
        onClick={() => props.setColorPick("yellow")}
      >
        <div className="mt-3 border-2 border-solid border-black bg-yellow-600 w-8 h-8">
          {props.colorPick === "yellow" && (
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
                d="M5 13l4 4L19 7"
              />
            </svg>
          )}
        </div>
      </button>
    </>
  );
};

export default CardColors;
