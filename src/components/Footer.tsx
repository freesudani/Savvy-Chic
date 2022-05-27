import React from "react";
import ImgLogo from "../images/logo_prev_ui.png";
import {
  AiFillFacebook,
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillYoutube,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className=" bg-black text-white p-5 h-[350px] md:h-[600px]">
      <div className="grid grid-cols-5 gap-y-4  sm:flex sm:justify-between sm:flex-col sm:items-center">
        <div className="col-span-3 flex flex-col justify-between items-baseline w-[650px] h-[80%] lg:w-[500px] md:w-[400px]">
          <div>
            <img src={ImgLogo} alt="Logo" className="w-40 md:w-32" />
          </div>
          <div>
            <h3 className="text-2xl md:text-xl sm:text-justify sm:pt-5 mb:px-5">
              Since 1957, GQ has inspired men to look sharper and live smarter
              with its unparalleled coverage of style, culture, and beyond. From
              award-winning writing and photography to binge-ready videos to
              electric live events, GQ meets millions of modern men where they
              live, creating the moments that create conversations.
            </h3>
          </div>
          <div className="flex justify-between items-center w-[350px] text-5xl py-10 mb:px-5">
            <div>
              <AiFillFacebook className="hover:text-primary-200 cursor-pointer" />
            </div>
            <div>
              <AiFillInstagram className="hover:text-primary-200 cursor-pointer" />
            </div>
            <div>
              <AiFillTwitterCircle className="hover:text-primary-200 cursor-pointer" />
            </div>
            <div>
              <AiFillYoutube className="hover:text-primary-200 cursor-pointer" />
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <h6 className="text-3xl py-8 md:text-2xl sm:px-10 mb:px-5">
            More From SC
          </h6>
          <ul className="text-2xl md:text-xl sm:flex sm:justify-between sm:items-center sm:w-screen sm:px-10 mb:px-5">
            <li className="py-3">About</li>
            <li className="py-3">Privacy</li>
            <li className="py-3">Fashion Shows</li>
            <li className="py-3">Partners</li>
            <li className="py-3">Coupons</li>
          </ul>
        </div>
        <div className="col-span-1">
          <h6 className="text-3xl py-8 md:text-2xl sm:px-10 mb:px-5">
            Contact SC
          </h6>
          <ul className="text-2xl md:text-xl sm:flex sm:justify-between sm:items-center sm:w-screen sm:px-10 mb-px-5">
            <li className="py-3">Public Relations</li>
            <li className="py-3">Subscription</li>
            <li className="py-3">Careers</li>
            <li className="py-3">Masthead</li>
          </ul>
        </div>
      </div>
      <div className="flex justify-center w-screen py-10 sm:pt-20">
        <h3>© 2022 Savvy Chic, Inc.</h3>
      </div>
    </div>
  );
};

export default Footer;
