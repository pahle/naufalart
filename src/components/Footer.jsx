import React from "react";

const Footer = () => {
  return (
    <section className="sm:pt-16 pt-16 pb-6 flex md:flex-row flex-col-reverse gap-10 justify-between items-center -md:text-center">
      <div>
        <h1 className="md:text-7xl text-6xl mb-4">
          Naufal Art
        </h1>
        <p className="md:text-lg">
          &copy; Naufal Art - 2023 - All Rights Reserved
        </p>
      </div>
      <div className="flex items-center md:gap-10 gap-5 -md:hidden">
        <h3 className="text-lg">Ready to get started?</h3>
        <div className="w-[120px] -md:mr-3">
          <div className="border-2 border-secondary rounded-lg p-2">
            <div className="border-2 border-secondary rounded-lg p-2 -mb-5 -mr-5">
              <a href="https://wa.me/+6285319640735" target="_blank">
                <p className="text-center mb-3 mr-2 ">
                  Let's Talk
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
