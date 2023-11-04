import React from "react";
import { useState } from "react";
import { FaHamburger } from "react-icons/fa";

import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="fixed top-[-3px] left-0 right-0 z-20 bg-transparent h-[105px] bg-white  px-8 md:px-10 lg:px-16 flex items-center justify-between">
      <div className="text-black text-lg font-semibold flex items-center">
        <img
          className=" lg:w-[80.23px ] md:w-[80.23px] w-[60.23px] lg:h-[65.14px] md:-h-[65.14px] h-[45.14px]"
          src={require("../assets/Logo.png")}
          alt=""
        />
      </div>
      <div className="hidden md:flex space-x-10">
        <Link
          to="/"
          className=" hover:text-black text-[#0365F8] cursor-pointer no-underline transition-transform hover:scale-110 duration-300 ease-in"
        >
          Home
        </Link>
        <Link
          to="/about"
          className="text-black cursor-pointer hover:text-[#0365F8] no-underline transition-transform hover:scale-110 duration-300 ease-in"
        >
          About Us
        </Link>
        <Link
          to="/events"
          className="text-black cursor-pointer hover:text-[#0365F8] no-underline transition-transform hover:scale-110 duration-300 ease-in"
        >
          Events
        </Link>
        <Link
          to="/testimonials"
          className="text-black cursor-pointer hover:text-[#0365F8] no-underline transition-transform hover:scale-110 duration-300 ease-in"
        >
          Testimonials
        </Link>
      </div>
      <div>
        <Link className="px-5 py-2 lg:block md:block hidden rounded-md text-[#fff] bg-[#0365F8] no-underline transition-transform hover:scale-110 duration-300 ease-in">
          Create account
        </Link>
      </div>
      <div className="md:hidden">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-black focus:outline-none "
        >
          <FaHamburger />
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden absolute top-24 left-0 w-full bg-white p-4 space-y-8">
          <Link
            to="/"
            onClick={closeMenu}
            className=" block cursor-pointer no-underline hover:text-black text-[#0365F8] "
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={closeMenu}
            className="text-black block cursor-pointer no-underline hover:text-[#0365F8]"
          >
            About Us
          </Link>
          <Link
            to="/events"
            onClick={closeMenu}
            className="text-black block cursor-pointer no-underline hover:text-[#0365F8]"
          >
            Events
          </Link>
          <Link
            to="/testimonials"
            onClick={closeMenu}
            className="text-black block cursor-pointer no-underline hover:text-[#0365F8] "
          >
            Testimonials
          </Link>
          <Link
            onClick={closeMenu}
            className="px-4 py-2 lg:hidden grid justify-center font-bold md:hidden cursor-pointer  rounded-3xl text-[#fff] bg-[#0365F8]  no-underline transition-transform hover:scale-110 duration-300 ease-in"
          >
            Create account
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
