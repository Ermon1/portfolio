import React from "react";

function About() {
  return (
    <>
      <div name="about" className="w-full   text-white">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full  ">
          <div className="pb-8 ">
            <p className="text-4xl font-bold inline border-b-4">About</p>
          </div>
          <p className="text-black font-semibold">
            I am Ermias Brhane, a passionate computer science graduate from the
            University of Gondar. Armed with a deep understanding of computer
            science principles, I graduated with great distinction, setting a
            solid foundation for my journey in the world of technology. As a
            dedicated software developer, I specialize in MERN stack web
            development, leveraging the power of MongoDB, Express.js, React, and
            Node.js. My expertise extends to the intricacies of Redux state
            management, ensuring efficient and scalable web applications. With a
            commitment to excellence, I bring a unique blend of creativity and
            technical prowess to every project I undertake. Join me on this
            exciting venture through the ever-evolving landscape of software
            development.
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
