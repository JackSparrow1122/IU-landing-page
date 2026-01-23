import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";

// Images
import marketingImage from "../../assets/one.jpg";
import financialImage from "../../assets/two.jpg";
import hrImage from "../../assets/three.jpg";
import logisticsImage from "../../assets/four.jpg";
import internationalBusinessImage from "../../assets/five.jpg";
import bankingImage from "../../assets/six.jpg";
import digitalMarketingImage from "../../assets/sev.jpg";
import innovationImage from "../../assets/eight.jpg";

// MUI
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

// Widget
import NPFWidget from "../../Components/NPFWidget";

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 420,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 3,
  borderRadius: "12px",
};

const courses = [
  {
    name: "Marketing Management",
    duration: "3 Years",
    fees: "₹1,25,000/year",
    image: marketingImage,
  },
  {
    name: "Financial Management",
    duration: "3 Years",
    fees: "₹1,25,000/year",
    image: financialImage,
  },
  {
    name: "Human Resource Management",
    duration: "3 Years",
    fees: "₹1,25,000/year",
    image: hrImage,
  },
  {
    name: "Logistics and Supply Chain Management",
    duration: "3 Years",
    fees: "₹1,25,000/year",
    image: logisticsImage,
  },
  {
    name: "International Business",
    duration: "3 Years",
    fees: "₹1,25,000/year",
    image: internationalBusinessImage,
  },
  {
    name: "Banking and Financial Services",
    duration: "3 Years",
    fees: "₹1,25,000/year",
    image: bankingImage,
  },
  {
    name: "Digital Marketing",
    duration: "3 Years",
    fees: "₹1,25,000/year",
    image: digitalMarketingImage,
  },
  {
    name: "Innovation and Entrepreneurship",
    duration: "3 Years",
    fees: "₹1,25,000/year",
    image: innovationImage,
  },
];

function BbaAdmissionCourses() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [open, setOpen] = useState(false);

  return (
    <div className="px-8 md:px-16 py-12 bg-white poppins-regular">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-12 text-black"
      >
        Specializations
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
        {/* LEFT SIDE LIST */}
        <div className="md:col-span-5 lg:col-span-4 flex flex-col gap-2">
          {courses.map((course, index) => {
            const isSelected = selectedIndex === index;

            return (
              <div
                key={index}
                onClick={() => setSelectedIndex(index)}
                className="cursor-pointer"
              >
                <div
                  className={`flex items-center justify-between px-6 py-5 rounded-full ${
                    isSelected
                      ? "bg-[#fcc409] text-black"
                      : "text-gray-600 hover:text-black"
                  }`}
                >
                  <span className="text-lg font-medium">{course.name}</span>
                  {isSelected && <span className="text-2xl">→</span>}
                </div>

                {!isSelected && <hr className="border-gray-200 mx-6" />}
              </div>
            );
          })}
        </div>

        {/* RIGHT SIDE CONTENT */}
        <div className="md:col-span-7 lg:col-span-8 relative">
          <div className="hidden md:block absolute -left-8 top-0 h-full w-px bg-gray-200" />

          <p className="text-gray-700 leading-8 mb-10 text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <h3 className="text-xl font-semibold text-[#b1124a] mb-6">
            Students can choose to specialize in-
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 mb-12">
            {courses.map((course, index) => (
              <div key={index} className="flex items-center gap-3">
                <span className="text-[#b1124a]">✔</span>
                <span>{course.name}</span>
              </div>
            ))}
          </div>

          <h3 className="text-xl font-semibold text-[#b1124a] mb-6">
            Career outcomes
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
            {[1, 2, 3, 4, 5, 6].map((_, index) => (
              <div key={index} className="flex items-center gap-3">
                <span className="text-[#b1124a]">✔</span>
                <span>Lorem ipsum dolor</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      <Modal open={open} onClose={() => setOpen(false)}>
        <Box sx={modalStyle}>
          <NPFWidget />
        </Box>
      </Modal>

      {/* Toast */}
      <ToastContainer
        position="top-center"
        autoClose={3000}
        newestOnTop
        closeOnClick
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default BbaAdmissionCourses;
