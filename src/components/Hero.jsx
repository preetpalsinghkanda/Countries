import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faChevronDown,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import { Listbox, Transition } from "@headlessui/react";
import Flags from "./flags";
import data from "../Data/data.json";
import { Link } from "react-router-dom";

const Hero = ({ darkMode }) => {
  const regions = [
    // "Filter by Region",
    "Africa",
    "Americas",
    "Asia",
    "Europe",
    "Oceania",
  ];

  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState("Filter by Region");

  const filterCountries = data.filter((country) => {
    const filterBySearch = country.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const filterByRegion =
      selected === "Filter by Region" || country.region === selected;

    return filterByRegion && filterBySearch;
  });

  return (
    <div
      className={` lg:px-20 md:px-18 sm:px-15 px-5 flex ${darkMode ? "bg-[hsl(207,26%,17%)]" : "bg-[#fcfcfc]"} flex-col  justify-between lg:py-10 md:py-8 py-6`}
    >
      <div className="flex md:flex-row flex-col w-full md:gap-2 gap-8 justify-between">
        <div
          className={`shadow-[0_1px_8px_rgba(0,0,0,0.10)] ${darkMode ? "bg-[hsl(209,23%,22%)]" : "bg-white"}  rounded-md max-w-lg w-full`}
        >
          <div className=" px-6 flex gap-5 items-center py-3">
            <FontAwesomeIcon
              className={`${darkMode ? "text-white" : "text-gray-500"} `}
              icon={faMagnifyingGlass}
            />
            <input
              type="text"
              value={search}
              onChange={(x) => setSearch(x.target.value)}
              placeholder="Search for a country..."
              className={`border-0 ${darkMode ? "placeholder:text-white" : ""} ${darkMode ? "text-white" : "text-black"}  w-full outline-hidden`}
            />
          </div>
        </div>
        <div className="w-52 ">
          <Listbox value={selected} onChange={setSelected}>
            <div className="relative">
              <Listbox.Button
                className={`cursor-pointer ${darkMode ? "bg-[hsl(209,23%,22%)] text-white" : ""}  shadow-[0_1px_8px_rgba(0,0,0,0.10)] flex w-full justify-between items-center outline-0 rounded-md  gap-8 px-4 py-3`}
              >
                <span className="whitespace-nowrap">{selected}</span>
                <span className="items-center">
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    className={`${darkMode ? "text-[#ffffffeb]" : ""}`}
                  />
                </span>
              </Listbox.Button>

              <Listbox.Options
                className={`absolute w-full shadow-[0_1px_8px_rgba(0,0,0,0.10)] ${darkMode ? "bg-[hsl(209,23%,22%)]" : "bg-white"}  outline-hidden mt-2 px-4 rounded-md  py-3`}
              >
                {regions.map((region) => (
                  <Listbox.Option
                    className={`cursor-pointer ${darkMode ? "text-white" : "text-black"}  whitespace-nowrap`}
                    key={region}
                    value={region}
                  >
                    {region}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </div>
          </Listbox>
        </div>
      </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 my-12">
        {filterCountries.map((country) => (
          <Link key={country.alpha3Code} to={`/country/${country.alpha3Code}`}>
            {" "}
            <Flags darkMode={darkMode} country={country} />
          </Link>
        ))}
      </div> 
    </div>
  );
};

export default Hero;
