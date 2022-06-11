import React, { FC } from "react";
import PrintingMachineSpec from "./PrintingMachineSpec.tsx";
import { data } from "../data/PrintingMachines.ts";
import { MachinesProps } from "../models/types.types";

const MachineTypes: FC = () => {
  return (
    <div className="grid grid-cols-2  bg-type-bg h-screen bg-no-repeat bg-cover bg-center p-5 mt-10">
      {data.map((machine: MachinesProps) => {
        return (
          <PrintingMachineSpec
            key={machine.id}
            title={machine.title}
            details={machine.details}
            table={machine.table}
            image={machine.image}
          />
        );
      })}
    </div>
  );
};

export default MachineTypes;
