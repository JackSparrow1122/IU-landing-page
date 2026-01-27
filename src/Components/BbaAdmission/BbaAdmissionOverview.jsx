import React, { useEffect } from "react";
import Image1 from "../../assets/Program Overview 3.jpg";

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
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Main Content with Left-Right Layout */}
      <div className="flex flex-col md:flex-row-reverse items-center gap-8 px-8 md:px-16 py-6 poppins-regular overflow-hidden">
        {/* Left Part: Program Overview */}
        <div className="flex-1" data-aos="fade-right">
          <h2 className="text-3xl md:text-4xl font-bold text-[#135883] mb-4">
            Top BBA University in Maharashtra
          </h2>

          <p className="text-sm md:text-lg text-gray-600 tracking-wide">
            Indira University – SOB Pune stands among the top BBA colleges in
            India, offering a world-class Bachelor of Business Administration
            programme designed for aspiring business leaders, entrepreneurs, and
            management professionals. Our BBA course after 12th provides the
            perfect foundation for MBA aspirants and corporate careers.
          </p>
        </div>

        {/* Right Part: Single Image */}
        <div className="flex-1 w-full" data-aos="fade-left">
          <img
            src={Image1}
            alt="BBA Programme"
            className="w-full h-[250px] md:h-[420px] object-contain"
          />
        </div>
      </div>

      {/* Key Highlights Below Both Sections - Same width as above */}
      <div className="px-8 md:px-16 py-8" data-aos="fade-up">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 justify-center max-w-auto mx-auto md:max-w-7xl">
          {cardData.map((item, index) => (
            <div
              key={index}
              className="bg-[#011E5A] p-4 shadow-xl flex flex-col items-start text-left relative rounded-xl transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <item.icon size={40} className="text-[#FECD46] mb-4 icon" />
              <p className="text-white">
                <span className="font-bold text-md md:text-lg block">
                  {item.title}:
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