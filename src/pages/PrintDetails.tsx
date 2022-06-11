import React, { FC } from "react";
import PrintingHead from "../components/PrintingHead.tsx";
import MachineTypes from "../components/MachineTypes.tsx";

const PrintDetails: FC = () => {
  return (
    <>
      <PrintingHead />
      <MachineTypes />
    </>
  );
};

export default PrintDetails;
