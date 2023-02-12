import React from "react";

const Hero = () => {
  return (
    <section className="section sm:py-10 items-center gap-20">
      
      <div className="w-full flex flex-col text-start text-black">
        <div>
          <p className="md:text-xl text-lg text-secondary">
            Our Collection
          </p>
          <div className="flex flex-row">
            <h1 className="text-7xl my-5">
              Living with nature every day
            </h1>
            <p className="text-secondary text-xl">(01)</p>
          </div>
        </div>
        <a className="w-[150px]" href="#benefit">
          <div className="border-2 border-secondary rounded-lg p-2">
            <div className="border-2 border-secondary rounded-lg p-2 -mb-5 -mr-5">
              <p className="text-center text-secondary mb-3 mr-2">
                Get Started
              </p>
            </div>
          </div>
        </a>
        <img
          src="./icons/arrow1.svg"
          alt="arrow"
          className="w-20 absolute bottom-5 -md:hidden"
        />
      </div>
      <div className="w-full h-[80vh] rounded-xl overflow-hidden">
        <video
          src="./video/hero.MP4"
          className="w-[646px] h-full object-cover "
          autoPlay
          loop
          muted
        />
      </div>
    </section>
  );
};

export default Hero;
