import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { BucketListProvider } from './context/BucketListContext';
import PrivateRoute from './components/Layout/PrivateRoute';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import ExplorePage from './pages/ExplorePage';
import CountryDetailPage from './pages/CountryDetailPage';
import BucketListPage from './pages/BucketListPage';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <BucketListProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/explore" element={<PrivateRoute><ExplorePage /></PrivateRoute>} />
            <Route path="/country/:code" element={<PrivateRoute><CountryDetailPage /></PrivateRoute>} />
            <Route path="/bucketlist" element={<PrivateRoute><BucketListPage /></PrivateRoute>} />
            <Route path="*" element={<Navigate to="/login" replace />} />
          </Routes>
        </BrowserRouter>
      </BucketListProvider>
    </AuthProvider>
  );
}

export default App;
