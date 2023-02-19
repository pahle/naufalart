import React from "react";
import { benefits } from "../constants";

const Benefits = () => {
  return (
    <section id="benefits" className="paddingY flexCenter flex-col">
      <div className="w-full flex justify-center">
        <h1 className="text-7xl md:mb-14 mb-8">
          The Benefits of Naufal Art
        </h1>
        <p className="text-secondary text-xl">(02)</p>
      </div>
      <div className="flex md:flex-row flex-col gap-20">
        <div className="sectionImgReverse -md:hidden">
          <img
            src="./images/grid.png"
            alt="wood"
            className="h-[80vh] w-full object-cover rounded-lg"
          />
        </div>
        <div className="sectionInfo justify-center">
          {benefits.map((benefit, index) => (
            <div
            key={index}
              className={`flex flex-col h-full justify-center py-6 border-secondary ${
                index == benefits.length - 1
                  ? "border-b-0"
                  : "border-b-2"
              } `}
            >
              <div className="flex">
                <p className="text-secondary pr-2">
                  (0{index + 1})
                </p>
                <h1 className="text-4xl">
                  {benefit.title}
                </h1>
              </div>
              <p className="text-xl pt-4 text-justify">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
