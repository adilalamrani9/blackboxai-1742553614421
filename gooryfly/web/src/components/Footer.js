import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-right">GooryFly</h3>
            <p className="text-gray-400 text-right">
              نحن نقدم أفضل خدمات حجز تذاكر الطيران بأسعار تنافسية وخدمة عملاء متميزة
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-right">روابط سريعة</h3>
            <ul className="space-y-2 text-right">
              <li><Link to="/" className="text-gray-400 hover:text-white transition duration-300">الرئيسية</Link></li>
              <li><Link to="/search-results" className="text-gray-400 hover:text-white transition duration-300">رحلات الطيران</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white transition duration-300">عن الشركة</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition duration-300">تواصل معنا</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-right">معلومات الاتصال</h3>
            <ul className="space-y-2 text-gray-400 text-right">
              <li>
                <i className="fas fa-phone ml-2"></i>
                +966 123 456 789
              </li>
              <li>
                <i className="fas fa-envelope ml-2"></i>
                info@gooryfly.com
              </li>
              <li>
                <i className="fas fa-map-marker-alt ml-2"></i>
                الرياض، المملكة العربية السعودية
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-right">تابعنا</h3>
            <div className="flex justify-end space-x-4">
              <Link to="https://facebook.com" className="text-gray-400 hover:text-white transition duration-300">
                <i className="fab fa-facebook-f"></i>
              </Link>
              <Link to="https://twitter.com" className="text-gray-400 hover:text-white transition duration-300">
                <i className="fab fa-twitter"></i>
              </Link>
              <Link to="https://instagram.com" className="text-gray-400 hover:text-white transition duration-300">
                <i className="fab fa-instagram"></i>
              </Link>
              <Link to="https://linkedin.com" className="text-gray-400 hover:text-white transition duration-300">
                <i className="fab fa-linkedin-in"></i>
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>© {new Date().getFullYear()} GooryFly. جميع الحقوق محفوظة</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;