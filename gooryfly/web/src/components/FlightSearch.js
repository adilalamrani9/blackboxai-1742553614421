import React from 'react';
import { useNavigate } from 'react-router-dom';

const FlightSearch = () => {
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    navigate('/search-results');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">ابحث عن أفضل رحلات الطيران</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-6">
          <form onSubmit={handleSearch}>
            <div className="mb-6">
              <div className="flex justify-center space-x-6 mb-6">
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input type="radio" name="tripType" value="roundTrip" className="form-radio" defaultChecked />
                  <span className="mr-2">ذهاب وعودة</span>
                </label>
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input type="radio" name="tripType" value="oneWay" className="form-radio" />
                  <span className="mr-2">ذهاب فقط</span>
                </label>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-gray-700 text-right mb-2">من</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 text-right"
                  placeholder="مدينة المغادرة"
                />
              </div>
              <div>
                <label className="block text-gray-700 text-right mb-2">إلى</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 text-right"
                  placeholder="مدينة الوصول"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-gray-700 text-right mb-2">تاريخ المغادرة</label>
                <input
                  type="date"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 text-right"
                />
              </div>
              <div>
                <label className="block text-gray-700 text-right mb-2">تاريخ العودة</label>
                <input
                  type="date"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 text-right"
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 text-right mb-2">عدد المسافرين</label>
              <select className="w-full border border-gray-300 rounded-md px-4 py-2 text-right">
                <option value="1">1 مسافر</option>
                <option value="2">2 مسافر</option>
                <option value="3">3 مسافر</option>
                <option value="4">4 مسافر</option>
              </select>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300"
              >
                ابحث عن الرحلات
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FlightSearch;