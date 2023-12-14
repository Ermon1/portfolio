import NavBar from "./commponent/NavBar";
import Home from "./commponent/Home";
import React from 'react';
import SocialLinks from "./commponent/SocialLinks";
import About from "./commponent/About";
 import Portfolio from "./commponent/Portfolio";    

function App() {
  return (
    <>
    
      {/* <NavBar /> */}
      <Home />
      <SocialLinks />
      <About />
      <Portfolio/>
    </>
  );
}

export default App;
