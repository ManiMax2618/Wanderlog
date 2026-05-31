import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Layout/Navbar';
import { useBucketList } from '../context/BucketListContext';

const CountryListItem = ({ country, onRemove, badge }) => {
  const navigate = useNavigate();
  return (
    <div className="list-item" onClick={() => navigate(`/country/${country.cca3}`)}>
      <img
        src={country.flags?.svg || country.flags?.png}
        alt={country.name.common}
        className="list-flag"
      />
      <div className="list-info">
        <h4 className="list-name">{country.name.common}</h4>
        <span className="list-meta">
          {country.capital?.[0] || 'N/A'} · {country.region}
        </span>
      </div>
      <span className={`list-badge ${badge}`}>{badge === 'wishlist' ? '♥ Wishlist' : '✓ Visited'}</span>
      <button
        className="list-remove-btn"
        onClick={(e) => {
          e.stopPropagation();
          onRemove(country.cca3);
        }}
        title="Remove"
      >
        ✕
      </button>
    </div>
  );
};

const BucketListPage = () => {
  const { bucketList, visited, removeFromBucketList, removeFromVisited } = useBucketList();
  const navigate = useNavigate();

  return (
    <div className="app-layout">
      <Navbar />
      <main className="bucketlist-main">
        <div className="bucketlist-header">
          <h1 className="page-title">My Travel List</h1>
          <p className="page-subtitle">
            {bucketList.length + visited.length} countries tracked
          </p>
        </div>

        <div className="bucketlist-grid">
          <section className="list-section">
            <div className="section-header">
              <h2 className="section-title">
                ♥ Wishlist
                <span className="section-count">{bucketList.length}</span>
              </h2>
            </div>
            {bucketList.length === 0 ? (
              <div className="empty-state small-empty">
                <span className="empty-icon">🗺️</span>
                <p>Your wishlist is empty.</p>
                <button className="btn-primary" onClick={() => navigate('/explore')}>
                  Explore Countries
                </button>
              </div>
            ) : (
              <div className="list-items">
                {bucketList.map((c) => (
                  <CountryListItem
                    key={c.cca3}
                    country={c}
                    badge="wishlist"
                    onRemove={removeFromBucketList}
                  />
                ))}
              </div>
            )}
          </section>

          <section className="list-section">
            <div className="section-header">
              <h2 className="section-title">
                ✓ Visited
                <span className="section-count visited-count">{visited.length}</span>
              </h2>
            </div>
            {visited.length === 0 ? (
              <div className="empty-state small-empty">
                <span className="empty-icon">✈️</span>
                <p>No visited countries yet.</p>
                <button className="btn-primary" onClick={() => navigate('/explore')}>
                  Start Exploring
                </button>
              </div>
            ) : (
              <div className="list-items">
                {visited.map((c) => (
                  <CountryListItem
                    key={c.cca3}
                    country={c}
                    badge="visited"
                    onRemove={removeFromVisited}
                  />
                ))}
              </div>
            )}
          </section>
        </div>
      </main>
    </div>
  );
};

export default BucketListPage;
