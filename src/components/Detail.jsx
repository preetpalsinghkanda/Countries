import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";

const Detail = () => {
  return (
    <div className="bg-[#fcfcfc]  px-20 h-screen ">
      <button className="flex items-center gap-2 border-2 border-[#0000001a] px-7 py-1.5 rounded-lg shadow-lg">
        <FontAwesomeIcon icon={faArrowLeftLong} /> Back
      </button>

      <div className="my-20 flex justify-around">
        <div className="w-140">
          <img
            src="https://flagcdn.com/ax.svg"
            alt=""
            className="w-full h-full object-fit"
          />
        </div>

        <div className=" max-w-xl w-full justify-center flex flex-col">
          <h3 className="text-3xl font-extrabold">Belgium</h3>
          <div className="flex my-5 text-md justify-between font-[600]">
            <div className="flex flex-col gap-2 ">
              <p>Native Name: </p>
              <p>Population: </p>
              <p>Region: </p>
              <p>Sub Region: </p>
              <p>Capital: </p>
            </div>
            <div className="flex flex-col gap-2">
              <p>Top Level Domain: </p>
              <p>Currencies: </p>
              <p>Language: </p>
            </div>
          </div>
          <div className="flex gap-3 mt-10">
            <h4 className="text-md font-bold">Border Countries: </h4>
            <div className="flex ">
              {" "}
              <span className="border-2 rounded-sm border-[#00000013] px-4 shadow-md text-[#000000af]">
                {" "}
                France
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
