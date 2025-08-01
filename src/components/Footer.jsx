import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import kyndra from '../assets/images/vendor/kyndra.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Programs', href: '/programs' },
    { name: 'Partners', href: '/partners' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' }
  ];

  const programs = [
    { name: 'Engineering Education', href: '/programs/engineering' },
    { name: 'Digital Innovation', href: '/programs/digital' },
    { name: 'Research Initiatives', href: '/programs/research' },
    { name: 'Partnership Programs', href: '/programs/partnerships' }
  ];

  const resources = [
    { name: 'Featured Articles', href: '/blog/featured' },
    { name: 'Research Papers', href: '/resources/papers' },
    { name: 'Case Studies', href: '/resources/cases' },
    { name: 'White Papers', href: '/resources/whitepapers' }
  ];

  return (
    <footer className="bg-white border-t border-gray-200">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <Link to="/">
                <img src={logo} alt="Kedi Labs" className="h-10 w-auto mb-4" />
              </Link>
              <p className="text-gray-600 text-sm leading-relaxed">
                Transforming STEM education across Africa through innovative partnerships, 
                cutting-edge research, and sustainable technology solutions.
              </p>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center text-sm text-gray-600">
                <Mail className="h-4 w-4 mr-3 text-gray-400" />
                <a href="mailto:info@kedilabs.org" className="hover:text-blue-600 transition-colors">
                  info@kedilabs.org
                </a>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <Phone className="h-4 w-4 mr-3 text-gray-400" />
                <a href="tel:+254700000000" className="hover:text-blue-600 transition-colors">
                  +254 700 000 000
                </a>
              </div>
              <div className="flex items-start text-sm text-gray-600">
                <MapPin className="h-4 w-4 mr-3 mt-0.5 text-gray-400 flex-shrink-0" />
                <span>Nairobi, Kenya<br />East Africa</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href}
                    className="text-sm text-gray-600 hover:text-blue-600 transition-colors flex items-center group"
                  >
                    <ChevronRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Programs</h3>
            <ul className="space-y-3">
              {programs.map((program) => (
                <li key={program.name}>
                  <Link 
                    to={program.href}
                    className="text-sm text-gray-600 hover:text-blue-600 transition-colors flex items-center group"
                  >
                    <ChevronRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {program.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Resources</h3>
            <ul className="space-y-3 mb-6">
              {resources.map((resource) => (
                <li key={resource.name}>
                  <Link 
                    to={resource.href}
                    className="text-sm text-gray-600 hover:text-blue-600 transition-colors flex items-center group"
                  >
                    <ChevronRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {resource.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Social Links */}
            <div>
              <h4 className="font-medium text-gray-900 mb-3 text-sm">Follow Us</h4>
              <div className="flex space-x-3">
                <a 
                  href="https://facebook.com/kedilabs" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="h-4 w-4" />
                </a>
                <a 
                  href="https://twitter.com/kedilabs" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="h-4 w-4" />
                </a>
                <a 
                  href="https://linkedin.com/company/kedilabs" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
                <a 
                  href="https://instagram.com/kedilabs" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="max-w-md">
            <h3 className="font-semibold text-gray-900 mb-2">Stay Updated</h3>
            <p className="text-sm text-gray-600 mb-4">
              Get the latest insights on STEM education and innovation in Africa.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 text-sm border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="px-6 py-2 bg-blue-600 text-white text-sm font-medium rounded-r-md hover:bg-blue-700 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-200 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <p className="text-sm text-gray-600">
                © {currentYear} Kedi Labs. All rights reserved.
              </p>
              <div className="flex space-x-6">
                <Link to="/privacy" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">
                  Privacy Policy
                </Link>
                <Link to="/terms" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">
                  Terms of Service
                </Link>
                <Link to="/cookies" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">
                  Cookie Policy
                </Link>
              </div>
            </div>

            {/* Your Signature - Powered by */}
            <div className="powered-by flex justify-center items-center space-x-3">
              <span className="text-black hover:text-[#ff6200] hover:text-shadow-[0_0_5px_#ff6200,0_0_10px_#ff6200] text-sm transition-colors">
                Powered by
              </span>
              <a 
                href="https://kyndrasystems.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-black hover:text-[#ff6200] transition-colors"
              >
                <img src={kyndra} alt="Kyndra Systems" className="h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;