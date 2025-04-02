import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/homeImages/orbitpulse-logo.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const timeoutRef = useRef(null);

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setIsServicesDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsServicesDropdownOpen(false);
    }, 500);
  };

  return (
    <header className="flex justify-between items-center h-40 tracking-wider font-semibold px-6 lg:px-20 relative z-50 bg-white max-w-screen-xl mx-auto">
      {/* Logo */}
      <img src={logo} alt="OrbitPulse Logo" className="w-52 lg:w-72" />

      {/* Hamburger and Close Icon for Mobile */}
      <div
        className="text-3xl cursor-pointer lg:hidden"
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      >
        {isDropdownOpen ? <IoMdClose /> : <RxHamburgerMenu />}
      </div>

      {/* Navigation Menu */}
      <div className="hidden lg:flex items-center gap-32 relative">
        <ul className="flex gap-12 text-[#8D8D8D] items-center">
          <li>
            <Link
              to="/"
              className="hover:text-[#FCB813] cursor-pointer relative before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-[#FCB813] before:transition-all before:duration-300 hover:before:w-full"
            >
              Home
            </Link>
          </li>
          <li
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div
              className="flex items-center gap-2 cursor-pointer hover:text-[#FCB813]"
              onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
            >
              <span>Services</span>
              <span>
                {isServicesDropdownOpen ? (
                  <IoIosArrowDown />
                ) : (
                  <IoIosArrowForward />
                )}
              </span>
            </div>
            {/* Dropdown Box */}
            {isServicesDropdownOpen && (
              <div
                className="absolute top-10 left-1/2 transform -translate-x-1/2 mt-2 w-auto min-w-[12rem] sm:min-w-[16rem] lg:w-[50rem] bg-white shadow-[0px_0px_5px_rgba(0,0,0,0.1)] rounded-lg p-4 z-50"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 p-5 text-[#8D8D8D]">
                  {[
                    {
                      name: "IT Managed Services",
                      path: "/services/IT-managed-services",
                    },
                    {
                      name: "App Development",
                      path: "/services/IT-end-user-support",
                    },
                    { name: "SEO Optimization", path: "/services/seo" },
                    {
                      name: "End User IT Support",
                      path: "/services/IT-end-user-support",
                    },
                    {
                      name: "Graphic Design",
                      path: "/services/graphic-design",
                    },
                    {
                      name: "Content Writing",
                      path: "/services/content-writing",
                    },
                    {
                      name: "Cloud Solutions",
                      path: "/services/cloud-solutions",
                    },
                    { name: "IT Consulting", path: "/services/it-consulting" },
                    {
                      name: "Data Analytics",
                      path: "/services/data-analytics",
                    },
                  ].map(({ name, path }) => (
                    <li key={name}>
                      <Link
                        to={path}
                        className="hover:text-[#FCB813] cursor-pointer block"
                      >
                        {name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>
          <li>
            <Link
              to="/contact-us"
              className="hover:text-[#FCB813] cursor-pointer relative before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-[#FCB813] before:transition-all before:duration-300 hover:before:w-full"
            >
              Contact Us
            </Link>
          </li>
        </ul>
        <button className="bg-[#1D51A2] hover:bg-[#2E69D6] text-white px-4 py-2 rounded-2xl cursor-pointer">
          Switching to OrbitPulse
        </button>
      </div>

      {/* Dropdown Menu for Mobile */}
      <div
        className={`absolute top-full left-0 w-full bg-white shadow-md p-4 lg:hidden z-50 transform transition-transform duration-500 ${
          isDropdownOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-10 opacity-0 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col gap-4 text-[#8D8D8D] text-center">
          {[
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: "Contact Us", path: "/contact-us" },
          ].map(({ name, path }) => (
            <li key={name}>
              <Link
                to={path}
                className="hover:text-[#FCB813] cursor-pointer relative before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-[#FCB813] before:transition-all before:duration-300 hover:before:w-full"
                onClick={() => setIsDropdownOpen(false)}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex justify-center">
          <button className="mt-4 bg-[#1D51A2] hover:bg-[#2E69D6] text-white px-4 py-2 rounded-2xl cursor-pointer text-sm sm:text-base flex justify-center">
            Switching to OrbitPulse
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
