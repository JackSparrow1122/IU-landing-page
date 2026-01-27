import {
  FaBullhorn,
  FaHandshake,
  FaChartLine,
  FaRegCalendarAlt,
  FaUsers,
  FaRegClipboard,
} from "react-icons/fa";
import { useEffect } from "react";
import { gsap } from "gsap";
import AOS from "aos";
import "aos/dist/aos.css";

function BbaAdmissionOfferings() {
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

  return (
    <div className="px-8 md:px-16 py-4 md:py-8 bg-[#f3f4f6] poppins-regular">
      <h2
        className="text-3xl md:text-4xl font-bold text-center mb-4 md:mb-8 text-[#135883]"
        data-aos="fade-up"
      >
        Why Choose Us?
      </h2>
      <h2
        className="text-xl md:text-2xl font-bold text-center mb-4 md:mb-8 text-[#135883]"
        data-aos="fade-up"
      >
        At the School of Business, we provide an unmatched management education
        built on excellence{" "}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 justify-center max-w-auto mx-auto md:max-w-4xl">
        {[
          FaBullhorn,
          FaHandshake,
          FaRegCalendarAlt,
          FaChartLine,
          FaUsers,
          FaRegClipboard,
        ].map((Icon, index) => (
          <div
            key={index}
            className="bg-[#011E5A] p-4 shadow-xl flex flex-col items-start text-left relative rounded-xl transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <Icon size={40} className="text-[#FECD46] mb-4 icon" />
            <p className="text-white">
              {(() => {
                const text = [
                  "Advanced Infrastructure: Smart classrooms, business labs, and a digital library designed for interactive learning.",
                  "Strong Placements: Consistent recruitment by top companies, supported by dedicated career guidance.",
                  "Vibrant Campus Life: National fests, industry talks, and cultural events that build confidence and networks.",
                  "Industry Readiness Training: Structured modules in communication, aptitude, and interview skills to ensure corporate readiness.",
                  "Growing Alumni Network: Access to mentors and professionals across industries.",
                  "Experiential Learning: Learn through simulations, expert sessions, and mandatory internships.",
                ][index];

                const [title, desc] = text.split(":");

                return (
                  <>
                    <span className="font-bold text-md md:text-lg block">
                      {title}:
                    </span>
                    <span className="text-sm md:text-base opacity-90">
                      {desc}
                    </span>
                  </>
                );
              })()}
            </p>

            <div className="circle absolute bottom-[-20px] right-[-20px] w-12 h-12 bg-white rounded-full shadow-2xl"></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BbaAdmissionOfferings;
