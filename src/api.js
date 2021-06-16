export const fetchCountriesAsync = async (url) => {
    const result = await fetch(url);
    return result.json();
  };
