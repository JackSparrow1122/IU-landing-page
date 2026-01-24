import { useState, useEffect, useMemo } from "react";
import backgroundImage from "../../assets/hero.jpg";
import backgroundImage2 from "../../assets/IUBanner.jpg";
import NPFWidget from "../NPFWidget";

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
          setTimeout(() => setIsDeleting(true), 1000);
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

    const timeout = setTimeout(handleTyping, isDeleting ? 80 : 120);
    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentWordIndex, words]);

  return (
    <div
      className="relative min-h-[90vh]  bg-cover bg-center bg-no-repeat text-white"
      style={{ backgroundImage: `url(${backgroundImage2})` }}
    >
      {/* Overlay */}
      {/* <div className="absolute inset-0 bg-black/40 z-10"></div> */}

      {/* Content */}
      <div className="relative z-20 flex min-h-[90vh] flex-col md:flex-row items-center justify-center px-4 sm:px-8 md:px-16 gap-10">
        {/* LEFT TEXT */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
          <h1 className="text-[32px] sm:text-[42px] md:text-[50px] lg:text-[60px] font-semibold">
            Build Your Business Acumen with Our
            <span className="text-[#FCC409] lg:text-[68px] font-bold">
              {" "}
              BBA
            </span>
          </h1>
          <p className="md:text-2xl">Applications now open for 2026</p>
          <p className="mt-6 text-base sm:text-lg md:text-xl bg-[#FCC409] text-black  px-2 md:px-6 rounded-xl inline-block">
            A Degree Designed for Innovation, Impact & Success.
          </p>
        </div>

        {/* RIGHT FORM */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <div className="w-full max-w-md bg-black/40 p-6 rounded-xl shadow-lg">
            <NPFWidget />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompHero;
