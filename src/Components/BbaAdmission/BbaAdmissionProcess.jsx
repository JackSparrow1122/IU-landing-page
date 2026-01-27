"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaPenAlt,
  FaUsers,
  FaFileContract,
  FaCheckCircle,
  FaUniversity,
  FaGraduationCap,
  FaArrowCircleRight
} from "react-icons/fa";

/* ---------------- DATA & CONFIG ---------------- */

// Brand Colors
const COLORS = {
  red: "#990000",
  darkBlue: "#011E5A",
  deepNavy: "#051D58",
  yellow: "#F4C430", // Standard brand yellow
};

// 1. Eligibility Data
const eligibilityCriteria = [
  "Passed 10+2 (Class 12) from any recognized board (CBSE, ICSE, State Board)",
  "All streams eligible: Commerce, Science, Arts",
  "Minimum 45% aggregate (40% for reserved categories)",
  "Age: 17-25 years as on admission date",
];

// 2. Entrance Exams Data
const entranceExams = [
  "CUET (Common University Entrance Test)",
  "IPU CET",
  "NPAT (NMIMS)",
  "Indira University Entrance Test (IUET)",
  "Merit-based admission for 90%+ scorers",
];

// 3. The 5-Step Process Data (Mapped to Brand Colors)
const steps = [
  {
    id: 1,
    title: "Online Application",
    desc: "Fill the admission form on our website with academic details and personal information.",
    icon: <FaLaptopCode />,
    bgColor: COLORS.red,        // Red
    textColor: "text-white",
  },
  {
    id: 2,
    title: "Entrance Examination",
    desc: "Appear for CUET, IPU CET, or Indira University Entrance Test (IUET) for BBA admission.",
    icon: <FaPenAlt />,
    bgColor: COLORS.darkBlue,   // Dark Blue
    textColor: "text-white",
  },
  {
    id: 3,
    title: "Interview & GD",
    desc: "Showcase your communication skills, leadership potential, and career goals.",
    icon: <FaUsers />,
    bgColor: COLORS.yellow,     // Yellow
    textColor: "text-[#011E5A]", // Dark text for contrast on yellow
  },
  {
    id: 4,
    title: "Document Verification",
    desc: "Submit academic certificates, ID proof, and admission fee.",
    icon: <FaFileContract />,
    bgColor: COLORS.deepNavy,   // Deep Navy
    textColor: "text-white",
  },
  {
    id: 5,
    title: "Admission Confirmation",
    desc: "Receive offer letter and confirm your seat in India's leading BBA programme.",
    icon: <FaCheckCircle />,
    bgColor: COLORS.red,        // Red (Repeating for balance)
    textColor: "text-white",
  },
];

/* ---------------- COMPONENT ---------------- */

const BBAAdmissionProcess = () => {
  const [visibleSteps, setVisibleSteps] = useState(0);

  // Staggered reveal effect for the steps
  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleSteps((prev) => (prev < steps.length ? prev + 1 : prev));
    }, 600);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-white py-20 px-4 md:px-8 overflow-x-hidden font-sans">
      <div className="max-w-full mx-auto">

        {/* --- HEADER --- */}
        <div className="text-center mb-6">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl md:text-5xl font-extrabold text-[#011E5A] mb-4">
              BBA Admission <span className="text-[#990000]">2026 Open</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto font-medium">
How to Apply for BBA at Indira University?              </p>
          </motion.div>
        </div>

        {/* --- STEP 1: HOW TO APPLY (Visual Process) --- */}
        <div className="mb-24">
          <div className="flex items-center gap-3 mb-10">
        
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-y-12 md:gap-x-4 relative">
            {steps.map((step, index) => {
              const isActive = index < visibleSteps;

              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isActive ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5 }}
                  className="relative flex flex-col items-start md:items-center group"
                >
                  {/* Connecting Arrow (Desktop Only) */}
                  {index !== steps.length - 1 && (
                    <div className="hidden md:block absolute top-[40px] left-[50%] w-full z-0">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isActive ? { width: "100%" } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="h-[2px] bg-gray-300 relative"
                      >
                        <span className="absolute right-0 -top-[5px] text-gray-400 text-xs">
                          <FaArrowCircleRight />
                        </span>
                      </motion.div>
                    </div>
                  )}

                  {/* Icon Circle */}
                  <div
                    className={`relative z-10 w-20 h-20 rounded-full flex items-center justify-center 
                               text-3xl shadow-lg transition-transform duration-300 
                               group-hover:scale-110 border-4 border-white ${step.textColor}`}
                    style={{ backgroundColor: step.bgColor }}
                  >
                    {step.icon}
                  </div>

                  {/* Text Content */}
                  <div className="mt-6 text-left md:text-center w-full px-2">
                    <h3 className="text-lg font-bold text-[#011E5A] mb-2 leading-tight">
                      Step {step.id}: <br/> {step.title}
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
      </div>
    </section>
  );
};

export default BBAAdmissionProcess;