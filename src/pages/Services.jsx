import React, { useState } from "react";
import mainImage from "../assets/servicesImages/mainImage.png";
import keyOfferingImage from "../assets/servicesImages/keyOfferingImage.png";
import image1 from "../assets/servicesImages/image1.png";
import image2 from "../assets/servicesImages/image2.png";

const Services = () => {
  const onboardingSteps = [
    {
      step: "Step 1",
      title: "Commencement of the Project",
      description:
        "Providing responsive and reliable IT assistance to empower users in their daily tasks. From troubleshooting to setup, we ensure seamless tech experiences for enhanced productivity.",
    },
    {
      step: "Step 2",
      title: "Sharing Knowledge",
      description:
        "Providing responsive and reliable IT assistance to empower users in their daily tasks. From troubleshooting to setup, we ensure seamless tech experiences for enhanced productivity.",
    },
    {
      step: "Step 3",
      title: "Interim Support",
      description:
        "Providing responsive and reliable IT assistance to empower users in their daily tasks. From troubleshooting to setup, we ensure seamless tech experiences for enhanced productivity.",
    },
    {
      step: "Step 4",
      title: "Delivery",
      description:
        "Providing responsive and reliable IT assistance to empower users in their daily tasks. From troubleshooting to setup, we ensure seamless tech experiences for enhanced productivity.",
    },
  ];

  const questions = [
    {
      title: "Easy Setup",
      description: "Get started quickly with a simple 4 steps process.",
    },
    {
      title: "Monitor and Optimize",
      description: "Keep track of performance and make adjustments.",
    },
    {
      title: "Monitor and Optimize",
      description: "Keep track of performance and make adjustments.",
    },
    {
      title: "Easy Setup",
      description: "Get started quickly with a simple 4 steps process.",
    },
    {
      title: "Monitor and Optimize",
      description: "Keep track of performance and make adjustments.",
    },
    {
      title: "Monitor and Optimize",
      description: "Keep track of performance and make adjustments.",
    },
    {
      title: "Easy Setup",
      description: "Get started quickly with a simple 4 steps process.",
    },
    {
      title: "Monitor and Optimize",
      description: "Keep track of performance and make adjustments.",
    },
    {
      title: "Monitor and Optimize",
      description: "Keep track of performance and make adjustments.",
    },
  ];

  const servicesLeft = [
    "24/7/365 IT Helpdesk",
    "Global Coverage in 190 Countries",
    "IT Remote Hands",
    "IT Staff Augmentation",
    "IT Asset Disposition (ITAD)",
    "Infrastructure Management",
    "One Stop Shop For Network, Storage & Server Deals",
  ];

  const servicesRight = [
    "Next-Gen Data Center Support & Management",
    "Consulting, IT Leadership & Management",
    "Proactive Risk Management And Risk Mitigation",
    "Unmatched Reliability And Unmatched Experience",
    "Ekahau, Wireless Surveys as a Service (WsaaS)",
    "Global Warehousing And Inventory Management",
    "Ensuring your IT systems are always optimized",
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <article>
      {/* Header section */}
      <section className="relative">
        <img src={mainImage} alt="" className="h-72 sm:h-auto object-cover" />
        <div className="bg-[#1D51A2B2] absolute bottom-4 sm:bottom-12 left-0 w-full text-white py-5 sm:py-8 shadow shadow-white px-5 flex justify-center">
          <div>
            <h1 className="text-xl sm:text-[44px] font-semibold mb-3 font-bangla">
              IT MANAGED SERVICE
            </h1>
            <p className="text-xs sm:text-base">
              One stop shop for all your IT problems and reliable partner in
              managing your service requests through 24/7 accessible team of
              experts.
            </p>
          </div>
        </div>
      </section>

      {/* onboarding process */}
      <section className="flex justify-center mx-5">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-[#047BAF] text-center my-10 sm:my-14">
            Our Simple Onboarding Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 sm:gap-6 place-items-center items-stretch">
            {onboardingSteps.map((service, index) => (
              <div className="bg-[#F4F4F4] shadow-md rounded-tl-4xl rounded-br-4xl p-6  w-full sm:max-w-[19rem] flex flex-col pt-20 px-8 sm:px-12">
                <h1 className="text-[#F0B138] mb-2 font-semibold">
                  {service.step}
                </h1>
                <h3 className="text-xl font-bold text-[#047BAF] mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-700 mb-6">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* key offering section */}
      <section className="relative">
        <h2 className="text-2xl md:text-3xl font-bold text-[#047BAF] text-center my-12 sm:my-18">
          Key Offerings
        </h2>
        <img src={image1} alt="" className="h-auto w-full sm:hidden" />
        <img src={image2} alt="" className="h-auto w-full sm:hidden" />
        <img
          src={keyOfferingImage}
          alt=""
          className="h-72 sm:h-auto object-cover hidden sm:block"
        />
        <div className="bg-[#1D51A2B2] absolute bottom-16 sm:bottom-10 left-0 w-full text-white py-14 shadow shadow-white px-5 flex flex-col sm:flex-row justify-center gap-5 sm:gap-16 text-sm">
          {/* Left List */}
          <ul className="space-y-5 sm:space-y-4">
            {servicesLeft.map((service, index) => (
              <li key={index} className="flex items-start">
                <span className="mr-2">•</span>
                <span>{service}</span>
              </li>
            ))}
          </ul>

          {/* Right List */}
          <ul className="space-y-2 sm:space-y-4">
            {servicesRight.map((service, index) => (
              <li key={index} className="flex items-start">
                <span className="mr-2">•</span>
                <span>{service}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Questions section */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-x-8 px-5 sm:px-20 pt-12 sm:pt-20 -mb-6 sm:-mb-0">
        {questions.map((item, index) => (
          <div key={index} className="border-b pb-4">
            <div className="flex items-center justify-between">
              <h3 className="text-md font-semibold">{item.title}</h3>
              <button
                className="w-8 h-8 flex items-center justify-center border rounded-full cursor-pointer hover:bg-gray-100"
                onClick={() => toggleAccordion(index)}
              >
                <span className="text-gray-500 text-xl font-bold">
                  {activeIndex === index ? "-" : "+"}
                </span>
              </button>
            </div>
            {activeIndex === index && (
              <p className="mt-2 text-sm text-gray-600">{item.description}</p>
            )}
          </div>
        ))}
      </section>
    </article>
  );
};

export default Services;
