import React, { useEffect } from "react";
import Image1 from "../../assets/Program Overview 3.jpg";

// AOS
import AOS from "aos";
import "aos/dist/aos.css";

function BbaAdmissionOverview() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
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
  );
}

export default BbaAdmissionOverview;
