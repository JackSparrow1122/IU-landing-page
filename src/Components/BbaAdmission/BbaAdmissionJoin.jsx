// src/components/MarketingManagementJoin.js
import React from "react";
import backgroundImage from "../../assets/Images/nb-abstract.avif";
import brochurePDF from "../../assets/Brochure.pdf"; // Import the PDF
import { FiDownload } from "react-icons/fi";

function MarketingManagementJoin() {
  const handleDownloadBrochure = () => {
    try {
      // Method 1: Direct download via anchor tag
      const link = document.createElement("a");
      link.href = brochurePDF;
      link.download = "Indira-University-BBA-Brochure.pdf"; // Custom file name
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      // Optional: Track download event (for analytics)
      console.log("Brochure download initiated");
      
    } catch (error) {
      console.error("Error downloading brochure:", error);
      // Fallback: Open in new tab
      window.open(brochurePDF, '_blank');
    }
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
            Get everything you need to make an informed decision – course details, placements, and your college life at Indira University.
          </h1>

          {/* Download Brochure Button */}
          <button
            onClick={handleDownloadBrochure}
            className="inline-flex items-center gap-2 bg-white text-[#003C84] font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-gray-100 hover:scale-105 active:scale-95 transition-all duration-300 transform"
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