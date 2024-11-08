import React from "react";

import {
  Navbar,
  Hero,
  Benefits,
  Products,
  About,
  Testimonials,
  Contact,
  Footer,
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
          </div>
        </div>

        <div className="paddingX flexStart">
          <div className="boxWidth">
            <Products />
          </div>
        </div>

        <div className="paddingX flexStart">
          <div className="boxWidth">
            <About />
            <Testimonials />
            <Contact />
          </div>
        </div>

        <div className="paddingX flexStart">
          <div className="boxWidth">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
