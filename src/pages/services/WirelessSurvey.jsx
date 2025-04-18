import React from "react";
import mainImage from "../../assets/servicesImages/Wireless-survey/mainImage.png";
import WirelessImage from "../../assets/servicesImages/Wireless-survey/wirelessSurveyImage.png";
import WifiConnect from "../../assets/servicesImages/Wireless-survey/wifiConnectImage.png";
import WirelessConnect from "../../assets/servicesImages/Wireless-survey/wirelessConnectImage.png";
import authorizedImage from "../../assets/servicesImages/Wireless-survey/authorizedImage.png";
import predictiveImage from "../../assets/servicesImages/Wireless-survey/predictiveImage.png";
import activeImage from "../../assets/servicesImages/Wireless-survey/activeImage.png";
import passiveImage from "../../assets/servicesImages/Wireless-survey/passiveImage.png";
import bgGroup from "../../assets/servicesImages/IT-infrastructure-services/bgGroup.png";
import BorderLine from "../../components/BorderLine";
import ServiceBanner from "../../components/ServicesBanner";

const WirelessSurvey = () => {
  return (
    <article>
      {/* Banner section */}
      <ServiceBanner
        image={mainImage}
        title="Wireless Survey Solutions"
        description="Orbit Pulse & Ekahau: Crafting Optimal Wireless Environments for Your Business"
      />

      {/* SERVICES THAT MEET ALL YOUR NEEDS */}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-[600] text-[#FCB813] mb-4 font-kannada text-center mt-12">
        Optimizing Wireless Connectivity for Your Business
      </h2>
      <section className="flex flex-col lg:flex-row items-center justify-center gap-6 sm:gap-10 px-6 lg:px-16 py-6 ">
        {/* Left Content */}
        <div className="max-w-[36rem] text-start lg:text-left">
          <p className="text-[#5E5E5E] leading-7">
            A wireless site survey is key to ensuring that your network offers
            strong, consistent coverage and performance. By conducting a survey,
            we can identify potential issues such as dead zones and interference
            that may disrupt your network.
            <br />
            <br />
            This process helps to improve user experience, minimize downtime,
            and enhance productivity.
            <br />
            <br />
            At Orbit Pulse, we use the advanced Ekahau device for in-depth
            wireless surveys. We understand that a robust and dependable
            wireless network is vital for modern businesses, so we leverage
            Ekahau’s cutting-edge technology to strategically place access
            points, identify sources of interference, and guarantee seamless
            connectivity.
            <br />
            <br />
            Our wireless surveys provide a full view of your network
            environment, allowing us to build a more efficient and resilient
            infrastructure. With Orbit Pulse, you can count on a wireless setup
            that’s perfectly suited to meet your business needs.
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

      <div className="px-5 max-w-4xl mx-auto">
        <BorderLine />
      </div>

      <section className="flex flex-col items-center justify-center mt-10 mx-5">
        <h2 className="text-xl sm:text-2xl font-semibold text-[#1D51A2] text-center sm:text-start">
          Achieve Optimal Wi-Fi Performance with Ekahau Connect
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
          Ekahau-Powered Wireless Site Survey Services
        </h2>
        <p className="text-[#5E5E5E] text-base font-bold max-w-4xl mt-5 leading-7">
          At Orbit Pulse, we excel in providing wireless site surveys using
          Ekahau technology. Our skilled team of certified wireless engineers
          has extensive experience in designing and deploying wireless networks
          for clients across diverse industries.
        </p>

        <div className="  w-full max-w-4xl">
          <img src={WirelessConnect} alt="" />
        </div>
      </section>

      <div className="sm:hidden mt-6 sm:mt-0 px-5">
        <BorderLine />
      </div>

      <section className="flex flex-col items-center justify-center mt-10 mx-5">
        <h2 className="text-xl sm:text-2xl font-semibold text-[#1D51A2] text-center">
          Our Range of Site Survey Services :
        </h2>

        <div className="mt-6 max-w-5xl w-full grid md:grid-cols-[2fr_25rem] items-center gap-6">
          {/* Predictive Surveys */}
          <div>
            <h3 className="text-[#1D51A2] font-bold text-lg">
              Predictive Surveys
            </h3>
            <p className="text-[#5E5E5E] text-sm mt-1 leading-7">
              Carried out before moving into a new location, predictive surveys
              are designed to determine the best placement for access points
              (APs) to ensure maximum coverage and performance across the area.
            </p>
          </div>
          <img
            src={predictiveImage}
            alt="Predictive Survey"
            className="w-full h-44 object-cover"
          />

          {/* Active Surveys */}
          <div>
            <h3 className="text-[#1D51A2] font-bold text-lg">Active Surveys</h3>
            <p className="text-[#5E5E5E] text-sm mt-1 leading-7">
              These surveys are performed while the network is fully
              operational, focusing on specific signals or sets of signals.
              <br />
              They gather key metrics like signal strength, throughput,
              round-trip time, packet loss, and retransmission rates throughout
              the coverage area.
            </p>
          </div>
          <img
            src={activeImage}
            alt="Predictive Survey"
            className="w-full h-44 object-cover"
          />

          {/* Passive Surveys */}
          <div>
            <h3 className="text-[#1D51A2] font-bold text-lg">
              Passive Surveys
            </h3>
            <p className="text-[#5E5E5E] text-sm mt-1 leading-7">
              Conducted after the site is built, passive surveys capture data
              from all signals present in the environment.
              <br />
              The aim is to evaluate both the installed network signals and any
              interference from neighboring networks or devices that could
              affect wireless performance.
            </p>
          </div>
          <img
            src={passiveImage}
            alt="Predictive Survey"
            className="w-full h-44 object-cover"
          />
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
              <p className="text-[#5E5E5E] text-sm leading-7">
                At Orbit Pulse, we collaborate with you to understand your
                unique needs, including the number of users, types of devices,
                and the layout of your wireless network.
              </p>
            </div>
            <div>
              <h3 className="text-[#1D51A2] font-bold text-lg">Site Survey:</h3>
              <p className="text-[#5E5E5E] text-sm leading-7">
                Using Ekahau software, we conduct a comprehensive site survey to
                assess your network coverage, identifying areas with weak signal
                strength or interference.
              </p>
            </div>
            <div>
              <h3 className="text-[#1D51A2] font-bold text-lg">
                Design and Optimization:
              </h3>
              <p className="text-[#5E5E5E] text-sm leading-7">
                Leveraging Ekahau's advanced features, we optimize your network
                design, ensuring ideal access point placement and efficient
                coverage across your space.
              </p>
            </div>
          </div>

          {/* Second & Third Row - 2 Column Text + Image (2-row span) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
            {/* Left Side - Text spans 2 columns */}
            <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <h3 className="text-[#1D51A2] font-bold text-lg">Reporting:</h3>
                <p className="text-[#5E5E5E] text-sm leading-7">
                  We deliver detailed reports that summarize our findings,
                  providing a coverage map and recommendations for access point
                  positioning to improve performance.
                </p>
              </div>
              <div>
                <h3 className="text-[#1D51A2] font-bold text-lg">
                  Post-Survey Support:
                </h3>
                <p className="text-[#5E5E5E] text-sm leading-7">
                  Our team offers continued support to guarantee that your
                  wireless network maintains optimal performance and
                  reliability.
                </p>
              </div>

              <div className="sm:hidden -mt-3 w-full">
                <BorderLine />
              </div>

              {/* Full-width text below */}
              <div className="sm:col-span-2">
                <h3 className="text-[#1D51A2] font-bold text-lg">
                  Global Authorized Ekahau Partners and Resellers
                </h3>
                <p className="text-[#5E5E5E] text-sm  mt-2 leading-7">
                  As authorized Ekahau partners and resellers worldwide, we
                  offer the highly popular Ekahau Connect package, the most
                  comprehensive Wi-Fi measurement solution available today.
                </p>
                <h1 className="mt-2 text-[#1D51A2] font-bold">
                  Our Offerings include:
                </h1>
                <ul className="list-disc pl-5 text-[#5E5E5E] text-sm  mt-1 leading-7">
                  <li>
                    <span className="font-bold text-gray-800">Ekahau Pro:</span>{" "}
                    A powerful software for planning, radio coverage analysis,
                    and reporting.
                  </li>
                  <li>
                    <span className="font-bold text-gray-800">
                      Ekahau Sidekick:
                    </span>{" "}
                    A hardware device designed for accurate measurements,
                    including a built-in spectrum analyzer.
                  </li>
                  <li>
                    <span className="font-bold text-gray-800">
                      Ekahau Subscription:
                    </span>{" "}
                    A maintenance contract that provides all software updates
                    and upgrades to ensure your system remains up to date.
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
