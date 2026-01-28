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

    setTimeout(() => {
      isScrollingRef.current = false;
      setActiveIndex(index);
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
          
          const sectionHeight = section.clientHeight;
          const targetScroll = section.offsetTop + (newIndex * sectionHeight) / data.length;
          
          window.scrollTo({
            top: targetScroll,
            behavior: "smooth",
          });

          setTimeout(() => {
            isScrollingRef.current = false;
            setActiveIndex(newIndex);
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

  // Listen for scroll to update active index
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || isScrollingRef.current) return;

      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();
      
      if (rect.top <= 0 && rect.bottom >= window.innerHeight) {
        const scrollProgress = -rect.top / rect.height;
        const newIndex = Math.floor(scrollProgress * data.length);
        
        if (newIndex !== activeIndex) {
          setActiveIndex(newIndex);
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeIndex]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[100vh] bg-gradient-to-r from-[#990000] via-[#011E5A] to-[#051D58]"
      style={{ height: `${data.length * 100}vh` }}
    >
      {/* Sticky container that stays in view */}
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        {/* Background images inside sticky container */}
        <div className="absolute inset-0">
          {data.map((item, index) => (
            <div
              key={item.id}
              className={`absolute inset-0 transition-all duration-1000 ease-out ${
                activeIndex === index
                  ? "opacity-80"
                  : "opacity-0 pointer-events-none"
              }`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
              {/* Overlay for better text visibility */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#990000]/40 via-[#011E5A]/70 to-[#051D58]/40" />
            </div>
          ))}
        </div>

        {/* Content Container - Inside sticky div */}
        <div className="relative container mx-auto px-4 lg:px-8 z-10">
          <div className="max-w-6xl mx-auto">
            {data.map((item, index) => (
              <div
                key={item.id}
                className={`transition-all duration-700 ease-out text-center ${
                  activeIndex === index
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 absolute inset-x-0 pointer-events-none"
                }`}
              >
                <div className="mb-8">
                  <span className="inline-block px-4 py-1 bg-gradient-to-r from-[#FCC409] to-[#FFD700] text-black text-sm font-semibold rounded-full mb-4">
                    Campus Highlights
                  </span>
                  
                  <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white leading-tight">
                    {item.title}
                  </h2>
                  
                  <div className="w-24 h-1 bg-gradient-to-r from-[#FCC409] to-[#FFD700] mx-auto mb-8"></div>
                  
                  <div className="max-w-3xl mx-auto">
                    <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator dots */}
      {/* <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-10">
        <div className="flex flex-col items-center space-y-4">
          {data.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`flex items-center transition-all duration-300 ${
                index === activeIndex ? "scale-125" : "hover:scale-110"
              }`}
              aria-label={`Go to ${data[index].title}`}
            >
              <div className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? "bg-[#FCC409]"
                  : "bg-white/50"
              }`} />
              {index === activeIndex && (
                <span className="ml-3 text-white font-medium text-sm animate-fadeIn">
                  {data[index].title}
                </span>
              )}
            </button>
          ))}
        </div>
      </div> */}

      {/* Scroll hint */}
      <div className={`fixed bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-300 ${
        activeIndex === data.length - 1 ? 'opacity-0 pointer-events-none' : 'opacity-100 animate-bounce'
      }`}>
       
      </div>
    </section>
  );
}