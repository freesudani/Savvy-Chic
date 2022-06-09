import React, { FC } from "react";
import { CardColorProps } from "../models/types.types";

const CardColors: FC<CardColorProps> = (props) => {
  return (
    <>
      {props.boxcolors.map((col, i) => (
        <button
          className="cursor-pointer"
          onClick={() => props.setColorPick(col)}
          key={i}
        >
          <div
            className={`mt-3 border-2 border-solid border-black ${col} w-8 h-8`}
          >
            {props.colorPick === col && (
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
      ))}
    </>
  );
};

export default CardColors;
