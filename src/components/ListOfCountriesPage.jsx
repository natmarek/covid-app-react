import { useState, useEffect } from "react";
import { fetchCountriesAsync } from "../api";
import { ListOfCountries } from "./ListOfCountries";
import { useHistory } from "react-router";


export const ListOfCountriesPage = () => {
    const [listOfCountries, setListOfCountries] = useState([]);
    const history = useHistory();
  
    useEffect(() => {
      fetchCountriesAsync("https://api.covid19api.com/countries").then(
        (response) => {
          setListOfCountries(response);
        }
      );
    }, []);
  
    const handleSelect = (slug) => {
      history.push(`/${slug}`)
    };
  
    return (
      <div className="App">
        <h1>Covid-19</h1>
        <ListOfCountries
          handleChange={handleSelect}
          listOfCountries={listOfCountries}
        />
      </div>
    );
  };
