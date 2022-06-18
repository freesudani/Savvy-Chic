import React from "react";
import CartItem from "./CartItem.tsx";
import { useSelector } from "react-redux";

const Cart = ({ open, onClose }) => {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <div
      className={`fixed h-min z-10 inset-72 ml-[25rem] lg:ml-[7rem] md:ml-[0rem] md:inset-60 sm:inset-52 mb:inset-0 mb:mt-60 rounded-lg ${
        open ? "" : "pointer-events-none"
      }`}
    >
      <div
        className={`fixed inset-0 bg-black ${
          open ? "opacity-50" : "pointer-events-none opacity-0"
        }`}
        onClick={onClose}
      />
      <div
        className={`fixed  w-2/6 lg:w-3/6 md:w-4/6 mb:w-full bg-white shadow-lg  max-w-screen-sm p-10 ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        {cartItems.map((item) => (
          <CartItem
            key={item.id}
            item={{
              id: item.id,
              title: item.name,
              quantity: item.quantity,
              total: item.totalPrice,
              price: item.price,
              color: item.color,
              size: item.size,
            }}
          />
        ))}
        <div className="p-4 mr-4">
          <div className="flex justify-end items-center">
            <h1 className="mr-4 text-2xl">Total Price</h1>
            <h1 className="text-2xl text-red-600 bold">100$</h1>
          </div>
          <div className="flex justify-end items-center pt-4">
            <button className="smbt primarybt">Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
