import NavBar from "./commponent/NavBar";
import Home from "./commponent/Home";
import React from 'react';
import SocialLinks from "./commponent/SocialLinks";
import About from "./commponent/About";
 import Portfolio from "./commponent/Portfolio";    
import Experience from "./commponent/Experience";
import Contact from "./commponent/Contact";

function App() {

  

  return (
    <>
      <div className="bg-gradient-to-b from-blue-400 via-blue-500 to-blue-700">
        <NavBar />
        <Home />
        <SocialLinks />
        <About />
        <Portfolio />
        <Experience />
        <Contact />
      </div>
    </>
  );
}

export default App;
