import React, { FC } from "react";
import ResultCard from "../components/ResultCard.tsx";
import { data } from "../data/StoreData.ts";

const Store: FC = () => {
  return (
    <div className="w-full min-h-fit mx-auto grid grid-cols-3 lg:grid-cols-2 sm:grid-cols-1 justify-center justify-items-center gap-y-8">
      {data.map((item) => (
        <ResultCard item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Store;
