import React from "react";

const Hero = () => {
  return (
    <section className="section 2xl:py-10 py-6 items-center md:gap-20 gap-12 relative">
      <div className="w-full flex flex-col text-start text-black">
        <div>
          <p className="md:text-xl text-lg text-secondary">
            Our Collection
          </p>
            <h1 className="text-7xl my-5">
              Living with nature every day
            </h1>
        </div>
        <a className="w-[150px]" href="#benefits">
          <div className="border-2 border-secondary rounded-lg p-2">
            <div className="border-2 border-secondary rounded-lg p-2 -mb-5 -mr-5">
              <p className="text-center mb-3 mr-2">
                Get Started
              </p>
            </div>
          </div>
        </a>
        <img
          src="./icons/arrow1.svg"
          alt="arrow"
          className="w-20 absolute xl:bottom-2 2xl:bottom-8 -xl:hidden -left-6"
        />
      </div>
      <div className="w-full xl:h-[80vh] h-[75vh] overflow- relative">
        <video
          src="./video/hero.mp4"
          className="w-[646px] h-full object-cover rounded-xl"
          autoPlay
          loop
          muted
        />
      </div>
    </section>
  );
};

export default Hero;
