import { ResultDisplay } from "./ResultDisplay"
import { fetchCountriesAsync } from "../api";
import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router";
import { ListOfCountries } from "./ListOfCountries";


export const CountryPage = () => {
    // We can use the `useParams` hook here to access
    // the dynamic pieces of the URL.
    let { slug } = useParams();
    const [numberOfCases, setNumberOfCases] = useState(0);
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
  
    useEffect(() => {
  
      fetchCountriesAsync(
        `https://api.covid19api.com/total/country/${slug}/status/confirmed`
      )
        .then((response) => {
          setNumberOfCases(response[response.length - 1].Cases);
        })
        .catch((err) => console.log(err));
  
    }, [slug]);
  
    return (
      <div>
          <ListOfCountries
          handleChange={handleSelect}
          listOfCountries={listOfCountries}
        />
        <h3>Country Code: {slug}</h3>
        <ResultDisplay numberOfCases={numberOfCases} className="result" />
      </div>
    );
  };
