import React from "react";
import mainImage from "../../assets/servicesImages/Wireless-survey/mainImage.png";
import WirelessImage from "../../assets/servicesImages/Wireless-survey/wirelessSurveyImage.png";
import WifiConnect from "../../assets/servicesImages/Wireless-survey/wifiConnectImage.png";
import WirelessConnect from "../../assets/servicesImages/Wireless-survey/wirelessConnectImage.png";
import authorizedImage from "../../assets/servicesImages/Wireless-survey/authorizedImage.png";
import bgGroup from "../../assets/servicesImages/IT-infrastructure-services/bgGroup.png";
import BorderLine from "../../components/BorderLine";

const WirelessSurvey = () => {
  return (
    <article>
      <section className="relative ">
        <img
          src={mainImage}
          alt=""
          className="h-72 sm:h-auto object-cover object-right"
        />
        <div className="bg-[#1D51A2B2] absolute bottom-4 sm:bottom-12 left-0 w-full text-white py-5 sm:py-8 shadow shadow-white px-5 flex justify-center max-w-[70rem]">
          <div>
            <h1 className="text-xl sm:text-[44px] font-semibold mb-3 font-bangla">
              Wireless Survey as a Service
            </h1>
            <p className="text-xs sm:text-base ">
              IP Global & Ekahau: Sculpting Perfect Wireless Landscapes for
              Your Business.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES THAT MEET ALL YOUR NEEDS */}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-[600] text-[#FCB813] mb-4 font-kannada text-center mt-12">
        SERVICES THAT MEET ALL YOUR NEEDS
      </h2>
      <section className="flex flex-col lg:flex-row items-center justify-center gap-6 sm:gap-10 px-6 lg:px-16 py-6 ">
        {/* Left Content */}
        <div className="max-w-[36rem] text-start lg:text-left">
          <p className="text-[#5E5E5E] leading-7">
            A wireless site survey is crucial in ensuring that your wireless
            network provides optimal coverage and performance. By conducting a
            site survey, you can identify and mitigate issues such as dead
            zones, interference, and other factors that may impact network
            performance.
            <br />
            <br />
            This can help you to improve user experience, reduce downtime, and
            increase productivity.
            <br />
            <br />
            At IP Global, we leverage the cutting-edge capabilities of the
            Ekahau device to conduct comprehensive wireless surveys.
            Understanding the critical role that robust and reliable wireless
            networks play in today’s connected businesses, we employ Ekahau’s
            advanced technology to map out optimal access point placements,
            identify interference sources, and ensure a seamless connectivity
            experience.
            <br />
            <br />
            Our wireless survey using Ekahau delivers a holistic view of your
            wireless environment, paving the way for a network that’s both
            efficient and resilient. Choose IP Global and be confident in a
            wireless infrastructure that’s tailored to your
            unique business needs.
          </p>
        </div>
        {/* Right Content - Placeholder for Image */}
        <div className="">
          <img
            src={WirelessImage}
            alt="Benefits of Managed IT Services"
            className="w-full max-w-xl"
          />
        </div>
      </section>

      <div className="px-5">
      <BorderLine />
      </div>

      <section className="flex flex-col items-center justify-center mt-10 mx-5">
        <h2 className="text-xl sm:text-2xl font-semibold text-[#1D51A2] text-center sm:text-start">
          High Performing Wi-Fi with Ekahau Connect
        </h2>
        <p className="text-[#5E5E5E] text-base mt-1 font-bold">Start Anwhere</p>

        <div className="relative mt-16 w-full max-w-5xl">
          <img src={bgGroup} alt="" />
          <div className="absolute -top-8 left-0 w-full h-full flex flex-col sm:flex-row items-center justify-center">
            <img src={WifiConnect} alt="" className="w-[50rem]" />
          </div>
        </div>
      </section>

      <div className="sm:hidden mt-6 sm:mt-0 px-5">
        <BorderLine />
      </div>

      {/* border line */}
      <div className="max-w-4xl mx-auto mt-14 hidden sm:block">
        <hr className="  border border-gray-300 " />
      </div>

      <section className="flex flex-col items-center justify-center mt-10 mx-5">
        <h2 className="text-xl sm:text-2xl font-semibold text-[#1D51A2] text-center sm:text-start">
          Our Wireless Site Survey Services using Ekahau
        </h2>
        <p className="text-[#5E5E5E] text-base font-bold max-w-4xl mt-5 leading-7">
          At IP Global, we specialize in conducting wireless site surveys using
          Ekahau. Our team of certified wireless engineers has years of
          experience in designing and implementing wireless networks for a
          variety of clients across different industries.
        </p>

        <div className="  w-full max-w-5xl">
          <img src={WirelessConnect} alt="" />
        </div>
      </section>

      <div className="sm:hidden mt-6 sm:mt-0 px-5">
        <BorderLine />
      </div>

      <section className="flex flex-col items-center justify-center mt-10 mx-5">
        <h2 className="text-xl sm:text-2xl font-semibold text-[#1D51A2] text-center">
          Type of Site Survey We Offer :
        </h2>

        <div className="mt-6 max-w-5xl w-full grid md:grid-cols-[2fr_25rem] items-center gap-6">
          {/* Predictive Surveys */}
          <div>
            <h3 className="text-[#1D51A2] font-bold text-lg">
              Predictive Surveys
            </h3>
            <p className="text-[#5E5E5E] text-sm mt-1 leading-relaxed">
              They are performed before moving to a new space. The goal of
              predictive site survey is to determine where to place APs for the
              best performance throughout the area.
            </p>
          </div>
          <div className="bg-blue-400 h-36 w-full"></div>

          {/* Active Surveys */}
          <div>
            <h3 className="text-[#1D51A2] font-bold text-lg">Active Surveys</h3>
            <p className="text-[#5E5E5E] text-sm mt-1 leading-relaxed">
              Active surveys are focused on a specific signal or set of signals
              while the network is in full operation.
              <br />
              These measurements include signal strength, throughput, round-trip
              time, packet loss and retransmission rate throughout the area
              where signal is used.
            </p>
          </div>
          <div className="bg-blue-400 h-36 w-full"></div>

          {/* Passive Surveys */}
          <div>
            <h3 className="text-[#1D51A2] font-bold text-lg">
              Passive Surveys
            </h3>
            <p className="text-[#5E5E5E] text-sm mt-1 leading-relaxed">
              They collect information from all the signals in the environment
              after the site is built.
              <br />
              The goal of the passive survey is to report on all signals at each
              location, including the installed network and signals from
              neighboring sites or other devices that generate noise at wireless
              frequencies.
            </p>
          </div>
          <div className="bg-blue-400 h-36 w-full"></div>
        </div>
      </section>

      <div className="sm:hidden mt-10 px-5">
                <BorderLine />
              </div>

      <section className="flex flex-col items-center justify-center my-10 sm:my-14 mx-5">
        <div className="max-w-5xl w-full">
          {/* First Row - Three Equal Text Columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-[#1D51A2] font-bold text-lg">
                Passive Surveys
              </h3>
              <p className="text-[#5E5E5E] text-sm leading-relaxed">
                We work with you to understand your specific requirements, such
                as the number of users, the types of devices being used, and the
                location of the wireless network.
              </p>
            </div>
            <div>
              <h3 className="text-[#1D51A2] font-bold text-lg">Site Survey:</h3>
              <p className="text-[#5E5E5E] text-sm leading-relaxed">
                Using Ekahau software, we conduct a thorough wireless site
                survey to evaluate network coverage and identify areas with poor
                signal strength or interference.
              </p>
            </div>
            <div>
              <h3 className="text-[#1D51A2] font-bold text-lg">
                Design and Optimization:
              </h3>
              <p className="text-[#5E5E5E] text-sm leading-relaxed">
                Using Ekahau software, we conduct a thorough wireless site
                survey to evaluate network coverage and identify areas with poor
                signal strength or interference.
              </p>
            </div>
          </div>

          {/* Second & Third Row - 2 Column Text + Image (2-row span) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
            {/* Left Side - Text spans 2 columns */}
            <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <h3 className="text-[#1D51A2] font-bold text-lg">Reporting:</h3>
                <p className="text-[#5E5E5E] text-sm leading-relaxed">
                  We provide detailed reports that outline our findings and
                  recommendations, including a coverage map and suggested access
                  point placement.
                </p>
              </div>
              <div>
                <h3 className="text-[#1D51A2] font-bold text-lg">
                  Post-Survey Support:
                </h3>
                <p className="text-[#5E5E5E] text-sm leading-relaxed">
                  We provide ongoing support to ensure that your wireless
                  network continues to perform optimally.
                </p>
              </div>

              <div className="sm:hidden -mt-3 w-full">
                <BorderLine />
              </div>

              {/* Full-width text below */}
              <div className="sm:col-span-2">
                <h3 className="text-[#1D51A2] font-bold text-lg">
                  We are authorized Ekahau Partners and Resellers Globally
                </h3>
                <p className="text-[#5E5E5E] text-sm leading-relaxed mt-2">
                  Our best seller package is Ekahau Connect which is currently
                  the most comprehensive WiFi measurement product available in
                  the market.
                </p>
                <ul className="list-disc pl-5 text-[#5E5E5E] text-sm leading-relaxed mt-2">
                  <li>
                    Software Ekahau Pro (planning, radio coverage and
                    reporting).
                  </li>
                  <li>
                    Ekahau Sidekick (hardware for measurement including spectrum
                    analyzer).
                  </li>
                  <li>
                    Ekahau Subscription (maintenance contract – includes all
                    software updates and upgrades).
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Side - Image spanning 2 rows */}
            <div className="row-span-2 flex justify-center">
              <img
                src={authorizedImage}
                alt="Ekahau Survey"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>


    </article>
  );
};

export default WirelessSurvey;
