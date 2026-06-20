import React from "react";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

const App = () => {
   const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={`max-w-[1500px]  mx-auto flex  flex-col w-full `}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Hero darkMode={darkMode} />
    </div>
  );
};

export default App;
