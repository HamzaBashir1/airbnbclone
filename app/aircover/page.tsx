"use client"
import Image from 'next/image';
import React from 'react';
import { useState } from 'react';

const Page = () => {

  const [showThanks, setShowThanks] = useState(false);

  const handleClick = () => {
    setShowThanks(true);
  };

  return (
    <div className='container mx-auto p-4 lg:p-8'>
      
      <p className='text-slate-300 mb-4'>Guide • Guest</p>
     
      <h1 className='font-bold text-2xl md:text-3xl mb-8'>AirCover for guests</h1>

      <div className='flex justify-center mb-8'>
        <Image
            alt="p5"
            className="hidden md:block cursor-pointer w-full"
            height="400"
            width="400"
            src="/images/aircover.png"
        />
      </div>

      <p className='mb-4'>Every booking comes with AirCover for guests. If there’s a serious issue with your Putko that your Host can’t resolve, well help you find a similar place, depending on availability at comparable pricing. If a similar place isn’t available or you’d prefer not to rebook, we’ll give you a full or partial refund.</p>

      <p className='mb-8'>
          If anything comes up, your Host is your best point of contact; it’s likely they’ll be able to fix it. You can  
          <span className='underline'> message your Host </span>
           directly to let them know what’s going on.
      </p>

      <h1 className='font-semibold text-xl md:text-3xl lg:text-4xl mb-4'>In this article</h1>

      <ul className="list-disc mb-8 pl-5">
          <li className='underline'>Host cancellations</li>
          <li className='underline'>Unable to check-in</li>
          <li className='underline'>Inaccurate listings</li>
          <li className='underline'>24-hour safety line</li>
          <li className='underline'>How AirCover for guests works</li>
      </ul>

      <hr className="my-12 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" />
      
      <h1 className='font-bold text-3xl mb-4'>Host cancellations</h1>

      <p className='mb-4'>If your Host cancels within 30 days of check-in, we’ll help you find a similar place, depending on availability at comparable pricing. If a similar place isn’t available or you’d prefer not to rebook, we’ll give you a refund.</p>

      <p className='mb-8'>
          Learn more about what to expect
          <span className='underline'> if your Host cancels your reservation. </span>
      </p>

      <hr className="my-12 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" />

      <h1 className='font-bold text-3xl mb-4'>Unable to check-in</h1>

      <p className='mb-4'>When you have a confirmed reservation, you’ll have your Host’s email and phone number in the message thread for your trip. If you can’t get into your Putko on arrival, your Host doesn’t respond or can’t resolve the issue, we’ll help you find a similar place, depending on availability at comparable pricing. If a similar place isn’t available or you’d prefer not to rebook, we’ll give you a refund. </p>

      <p className='mb-8'>
          Check out what to do next 
          <span className='underline'> if you can’t get in touch with your Host. </span>
      </p>

      <hr className="my-12 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" />

      <p className='mb-8'>
          If the listing is 
          <span className='underline'> significantly different </span>
          than advertised, your Host is a great resource to fix the issue. If the listing is significantly different than advertised and your Host can’t resolve the issue, we’ll help you find a similar place, depending on availability at comparable pricing. If a similar place isn’t available or you’d prefer not to rebook, we’ll give you a full or partial refund.
      </p>

      <hr className="my-12 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" />

      <h1 className='font-bold text-3xl mb-4'> 24-hour safety line </h1>

      <p className='mb-8'>If you ever feel unsafe, we’re here to help you get priority access to specially trained safety agents who will assist you with your safety issues or directly connect you to local emergency authorities, day or night.</p>

      <p className='mb-8'>
          Need to reach us?
          <span className='underline'> Contact us </span>
          by phone, email, or chat.
      </p>

      <hr className="my-12 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" />

      <h1 className='font-bold text-3xl mb-4'>How AirCover for guests works</h1>

      <p className='mb-4'>AirCover for guests provides support for serious issues with your booking (example: Host cancellation within 30 days of check-in) or during your stay (example: The heat going out in winter, the listing has fewer bedrooms than listed, it’s a different type of home—a private room instead of an entire home, a major advertised amenity such as a pool or kitchen is missing) but it doesn’t include more minor inconveniences, like a broken toaster.</p>

      <p className='mb-8'>
          Your Host is your best point of contact to reach out to if anything comes up. You can
          <span className='underline'> message your Host </span>
          directly to let them know what’s going on.
      </p>

      <p className='mb-8'>
          If an issue does come up during your stay:
          <ol className="list-decimal pl-5">
              <li className='mb-2'>Take photos or videos of the issue, if you can.</li>
              <li className='mb-2'>Contact your Host within 72 hours of discovering the problem and describe the issue to them to see if they can resolve it.</li>
              <li className='mb-2'>If your Host can’t resolve the issue or doesn’t respond at all,<span className='underline'> contact us</span> as soon as possible. </li>
              <li className='mb-2'>We’ll review it and if we find it’s an issue that’s supported by AirCover for guests and you’d like to leave the place, we’ll help you find a similar place to stay, depending on availability at comparable pricing. If a similar place isn’t available or you’d prefer not to rebook, we’ll give you a full or partial refund.</li>
          </ol>
      </p>

      <div className="border p-5 mb-8 bg-gray-100 rounded">
          <p>
          <span className="icon text-xl">📄</span>
           AirCover for guests is not an insurance policy. It doesn’t cover travel related issues (example: Your trip is delayed due to a storm, your luggage is damaged by your carrier).
          </p>
      </div>

      <p className='mb-8'>If you’re a Host, learn more about <span className='underline'> AirCover for Hosts </span> and <span className='underline'> recent improvements </span>we’ve made.</p>

      <div className='mt-8 mb-8'>
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