import React, { useEffect } from "react";
import { FaCheck } from "react-icons/fa6";

const ContactModal = ({ message, onClose }) => {
  useEffect(() => {
    document.body.classList.add("overflow-hidden");

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  return (
    <div
      className="fixed inset-0 flex justify-center items-center z-50 px-3"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}
    >
      <div className="bg-white rounded-lg shadow-lg w-auto px-5 sm:px-8 py-12">
        <div className="flex items-center gap-5 mb-8">
          <div className="bg-green-800 p-3 rounded-full text-white text-xl">
            <FaCheck />
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-green-800">{message}</h2>
        </div>
        <div className="flex justify-end">
          <button
            className="border border-green-800 text-green-800 py-2 px-4 rounded-full hover:bg-green-700 hover:text-white font-bold cursor-pointer text-sm sm:text-base"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
