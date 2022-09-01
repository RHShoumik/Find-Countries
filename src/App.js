import React, { useEffect, useState } from "react";
import "./App.css";
import Countries from "./components/Countries";
import Loader from "./components/Loader";
import Serach from "./components/Serach";

const url = "https://restcountries.com/v3.1/all";

function App() {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filterCountries, setFilterCountries] = useState(countries);

  const fetchData = async (url) => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setCountries(data);
      setFilterCountries(data);
      setIsLoading(false);
      setError(null);
    } catch (error) {
      setIsLoading(false);
      setError(error);
    }
  };


  useEffect(() => {
    fetchData(url);
  }, []);

  const handleRemove = (name) => {
    const filter = filterCountries.filter((country) => country.name.common !== name);
    setFilterCountries(filter);
  }
  const handleSearch = (searchItem) => {
    const item = searchItem.toLowerCase();
    if (item === "") {
      return setFilterCountries(countries);
    }
    const searchFilter = filterCountries.filter((counrty) => {
      const counrtyName = counrty.name.common.toLowerCase();
      return counrtyName.startsWith(item);
    });
    setFilterCountries(searchFilter);
  };

  return (
    <>
      <h1>Search My Country</h1>
      <Serach onSearch={handleSearch} />
      {isLoading && <Loader />}
      {error && <h3>{error.massage}</h3>}
      {countries && (
        <Countries
          countriesInfo={filterCountries}
          removeCountry={handleRemove}
        />
      )}
    </>
  );
}
export default App;
