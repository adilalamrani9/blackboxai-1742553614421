import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">
              <i className="fas fa-plane-departure ml-2"></i>
              GooryFly
            </h3>
            <p className="text-gray-400">
              نوفر لك أفضل عروض تذاكر الطيران بأسعار تنافسية من جميع شركات الطيران العالمية.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">روابط سريعة</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">الرئيسية</a></li>
              <li><a href="#" className="hover:text-white">عروضنا</a></li>
              <li><a href="#" className="hover:text-white">عن الشركة</a></li>
              <li><a href="#" className="hover:text-white">تواصل معنا</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">تواصل معنا</h4>
            <ul className="space-y-2 text-gray-400">
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
          
          <div>
            <h4 className="text-lg font-semibold mb-4">تابعنا على</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white text-2xl">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-2xl mr-4">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-2xl mr-4">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-2xl mr-4">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} GooryFly. جميع الحقوق محفوظة</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;