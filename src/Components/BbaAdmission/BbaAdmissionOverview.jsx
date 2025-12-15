import React, { useEffect } from "react";
import Image1 from "../../assets/program overview 2.jpg";

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
          Shape Your Future with Our Premier BBA Programme
        </h2>

        <p className="text-sm md:text-lg text-gray-600 tracking-wide">
          Our BBA programme is designed to transform aspiring students into
          industry-ready business professionals. As a top choice in Pune, we
          offer a robust curriculum that blends core management principles with
          modern specializations in Marketing, Finance, HR, Digital Marketing,
          Logistics, and more. Through case studies, live projects, and
          internships, students gain both knowledge and practical expertise.
          Admissions for 2025 are now open—begin your journey in business
          leadership today.
        </p>
      </div>

      {/* Right Part: Single Image */}
      <div className="flex-1 w-full" data-aos="fade-left">
        <img
          src={Image1}
          alt="BBA Programme"
          className="w-full h-[250px] md:h-[420px] object-cover rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
}

export default BbaAdmissionOverview;
