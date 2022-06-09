import React, { FC } from "react";
import New from "../components/New.tsx";
import News from "../components/News.tsx";
import Sources from "../components/Sources.tsx";

const NewlyArrived: FC = () => {
  return (
    <>
      <New />
      <News />
      <Sources />
    </>
  );
};

export default NewlyArrived;
