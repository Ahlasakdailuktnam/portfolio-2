import React from "react";
import { IoLogoFacebook } from "react-icons/io5";
import { FaTelegram ,  FaInstagramSquare} from "react-icons/fa";
import { FaComputer, FaSquareXTwitter } from "react-icons/fa6";
import profile from "../assets/profile.png";
import movie from "../assets/movie.png";
import iphone from "../assets/iphone.png";
import ten11 from "../assets/ten11.png";
import pc from "../assets/pc.png";
import pizza from "../assets/pizza.png";
import koi from "../assets/koi.png";
import macha from "../assets/macha.png";
import spring from "../assets/spring.png";
import exercise from "../assets/exercise.png";
import clothes from "../assets/clothes.png";
import skincare from "../assets/skincare.png";
import home from "../assets/home.png";
import cv from "../assets/cv.png";

const Homepage = () => {
    const images = [
  { id: 1, src: movie },
  { id: 2, src: home },
  { id: 3, src: skincare },
  { id: 4, src: iphone },
  { id: 5, src: cv },
  { id: 6, src: clothes },
  { id: 7, src: pizza },
  { id: 8, src: spring },
  { id: 9, src: exercise },
  { id: 10, src: macha },
  { id: 11, src: koi },
  { id: 13, src: pc },
  { id: 14, src: ten11 }
];
  return (
    <div>
      <div className="w-full lg:h-[740px] bg-black lg:py-25">
        <div className="flex justify-center lg:h-full h-[520px] lg:px-35">
          <div className="lg:w-[60%] w-full relative lg:h-[780px] h-[600px]">
            <div className="absolute inset-0 flex items-center justify-center z-10 translate-y-[-18%]">
              <h1 className="text-white lg:text-[200px] text-[70px] font-black leading-none tracking-tighter opacity-50">
                <span className="flex lg:gap-50 gap-20">WEB 
                 <p>SITE</p> </span> DEVELOPER
              </h1>
            </div>
            <img
              className="w-full lg:h-full h-full  object-cover absolute z-20 lg:translate-x-0 translate-x-[1%] translate-y-[-18%]"
              src={profile}
              alt=""
            />
          </div>
        </div>
        <div className="flex lg:px-20 px-10 flex-col">
          <h2 className="lg:text-3xl text-2xl text-white opacity-65 font-bold">Social Media:</h2>
          <div className="flex gap-2 mt-2" >
            <IoLogoFacebook className=" text-white opacity-65 text-3xl " />
            <FaTelegram className=" text-white opacity-65 text-3xl " />

            <FaSquareXTwitter className=" text-white opacity-65 text-3xl " />
            <FaInstagramSquare className=" text-white opacity-65 text-3xl " />
          </div>
        </div>
      </div>
      <div className="w-full h-120 bg-black py-5 lg:py-0">
      <div className="overflow-hidden whitespace-nowrap">
        <div className="flex animate-scroll">
          <span className="text-white lg:text-5xl text-3xl font-extrabold mx-8">
             SMALL STEPS, SMALL PROGRESS, BUT KEEP CODING  → WEB DESIGNER → FRONTEND DEVELOPER → BACK-END DEVELOPER
            →LEVELING UP UTIL I BECOME A COMPLETE DEVELOPER →
          </span>
          <span className="text-white lg:text-5xl text-3xl font-extrabold mx-8">
             SMALL STEPS, SMALL PROGRESS, BUT KEEP CODING  → WEB DESIGNER → FRONTEND DEVELOPER → BACK-END DEVELOPER
            →LEVELING UP UTIL I BECOME A COMPLETE DEVELOPER →
          </span> 
        </div>
      </div>
        <div className="mt-10 mb-10 w-full overflow-hidden">
          <div className="animate-scroll-2 flex whitespace-nowrap gap-8">

            {images.map((img,index) => (
          <div key={index} className="lg:w-80 lg:h-80 w-60 h-60 rounded-full border border-gray-300 ">
            <img className=" w-full h-full object-contain  rounded-full" src={img.src} alt="" />
          </div>
            ))}
            {images.map((img,index) => (
          <div key={index} className="lg:w-80 lg:h-80 w-60 h-60  rounded-full border border-gray-300 ">
            <img className=" w-full h-full object-contain  rounded-full" src={img.src} alt="" />
          </div>
            ))}
          </div>
        </div>
      <div className="overflow-hidden whitespace-nowrap">
        <div className="flex animate-scroll">
          <span className="text-white lg:text-5xl text-3xl font-extrabold mx-8">
             SMALL STEPS, SMALL PROGRESS, BUT KEEP CODING  → WEB DESIGNER → FRONTEND DEVELOPER → BACK-END DEVELOPER
            →LEVELING UP UTIL I BECOME A COMPLETE DEVELOPER→
          </span>
          <span className="text-white lg:text-5xl text-3xl font-extrabold mx-8">
            SMALL STEPS, SMALL PROGRESS, BUT KEEP CODING → WEB DESIGNER → FRONTEND DEVELOPER → BACK-END DEVELOPER
            →LEVELING UP UTIL I BECOME A COMPLETE DEVELOPER→
          </span>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Homepage;
