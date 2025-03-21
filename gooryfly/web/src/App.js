import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import LoadingSpinner from './components/LoadingSpinner';
import NotFound from './components/NotFound';

// Lazy load components for better performance
const FlightSearch = React.lazy(() => import('./components/FlightSearch'));
const FlightResults = React.lazy(() => import('./components/FlightResults'));
const BookingForm = React.lazy(() => import('./components/BookingForm'));

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Header />
        <main className="flex-grow">
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<FlightSearch />} />
              <Route path="/search-results" element={<FlightResults />} />
              <Route path="/booking" element={<BookingForm />} />
              <Route path="/about" element={<div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold mb-4 text-right">عن الشركة</h1>
                <p className="text-gray-600 text-right">
                  نحن في GooryFly نسعى لتقديم أفضل خدمات حجز تذاكر الطيران بأسعار تنافسية. 
                  نعمل مع أكبر شركات الطيران لنوفر لكم أفضل الخيارات والأسعار.
                </p>
              </div>} />
              <Route path="/contact" element={<div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold mb-4 text-right">تواصل معنا</h1>
                <div className="text-gray-600 text-right">
                  <p className="mb-2">البريد الإلكتروني: info@gooryfly.com</p>
                  <p className="mb-2">الهاتف: +966 123 456 789</p>
                  <p>العنوان: الرياض، المملكة العربية السعودية</p>
                </div>
              </div>} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;