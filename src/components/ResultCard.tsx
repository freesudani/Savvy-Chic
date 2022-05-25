import React, { useState } from "react";
import StarIcon from "./StarIcon.tsx";
import CardColors from "./CardColors.tsx";

const ResultCard = ({ item }) => {
  const [favPick, setFavPick] = useState(false);
  const [colorPick, setColorPick] = useState("");
  const [quantity, setQuantity] = useState(0);

  const favPickHandler = () => {
    setFavPick(!favPick);
  };

  const incrementHandler = () => {
    if (quantity > 19) {
      setQuantity(0);
    } else {
      setQuantity(quantity + 1);
    }
  };

  const decrementHandler = () => {
    if (quantity < 1) {
      setQuantity(20);
    } else {
      setQuantity(quantity - 1);
    }
  };

  const addToCartHandler = () => {
    console.log("Item added to Cart");
  };

  return (
    <div className="h-[520px] w-[350px] bg-white rounded-lg border-2 shadow-md">
      <div className="relative">
        <div>
          <img
            src={item.image}
            alt="product"
            className="overflow-hidden rounded-t-lg h-96 w-full"
          />
        </div>
        <div className="absolute top-4 left-4" onClick={favPickHandler}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10"
            viewBox="0 0 20 20"
            fill={`${!favPick ? "#FFFF" : "#dc2626"}`}
          >
            <path
              fill-rule="evenodd"
              d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
      </div>
      <div className="flex justify-around items-center mt-4">
        <h4 className="text-3xl uppercase">{item.title}</h4>
        <h4>
          <span className="text-2xl">{item.price}</span>
          $/pieace
        </h4>
      </div>

      <div className="flex justify-around items-center w-3/4 mt-7">
        <StarIcon rating={item.rating} />
        <h5>{item.numberofreviews} reviews</h5>
      </div>
      <div className="grid grid-cols-2 mt-5 mx-1">
        <div>
          <h6 className="text-2xl">Pick A Color</h6>
          <div className="grid grid-cols-3 gap-1 pr-8">
            <CardColors
              setColorPick={setColorPick}
              colorPick={colorPick}
              boxcolors={item.colors}
            />
          </div>
          <div className="flex justify-start items-center mt-5">
            <h6 className="text-2xl">Total Price</h6>
            <h6 className="text-4xl ml-3 ">{item.price * quantity}$</h6>
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
                onClick={decrementHandler}
                data-action="decrement"
                className=" bg-secondary-200 text-black  hover:bg-secondary-100 h-full w-20 rounded-l cursor-pointer outline-none  border-2 border-black border-solid"
              >
                <span className="m-auto text-2xl font-thin">−</span>
              </button>
              <input
                type="text"
                className="outline-none focus:outline-none text-center w-full bg-secondary-200 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-black"
                name="custom-input-number"
                value={`${quantity}`}
              />
              <button
                onClick={incrementHandler}
                data-action="increment"
                className="bg-secondary-200 text-black  hover:bg-secondary-100 h-full w-20 rounded-l cursor-pointer outline-none border-2 border-black border-solid"
              >
                <span className="m-auto text-2xl font-thin">+</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 mb-5 flex justify-center items-center ">
        {item.outofStock ? (
          <button className="primarybt mdbt opacity-50 cursor-not-allowed">
            Item Out Of Stock
          </button>
        ) : (
          <button className="primarybt mdbt" onClick={addToCartHandler}>
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default ResultCard;
