import React from 'react';

const BookingForm = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6 text-right">تفاصيل الحجز</h2>
      
      {/* Flight Summary */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="flex justify-between items-center">
          <div className="text-right">
            <div className="text-lg font-semibold">الرياض → دبي</div>
            <div className="text-gray-600">الخميس، 15 ديسمبر 2023</div>
          </div>
          <div className="text-left">
            <div className="text-2xl font-bold text-blue-600">1,250 ريال</div>
            <div className="text-gray-500">شامل الضرائب</div>
          </div>
        </div>
      </div>

      {/* Passenger Details Form */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h3 className="text-xl font-semibold mb-4 text-right">معلومات المسافر</h3>
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 text-right mb-2">الاسم الأول</label>
              <input type="text" className="w-full border border-gray-300 rounded-md px-4 py-2 text-right" />
            </div>
            <div>
              <label className="block text-gray-700 text-right mb-2">اسم العائلة</label>
              <input type="text" className="w-full border border-gray-300 rounded-md px-4 py-2 text-right" />
            </div>
            <div>
              <label className="block text-gray-700 text-right mb-2">البريد الإلكتروني</label>
              <input type="email" className="w-full border border-gray-300 rounded-md px-4 py-2 text-right" />
            </div>
            <div>
              <label className="block text-gray-700 text-right mb-2">رقم الجوال</label>
              <input type="tel" className="w-full border border-gray-300 rounded-md px-4 py-2 text-right" />
            </div>
          </div>
        </form>
      </div>

      {/* Payment Details */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h3 className="text-xl font-semibold mb-4 text-right">تفاصيل الدفع</h3>
        <div className="space-y-6">
          <div className="flex justify-end space-x-4">
            <img src="https://cdn-icons-png.flaticon.com/512/349/349221.png" alt="Visa" className="h-8" />
            <img src="https://cdn-icons-png.flaticon.com/512/349/349228.png" alt="MasterCard" className="h-8" />
            <img src="https://cdn-icons-png.flaticon.com/512/349/349230.png" alt="American Express" className="h-8" />
          </div>
          <form className="space-y-6">
            <div>
              <label className="block text-gray-700 text-right mb-2">رقم البطاقة</label>
              <input type="text" className="w-full border border-gray-300 rounded-md px-4 py-2 text-right" placeholder="**** **** **** ****" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 text-right mb-2">تاريخ الانتهاء</label>
                <input type="text" className="w-full border border-gray-300 rounded-md px-4 py-2 text-right" placeholder="MM/YY" />
              </div>
              <div>
                <label className="block text-gray-700 text-right mb-2">رمز الأمان (CVV)</label>
                <input type="text" className="w-full border border-gray-300 rounded-md px-4 py-2 text-right" placeholder="***" />
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* Submit Button */}
      <div className="text-center">
        <button className="bg-blue-600 text-white px-12 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300">
          تأكيد الحجز
        </button>
      </div>
    </div>
  );
};

export default BookingForm;