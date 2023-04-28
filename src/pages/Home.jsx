import React, { lazy, Suspense } from "react";

import {
    Navbar,
    Hero,
  } from "../components";

const Benefits = lazy(() => import("../components/Benefits"));
const Products = lazy(() => import("../components/Products"));
const About = lazy(() => import("../components/About"));
const Testimonials = lazy(() => import("../components/Testimonials"));
const Contact = lazy(() => import("../components/Contact"));
const Footer = lazy(() => import("../components/Footer"));

const Home = () => {
  return (
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
          <Suspense fallback={<div>Loading...</div>}>
            <Benefits />
          </Suspense>
        </div>
      </div>

      <div className="paddingX flexStart">
        <div className="boxWidth">
          <Suspense fallback={<div>Loading...</div>}>
            <Products />
          </Suspense>
        </div>
      </div>

      <div className="paddingX flexStart">
        <div className="boxWidth">
          <Suspense fallback={<div>Loading...</div>}>
            <About />
            <Testimonials />
            <Contact />
          </Suspense>
        </div>
      </div>

      <div className="paddingX flexStart">
        <div className="boxWidth">
          <Suspense fallback={<div>Loading...</div>}>
            <Footer />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default Home;
