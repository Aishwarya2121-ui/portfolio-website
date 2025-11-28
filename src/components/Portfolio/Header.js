import React, { useState } from 'react';
import { Menu, X, Sun, Moon, LogOut } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

const Header = ({ theme, toggleTheme }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { dispatch } = useAuth();

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' });
  };

  return (
    <header className="header">
      <div className="container">
        <div className="nav-wrapper">
          <h1 className="logo">Portfolio</h1>
          
          <nav className={`nav ${menuOpen ? 'open' : ''}`}>
            <button onClick={() => scrollToSection('home')}>Home</button>
            <button onClick={() => scrollToSection('skills')}>Skills</button>
            <button onClick={() => scrollToSection('projects')}>Projects</button>
            <button onClick={() => scrollToSection('contact')}>Contact</button>
          </nav>

          <div className="header-actions">
            <button onClick={toggleTheme} className="icon-btn">
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
            <button onClick={handleLogout} className="icon-btn logout-btn" title="Logout">
              <LogOut size={20} />
            </button>
            <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;