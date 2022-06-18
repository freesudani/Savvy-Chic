import React from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/CartSlice.ts";

const CartItem = (props) => {
  const dispatch = useDispatch();

  const { title, quantity, total, price, id, color, size } = props.item;

  const removeItemHandler = () => {
    dispatch(cartActions.removeItemFromCart(id));
  };

  const addItemHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id,
        title,
        price,
        size,
        color,
      })
    );
  };

  const deleteItemFromCart = () => {
    dispatch(cartActions.deleteItemFromCart(id));
  };

  return (
    <div className="flex justify-between items-center pb-5 border-b-4">
      <div>
        <h1 className="text-4xl uppercase">{title}</h1>
      </div>

      <div className="flex flex-col justify-center items-center">
        <body className="text-xl">{color}</body>
        <body className="text-xl">{size}</body>
      </div>

      <div>
        <h2 className="text-2xl border-2 p-3">{quantity}</h2>
      </div>

      <div className="flex flex-col justify-center items-center">
        <button onClick={addItemHandler}>
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
              d="M5 15l7-7 7 7"
            />
          </svg>
        </button>
        <button onClick={removeItemHandler}>
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
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      </div>
      <div>
        <button
          className="smbt bg-red-600 text-white rounded-lg uppercase hover:bg-red-400 transition-all duration-300"
          onClick={deleteItemFromCart}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;
