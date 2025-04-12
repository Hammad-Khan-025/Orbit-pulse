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
import ServiceBanner from "../../components/ServicesBanner";

const ITEndUserSupport = () => {
  return (
    <article>
      {/* px-5 sm:px-20 xl:px-52 2xl:px-72 3xl:px-96 */}

      {/* Banner section */}
      <ServiceBanner
        image={mainImage}
        title="End-User IT Support"
        description="We offer tailored first-line support services designed specifically for businesses like yours, providing quick and efficient assistance."
      />

      {/* SERVICES THAT MEET ALL YOUR NEEDS */}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-[600] text-[#FCB813] mb-4 font-kannada text-center mt-12 uppercase">
        Comprehensive Services Tailored to Your Needs
      </h2>
      <section className="flex flex-col lg:flex-row items-center justify-center gap-6 sm:gap-10 px-6 lg:px-16 py-6 sm:py-10">
        {/* Left Content */}
        <div className="max-w-[30rem] text-center sm:text-start lg:text-left">
          <p className="text-[#5E5E5E] leading-7">
            Our ITIL-certified team is your first line of support, ready to
            assist with any IT challenges or disruptions. We provide a
            comprehensive platform with the tools and services needed to manage
            digital workspaces, enhance productivity, and optimize IT
            operations.
            <br />
            <br />
            We focus on simplifying complex IT environments, helping businesses
            boost productivity while maintaining security and accessibility.
            Explore our advanced solutions that bridge the gap between people
            and technology, revolutionizing the way organizations collaborate
            and work together. Join us as we redefine the future of modern
            end-user computing.
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

      <div className="px-5 max-w-4xl mx-auto">
        <BorderLine />
      </div>

      {/* -------------------Step1----------------- */}
      <section className="max-w-5xl mx-auto p-6">
        {/* Title Section */}
        <h3 className="text-[#F0B138] font-semibold mb-2 text-lg">Step 1</h3>

        {/* Content Section (Left & Right Text Sections) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-14">
          {/* Left Column */}
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-[#1D51A2] mb-4">
              Managed Service Desk
            </h2>
            <ol className="text-[#5E5E5E] space-y-2 pl-5 list-disc ms-3">
              <li>
                Our Managed Service Desk solutions provide end-user support,
                reducing the need for internal resource involvement.
              </li>
              <li>
                The Orbit Pulse NOC/SOC team handles back-end service management
                and monitoring to ensure seamless operations. When on-site
                support is required, we deploy the appropriate engineer to keep
                your systems running smoothly. Monthly reports will be shared
                for transparency and performance tracking.
              </li>
              <li>
                If you prefer not to allocate internal resources to end-user
                support, our fully managed service desk is the perfect solution.
              </li>
            </ol>
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
              Remote Monitoring and Resolution
            </h3>
            <ul className="text-[#5E5E5E] space-y-2 list-disc pl-5 ms-3 sm:ms-10">
              <li>
                Continuous back-end monitoring by the NOC/SOC team ensures
                uninterrupted service.
              </li>
              <li>
                Focus on maintaining smooth operations and service uptime.
              </li>
              <li>
                Proactive issue resolution and system enhancements to prevent
                disruptions.{" "}
              </li>
            </ul>

            <h3 className="text-[#F0B138] font-semibold mt-6 mb-2">
              On-Site Field Engineer Support
            </h3>
            <ul className="text-[#5E5E5E] space-y-2 list-disc pl-5 ms-3 sm:ms-10">
              <li>
                Field engineers are available on-site for support as needed.
              </li>
              <li>
                Our NOC/SOC team works alongside on-site engineers to address
                any tasks and ensure optimal service delivery.
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

      <div className="sm:hidden px-5">
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
            <h2 className="text-xl sm:text-2xl font-bold text-[#1D51A2] mb-4">
              Supported Service Desk
            </h2>
            <ul className="text-[#5E5E5E] space-y-2 list-disc pl-5 ms-3">
              <li>
                Our flexible and dependable IT support services help you
                efficiently manage your service desk by providing the right
                resources tailored to your needs.
              </li>
              <li>
                If you find it challenging to source and maintain the necessary
                resource levels and skill sets, you can take advantage of our
                flexible IT support services.
              </li>
              <li>
                The Orbit Pulse OPS team will oversee IT service desk requests,
                assign the appropriate engineer to complete tasks, and deliver
                an SVR report upon service completion.
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
              Remote Monitoring and Resolution
            </h3>
            <ul className="text-[#5E5E5E] space-y-2 list-disc pl-5 ms-3 sm:ms-10">
              <li>
                The OPS team will schedule tasks and assign the relevant
                engineer for on-site support.
              </li>

              <li>
                Ensures clients are kept informed throughout the process and
                quickly resolves any issues.
              </li>
            </ul>

            <h3 className="text-[#F0B138] font-semibold mt-6 mb-2">
              On-Site Field Engineer Support
            </h3>
            <ul className="text-[#5E5E5E] space-y-2 list-disc pl-5 ms-3 sm:ms-10">
              <li>
                Field engineers will provide on-site assistance, working
                alongside remote engineers when needed.
              </li>
              <li>
                Engineers may also handle specific IT tasks, including new
                hardware installations, network setup, and the removal of old
                equipment.
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

      <div className="sm:hidden px-5">
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
              Benefits of Choosing Our IT Support Services
            </h2>
            <ul className="list-disc pl-5 text-gray-700 mt-2 ms-3 sm:ms-0">
              <li>
                Our managed service desk solutions provide end-user support on
                your behalf, minimizing the involvement of your internal
                resources.
              </li>
              <li>
                The Orbit Pulse NOC/SOC team manages and monitors services from
                the back-end to ensure smooth operations. We deploy the right
                engineer for on-site support when needed, and we provide
                detailed reports on a monthly basis.
              </li>
              <li>
                If you prefer not to tie up internal resources with end-user
                support tasks, our fully managed service desk is the ideal
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
              Why Choose Our User IT Support Services?
            </h2>
            <ul className="list-disc pl-5 text-gray-700 mt-2 ms-3 sm:ms-0">
              <li>
                Complete IMAC/R/D processes (Install, Move, Add & Change, Remove
                & Dispose).
              </li>
              <li>
                Smooth hardware upgrades, system changes, and relocations
                without disrupting your operations.
              </li>
              <li>
                Efficient management of warranty cases, repairs, and proper
                disposal of hardware, including secure data deletion.
              </li>
              <li>A skilled rollout team to ensure seamless implementation.</li>
              <li>
                ISO 20000-certified standardized processes to ensure quality and
                consistency.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* border line */}
      <div className="max-w-3xl mx-auto my-10 hidden sm:block">
        <hr className="  border border-gray-300 " />
      </div>

      <div className="sm:hidden px-5">
        <BorderLine />
      </div>

      {/* End user support */}
      <section className="flex flex-col sm:flex-row gap-8 justify-center sm:justify-between items-center bg-white p-6 max-w-6xl mx-auto mb-10">
        <h2 className="text-lg sm:text-2xl font-bold text-[#1D51A2]">
          End User Support
        </h2>

        {/* Image shown in mobile mode only */}
        <div className="p-5 bg-gray-200 flex items-center justify-center rounded-full shrink-0 sm:hidden">
          <img src={icon3} alt="User IT Support" className="w-32 h-32" />
        </div>

        <div className="text-[#5E5E5E] flex flex-col sm:flex-row sm:gap-8 w-52 sm:w-[40rem]">
          <ul className="list-disc pl-5">
            <li>Initial assistance for user queries and issues.</li>
            <li>
              Efficiently resolving technical problems to minimize disruptions.
            </li>
            <li>
              Handling and resolving incidents swiftly to maintain service
              continuity.
            </li>
          </ul>
          <ul className="list-disc pl-5">
            <li>
              Collaborating with external vendors for advanced issue resolution
              when necessary.
            </li>
            <li>Ensuring timely completion of user service requests.</li>
            <li>
              Providing comprehensive support for user devices to ensure smooth
              functionality.
            </li>
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
