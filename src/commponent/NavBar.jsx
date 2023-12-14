import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
function NavBar() {
  const navLinks = [
    { id: 1, link: "home" },
    { id: 2, link: "about" },
    { id: 3, link: "portfolio" },
    { id: 4, link: "experience" },
    { id: 5, link: "Contact" },
  ];
 

  const [nav, setNav] = useState(false);

  return (
    <>
      <div
        className=" flex justify-between items-center w-full
     h-20 text-white fixed bg-indigo-950 px-4"
      >
        <div>
          <h1 className="text-5xl ml-2 font-signature">Ermias</h1>
        </div>

        <ul className="hidden md:flex">
          {navLinks.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize font-medium text-white hover:scale-105 duration-200"
            >
              <Link to={link} smooth duration={500}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
        <div
          onClick={() => setNav(!nav)}
          className="cursor-pointer pr-4 z-10 text-gray-400 md:hidden"
        >
          {nav ? <FaTimes size={38} /> : <FaBars size={38} />}
        </div>

        {nav && (
          <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b  from-black to-gray-600 text-white">
            {navLinks.map(({ id, link }) => (
              <li key={id} className="px-4 cursor-pointer capitalize py-6  ">
                <Link onClick={()=>setNav(!nav)} to={link} smooth duration={500}>
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}

export default NavBar;
