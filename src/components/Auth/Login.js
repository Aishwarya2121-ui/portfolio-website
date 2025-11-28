import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { User } from 'lucide-react';

const Login = ({ onNavigate }) => {
  const { state, dispatch } = useAuth();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = state.users.find(
      u => u.email === formData.email && u.password === formData.password
    );
    
    if (user) {
      dispatch({ type: 'LOGIN', payload: user });
      setError('');
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <User size={48} />
          <h2>Welcome Back</h2>
          <p>Sign in to access your portfolio</p>
        </div>
        
        <form onSubmit={handleSubmit} className="auth-form">
          {error && <div className="error-message">{error}</div>}
          
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              placeholder="Enter your password"
              required
            />
          </div>

          <button type="submit" className="auth-button">Sign In</button>
        </form>

        <div className="auth-footer">
          <p>Don't have an account? <button type="button" onClick={() => onNavigate('signup')}>Sign Up</button></p>
          <p className="demo-hint">Demo: demo@example.com / demo123</p>
        </div>
      </div>
    </div>
  );
};

export default Login;