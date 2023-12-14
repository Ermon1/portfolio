import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
function SocialLinks() {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: "https://linkedin.com/in/ermias-brhane",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: "https://linkedin.com/in/ermias-brhane",
      style: "rounded-tr-md",
    },
    {
      id: 3,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: "https://linkedin.com/in/ermias-brhane",
      style: "rounded-tr-md",
    },
    {
      id: 4,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: "https://linkedin.com/in/ermias-brhane",
      style: "rounded-tr-md",
    },
  ];
  return (
    <div className=" flex flex-col top-[35%] left-0 fixed">
      <ul>
        <li className="flex justify-between items-center w-40 h-14 px-4 bg-gray-600 ml-[-100px]  hover:ml-[-10px] hover:rounded-md duration-300">
        
          <a href="" className="flex justify-between items-center w-full text-white ">
            {" "}
           
          </a>
        </li>
      </ul>
    </div>
  );
}

export default SocialLinks;
