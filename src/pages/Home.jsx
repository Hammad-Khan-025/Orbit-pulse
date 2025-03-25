import React from "react";
import mainImage from "../assets/mainImage.png";
import companyProfile from "../assets/companyProfileLogo.png";
import feature1Img from "../assets/feature1Img.png";
import feature2Img from "../assets/feature2Img.png";
import feature3Img from "../assets/feature3Img.png";
import mapImg from "../assets/mapImg.png";
import ServiceCard from "../components/ServiceCard";
import Footer from "../components/Footer";

const Home = () => {
  const services = [
    {
      title: "End-User Support",
      description:
        "Providing responsive and reliable IT assistance to empower users in their daily tasks. From troubleshooting to setup, we ensure seamless tech experiences for enhanced productivity.",
    },
    {
      title: "IT INFRASTRUCTURE",
      description:
        "Building robust, scalable technology foundations that support your business's growth and stability. From network architecture to data security, we ensure seamless, resilient IT environments.",
    },
    {
      title: "WIFI SURVEYS",
      description:
        "Optimizing wireless connectivity through detailed site surveys for seamless coverage and performance. We identify and resolve signal issues, ensuring fast, reliable WiFi across your spaces.",
    },
    {
      title: "FLEXIBLE-ON SITE",
      description:
        "Offering adaptable on-site support to meet your unique operational needs. Our team provides personalized assistance, ensuring seamless integration and immediate solutions wherever you are.",
    },
    {
      title: "SECURITY SERVICES",
      description:
        "Building robust, scalable technology foundations that support your business's growth and stability. From network architecture to data security, we ensure seamless, resilient IT environments.",
    },
    {
      title: "WSAAS",
      description:
        "Optimizing wireless connectivity through detailed site surveys for seamless coverage and performance. We identify and resolve signal issues, ensuring fast, reliable WiFi across your spaces.",
    },
  ];

  const features = [
    {
      image: `${feature1Img}`,
      title: '365 GLOBAL COVERAGE',
      description: "Anytime, Anywhere – Our services span the globe, ensuring you have support day or night.",
    },
    {
      image: `${feature2Img}`, 
      title: 'EXPERT ENGINEER',
      description: "Experience You Can Trust – Our seasoned professionals provide swift responses and detailed insights to keep your operations running smoothly.",
    },
    {
      image: `${feature3Img}`,
      title: 'ONE-SITE-SUPPORT',
      description: "Your Eyes and Hands – Our engineers act as an extension of your team, expertly handling on-site challenges to ensure end-user satisfaction.",
    },
  ];

  return (
    <article>
      <div className="relative">
        <img src={mainImage} alt="" />
        <div className="bg-[#1D51A2B2] absolute bottom-12 left-0 w-full text-white text-center py-8 shadow shadow-white">
          <h1 className="text-4xl font-semibold main-h1 mb-3">
            EMPOWERING YOUR FUTURE WITH INNOVATIVE IT SOLUTIONS
          </h1>
          <p>
            We start with understanding your “Problem Statement”.and, Tailor
            Solutions & Services that “Fit Your Business Needs”.
          </p>
        </div>
      </div>

      {/* Header Section */}
      <section className="text-center my-14">
        <h1 className="text-4xl font-bold text-[#FCB813]">
          EMPOWERING YOUR FUTURE WITH INNOVATIVE IT SOLUTIONS
        </h1>
        <div className="max-w-5xl mx-auto">
          <p className="text-lg md:text-xl text-[#00BDFF] mt-4">
            AS YOUR BUSINESS EVOLVES, OUR IT SOLUTIONS SEAMLESSLY ADAPT, LETTING
            YOU CONCENTRATE ON INNOVATION.
          </p>
          <p className="mt-6 text-gray-700 text-base md:text-lg">
            While "<b>You</b>" harness creativity to enhance your enterprise, "
            <b>We</b>" accelerate your time to market, amplify organizational
            performance, and ensure you stay competitive. Our extensive global
            clientele partners with JP Global for our wealth of experience, deep
            expertise, and unwavering integrity.
          </p>
          <div className="max-w-4xl mx-auto">
          <hr className="mt-10 border-gray-300 " />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section>
        <h2 className="text-2xl md:text-3xl font-bold text-[#047BAF] text-center mb-8">
          SUPPORTING YOUR JOURNEY
        </h2>

        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-10 place-items-center">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center py-10">
      {/* Title Section */}
      <h2 className="text-xl md:text-2xl lg:text-3xl text-[#047BAF] font-bold mb-4 mt-10">
        DOWNLOAD OUR COMPANY PROFILE
      </h2>
      
      {/* Download Button */}
      <button className="bg-[#1D51A2] hover:bg-[#2E69D6] text-white font-semibold py-2 px-6 rounded-lg mb-10 cursor-pointer">
        DOWNLOAD PROFILE
      </button>
          
            {/* Profile Image */}
            <div className="flex justify-center bg-[#EAEAEA80] w-full">
        <img
          src={companyProfile}
          alt="Company Profile"
          className="max-w-[35rem] h-auto"
        />
      </div>

    </section>

    {/* why choose me section */}
    <section>
    <div className="max-w-5xl mx-auto">
    <div className="max-w-4xl mx-auto">
          <hr className="mt-10 border-gray-300 " />
          </div>
    <h2 className="text-2xl md:text-3xl font-bold text-[#047BAF] text-center mb-8 mt-12">
          WHY CHOOSE US?
        </h2>
        <p className="text-[#5E5E5E] text-center">
        At Orbit pals, we understand every step of your business process. That’s why we ensure no detail is overlooked, whether it’s meeting SLAs or dispatching expert engineers to remote locations for hardware issues.
        </p>
    </div>

    <div className="flex justify-center pt-8">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
      {features.map((feature, index) => (
        <div
          key={index}
          className="flex flex-col items-center text-center w-96 mx-auto"
        >
          <div className="bg-[#F5F5F5] w-full flex justify-center items-center h-40 py-32">
          <img src={feature.image} alt={feature.title} className="w-60" />
          </div>
          <h3 className="text-xl font-bold text-[#00BDFF] mb-2 mt-8">{feature.title}</h3>
          <p className="text-[#5E5E5E] text-sm">{feature.description}</p>
        </div>
      ))}
    </div>
    </div>
    <div className="my-8 max-w-4xl mx-auto">
    <hr className="mt-10 border-gray-300" />
    </div>
    </section>

    {/* Flexible on-site/map section */}
    <section className="flex flex-col md:flex-row justify-center items-center gap-20 p-6">
      <div className="flex flex-col space-y-8 w-72">
        <div className="border-b border-gray-300 pb-4">
          <h3 className="text-xl font-bold text-blue-500">FLEXIBLE-ON SITE</h3>
          <p className="text-gray-600 flex flex-col gap-1 mt-1">
            <span>ORBIT PULSE 365 Ltd.</span>
            <span>St Helens 1 Undershaft, London</span>
            <span>EC3P 3DQ</span>
          </p>
          <button className="mt-4 bg-[#F0B138] text-white font-semibold px-4 py-1 rounded-full hover:bg-yellow-500 cursor-pointer">
            Learn More
          </button>
        </div>

        <div className="border-b border-gray-300 pb-4">
          <h3 className="text-xl font-bold text-blue-500">FLEXIBLE-ON SITE</h3>
          <p className="text-gray-600 flex flex-col gap-1 mt-1">
            <span>ORBIT PULSE 365 Ltd.</span>
            <span>St Helens 1 Undershaft, London</span>
            <span>EC3P 3DQ</span>
          </p>
          <button className="mt-4 bg-[#F0B138] text-white font-semibold px-4 py-1 rounded-full hover:bg-yellow-500 cursor-pointer">
            Learn More
          </button>
        </div>
      </div>

      <div>
        <img
          src= {mapImg}
          alt="World Map with Icons"
          className="w-full max-w-3xl"
        />
      </div>
    </section>

    <Footer/>

    </article>
  );
};

export default Home;
