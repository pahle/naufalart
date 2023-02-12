import React from "react";
import { Navbar, Hero, Benefits } from "./components";

const App = () => {
  return (
    <div className="bg-[#FFFCF9] w-full overflow-hidden">
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

      <div className="bg-white paddingX flexStart">
        <div className="boxWidth">
          <Benefits />
        </div>
      </div>
    </div>
  );
};

export default App;
