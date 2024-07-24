import React from "react";

const CancelPage = () => {
    return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white p-10 rounded-lg shadow-md text-center max-w-lg">
        <svg
          className="w-24 h-24 mx-auto mb-6 text-red-500"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 52 52"
        >
          <circle
            className="checkmark-circle"
            cx="26"
            cy="26"
            r="25"
            fill="none"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="checkmark-cross"
            fill="none"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            d="M16 16 36 36 M36 16 16 36"
          />
        </svg>
        <h1 className="text-2xl font-semibold mb-4 text-gray-800">Payment Cancelled</h1>
        <p className="text-gray-600 mb-8">
          We're sorry, but the payment process was cancelled. You can try again or contact support if you need assistance.
        </p>
        <button
          className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-300"
        
        >
          Go to Home
        </button>
      </div>
    </div>
  );
};

export default CancelPage;
