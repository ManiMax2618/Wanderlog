import { useState, useEffect } from 'react';
import { fetchAllCountries } from '../api/countriesApi';

export const useCountries = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const load = async () => {
      try {
        setLoading(true);
        const data = await fetchAllCountries();
        const sorted = data.sort((a, b) =>
          a.name.common.localeCompare(b.name.common)
        );
        setCountries(sorted);
      } catch (err) {
        setError('Failed to load countries. Please try again.');
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  return { countries, loading, error };
};
