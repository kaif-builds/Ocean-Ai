
import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { NAV_LINKS } from '../constants';
import { OceanIcon, MenuIcon, XIcon } from './Icons';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinkClasses = "px-4 py-2 text-sm font-medium hover:text-ocean-cyan transition-colors duration-300";
  const activeLinkClasses = "text-ocean-cyan";

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-ocean-light shadow-lg' : 'bg-transparent'}`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <OceanIcon className="h-8 w-8 text-ocean-cyan" />
            <span className="text-xl font-bold text-white">OceanAI</span>
          </Link>
          <div className="hidden md:flex items-center space-x-2">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) => `${navLinkClasses} ${isActive ? activeLinkClasses : 'text-slate-light'}`}
              >
                {link.name}
              </NavLink>
            ))}
             <Link to="/contact" className="ml-4 px-4 py-2 text-sm font-medium text-ocean-cyan border border-ocean-cyan rounded-md hover:bg-ocean-cyan hover:text-ocean-deep transition-colors duration-300">
              Contact
            </Link>
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu} aria-label="Toggle menu">
              {isOpen ? <XIcon className="h-6 w-6 text-slate-light" /> : <MenuIcon className="h-6 w-6 text-slate-light" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-ocean-light">
          <div className="flex flex-col items-center px-2 pt-2 pb-3 space-y-1">
            {NAV_LINKS.map((link) => (
               <NavLink
                key={link.path}
                to={link.path}
                onClick={toggleMenu}
                className={({ isActive }) => `block w-full text-center px-3 py-2 rounded-md text-base font-medium ${isActive ? 'bg-ocean-deep text-ocean-cyan' : 'text-slate-light hover:bg-ocean-deep'}`}
              >
                {link.name}
              </NavLink>
            ))}
             <Link to="/contact" onClick={toggleMenu} className="block w-full text-center mt-2 px-3 py-2 text-ocean-cyan border border-ocean-cyan rounded-md hover:bg-ocean-cyan hover:text-ocean-deep transition-colors duration-300">
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
