import React from "react";
import ServiceBanner from "../../components/ServicesBanner";
import mainImage from "../../assets/servicesImages/Security-services/mainImage.png";
import overview from "../../assets/servicesImages/Security-services/overview.png";
import icon1 from "../../assets/servicesImages/Security-services/icon1.png";
import icon2 from "../../assets/servicesImages/Security-services/icon2.png";
import icon3 from "../../assets/servicesImages/Security-services/icon3.png";
import BorderLine from "../../components/BorderLine";

const SecurityServices = () => {
  const services = [
    "Threat Management",
    "Managed Detection And Response",
    "Managed Cloud Security",
    "Managed Endpoint Security",
    "Managed Identity",
    "Security Command Center",
  ];

  const networkSecurityData = [
    {
      title: "Secure Access Service Edge",
      description:
        "Modernize networking and network security with a converged cloud-based service model, managed and optimized by a global leader in managed security.",
      bgColor: "bg-[#3EA3DE4D]",
      image: icon1,
    },
    {
      title: "Managed Firewall Services",
      description:
        "Engage monitoring and management with advanced analytics through near-real-time data correlation across leading firewall technologies.",
      bgColor: "bg-[#D9D9D94D]",
      image: icon2,
    },
    {
      title: "Intrusion Detection And Prevention",
      description:
        "Prevent unauthorized network access and data theft with monitoring, alerting and support of network IDPS across the infrastructure.",
      bgColor: "bg-[#3EA3DE4D]",
      image: icon3,
    },
  ];

  return (
    <article>
      {/* Banner section */}
      <ServiceBanner
        image={mainImage}
        title="Managed Security Services"
        description="Currently, more organizations and enterprises are opting for managed security services to get security expertise and reduce the workload of their security staff. The main concern for an organization is getting a trusted security provider."
      />

      <section className="flex flex-col lg:flex-row items-center justify-center gap-6 sm:gap-10 px-5 lg:px-10 py-6 sm:py-10 max-w-7xl mx-auto mt-2 sm:mt-10">
        {/* Left Content */}
        <div className="mx-5">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-[600] text-[#FCB813] mb-4 font-kannada text-center">
            OVERVIEW
          </h2>
          <ul className="text-[#5E5E5E] leading-10 max-w-[40rem] lg:text-left list-disc">
            <li>
              We provide managed security services to have an oversight and
              administer the security processes of your business or
              organization.
            </li>
            <li>
              We offer a wide variety of security services by setting up
              infrastructure through incident response and security management.
            </li>
            <li>
              As security service providers, we can specialize in specific areas
              of your organization that need security detail.
            </li>
            <li>
              You can also fully outsource your enterprise’s security program.
            </li>
          </ul>
        </div>
        {/* Right Content - Placeholder for Image */}
        <div className="">
          <img
            src={overview}
            alt="Benefits of Managed IT Services"
            className="w-full max-w-md"
          />
        </div>
      </section>

      <section className="flex flex-col lg:flex-row-reverse items-center justify-center gap-6 sm:gap-20 px-5 lg:px-10 py-6 sm:py-0 max-w-7xl mx-auto">
        {/* Left Content */}
        <div className="mx-5">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-[600] text-[#FCB813] mb-4 font-kannada text-center sm:mt-12">
            OUR APPROACH
          </h2>
          <ul className="text-[#5E5E5E] leading-10 max-w-[40rem] lg:text-left list-disc">
            <li>
              We can augment your security program with tailored services,
              including threat, cloud, infrastructure, data, identity and
              response management.
            </li>
            <li>
              Our specialists can help optimize, fine-tune, and improve security
              program efficiency for the long-term
            </li>
            <li>
              Our specialists help you address your security needs, from the
              simplest to the most complex, monitoring and managing security
              incidents 24x7x365
            </li>
            <li>
              Our people, technology, facilities and processes are among the
              best in the world.
            </li>
          </ul>
        </div>
        {/* Right Content - Placeholder for Image */}
        <div className="">
          <img
            src={overview}
            alt="Benefits of Managed IT Services"
            className="w-full max-w-md"
          />
        </div>
      </section>

      <div className="max-w-[75rem] mx-auto px-5 sm:px-0">
        <BorderLine />
      </div>

      <section className="flex flex-col items-center pt-6 sm:pt-3 space-y-6 max-w-7xl mx-auto px-5">
        {/* Title */}
        <h1 className="text-xl md:text-3xl font-semibold text-[#1D51A2] pb-3 text-center">
          Managed Cybersecurity Services
        </h1>

        {/* Service Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 justify-center gap-4 pb-3">
          {services.map((service, index) => (
            <button
              key={index}
              className={`px-4 py-2 text-sm rounded-md shadow-sm w-full sm:w-48 bg-[#3EA3DE4D] text-[#5E5E5E]`}
            >
              {service}
            </button>
          ))}
        </div>

        {/* Content Section */}
        <div className="text-center space-y-2">
          <h2 className="text-xl sm:text-3xl font-semibold text-[#047BAF]">
            Threat Management
          </h2>
          <p className="text-[#5E5E5E] max-w-3xl mx-auto text-sm sm:text-base leading-8">
            Protect critical assets from vulnerabilities, detect advanced
            threats and quickly respond and recover from disruptions.
          </p>
        </div>

        {/* Placeholder Box */}
        <div className="w-full max-w-3xl h-72 bg-gray-200 rounded-2xl" />
      </section>

      <div className="max-w-[75rem] mx-auto px-5 sm:px-0 pt-5 sm:pt-8">
        <BorderLine />
      </div>

      <div className="flex flex-col items-center px-4 py-5">
        {/* Section Title */}
        <h2 className="text-2xl md:text-3xl font-semibold text-blue-800 text-center">
          Managed Network Security Services
        </h2>

        {/* Service Cards */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 my-10 sm:my-20">
  {networkSecurityData.map((service, index) => (
    <div key={index} className="group">
      <div
        className={`w-80 sm:w-96 h-80 sm:h-96 ${service.bgColor} rounded-full flex flex-col items-center justify-center text-center p-8 sm:p-16 shrink-0 group-hover:shadow-xl shadow-[#3EA3DE4D] transition-shadow duration-300`}
      >
        {/* Image Icon */}
        <img
          src={service.image}
          alt={service.title}
          className="w-24 sm:w-32 h-24 sm:h-32 mb-3"
        />

        {/* Title */}
        <h3 className="text-lg font-semibold text-[#434242] mb-2">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-[#5E5E5E]">{service.description}</p>
      </div>
    </div>
  ))}
</div>

      </div>
    </article>
  );
};

export default SecurityServices;
