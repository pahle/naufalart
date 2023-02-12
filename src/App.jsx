import React from "react";
import { Navbar, Hero, Benefits } from "./components";

const App = () => {
  return (
    <>
      <div className="bg-[#FFFCF9]/90 w-full overflow-hidden">
        <img
          src="./icons/lines.svg"
          alt="lines"
          className="absolute w-full h-full opacity-25 z-[-20] object-cover"
        />
        {/* <div className="absolute bottom-[-500px] -rotate-90 opacity-20 text-7xl">
          <h1 className="">Naufal Art</h1>
          <h1 className="-mt-5 opacity-50">
            Naufal Art
          </h1>
          <h1 className="-mt-5 opacity-25">
            Naufal Art
          </h1>
        </div> */}

        <div className="flexCenter">
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
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
