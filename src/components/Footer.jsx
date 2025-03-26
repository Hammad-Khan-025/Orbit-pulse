import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#3EA3DE] text-white py-14 px-6 mt-20 font-malayalam">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-32 mx-auto max-w-6xl">
        {/* Newsletter Section */}
        <div>
          <h3 className="mb-4 text-lg md:text-xl text-center sm:text-start">
            Join our newsletter to stay up to date on features and releases.
          </h3>
          <div className="flex items-center flex-wrap gap-4 space-x-2 my-5">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-full text-black bg-white focus:outline-none"
            />
            <button className="bg-[#F2C146] text-white px-6 py-4 rounded-full font-semibold hover:bg-yellow-500 cursor-pointer">
              Subscribe
            </button>
          </div>
          <p className="text-sm md:text-base">
            By subscribing you agree to with our{" "}
            <span className="underline">Privacy Policy</span> and provide
            consent to receive updates from our company.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col">
          <div className="flex flex-row justify-between text-lg">
            <h1>Navigation</h1>
            <h1 className="">Follow Us</h1>
          </div>
          <ul className="flex justify-between flex-wrap mt-6 gap-4 md:gap-0 text-sm md:text-base">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-10 border-t-[3px] border-white/30 pt-6 text-center max-w-6xl mx-auto flex flex-col-reverse md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <p className="text-sm md:text-base pt-8 sm:pt-0">
          © 2024 Orbitpulse365 Technologies Inc. All rights reserved.
        </p>
        <div className="flex space-x-6 text-sm md:text-base">
          <a href="#" className="hover:underline">
            Privacy
          </a>
          <a href="#" className="hover:underline">
            Terms of Service
          </a>
          <a href="#" className="hover:underline">
            Compliance
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
