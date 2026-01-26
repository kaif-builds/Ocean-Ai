
import React from 'react';
import { Link } from 'react-router-dom';
import { OceanIcon, TwitterIcon, LinkedInIcon } from './Icons';

const Footer = () => {
  return (
    <footer className="bg-ocean-light border-t border-gray-700">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center md:items-start">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <OceanIcon className="h-8 w-8 text-ocean-cyan" />
              <span className="text-xl font-bold text-white">OceanAI</span>
            </Link>
            <p className="text-slate-dark text-center md:text-left">Unifying Ocean Data for a Sustainable Future.</p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-slate-dark hover:text-ocean-cyan transition-colors"><TwitterIcon className="h-6 w-6" /></a>
              <a href="#" className="text-slate-dark hover:text-ocean-cyan transition-colors"><LinkedInIcon className="h-6 w-6" /></a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-slate-light mb-4 text-center md:text-left">Quick Links</h3>
            <ul className="space-y-2 text-slate-dark text-center md:text-left">
              <li><Link to="/platform" className="hover:text-ocean-cyan transition-colors">The Platform</Link></li>
              <li><Link to="/technology" className="hover:text-ocean-cyan transition-colors">Technology</Link></li>
              <li><Link to="/impact" className="hover:text-ocean-cyan transition-colors">Global Impact</Link></li>
              <li><Link to="/developers" className="hover:text-ocean-cyan transition-colors">For Developers</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-slate-light mb-4 text-center md:text-left">Join Our Newsletter</h3>
            <p className="text-slate-dark mb-4 text-center md:text-left">Get the latest updates on our platform and research.</p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full px-4 py-2 bg-ocean-deep text-slate-light border border-gray-600 rounded-l-md focus:outline-none focus:ring-2 focus:ring-ocean-cyan"
              />
              <button 
                type="submit"
                className="px-4 py-2 bg-ocean-cyan text-ocean-deep font-semibold rounded-r-md hover:bg-opacity-80 transition-colors"
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-6 text-center text-slate-dark text-sm">
          <p>&copy; {new Date().getFullYear()} OceanAI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
