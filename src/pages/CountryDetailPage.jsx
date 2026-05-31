import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../components/Layout/Navbar';
import CountryInfo from '../components/CountryDetail/CountryInfo';
import ActionButtons from '../components/CountryDetail/ActionButtons';
import { fetchCountryByCode } from '../api/countriesApi';

const CountryDetailPage = () => {
  const { code } = useParams();
  const navigate = useNavigate();
  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const load = async () => {
      try {
        setLoading(true);
        const data = await fetchCountryByCode(code);
        setCountry(data);
      } catch {
        setError('Country not found.');
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [code]);

  return (
    <div className="app-layout">
      <Navbar />
      <main className="detail-main">
        <button className="back-btn" onClick={() => navigate(-1)}>
          ← Back
        </button>

        {loading && (
          <div className="detail-skeleton">
            <div className="skeleton-flag-large" />
            <div className="skeleton-detail-body">
              <div className="skeleton-line skeleton-title" />
              <div className="skeleton-line" />
              <div className="skeleton-line skeleton-short" />
            </div>
          </div>
        )}

        {error && (
          <div className="empty-state error-state">
            <span className="empty-icon">⚠️</span>
            <h3>{error}</h3>
          </div>
        )}

        {country && !loading && (
          <div className="detail-container">
            <div className="detail-hero">
              <div className="detail-flag-wrap">
                <img
                  src={country.flags?.svg || country.flags?.png}
                  alt={`${country.name.common} flag`}
                  className="detail-flag"
                />
              </div>
              <div className="detail-header-info">
                <h1 className="detail-country-name">{country.name.common}</h1>
                {country.name.official !== country.name.common && (
                  <p className="detail-official-name">{country.name.official}</p>
                )}
                <span className="detail-region-tag">{country.region}</span>
                <ActionButtons country={country} />
              </div>
            </div>

            <CountryInfo country={country} />

            {country.borders?.length > 0 && (
              <div className="neighbors-section">
                <h3 className="section-title">🗺️ Neighboring Countries</h3>
                <div className="neighbors-grid">
                  {country.borders.map((border) => (
                    <button
                      key={border}
                      className="neighbor-btn"
                      onClick={() => navigate(`/country/${border}`)}
                    >
                      {border}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
};

export default CountryDetailPage;
