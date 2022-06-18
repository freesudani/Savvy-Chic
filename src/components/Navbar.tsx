import React, { FC, useState } from "react";
import { NavLink } from "react-router-dom";
import { data } from "../data/Navbardata.ts";
import { Links } from "../models/types.ts";
import { ArrangmentProps } from "../models/types.types";
import Cart from "./Cart.tsx";
import SignIn from "./SignIn.tsx";
import { useSelector } from "react-redux";

const Navbar: FC<ArrangmentProps> = (props) => {
  const [open, setOpen] = useState<boolean>(false);
  const [openCart, setOpenCart] = useState<boolean>(false);
  const cartQuantity = useSelector((state) => state.cart.totalQuantity);

  const closeHandler = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setOpen(false);
  };

  const closeCartHandler = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setOpenCart(false);
  };

  return (
    <>
      <div className="static w-screen h-32 m-0 px-8 bg-transparent text-black flex justify-end items-center">
        <div
          className="hidden md:block cursor-pointer ml-14 mt-14"
          onClick={() => props.setOpenSidebar(true)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-24 w-24"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>

        <nav className="flex px-8 justify-around md:hidden">
          {data.map((item: Links, i: number) => (
            <NavLink
              key={i}
              to={item.path}
              className={(navData) =>
                navData.isActive
                  ? "px-1 mx-3 text-xl uppercase border-b-2 border-primary-200 hover:border-primary-200 transition-all duration-300"
                  : "px-1 mx-3 text-xl uppercase border-b-2 border-transparent hover:border-primary-200 transition-all duration-300"
              }
            >
              {item.title}
            </NavLink>
          ))}
        </nav>
        <div className="flex px-4 items-center md:hidden ">
          <button
            className="px-4 outlinedbt smbt uppercase"
            onClick={() => setOpen(true)}
          >
            Sign In
          </button>
          <div
            className="relative px-5 cursor-pointer active:translate-y-1 transition-all duration-300 "
            onClick={() => setOpenCart(true)}
          >
            <div className="absolute top-0 right-2 bg-red-700 text-white rounded w-6 h-6 flex justify-center items-center">
              {cartQuantity}
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-14 w-14"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </div>
        </div>
        <SignIn open={open} onClose={closeHandler} />
        <Cart open={openCart} onClose={closeCartHandler} />
      </div>
    </>
  );
};

export default Navbar;
