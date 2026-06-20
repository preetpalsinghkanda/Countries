import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import data from "../Data/data.json";

const Detail = ({ darkMode }) => {
  const navigate = useNavigate();
  const { code } = useParams();
  const selectedCountry = data.find((item) => item.alpha3Code === code);

  return (
    <div
      className={`${darkMode ? "bg-[hsl(207,26%,17%)]" : "bg-[#fcfcfc]"}  py-12 px-20 h-175 `}
    >
      <button
        onClick={() => navigate("/")}
        className={`flex  items-center ${darkMode ? "text-[#ffffffe2] bg-[hsl(209,23%,22%)]" : ""} gap-2 border-2 border-[#0000001a] px-7 py-1.5 rounded-lg shadow-lg`}
      >
        <FontAwesomeIcon icon={faArrowLeftLong} /> Back
      </button>

      <div className="my-20 flex justify-around">
        <div className="w-140">
          <img
            src={selectedCountry.flag}
            alt={selectedCountry.name}
            className="w-full h-full object-cover"
          />
        </div>

        <div className=" max-w-xl w-full justify-center flex flex-col ">
          <h3
            className={`text-3xl ${darkMode ? "text-white" : ""} font-extrabold`}
          >
            {selectedCountry.name}
          </h3>
          <div
            className={`flex ${darkMode ? "text-[#fffffff3]" : ""}  my-5 text-md justify-between font-[600]`}
          >
            <div className="flex flex-col gap-2 ">
              <p>
                Native Name:{" "}
                <span
                  className={` ${darkMode ? "text-[#ffffffa5]" : "text-[#00000093]"} `}
                >
                  {selectedCountry.nativeName}
                </span>
              </p>
              <p>
                Population:{" "}
                <span
                  className={` ${darkMode ? "text-[#ffffffa5]" : "text-[#00000093]"} `}
                >
                  {selectedCountry.population.toLocaleString()}
                </span>
              </p>
              <p>
                Region:{" "}
                <span
                  className={` ${darkMode ? "text-[#ffffffa5]" : "text-[#00000093]"} `}
                >
                  {selectedCountry.region}
                </span>
              </p>
              <p>
                Sub Region:{" "}
                <span
                  className={` ${darkMode ? "text-[#ffffffa5]" : "text-[#00000093]"} `}
                >
                  {selectedCountry.subregion}
                </span>
              </p>
              <p>
                Capital:{" "}
                <span
                  className={` ${darkMode ? "text-[#ffffffa5]" : "text-[#00000093]"} `}
                >
                  {selectedCountry.capital}
                </span>
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <p>
                Top Level Domain:{" "}
                <span
                  className={` ${darkMode ? "text-[#ffffffa5]" : "text-[#00000093]"} `}
                >
                  {selectedCountry.topLevelDomain}
                </span>
              </p>
              <p>
                Currencies:{" "}
                <span
                  className={` ${darkMode ? "text-[#ffffffa5]" : "text-[#00000093]"} `}
                >
                  {selectedCountry.currencies[0].name}
                </span>
              </p>
              <p>
                Language:{" "}
                <span
                  className={` ${darkMode ? "text-[#ffffffa5]" : "text-[#00000093]"} `}
                >
                  {selectedCountry.languages
                    .map((item) => item.name)
                    .join(", ")}
                </span>
              </p>
            </div>
          </div>
          <div className="flex gap-3 mt-10">
            <h4
              className={`text-md font-bold ${darkMode ? "text-[#ffffffe2]" : ""} text-nowrap`}
            >
              Border Countries:{" "}
            </h4>
            <div className="flex gap-2 flex-wrap">
              {selectedCountry.borders?.map((item) => {
                const borderCountry = data.find(
                  (country) => country.alpha3Code === item,
                );

                return (
                  <Link to={`/country/${item}`}>
                    <span
                      className={`border-2 ${darkMode ? "bg-[hsl(209,23%,22%)] text-[#ffffffa5]" : ""} cursor-pointer rounded-sm border-[#00000013] px-4 shadow-md text-[#000000af]`}
                    >
                      {borderCountry?.name}
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
