import React, { useState } from 'react';
import logo from '../assets/orbitpulse-logo.png';
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io"; // Import Close Icon

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <header className="flex justify-between items-center h-40 tracking-wider font-semibold px-6 lg:px-20 relative z-50 bg-white">
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
      <div className="hidden lg:flex items-center gap-32">
        <ul className="flex gap-8 text-[#8D8D8D]">
          {['Home', 'About Us', 'Services', 'Contact Us'].map((item) => (
            <li key={item}>
              <button className="hover:text-[#FCB813] cursor-pointer relative before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-[#FCB813] before:transition-all before:duration-300 hover:before:w-full">
                {item}
              </button>
            </li>
          ))}
        </ul>
        <button className="bg-[#1D51A2] hover:bg-[#2E69D6] text-white px-4 py-2 rounded-2xl cursor-pointer">
          Switching to OrbitPulse
        </button>
      </div>

      {/* Dropdown Menu for Mobile */}
      <div
        className={`absolute top-full left-0 w-full bg-white shadow-md p-4 lg:hidden z-50 transform transition-transform duration-500 ${
          isDropdownOpen ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0 pointer-events-none'
        }`}
      >
        <ul className="flex flex-col gap-4 text-[#8D8D8D] text-center">
          {['Home', 'About Us', 'Services', 'Contact Us'].map((item) => (
            <li key={item}>
              <button className="hover:text-[#FCB813] cursor-pointer relative before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-[#FCB813] before:transition-all before:duration-300 hover:before:w-full">
                {item}
              </button>
            </li>
          ))}
        </ul>
        <button className="mt-4 bg-[#1D51A2] hover:bg-[#2E69D6] text-white w-full py-2 rounded-2xl cursor-pointer">
          Switching to OrbitPulse
        </button>
      </div>
    </header>
  );
};

export default Header;
