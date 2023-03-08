import React from "react";
import {
  Navbar,
  Hero,
  Benefits,
  Products,
  About,
  Quality,
  Shipping,
  Products2
} from "./components";

const App = () => {
  return (
    <>
      <div className="bg-[#FFFCF9]/90 w-full overflow-hidden">
        <img
          src="./icons/lines.svg"
          alt="lines"
          className="absolute w-full h-full opacity-25 z-[-20] object-cover"
        />

        <div className="flexCenter md:paddingX">
          <div className="boxWidth">
            <Navbar />
          </div>
        </div>

        <div className="flexStart paddingX">
          <div className="boxWidth">
            <Hero />
          </div>
        </div>

        <div className="paddingX flexStart">
          <div className="boxWidth">
            <Benefits />
            {/* <Products /> */}
            <Products2 />
          </div>
        </div>

        <div className="paddingX flexStart">
          <div className="boxWidth relative overflow-hidden">
          <img
            src="./icons/lines.svg"
            alt="lines"
            className="absolute top-16 w-full h-[calc(100%-5vh)] opacity-25 z-[-20] object-cover -xl:hidden"
          />
            <About />
            <Quality />
            <Shipping />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
