import { useEffect, useState, useRef } from "react";
import img1 from "../../assets/club.jpg";
import img2 from "../../assets/Event.jpg";
import img3 from "../../assets/Facilities.jpg";


const data = [
  {
    id: 1,
    title: "Events",
    description:
      "Indira University Pune hosts year-round events including Management Fests, Corporate Conclaves, Start-up Summits, CEO talks, industry visits, placement drives, workshops, certifications, cultural fests, and sports tournaments that transform BBA students into industry-ready professionals.",
    image: img2,
  },
  {
    id: 2,
    title: "Facilities",
    description:
      "Our campus features smart classrooms, SAP & Tally labs, Bloomberg Terminal, Innovation Center, Digital Marketing Lab, AC hostels, sports complex, cafeteria, auditorium, medical center, and full placement support.",
    image: img3,
  },
  {
    id: 3,
    title: "Student Clubs",
    description:
      "Marketing, Finance, Entrepreneurship, HR, International Business, Digital Marketing, Public Speaking, CSR, Cultural and Sports Clubs provide leadership roles, networking, resume-building and placement advantages.",
    image: img1,
  },
];

export default function CampusFacilities() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLocked, setIsLocked] = useState(false);
  const sectionRef = useRef(null);
  const isScrollingRef = useRef(false);

  // Function for dot click navigation
  const handleDotClick = (index) => {
    if (!sectionRef.current || isScrollingRef.current) return;

    isScrollingRef.current = true;
    const section = sectionRef.current;
    const sectionHeight = section.clientHeight;
    const targetScroll = section.offsetTop + (index * sectionHeight) / data.length;

    window.scrollTo({
      top: targetScroll,
      behavior: "smooth",
    });

    // Reset scrolling flag after animation
    setTimeout(() => {
      isScrollingRef.current = false;
    }, 500);
  };

  // Handle wheel/touch scroll
  useEffect(() => {
    const handleWheel = (e) => {
      if (!sectionRef.current || isScrollingRef.current) return;

      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();
      
      // Check if we're inside the section
      if (rect.top <= 0 && rect.bottom >= window.innerHeight) {
        e.preventDefault();
        
        const delta = e.deltaY > 0 ? 1 : -1;
        const newIndex = Math.min(data.length - 1, Math.max(0, activeIndex + delta));
        
        if (newIndex !== activeIndex) {
          isScrollingRef.current = true;
          setActiveIndex(newIndex);
          
          const sectionHeight = section.clientHeight;
          const targetScroll = section.offsetTop + (newIndex * sectionHeight) / data.length;
          
          window.scrollTo({
            top: targetScroll,
            behavior: "smooth",
          });

          setTimeout(() => {
            isScrollingRef.current = false;
          }, 500);
        }
      }
    };

    const handleTouchStart = (e) => {
      if (!sectionRef.current) return;
      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();
      
      if (rect.top <= 0 && rect.bottom >= window.innerHeight) {
        setIsLocked(true);
      }
    };

    const handleTouchMove = (e) => {
      if (isLocked) {
        e.preventDefault();
      }
    };

    const handleTouchEnd = () => {
      setIsLocked(false);
    };

    // Add both wheel and touch events
    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: false });
    window.addEventListener("touchend", handleTouchEnd);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [activeIndex, isLocked]);

  // Handle keyboard arrow keys
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!sectionRef.current || isScrollingRef.current) return;

      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();
      
      if (rect.top <= 0 && rect.bottom >= window.innerHeight) {
        if (e.key === "ArrowDown" || e.key === "ArrowRight") {
          e.preventDefault();
          const newIndex = Math.min(data.length - 1, activeIndex + 1);
          if (newIndex !== activeIndex) {
            handleDotClick(newIndex);
          }
        } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
          e.preventDefault();
          const newIndex = Math.max(0, activeIndex - 1);
          if (newIndex !== activeIndex) {
            handleDotClick(newIndex);
          }
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeIndex]);

  return (
    <section
      ref={sectionRef}
      className="relative bg-gradient-to-r from-[#990000] via-[#011E5A] to-[#051D58] min-h-[300vh]"
      style={{ height: `${data.length * 100}vh` }}
    >
      {/* Fixed content that stays in view */}
      <div className="sticky top-0 h-screen flex items-center justify-center">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-8 items-center">
            {/* LEFT SIDE - Content */}
            <div className="w-full lg:w-1/1">
              {data.map((item, index) => (
                <div
                  key={item.id}
                  className={`transition-all duration-700 ease-out ${
                    activeIndex === index
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 absolute translate-y-8 pointer-events-none"
                  }`}
                >
                  <div className="max-w-2xl">
                  
                    <h2 className="text-4xl md:text-6xl font-bold mb-6 text-[#FCC409] leading-tight">
                      {item.title}
                    </h2>
                  
                    <p className="text-white text-lg md:text-xl leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* RIGHT SIDE - Image */}
            <div className="w-full lg:w-1/1">
              <div className="relative aspect-video  overflow-hidden shadow-2xl">
                {data.map((item, index) => (
                  <div
                    key={item.id}
                    className={`absolute inset-0 transition-all duration-700 ease-out ${
                      activeIndex === index
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-95"
                    }`}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                  </div>
                ))}
              </div>

            
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator - shows progress through sections */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 hidden lg:block">
        <div className="flex flex-col items-center space-y-2">
          {data.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? "bg-blue-600 scale-125"
                  : index < activeIndex
                  ? "bg-blue-300"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to section ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}