import React, { useEffect, useRef, useState } from "react";
import logo from "../../assets/logo.png";

const certifications = [
  { id: 1, title: "Executive Program on GST" },
  { id: 2, title: "Certification on Financial Modelling & Financial Analyst" },
  { id: 3, title: "Digital Marketing with AI" },
  { id: 4, title: "Certification course in Import & Export" },
  { id: 5, title: "Stock Techniques" },
  { id: 6, title: "Global Patenting & Product Licensing" },
  { id: 7, title: "Investment Banking" },
  { id: 8, title: "Design Thinking for Innovation" },
  { id: 9, title: "Fintech" },
  { id: 10, title: "Business Analytics" },
  { id: 11, title: "NISM Certifications" },
];

const DomainCertifications = () => {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-gradient-to-r from-[#7A0C1E] via-[#5C1233] to-[#2A0F3F]
      px-4 sm:px-6 md:px-12 lg:px-20 py-12 md:py-16 relative overflow-hidden"
    >
      {/* Logo */}
      <div className="absolute top-4 right-4 sm:top-6 sm:right-6 lg:top-10 lg:right-10
        w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 opacity-90">
        <img src={logo} alt="Logo" className="w-full h-full object-contain" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-10 md:mb-16">
          <span className="inline-block px-4 py-1.5 bg-white/10 text-white text-xs sm:text-sm font-semibold rounded-full border border-white/20 mb-4">
            CERTIFICATION PROGRAMMES
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-3">
            Domain Specific{" "}
            <span className="text-yellow-400">Certifications</span>
          </h2>

          <p className="text-white text-sm sm:text-base max-w-2xl mx-auto">
            Industry-recognized certifications to validate your expertise and
            accelerate your career growth.
          </p>
        </div>

        {/* First 8 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {certifications.slice(0, 8).map((cert, index) => (
            <div
              key={cert.id}
              className={`group relative bg-white border border-gray-200 rounded-full
              hover:border-yellow-400 hover:shadow-xl transition-all duration-300
              flex items-center justify-center text-center p-4 min-h-[90px]
              ${inView ? "animate-slide-in-right" : "opacity-0 translate-x-16"}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-sm sm:text-base font-semibold text-gray-800
                group-hover:text-purple-700 transition-colors">
                {cert.title}
              </h3>
            </div>
          ))}
        </div>

        {/* Last 3 */}
        <div className="flex justify-center mt-4 md:mt-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-4xl w-full">
            {certifications.slice(8).map((cert, index) => (
              <div
                key={cert.id}
                className={`group relative bg-white border border-gray-200 rounded-full
                hover:border-yellow-400 hover:shadow-xl transition-all duration-300
                flex items-center justify-center text-center p-4 min-h-[80px]
                ${inView ? "animate-slide-in-right" : "opacity-0 translate-x-16"}`}
                style={{ animationDelay: `${(index + 8) * 0.1}s` }}
              >
                <h3 className="text-sm sm:text-base font-semibold text-gray-800
                  group-hover:text-purple-700 transition-colors">
                  {cert.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(80px);
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
