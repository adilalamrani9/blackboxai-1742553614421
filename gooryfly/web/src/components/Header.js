import React from 'react';

function Header() {
  return (
    <header className="bg-blue-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold">
            <i className="fas fa-plane-departure ml-2"></i>
            GooryFly
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#" className="hover:text-blue-200 px-3">الرئيسية</a>
            <a href="#" className="hover:text-blue-200 px-3">عروضنا</a>
            <a href="#" className="hover:text-blue-200 px-3">عن الشركة</a>
            <a href="#" className="hover:text-blue-200 px-3">تواصل معنا</a>
          </nav>
          <div className="flex space-x-4">
            <button className="bg-white text-blue-600 px-6 py-2 rounded-lg hover:bg-blue-50 transition duration-300">
              <i className="fas fa-user ml-2"></i>
              تسجيل الدخول
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;