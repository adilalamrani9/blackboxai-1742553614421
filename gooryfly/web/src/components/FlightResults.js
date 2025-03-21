import React from 'react';

const FlightResults = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6 text-right">نتائج البحث</h2>
      
      {/* Flight Result Card */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex-1 text-right">
            <div className="flex items-center justify-end mb-2">
              <span className="text-lg font-semibold ml-2">الرياض</span>
              <i className="fas fa-plane-departure text-blue-600"></i>
            </div>
            <span className="text-gray-600">05:30</span>
          </div>
          
          <div className="flex-1 flex justify-center items-center my-4 md:my-0">
            <div className="text-center">
              <div className="text-sm text-gray-500">مدة الرحلة</div>
              <div className="text-lg font-semibold">2h 30m</div>
              <div className="border-t-2 border-dashed border-gray-300 w-32 mx-auto my-2"></div>
              <div className="text-sm text-gray-500">مباشر</div>
            </div>
          </div>
          
          <div className="flex-1 text-left">
            <div className="flex items-center justify-start mb-2">
              <i className="fas fa-plane-arrival text-blue-600"></i>
              <span className="text-lg font-semibold mr-2">دبي</span>
            </div>
            <span className="text-gray-600">08:00</span>
          </div>
          
          <div className="flex-1 text-center mt-4 md:mt-0">
            <div className="text-2xl font-bold text-blue-600">1,250 ريال</div>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-full mt-2 hover:bg-blue-700 transition duration-300">
              احجز الآن
            </button>
          </div>
        </div>
        
        <div className="mt-4 pt-4 border-t border-gray-200">
          <div className="flex justify-between items-center text-sm text-gray-600">
            <div>
              <i className="fas fa-suitcase-rolling mr-2"></i>
              <span>حقيبة 23 كج</span>
            </div>
            <div>
              <i className="fas fa-utensils mr-2"></i>
              <span>وجبة مجانية</span>
            </div>
            <div>
              <i className="fas fa-wifi mr-2"></i>
              <span>واي فاي مجاني</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* More flight results can be added here */}
    </div>
  );
};

export default FlightResults;