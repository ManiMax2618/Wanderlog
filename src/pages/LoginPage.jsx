import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import LoginForm from '../components/Auth/LoginForm';

const LoginPage = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) navigate('/explore');
  }, [isAuthenticated, navigate]);

  return (
    <div className="auth-page">
      <div className="auth-left">
        <div className="auth-hero">
          <div className="hero-globe">🌐</div>
          <h1 className="hero-title">Your Travel Dreams,<br />Organized.</h1>
          <p className="hero-subtitle">
            Discover destinations, build your bucket list, and track every adventure.
          </p>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">195+</span>
              <span className="stat-label">Countries</span>
            </div>
            <div className="stat">
              <span className="stat-number">∞</span>
              <span className="stat-label">Adventures</span>
            </div>
            <div className="stat">
              <span className="stat-number">1</span>
              <span className="stat-label">You</span>
            </div>
          </div>
        </div>
      </div>
      <div className="auth-right">
        <div className="auth-card">
          <div className="auth-logo">
            <span>✈️</span>
            <span className="brand-name">WanderLog</span>
          </div>
          <h2 className="auth-title">Welcome back</h2>
          <p className="auth-desc">Sign in to continue your journey</p>
          <LoginForm />
          <p className="auth-hint">
            💡 Use <strong>eve.holt@reqres.in</strong> with any password
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
