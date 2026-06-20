import React from "react";

const Flags = ({ country }) => {
  return (
    <div className="rounded-lg h-full shadow-lg bg-white ">
      <div className="rounded-t-lg w-full h-44  overflow-hidden">
        <img
          src={country.flag}
          className="w-full block  h-full object-cover"
          alt={country.name}
        />
      </div>
      <div className="px-6 py-3">
        <h4 className="font-bold text-xl">{country.name}</h4>
        <div className="my-5 text-[16px] text-[hsl(0,0%,50%)]">
          <p className="">
            <span className="font-[500] text-black">Population:</span>{" "}
            {country.population.toLocaleString()}
          </p>
          <p>
            <span className="font-[500] text-black">Region:</span>{" "}
            {country.region}
          </p>
          <p>
            <span className="font-[500] text-black">Capital:</span>{" "}
            {country.capital}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Flags;
