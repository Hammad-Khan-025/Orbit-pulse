import React from "react";

const ServiceBanner = ({ image, title, description }) => {
  return (
    <section className="relative">
      <img src={image} alt="" className="h-72 sm:h-auto object-cover w-full" />
      <div
        className={`bg-[#1D51A2B2] absolute bottom-4 sm:bottom-12 left-0 w-full text-white py-5 sm:py-8 shadow shadow-white`}
      >
        <div className="max-w-screen-xl mx-auto px-6 lg:ps-20">
          <h1 className="text-xl sm:text-[44px] font-semibold mb-3 font-bangla">
            {title}
          </h1>
          <p className="text-xs sm:text-base text-start">{description}</p>
        </div>
      </div>
    </section>
  );
};

export default ServiceBanner;
