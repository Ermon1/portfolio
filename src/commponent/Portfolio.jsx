import React from "react";
import carrental from "../asset/carRental.png";

function Portfolio() {
  const portfolio = [
    {
      id: 1,
      src: carrental,
      chref: "https://github.com/Ermon1/carRental",
      Dhref: "https://github.com/Ermon1/carRental",
    },
  ];
  const handleDemo = (href) => {
    window.open(href, "_blank");
   
  };
  const handleCode = (href) => {
    window.open(href, "_blank");
  };

  return (
    <div
      name="portfolio"
      className="w-full text-white    mb-28"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full ">
        <div className="pb-5">
          <p className="text-4xl font-bold inline border-b-4  border-gray-500">
            portfolio
          </p>
          <p className="py-6 ">check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolio.map((port) => (
            <div
              key={port.id}
              className="shadow-md shadow-gray-700 rounded-lg "
            >
              <img
                src={port.src}
                alt=""
                className="rounded-md duration-200 hover:scale-105 "
              />
              <div className="text-center text-slate-950 ">
                car rental website{" "}
              </div>
              <div className="flex items-center ml-5 justify-center ">
                <button
                  onClick={()=>handleCode(port.chref)}
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                >
                  Code
                </button>
                <button
                  onClick={()=>handleDemo(port.Dhref)}
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                >
                  Demo
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
