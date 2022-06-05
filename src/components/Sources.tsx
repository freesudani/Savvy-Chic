import React, { FC } from "react";
import AdidasIcon from "../images/adidas.svg";
import ArmaniIcon from "../images/armani.svg";
import DieselIcon from "../images/diesel.svg";
import FilaIcon from "../images/fila.svg";
import GucciIcon from "../images/gucci.svg";
import LacosteIcon from "../images/lacoste.svg";
import LeviIcon from "../images/levi.svg";
import NikeIcon from "../images/nike.svg";
import PumaIcon from "../images/puma.svg";
import TommyIcon from "../images/tommy.svg";

const Sources: FC = () => {
  return (
    <div className="mx-10 my-10  bg-sources-bg bg-cover bg-center bg-fixed h-[40rem] grid grid-cols-5 grid-rows-2 justify-center items-center justify-items-center md:h-[80rem] md:grid-cols-3 md:grid-rows-4 mb:grid-cols-2 mb:grid-rows-5 mb:h-[100rem] mb:mx-1">
      <div>
        <img src={AdidasIcon} alt="Adidas" />
      </div>

      <div>
        <img src={ArmaniIcon} alt="Armani" />
      </div>
      <div>
        <img src={DieselIcon} alt="Diesel" />
      </div>
      <div>
        <img src={FilaIcon} alt="Fila" />
      </div>
      <div>
        <img src={GucciIcon} alt="Gucci" />
      </div>
      <div>
        <img src={LacosteIcon} alt="Lacoste" />
      </div>
      <div>
        <img src={LeviIcon} alt="Levi" />
      </div>
      <div>
        <img src={NikeIcon} alt="Nike" />
      </div>
      <div>
        <img src={PumaIcon} alt="Puma" />
      </div>
      <div>
        <img src={TommyIcon} alt="Tommy" />
      </div>
    </div>
  );
};

export default Sources;
