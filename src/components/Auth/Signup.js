import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { Lock } from 'lucide-react';

const Signup = ({ onNavigate }) => {
  const { state, dispatch } = useAuth();
  const [formData, setFormData] = useState({ 
    name: '', 
    email: '', 
    password: '', 
    confirmPassword: '' 
  });
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }

    if (state.users.find(u => u.email === formData.email)) {
      setError('Email already exists');
      return;
    }

    dispatch({ 
      type: 'SIGNUP', 
      payload: { 
        name: formData.name, 
        email: formData.email, 
        password: formData.password 
      }
    });
    
    setError('');
    alert('Account created successfully! Please login.');
    onNavigate('login');
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <Lock size={48} />
          <h2>Create Account</h2>
          <p>Join us to showcase your work</p>
        </div>
        
        <form onSubmit={handleSubmit} className="auth-form">
          {error && <div className="error-message">{error}</div>}
          
          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Enter your name"
              required
            />
          </div>

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
              placeholder="Create a password"
              required
              minLength="6"
            />
          </div>

          <div className="form-group">
            <label>Confirm Password</label>
            <input
              type="password"
              value={formData.confirmPassword}
              onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
              placeholder="Confirm your password"
              required
            />
          </div>

          <button type="submit" className="auth-button">Create Account</button>
        </form>

        <div className="auth-footer">
          <p>Already have an account? <button type="button" onClick={() => onNavigate('login')}>Sign In</button></p>
        </div>
      </div>
    </div>
  );
};

export default Signup;