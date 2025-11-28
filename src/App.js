import React, { useState } from 'react';
import { AuthProvider, useAuth } from './context/AuthContext';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import Header from './components/Portfolio/Header';
import Hero from './components/Portfolio/Hero';
import Skills from './components/Portfolio/Skills';
import Projects from './components/Portfolio/Projects';
import Contact from './components/Portfolio/Contact';
import './styles/App.css';

function AppContent() {
  const { state } = useAuth();
  const [currentPage, setCurrentPage] = useState('login');
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  if (!state.isAuthenticated) {
    return (
      <div className={`app ${theme}`}>
        {currentPage === 'login' ? (
          <Login onNavigate={setCurrentPage} />
        ) : (
          <Signup onNavigate={setCurrentPage} />
        )}
      </div>
    );
  }

  return (
    <div className={`app ${theme}`}>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <Hero />
      <Skills />
      <Projects />
      <Contact />
      <footer className="footer">
        <p>&copy; 2024 Portfolio. All rights reserved.</p>
      </footer>
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;