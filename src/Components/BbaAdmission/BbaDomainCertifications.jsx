import React, { useEffect, useRef, useState } from "react";
import logo from "../../assets/logo.png";

const certifications = [
  {
    id: 1,
    title: "Executive Program on GST",
  },
  {
    id: 2,
    title: "Certification on Financial Modelling & Financial Analyst",
  },
  {
    id: 3,
    title: "Digital Marketing with AI",
  },
  {
    id: 4,
    title: "Certification course in Import & Export",
  },
  {
    id: 5,
    title: "Stock Techniques",
  },
  {
    id: 6,
    title: "Global Patenting & Product Licensing",
  },
  {
    id: 7,
    title: "Investment Banking",
  },
  {
    id: 8,
    title: "Design Thinking for Innovation",
  },
  {
    id: 9,
    title: "Fintech",
  },
  {
    id: 10,
    title: "Business Analytics",
  },
  {
    id: 11,
    title: "NISM Certifications",
  },
];

const DomainCertifications = () => {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px"
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="w-full bg-gradient-to-r from-[#7A0C1E] via-[#5C1233] to-[#2A0F3F] text-black px-4 sm:px-6 md:px-12 lg:px-20 py-12 md:py-16 relative overflow-hidden"
    >
      {/* Large Logo in Top Right Corner */}
      <div className="absolute top-8 right-8 lg:top-12 lg:right-12 w-24 h-24 lg:w-32 lg:h-32 ">
        <img src={logo} alt="Logo" className="w-full h-full object-contain" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section - Centered headings */}
        <div className="text-center mb-10 md:mb-16">
          <div className="flex justify-center mb-4">
            <span className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-sm text-white font-semibold tracking-wide rounded-full border border-white/20">
              CERTIFICATION PROGRAMMES
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
            Domain Specific{" "}
            <span className="text-yellow-400">Certifications</span>
          </h2>

          <div className="flex justify-center">
            <p className="text-white max-w-2xl text-sm md:text-base">
              Industry-recognized certifications to validate your expertise and
              accelerate your career growth
            </p>
          </div>
        </div>

        {/* Certification Cards Grid - First 8 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {certifications.slice(0, 8).map((cert, index) => (
            <div
              key={cert.id}
              className={`group relative bg-white border border-gray-200 hover:border-yellow-400 transition-all duration-300 hover:shadow-2xl rounded-4xl hover:shadow-purple-900/30 cursor-pointer flex flex-col h-full min-h-[80px] hover:-translate-y-1
                ${inView ? 'animate-slide-in-right' : 'opacity-0 translate-x-full'}
              `}
              style={{
                animationDelay: `${index * 0.1}s`,
                animationFillMode: 'forwards'
              }}
            >
              {/* Content Wrapper for centering */}
              <div className="flex flex-col items-center justify-center text-center h-full">
                {/* Title - Centered */}
                <h3 className="text-base font-semibold  text-gray-800 line-clamp-4 group-hover:text-purple-700 transition-colors duration-300 px-2">
                  {cert.title}
                </h3>
              </div>

              {/* Hover effect */}
              <div className="absolute inset-0 rounded-xl  bg-gradient-to-br from-yellow-50/0 via-transparent to-purple-50/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Last 3 cards - Horizontally centered */}
        <div className="flex justify-center mt-8 md:mt-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 max-w-4xl">
            {certifications.slice(8).map((cert, index) => (
              <div
                key={cert.id}
                className={`group relative rounded-4xl bg-white p-6 border border-gray-200 hover:border-yellow-400 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-900/30 cursor-pointer flex flex-col h-full min-h-[60px] hover:-translate-y-1
                  ${inView ? 'animate-slide-in-right' : 'opacity-0 translate-x-full'}
                `}
                style={{
                  animationDelay: `${(index + 8) * 0.1}s`,
                  animationFillMode: 'forwards'
                }}
              >
                {/* Content Wrapper for centering */}
                <div className="flex flex-col items-center justify-center text-center h-full">
                  {/* Title - Centered */}
                  <h3 className="text-base font-semibold text-gray-800 line-clamp-4 group-hover:text-purple-700 transition-colors duration-300 px-2">
                    {cert.title}
                  </h3>
                </div>

                {/* Hover effect */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-yellow-50/0 via-transparent to-purple-50/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Add animation styles */}
      <style jsx>{`
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(100px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .animate-slide-in-right {
          animation: slideInRight 0.6s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default DomainCertifications;