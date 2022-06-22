import React, { useState, FC } from "react";
import StarIcon from "./StarIcon.tsx";
import CardColors from "./CardColors.tsx";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/CartSlice.ts";

const ResultCard: FC = ({ item }) => {
  const dispatch = useDispatch();
  const [favPick, setFavPick] = useState(false);
  const [colorPick, setColorPick] = useState("");
  const [quantity, setQuantity] = useState(0);

  const {
    title,
    price,
    rating,
    colors,
    numberofreviews,
    id,
    size,
    outofStock,
  } = item;

  const favPickHandler = () => {
    setFavPick(!favPick);
  };

  const addToCartHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id,
        title,
        price,
        size,
        colors: colorPick,
        outofStock,
      })
    );
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
        <h4 className="text-3xl uppercase">{title}</h4>
        <h4>
          <span className="text-2xl">{price}</span>
          $/pieace
        </h4>
      </div>

      <div className="flex justify-around items-center w-3/4 mt-7">
        <StarIcon rating={rating} />
        <h5>{numberofreviews} reviews</h5>
      </div>
      <div className="grid grid-cols-2 mt-5 mx-1">
        <div>
          <h6 className="text-2xl">Pick A Color</h6>
          <div className="grid grid-cols-3 gap-1 pr-8">
            <CardColors
              setColorPick={setColorPick}
              colorPick={colorPick}
              boxcolors={colors}
            />
          </div>
          <div className="flex justify-start items-center mt-5">
            <h6 className="text-2xl">Total Price</h6>
            <h6 className="text-4xl ml-3 ">{price * quantity}$</h6>
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
