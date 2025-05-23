import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-blue-600 bg-opacity-10 flex flex-col items-center justify-center">
      <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4 animate-spin border-t-blue-600"></div>
      <h2 className="text-center text-blue-600 text-xl font-semibold">جاري التحميل...</h2>
      <p className="w-1/3 text-center text-blue-600">هذا قد يستغرق بضع ثوان</p>
    </div>
  );
};

export default LoadingSpinner;