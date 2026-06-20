import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faLightbulb } from "@fortawesome/free-regular-svg-icons";

const Navbar = ({darkMode , setDarkMode}) => {
 
  return (
    <header className={ `${darkMode ? "bg-[hsl(207,26%,17%)]" : "bg-white"}  flex flex-col shadow-[0_2px_8px_rgba(0,0,0,0.08)]`}>
      <div className={`flex ${darkMode ? "bg-[hsl(209,23%,22%)] text-white" : "bg-white"}  items-center justify-between px-20 py-5`}>
        <h2 className="text-3xl font-bold">Where in the world?</h2>
        <div
          onClick={() => setDarkMode(!darkMode)}
          className="flex  items-center gap-1 cursor-pointer"
        >
          <FontAwesomeIcon
            icon={darkMode ? faLightbulb : faMoon}
            className="text-lg"
          />
          <button className="text-lg cursor-pointer font-[500]">
            {darkMode ? "Light Mode" : "Dark Mode"}{" "}
          </button>
        </div>
      </div>
      <span className={`  ${darkMode ? "border-[#00000011] border" : "border-[#a8a8a82b] border-2"} `}></span>
    </header>
  );
};

export default Navbar;
