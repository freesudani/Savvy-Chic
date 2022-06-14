import React, { FC } from "react";
import PrintingHead from "../components/PrintingHead.tsx";
import MachineTypes from "../components/MachineTypes.tsx";
import PrintForm from "../components/PrintForm.tsx";

const PrintDetails: FC = () => {
  return (
    <>
      <PrintingHead />
      <MachineTypes />
      <PrintForm />
    </>
  );
};

export default PrintDetails;
