import React, { useEffect } from "react";
import Image1 from "../../assets/Building.jpg";

// AOS
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaBullhorn,
  FaHandshake,
  FaChartLine,
  FaRegCalendarAlt,
  FaUsers,
  FaRegClipboard,
  FaUserTie,
  FaGraduationCap,
} from "react-icons/fa";
import { gsap } from "gsap";
import "aos/dist/aos.css";

function BbaAdmissionOverview() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });

    const elements = document.querySelectorAll(".circle");
    const icons = document.querySelectorAll(".icon");

    elements.forEach((circle, index) => {
      const icon = icons[index];

      // Set initial state for the circle (hidden on the left)
      gsap.set(circle, { opacity: 0, x: -50 });

      circle.parentElement.addEventListener("mouseenter", () => {
        gsap.to(circle, { opacity: 1, x: 0, duration: 0.3 });
        gsap.to(icon, { rotationY: 360, duration: 0.5, ease: "power2.inOut" });
      });

      circle.parentElement.addEventListener("mouseleave", () => {
        gsap.to(circle, { opacity: 0, x: -50, duration: 0.3 });
        gsap.to(icon, { rotationY: 0, duration: 0.5, ease: "power2.inOut" });
      });
    });
  }, []);

  // 8 items के लिए data
  const cardData = [
    {
      icon: FaBullhorn,
      title: "Industry-Ready Curriculum",
    },
    {
      icon: FaHandshake,
      title: "Consistent Placement Record",
    },
    {
      icon: FaRegCalendarAlt,
      title: "Expert Faculty & Mentorship",
    },
    {
      icon: FaChartLine,
      title: "Guest Lectures & Industry Sessions",
    },
    {
      icon: FaUsers,
      title: "Advanced Infrastructure",
    },
    {
      icon: FaRegClipboard,
      title: "Industry Readiness Programme",
    },
    {
      icon: FaUserTie,
      title: "Widespread Alumni Network",
    },
    {
      icon: FaGraduationCap,
      title: "Experiential Learning Methodology",
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Main Content with Left-Right Layout */}
      <div className="relative w-full px-6 md:px-16 py-10 poppins-regular">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-right bg-no-repeat bg-contain md:bg-contain"
          style={{ backgroundImage: `url(${Image1})` }}
        />

        {/* Dark Overlay (optional but better readability) */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#990000] via-[#011E5A] to-[#051D58]/5" />

        {/* Content */}
        <div className="lg:w-2/3 text-white" data-aos="fade-right">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Top BBA College in{" "}
            <span className="text-[#FECD46]">Maharashtra</span>
          </h1>

          <div className="space-y-4">
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
              Indira University – SOB Pune stands among the{" "}
              <span className="font-semibold text-white">
                top BBA colleges in India
              </span>
              , offering an industry-curated curriculum under the Bachelor of
              Business Administration (BBA) programme.
            </p>

            <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
              Designed for aspiring business leaders, entrepreneurs, and
              management professionals, our BBA course after 12th provides the
              perfect foundation for MBA aspirants and corporate careers.
            </p>
          </div>
        </div>
      </div>

      {/* Key Highlights Below Both Sections - Same width as above */}
      <div className="px-8 md:px-16 py-8" data-aos="fade-up">
        <h2
          className="text-3xl md:text-4xl font-bold text-center mb-4 md:mb-8 text-[#135883]"
          data-aos="fade-up"
        >
          Why Choose Us?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 justify-center max-w-auto mx-auto md:max-w-7xl">
          {cardData.map((item, index) => (
            <div
              key={index}
              className="bg-[#011E5A] p-4 shadow-xl flex flex-col items-start text-left relative rounded-xl transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <item.icon size={40} className="text-[#FECD46] mb-4 icon" />
              <p className="text-white">
                <span className="font-bold text-md md:text-lg block">
                  {item.title}
                </span>
              </p>
              <div className="circle absolute bottom-[-20px] right-[-20px] w-12 h-12 bg-white rounded-full shadow-2xl"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BbaAdmissionOverview;
