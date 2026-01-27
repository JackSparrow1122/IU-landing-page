// src/components/MarketingManagementJoin.js
import React from "react";
import backgroundImage from "../../assets/Images/nb-abstract.avif";
import { FiDownload } from "react-icons/fi";

function MarketingManagementJoin() {
  const handleDownloadBrochure = () => {
    const link = document.createElement("a");
    link.href = "/brochure/BBA-Brochure.pdf";
    link.download = "BBA-Brochure.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="relative overflow-hidden">
      {/* Background image */}
      <div
        className="bg-cover bg-center absolute inset-0"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#990000] via-[#011E5A] to-[#051D58] opacity-70 z-10" />

      {/* Text content */}
      <div className="relative z-20 px-8 md:px-16 py-10">
        <div className="text-center">
          <h1 className="text-xl md:text-3xl font-bold text-white mb-4">
Everything you need to make an informed decision – course details, placements, and your college life at Indira University.          </h1>

        

          {/* Download Brochure Button */}
          <button
            onClick={handleDownloadBrochure}
            className="inline-flex items-center gap-2 bg-white text-[#003C84] font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-gray-100 transition-all duration-300"
          >
            <FiDownload size={20} />
            Download Brochure
          </button>
        </div>
      </div>
    </div>
  );
}

export default MarketingManagementJoin;
