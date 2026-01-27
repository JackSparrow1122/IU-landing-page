import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion, AnimatePresence } from "framer-motion";

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

const specializations = [
  {
    name: "Marketing Management",
   
    image: marketingImage,
    description: "Develop expertise in digital marketing strategies, brand management, consumer behavior, and market research. This marketing degree programme covers sales management, advertising, marketing analytics, social media marketing, and content strategy. Learn SEO, SEM, marketing automation, and CRM while working on real marketing campaigns.",
    careerOutcomes: [
      "Brand Manager",
      "Digital Marketing Manager",
      "Marketing Research Analyst",
      "Product Manager",
      "Sales Manager",
      "Market Development Manager"
    ]
  },
  {
    name: "Financial Management",
   
    image: financialImage,
    description: "Master corporate finance, investment analysis, financial planning, and portfolio management. This finance-focused programme covers financial accounting, financial markets, risk management, financial modeling, and investment banking. Gain expertise in financial statement analysis, budgeting, capital budgeting, and stock market analysis.",
    careerOutcomes: [
      "Financial Analyst",
      "Investment Banker",
      "Portfolio Manager",
      "Financial Planning & Analysis",
      "Risk Management Analyst",
      "Corporate Finance Manager "
    ]
  },
  {
    name: "Human Resource Management",
 
    image: hrImage,
    description: "Excel in talent acquisition, employee engagement, performance management, and organizational behavior. This HR-focused programme covers recruitment strategies, training and development, compensation and benefits, labor laws, and HR analytics. Master HRIS systems, workforce planning, talent management, and employee relations.",
    careerOutcomes: [
      "HR Manager",
      "Talent Acquisition Manager",
      "Learning & Development Manager",
      "Compensation & Benefits Manager",
      "HR Business Partner",
      "Employee Engagement Manager "
    ]
  },
  {
    name: "Digital Marketing",
   
    image: digitalMarketingImage,
    description: "Master SEO, SEM, social media marketing, content marketing, and marketing automation in this tech-driven program. Gain hands-on experience with Google Analytics, Google Ads, Facebook Ads, Instagram marketing, and e-commerce marketing. Includes certifications in Google Digital Marketing and HubSpot.",
    careerOutcomes: [
      "SEO/SEM Specialist",
      "Social Media Manager",
      "Content Marketing Manager",
      "Performance Marketing Manager",
      "E-commerce Marketing Manager",
      "Growth Hacking Specialist"
    ]
  },
  
  {
    name: "Banking and Financial Services",
 
    image: bankingImage,
    description: "Specialize in retail banking, corporate banking, investment banking, and digital banking operations. This industry-aligned programme covers credit management, loan processing, banking regulations, RBI guidelines, and fintech innovations. Learn core banking solutions, mobile banking, and treasury operations.",
    careerOutcomes: [
      "Relationship Manager",
      "Credit Analyst",
      "Branch Manager",
      "Treasury Manager",
      "Loan Officer",
       "Wealth Management Advisor"
    ]
  },
  {
    name: "International Business Management",
 
    image: internationalBusinessImage,
    description: "Integrate international marketing, global finance, international HRM, and cross-border strategy in this comprehensive program. Study multinational business strategies, global market entry modes, foreign direct investment, and international business ethics. Explore emerging markets and BRICS economies.",
    careerOutcomes: [
      "International Operations Manager",
      "Global Strategy Consultant",
      "Foreign Trade Analyst",
      "International Procurement Manager",
      "Global Business Development Manager",
      "Regional Business Manager (Asia-Pacific/Middle East/Europe)"
    ]
  },
  {
    name: "Logistics and Supply Chain Management",
  
    image: logisticsImage,
    description: "Master supply chain planning, inventory management, warehouse management, procurement, and logistics optimization. This operations-focused programme covers demand forecasting, supply chain analytics, ERP systems, transportation management, and vendor management. Gain training in SAP, lean management, and Six Sigma.",
    careerOutcomes: [
      "Supply Chain Manager",
      "Logistics Coordinator",
      "Procurement Manager",
      "Warehouse Manager",
      "Operation Manager",
      "Demand Planning Manager"
    ]
  },
  {
    name: "Innovation and Entrepreneurship",
   
    image: innovationImage,
    description: "Transform business ideas into reality with training in design thinking, lean startup methodology, business model innovation, and venture capital. This startup-focused programme covers entrepreneurial finance, new venture creation, startup funding, and pitch development. Access incubation centers and mentorship from successful entrepreneurs.",
    careerOutcomes: [
      "Startup Founder/Entrepreneur",
      "Business Development Manager",
      "Innovation Consultant",
      "Venture Capital Analyst",
      "Product Innovation Manager",
      "Corporate Innovation Manager"
    ]
  }
];

// Motion variants
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const fadeSide = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0 },
};

function BbaAdmissionCourses() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [open, setOpen] = useState(false);

  const currentSpecialization = specializations[selectedIndex];

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="px-8 md:px-16 py-12 bg-white poppins-regular"
    >
      {/* Heading */}
      <motion.div
        variants={fadeUp}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <h2 className="text-4xl font-bold mb-4 text-black">
          Explore BBA Specializations at Indira University Pune
        </h2>
        <p className="text-lg text-gray-700">
          Choose from India's most comprehensive range of BBA courses designed for career excellence
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
        {/* LEFT SIDE LIST */}
        <motion.div
          variants={fadeUp}
          transition={{ staggerChildren: 0.08 }}
          className="md:col-span-5 lg:col-span-4 flex flex-col gap-2"
        >
          {specializations.map((course, index) => {
            const isSelected = selectedIndex === index;

            return (
              <motion.div
                key={index}
                variants={fadeUp}
                whileHover={{ scale: 1.015 }}
                onClick={() => setSelectedIndex(index)}
                className="cursor-pointer"
              >
                <div
                  className={`flex items-center justify-between px-6 py-5 rounded-full transition-colors duration-300 ${
                    isSelected
                      ? "bg-[#fcc409] text-black"
                      : "text-gray-600 hover:text-black"
                  }`}
                >
                  <span className="text-lg font-medium">{course.name}</span>
                  {isSelected && <span className="text-2xl">→</span>}
                </div>

                {!isSelected && <hr className="border-gray-200 mx-6" />}
              </motion.div>
            );
          })}
        </motion.div>

        {/* RIGHT SIDE CONTENT */}
        <div className="md:col-span-7 lg:col-span-8 relative">
          <div className="hidden md:block absolute -left-8 top-0 h-full w-px bg-gray-200" />

          <AnimatePresence mode="wait">
            <motion.div
              key={selectedIndex}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0 }}
              variants={fadeSide}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              {/* Specialization Details */}
              <div className="mb-10">
                <h3 className="text-2xl font-bold text-[#b1124a] mb-4">
                  {currentSpecialization.name}
                </h3>
                
               

                <p className="text-gray-700 leading-8 mb-8 text-lg">
                  {currentSpecialization.description}
                </p>
              </div>

              <h3 className="text-xl font-semibold text-[#b1124a] mb-6">
                Top Career Opportunities
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 mb-12">
                {currentSpecialization.careerOutcomes.map((outcome, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-center gap-3"
                  >
                    <span className="text-[#b1124a]">✔</span>
                    <span className="font-medium">{outcome}</span>
                  </motion.div>
                ))}
              </div>

              {/* Program Highlights with Image */}
              <div className="bg-gray-50  border border-gray-200 mb-8">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  {/* Image Section */}
                  <div className="md:w-full">
                    <img 
                      src={specializations.image || currentSpecialization.image}
                      alt="Program Highlights"
                      className="w-full h-56 object-cover rounded-lg shadow-lg"
                    />
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setOpen(true)}
                className="mt-8 bg-[#b1124a] text-white w-full px-8 py-3 rounded-lg font-semibold text-lg hover:bg-[#90103d] transition-colors duration-300"
              >
                Apply Now for {currentSpecialization.name}
              </motion.button>
            </motion.div>
          </AnimatePresence>
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
    </motion.div>
  );
}

export default BbaAdmissionCourses;