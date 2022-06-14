import React, { FC } from "react";
import { MachinesProps } from "../models/types.types";

const PrintingMachineSpec: FC<MachinesProps> = (props) => {
  return (
    <div className="grid grid-cols-1 grid-rows-5 justify-items-center justify-center items-center gap-5 p-5 mt-10 w-[40rem] mb:w-[35rem] h-[45rem] border-4 border-black rounded-md">
      <div className="row-span-1 col-span-1">
        <h1 className="text-5xl text-white text-center">{props.title}</h1>
        <h2 className="text-3xl text-white text-center my-3">
          {props.subtitle}
        </h2>
      </div>
      <div className="row-span-3 col-span-1">
        <body className="text-2xl text-white text-justify">
          {props.details}
        </body>
      </div>
      <div className="row-span-1 col-span-1 mt-10">
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
              <td className="py-1 px-5 text-xl">{props.subtitle}</td>
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
