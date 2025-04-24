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
      className={`fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-white/90 backdrop-blur-xl shadow-lg scale-95' 
          : 'bg-white/50 backdrop-blur-sm'
      } rounded-2xl border border-white/20`}
    >
      <div className="px-4 md:px-6 py-3">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0 transition-transform duration-300 hover:scale-105">
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
                className="w-40 lg:w-48 pl-10 pr-4 py-2 text-sm bg-gray-100/50 border border-transparent rounded-full 
                         focus:outline-none focus:ring-2 focus:ring-purple-500 focus:bg-white focus:border-purple-300
                         transition-all duration-300 placeholder-gray-400"
              />
            </div>

            {/* Notification Bell */}
            <button className="relative p-2 text-gray-600 hover:text-purple-600 transition-all duration-300 hover:scale-110">
              <Bell size={20} />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full ring-2 ring-white"></span>
            </button>

            {/* CTA Button */}
            <a 
              href="#tools" 
              className="flex items-center bg-gradient-to-r from-purple-600 to-pink-500 text-white py-2 px-5 rounded-full 
                       font-medium text-sm hover:shadow-lg transition-all duration-300 hover:scale-105 hover:from-purple-700 
                       hover:to-pink-600"
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
        className={`md:hidden fixed inset-0 bg-white/95 backdrop-blur-xl transition-all duration-500 ${
          isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
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
                className="w-full pl-10 pr-4 py-2 text-sm bg-gray-100/50 border border-transparent rounded-full 
                         focus:outline-none focus:ring-2 focus:ring-purple-500 focus:bg-white focus:border-purple-300"
              />
            </div>
            
            <a 
              href="#tools" 
              className="flex items-center justify-center bg-gradient-to-r from-purple-600 to-pink-500 text-white 
                       py-3 px-6 rounded-full font-medium w-full hover:shadow-lg transition-all duration-300 
                       hover:from-purple-700 hover:to-pink-600"
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
      className="px-4 py-2 text-gray-700 hover:text-purple-600 font-medium rounded-full hover:bg-purple-50 
                transition-all duration-300 relative group"
    >
      {text}
      <span className="absolute inset-x-4 bottom-1 h-0.5 bg-purple-600 transform scale-x-0 group-hover:scale-x-100 
                     transition-transform origin-left"></span>
    </a>
  );
};

const NavDropdown: React.FC = () => {
  return (
    <div className="relative group">
      <button className="px-4 py-2 text-gray-700 hover:text-purple-600 font-medium rounded-full hover:bg-purple-50 
                      transition-all duration-300 flex items-center">
        Tools 
        <ChevronDown size={16} className="ml-1 group-hover:rotate-180 transition-transform duration-300" />
      </button>
      <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 
                    group-hover:visible transition-all duration-300">
        <div className="bg-white rounded-xl shadow-lg border border-gray-100/50 backdrop-blur-xl overflow-hidden min-w-[200px]">
          <DropdownLink href="#downloaders" text="Instagram Downloaders" />
          <DropdownLink href="#generators" text="Content Generators" />
          <DropdownLink href="#analytics" text="Profile Analytics" />
        </div>
      </div>
    </div>
  );
};

const DropdownLink: React.FC<{href: string; text: string}> = ({href, text}) => {
  return (
    <a 
      href={href} 
      className="block px-4 py-3 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors 
                relative group overflow-hidden"
    >
      <span className="relative z-10">{text}</span>
      <span className="absolute inset-0 bg-purple-50 transform -translate-x-full group-hover:translate-x-0 
                    transition-transform duration-300"></span>
    </a>
  );
};

export default Header;