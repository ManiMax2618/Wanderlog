import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import SignupForm from '../components/Auth/SignupForm';

const SignupPage = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) navigate('/explore');
  }, [isAuthenticated, navigate]);

  return (
    <div className="auth-page">
      <div className="auth-left">
        <div className="auth-hero">
          <div className="hero-globe">🗺️</div>
          <h1 className="hero-title">Start Your<br />Adventure Today.</h1>
          <p className="hero-subtitle">
            Join thousands of travelers who plan smarter and explore further with WanderLog.
          </p>
          <div className="hero-features">
            <div className="feature-item">✅ Explore 195+ countries</div>
            <div className="feature-item">✅ Build your travel wishlist</div>
            <div className="feature-item">✅ Track visited countries</div>
            <div className="feature-item">✅ All your data, always synced</div>
          </div>
        </div>
      </div>
      <div className="auth-right">
        <div className="auth-card">
          <div className="auth-logo">
            <span>✈️</span>
            <span className="brand-name">WanderLog</span>
          </div>
          <h2 className="auth-title">Create account</h2>
          <p className="auth-desc">Start your travel journey for free</p>
          <SignupForm />
          <p className="auth-hint">
            💡 Try <strong>eve.holt@reqres.in</strong> — it's pre-registered in the demo API
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
