import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { useBucketList } from '../../context/BucketListContext';

const Navbar = () => {
  const { user, logout } = useAuth();
  const { bucketList, visited } = useBucketList();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const avatarLetter = user?.email ? user.email[0].toUpperCase() : 'U';

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/explore" className="brand-link">
          <span className="brand-icon">✈️</span>
          <span className="brand-name">WanderLog</span>
        </Link>
      </div>

      <div className="navbar-links">
        <Link
          to="/explore"
          className={`nav-link ${location.pathname === '/explore' ? 'active' : ''}`}
        >
          🌍 Explore
        </Link>
        <Link
          to="/bucketlist"
          className={`nav-link ${location.pathname === '/bucketlist' ? 'active' : ''}`}
        >
          📋 My List
          {(bucketList.length + visited.length) > 0 && (
            <span className="nav-badge">{bucketList.length + visited.length}</span>
          )}
        </Link>
      </div>

      <div className="navbar-user">
        <div className="user-avatar">{avatarLetter}</div>
        <span className="user-email">{user?.email}</span>
        <button onClick={handleLogout} className="logout-btn">
          Sign Out
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
