import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-blue-600 text-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-2xl font-bold flex items-center">
            <i className="fas fa-plane-departure mr-2"></i>
            GooryFly
          </Link>
          
          <nav className="hidden md:flex space-x-6">
            <Link to="/" className="hover:text-blue-200 transition duration-300">الرئيسية</Link>
            <Link to="/search-results" className="hover:text-blue-200 transition duration-300">رحلات الطيران</Link>
            <Link to="/about" className="hover:text-blue-200 transition duration-300">عن الشركة</Link>
            <Link to="/contact" className="hover:text-blue-200 transition duration-300">تواصل معنا</Link>
          </nav>
          
          <div className="flex items-center space-x-4">
            <Link 
              to="/login"
              className="bg-white text-blue-600 px-4 py-2 rounded-full font-semibold hover:bg-blue-50 transition duration-300"
            >
              تسجيل الدخول
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;