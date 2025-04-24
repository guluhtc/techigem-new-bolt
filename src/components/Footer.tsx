import React from 'react';
import { Instagram, Twitter, Facebook, Mail, Heart } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-4">
            <Logo />
            <p className="mt-4 text-gray-600 max-w-sm">
              Techigem provides free Instagram tools to help you grow your social media presence and engage with your audience.
            </p>
            <div className="flex space-x-4 mt-6">
              <SocialIcon icon={Instagram} />
              <SocialIcon icon={Twitter} />
              <SocialIcon icon={Facebook} />
              <SocialIcon icon={Mail} />
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2">
            <h3 className="font-semibold text-gray-800 mb-4">Tools</h3>
            <ul className="space-y-2">
              <FooterLink text="Downloaders" href="#downloaders" />
              <FooterLink text="Generators" href="#generators" />
              <FooterLink text="Analytics" href="#analytics" />
              <FooterLink text="Profile Tools" href="#profile-tools" />
            </ul>
          </div>

          {/* Company */}
          <div className="md:col-span-2">
            <h3 className="font-semibold text-gray-800 mb-4">Company</h3>
            <ul className="space-y-2">
              <FooterLink text="About Us" href="#" />
              <FooterLink text="Contact" href="#" />
              <FooterLink text="Blog" href="#" />
              <FooterLink text="Careers" href="#" />
            </ul>
          </div>

          {/* Legal */}
          <div className="md:col-span-2">
            <h3 className="font-semibold text-gray-800 mb-4">Legal</h3>
            <ul className="space-y-2">
              <FooterLink text="Terms of Service" href="#" />
              <FooterLink text="Privacy Policy" href="#" />
              <FooterLink text="Cookie Policy" href="#" />
              <FooterLink text="DMCA" href="#" />
            </ul>
          </div>

          {/* Subscribe */}
          <div className="md:col-span-2">
            <h3 className="font-semibold text-gray-800 mb-4">Subscribe</h3>
            <p className="text-gray-600 mb-2">Stay updated with our latest tools</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-3 py-2 text-sm rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
              <button className="bg-purple-600 text-white px-3 py-2 text-sm rounded-r-lg">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 mt-12 pt-8 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Techigem. All rights reserved.</p>
          <p className="mt-2 flex items-center justify-center">
            Made with <Heart size={14} className="text-red-500 mx-1" /> for our Instagram community
          </p>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon: React.FC<{icon: React.ElementType}> = ({icon: Icon}) => {
  return (
    <a href="#" className="bg-white p-2 rounded-full shadow-sm hover:shadow-md transition-all duration-300 text-purple-600 hover:text-pink-500">
      <Icon size={18} />
    </a>
  );
};

const FooterLink: React.FC<{text: string, href: string}> = ({text, href}) => {
  return (
    <li>
      <a href={href} className="text-gray-600 hover:text-purple-600 transition-colors duration-300">
        {text}
      </a>
    </li>
  );
};

export default Footer;