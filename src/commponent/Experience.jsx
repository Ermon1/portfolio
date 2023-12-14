import React from "react";
import github from "../asset/github.png";
import html from "../asset/html.png";
import js from "../asset/javascript.png";
import node from "../asset/node.png";
import react from "../asset/react.png";
import tailwind from "../asset/tailwind.png";
import css from "../asset/css.png";

function Experience() {
  const tech = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: js,
      title: "JS",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: tailwind,
      title: "tailwind",
      style: "shadow-white",
    },
    {
      id: 5,
      src: node,
      title: "node",
      style: "shadow-green-500",
    },
    {
      id: 6,
      src: react,
      title: "react",
      style: "shadow-orange-500",
    },
    {
      id: 7,
      src: github,
      title: "github",
      style: "shadow-red-500",
    },
  ];

  return (
    <div
      name="experience"
      className=" w-full h-screen "
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500  ">
            Experience
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-8 text-center py-8 px-12 sm:px-0 ">
          {tech.map((tech) => (
            <div
              key={tech.id}
              className={`shadow-md  gap-8 hover:scale-105 duration-200 py-2 rounded-lg ${tech.style}`}
            >
              <img src={tech.src} alt={tech.title} className={"w-40 mx-auto"} />
              <p className="mt-4">{tech.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;
