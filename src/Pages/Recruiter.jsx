import React, { useEffect, useState } from "react";

import logo1 from "../assets/Images/bba-logo/1.JPG";
import logo2 from "../assets/Images/bba-logo/2.JPG";
import logo3 from "../assets/Images/bba-logo/3.JPG";
import logo4 from "../assets/Images/bba-logo/4.JPG";
import logo5 from "../assets/Images/bba-logo/5.JPG";
import logo6 from "../assets/Images/bba-logo/6.JPG";
import logo7 from "../assets/Images/bba-logo/7.JPG";
import logo8 from "../assets/Images/bba-logo/8.JPG";
import logo9 from "../assets/Images/bba-logo/9.JPG";
import logo10 from "../assets/Images/bba-Logo/10.jpg"
import logo11 from "../assets/Images/bba-logo/11.JPG"
import logo12 from "../assets/Images/bba-logo/12.JPG"
import logo13 from "../assets/Images/bba-logo/13.JPG"
import logo14 from "../assets/Images/bba-logo/14.JPG"
import logo15 from "../assets/Images/bba-logo/15.JPG"
import logo16 from "../assets/Images/bba-logo/16.JPG"
import logo17 from "../assets/Images/bba-logo/17.JPG"
import logo18 from "../assets/Images/bba-logo/18.JPG"
import logo19 from "../assets/Images/bba-logo/19.JPG"
import logo20 from "../assets/Images/bba-logo/20.JPG"
import logo21 from "../assets/Images/bba-logo/21.JPG"
import logo22 from "../assets/Images/bba-logo/22.JPG"
import logo23 from "../assets/Images/bba-logo/23.JPG"
import logo24 from "../assets/Images/bba-logo/24.JPG"
import logo25 from "../assets/Images/bba-logo/24.JPG"
import logo26 from "../assets/Images/bba-logo/26.JPG"
import logo27 from "../assets/Images/bba-logo/27.JPG"


const CompRecruiter = () => {
  const [isVisible, setIsVisible] = useState(true);

  const logos = [
    logo1,
    logo2,
    logo3,
    logo4,
    logo5,
    logo6,
    logo7,
    logo8,
    logo9,
    logo11,
    logo12,
    logo13,
    logo10,
    logo18,
    logo22,
    logo14,
    logo15,
    logo16,
    logo17,
    logo19,
    logo20,
    logo21,
    logo23,
    logo24,
    logo25,
    logo26,
    logo27,
  ];

  useEffect(() => {
    const handleVisibilityChange = () => {
      setIsVisible(!document.hidden);
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () =>
      document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, []);

  return (
    <div className="logo-slider-section py-6 roboto-regular bg-white">
      {/* Heading */}
      <div className="text-center mb-6">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#003C84]">
          Top{" "}
          <span className="bg-[#FCC409] text-black rounded-3xl px-5">
            Recruiters
          </span>
        </h2>
      </div>

      {/* Slider */}
      <div className="logo-slider relative overflow-hidden w-full">
        <div className={`logo-slider-track flex ${isVisible ? "animate" : ""}`}>
          {/* Logos */}
          {logos.map((logo, index) => (
            <div
              key={index}
              className="logo-slide flex-none mx-3 md:mx-5
                         bg-white rounded-xl
                         border border-[#2899A4]/40
                         shadow-[0_6px_20px_rgba(40,153,164,0.25)]
                         transition-all duration-300
                         hover:shadow-[0_12px_35px_rgba(40,153,164,0.45)]
                         hover:-translate-y-1"
            >
              <img
                src={logo}
                alt={`Recruiter Logo ${index + 1}`}
                className="h-16 md:h-24 max-w-[160px] object-contain p-4"
              />
            </div>
          ))}

          {/* Duplicate for seamless loop */}
          {logos.map((logo, index) => (
            <div
              key={`duplicate-${index}`}
              className="logo-slide flex-none mx-3 md:mx-5
                         bg-white rounded-xl
                         border border-[#2899A4]/40
                         shadow-[0_6px_20px_rgba(40,153,164,0.25)]
                         transition-all duration-300
                         hover:shadow-[0_12px_35px_rgba(40,153,164,0.45)]
                         hover:-translate-y-1"
            >
              <img
                src={logo}
                alt={`Recruiter Logo ${index + 1}`}
                className="h-16 md:h-24 max-w-[160px] object-contain p-4"
              />
            </div>
          ))}
        </div>

        {/* Fade edges */}
        <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white to-transparent z-10" />
      </div>

      {/* CSS */}
      <style>{`
        .logo-slider {
          padding: 0 20px;
        }

        .logo-slider-track {
          width: fit-content;
        }

        .logo-slider-track.animate {
          animation: slide 40s linear infinite;
        }

        .logo-slider:hover .logo-slider-track {
          animation-play-state: paused;
        }

        @keyframes slide {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @media (max-width: 640px) {
          .logo-slider-track.animate {
            animation-duration: 30s;
          }
        }
      `}</style>
    </div>
  );
};

export default CompRecruiter;
