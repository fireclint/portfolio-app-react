
import React, { useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";


const App = () => {

  const [darkMode, setDarkMode] = useState(false);
  

  
  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
  };
  return (
    <div>
      <Navbar 
        darkMode={darkMode}
        toggleTheme={toggleTheme}
      />
      
      
      
      <Home />
      <About />
      <Skills />
      <Work />
      <Contact />
    </div>
  );
}

export default App;
