import React, { useEffect, useState } from "react";

import logo1 from "../assets/Images/bba-logo/1.jpg";
import logo2 from "../assets/Images/bba-logo/2.jpg";
import logo3 from "../assets/Images/bba-logo/3.jpg";
import logo4 from "../assets/Images/bba-logo/4.jpg";
import logo5 from "../assets/Images/bba-logo/5.jpg";
import logo6 from "../assets/Images/bba-logo/6.jpg";
import logo7 from "../assets/Images/bba-logo/7.jpg";
import logo8 from "../assets/Images/bba-logo/8.jpg";
import logo9 from "../assets/Images/bba-logo/9.jpg";
import logo10 from "../assets/Images/bba-logo/10.jpg";
import logo11 from "../assets/Images/bba-logo/11.jpg";
import logo12 from "../assets/Images/bba-logo/12.jpg";
import logo13 from "../assets/Images/bba-logo/13.jpg";
import logo14 from "../assets/Images/bba-logo/14.jpg";
import logo15 from "../assets/Images/bba-logo/15.jpg";
import logo16 from "../assets/Images/bba-logo/16.jpg";
import logo17 from "../assets/Images/bba-logo/17.jpg";
import logo18 from "../assets/Images/bba-logo/18.jpg";
import logo19 from "../assets/Images/bba-logo/19.jpg";
import logo20 from "../assets/Images/bba-logo/20.jpg";
import logo21 from "../assets/Images/bba-logo/21.jpg";
import logo22 from "../assets/Images/bba-logo/22.jpg";
import logo23 from "../assets/Images/bba-logo/23.jpg";
import logo24 from "../assets/Images/bba-logo/24.jpg";
import logo25 from "../assets/Images/bba-logo/24.jpg";
import logo26 from "../assets/Images/bba-logo/26.jpg";
import logo27 from "../assets/Images/bba-logo/27.jpg";

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

  // Split logos into 3 rows
  const logosPerRow = Math.ceil(logos.length / 3);
  const row1 = logos.slice(0, logosPerRow);
  const row2 = logos.slice(logosPerRow, logosPerRow * 2);
  const row3 = logos.slice(logosPerRow * 2);

  useEffect(() => {
    const handleVisibilityChange = () => {
      setIsVisible(!document.hidden);
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () =>
      document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, []);

  // Render a single row of logos
  const renderLogoRow = (logosArray, rowIndex, animationDirection = "left") => {
    const isReverse = animationDirection === "right";
    
    return (
      <div className="logo-row relative w-full mb-6 md:mb-8">
        <div 
          className={`logo-row-track flex ${isVisible ? "animate" : ""} ${
            isReverse ? "reverse-animation" : ""
          }`}
        >
          {/* Original logos */}
          {logosArray.map((logo, index) => (
            <div
              key={`row-${rowIndex}-${index}`}
              className="logo-slide flex-none mx-2 md:mx-3 lg:mx-4
                         bg-white rounded-xl
                         border border-[#2899A4]/40
                         shadow-[0_6px_20px_rgba(40,153,164,0.25)]
                         transition-all duration-300
                         hover:shadow-[0_12px_35px_rgba(40,153,164,0.45)]
                         hover:-translate-y-1"
            >
              <img
                src={logo}
                alt={`Recruiter Logo ${rowIndex * logosPerRow + index + 1}`}
                className="h-14 md:h-20 lg:h-24 max-w-[120px] md:max-w-[140px] lg:max-w-[160px] object-contain p-2 md:p-2"
              />
            </div>
          ))}

          {/* Duplicate for seamless loop */}
          {logosArray.map((logo, index) => (
            <div
              key={`row-${rowIndex}-duplicate-${index}`}
              className="logo-slide flex-none mx-2 md:mx-3 lg:mx-4
                         bg-white rounded-xl
                         border border-[#2899A4]/40
                         shadow-[0_6px_20px_rgba(40,153,164,0.25)]
                         transition-all duration-300
                         hover:shadow-[0_12px_35px_rgba(40,153,164,0.45)]
                         hover:-translate-y-1"
            >
              <img
                src={logo}
                alt={`Recruiter Logo ${rowIndex * logosPerRow + index + 1}`}
                className="h-14 md:h-20 lg:h-24 max-w-[120px] md:max-w-[140px] lg:max-w-[160px] object-contain p-2 md:p-2"
              />
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="logo-slider-section py-8 md:py-12 roboto-regular overflow-hidden bg-white">
      {/* Heading */}
      <div className="text-center mb-8 md:mb-12">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#011E5A] mb-2">
          Top{" "}
          <span className="bg-[#FCC409] text-black rounded-3xl px-4 sm:px-5 py-1 inline-block">
            Recruiters
          </span>
        </h2>
        <p className="text-gray-600 text-sm sm:text-base md:text-lg">
          Our students get placed in leading companies worldwide
        </p>
      </div>

      {/* Three Row Slider */}
      <div className="logo-slider-container relative w-full max-w-7xl mx-auto px-4">
        {/* Row 1 - Left to Right */}
        {renderLogoRow(row1, 1, "left")}
        
        {/* Row 2 - Right to Left */}
        {renderLogoRow(row2, 2, "right")}
        
        {/* Row 3 - Left to Right */}
        {renderLogoRow(row3, 3, "left")}

        {/* Fade edges for each row */}
        <div className="absolute left-0 top-0 h-full w-16 md:w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 h-full w-16 md:w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
      </div>

      {/* CSS */}
      <style>{`
        .logo-slider-container {
          padding: 0 10px;
        }

        .logo-row-track {
          width: fit-content;
        }

        .logo-row-track.animate {
          animation: slideLeft 50s linear infinite;
        }

        .logo-row-track.reverse-animation.animate {
          animation: slideRight 45s linear infinite;
        }

        .logo-row:hover .logo-row-track {
          animation-play-state: paused;
        }

        @keyframes slideLeft {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes slideRight {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        /* Different animation speeds for visual interest */
        .logo-row:nth-child(1) .logo-row-track.animate {
          animation-duration: 50s;
        }
        
        .logo-row:nth-child(2) .logo-row-track.animate {
          animation-duration: 45s;
        }
        
        .logo-row:nth-child(3) .logo-row-track.animate {
          animation-duration: 55s;
        }

        @media (max-width: 768px) {
          .logo-row:nth-child(1) .logo-row-track.animate {
            animation-duration: 35s;
          }
          
          .logo-row:nth-child(2) .logo-row-track.animate {
            animation-duration: 30s;
          }
          
          .logo-row:nth-child(3) .logo-row-track.animate {
            animation-duration: 40s;
          }
        }

        @media (max-width: 640px) {
          .logo-row {
            margin-bottom: 4px;
          }
          
          .logo-row:nth-child(1) .logo-row-track.animate {
            animation-duration: 25s;
          }
          
          .logo-row:nth-child(2) .logo-row-track.animate {
            animation-duration: 22s;
          }
          
          .logo-row:nth-child(3) .logo-row-track.animate {
            animation-duration: 28s;
          }
        }
      `}</style>
    </div>
  );
};

export default CompRecruiter;