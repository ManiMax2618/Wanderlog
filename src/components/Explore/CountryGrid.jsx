import CountryCard from './CountryCard';

const SkeletonCard = () => (
  <div className="skeleton-card">
    <div className="skeleton-flag" />
    <div className="skeleton-body">
      <div className="skeleton-line skeleton-title" />
      <div className="skeleton-line skeleton-short" />
      <div className="skeleton-line skeleton-short" />
      <div className="skeleton-actions">
        <div className="skeleton-btn" />
        <div className="skeleton-btn" />
      </div>
    </div>
  </div>
);

const CountryGrid = ({ countries, loading, error }) => {
  if (error) {
    return (
      <div className="empty-state error-state">
        <span className="empty-icon">⚠️</span>
        <h3>Something went wrong</h3>
        <p>{error}</p>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="country-grid">
        {Array.from({ length: 12 }).map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    );
  }

  if (!countries.length) {
    return (
      <div className="empty-state">
        <span className="empty-icon">🔍</span>
        <h3>No countries found</h3>
        <p>Try a different search term or region filter.</p>
      </div>
    );
  }

  return (
    <div className="country-grid">
      {countries.map((country) => (
        <CountryCard key={country.cca3} country={country} />
      ))}
    </div>
  );
};

export default CountryGrid;
