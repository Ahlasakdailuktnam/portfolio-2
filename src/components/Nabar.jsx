import React, { useState } from 'react'

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="w-full px-6 md:px-20 py-6 bg-black">
      <div className="flex justify-between items-center">
        
        <h2 className="text-white text-2xl md:text-3xl font-bold h-text opacity-80">
          My Portfolio
        </h2>

        <ul className="hidden md:flex text-white gap-10 p-text">
          <li>Home</li>
          <li>About me</li>
          <li>My Skills</li>
          <li>My Projects</li>
          <li>Contact me</li>
        </ul>

        <button className="hidden md:block px-5 py-2 bg-amber-50 rounded-3xl font-mono font-bold">
          Download CV
        </button>

        <div
          className="md:hidden text-white text-3xl cursor-pointer"
          onClick={() => setOpenMenu(!openMenu)}
        >
          {openMenu ? "✖" : "☰"}
        </div>
      </div>

      {openMenu && (
        <div className="md:hidden mt-5 bg-black text-white space-y-4 p-4 rounded-xl border border-gray-700">
          <li>Home</li>
          <li>About me</li>
          <li>My Skills</li>
          <li>My Projects</li>
          <li>Contact me</li>

          <button className="w-full px-5 py-2 bg-amber-50 text-black rounded-3xl font-mono font-bold mt-3">
            Download CV
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
