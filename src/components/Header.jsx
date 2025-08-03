import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';

function Header() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const handleDropdownMouseEnter = (dropdown) => {
    setActiveDropdown(dropdown);
  };

  const handleDropdownMouseLeave = () => {
    setActiveDropdown(null);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setActiveDropdown(null);
  };

  const handleMobileDropdownToggle = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const isActiveLink = (path) => location.pathname === path;

  return (
    <>
      <header className="bg-white shadow-sm border-b border-gray-200 relative z-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img src={logo} alt="Kedi Labs" className="h-10 w-auto" />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <Link 
                to="/" 
                className={`font-medium transition-colors duration-200 ${
                  isActiveLink('/') 
                    ? 'text-blue-600' 
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className={`font-medium transition-colors duration-200 ${
                  isActiveLink('/about') 
                    ? 'text-blue-600' 
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                About
              </Link>
              <Link 
                to="/programs" 
                className={`font-medium transition-colors duration-200 ${
                  isActiveLink('/programs') 
                    ? 'text-blue-600' 
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                Programs
              </Link>
              <Link 
                to="/partners" 
                className={`font-medium transition-colors duration-200 ${
                  isActiveLink('/partners') 
                    ? 'text-blue-600' 
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                Partners
              </Link>
              
              {/* Blog Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => handleDropdownMouseEnter('blog')}
                onMouseLeave={handleDropdownMouseLeave}
              >
                <Link 
                  to="/blog" 
                  className={`font-medium transition-colors duration-200 flex items-center group ${
                    location.pathname.startsWith('/blog') 
                      ? 'text-blue-600' 
                      : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  Blog
                  {/* <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                    activeDropdown === 'blog' ? 'rotate-180' : ''
                  }`} /> */}
                </Link>
              </div>
              
              <Link 
                to="/contact" 
                className={`font-medium transition-colors duration-200 ${
                  isActiveLink('/contact') 
                    ? 'text-blue-600' 
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                Contact
              </Link>
            </nav>

            {/* Mobile Menu Toggle */}
            <button 
              className="lg:hidden p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors duration-200" 
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Full-Width Blog Dropdown
        {activeDropdown === 'blog' && (
          <div 
            className="absolute top-full left-0 w-full bg-white border-t border-gray-200 shadow-lg z-40"
            onMouseEnter={() => handleDropdownMouseEnter('blog')}
            onMouseLeave={handleDropdownMouseLeave}
          >
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                Featured Article
                <div className="lg:col-span-2">
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg p-6 h-full">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      Featured Articles
                    </h3>
                    <div className="space-y-4">
                      <Link 
                        to="/blog/stem-education-africa"
                        className="block group"
                      >
                        <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors mb-1">
                          The Future of STEM Education in Africa
                        </h4>
                        <p className="text-sm text-gray-600">
                          Exploring innovative approaches to science, technology, engineering, and mathematics education across the continent.
                        </p>
                      </Link>
                      
                      <Link 
                        to="/blog/digital-transformation"
                        className="block group"
                      >
                        <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors mb-1">
                          Digital Transformation in African Universities
                        </h4>
                        <p className="text-sm text-gray-600">
                          How technology is reshaping higher education and creating new opportunities for learning.
                        </p>
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Blog Categories 
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Browse by Category
                  </h3>
                  <div className="space-y-3">
                    <Link 
                      to="/blog/category/education"
                      className="block text-gray-600 hover:text-blue-600 transition-colors font-medium"
                    >
                      Education Innovation
                    </Link>
                    <Link 
                      to="/blog/category/technology"
                      className="block text-gray-600 hover:text-blue-600 transition-colors font-medium"
                    >
                      Technology Trends
                    </Link>
                    <Link 
                      to="/blog/category/partnerships"
                      className="block text-gray-600 hover:text-blue-600 transition-colors font-medium"
                    >
                      Partnership Stories
                    </Link>
                    <Link 
                      to="/blog/category/research"
                      className="block text-gray-600 hover:text-blue-600 transition-colors font-medium"
                    >
                      Research & Insights
                    </Link>
                  </div>
                  
                  <div className="mt-6">
                    <Link 
                      to="/blog"
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors"
                    >
                      View All Articles →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )} */}

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white border-t border-gray-200 shadow-lg z-40">
            <div className="px-6 py-4">
              <div className="space-y-1">
                <Link
                  to="/"
                  className={`block px-3 py-2 rounded-md transition-colors font-medium ${
                    isActiveLink('/') 
                      ? 'text-blue-600 bg-blue-50' 
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                  onClick={toggleMobileMenu}
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className={`block px-3 py-2 rounded-md transition-colors font-medium ${
                    isActiveLink('/about') 
                      ? 'text-blue-600 bg-blue-50' 
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                  onClick={toggleMobileMenu}
                >
                  About
                </Link>
                <Link
                  to="/programs"
                  className={`block px-3 py-2 rounded-md transition-colors font-medium ${
                    isActiveLink('/programs') 
                      ? 'text-blue-600 bg-blue-50' 
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                  onClick={toggleMobileMenu}
                >
                  Programs
                </Link>
                <Link
                  to="/partners"
                  className={`block px-3 py-2 rounded-md transition-colors font-medium ${
                    isActiveLink('/partners') 
                      ? 'text-blue-600 bg-blue-50' 
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                  onClick={toggleMobileMenu}
                >
                  Partners
                </Link>
                
                {/* Mobile Blog Dropdown */}
                <div>
                  <button
                    className={`flex justify-between items-center w-full px-3 py-2 rounded-md transition-colors font-medium ${
                      location.pathname.startsWith('/blog') 
                        ? 'text-blue-600 bg-blue-50' 
                        : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                    }`}
                    onClick={() => handleMobileDropdownToggle('blog')}
                  >
                    Blog
                    {/* <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${
                      activeDropdown === 'blog' ? 'rotate-180' : ''
                    }`} /> */}
                  </button>
                  
                   {activeDropdown === 'blog' && (
                    <div className="ml-4 mt-2 space-y-1">
                      <Link
                        to="/blog"
                        className="block px-3 py-2 text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors"
                        onClick={toggleMobileMenu}
                      >
                        All Articles
                      </Link>
                      <Link
                        to="/blog/category/education"
                        className="block px-3 py-2 text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors"
                        onClick={toggleMobileMenu}
                      >
                        Education Innovation
                      </Link>
                      <Link
                        to="/blog/category/technology"
                        className="block px-3 py-2 text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors"
                        onClick={toggleMobileMenu}
                      >
                        Technology Trends
                      </Link>
                      <Link
                        to="/blog/blogdetail"
                        className="block px-3 py-2 text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors"
                        onClick={toggleMobileMenu}
                      >
                        Featured Articles
                      </Link>
                    </div>
                  )}
                </div>
                
                <Link
                  to="/contact"
                  className={`block px-3 py-2 rounded-md transition-colors font-medium ${
                    isActiveLink('/contact') 
                      ? 'text-blue-600 bg-blue-50' 
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                  onClick={toggleMobileMenu}
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}

export default Header;