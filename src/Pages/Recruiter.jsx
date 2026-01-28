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
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

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

    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
      setIsTablet(width >= 768 && width < 1024);
    };

    // Initial check
    handleResize();

    document.addEventListener("visibilitychange", handleVisibilityChange);
    window.addEventListener("resize", handleResize);
    
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Dynamic rows based on screen size
  const getRows = () => {
    if (isMobile) {
      // Mobile: 1 row with all logos
      return [logos];
    } else if (isTablet) {
      // Tablet: 2 rows
      const logosPerRow = Math.ceil(logos.length / 2);
      return [
        logos.slice(0, logosPerRow),
        logos.slice(logosPerRow, logosPerRow * 2)
      ];
    } else {
      // Desktop: 3 rows
      const logosPerRow = Math.ceil(logos.length / 3);
      return [
        logos.slice(0, logosPerRow),
        logos.slice(logosPerRow, logosPerRow * 2),
        logos.slice(logosPerRow * 2)
      ];
    }
  };

  // Render a single row of logos
  const renderLogoRow = (logosArray, rowIndex, animationDirection = "left") => {
    const isReverse = animationDirection === "right";

    return (
      <div 
        key={`row-${rowIndex}`}
        className="logo-row relative w-full mb-4 md:mb-6 lg:mb-8"
      >
        <div
          className={`logo-row-track flex ${isVisible ? "animate" : ""} ${
            isReverse ? "reverse-animation" : ""
          }`}
        >
          {/* Original logos */}
          {logosArray.map((logo, index) => (
            <div
              key={`row-${rowIndex}-${index}`}
              className="logo-slide flex-none mx-1 sm:mx-2 md:mx-3 lg:mx-4
                         bg-white rounded-lg sm:rounded-xl
                         border border-[#2899A4]/30 sm:border-[#2899A4]/40
                         shadow-[0_4px_12px_rgba(40,153,164,0.15)] sm:shadow-[0_6px_20px_rgba(40,153,164,0.25)]
                         transition-all duration-300 ease-in-out
                         hover:shadow-[0_8px_25px_rgba(40,153,164,0.35)] lg:hover:shadow-[0_12px_35px_rgba(40,153,164,0.45)]
                         hover:-translate-y-0.5 sm:hover:-translate-y-1
                         active:scale-95"
            >
              <img
                src={logo}
                alt={`Recruiter Logo ${rowIndex * logosArray.length + index + 1}`}
                className="h-10 sm:h-14 md:h-16 lg:h-20 xl:h-24 
                           max-w-[80px] sm:max-w-[100px] md:max-w-[120px] lg:max-w-[140px] xl:max-w-[160px]
                           object-contain p-1 sm:p-2 md:p-3"
                loading="lazy"
              />
            </div>
          ))}

          {/* Duplicate for seamless loop */}
          {logosArray.map((logo, index) => (
            <div
              key={`row-${rowIndex}-duplicate-${index}`}
              className="logo-slide flex-none mx-1 sm:mx-2 md:mx-3 lg:mx-4
                         bg-white rounded-lg sm:rounded-xl
                         border border-[#2899A4]/30 sm:border-[#2899A4]/40
                         shadow-[0_4px_12px_rgba(40,153,164,0.15)] sm:shadow-[0_6px_20px_rgba(40,153,164,0.25)]
                         transition-all duration-300 ease-in-out
                         hover:shadow-[0_8px_25px_rgba(40,153,164,0.35)] lg:hover:shadow-[0_12px_35px_rgba(40,153,164,0.45)]
                         hover:-translate-y-0.5 sm:hover:-translate-y-1
                         active:scale-95"
            >
              <img
                src={logo}
                alt={`Recruiter Logo ${rowIndex * logosArray.length + index + 1}`}
                className="h-10 sm:h-14 md:h-16 lg:h-20 xl:h-24 
                           max-w-[80px] sm:max-w-[100px] md:max-w-[120px] lg:max-w-[140px] xl:max-w-[160px]
                           object-contain p-1 sm:p-2 md:p-3"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    );
  };

  const rows = getRows();
  const animationDirections = ["left", "right", "left"]; // Pattern for desktop

  return (
    <div className="logo-slider-section py-6 sm:py-8 md:py-10 lg:py-12 roboto-regular overflow-hidden bg-white">
      {/* Heading */}
      <div className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12 px-4 sm:px-6 md:px-8">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 
                       font-bold text-[#011E5A] mb-2 md:mb-3 lg:mb-4">
          Top Recruiters
        </h2>
        <p className="text-gray-600 text-xs sm:text-sm md:text-base lg:text-lg 
                     max-w-2xl sm:max-w-3xl md:max-w-4xl mx-auto
                     px-2 sm:px-4 md:px-6 lg:px-8">
          Three decades of excellence, thousands of successful careers, and a
          proven track record of transforming students into business leaders.
        </p>
      </div>

      {/* Logo Slider */}
      <div className="logo-slider-container relative w-full  mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
        {/* Render rows */}
        {rows.map((rowLogos, index) => (
          renderLogoRow(
            rowLogos, 
            index + 1, 
            isMobile ? "left" : (isTablet ? (index % 2 === 0 ? "left" : "right") : animationDirections[index])
          )
        ))}

        {/* Fade edges for each row */}
        <div className="absolute left-0 top-0 h-full w-8 sm:w-12 md:w-16 lg:w-20 xl:w-24 
                       bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 h-full w-8 sm:w-12 md:w-16 lg:w-20 xl:w-24 
                       bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
      </div>

      {/* Mobile indicator dots */}
      {isMobile && (
        <div className="flex justify-center items-center mt-4 space-x-2">
          <div className="w-2 h-2 rounded-full bg-[#2899A4] opacity-100"></div>
          <div className="text-xs text-gray-500">Swipe to see more →</div>
        </div>
      )}

      {/* CSS */}
      <style>{`
        .logo-slider-container {
          padding: 0 4px;
        }

        @media (min-width: 640px) {
          .logo-slider-container {
            padding: 0 8px;
          }
        }

        @media (min-width: 768px) {
          .logo-slider-container {
            padding: 0 12px;
          }
        }

        @media (min-width: 1024px) {
          .logo-slider-container {
            padding: 0 16px;
          }
        }

        .logo-row-track {
          width: fit-content;
          will-change: transform;
        }

        .logo-row-track.animate {
          animation: slideLeft linear infinite;
        }

        .logo-row-track.reverse-animation.animate {
          animation: slideRight linear infinite;
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

        /* Mobile (xs - sm) */
        @media (max-width: 639px) {
          .logo-row-track.animate {
            animation-duration: 40s;
          }
          
          .logo-row-track.reverse-animation.animate {
            animation-duration: 35s;
          }
        }

        /* Small tablets (sm - md) */
        @media (min-width: 640px) and (max-width: 767px) {
          .logo-row:nth-child(1) .logo-row-track.animate {
            animation-duration: 35s;
          }
          
          .logo-row:nth-child(2) .logo-row-track.reverse-animation.animate {
            animation-duration: 32s;
          }
        }

        /* Tablets (md - lg) */
        @media (min-width: 768px) and (max-width: 1023px) {
          .logo-row:nth-child(1) .logo-row-track.animate {
            animation-duration: 45s;
          }
          
          .logo-row:nth-child(2) .logo-row-track.reverse-animation.animate {
            animation-duration: 40s;
          }
        }

        /* Desktop (lg - xl) */
        @media (min-width: 1024px) and (max-width: 1279px) {
          .logo-row:nth-child(1) .logo-row-track.animate {
            animation-duration: 50s;
          }
          
          .logo-row:nth-child(2) .logo-row-track.reverse-animation.animate {
            animation-duration: 45s;
          }
          
          .logo-row:nth-child(3) .logo-row-track.animate {
            animation-duration: 55s;
          }
        }

        /* Large Desktop (xl+) */
        @media (min-width: 1280px) {
          .logo-row:nth-child(1) .logo-row-track.animate {
            animation-duration: 60s;
          }
          
          .logo-row:nth-child(2) .logo-row-track.reverse-animation.animate {
            animation-duration: 55s;
          }
          
          .logo-row:nth-child(3) .logo-row-track.animate {
            animation-duration: 65s;
          }
        }

        /* Reduce motion for accessibility */
        @media (prefers-reduced-motion: reduce) {
          .logo-row-track.animate,
          .logo-row-track.reverse-animation.animate {
            animation-duration: 120s !important;
          }
        }

        /* Touch device optimizations */
        @media (hover: none) and (pointer: coarse) {
          .logo-slide {
            touch-action: pan-y;
          }
          
          .logo-slide:active {
            transform: scale(0.98);
          }
        }
      `}</style>
    </div>
  );
};

export default CompRecruiter;