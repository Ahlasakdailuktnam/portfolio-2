import React, { useEffect, useRef, useState } from "react";
import {
  SiC,
  SiCplusplus,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiJavascript,
  SiGit,
  SiJquery,
  SiPhp,
  SiLaravel,
  SiTailwindcss,
  SiReact,
  SiVuedotjs,
  SiMysql,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

import download from "../assets/download.png";
import Laravel from "../assets/Laravel.png";
import C from "../assets/C.png";
import Cpp from "../assets/Cpp.png";
import vue from "../assets/vue.png";
import java from "../assets/java.webp";
import HTML from "../assets/HTML.webp";
import CSS from "../assets/CSS.webp";
import JAVASCRIPT from "../assets/JAVASCRIPT.webp";
import BOOTSTRAP from "../assets/BOOTSTRAP.webp";
import TAILWIND from "../assets/TAILWIND.webp";
import REACT from "../assets/REACT.webp";
import GIT from "../assets/GIT.png";
import mysql from "../assets/mysql.png";

const skills = [
  { name: "HTML", img: HTML, percent: 80 },
  { name: "CSS", img: CSS, percent: 70 },
  { name: "BOOTSTRAP", img: BOOTSTRAP, percent: 60 },
  { name: "JAVASCRIPT", img: JAVASCRIPT, percent: 40 },
  { name: "REACT.JS", img: REACT, percent: 50 },
  { name: "PHP", img: download, percent: 10 },
  { name: "TAILWIND", img: TAILWIND, percent: 70 },
  { name: "LARAVEL", img: Laravel, percent: 100 },
  { name: "MY SQL", img: mysql, percent: 30 },
  { name: "C", img: C, percent: 60 },
  { name: "C++", img: Cpp, percent: 50 },
  { name: "java", img: java, percent: 20 },
  { name: "VUE", img: vue, percent: 20 },
  { name: "GIT", img: GIT, percent: 40 },
];

const logos = [
  { name: "C", icon: <SiC /> },
  { name: "C++", icon: <SiCplusplus /> },
  { name: "HTML", icon: <SiHtml5 /> },
  { name: "CSS", icon: <SiCss3 /> },
  { name: "Bootstrap", icon: <SiBootstrap /> },
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "Git", icon: <SiGit /> },
  { name: "jQuery", icon: <SiJquery /> },
  { name: "PHP", icon: <SiPhp /> },
  { name: "Laravel", icon: <SiLaravel /> },
  { name: "Tailwind", icon: <SiTailwindcss /> },
  { name: "React", icon: <SiReact /> },
  { name: "Vue", icon: <SiVuedotjs /> },
  { name: "MySQL", icon: <SiMysql /> },
  { name: "Java", icon: <FaJava /> },
];

const MySkills = () => {
  const skillRefs = useRef([]);
  const [visible, setVisible] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = entry.target.getAttribute("data-index");
          if (entry.isIntersecting) {
            setVisible((prev) => [...prev, Number(index)]);
          }
        });
      },
      { threshold: 0.5 }
    );

    skillRefs.current.forEach((ref) => ref && observer.observe(ref));

    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <div className="lg:py-20 py-10 lg:px-20 px-5 overflow-hidden bg-black">
        <h2 className="text-5xl text-white font-bold mb-10">My Skills</h2>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 lg:gap-8 gap-5">
          {skills.map((skill, index) => {
            const [count, setCount] = useState(0);

            useEffect(() => {
              if (!visible.includes(index)) return;

              let start = 1;
              const end = skill.percent;

              const timer = setInterval(() => {
                start += 1;
                setCount(start);

                if (start >= end) clearInterval(timer);
              }, 20);

              return () => clearInterval(timer);
            }, [visible]);

            return (
              <div
                key={index}
                data-index={index}
                ref={(el) => (skillRefs.current[index] = el)}
                className="bg-gray-800 text-white rounded-2xl shadow-md p-6 flex flex-col items-center"
              >
                <img
                  src={skill.img}
                  alt={skill.name}
                  className="w-20 h-20 object-contain drop-shadow-md"
                />

                <h3 className="text-xl font-semibold mt-4">{skill.name}</h3>

                <div className="relative w-24 h-24 mt-4">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle
                      cx="48"
                      cy="48"
                      r="40"
                      stroke="#d1d5db"
                      strokeWidth="10"
                      fill="none"
                    />
                    <circle
                      cx="48"
                      cy="48"
                      r="40"
                      stroke="#3b82f6"
                      strokeWidth="10"
                      fill="none"
                      strokeDasharray="251"
                      strokeDashoffset={251 - (251 * count) / 100}
                      strokeLinecap="round"
                    />
                  </svg>
                  <span className="absolute inset-0 flex items-center justify-center font-bold text-lg">
                    {count}%
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="w-full mt-5 bg-white h-15 overflow-hidden">
        <div className="flex animate-scroll-3 gap-13 whitespace-nowrap">
          {logos.map((item, index) => (
            <div key={index} className="text-5xl text-black">
              {item.icon}
            </div>
          ))}

          {logos.map((item, index) => (
            <div key={`dup-${index}`} className="text-5xl text-black">
              {item.icon}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MySkills;
