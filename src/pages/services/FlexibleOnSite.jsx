import React from "react";
import ServiceBanner from "../../components/ServicesBanner";
import mainImage from "../../assets/servicesImages/Flexible-onsite/mainImage.png";
import img1 from "../../assets/servicesImages/Flexible-onsite/img1.png";
import icon1 from "../../assets/servicesImages/Flexible-onsite/icon1.png";
import icon2 from "../../assets/servicesImages/Flexible-onsite/icon2.png";
import icon3 from "../../assets/servicesImages/Flexible-onsite/icon3.png";
import icon4 from "../../assets/servicesImages/Flexible-onsite/icon4.png";
import icon5 from "../../assets/servicesImages/Flexible-onsite/icon5.png";
import BorderLine from "../../components/BorderLine";
import { FaCheck } from "react-icons/fa";

const FlexibleOnSite = () => {

  const features = [
    {
      number: 1,
      title: 'Countries',
      description: 'Over 10000+ resource in more than 190 Countries.',
    },
    {
      number: 2,
      title: 'Staff',
      description: 'Includes a well-trained staff that guarantees capacity',
    },
    {
      number: 3,
      title: 'Terms',
      description: 'Offers flexible engagement terms',
    },
    {
      number: 4,
      title: 'Best Practice',
      description: 'Provides access to the best practice methodologies',
    },
    {
      number: 5,
      title: 'Contractors',
      description: 'Combines stability and control of permanent staff through the flexibility of contractors',
    },
    {
      number: 6,
      title: 'Partnerships',
      description: 'Development of long-term partnership',
    },
    {
      number: 7,
      title: 'Resources',
      description: 'Access to high quality IT resources and skills',
    },
  ];

  const services = [
    {
      icon: icon1,
      title: 'On-Demand Dispatch',
    },
    {
      icon: icon2,
      title: 'Cabling & Wireless Solutions',
    },
    {
      icon: icon3,
      title: 'Recurring On-Site Services',
    },
    {
      icon: icon4,
      title: 'Depot Services',
    },
    {
      icon: icon5,
      title: 'On-Site Projects',
    },
  ];

  return (
    <article>
      {/* Banner section */}
      <ServiceBanner
        image={mainImage}
        title={
          <>
            FLEXIBLE ON-SITE SUPPORT
            <br />( L1,L2,L3 AND L4)
          </>
        }
        description="Our team of experienced and certified IT professionals can provide onsite support for a variety of issues."
      />

      <section className="max-w-6xl mx-auto py-10 sm:py-16 px-5 sm:px-0">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-[600] text-[#FCB813] mb-4 sm:mb-6 font-kannada text-center">
          OVERVIEW
        </h2>
        <p className="text-[#5E5E5E] leading-8">
          We recognize the pivotal role technology plays in your business and
          the potential ramifications of any disruptions. Our on-site
          (L1/L2/L3/L4) support, complemented by our in-house NOC and SOC teams,
          is crafted to uphold your IT infrastructure and guarantee seamless
          business operations.
          <br />
          Hardware Issues: We can diagnose and fix hardware issues with your
          desktops, laptops, servers, printers, and other peripherals.
          <br />
          Software Issues: Our team can help you troubleshoot and resolve issues
          with software applications, operating systems, and other software
          tools.
          <br />
          Network and Connectivity Issues: We can assist you with network and
          connectivity issues including internet connectivity, routers,
          switches, and firewalls.
          <br />
          Data Backup and Recovery: We can help you ensure that your critical
          data is backed up and can be quickly recovered in the event of a
          disaster. IT Security: We can help you implement security measures to
          protect your network and data from cyber threats, including malware
          and phishing attacks.
        </p>
      </section>

      <div className="px-5 sm:px-0 max-w-6xl mx-auto">
        <BorderLine />
      </div>

      <section>
      <div className=" max-w-6xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-semibold text-center text-[#1D51A2] my-6 sm:my-10">
        Managed Cybersecurity Services
      </h2>

      {/* Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-8 text-sm">
        <button className="bg-[#FCB8134D] text-[#5E5E5E] cursor-pointer font-semibold py-2 px-2 rounded shadow">
          Local IT Support
        </button>
        <button className="text-[#5E5E5E] bg-[#3EA3DE4D] cursor-pointer font-semibold py-2 px-2 rounded shadow">
          Helping Smarthands
        </button>
        <button className="text-[#5E5E5E] bg-[#3EA3DE4D] cursor-pointer font-semibold py-2 px-2 rounded shadow">
          Retail IT Services
        </button>
        <button className="text-[#5E5E5E] bg-[#3EA3DE4D] cursor-pointer font-semibold py-2 px-2 rounded shadow">
          IMAC
        </button>
        <button className="text-[#5E5E5E] bg-[#3EA3DE4D] cursor-pointer font-semibold py-2 px-2 rounded shadow">
          DATA CENTER SUPPORT
        </button>
        <button className="text-[#5E5E5E] bg-[#3EA3DE4D] cursor-pointer font-semibold py-2 px-2 rounded shadow">
          ITAD Services
        </button>
        <button className="text-[#5E5E5E] bg-[#3EA3DE4D] cursor-pointer font-semibold py-2 px-2 rounded shadow">
          Lifecycle Support
        </button>
        <button className="text-[#5E5E5E] bg-[#3EA3DE4D] cursor-pointer font-semibold py-2 px-2 rounded shadow">
          Retainers Model
        </button>
      </div>

      {/* Content Section */}
      <div className="px-5 sm:px-0">
          <h3 className="text-xl font-bold text-blue-700 my-6 sm:my-8 text-center">LOCAL IT SUPPORT</h3>
        <div className="flex flex-col sm:flex-row items-center gap-6 my-6">
          <p className="text-[#5E5E5E] mb-4 max-w-xl leading-7">
            Your users need comprehensive support, including on-site. We are happy to provide specialists (or teams)
            who support and advise your users on site with technical questions and problem solving. Your local IT is
            relieved and can focus on other activities.
          <br />
          <br />
            By choosing IP Global, you’re not just opting for an IT solution; you’re partnering with a community-focused
            ally who understands your unique challenges. Let our local expertise bring peace of mind to your business
            operations, ensuring your technology works seamlessly and efficiently. With IP Global at your side, you’ve
            got a local IT champion, dedicated to empowering your success.
          </p>
        <div>
          <img
            src={img1}
            alt="Local IT Support"
            className="rounded-xl shadow-md w-full object-cover"
          />
        </div>
        </div>
      </div>
    </div>
      </section>

      <div className="max-w-6xl mx-auto py-6 sm:py-10 px-5 sm:px-0">
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
        {features.map(({ number, title, description }) => (
          <div key={number} className="space-y-1 flex gap-5 sm:gap-8">
            <h3 className="text-blue-700 text-xl sm:text-3xl font-semibold">{number}</h3>
            <div>
            <p className="font-semibold text-gray-900 my-1 sm:my-2">{title}</p>
            <p className="text-gray-600 text-sm">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className="max-w-6xl mx-auto px-4 sm:px-0 py-6 sm:py-10 pb-10">
      <div className="md:flex justify-between items-start mb-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4 md:mb-0">Our Onsite IT Engineer</h2>
        <p className="md:w-1/2 text-gray-600 text-sm leading-7">
          IP Global assigns you an onsite engineer to help you in the case of an emergency.
          <br />
          Our onsite engineer is well-trained to offer you first-line support to help you
          resume your business operations expeditiously.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 px-5 sm:px-0">
        {services.map((service, index) => (
          <div
          key={index}
          className="group flex flex-col items-center sm:items-start rounded-lg px-6 sm:px-10 py-10 sm:py-12 shadow-md border border-gray-100 hover:bg-[#3EA3DE] transition duration-300"
        >
          <img src={service.icon} alt={service.title} className="w-16 h-16 text-blue-600" />
          <p className="mt-6 sm:mt-8 text-sm font-medium text-gray-800 group-hover:text-white">
            {service.title}
          </p>
        </div>
        
        ))}
      </div>

      <div className="flex flex-col sm:flex-row justify-between gap-6 sm:gap-20 mt-12 sm:mb-6">
      <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:w-60">Our Strategy</h2>
      <ul className="space-y-4">
        <li className="flex items-start">
          <span className="bg-[#3EA3DE] p-1 rounded-full text-white text-xs shrink-0"><FaCheck /></span>
          <p className="ml-3 text-gray-700 text-sm leading-6">
            We analyze usage by assessing the number of requests, problems, and
            incidents to understand how your business operates.
          </p>
        </li>
        <li className="flex items-start">
        <span className="bg-[#3EA3DE] p-1 rounded-full text-white text-xs shrink-0"><FaCheck /></span>
          <p className="ml-3 text-gray-700 text-sm leading-6">
            We evaluate your objectives to ensure that they can accommodate any
            fluctuations.
          </p>
        </li>
      </ul>
    </div>

    </div>
    </article>
  );
};

export default FlexibleOnSite;
