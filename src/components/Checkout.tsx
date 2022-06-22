import React, { FC } from "react";
import CheckoutItem from "./CheckoutItem.tsx";
import Navbar from "./Navbar.tsx";

const Checkout: FC = () => {
  return (
    <div className="relative  h-screen xl:h-[70rem] lg:h-[65rem] sm:h-[55rem] mb:h-[50rem] w-screen bg-no-repeat bg-center bg-cover">
      <Navbar />
      <div className="">
        <CheckoutItem />
      </div>
    </div>
  );
};

export default Checkout;
