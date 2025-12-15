import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-black p-text">
      <div className="w-full px-6 md:px-20 py-5">
        <div className="flex justify-between items-center">

          <h2 className="text-white text-2xl md:text-3xl font-bold opacity-80">
            My Portfolio
          </h2>

          <ul className="hidden md:flex text-white gap-10">
            <li>
              <HashLink className="hover:text-blue-300" smooth to="/home#home">Home</HashLink>
            </li>
            <li>
              <HashLink className="hover:text-blue-300" smooth to="/home#about">About me</HashLink>
            </li>
            <li>
              <HashLink className="hover:text-blue-300" smooth to="/home#skills">My Skills</HashLink>
            </li>
            <li>
              <HashLink className="hover:text-blue-300" smooth to="/home#projects">My Projects</HashLink>
            </li>
            <li>
              <HashLink className="hover:text-blue-300" smooth to="/home#contact">Contact me</HashLink>
            </li>
          </ul>

          <Link
            to="/cv"
            className="hidden md:block px-5 py-2 bg-amber-50 rounded-3xl font-mono font-bold"
          >
            Download CV
          </Link>

          <div
            className="md:hidden text-white text-3xl cursor-pointer select-none"
            onClick={() => setOpenMenu(!openMenu)}
          >
            {openMenu ? "✖" : "☰"}
          </div>
        </div>

        {openMenu && (
          <div className="md:hidden mt-5 px-1  bg-black text-white space-y-4 py-4 rounded-xl border border-gray-700">
            <div className="flex gap-3">
            <HashLink className="hover:text-blue-300" smooth to="/home#home" onClick={() => setOpenMenu(false)}>
              Home
            </HashLink>

            <HashLink className="hover:text-blue-300" smooth to="/home#about" onClick={() => setOpenMenu(false)}>
              About me
            </HashLink>

            <HashLink className="hover:text-blue-300" smooth to="/home#skills" onClick={() => setOpenMenu(false)}>
              My Skills
            </HashLink>

            <HashLink className="hover:text-blue-300" smooth to="/home#projects" onClick={() => setOpenMenu(false)}>
              My Projects
            </HashLink>

            <HashLink className="hover:text-blue-300" smooth to="/home#contact" onClick={() => setOpenMenu(false)}>
              Contact me
            </HashLink>
            </div>
            <Link
              to="/cv"
              onClick={() => setOpenMenu(false)}
              className="block text-center px-5 py-2 bg-amber-50 text-black rounded-3xl font-mono font-bold mt-3"
            >
              Download CV
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
