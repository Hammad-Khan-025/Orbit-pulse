import React from 'react';
import logo from '../assets/orbitpulse-logo.png';

const Header = () => {
  return (
    <header className='flex justify-around items-center h-40 tracking-wider font-semibold'>
      <img src={logo} alt="OrbitPulse Logo" className='w-72' />
      <div className='flex items-center gap-32'>
        <ul className='flex gap-8 text-[#8D8D8D]'>
          <li>
            <button className='hover:text-[#FCB813] cursor-pointer relative before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-[#FCB813] before:transition-all before:duration-300 hover:before:w-full'>
              Home
            </button>
          </li>
          <li>
            <button className='hover:text-[#FCB813] cursor-pointer relative before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-[#FCB813] before:transition-all before:duration-300 hover:before:w-full'>
              About Us
            </button>
          </li>
          <li>
            <button className='hover:text-[#FCB813] cursor-pointer relative before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-[#FCB813] before:transition-all before:duration-300 hover:before:w-full'>
              Services
            </button>
          </li>
          <li>
            <button className='hover:text-[#FCB813] cursor-pointer relative before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-[#FCB813] before:transition-all before:duration-300 hover:before:w-full'>
              Contact Us
            </button>
          </li>
        </ul>
        <button className='bg-[#1D51A2] hover:bg-[#2E69D6] text-white px-4 py-2 rounded-2xl cursor-pointer'>Switching to OrbitPulse</button>
      </div>
    </header>
  );
};

export default Header;
