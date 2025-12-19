import React, { useState, useEffect, useRef } from "react";
import bacll from "../assets/bacll.jpg";
import front from "../assets/front.jpg";
import web from "../assets/web.jpg";
import basic from "../assets/basic.jpg";
import computer2 from "../assets/computer2.jpg";
import computer from "../assets/computer.webp";
import computer3 from "../assets/computer3.webp";
import prison from "../assets/prison.jpg";
const AboutMe = () => {
  const timelineData = [
    {
      year: "2024",
      title: "January-October",
      newTitle: "Finished Bacll 2024",
      description:
        "Completed my Bacc II exam and started planning my path into technology.",
      image: bacll,
      color: "#3498db",
      skill: "Communation",
      skills: [
        "Communication",
        "Teamwork",
        "Punctuality",
        "High School Research Skills",
        "Discipline",
      ],
    },
    {
      year: "2025",
      title: "January-OCtober",
      newTitle: "Finished CS at RUPP Year1",
      description:
        "Began studying Computer Science at RUPP and learning the foundations of computing.",
      image: computer,
      color: "#2ecc71",
      skills: [
        "C/C++ Programming",
        "Mathematic",
        "Computer Fundamental",
        "Philosophy",
        "English for Computer",
        "Khmer Culture",
      ],
    },
    {
      year: "2025",
      title: "Februry-June",
      newTitle: "Finished C/C++ Programming",
      description:
        "Studied basic programming at Etec Center and wrote my first lines of code.",
      image: basic,
      color: "#e74c3c",
      skills: [
        "C Programming",
        "OOP",
        "Basic/Advance C++",
        "Algorithm",
        "Project Courses",
      ],
    },
    {
      year: "2025",
      title: "June-July",
      newTitle: "Finished Web Design at Etec Center",
      description:
        "Learned web design fundamentals like layout, UI/UX, and responsive websites.",
      image: web,
      color: "#f39c12",
      skills: ["HTML", "CSS", "Tailwind", "Project Courses"],
    },
    {
      year: "2025",
      title: "July-November",
      newTitle: "Finished Web Front-End at Etec Center",
      description:
        "Focused on HTML, CSS, JavaScript and started exploring React development.",
      image: front,
      color: "#9b59b6",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "Bootstrapt",
        "Tailwind",
        "ReactJs",
        "Project Courses",
        "Git & GitHub",
        "API Fetching",
      ],
    },
    {
      year: "2025",
      title: "November-September(2026)",
      newTitle: "Started Year 2 of CS",
      description: "Started a new Journey with Computer Science Year2 in RUPP",
      image: computer2,
      color: "gray",
      skills: [
        "Data Communications",
        "Java Programming",
        "English for Reading",
        "Database Systems Designs",
        "Data Structures",
        "Computer Architecture",
      ],
    },
    {
      year: "2026",
      title: "December(2025)-April",
      newTitle: "Started Web Back-End at Etec Center",
      description:
        "Start to learn PHP,Laravel, APIs, and databases to become a full-stack developer.",
      image: computer3,
      color: "white",
      skills: [
        "PHP",
        "Laravel",
        "MySQL",
        "REST APIs",
        "Authentication Systems",
      ],
    },
   
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);
  const sectionRefs = useRef([]);

  const handleScroll = () => {
    const container = containerRef.current;
    if (!container) return;

    const scrollPosition = container.scrollTop + container.clientHeight / 3;

    for (let i = 0; i < sectionRefs.current.length; i++) {
      const section = sectionRefs.current[i];
      if (!section) continue;

      const sectionTop = section.offsetTop - 100;
      const sectionBottom = sectionTop + section.offsetHeight;

      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        setActiveIndex(i);
        break;
      }
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  useEffect(() => {
    sectionRefs.current = sectionRefs.current.slice(0, timelineData.length);
  }, [timelineData.length]);

  return (
    <div id="about" className="relative bg-black pt-20  overflow-hidden p-text">
      <div className="text-center mb-12">
        <h1 className="text-5xl lg:text-7xl font-bold mb-6 text-white ">
          My Journey
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Scroll through my history
        </p>
      </div>

      <div className="relative">
        <div className="absolute left-[25%] top-0 bottom-0 hidden lg:block">
          <div className="relative h-full">
            <div className="absolute left-0 w-0.5 h-full bg-gray-800" />

            <div
              className="absolute left-0 w-0.5 transition-all duration-300"
              style={{
                height: `${(activeIndex / (timelineData.length - 1)) * 100}%`,
                backgroundColor: timelineData[activeIndex]?.color || "#3498db",
                bottom: 0,
              }}
            />
          </div>
        </div>

        <div
          ref={containerRef}
          className="h-[70vh] overflow-y-auto mx-4 lg:mx-8"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          <style jsx>{`
            div::-webkit-scrollbar {
              display: none;
            }
          `}</style>

          <div className="max-w-6xl mx-auto px-4  py-8">
            <div className="space-y-32">
              {timelineData.map((item, index) => (
                <div
                  key={index}
                  ref={(el) => (sectionRefs.current[index] = el)}
                  className="min-h-[60vh] flex flex-col lg:flex-row items-center"
                >
                  <div className="lg:w-1/2 mb-8 lg:mb-0">
                    <div className="sticky top-8">
                      <div
                        className="text-7xl font-bold"
                        style={{ color: item.color }}
                      >
                        {item.year}
                      </div>

                      <div
                        className="text-[12px] font-medium mt-1"
                        style={{ color: item.color }}
                      >
                        {item.title}
                      </div>
                    </div>
                  </div>

                  <div className="lg:w-1/2">
                    <div className="lg:ml-12">
                      <h2 className="text-4xl text-white font-sans font-bold">
                        {item.newTitle}
                      </h2>
                      <div className="overflow-hidden rounded-xl mb-8 mt-4">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-64 lg:h-80 object-cover"
                          loading="lazy"
                        />
                      </div>

                      <div className="mb-8">
                        <p className="text-lg text-gray-300 leading-relaxed">
                          {item.description}
                        </p>
                      </div>

                      <div className="mb-8">
                        <div className="flex flex-wrap gap-3">
                          {item.skills.map((skill, i) => (
                            <div
                              key={i}
                              className="px-4 py-2 rounded-lg text-sm font-medium"
                              style={{
                                backgroundColor: `${item.color}15`,
                                color: item.color,
                              }}
                            >
                              {skill}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* End */}
            <div className="text-center py-20">
              <div className="text-gray-500 text-sm tracking-widest">
                TO BE CONTINUED
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
