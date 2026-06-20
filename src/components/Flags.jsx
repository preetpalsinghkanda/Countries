import React from "react";

const Flags = () => {
  return (
    <div className="rounded-lg shadow-lg bg-white ">
      <div className="rounded-t-lg w-full  overflow-hidden">
        <img
          src="https://flagcdn.com/af.svg"
          className="w-full h-full object-cover"
          alt=""
        />
      </div>
      <div className="px-6 py-3">
        <h4 className="font-bold text-xl">Germany</h4>
        <div className="my-5 text-[16px] text-[hsl(0,0%,50%)]">
          <p className="">
            <span className="font-[500] text-black">Population:</span>{" "}
            811,111,11
          </p>
          <p>
            <span className="font-[500] text-black">Region:</span> Europe
          </p>
          <p>
            <span className="font-[500] text-black">Capital:</span> Berlin
          </p>
        </div>
      </div>
    </div>
  );
};

export default Flags;
