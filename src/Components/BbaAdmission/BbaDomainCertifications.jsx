import React from "react";

const certifications = [
  "Executive Program on GST",
  "Certification on Financial Modelling & Financial Analyst",
  "Digital Marketing with AI",
  "Certification course in Import & Export",
  "Stock Techniques",
  "Global Patenting & Product Licensing",
  "Investment Banking",
  "Design Thinking for Innovation",
  "Fintech",
  "Business Analytics",
  "NISM Certifications",
];

const DomainCertifications = () => {
  return (
    <section className="w-full bg-gradient-to-r from-[#7A0C1E] via-[#5C1233] to-[#2A0F3F] text-white px-6 md:px-16 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-center">
        {/* LEFT CONTENT */}
        <div className="lg:col-span-3">
          <span className="inline-block mb-4 px-4 py-1 bg-white text-black font-semibold tracking-wide">
            CERTIFICATION PROGRAMMES
          </span>

          <h2 className="text-3xl md:text-4xl font-semibold italic mb-6">
            Domain Specific Certifications
          </h2>

          <ul className="space-y-3 text-sm md:text-base">
            {certifications.map((item, index) => (
              <li key={index} className="flex gap-2">
                <span className="text-yellow-400">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex items-center gap-4">
            <span className="flex-1 h-px bg-white/40"></span>
            <span className="italic text-lg">Up your Game!</span>
            <span className="flex-1 h-px bg-white/40"></span>
          </div>
        </div>

        {/* RIGHT IMAGE STACK */}
        <div className="lg:col-span-2 grid grid-cols-2 gap-4">
          {[
            "/assets/certifications/gst.jpg",
            "/assets/certifications/analytics.jpg",
            "/assets/certifications/marketing.jpg",
            "/assets/certifications/trading.jpg",
            "/assets/certifications/fintech.jpg",
            "/assets/certifications/innovation.jpg",
          ].map((img, i) => (
            <div key={i} className="overflow-hidden rounded-xl bg-black">
              <img
                src={img}
                alt="Certification Domain"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DomainCertifications;
