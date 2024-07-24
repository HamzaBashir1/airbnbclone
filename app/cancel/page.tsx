"use client";
import { useEffect } from "react";
import { useRouter } from "next/router";

const CancelPage = () => {
  const router = useRouter();

  useEffect(() => {
    // Log a message or perform any action after payment is cancelled
    console.log("Payment was cancelled!");

    // Optionally, redirect to another page after a delay
    // setTimeout(() => {
    //   router.push('/some-page');
    // }, 3000); // Redirect after 3 seconds
  }, [router]);

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
          onClick={() => router.push('/')}
        >
          Go to Home
        </button>
      </div>
    </div>
  );
};

export default CancelPage;
