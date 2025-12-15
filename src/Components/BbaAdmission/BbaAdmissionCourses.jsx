import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

const PRIMARY_COLOR = "#135783";

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

function BbaAdmissionCourses() {
  const courses = [
    { name: "Marketing Management", duration: "3 Years", fees: "₹1,25,000/year", image: marketingImage },
    { name: "Financial Management", duration: "3 Years", fees: "₹1,25,000/year", image: financialImage },
    { name: "Human Resource Management", duration: "3 Years", fees: "₹1,25,000/year", image: hrImage },
    { name: "Logistics and Supply Chain Management", duration: "3 Years", fees: "₹1,25,000/year", image: logisticsImage },
    { name: "International Business", duration: "3 Years", fees: "₹1,25,000/year", image: internationalBusinessImage },
    { name: "Banking and Financial Services", duration: "3 Years", fees: "₹1,25,000/year", image: bankingImage },
    { name: "Digital Marketing", duration: "3 Years", fees: "₹1,25,000/year", image: digitalMarketingImage },
    { name: "Innovation and Entrepreneurship", duration: "3 Years", fees: "₹1,25,000/year", image: innovationImage },
  ];

  const [open, setOpen] = React.useState(false);

  return (
    <div className="px-8 md:px-16 py-6 bg-[#f3f4f6] poppins-regular">
      
      {/* Heading */}
      <h2
        className="text-3xl md:text-4xl font-bold text-center mb-8"
        style={{ color: PRIMARY_COLOR }}
        data-aos="fade-up"
      >
        BBA Courses
      </h2>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {courses.map((course, index) => (
          <div
            key={index}
            data-aos="fade-up"
            className="rounded-xl flex flex-col justify-between overflow-hidden transition-all transform hover:scale-105"
            style={{
              background: `linear-gradient(180deg, ${PRIMARY_COLOR}, #1f6f91, #2a9da2)`,
              minHeight: "360px",
              boxShadow:
                "0px 4px 20px rgba(19, 87, 131, 0.35), 0px 8px 30px rgba(19, 87, 131, 0.25)",
            }}
          >
            {/* Image */}
            <img
              src={course.image}
              alt={course.name}
              className="w-full h-40 object-cover object-top"
            />

            {/* Content */}
            <div className="px-6 py-4 flex flex-col h-full">
              <h3 className="text-xl font-semibold text-white mb-2">
                {course.name}
              </h3>

              <p className="text-sm text-gray-100">
                Duration: {course.duration}
              </p>

              <p className="text-sm text-gray-100 mt-1">
                Fees: {course.fees}
              </p>

              {/* Apply Button */}
              <button
                onClick={() => setOpen(true)}
                className="mt-auto bg-white text-[#135783] px-4 py-2 rounded-full font-semibold transition-all hover:bg-gray-100 hover:shadow-lg"
              >
                Apply Now
              </button>
            </div>
          </div>
        ))}
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
