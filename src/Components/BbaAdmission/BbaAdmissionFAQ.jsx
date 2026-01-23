import React, { useState } from "react";
import { FaArrowDown } from "react-icons/fa";
import { FaPlus, FaMinus } from "react-icons/fa6"; // Updated icons for a cleaner look

/* ---------------- FAQ DATA ---------------- */
const FAQ_DATA = [
  {
    question:
      "Q1. What is the eligibility for BBA admission at Indira University?",
    answer:
      "You need to have passed 10+2 from any recognized board with minimum 45% aggregate. All streams (Commerce, Science, Arts) are eligible.",
  },
  {
    question: "Q2. Which entrance exams are accepted for BBA admission?",
    answer:
      "We accept CUET, IPU CET, NPAT, and conduct our own Indira University Entrance Test (IUET). Merit-based admission is also available for 90%+ scorers.",
  },
  {
    question: "Q3. What is the BBA course fee at Indira University Pune?",
    answer:
      "The annual fee ranges from ₹2.5-4 Lakh depending on the programme (General BBA, Honours, or Integrated BBA-MBA). Scholarships up to 100% are available.",
  },
  {
    question: "Q4. What is the average placement package for BBA graduates?",
    answer:
      "The average package is ₹8-12 LPA with highest going up to ₹18 LPA. Top recruiters include Deloitte, Amazon, KPMG, and 500+ companies.",
  },
  {
    question: "Q5. Can I pursue MBA after BBA from Indira University?",
    answer:
      "Yes! Our BBA graduates have been placed in top B-schools including IIMs, XLRI, FMS, and international universities. We also offer integrated BBA-MBA programmes.",
  },
  {
    question: "Q6. Are hostel facilities available?",
    answer:
      "Yes, we provide separate air-conditioned hostels for boys and girls with WiFi, mess, gym, and 24/7 security.",
  },
  {
    question: "Q7. What specializations are offered in BBA?",
    answer:
      "We offer specializations in Digital Marketing, Finance & Banking, International Business, HR, Business Analytics, Entrepreneurship, and Supply Chain Management.",
  },
  {
    question: "Q8. Is work experience required for BBA admission?",
    answer:
      "No, BBA is an undergraduate programme for students directly after 12th. No work experience is required.",
  },
  {
    question: "Q10. What are the career opportunities after BBA?",
    answer:
      "BBA graduates work in roles like Management Trainee, Business Analyst, Marketing Executive, Financial Analyst, HR Executive, Operations Manager, or start their own ventures.",
  },
];

/* ---------------- SUB-COMPONENT ---------------- */

const AccordionItem = ({ item, isOpen, onClick }) => {
  return (
    <div
      className={`group border border-gray-100 rounded-2xl bg-white overflow-hidden transition-all duration-300 hover:shadow-lg ${
        isOpen ? "shadow-md ring-1 ring-blue-100" : ""
      }`}
    >
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between px-6 py-5 text-left focus:outline-none"
        aria-expanded={isOpen}
      >
        <span
          className={`text-lg font-semibold transition-colors duration-300 ${
            isOpen
              ? "text-[#990000]"
              : "text-gray-800 group-hover:text-[#990000]"
          }`}
        >
          {item.question}
        </span>

        {/* Icon Container */}
        <span
          className={`flex-shrink-0 ml-4 w-8 h-8 flex items-center justify-center rounded-full transition-all duration-300 ${
            isOpen
              ? "bg-[#990000] text-white rotate-180"
              : "bg-gray-50 text-[#990000] group-hover:bg-[#990000]/10"
          }`}
        >
          {isOpen ? <FaArrowDown size={12} /> : <FaArrowDown size={12} />}
        </span>
      </button>

      {/* CSS Grid Trick for Height Animation:
         This transitions from 0fr to 1fr, allowing us to animate height:auto
      */}
      <div
        className={`grid transition-[grid-template-rows] duration-300 ease-out ${
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-dashed border-gray-100 pt-4">
            {item.answer}
          </div>
        </div>
      </div>
    </div>
  );
};

/* ---------------- MAIN COMPONENT ---------------- */

function BbaAdmissionFAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="relative px-6 md:px-12 py-20 bg-slate-50 poppins-regular overflow-hidden">
      {/* Decorative Background Elements (CSS only, lightweight) */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-40">
        <div className="absolute -top-[20%] -right-[10%] w-[500px] h-[500px] rounded-full bg-blue-100 blur-3xl mix-blend-multiply filter" />
        <div className="absolute top-[20%] -left-[10%] w-[400px] h-[400px] rounded-full bg-indigo-100 blur-3xl mix-blend-multiply filter" />
      </div>

      <div className="relative max-w-7xl mx-auto z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQ_DATA.map((item, index) => (
            <AccordionItem
              key={index}
              item={item}
              isOpen={activeIndex === index}
              onClick={() => toggleFAQ(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default BbaAdmissionFAQ;
