"use client";
import React from "react";
import { FaUserGraduate, FaFileAlt, FaUniversity, FaUsers, FaCheckCircle } from "react-icons/fa";

export default function BBAAdmissionSection() {
  const steps = [
    {
      title: "Online Application",
      desc: "Fill the admission form with academic and personal details.",
      icon: <FaFileAlt />,
    },
    {
      title: "Entrance Examination",
      desc: "Appear for CUET, IPU CET, NPAT, or IUET.",
      icon: <FaUniversity />,
    },
    {
      title: "Personal Interview & GD",
      desc: "Showcase leadership, communication, and career vision.",
      icon: <FaUsers />,
    },
    {
      title: "Document Verification",
      desc: "Submit certificates, ID proof, and admission fee.",
      icon: <FaFileAlt />,
    },
    {
      title: "Admission Confirmation",
      desc: "Receive offer letter and confirm your seat.",
      icon: <FaCheckCircle />,
    },
  ];

  return (
    <section className="w-full bg-white py-20 px-4 md:px-10">
      <div className="max-w-7xl mx-auto">

        {/* Headline */}
        <h1 className="text-center text-3xl md:text-5xl font-bold mb-6 text-[#011E5A]">
          BBA Admission 2026 Open
        </h1>

        <p className="text-center text-lg md:text-xl font-semibold text-[#990000] mb-12">
          Apply for Best BBA College in Pune
        </p>

        {/* Eligibility */}
        <div className="bg-[#051D58] rounded-2xl p-6 md:p-10 mb-16 text-white">
          <h2 className="text-2xl font-bold mb-4">Eligibility Criteria for BBA Admission</h2>
          <ul className="space-y-2 text-sm md:text-base">
            <li>• Passed 10+2 (Class 12) from any recognized board (CBSE, ICSE, State Board)</li>
            <li>• All streams eligible: Commerce, Science, Arts</li>
            <li>• Minimum 45% aggregate (40% for reserved categories)</li>
            <li>• Age: 17–25 years as on admission date</li>
          </ul>
        </div>

        {/* Process Flow */}
        <h2 className="text-2xl md:text-3xl font-bold text-center text-[#011E5A] mb-12">
          How to Apply for BBA at Indira University
        </h2>

        <div className="relative">
          {/* Line */}
          <div className="hidden md:block absolute top-10 left-0 right-0 h-[2px] bg-[#011E5A]/30" />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
            {steps.map((step, i) => (
              <div key={i} className="relative flex flex-col items-center text-center">
                
                {/* Circle */}
                <div className="w-20 h-20 rounded-full flex items-center justify-center 
                                text-white text-2xl shadow-lg mb-4"
                     style={{ backgroundColor: i % 2 === 0 ? "#990000" : "#011E5A" }}>
                  {step.icon}
                </div>

                {/* Text */}
                <h3 className="font-bold text-[#011E5A] mb-2 text-lg">
                  Step {i + 1}
                </h3>

                <h4 className="font-semibold text-[#051D58] mb-2">
                  {step.title}
                </h4>

                <p className="text-sm text-[#051D58]/80 max-w-[220px]">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Entrance Exams */}
        <div className="mt-20 grid md:grid-cols-2 gap-10">

          <div className="bg-[#011E5A] text-white rounded-2xl p-8">
            <h3 className="text-xl font-bold mb-4">Entrance Exams Accepted</h3>
            <ul className="space-y-2 text-sm md:text-base">
              <li>• CUET (Common University Entrance Test)</li>
              <li>• IPU CET</li>
              <li>• NPAT (NMIMS)</li>
              <li>• Indira University Entrance Test (IUET)</li>
            </ul>
          </div>

          <div className="bg-[#990000] text-white rounded-2xl p-8 flex flex-col justify-center">
            <h3 className="text-xl font-bold mb-4">Merit-Based Admission</h3>
            <p className="text-base font-medium">
              Direct merit-based admission available for students scoring
              <span className="font-bold"> 90%+ </span> in Class 12.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
