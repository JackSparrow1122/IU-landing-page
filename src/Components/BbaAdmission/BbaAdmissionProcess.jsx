"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaPenAlt,
  FaFileContract,
  FaCheckCircle,
  FaArrowCircleRight,
} from "react-icons/fa";

/* ---------------- DATA & CONFIG ---------------- */

// Brand Colors
const COLORS = {
  red: "#990000",
  darkBlue: "#011E5A",
  deepNavy: "#051D58",
  yellow: "#F4C430",
};

// Steps (UNCHANGED)
const steps = [
  {
    id: 1,
    title: "Online Application",
    desc: "Fill the admission form on our website with academic details and personal information. ",
    icon: <FaLaptopCode />,
    bgColor: COLORS.red,
    textColor: "text-white",
  },
  {
    id: 2,
    title: "Entrance Examination",
    desc: "Appear for CUET or Indira University Common Entrance Test (IU- CET) for BBA admission.",
    icon: <FaPenAlt />,
    bgColor: COLORS.darkBlue,
    textColor: "text-white",
  },
  {
    id: 3,
    title: "Document Verification",
    desc: "Submit academic certificates, ID proof, and admission fee.",
    icon: <FaFileContract />,
    bgColor: COLORS.deepNavy,
    textColor: "text-white",
  },
  {
    id: 4,
    title: "Admission Confirmation",
    desc: "Check the merit lists to confirm your seat in India's leading BBA programme at Indira University.",
    icon: <FaCheckCircle />,
    bgColor: COLORS.red,
    textColor: "text-white",
  },
];

/* ---------------- COMPONENT ---------------- */

const BBAAdmissionProcess = () => {
  const [visibleSteps, setVisibleSteps] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleSteps((prev) =>
        prev < steps.length ? prev + 1 : prev
      );
    }, 600);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-white py-16 sm:py-20 px-4 sm:px-6 md:px-10 overflow-x-hidden font-sans">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-[#011E5A] mb-4">
              BBA Admission <span className="text-[#990000]"> Open 2026-2027</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto font-medium">
              How to Apply for BBA at Indira University?
            </p>
          </motion.div>
        </div>

        {/* STEPS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-12 md:gap-x-6 relative">
          {steps.map((step, index) => {
            const isActive = index < visibleSteps;

            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isActive ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5 }}
                className="relative flex flex-col items-center text-center group px-2"
              >
                {/* CONNECTOR (DESKTOP ONLY) */}
                {index !== steps.length - 1 && (
                  <div className="hidden md:block absolute top-[42px] left-[55%] w-full z-0">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isActive ? { width: "100%" } : {}}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      className="h-[2px] bg-gray-300 relative"
                    >
                      <span className="absolute right-0 -top-[6px] text-gray-400 text-sm">
                        <FaArrowCircleRight />
                      </span>
                    </motion.div>
                  </div>
                )}

                {/* ICON */}
                <div
                  className={`relative z-10 w-16 h-16 sm:w-20 sm:h-20 rounded-full 
                  flex items-center justify-center text-2xl sm:text-3xl
                  shadow-lg border-4 border-white transition-transform duration-300 
                  group-hover:scale-110 ${step.textColor}`}
                  style={{ backgroundColor: step.bgColor }}
                >
                  {step.icon}
                </div>

                {/* TEXT */}
                <div className="mt-5 sm:mt-6">
                  <h3 className="text-base sm:text-lg font-bold text-[#011E5A] mb-2 leading-tight">
                    Step {step.id}: <br /> {step.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BBAAdmissionProcess;
