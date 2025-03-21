import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import FlightSearch from './components/FlightSearch';
import FlightResults from './components/FlightResults';
import BookingForm from './components/BookingForm';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<FlightSearch />} />
            <Route path="/search-results" element={<FlightResults />} />
            <Route path="/booking" element={<BookingForm />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;