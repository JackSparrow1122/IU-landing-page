import React, { useEffect, useRef, useState } from "react";
import shitaImage from "../../assets/sample.webp";

const students = [
  {
    name: "SHITA KHATRI",
    company: "Trident Group",
    feedback:
      "Indira helped me build confidence and industry-ready skills that shaped my career.",
    image: shitaImage,
  },
  {
    name: "MANIK SALARIA",
    company: "MNC",
    feedback:
      "The exposure and mentorship at Indira played a crucial role in my placement.",
    image: shitaImage,
  },
  {
    name: "AMANDEEP KAUR",
    company: "Federal Bank",
    feedback:
      "Practical learning and guidance helped me transition smoothly into corporate life.",
    image: shitaImage,
  },
  {
    name: "RAHUL SHARMA",
    company: "Google",
    feedback:
      "Indira shaped my analytical thinking and leadership abilities.",
    image: shitaImage,
  },
  {
    name: "PRIYA PATEL",
    company: "Microsoft",
    feedback:
      "The curriculum and faculty support helped me reach my goals.",
    image: shitaImage,
  },
];

const TopPlacements = () => {
  const sliderRef = useRef(null);
  const animationRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const positionRef = useRef(0);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const speed = 1;

    const animate = () => {
      if (!isHovered) {
        positionRef.current -= speed;

        if (Math.abs(positionRef.current) >= slider.scrollWidth / 2) {
          positionRef.current = 0;
        }

        slider.style.transform = `translateX(${positionRef.current}px)`;
      }
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationRef.current);
  }, [isHovered]);

  return (
    <div className="px-4 md:px-16 py-6 bg-[#FCC409] overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center">

        {/* LEFT CONTENT */}
        <div className="md:col-span-2">
          <span className="inline-block mb-4 px-4 py-1 text-2xl md:text-4xl font-semibold rounded-full bg-[#003C84] text-white">
            TOP PLACEMENTS
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            From Campus <br /> to Corporate
          </h2>

          <p className="text-black">
            Our students secure top placements with strong industry exposure.
          </p>
        </div>

        {/* RIGHT SLIDER */}
        <div
          className="md:col-span-3 overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div ref={sliderRef} className="flex w-max">
            {[...students, ...students].map((student, i) => (
              <div
                key={i}
                className="
                  mx-3 flex-shrink-0
                  w-[70vw]
                  sm:w-[45vw]
                  md:w-[28vw]
                  lg:w-[20vw]
                "
              >
                <div className="group overflow-hidden">

                  {/* IMAGE */}
                  <div className="relative overflow-hidden h-64 sm:h-72 md:h-80 bg-white">
                    <img
                      src={student.image}
                      alt={student.name}
                      className="
                        w-full h-full object-cover
                        transition-transform duration-500
                        group-hover:scale-110
                      "
                    />

                    {/* FEEDBACK OVERLAY */}
                    <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center px-4 text-center">
                      <p className="text-white text-sm">
                        {student.feedback}
                      </p>
                    </div>
                  </div>

                  {/* NAME + COMPANY (FIXED BELOW IMAGE, LEFT) */}
                  <div className="pt-3 text-left">
                    <h3 className="text-sm md:text-base font-semibold text-black">
                      {student.name}
                    </h3>
                    <p className="text-xs md:text-sm text-black">
                      {student.company}
                    </p>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default TopPlacements;
