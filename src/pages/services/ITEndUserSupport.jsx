import React from "react";
import mainImage from "../../assets/servicesImages/IT-end-user-support/mainImage.png";
import ITEndUser from "../../assets/servicesImages/IT-end-user-support/services-meet-needs.png";
import step1Image1 from "../../assets/servicesImages/IT-end-user-support/step1-img1.png";
import step1Image2 from "../../assets/servicesImages/IT-end-user-support/step1-img2.png";
import step2Image1 from "../../assets/servicesImages/IT-end-user-support/step2-img1.png";
import step2Image2 from "../../assets/servicesImages/IT-end-user-support/step2-img2.png";
import icon1 from "../../assets/servicesImages/IT-end-user-support/icon1.png";
import icon2 from "../../assets/servicesImages/IT-end-user-support/icon2.png";
import icon3 from "../../assets/servicesImages/IT-end-user-support/icon3.png";
import BorderLine from "../../components/BorderLine";

const ITEndUserSupport = () => {
  return (
    <article>
      {/* Header section */}
      <section className="relative">
        <img src={mainImage} alt="" className="h-72 sm:h-auto object-cover object-right" />
        <div className="bg-[#1D51A2B2] absolute bottom-4 sm:bottom-12 left-0 w-full text-white py-5 sm:py-8 shadow shadow-white flex px-5 sm:px-20 xl:px-52 2xl:px-72 3xl:px-96">
          <div>
            <h1 className="text-xl sm:text-[44px] font-semibold mb-3 font-bangla">
              End User IT Support
            </h1>
            <p className="text-xs sm:text-base">
              Our first-line support services are tailored to companies like
              yours.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES THAT MEET ALL YOUR NEEDS */}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-[600] text-[#FCB813] mb-4 font-kannada text-center mt-12">
        SERVICES THAT MEET ALL YOUR NEEDS
      </h2>
      <section className="flex flex-col lg:flex-row items-center justify-center gap-6 sm:gap-10 px-6 lg:px-16 py-6 sm:py-10">
        {/* Left Content */}
        <div className="max-w-[30rem] text-center sm:text-start lg:text-left">
          <p className="text-[#5E5E5E] leading-7">
            Our ITIL Certified Team will be the first line of defense to assist
            users for any IT Issues & Disruptions. Our platform offers a
            comprehensive suite of tools and services to help you manage your
            digital workspaces, increase productivity, and streamline your IT
            operations.
            <br />
            <br />
            We specialize in simplifying complex IT landscapes, empowering
            businesses to maximize productivity while ensuring security and
            accessibility. Explore our cutting-edge solutions that bridge the
            gap between people and technology, transforming the way
            organizations work and collaborate. Join us on the journey to
            redefine the standards of modern end user computing.
          </p>
        </div>
        {/* Right Content - Placeholder for Image */}
        <div className="    ">
          <img
            src={ITEndUser}
            alt="Benefits of Managed IT Services"
            className="w-full max-w-lg"
          />
        </div>
      </section>

      <BorderLine />

      {/* -------------------Step1----------------- */}
      <section className="max-w-5xl mx-auto p-6">
        {/* Title Section */}
        <h3 className="text-[#F0B138] font-semibold mb-2 text-lg">Step 1</h3>

        {/* Content Section (Left & Right Text Sections) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-14">
          {/* Left Column */}
          <div>
            <h2 className="text-2xl font-bold text-[#1D51A2] mb-4">
              Managed Service Desk
            </h2>
            <ul className="text-[#5E5E5E] space-y-2 list-disc pl-5 ms-3">
              <li>
                Our managed service desk solutions deliver end-user support on
                behalf of your internal resources, which minimizes the
                engagement of the internal resources.
              </li>
              <li>
                IP Global NOC/SOC team will be engaged to manage and monitor the
                services from back-end, keep the services up and running, we
                engage the relevant engineer for on-site support to keep the
                operations running, reports will be shared on a monthly basis.
              </li>
              <li>
                If you don’t want internal resources tied up delivering end-user
                support, you can leverage our fully managed service desk
                solution.
              </li>
            </ul>
          </div>

          {/* Image Section (Only in Mobile Mode) */}
          <div className="block lg:hidden mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
              <img
                src={step1Image1}
                alt="Business Meeting"
                className="rounded-lg shadow-lg"
              />
              <img
                src={step1Image2}
                alt="Engineer Working"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Right Column */}
          <div>
            <h3 className="text-[#F0B138] font-semibold mb-2 mt-4">
              Remote Monitoring and Resolution Solution
            </h3>
            <ul className="text-[#5E5E5E] space-y-2 list-disc pl-5 ms-3 sm:ms-10">
              <li>NOC/SOC team to provide back-end monitoring support</li>
              <li>
                Target smooth operations and keep the services up and running
              </li>
              <li>
                Proactive measures for issue rectification and enhancement
              </li>
            </ul>

            <h3 className="text-[#F0B138] font-semibold mt-6 mb-2">
              On-Site FE Engagement
            </h3>
            <ul className="text-[#5E5E5E] space-y-2 list-disc pl-5 ms-3 sm:ms-10">
              <li>
                Field Engineer will be engaged on-site for support whenever
                required
              </li>
              <li>
                Back-end NOC/SOC team will be engaged to the on-site engineer to
                fulfill any task and requirement
              </li>
            </ul>
          </div>
        </div>

        {/* Image Section (Hidden in Mobile, Shown in Desktop) */}
        <div className="hidden lg:block mt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
            <img src={step1Image1} alt="Business Meeting" />
            <img src={step1Image2} alt="Engineer Working" />
          </div>
        </div>
      </section>

      <div className="sm:hidden">
        <BorderLine />
      </div>

      {/* -------------------Step2----------------- */}
      <section className="max-w-5xl mx-auto p-6">
        {/* Title Section */}
        <h3 className="text-[#F0B138] font-semibold mb-2 text-lg">Step 2</h3>

        {/* Content Section (Left & Right Text Sections) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-14 items-start">
          {/* Left Column */}
          <div>
            <h2 className="text-2xl font-bold text-[#1D51A2] mb-4">
              Supported Service Desk
            </h2>
            <ul className="text-[#5E5E5E] space-y-2 list-disc pl-5 ms-3">
              <li>
                Our flexible and reliable IT support services helps you continue
                managing your service desk by offering you adequate and relevant
                resources.
              </li>
              <li>
                If you’re spending a lot of time finding and maintaining the
                right resource level and skill sets, you can leverage our
                flexible IT support services.
              </li>
              <li>
                IP Global OPS team will be engaged to manage the IT Service Desk
                requests. Engage the relevant engineer to fulfill the task and
                share the SVR report by the end of the service completion
              </li>
            </ul>
          </div>

          {/* Image Section (Only in Mobile Mode) */}
          <div className="block lg:hidden mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
              <img src={step1Image1} alt="Business Meeting" />
              <img src={step1Image2} alt="Engineer Working" />
            </div>
          </div>

          {/* Right Column */}
          <div>
            <h3 className="text-[#F0B138] font-semibold mb-2 lg:mt-4">
              Remote Monitoring and Resolution Solution
            </h3>
            <ul className="text-[#5E5E5E] space-y-2 list-disc pl-5 ms-3 sm:ms-10">
              <li>
                OPS team book the task and engage the relevant engineer for
                On-Site Engagement Ensure that client is fully updated on the
                task and rectify any reported issue.
              </li>
            </ul>

            <h3 className="text-[#F0B138] font-semibold mt-6 mb-2">
              On-Site FE Engagement
            </h3>
            <ul className="text-[#5E5E5E] space-y-2 list-disc pl-5 ms-3 sm:ms-10">
              <li>
                Field Engineer engages to provide on-site support to the Remote
                Engineer
              </li>
              <li>
                Field Engineer may also be engaged to fulfill any IT Task to
                furnish and up the service
              </li>
              <li>
                New Installations and dismantle old hardware Establish
                connectivity on network etc
              </li>
            </ul>
          </div>
        </div>

        {/* Image Section (Hidden in Mobile, Shown in Desktop) */}
        <div className="hidden lg:block mt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 items-start">
            <img src={step2Image1} alt="Business Meeting" />
            <img src={step2Image2} alt="Engineer Working" />
          </div>
        </div>
      </section>

      {/* border line */}
      <div className="max-w-3xl mx-auto my-10 hidden sm:block">
        <hr className="  border border-gray-300 " />
      </div>

      <div className="sm:hidden">
        <BorderLine />
      </div>

      {/* -------------------Advantages of Using Our IT Support Service----------------- */}
      <section className="max-w-5xl mx-auto p-3 sm:p-6 mt-10">
        {/* left section */}
        <div className="flex flex-col sm:flex-row items-center gap-10 mb-8">
          <div className="p-5  bg-gray-200 flex items-center justify-center rounded-full shrink-0">
            <img src={icon1} alt="IT Support" className="w-32 h-32 " />
          </div>
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-[#1D51A2] text-center sm:text-start mb-3 sm:mb-0">
              Advantages of Using Our IT Support Service
            </h2>
            <ul className="list-disc pl-5 text-gray-700 mt-2 ms-3 sm:ms-0">
              <li>
                Our managed service desk solutions deliver end-user support on
                behalf of your internal resources, which minimizes the
                engagement of the internal resources.
              </li>
              <li>
                IP Global NOC/SOC team will be engaged to manage and monitor
                the services from back-end, keep the services up and running, we
                engage the relevant engineer for on-site support to keeping the
                operations running, reports will be shared on monthly basis.
              </li>
              <li>
                If you don’t want internal resources tied up delivering end-user
                support, you can leverage our fully managed service desk
                solution.
              </li>
            </ul>
          </div>
        </div>

        {/* right section */}
        <div className="flex flex-col sm:flex-row items-center gap-10">
          <div className="p-5  bg-gray-200 flex items-center justify-center rounded-full shrink-0">
            <img src={icon2} alt="User IT Support" className="w-32 h-32" />
          </div>
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-[#1D51A2] text-center sm:text-start mb-3 sm:mb-0">
              What Will You Get Based Choosing User IT Support?
            </h2>
            <ul className="list-disc pl-5 text-gray-700 mt-2 ms-3 sm:ms-0">
              <li>
                Complete IMAC/R/D-Processes (Install, Move, Add & Change as well
                as Remove & Dispose).
              </li>
              <li>
                Our Smooth hardware changes, system upgrades or moves without
                disrupting your day-to-day operations.
              </li>
              <li>
                Supervision of warranty cases and repairs as well as proper
                disposal of hardware including data deletion.
              </li>
              <li>Highly experiences rollout team.</li>
              <li>Standardized processes certified according to ISO 20000.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* border line */}
      <div className="max-w-3xl mx-auto my-10 hidden sm:block">
        <hr className="  border border-gray-300 " />
      </div>

      <div className="sm:hidden">
        <BorderLine />
      </div>

      {/* End user support */}
      <section className="flex flex-col sm:flex-row gap-8 justify-center sm:justify-between items-center bg-white p-6 max-w-5xl mx-auto mb-10">
      <h2 className="text-lg sm:text-2xl font-bold text-[#1D51A2]">End User Support</h2>
      
      {/* Image shown in mobile mode only */}
      <div className="p-5 bg-gray-200 flex items-center justify-center rounded-full shrink-0 sm:hidden">
        <img src={icon3} alt="User IT Support" className="w-32 h-32" />
      </div>
      
      <div className="text-[#5E5E5E] flex flex-col sm:flex-row sm:gap-8 w-52 sm:w-auto">
        <ul className="list-disc pl-5">
          <li>1st line support</li>
          <li>Problem resolution</li>
          <li>Incident Management</li>
        </ul>
        <ul className="list-disc pl-5">
          <li>Third Party Escalation</li>
          <li>Service Request Fulfillment</li>
          <li>User Device Support</li>
        </ul>
      </div>
      
      {/* Image hidden in mobile, shown in larger screens */}
      <div className="p-5 bg-gray-200 flex items-center justify-center rounded-full shrink-0 hidden sm:flex">
        <img src={icon3} alt="User IT Support" className="w-32 h-32" />
      </div>
    </section>

    </article>
  );
};

export default ITEndUserSupport;
