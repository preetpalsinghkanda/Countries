import React from "react";

const Flags = ({ country, darkMode }) => {
  return (
    <div
      className={`rounded-lg h-full shadow-lg ${darkMode ? "bg-[hsl(209,23%,22%)]" : "bg-white"}  `}
    >
      <div className="rounded-t-lg w-full h-44  overflow-hidden">
        <img
          src={country.flag}
          className="w-full block  h-full object-cover"
          alt={country.name}
        />
      </div>
      <div
        className={`px-6 py-3  rounded-lg ${darkMode ? "bg-[hsl(209,23%,22%)] text-white" : "bg-white text-black"} `}
      >
        <h4 className="font-bold text-xl ">{country.name}</h4>
        <div
          className={`my-5 text-[16px] ${darkMode ? "text-[#ffffff7a]" : "text-[hsl(0,0%,50%)]"} `}
        >
          <p className="">
            <span
              className={`font-[500] ${darkMode ? "text-[#ffffffd7]" : "text-black"} `}
            >
              Population:
            </span>{" "}
            {country.population.toLocaleString()}
          </p>
          <p>
            <span
              className={`font-[500] ${darkMode ? "text-[#ffffffd7]" : "text-black"} `}
            >
              Region:
            </span>{" "}
            {country.region}
          </p>
          <p>
            <span
              className={`font-[500] ${darkMode ? "text-[#ffffffd7]" : "text-black"} `}
            >
              Capital:
            </span>{" "}
            {country.capital}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Flags;
