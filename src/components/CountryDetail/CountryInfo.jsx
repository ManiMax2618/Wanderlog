const CountryInfo = ({ country }) => {
  const capital = country.capital?.join(', ') || 'N/A';
  const languages = country.languages ? Object.values(country.languages).join(', ') : 'N/A';
  const currencies = country.currencies
    ? Object.values(country.currencies)
        .map((c) => `${c.name} (${c.symbol || '—'})`)
        .join(', ')
    : 'N/A';

  const stats = [
    { label: 'Capital', value: capital, icon: '🏛️' },
    { label: 'Region', value: country.region, icon: '🌍' },
    { label: 'Population', value: country.population?.toLocaleString(), icon: '👥' },
    { label: 'Languages', value: languages, icon: '🗣️' },
    { label: 'Currencies', value: currencies, icon: '💰' },
  ];

  return (
    <div className="country-info">
      <div className="info-grid">
        {stats.map(({ label, value, icon }) => (
          <div className="info-card" key={label}>
            <span className="info-icon">{icon}</span>
            <div>
              <div className="info-label">{label}</div>
              <div className="info-value">{value}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountryInfo;
