import React from "react";
import { MdMarkEmailUnread } from "react-icons/md";
import { BsFillTelephoneForwardFill } from "react-icons/bs";
import { IoLocationSharp } from "react-icons/io5";

const GetinTouch = () => {
  return (
    <div className="w-full min-h-screen bg-black px-6 py-10 md:px-20 md:py-15">
      <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-0">
        <div className="md:w-[40%] w-full flex flex-col gap-6">
          <h2 className="text-5xl md:text-7xl text-white max-w-90 h-text">Get in Touch</h2>

          <p className="text-white p-text">
            Thank you for visiting my portfolio website. I'm always open to
            discussing new opportunities, potential collaborations, or
            challenging projects that align with my skills!
          </p>

          <div className="flex flex-col gap-4 text-white p-text">
            <div className="flex gap-5 items-center bg-gray-950 shadow-2xl w-full md:w-80 px-5 py-3 rounded-2xl">
              <p className="text-2xl"><MdMarkEmailUnread /></p>
              <p>ahlaluktnam@gmail.com</p>
            </div>

            <div className="flex gap-5 items-center bg-gray-950 shadow-2xl w-full md:w-80 px-5 py-3 rounded-2xl">
              <p className="text-2xl"><BsFillTelephoneForwardFill /></p>
              <p>+885 962657233</p>
            </div>

            <div className="flex gap-5 items-center bg-gray-950 shadow-2xl w-full md:w-80 px-5 py-3 rounded-2xl">
              <p className="text-2xl"><IoLocationSharp /></p>
              <p>Sangkhat Tuek Laok Ti 2, Khan Toul Kok, Phnom Penh capital</p>
            </div>
          </div>
        </div>
          
        <div className="md:w-[50%] w-full bg-gray-950 px-6 md:px-10 py-10 rounded-xl">
          <div className="w-full text-white flex flex-col gap-5 p-text">
            <div className="flex flex-col">
              <label>Name:</label>
              <input className="bg-gray-800 px-5 py-3 rounded-md mt-3" type="text" placeholder="Your Name" />
            </div>

            <div className="flex flex-col">
              <label>Email:</label>
              <input className="bg-gray-800 px-5 py-3 rounded-md mt-3" type="email" placeholder="Your Email" />
            </div>

            <div className="flex flex-col">
              <label>Subject:</label>
              <input className="bg-gray-800 px-5 py-3 rounded-md mt-3" type="text" placeholder="Your Subject" />
            </div>

            <div className="flex flex-col">
              <label>Message</label>
              <textarea className="bg-gray-800 px-5 py-3 rounded-md h-40 mt-3" placeholder="Message"></textarea>
            </div>
            
            <div>
              <button className="w-full bg-white text-black py-4 font-bold rounded-4xl">Get in Touch</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetinTouch;
