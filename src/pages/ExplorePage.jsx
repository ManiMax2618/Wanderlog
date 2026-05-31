import { useState, useMemo } from 'react';
import Navbar from '../components/Layout/Navbar';
import SearchBar from '../components/Explore/SearchBar';
import CountryGrid from '../components/Explore/CountryGrid';
import { useCountries } from '../hooks/useCountries';

const REGIONS = ['All', 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

const ExplorePage = () => {
  const { countries, loading, error } = useCountries();
  const [search, setSearch] = useState('');
  const [region, setRegion] = useState('All');

  const filtered = useMemo(() => {
    return countries.filter((c) => {
      const matchesRegion = region === 'All' || c.region === region;
      const q = search.toLowerCase();
      const matchesSearch =
        !q ||
        c.name.common.toLowerCase().includes(q) ||
        (c.capital?.[0] || '').toLowerCase().includes(q) ||
        (c.region || '').toLowerCase().includes(q);
      return matchesRegion && matchesSearch;
    });
  }, [countries, search, region]);

  return (
    <div className="app-layout">
      <Navbar />
      <main className="explore-main">
        <div className="explore-header">
          <div>
            <h1 className="page-title">Explore the World</h1>
            <p className="page-subtitle">
              {loading ? 'Loading countries…' : `${filtered.length} countries to discover`}
            </p>
          </div>
        </div>

        <div className="explore-controls">
          <SearchBar value={search} onChange={setSearch} />
          <div className="region-filters">
            {REGIONS.map((r) => (
              <button
                key={r}
                className={`region-btn ${region === r ? 'active' : ''}`}
                onClick={() => setRegion(r)}
              >
                {r}
              </button>
            ))}
          </div>
        </div>

        <CountryGrid countries={filtered} loading={loading} error={error} />
      </main>
    </div>
  );
};

export default ExplorePage;
