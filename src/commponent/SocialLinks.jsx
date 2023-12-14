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
          GitHun <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/Ermon1",
      style: "rounded-tr-md",
    },
    {
      id: 3,
      child: (
        <>
          E-mail <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:ermiasbirhanebabi@gmail.com",
      style: "rounded-tr-md",
    },
    {
      id: 4,
      child: (
        <>
          Rusume <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: "/Ermiascv.pdf",
      style: "rounded-tr-md",
      download: true,
    },
  ];
  return (
    <div className="hidden lg:flex  flex-col top-[35%] left-0 fixed">
      <ul>
        {links.map((link) => (
          <li
            key={link.id}
            className={
              "flex justify-between items-center w-40 h-14 px-4 bg-gray-600 ml-[-100px]  hover:ml-[-10px] hover:rounded-md duration-300" +
              link.style
            }
          >
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-between items-center w-full text-white"
              download={link.download}
            >
              {link.child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SocialLinks;
