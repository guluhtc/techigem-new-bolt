import React, { useState, useEffect } from 'react';
import { Menu, X, Instagram, ChevronDown, Search, Bell } from 'lucide-react';
import Logo from './Logo';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header 
      className={`fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/80 backdrop-blur-md shadow-lg' 
          : 'bg-white/50 backdrop-blur-sm'
      } rounded-2xl border border-white/20`}
    >
      <div className="px-4 md:px-6 py-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Logo />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <NavLinks />
          </div>

          {/* Right Section */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Search Bar */}
            <div className="relative group">
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <Search size={16} className="text-gray-400 group-hover:text-purple-500 transition-colors" />
              </div>
              <input
                type="text"
                placeholder="Search tools..."
                className="w-40 lg:w-48 pl-10 pr-4 py-2 text-sm bg-gray-100 border-0 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 focus:bg-white transition-all"
              />
            </div>

            {/* Notification Bell */}
            <button className="relative p-2 text-gray-600 hover:text-purple-600 transition-colors">
              <Bell size={20} />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>

            {/* CTA Button */}
            <a 
              href="#tools" 
              className="flex items-center bg-gradient-to-r from-purple-600 to-pink-500 text-white py-2 px-5 rounded-full font-medium text-sm hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <Instagram size={16} className="mr-2" />
              Get Free Tools
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden relative z-50 p-2 text-gray-800 hover:text-purple-600 transition-colors"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden fixed inset-0 bg-white/90 backdrop-blur-lg transition-transform duration-300 ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="h-full flex flex-col pt-20 px-6">
          <div className="flex flex-col space-y-6">
            <NavLinks mobile />
          </div>
          
          <div className="mt-8">
            <div className="relative mb-6">
              <div className="absolute inset-y-0 left-3 flex items-center">
                <Search size={16} className="text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search tools..."
                className="w-full pl-10 pr-4 py-2 text-sm bg-gray-100 border-0 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            
            <a 
              href="#tools" 
              className="flex items-center justify-center bg-gradient-to-r from-purple-600 to-pink-500 text-white py-3 px-6 rounded-full font-medium w-full"
            >
              <Instagram size={16} className="mr-2" />
              Get Free Tools
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

const NavLinks: React.FC<{mobile?: boolean}> = ({mobile}) => {
  return (
    <>
      <NavLink href="#" text="Home" />
      <NavDropdown />
      <NavLink href="#features" text="Features" />
      <NavLink href="#testimonials" text="Testimonials" />
    </>
  );
};

const NavLink: React.FC<{href: string; text: string}> = ({href, text}) => {
  return (
    <a 
      href={href} 
      className="px-4 py-2 text-gray-700 hover:text-purple-600 font-medium rounded-full hover:bg-purple-50 transition-all duration-300"
    >
      {text}
    </a>
  );
};

const NavDropdown: React.FC = () => {
  return (
    <div className="relative group">
      <button className="px-4 py-2 text-gray-700 hover:text-purple-600 font-medium rounded-full hover:bg-purple-50 transition-all duration-300 flex items-center">
        Tools <ChevronDown size={16} className="ml-1 group-hover:rotate-180 transition-transform duration-300" />
      </button>
      <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
        <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden min-w-[200px]">
          <a href="#downloaders" className="block px-4 py-3 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors">
            Instagram Downloaders
          </a>
          <a href="#generators" className="block px-4 py-3 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors">
            Content Generators
          </a>
          <a href="#analytics" className="block px-4 py-3 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors">
            Profile Analytics
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;