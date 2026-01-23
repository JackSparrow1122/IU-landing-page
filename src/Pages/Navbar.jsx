import React from "react";

// Import images
import logo from "../assets/IULogo.png";
import rightLogo from "../assets/IU-Website.png";
function Navbar() {
  const pulseTextAnimation = {
    animation: "pulseText 2s ease-in-out infinite",
  };

  const pulseKeyframes = `
    @keyframes pulseText {
      0% {
        text-shadow: 0 0 10px rgba(255, 255, 255, 0.7), 0 0 20px rgba(255, 255, 255, 0.7);
      }
      50% {
        text-shadow: 0 0 20px rgba(255, 255, 255, 0.8), 0 0 30px rgba(255, 255, 255, 0.8);
      }
      100% {
        text-shadow: 0 0 10px rgba(255, 255, 255, 0.7), 0 0 20px rgba(255, 255, 255, 0.7);
      }
    }
  `;

  return (
    <>
      <style>{pulseKeyframes}</style>

      <nav className="bg-gray-900 shadow-lg w-full">
        <div className="mx-auto flex flex-col sm:flex-row items-center justify-between px-4 md:px-16 py-0 md:py-2">

          {/* LEFT LOGO */}
          <div className="mt-2">
            <a href="/">
              <img
                src={logo}
                alt="Left Logo"
                className="h-auto max-w-28 md:max-w-42"
              />
            </a>
          </div>

          {/* CENTER TEXT */}
          {/* <div
            className="flex-grow text-center text-white text-md md:text-3xl font-bold"
            style={pulseTextAnimation}
          >
           indira university school of business <br />
            
          </div> */}

          {/* RIGHT LOGO */}
          {/* <div className="mt-2">
            <img
              src={rightLogo}
              alt="Right Logo"
              className="h-auto max-w-24 md:max-w-36"
            />
          </div> */}

        </div>
      </nav>
    </>
  );
}

export default Navbar;
