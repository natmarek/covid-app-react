import { useState, useEffect } from 'react';
import { ListOfCountries } from './components/ListOfCountries';
import { fetchCountriesAsync } from './api';
import { ResultDisplay } from './components/ResultDisplay';
import { BrowserRouter, Route, Switch, useHistory, useLocation, useParams } from "react-router-dom";
import './App.css';

const App = () => {
  const [listOfCountries, setListOfCountries] = useState([]);
  const [numberOfCases, setNumberOfCases] = useState(0);

  useEffect(() => {
    fetchCountriesAsync("https://api.covid19api.com/countries").then(
      (response) => {
        setListOfCountries(response);
      }
    );
  }, []);

  const handleSelect = (slug) => {
    fetchCountriesAsync(
      `https://api.covid19api.com/total/country/${slug}/status/confirmed`
    ).then((response) => {
      setNumberOfCases(response[response.length - 1].Cases)
  
    }).catch((err) => console.log(err));
  };

  return (
    <div className="App-header">
    
        <h1>Covid-19</h1>
        <ListOfCountries
        handleChange={handleSelect}
        listOfCountries={listOfCountries}
      />
      <ResultDisplay numberOfCases={numberOfCases}  />

      
    </div>
  );
};

export default App;
