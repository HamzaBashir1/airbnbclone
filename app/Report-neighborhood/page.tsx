"use client"
import React from 'react';
import { useState } from 'react';

const Page = () => {
  const [showThanks, setShowThanks] = useState(false);

  const handleClick = () => {
    setShowThanks(true);
  };
  return (
    <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
      <p className='text-slate-300 mb-4'>How-to</p>
      <h1 className='font-bold text-3xl md:text-3xl mb-8'>Neighborhood Support</h1>
      <p className='mb-6'>You can report a party, noise complaint, or neighborhood concern here.</p>

      <p className='mb-6'>
        For help with a reservation, hosting, or your account,
        <span className='underline'> contact Airbnb Support—</span>
        our Neighborhood Support team is only available to help with concerns related to home sharing in your community.
      </p>

      <div className="border p-5 mb-8">
        <p>
          <span className="icon text-xl">📄</span><span className='font-bold'>For emergencies:</span>
          If you feel unsafe or are concerned about your or someone else's well-being, please contact local emergency services immediately.
        </p>
      </div>

      <h1 className='font-bold text-2xl mb-4'>Urgent neighborhood situations</h1>

      <p className='mb-6'>Reach out to Neighborhood Support if there’s a party or disturbance happening nearby.</p>

      <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow mb-6">
        Request a Call
      </button>

      <h1 className='font-bold text-2xl mb-4'>Other neighborhood concerns</h1>

      <p className='mb-6'>Send us a message using the button below. Our team will investigate and follow up via email.</p>

      <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow mb-8">
        Report a Concern
      </button>

      <div className='mt-8'>
        <p className='mb-4'>Did this article help?</p>
        <button onClick={handleClick} className="mr-2 py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-300">Yes</button>
        <button className="py-2 px-4 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors duration-300">No</button>
        {showThanks && <p className='mt-4'>Thanks for your feedback!</p>}
      </div>

      <hr className="my-12 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" />
    </div>
  );
}

export default Page;
