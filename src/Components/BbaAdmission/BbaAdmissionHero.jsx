import { useState, useEffect, useMemo } from "react";
import backgroundImage from "../../assets/hero.jpg";
import NPFWidget from "../NPFWidget"; // Ensure NPFWidget.jsx exists and exports a valid component

function CompHero() {
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  const words = useMemo(() => ["Lead.", "Excel.", "Inspire."], []);

  useEffect(() => {
    const handleTyping = () => {
      const currentWord = words[currentWordIndex];

      if (!isDeleting) {
        if (currentText === currentWord) {
          setTimeout(() => setIsDeleting(true), 1000); // Single pause before deleting
          return;
        }
        setCurrentText(currentWord.substring(0, currentText.length + 1));
      } else {
        if (currentText === "") {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
          return;
        }
        setCurrentText(currentWord.substring(0, currentText.length - 1));
      }
    };

    const timeout = setTimeout(handleTyping, isDeleting ? 80 : 120); // Single timeout declaration
    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentWordIndex, words]);

  return (
    <div
      className="font-baskervville-regular px-4 sm:px-8 md:px-16 relative pt-8 bg-cover bg-right md:bg-center bg-no-repeat text-white flex flex-col md:flex-row items-center md:items-start"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Black Overlay for text contrast */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40 z-20 pointer-events-none"></div>

      {/* Custom style for selected text */}
      <style>
        {`
          ::selection {
            background-color: #F37021;
            color: #ffffff;
          }
        `}
      </style>

      {/* Left side content */}
      <div className="flex flex-col items-center md:items-start z-20 w-full md:w-1/2 text-center md:text-left">
        <h1 className="text-[40px] sm:text-[50px] md:text-[60px] text-[#ffffff] font-semibold leading-tight mb-6">
          Build Your Business Acumen with Our
          <span className="text-[#FCC409] font-bold mech-hero-wrapper">
            {" "}
            BBA
          </span>
        </h1>
        <p className="mt-4 text-lg sm:text-xl md:text-2xl">
          A Degree Designed for Innovation, Impact & Success.{" "}
        </p>
      </div>

      {/* Right side content (NPF Widget) */}
      <div className="flex justify-center md:justify-end w-full md:w-1/2 z-30 mt-8 md:mt-0">
        <div
          className="p-6 max-w-md w-full shadow-md"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.4)",
          }}
        >
          <NPFWidget />
        </div>
      </div>
    </div>
  );
}

export default CompHero;
