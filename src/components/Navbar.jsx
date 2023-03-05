import { useState } from "react";

import { navLinks } from "../constants";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className={`w-full flex py-6 justify-between items-center -md:paddingX ${toggle ? "bg-primary" : "bg-transparent"
      }`}>
      <a href="/" className="flex flex-row justify-center items-center gap-4">
        <img
          src='./images/logo.png'
          alt="semnasif"
          className="2xl:w-10 w-8"
        />
        <h1 className="2xl:text-3xl text-3xl">Naufal Art</h1>
      </a>

      <ul className="list-none md:flex hidden justify-end items-center">
        {navLinks.map((nav, index) => (
          <li
            key={index}
            className={`cursor-pointer 2xl:text-lg hover:text-secondary transition-colors duration-300 ${index === navLinks.length - 1
              ? "mr-0"
              : "mr-10"
              }`}
          >
            <a href={`#${nav.link}`}>{nav.name}</a>
          </li>
        ))}
      </ul>
      

      <div className="md:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? './icons/close.svg' : './icons/menu.svg'}
          alt="menu"
          className="w-6 object-contain"
          onClick={() => setToggle((prev) => !prev)}
        />

        <div
          className={`${toggle ? " opacity-100" : "opacity-0"
            } flex p-6 bg-primary absolute -right-0 w-full my- min-w-[200px] justify-center ease-in-out transition-all duration-300 z-[10] top-[91px] shadow-lg`}
        >
          <ul className="list-none flex flex-col justify-end items-center">
            {navLinks.map((nav, index) => (
              <li
                key={index}
                className={`cursor-pointer text-lg ${index === navLinks.length - 1
                  ? "mr-0"
                  : "mb-4"
                  }`}
                onClick={() => setToggle((prev) => !prev)}
              >
                <a href={`#${nav.link}`}>{nav.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;