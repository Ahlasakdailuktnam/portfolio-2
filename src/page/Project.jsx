import React from 'react'
import { FaExternalLinkAlt } from "react-icons/fa";

import movie from "../assets/movie.png"
import home from "../assets/home.png"
import pizza from "../assets/pizza.png"
import skincare from "../assets/skincare.png"
import iphone from "../assets/iphone.png"


const Project = () => {
  const images = [
    { id: 1, src: movie, title: "Movie Website", language: "Tailwind", link: "https://ahlasakdailuktnam.github.io/movie/" },
    { id: 2, src: home, title: "Home Rent Website", language: "React.js", link: "https://yourlink2.com" },
    { id: 3, src: skincare, title: "Skincare Shop Website", language: "React.js", link: "https://yourlink3.com" },
    { id: 4, src: iphone, title: "iPhone Store Website", language: "Bootstrapt", link: "https://yourlink4.com" },
    { id: 5, src: pizza, title: "Pizza Shop Website", language: "Tailwind", link: "https://yourlink5.com" },
  ];

  return (
    <div id='projects'>
      <div className='w-full lg:h-screen bg-black py-30 lg:px-20'>
        <h2 className='lg:text-[60px] text-4xl justify-center  lg:justify-start flex text-white p-text font-bold'>Recent Project</h2>
        <p className='text-md lg:ms-20 lg:justify-start flex justify-center  text-white'>Hover photo to see project details</p>

        <div className='grid lg:grid-cols-3 grid-cols-1 gap-10 lg:px-20 mt-5 p-text'>
          {images.map((item) => (
            <div
              key={item.id}
              className="relative w-90 h-60 rounded-md overflow-hidden group mx-auto"
            >
              <img
                className="w-full h-full rounded-md transition-all duration-300 group-hover:blur-sm  group-hover:brightness-50"
                src={item.src}
                alt=""
              />

              <div className="absolute inset-0 flex flex-col px-5 py-5 opacity-0 group-hover:opacity-100 transition duration-300 text-white">
                <div className=' h-40'>
                <h4 className='text-sm text-white  opacity-30'>Website Frontend</h4>
                <h3 className="text-4xl font-bold ">{item.title}</h3>
                </div>
                <div className='flex justify-between'>
                <p className=' text-white  bg-black  px-5 py-2 text-[12px] rounded-3xl'>{item.language}</p>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-black px-4 py-2 text-sm rounded-md flex items-center gap-2 hover:bg-gray-300 transition"
                >
                  View Website
                  <FaExternalLinkAlt />
                </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default Project
