import React, { FC } from "react";
import { MachinesProps } from "../models/types.types";

const PrintingMachineSpec: FC<MachinesProps> = (props) => {
  return (
    <div className="grid grid-cols-2 grid-rows-5 justify-items-center items-center gap-5 w-[60rem] h-[45rem]">
      <div className="row-span-5 col-span-1">
        <img
          src={props.image}
          alt={props.title}
          className="w-full h-full rounded-sm"
        />
      </div>
      <div className="row-span-1 col-span-1">
        <h1 className="text-5xl text-white">DTG</h1>
      </div>
      <div className="row-span-3 col-span-1">
        <body className="text-2xl text-white text-justify">
          {props.details}
        </body>
      </div>
      <div className="row-span-1 col-span-1">
        <table className="table-auto border-2 border-black">
          <thead className=" bg-secondary-200">
            <tr className="text-center">
              <th className="border-2 border-black p-2"> </th>
              <th className="border-2 border-black p-2">Quality</th>
              <th className="border-2 border-black p-2">Design Options</th>
              <th className="border-2 border-black p-2">Durability</th>
              <th className="border-2 border-black p-2">Complexity</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-center bg-secondary-100">
              <td className="py-1 px-5 text-xl">{props.title}</td>
              <td className="p-1">{props.table[0]}</td>
              <td className="p-1">{props.table[1]}</td>
              <td className="p-1">{props.table[2]}</td>
              <td className="p-1">{props.table[3]}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PrintingMachineSpec;
