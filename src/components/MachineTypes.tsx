import React, { FC } from "react";
import PrintingMachineSpec from "./PrintingMachineSpec.tsx";
import { data } from "../data/PrintingMachines.ts";
import { MachinesProps } from "../models/types.types";

const MachineTypes: FC = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-1 justify-items-center  bg-type-bg h-min w-screen bg-no-repeat bg-cover bg-center p-5 mt-10 ">
      {data.map((machine: MachinesProps) => {
        return (
          <PrintingMachineSpec
            key={machine.id}
            title={machine.title}
            subtitle={machine.subtitle}
            details={machine.details}
            table={machine.table}
          />
        );
      })}
    </div>
  );
};

export default MachineTypes;
