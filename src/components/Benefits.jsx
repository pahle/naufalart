import React from "react";
import { benefits } from "../constants";

const Benefits = () => {
  return (
    <section id="benefit" className="paddingY flexCenter flex-col md:h-screen">
      <div className="w-full flex justify-center">
        <h1 className="text-7xl my-5">
          The Benefits of Naufal Art
        </h1>
        <p className="text-secondary text-xl">(02)</p>
      </div>
      <div className="flex md:flex-row flex-col gap-20">
        <div className="sectionImgReverse -md:hidden">
          <img
            src="./images/wood.jpg"
            alt="wood"
            className="h-[80vh] w-full object-cover rounded-lg"
          />
        </div>
        <div className="sectionInfo justify-center">
          {benefits.map((benefit, index) => (
            <div
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
