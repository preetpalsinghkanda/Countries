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

const Hero = () => {
  const regions = [
    // "Filter by Region",
    "Africa",
    "America",
    "Asia",
    "Europe",
    "Oceania",
  ];

  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState("Filter by Region");

  const filterBySearch = data.filter((country) =>
    country.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className=" px-20 flex bg-[#fcfcfc] flex-col justify-between py-10">
      <div className="flex w-full justify-between">
        <div className="shadow-[0_1px_8px_rgba(0,0,0,0.10)] bg-white rounded-md max-w-lg w-full">
          <div className=" px-6 flex gap-5 items-center py-3">
            <FontAwesomeIcon
              className="text-gray-500"
              icon={faMagnifyingGlass}
            />
            <input
              type="text"
              value={search}
              onChange={(x) => setSearch(x.target.value)}
              placeholder="Search for a country..."
              className="border-0 w-full outline-hidden"
            />
          </div>
        </div>
        <div className="w-52 ">
          <Listbox value={selected} onChange={setSelected}>
            <div className="relative">
              <Listbox.Button className="cursor-pointer shadow-[0_1px_8px_rgba(0,0,0,0.10)] flex w-full justify-between items-center outline-0 rounded-md  gap-8 px-4 py-3">
                <span className="whitespace-nowrap">{selected}</span>
                <span className="items-center">
                  <FontAwesomeIcon icon={faChevronDown} />
                </span>
              </Listbox.Button>

              <Listbox.Options className="absolute w-full shadow-[0_1px_8px_rgba(0,0,0,0.10)] bg-white outline-hidden mt-2 px-4 rounded-md  py-3">
                {regions.map((region) => (
                  <Listbox.Option
                    className="cursor-pointer whitespace-nowrap"
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

      <div className=" grid grid-cols-4 grid-rows-2 gap-15  my-12">
        {filterBySearch.slice(0, 8).map((country) => (
          <Flags country={country} />
        ))}
      </div>
    </div>
  );
};

export default Hero;
