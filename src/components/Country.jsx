import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "./Header";
import { FaArrowLeftLong } from "react-icons/fa6";
import { DarkMode } from "../context/modeContext";

const Country = () => {
  const { id } = useParams();
  const [country, setCountry] = useState("");

  const { darkMode } = useContext(DarkMode);

  const countriesApi = "https://restcountries.com/v3.1";

  const formatNumber = Intl.NumberFormat("en");

  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await axios(`${countriesApi}/name/${id}`);
        setCountry(res.data[0]);
        console.log(res.data[0]);
      } catch (err) {
        console.log(err);
      }
    };
    fetch();
  }, []);
  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="dark:bg-dark-color min-h-screen dark:text-white">
        <Header />
        <div className="mx-10 ">
          <Link to={"/"} className="flex my-10 ">
            <div className="flex  items-center gap-2 bg-white dark:bg-card-color pl-6 pr-4 py-2 shadow-md">
              <FaArrowLeftLong />
              <span>Back</span>
            </div>
          </Link>
          {country && (
            <div className="">
              <div className="md:flex gap-16">
                <div className="w-[50%]">
                  <img
                    src={country.flags.png}
                    alt={country.name.common}
                    className="w-full"
                  />
                </div>
                <div className="">
                      <h1 className="font-bold text-4xl my-4 ">
                        {country.name.common}
                      </h1>
                  <div className="flex gap-32">
                    <div>
                      <p className="my-2">
                        <span className="font-bold">Native Name: </span>
                        {Object.keys(country.name.nativeName).map(
                          (langCode) => (
                            <span key={langCode}>
                              {country.name.nativeName[langCode].common ||
                                "Not available"}
                            </span>
                          )
                        )}
                      </p>
                      <p className="my-2">
                        <span className="font-bold">Population: </span>
                        {formatNumber.format(parseInt(country.population))}
                      </p>
                      <p className="my-2">
                        <span className="font-bold">Sub Region: </span>
                        {country.region}
                      </p>
                      <p className="my-2">
                        <span className="font-bold">Capiatal: </span>
                        {country.capital[0]}
                      </p>
                    </div>
                    <div>
                      <div className="my-4 md:my-0">
                        <p className="my-2">
                          <span className="font-bold">Top Level Domain: </span>
                          {country.region}
                        </p>
                        <p className="my-2">
                          <span className="font-bold">Currency: </span>
                          {country.currencies
                            ? Object.keys(country.currencies).map(
                                (code, index) => (
                                  <span key={code}>
                                    {country.currencies[code].name ||
                                      "Not available"}{" "}
                                    {index <
                                    Object.keys(country.currencies).length - 1
                                      ? ", "
                                      : ""}
                                  </span>
                                )
                              )
                            : "No currencies available"}
                        </p>
                        <p className="my-2">
                          <span className="font-bold">Language: </span>
                          {country.languages.eng}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="my-5 md:flex items-center gap-4">
                    <p className="font-bold text-xl">Border Countries: </p>
                    <div className="flex gap-4 my-4 ">
                      {country.borders?.map((border) => (
                        <p className="border-2 dark:bg-card-color dark:border-dark-color px-2 py-1 shadow-md">
                          {border}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>{" "}
    </div>
  );
};

export default Country;
