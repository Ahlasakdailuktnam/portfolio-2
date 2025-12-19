import React, { useState, useEffect } from "react";
import GetinTouch from "./GetinTouch";
import ser1 from '../assets/ser1.jpg'
import ser2 from '../assets/ser2.jpg'
import ser3 from '../assets/ser3.webp'

const Servieces = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const servieces = [
    {
      title: "WEB DEVELOPMENT",
      desc: "I build responsive and modern websites using HTML, CSS, BOOTSTRAP, REACTJS, JAVASCRIPT AND TAILWIND CSS.",
      img: ser1,
      include: [
        "Portfolio",
        "Business Steps",
        "Landing Pages",
        "Product Pages",
      ],
    },
    {
      title: "WEB DESIGN",
      desc: "I create clean, modern, and visually appealing UI/UX designs that align perfectly with your brand identity and provide users with a smooth, enjoyable experience.",
      img: ser2,
      include: ["UI Design", "UX Flow", "Branding", "Responsive"],
    },
    {
      title: "TEACH CODING FOUNDATION",
      desc: "I teach C,Cpp HTML, CSS, JavaScript,Tailwind,Bootstrapt and make website basics for beginners.",
      img: ser3,
      include: ["HTML", "CSS", "JavaScript", "Website Basics"],
    },
  ];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % servieces.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + servieces.length) % servieces.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <div>
      <div className="lg:py-10 w-full overflow-hidden bg-black p-text lg:px-20 px-5">
        <div className="px-4 sm:px-8 md:px-12">
          <h2 className="text-[45px] flex sm:text-4xl md:text-5xl lg:text-6xl text-white font-bold">
            My Servieces
          </h2>
          <p className="text-md lg:text-lg flex justify-center lg:mx-0 mx-auto text-white mt-2 max-w-2xl">
            I design modern and attractive websites that match your brand and give
            users a great experience.
          </p>
        </div>
        
        <div className="relative w-full px-4 sm:px-8 md:px-12 lg:px-30 mt-25 
                        h-[500px] sm:h-[550px] md:h-[600px] lg:h-[550px]">
          {servieces.map((serva, index) => {
            const position = index - activeIndex;
            let transformClass = "";
            let opacityClass = "opacity-0";
            
            // Calculate position for smooth animation
            if (position === 0) {
              // Current active card
              transformClass = "translate-y-0 scale-100";
              opacityClass = "opacity-100";
            } else if (position === -1 || (activeIndex === 0 && index === servieces.length - 1)) {
              // Previous card (slides up)
              transformClass = "-translate-y-16 sm:-translate-y-20 scale-95";
              opacityClass = "opacity-40";
            } else if (position === 1 || (activeIndex === servieces.length - 1 && index === 0)) {
              // Next card (slides down)
              transformClass = "translate-y-16 sm:translate-y-20 scale-95";
              opacityClass = "opacity-40";
            } else {
              // Other cards (hidden)
              transformClass = position < 0 ? "-translate-y-32" : "translate-y-32";
              opacityClass = "opacity-0";
            }
            
            return (
              <div
                key={index}
                className={`
                  absolute top-0 left-0 right-0 mx-auto
                  w-full h-auto min-h-[400px] sm:min-h-[450px] md:h-110 
                  flex flex-col lg:flex-row justify-between bg-white rounded-2xl 
                  px-4 sm:px-6 md:px-8 lg:px-8
                  transition-all duration-700 ease-in-out
                  ${transformClass}
                  ${opacityClass}
                  ${position === 0 ? 'z-30' : (position === -1 || position === 1) ? 'z-20' : 'z-10'}
                `}
                style={{
                  pointerEvents: position === 0 ? 'auto' : 'none'
                }}
              >
                {/* Left Content - Responsive */}
                <div className="w-full lg:w-[45%] lg:justify-start justify-center flex flex-col py-4 sm:py-6 md:py-8 lg:py-0">
                  <p className="h-0 sm:h-20 md:h-24 lg:h-28"></p>
                  <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl p-text font-extrabold">
                    {serva.title}
                  </h2>
                  <p className="mt-2 text-sm sm:text-base max-w-xl">
                    {serva.desc}
                  </p>
                  <p className="font-bold mt-3 sm:mt-4 lg:mt-5">Include:</p>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 mt-2 sm:mt-3">
                    {serva.include.map((item, i) => (
                      <div key={i}>
                        <p className="bg-blue-500 text-white text-xs sm:text-sm py-1 sm:py-1.5 px-2 sm:px-3 rounded-2xl flex justify-center items-center">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Right Image - Responsive */}
                <div className="w-full lg:w-[50%] h-full py-4 sm:py-5 md:py-6 lg:py-7 rounded-2xl lg:rounded-3xl mt-4 sm:mt-6 lg:mt-0">
                  <img
                    className="w-full h-48 sm:h-56 md:h-64 lg:h-full rounded-2xl lg:rounded-3xl object-cover"
                    src={serva.img}
                    alt={serva.title}
                  />
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Navigation Dots - Responsive */}
        <div className="flex justify-center gap-3 sm:gap-4 mt-10 sm:mt-8">
          {servieces.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`
                w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300
                ${index === activeIndex 
                  ? 'bg-white scale-125' 
                  : 'bg-gray-600 hover:bg-gray-400'
                }
              `}
              aria-label={`Go to service ${index + 1}`}
            />
          ))}
        </div>
        
        {/* Navigation Arrows - Responsive */}
        <div className="flex justify-center gap-4 sm:gap-6 md:gap-8 mt-10 sm:mt-6">
          <button
            onClick={handlePrev}
            className="text-white hover:text-blue-400 transition-colors text-sm sm:text-base md:text-lg font-semibold"
          >
            ← Previous
          </button>
          <button
            onClick={handleNext}
            className="text-white hover:text-blue-400 transition-colors text-sm sm:text-base md:text-lg font-semibold"
          >
            Next →
          </button>
        </div>
        
        {/* Progress Indicator - Responsive */}
        <div className="text-center text-gray-400 mt-3 sm:mt-4 text-sm sm:text-base">
          <span className="text-white font-bold">{activeIndex + 1}</span>
          <span className="mx-1 sm:mx-2">/</span>
          <span>{servieces.length}</span>
        </div>
      </div>
      <GetinTouch/>
    </div>
  );
};

export default Servieces;