import axios from 'axios';

const BASE_URL = 'https://restcountries.com/v3.1';

export const fetchAllCountries = async () => {
  const response = await axios.get(
    `${BASE_URL}/all?fields=name,flags,population,region,capital,languages,currencies,borders,cca3`
  );
  return response.data;
};

export const fetchCountryByCode = async (code) => {
  const response = await axios.get(
    `${BASE_URL}/alpha/${code}?fields=name,flags,population,region,capital,languages,currencies,borders,cca3`
  );
  return response.data;
};
