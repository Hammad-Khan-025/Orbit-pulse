import React, { useEffect, useRef, useState } from "react";
import mainImage from "../../assets/servicesImages/IT-outsourcing/mainImage.png";
import clockImage from "../../assets/servicesImages/IT-outsourcing/clockImage.png";
import icon1 from "../../assets/servicesImages/IT-outsourcing/icon1.png";
import icon2 from "../../assets/servicesImages/IT-outsourcing/icon2.png";
import icon3 from "../../assets/servicesImages/IT-outsourcing/icon3.png";
import icon4 from "../../assets/servicesImages/IT-outsourcing/icon4.png";
import icon5 from "../../assets/servicesImages/IT-outsourcing/icon5.png";
import icon6 from "../../assets/servicesImages/IT-outsourcing/icon6.png";
import icon7 from "../../assets/servicesImages/IT-outsourcing/icon7.png";
import icon8 from "../../assets/servicesImages/IT-outsourcing/icon8.png";
import icon9 from "../../assets/servicesImages/IT-outsourcing/icon9.png";
import icon10 from "../../assets/servicesImages/IT-outsourcing/icon10.png";
import talentPool from "../../assets/servicesImages/IT-outsourcing/talentPool.png";
import ServiceBanner from "../../components/ServicesBanner";
import BorderLine from "../../components/BorderLine";

const ITOutsourcing = () => {

  const clockImageRef = useRef(null);
const [clockInView, setClockInView] = useState(false);

useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      setClockInView(entry.isIntersecting);
    },
    { threshold: 0.4 }
  );

  const current = clockImageRef.current;
  if (current) observer.observe(current);

  return () => {
    if (current) observer.unobserve(current);
  };
}, []);
 
  const services = [
    {
      img: icon1,
      title: "Software and Application Development",
    },
    {
      img: icon2,
      title: "Infrastructure Solution",
    },
    {
      img: icon3,
      title: "Website/Application Maintenance or Management",
    },
    {
      img: icon4,
      title: "Database Development and Management",
    },
    {
      img: icon5,
      title: "Telecommunications",
    },
    {
      img: icon6,
      title: "Technical Support",
    },
  ];

  const outsourcingModels = [
    {
      title: "Staff Augmentation",
      description:
        "It is a strategy for filling skill gaps that allows businesses to hire top-level specialists for short- or long-term projects while also being able to avoid the costs of hiring new full-time workers.",
      image: icon7,
    },
    {
      title: "Project-Based Outsourcing",
      description:
        "Clients refer to project outsourcing meaning that they would like to partner with vendors that have exclusive expertise that is lacking in-house and delegate a part of functions to them.",
      image: icon8,
    },
    {
      title: "Staff Augmentation",
      description:
        "Clients who are interested in long term co-operation because their projects require a significant volume of work. Within the dedicated team model, the vendor provides you with full time staff required to complete your project.",
      image: icon9,
    },
    {
      title: "Offshore Development Center (ODC)",
      description:
        "It is a strategy for filling skill gaps that allows businesses to hire top-level specialists for short- or long-term projects while also being able to avoid the costs of hiring new full-time workers.",
      image: icon10,
    },
  ];

  const features = [
    "Flexibility",
    "Predictable costs",
    "Predictable timing",
    "Potential risks included in price",
    "Long-term cooperation",
    "Personal interviews with developers",
    "Direct communication with developers",
    "High developer commitment",
  ];

  const contractTypes = [
    {
      name: "Time and Materials",
      values: [true, false, false, true, false, false, false, true],
    },
    {
      name: "Fixed Price",
      values: [false, true, true, true, false, false, false, true],
    },
    {
      name: "Rate Card",
      values: [true, true, false, false, true, true, true, true],
    },
    {
      name: "Cost+",
      values: [true, true, true, false, true, true, true, true],
    },
  ];
  return (
    <article>
      {/* Banner section */}
      <ServiceBanner
        image={mainImage}
        title="IT Outsourcing"
        description="Providing Subject Matter Experts and large support teams to effectively deliver your 
            d2d business processes."
      />

      <section className="max-w-5xl mx-auto px-6 lg:ps-20 pt-10 sm:pt-14">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-[600] text-[#FCB813] font-kannada text-center mb-6 sm:mb-10">
          ROUND THE CLOCK IT OUTSOURCING
        </h1>
        <p className="text-[#5E5E5E]">
          Whether it is Nearshoring, offshoring or onshoring all types of
          outsourcing have one thing in common, they involve hiring a third
          party outside of a company to handle certain business activities.
          <br /> <br />
          At IP GLOBAL we provide round the clock IT outsourcing service to
          businesses.
          <br /> <br />
          Your business will function round the clock thanks to the time
          difference between the in-house global team and the outsourcing
          vendor’s team.
        </p>
        <img
  ref={clockImageRef}
  src={clockImage}
  alt="Clock"
  className={`w-[45rem] mx-auto pt-5 transition-all duration-700 ease-out 
    ${clockInView ? "sm:opacity-100 sm:translate-x-0" : "sm:opacity-0 sm:translate-x-80"}`}
/>

      </section>

      <div className="mt-8 px-5 max-w-4xl mx-auto">
        <BorderLine />
      </div>

      <section className="py-12 pt-5 px-4 text-center">
        <h2 className="text-xl md:text-3xl font-semibold text-[#047BAF] mb-5">
          IT Outsourcing Services That We Offer
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto mb-12">
          IT outsourcing is beneficial to you as an organization because you get
          access to high quality services at better prices. Furthermore, you
          also have access to better skills.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-10 max-w-5xl mx-auto">
          {services.map((service, index) => {
            const isHighlighted = index % 2 === 0; // index 0, 2, 4 → cards 1, 3, 5

            return (
              <div
                key={index}
                className={`${
                  isHighlighted ? "bg-[#3EA3DE4D]" : "bg-[#F4F4F4]"
                } p-6 rounded-tl-4xl rounded-br-4xl hover:shadow-lg hover:scale-105 transition duration-300 flex flex-col items-center justify-center sm:justify-start h-full`}
              >
                <img
                  src={service.img}
                  alt={service.title}
                  className="h-24 w-24 object-contain"
                />
                <p className="mt-4 text-gray-800 font-medium text-center">
                  {service.title}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* border line */}
      <div className="max-w-5xl mx-auto mt-14 hidden sm:block">
        <hr className="  border border-gray-300 " />
      </div>

      <div className="sm:hidden px-5">
        <BorderLine />
      </div>

      <section className="py-6 sm:py-10 px-4 max-w-7xl mx-auto">
        <h2 className="text-xl sm:text-3xl font-semibold text-center mb-10 text-[#047BAF]">
          IT Outsourcing Models
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {outsourcingModels.map((model, index) => (
            <div
              key={index}
              className="group flex flex-col h-full  border-[#8D8D8D] rounded-tl-2xl transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="flex justify-center items-center py-10 border border-b-0 border-[#8D8D8D] rounded-tl-3xl">
                <img
                  src={model.image}
                  alt={model.title}
                  className="w-32 h-32 bg-[#D9D9D9] rounded-full p-3 transition-transform duration-500 group-hover:scale-115"
                />
              </div>
              <div className="border-l border-[#8D8D8D] flex h-full">
                <div className="flex-grow flex flex-col bg-[#3EA3DE]  text-white p-6 sm:p-8 rounded-tl-3xl rounded-br-3xl">
                  <h3 className="text-lg font-bold mb-2">{model.title}</h3>
                  <p className="text-sm leading-7 mt-auto">
                    {model.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="pt-5 max-w-7xl mx-auto overflow-x-auto">
        <table className="w-full min-w-[750px] border-separate border-spacing-3 sm:border-spacing-5 table-fixed text-sm">
          <colgroup>
            <col className="w-[32%]" />
            <col className="w-[17%]" />
            <col className="w-[17%]" />
            <col className="w-[17%]" />
            <col className="w-[17%]" />
          </colgroup>
          <thead>
            <tr>
              <th className="bg-[#F9B000] text-black text-center font-semibold px-4 py-4 rounded-tl-xl">
                Contract Type
              </th>
              {contractTypes.map((type, idx) => (
                <th
                  key={idx}
                  className="bg-[#F9B000] text-black font-semibold px-4 py-4 text-center"
                >
                  {type.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {features.map((feature, i) => (
              <tr key={i}>
                <td className="bg-[#E5E5E5] px-4 py-2 font-medium text-gray-800 hover:scale-105 transition-transform duration-300">
                  {feature}
                </td>
                {contractTypes.map((type, j) => {
                  const isChecked = type.values[i];
                  return (
                    <td
                      key={j}
                      className={`${
                        isChecked ? "bg-[#3EA3DE]" : "bg-[#FCB813]"
                      } text-center px-4 py-2 text-white text-lg sm:text-2xl font-bold hover:scale-105 transition-transform duration-300`}
                    >
                      {isChecked ? "✔" : "✕"}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* border line */}
      <div className="max-w-5xl mx-auto mt-14 hidden sm:block">
        <hr className="  border border-gray-300 " />
      </div>

      <section className="max-w-7xl mx-auto px-4 py-12 sm:pb-20">
        <h2 className="text-center text-2xl sm:text-3xl font-semibold text-[#047BAF] mb-10">
          Our Global Talent Pool
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
          {/* Left Text Content */}
          <div className="text-gray-700 text-sm leading-7">
            <p>
              Global talent pool provides an opportunity to reach out to experts
              that may be missing or not available locally. Find bilingual
              specialists in our talent pool. Working with IP Global eliminates
              the time-consuming recruitment, interviewing, selection and
              training of new internal employees.
            </p>
          </div>

          {/* Center Image */}
          <div className="flex justify-center">
            <img
              src={talentPool}
              alt="Global Talent Pool Illustration"
              className="w-[250px] sm:w-[300px]"
            />
          </div>

          {/* Right Info Card */}
          <div className="bg-[#3EA3DE] text-white rounded-tl-3xl rounded-br-3xl px-6 py-6 text-sm leading-7">
            <h3 className="font-semibold mb-4">What We Offer</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Reduced Expenses</li>
              <li>Access to Global Talent Pool</li>
              <li>Significant Time Savings</li>
              <li>Ability to Upscale Fast</li>
              <li>Uninterrupted Workflow</li>
            </ul>
          </div>
        </div>
      </section>
    </article>
  );
};

export default ITOutsourcing;
