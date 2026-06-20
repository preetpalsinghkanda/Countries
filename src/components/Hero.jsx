import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Hero = () => {
  return (
    <div className=" px-20 my-10">


      <div className="border rounded-md max-w-lg w-full">
        <div className=" px-6 flex gap-5 items-center py-3">
          <FontAwesomeIcon className="text-gray-500" icon={faMagnifyingGlass} />
          <input type="text" placeholder="Search for a country..." className="border-0 w-full outline-hidden" />
        </div>
      </div>

      <div className="border ">

      </div>
    </div>
  );
};

export default Hero;
