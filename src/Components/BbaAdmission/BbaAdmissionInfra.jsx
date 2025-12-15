import React, { useEffect } from "react";
import {
  FaStar,
  FaBuilding,
  FaUsers,
  FaLaptop,
  FaGraduationCap,
  FaChartLine,
} from "react-icons/fa";
import MyImage from "../../assets/Images/infra.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const PRIMARY_COLOR = "#135783";

function CompStudying() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <div
      className="
        flex flex-col md:flex-row
        items-stretch   /* 👈 IMPORTANT */
        px-4 md:px-16 py-6
        poppins-regular
        overflow-hidden
      "
      style={{ background: "#F7F3EF" }}
    >
      {/* LEFT SIDE */}
      <div
        className="w-full md:w-[70%] md:pr-8 flex flex-col"
        data-aos="fade-right"
      >
        <h1
          className="text-2xl md:text-4xl font-semibold mb-2 md:mb-4"
          style={{ color: PRIMARY_COLOR }}
        >
          Learn. Lead. Succeed.
        </h1>

        <h1
          className="text-2xl md:text-4xl font-extralight mb-4 md:mb-6"
          style={{ color: PRIMARY_COLOR }}
        >
          Where Proven Legacy Meets Future-Focused Business Education.
        </h1>

        <p className="text-left text-base md:text-lg mb-4 md:mb-6 text-gray-700">
          Our campus is designed for holistic growth, featuring modern computer
          labs, interactive classrooms, well-stocked libraries, and advanced
          laboratories that ensure practical, hands-on learning. With
          comfortable hostels, seamless transportation, a hygienic canteen, and
          vibrant sports facilities, student life at Indira is both comfortable
          and dynamic. Your BBA journey is further enriched by regular industry
          interactions, guest lectures, and a lively calendar of college events
          and festivals.
        </p>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-12">
          {[
            { icon: FaStar, text: "30 Years of academic excellence" },
            { icon: FaUsers, text: "450+ leading recruiters" },
            { icon: FaBuilding, text: "Industrial guest lectures" },
            { icon: FaLaptop, text: "Top placement opportunities" },
            { icon: FaGraduationCap, text: "IT labs" },
            { icon: FaChartLine, text: "Exceptional growth opportunities" },
          ].map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-white p-3 md:p-4 flex items-center rounded-lg hover:scale-105 transition"
                style={{
                  boxShadow: `0px 6px 20px rgba(19, 87, 131, 0.35)`,
                }}
              >
                <Icon
                  className="mr-3 md:mr-4 text-2xl md:text-4xl"
                  style={{ color: PRIMARY_COLOR }}
                />
                <span className="text-xs md:text-sm font-medium text-gray-800">
                  {item.text}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div
        className="
          w-full md:w-[30%]
          flex items-stretch
          bg-white
          rounded-lg
          mt-6 md:mt-0
          overflow-hidden
        "
        data-aos="fade-left"
      >
        <img
          src={MyImage}
          alt="Indira College"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}

export default CompStudying;
