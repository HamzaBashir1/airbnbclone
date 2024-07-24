import React from "react";
// import { useRouter } from "next/router";

const SuccessPage = () => {

    
//   const router = useRouter();

//   const handleGoHome = () => {
//     router.push('/trips');
//   };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-10 rounded-lg shadow-md text-center">
        <svg
          className="w-24 h-24 mx-auto mb-6"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 52 52"
        >
          <circle
            className="checkmark-circle"
            cx="26"
            cy="26"
            r="25"
            fill="none"
            stroke="#4CAF50"
            strokeWidth="4"
          />
          <path
            className="checkmark-check"
            fill="none"
            stroke="#4CAF50"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            d="M14 27l7 7 16-16"
          />
        </svg>
        <h1 className="text-2xl font-semibold mb-4 text-gray-800">Payment Successful!</h1>
        <p className="text-gray-600 mb-8">Thank you for your payment. Your transaction was successful.</p>
        <button
          className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-300"
          
        >
          Go to Trip
        </button>
      </div>
    </div>
  );
};

export default SuccessPage;
