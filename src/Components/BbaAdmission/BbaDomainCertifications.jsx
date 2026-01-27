import React from "react";
import logo from "../../assets/logo.png";
const certifications = [
  {
    id: 1,
    title: "Executive Program on GST",
    logo: logo,
    description: "Master Goods and Services Tax regulations, compliance, and implementation strategies.",
    category: "Taxation"
  },
  {
    id: 2,
    title: "Certification on Financial Modelling & Financial Analyst",
    logo: logo,
    description: "Advanced financial modeling techniques for investment analysis and business valuation.",
    category: "Finance"
  },
  {
    id: 3,
    title: "Digital Marketing with AI",
    logo: logo,
    description: "Leverage artificial intelligence for data-driven marketing strategies and campaign optimization.",
    category: "Marketing"
  },
  {
    id: 4,
    title: "Certification course in Import & Export",
    logo: logo,
    description: "Comprehensive guide to international trade procedures, documentation, and regulations.",
    category: "International Business"
  },
  {
    id: 5,
    title: "Stock Techniques",
    logo: logo,
    description: "Technical analysis, trading strategies, and risk management in stock markets.",
    category: "Trading"
  },
  {
    id: 6,
    title: "Global Patenting & Product Licensing",
    logo:logo,
    description: "Intellectual property rights, patent filing procedures, and licensing agreements worldwide.",
    category: "Legal"
  },
  {
    id: 7,
    title: "Investment Banking",
    logo: logo,
    description: "M&A, capital raising, financial advisory, and corporate restructuring.",
    category: "Banking"
  },
  {
    id: 8,
    title: "Design Thinking for Innovation",
    logo: logo,
    description: "Human-centered approach to problem-solving and innovation strategy.",
    category: "Innovation"
  },
  {
    id: 9,
    title: "Fintech",
    logo: logo,
    description: "Blockchain, digital payments, robo-advisors, and regulatory technology.",
    category: "Technology"
  },
  {
    id: 10,
    title: "Business Analytics",
    logo: logo,
    description: "Data-driven decision making with statistical analysis and predictive modeling.",
    category: "Analytics"
  },
  {
    id: 11,
    title: "NISM Certifications",
    logo: logo,
    description: "Securities markets, mutual funds, derivatives, and research analysis certifications.",
    category: "Regulatory"
  }
];

const DomainCertifications = () => {
  return (
    <section className="w-full bg-gradient-to-r from-[#7A0C1E] via-[#5C1233] to-[#2A0F3F] text-black px-4 sm:px-6 md:px-12 lg:px-20 py-12 md:py-16">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-10 md:mb-16">
          <span className="inline-block mb-4 px-4 py-1.5 bg-white/10 backdrop-blur-sm text-white font-semibold tracking-wide rounded-full border border-white/20">
            CERTIFICATION PROGRAMMES
          </span>
          
          <h2 className="text-3xl md:text-5xl font-bold italic mb-4 text-white">
            Domain Specific <span className="text-yellow-400">Certifications</span>
          </h2>
          
          <p className="text-white max-w-2xl mx-auto text-sm md:text-base">
            Industry-recognized certifications to validate your expertise and accelerate your career growth
          </p>
        </div>

        {/* Certification Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-8">
          {certifications.map((cert) => (
            <div 
              key={cert.id}
              className="group relative bg-white rounded-2xl p-5 hover:border-white/30 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-900/20 cursor-pointer"
            >
              {/* Logo in top right corner */}
              <div className="absolute -top-6 -right-6  rounded-full">
                <div className="w-20 h-20 rounded-full  flex items-center justify-center">
                  <img 
                    src={cert.logo} 
                    alt={`${cert.title} logo`}
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Category Tag */}
              <div className="mb-4">
                <span className="inline-block px-3 py-1 text-lg font-medium bg-[#FCC409] rounded-full border border-white/20">
                  {cert.category}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold mb-3 pr-10  transition-colors duration-300">
                {cert.title}
              </h3>

              {/* Description */}
              <p className="text-black text-sm leading-relaxed mb-5">
                {cert.description}
              </p>

         

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-yellow-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default DomainCertifications;