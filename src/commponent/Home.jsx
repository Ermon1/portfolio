import React from "react";
import { FiArrowRight } from "react-icons/fi";
import Ermi from "../asset/ermi.jpg";
import { Link } from "react-scroll";
function Home() {
  return (
    <div
      name="home"
      className=" h-screen 
    "
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center gap-4 justify-center h-full px-4 md:flex-row ">
        <div className="text-white flex flex-col justify-center  h-full">
          <h2 className="text-4xl sm:text-7xl font-bold ">
            I'm A Full Stack Developer
          </h2>
          <p className="text-black py-4 max-w-md">
            I'm a Full Stack Web Developer with a passion for learning new
            technologies. I'm currently working with React, Redux, Node.js,
            Express.js, and MongoDB.
            <br />I love working in different environments with different
            technologies. I'm good at working with any team
          </p>
          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className=" group text-white w-fit px-6 py-3 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              portfolio
              <span className="group-hover:rotate-90 duration-200">
                <FiArrowRight size={24} className="ml-2" />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img
            src={Ermi}
            alt="ermi.jpg"
            className="rounded-2xl  mx-auto w-2/3 mt-6 md:w-[800px] "
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
