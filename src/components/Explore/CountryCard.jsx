import { useNavigate } from 'react-router-dom';
import { useBucketList } from '../../context/BucketListContext';

const CountryCard = ({ country }) => {
  const navigate = useNavigate();
  const { addToBucketList, markVisited, isInBucketList, isVisited } = useBucketList();

  const inList = isInBucketList(country.cca3);
  const alreadyVisited = isVisited(country.cca3);

  const handleCardClick = () => navigate(`/country/${country.cca3}`);

  const handleBucketList = (e) => {
    e.stopPropagation();
    addToBucketList(country);
  };

  const handleVisited = (e) => {
    e.stopPropagation();
    markVisited(country);
  };

  const capital = country.capital?.[0] || 'N/A';
  const population = country.population?.toLocaleString() || 'N/A';

  return (
    <div className="country-card" onClick={handleCardClick}>
      <div className="card-flag-wrapper">
        <img
          src={country.flags?.svg || country.flags?.png}
          alt={`${country.name.common} flag`}
          className="card-flag"
          loading="lazy"
        />
        {alreadyVisited && <span className="visited-badge">✓ Visited</span>}
        {inList && !alreadyVisited && <span className="wishlist-badge">♥ Wishlist</span>}
      </div>
      <div className="card-body">
        <h3 className="card-title">{country.name.common}</h3>
        <div className="card-meta">
          <span className="meta-item">📍 {capital}</span>
          <span className="meta-item">👥 {population}</span>
          <span className="meta-item region-tag">{country.region}</span>
        </div>
        <div className="card-actions">
          <button
            className={`action-btn wishlist-btn ${inList ? 'active' : ''}`}
            onClick={handleBucketList}
            disabled={inList || alreadyVisited}
            title={inList ? 'Already in wishlist' : 'Add to bucket list'}
          >
            {inList ? '♥ In Wishlist' : '♡ Wishlist'}
          </button>
          <button
            className={`action-btn visited-btn ${alreadyVisited ? 'active' : ''}`}
            onClick={handleVisited}
            disabled={alreadyVisited}
            title={alreadyVisited ? 'Already visited' : 'Mark as visited'}
          >
            {alreadyVisited ? '✓ Visited' : '✈ Visited'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CountryCard;
