import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { FaMagnifyingGlass } from "react-icons/fa6";
import Header from "./Header";
import { Link } from "react-router-dom";
import { DarkMode } from "../context/modeContext";

const Home = () => {
  const [countries, setCountries] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [FilteredCountries, setFilteredCountries] = useState("");
  const [filterQuery, setFilterQuery] = useState("");

  const {darkMode, setDarkMode} = useContext(DarkMode)

  const formatNumber = Intl.NumberFormat('en')

  const countriesApi = "https://restcountries.com/v3.1";

  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await axios(`${countriesApi}/all`);
        setCountries(res.data);
        setFilteredCountries(res.data);
        console.log(res);
      } catch (err) {
        console.log(err);
      }
    };
    fetch();
  }, []);

  useEffect(() => {
    // Filter countries based on the search query
    const searchResult = countries?.filter((country) =>
      country.name.common.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredCountries(searchResult);
  }, [searchQuery, countries]);

  useEffect(() => {
    const filterResult = countries?.filter((country) =>
      country.region.toLowerCase().includes(filterQuery.toLowerCase())
    );
    setFilteredCountries(filterResult);
  }, [filterQuery, countries]);
  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className='dark:bg-dark-color'>
      <Header />
      <div className="md:flex justify-between items-center ">
      <div className="bg-white dark:bg-card-color shadow-lg m-5 flex items-center gap-5 px-8 py-3 rounded-md">
        <FaMagnifyingGlass className="dark:text-white"/>
        <input
          type="text"
          placeholder="Search for a country..."
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full dark:text-white dark:bg-card-color p-2 border-none outline-none"
        />
      </div>

      <div className="mx-5">
        <select
          name="filter"
          id="filter"
          className="bg-white dark:bg-card-color dark:text-white p-4 shadow-md"
          onChange={(e) => setFilterQuery(e.target.value)}
        >
          <option selected disabled>
            <span>Filter by region</span>
          </option>
          <option value="Africa">Africa</option>
          <option value="America">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
</div>
      <div className="mx-6 dark:bg-dark-color">
        {countries && (
          <div className="md:grid grid-cols-4 gap-16 dark:bg-dark-color min-h-screen">
            {FilteredCountries.length > 0
              ? FilteredCountries.map((country,i) => (
                  <div className="bg-white shadow-lg my-4 rounded-md dark:bg-card-color dark:text-white" key={i}>
                    <Link to={`/country/${country.name.common}`}>
                      <img
                        src={country.flags.png}
                        alt={country.name.common}
                        className="w-full rounded-t-md"
                      />
                      <div className="p-5 ">
                        <h2 className="font-bold text-xl my-4">{country.name.common}</h2>
                        <p className="my-2"><span className="font-bold"> population:</span> {formatNumber.format(country.population)}</p>
                        <p className="my-2"><span className="font-bold"> Region:</span> {country.region}</p>
                        <p className="my-2"><span className="font-bold"> Capital:</span> {country.capital}</p>
                      </div>
                    </Link>
                  </div>
                ))
              : countries.map((country) => (
                  <div className="bg-white shadow-md my-4 rounded-md">
                    <Link to={`/country/${country.name.common}`}>
                      <img
                        src={country.flags.png}
                        alt={country.name.common}
                        className="w-full rounded-t-md"
                      />
                      <div className="p-5">
                        <h2>{country.name.common}</h2>
                        <p>Region: {country.region}</p>
                        <p>Capital: {country.capital}</p>
                      </div>
                    </Link>
                  </div>
                ))}
          </div>
        )}
      </div>
 </div>   </div>
  );
};

export default Home;
