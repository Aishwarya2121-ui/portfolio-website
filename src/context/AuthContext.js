import React, { createContext, useContext, useReducer, useEffect } from 'react';

const AuthContext = createContext();

const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, isAuthenticated: true, user: action.payload };
    case 'LOGOUT':
      return { ...state, isAuthenticated: false, user: null };
    case 'SIGNUP':
      return { ...state, users: [...state.users, action.payload] };
    default:
      return state;
  }
};

const initialState = {
  isAuthenticated: false,
  user: null,
  users: [
    { email: 'demo@example.com', password: 'demo123', name: 'Demo User' }
  ]
};

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    const savedAuth = localStorage.getItem('authState');
    if (savedAuth) {
      const parsed = JSON.parse(savedAuth);
      if (parsed.isAuthenticated) {
        dispatch({ type: 'LOGIN', payload: parsed.user });
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('authState', JSON.stringify({
      isAuthenticated: state.isAuthenticated,
      user: state.user
    }));
  }, [state]);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};