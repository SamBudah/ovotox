// components/Header.tsx - Updated
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = () => {
    setIsMenuOpen(false);
    // Smooth scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'What We Do', path: '/what-we-do' },
    { name: 'Why Ovotox', path: '/why-ovotox' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <header>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link 
            to="/" 
            aria-label="Ovotox Home"
            onClick={handleNavClick}
          >
            <img 
              src="/assets/logos/logo2.png" 
              alt="Ovotox Logo" 
              className="logo"
            />
          </Link>
        </motion.div>
        
        <button
          className="hamburger"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? 'Close Menu' : 'Open Menu'}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? '✕' : '☰'}
        </button>
        
        <nav className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
          {navItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link
                to={item.path}
                className={location.pathname === item.path ? 'active' : ''}
                aria-current={location.pathname === item.path ? 'page' : undefined}
                onClick={handleNavClick}
              >
                {item.name}
              </Link>
            </motion.div>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;