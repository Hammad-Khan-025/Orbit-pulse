import React, { useState } from "react";
import mainImage from "../../assets/servicesImages/IT-managed-services/IT-managed-services-img.png";
import keyOfferingImage from "../../assets/servicesImages/IT-managed-services/keyOfferingImage.png";
import image1 from "../../assets/servicesImages/IT-managed-services/image1.png";
import image2 from "../../assets/servicesImages/IT-managed-services/image2.png";
import ITimage from "../../assets/servicesImages/IT-managed-services/IT-service-benefits-img.png";
import ITimageMobile from "../../assets/servicesImages/IT-managed-services/IT-benefits-mobile-img.png";
import BorderLine from "../../components/BorderLine";

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
      description:
        "Get started quickly with a simple 4 steps process.",
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
    setActiveIndex(activeIndex === index ? null : index);
  };

  const columns = [[], [], []];
  questions.forEach((item, index) => {
    columns[index % 3].push({ ...item, originalIndex: index });
  });

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

      {/* Manage IT services section */}
      <section className="flex flex-col lg:flex-row items-center justify-center gap-6 px-6 lg:px-16 py-10">
        {/* Left Content */}
        <div className="max-w-[30rem] text-center lg:text-left">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-[600] text-[#FCB813] mb-4 font-kannada text-center">
            BENEFITS OF MANAGED <br /> IT SERVICES
          </h2>
          <p className="text-[#5E5E5E] mb-4">
            At IP Global, we understand the transformative power of managed
            services. Our offerings ensure businesses operate at their peak,
            liberating them from the intricacies of IT management.
          </p>
          <p className="text-[#047BAF] mb-4 font-semibold">
            By choosing Orbit Pulse 365 managed services, companies can direct
            their energies to core objectives, knowing their IT infrastructure
            is in expert hands.
          </p>
          <p className="text-[#5E5E5E] mb-4">
            We offer a cost-efficient solution that eliminates the need for
            extensive in-house IT teams and mitigates unforeseen expenses.
            <br />
            <br />
            With our 24/7 support, businesses can enjoy unwavering uptime,
            fortified data security, and the guarantee of swift issue
            resolution. Partnering with IP Global is a strategic step towards
            unparalleled operational excellence.
          </p>
        </div>

        {/* Right Content - Placeholder for Image */}
        <div className="mt-8 lg:mt-0 lg:ml-8">
          <img
            src={ITimage}
            alt="Benefits of Managed IT Services"
            className="w-full max-w-lg hidden sm:block"
          />
          <img
            src={ITimageMobile}
            alt="Benefits of Managed IT Services"
            className="w-full max-w-lg sm:hidden"
          />
        </div>
      </section>

      <BorderLine/>

      {/* onboarding process */}
      <section className="flex justify-center mx-5">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-[#047BAF] text-center my-10 sm:my-14">
            Our Simple Onboarding Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 sm:gap-6 place-items-center items-stretch">
            {onboardingSteps.map((service, index) => (
              <div className="group flex flex-col w-full sm:max-w-[19rem] h-full">
                <div className="bg-[#F4F4F4] shadow-md rounded-tl-4xl rounded-br-4xl p-6 flex flex-col flex-1 pt-20 px-8 sm:px-12 transition-all duration-300 transform group-hover:-translate-y-2 group-hover:bg-[#047BAF]">
                  <h1 className="text-[#F0B138] mb-2 font-semibold">
                    {service.step}
                  </h1>
                  <h3 className="text-xl font-bold text-[#047BAF] mb-4 group-hover:text-white">
                    {service.title}
                  </h3>
                  <p className="text-gray-700 mb-6 group-hover:text-white">
                    {service.description}
                  </p>
                </div>
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
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 px-5 sm:px-20 py-12 sm:py-20">
        {columns.map((column, colIndex) => (
          <div key={colIndex} className="space-y-6">
            {column.map((item) => (
              <div key={item.originalIndex} className="border-b pb-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-md font-semibold">{item.title}</h3>
                  <button
                    className="w-8 h-8 flex items-center justify-center border rounded-full cursor-pointer hover:bg-gray-100"
                    onClick={() => toggleAccordion(item.originalIndex)}
                  >
                    <span className="text-gray-500 text-xl font-bold">
                      {activeIndex === item.originalIndex ? "-" : "+"}
                    </span>
                  </button>
                </div>
                {activeIndex === item.originalIndex && (
                  <p className="mt-2 text-sm text-gray-600">
                    {item.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        ))}
      </section>
    </article>
  );
};

export default Services;
