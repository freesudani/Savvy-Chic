import React from "react";
import Section from "./Section.tsx";
import { data } from "../data/Sectiondata.ts";

interface itemProps {
  id: number;
  title: string;
  image: string;
  path: string;
}

const Sections = () => {
  return (
    <div className=" w-screen h-fit bg-sections-bg bg-no-repeat bg-cover bg-center p-10">
      <div className="grid grid-cols-4 md:grid-cols-2 mb:grid-cols-1 grid-rows-2 md:grid-rows-4 mb:grid-rows-8 gap-5 justify-center item-center justify-items-center">
        {data.map((item: itemProps) => {
          return (
            <Section
              key={item.id}
              title={item.title}
              image={item.image}
              path={item.path}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Sections;
