import React from "react";

const ServiceCard = ({ title, description }) => {
  return (
    <div className="bg-[#F4F4F4] shadow-md rounded-tl-4xl rounded-br-4xl p-6 text-center w-full sm:w-[23rem] flex flex-col pt-32 px-8 sm:px-12">
      <h3 className="text-xl font-bold text-[#00BDFF] mb-4">{title}</h3>
      <p className="text-gray-700 mb-6">{description}</p>
      <button className="mt-6 sm:self-end mx-auto sm:mx-0 bg-[#F0B138] text-white font-semibold px-4 py-1 rounded-full hover:bg-yellow-500 cursor-pointer text-sm">
        Learn More
      </button>
    </div>
  );
};

export default ServiceCard;
