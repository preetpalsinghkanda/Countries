import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-regular-svg-icons";


const Navbar = () => {
  return (
    <div className="border flex items-center justify-between px-20 py-4">
      <h2 className="text-3xl font-bold">Where in the world?</h2>
      <div className="flex items-center gap-1 cursor-pointer"><FontAwesomeIcon icon={faMoon} className="text-lg" /><button className="text-lg font-[500]" >Dark Mode </button></div>
    </div>
  );
};

export default Navbar;
