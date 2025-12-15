import React, { useEffect, useState } from "react";

// Images
import ankitImage from "../../assets/Images/test-user/Ankit_Jain.avif";
import misbahImage from "../../assets/Images/test-user/Misbah_Aryan.avif";
import akankshaImage from "../../assets/Images/test-user/Akanksha_Jain.avif";
import tanishaImage from "../../assets/Images/test-user/Tanisha_B.avif";
import salilImage from "../../assets/Images/test-user/Salil_Deshpande.avif";
import krishnaImage from "../../assets/Images/test-user/Krishna-prajapat.avif";
import giteshImage from "../../assets/Images/test-user/Gitesh-Agarwal.avif";

const testimonials = [
  {
    title:
      "Indira is a fantastic college that offers excellent faculty and a wide range of extracurricular activities throughout your academic journey. The teaching-learning structure is well-balanced, combining theoretical and practical learning, which builds a strong foundation for personal and professional growth.",
    text: "Ankit Jain",
    subtitle: "Associate, JP Morgan Chase",
    image: ankitImage,
  },
  {
    title:
      "I had countless memorable moments at Indira. The college gave me some of the best experiences, not only on campus but also through classroom sessions and real-world exposure. Indira helped me stand out in this competitive world. Even as a foreign student, I never felt like an outsider.",
    text: "Misbah Afshari",
    subtitle: "CEO, DOT",
    image: misbahImage,
  },
  {
    title:
      "Indira helped me realize my true potential and prepared me to seize new opportunities. During my time there, I was entrusted with various responsibilities that shaped my personality and enhanced my leadership skills.",
    text: "Akanksha Jain",
    subtitle: "Founder & CEO, Central Convoy",
    image: akankshaImage,
  },
  {
    title:
      "My enriching three-year journey at Indira BBA helped me improve my skills, gain confidence, and focus on self-development. Through presentations, academic activities, college fests, cultural events, and industrial visits.",
    text: "Tanisha Barnwal",
    subtitle: "Hedge Fund Analyst, Northern Trust",
    image: tanishaImage,
  },
  {
    title:
      "Indira nurtured my passion for learning and gave me a platform to grow both personally and professionally. Everyone needs an opportunity to enhance their personality, and Indira provided that space for me.",
    text: "Salil Deshpande",
    subtitle: "Senior Analyst, Deutsche Bank",
    image: salilImage,
  },
  {
    title:
      "Indira provides excellent career guidance and campus placement support, helping students build successful careers and stay ahead in the competitive job market.",
    text: "Krishna Prajapat",
    subtitle: "Vice President, Anand Rathi Wealth Limited",
    image: krishnaImage,
  },
  {
    title:
      "Indira boasts a vast and beautiful campus with outstanding infrastructure. The faculty members are highly knowledgeable, and the quality of teaching is exceptional.",
    text: "Gitesh Agarwal",
    subtitle: "CEO & Founder, Vennplay",
    image: giteshImage,
  },
];

const TestimonialsSlider = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1 > testimonials.length - 3 ? 0 : prev + 1));
    }, 3500);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-[#F7F3EF] py-12 px-4 md:px-16 overflow-hidden">
      <h2
        className="text-3xl md:text-4xl font-bold text-center mb-12"
        style={{ color: "#003C84" }}
      >
        What Our Alumni Say
      </h2>

      {/* Slider container */}
      <div className="relative overflow-visible">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${index * (100 / 3)}%)`,
          }}
        >
          {testimonials.map((item, i) => (
            <div
              key={i}
              className="w-full md:w-1/3 px-3 flex-shrink-0 overflow-visible"
            >
              <div
                className="relative bg-white rounded-2xl p-6 h-[300px] 
                           border-2 border-black flex flex-col justify-between 
                           text-center overflow-visible shadow-lg"
                style={{ 
                  backgroundColor: "#F7F3EF"
                }}
              >
                {/* Testimonial text */}
                <div className="flex-grow overflow-y-auto ">
                  <h3 className="text-gray-700 text-base leading-relaxed mb-4 px-2 text-justify">
                    "{item.title}"
                  </h3>
                </div>

                {/* Bottom section with image on left and name on right */}
                <div className="flex items-end justify-between mt-4">
                  {/* Image on Left Bottom */}
                  <div className="absolute -bottom-4 -left-4 bg-white p-1 rounded-full shadow-xl">
                    <div className="relative">
                      <img
                        src={item.image}
                        alt={item.text}
                        className="w-20 h-20 object-cover rounded-full border-4 border-white"
                      />
                      {/* Outer black border that stops at image */}
                      <div className="absolute inset-0 rounded-full border-2 border-black"></div>
                    </div>
                  </div>

                  {/* Alumni Info - Right aligned */}
                  <div className="text-right ml-auto">
                    <p 
                      className="text-lg font-semibold mb-1"
                      style={{ color: "#135783" }}
                    >
                      {item.text}
                    </p>
                    <p className="text-gray-600 text-sm">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-16">
        {Array.from({ length: testimonials.length - 2 }).map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-3 w-3 mx-2 rounded-full cursor-pointer transition-all ${
              index === i ? "bg-[#135783]" : "bg-gray-300"
            }`}
            aria-label={`Go to testimonial ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialsSlider;