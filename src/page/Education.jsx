import React from 'react'
import logo from "../assets/logo.png";
import image from "../assets/image.png";
const Education = () => {
    const skills = [
  "C/C++ Programming",
  "Mathematic",
  "Computer Fundamental",
  "Philosophy",
  "English for Computer",
  "Khmer Culture"
];
const foundation = [
  "C Programming",
  "OOP",
  "Basic/Advance C++",
  "Algorithm",
  "Project Courses"
]
const webde = [
  "HTML",
  "CSS",
  "Tailwind",
  "Project Courses"
]
const webd = [
  "HTML",
  "CSS",
  "JavaScript",
  "Bootstrapt",
  "Tailwind",
  "ReactJs",
  "Project Courses"
]
const back = [
  "PHP",
  "MySQL",
  "AJAX",
  "LARAVEL",
  "Project Courses"
]

  return (
    <div>
         <div className="w-full mt-10 px-25 h-260">
                <h2 className="text-5xl text-white font-bold">EDUCATIONS</h2>
              <div className="flex gap-10 mt-15">
                <div className="w-[50%] h-100 bg-gray-950 rounded-2xl relative py-10 px-10">
                  <div className=" w-16 h-16 bg-gray-100 rounded-full p-1 absolute translate-y-[-113%] translate-x-[80%]">
                  <img className="w-full h-full object-cover " src={image} alt="" />
                  </div>
                  <h2 className="text-2xl font-mono font-bold text-gray-300 mt-2">Royal University Of Phnom Penh</h2>
                  <p className="text-xl text-blue-400 font-mono">COMPUTER SCIENCE</p>
        
                  <p className="text-md text-gray-400 font-mono">YEAR1-SEMASTER 1 and 2</p>
                  <div className=" grid grid-cols-3 mt-4 gap-3">
                  {skills.map((skills,index) => (
                    <div key={index} className=" py-1 bg-gray-800 text-sm text-white rounded-4xl flex justify-center items-center">{skills}</div>
                  ))}           
                  </div>
                  <p className="text-md text-gray-400 font-mono mt-8">YEAR1-SEMASTER 1 and 2</p>
                  <div className=" grid grid-cols-3 mt-4 gap-3">
                  {skills.map((skills,index) => (
                    <div key={index} className=" py-1 bg-gray-800 text-sm text-white rounded-4xl flex justify-center items-center">{skills}</div>
                  ))}           
                  </div>
                  
                </div>
                <div className="w-[50%] h-210 bg-gray-950 rounded-2xl relative py-10 px-10">
                  <div className=" w-16 h-16 bg-gray-100 rounded-full p-1 absolute translate-y-[-113%] translate-x-[80%]">
                  <img className="w-full h-full object-cover " src={logo} alt="" />
                  </div>
                  <h2 className="text-2xl font-mono font-bold text-gray-300 mt-2">ETEC Center</h2>
                  <p className="text-xl text-blue-400 font-mono">FOUNDATION OF CODING</p>
                  <p className="text-md text-gray-400 font-mono">Febreury-June 2025</p>
                  <div className=" grid grid-cols-3 mt-4 gap-3">
                  {foundation.map((foundation,index2) => (
                    <div key={index2} className=" py-1 bg-gray-800 text-sm text-white rounded-4xl flex justify-center items-center">{foundation}</div>
                  ))}           
                  </div>
                  
                  <p className="text-xl text-blue-400 font-mono mt-8">WEB DESING</p>
                  <p className="text-md text-gray-400 font-mono">JUNE-JULY 2025</p>
                  <div className=" grid grid-cols-3 mt-4 gap-3">
                  {webde.map((webde,index2) => (
                    <div key={index2} className=" py-1 bg-gray-800 text-sm text-white rounded-4xl flex justify-center items-center">{webde}</div>
                  ))}           
                  </div>
                  <p className="text-xl text-blue-400 font-mono mt-8">WEB DESING</p>
                  <p className="text-md text-gray-400 font-mono">JUNE-JULY 2025</p>
                  <div className=" grid grid-cols-3 mt-4 gap-3">
                  {webd.map((webd,index2) => (
                    <div key={index2} className=" py-1 bg-gray-800 text-sm text-white rounded-4xl flex justify-center items-center">{webd}</div>
                  ))}           
                  </div>
                  <p className="text-xl text-blue-400 font-mono mt-8">WEB DESING</p>
                  <p className="text-md text-gray-400 font-mono">DECEMBER-MAY 2026</p>
                  <div className=" grid grid-cols-3 mt-4 gap-3">
                  {back.map((back,index2) => (
                    <div key={index2} className=" py-1 bg-gray-800 text-sm text-white rounded-4xl flex justify-center items-center">{back}</div>
                  ))}           
                  </div>
                  
                </div>
              </div>
              </div>
    </div>
  )
}

export default Education