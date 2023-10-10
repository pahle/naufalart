import React from "react";
import { contact } from "../constants";

const Contact = () => {
  return (
    <section
      id="contact"
      className="flex xl:flex-row flex-col items-center justify-between xl:gap-24 gap-12 paddingY"
    >
      <div className="w-1/3 -xl:w-full xl:text-right">
        <h1 className="xl:text-7xl text-5xl xl:mb-6 mb-10 -xl:text-center">
          Contact
          <br className="-xl:hidden" /> Us
        </h1>
        <ul className="flex flex-col xl:items-end items-start items gap-4 xl:text-right text-left">
          {contact.map((contact, index) => (
            <li key={index} className="flex -xl:flex-row-reverse items-center">
              <div>
                <div className="md:text-lg text-md text-secondary">
                  <p className="text-sm font-semibold">
                    {contact.name}
                  </p>
                  {contact.value}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="h-full">
        <img
          src="./images/maps.png"
          alt="map"
          className="xl:hidden block rounded-xl w-full"
        />
      </div>
      <div className="xl:w-5/6 w-full h-full border-2 border-secondary/50 rounded-xl flex flex-row items-center">
        <div className="h-full w-[80%] -ml-36 relative -xl:hidden">
          <a
            href="https://goo.gl/maps/jJPqdiyiXdfBELLc8"
            target="_blank"
          >
            <img
              src="./images/maps.png"
              alt="map"
              className="relative z-20 rounded-xl"
            />
          </a>
          <div className="w-full h-full bg-[#000103] absolute -bottom-4 -right-4 z-10 rounded-xl"></div>
        </div>
        <div className="w-full xl:p-12 p-6">
          <h1 className="xl:hidden block text-4xl text-center mb-6">
            Contact Form
          </h1>
          <form action="" className="flex flex-col gap-16">
            <input
              type="text"
              name=""
              id=""
              placeholder="Name"
              className="border-2 border-secondary/50 p-2 rounded-lg color"
            />
            <input
              type="text"
              name=""
              id=""
              placeholder="Email"
              className="border-2 border-secondary/50 p-2 rounded-lg color"
            />
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Message"
              className="border-2 border-secondary/50 p-2 rounded-lg color"
            ></textarea>
            <button
              type="submit"
              className="border-2 border-secondary/50 hover:border-secondary transition-all duration-500 rounded-lg w-1/4 self-center p-2"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
