import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import data from "../Data/data.json";

const Detail = () => {
  const navigate = useNavigate();
  const { code } = useParams();
  const selectedCountry = data.find((item) => item.alpha3Code === code);

  return (
    <div className="bg-[#fcfcfc] py-12 px-20 h-175 ">
      <button
        onClick={() => navigate("/")}
        className="flex  items-center gap-2 border-2 border-[#0000001a] px-7 py-1.5 rounded-lg shadow-lg"
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

        <div className=" max-w-xl w-full justify-center flex flex-col">
          <h3 className="text-3xl font-extrabold">{selectedCountry.name}</h3>
          <div className="flex my-5 text-md justify-between font-[600]">
            <div className="flex flex-col gap-2 ">
              <p>
                Native Name:{" "}
                <span className="text-[#00000093]">
                  {selectedCountry.nativeName}
                </span>
              </p>
              <p>
                Population:{" "}
                <span className="text-[#00000093]">
                  {selectedCountry.population.toLocaleString()}
                </span>
              </p>
              <p>
                Region:{" "}
                <span className="text-[#00000093]">
                  {selectedCountry.region}
                </span>
              </p>
              <p>
                Sub Region:{" "}
                <span className="text-[#00000093]">
                  {selectedCountry.subregion}
                </span>
              </p>
              <p>
                Capital:{" "}
                <span className="text-[#00000093]">
                  {selectedCountry.capital}
                </span>
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <p>
                Top Level Domain:{" "}
                <span className="text-[#00000093]">
                  {selectedCountry.topLevelDomain}
                </span>
              </p>
              <p>
                Currencies:{" "}
                <span className="text-[#00000093]">
                  {selectedCountry.currencies[0].name}
                </span>
              </p>
              <p>
                Language:{" "}
                <span className="text-[#00000093]">
                  {selectedCountry.languages
                    .map((item) => item.name)
                    .join(", ")}
                </span>
              </p>
            </div>
          </div>
          <div className="flex gap-3 mt-10">
            <h4 className="text-md font-bold text-nowrap">Border Countries: </h4>
            <div className="flex gap-2 flex-wrap">
              {selectedCountry.borders?.map((item) => (
                <span className="border-2 cursor-pointer rounded-sm border-[#00000013] px-4 shadow-md text-[#000000af]">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
