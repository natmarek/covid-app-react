import { Country } from "./Country";

export const ListOfCountries = ({ listOfCountries, handleChange }) => {
    const handleCountrySelect = (e) => {
      handleChange(e.target.value);
    };
  
    return (
      <select onChange={handleCountrySelect}>
        {listOfCountries.map((country) => (
          <Country slug={country.Slug} />
        ))}
      </select>
    );
  };
