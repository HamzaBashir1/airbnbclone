import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <div className="container mx-auto px-4">
      
      <div className="bg-gray-950 text-white py-8 px-6">
        <h1 className="text-5xl font-bold mb-4">Become your best Host</h1>
        <p className="text-2xl mb-8">Resources to help you meet your goals</p>

        <div className="flex flex-wrap justify-between space-y-8 md:space-y-0">
          <div className="flex flex-col items-center md:w-1/2 lg:w-1/4 p-4">
            <Image
              alt="hosting"
              className="rounded-lg"
              height="400"
              width="400"
              src="/images/hosting.png"
            />
            <h1 className="text-xl mt-4">How you get paid for hosting</h1>
          </div>
          <div className="flex flex-col items-center md:w-1/2 lg:w-1/4 p-4">
            <Image
              alt="hosting1"
              className="rounded-lg"
              height="400"
              width="400"
              src="/images/hosting1.png"
            />
            <h1 className="text-xl mt-4">Get more 5-star reviews</h1>
          </div>
          <div className="flex flex-col items-center md:w-1/2 lg:w-1/4 p-4">
            <Image
              alt="hosting2"
              className="rounded-lg"
              height="400"
              width="400"
              src="/images/hosting2.png"
            />
            <h1 className="text-xl mt-4">How to set up an effective listing page</h1>
          </div>
          <div className="flex flex-col items-center md:w-1/2 lg:w-1/4 p-4">
            <Image
              alt="hosting3"
              className="rounded-lg"
              height="400"
              width="400"
              src="/images/hosting3.png"
            />
            <h1 className="text-xl mt-4">How much does Putko charge Hosts?</h1>
          </div>
        </div>
      </div>

      <h1 className="text-xl font-semibold mt-8">You might also like</h1>
      <p className="underline mb-4">Explore more</p>

        <div className="flex flex-wrap space-y-8 md:space-y-0">
            <div className="flex flex-col md:w-1/2 lg:w-1/4 p-4">
                <Image
                    alt="hosting4"
                    className="rounded-lg"
                    height="400"
                    width="400"
                    src="/images/hosting4.png"
                />
                <h1 className="text-xl font-bold mt-4">Get Started on Putko</h1>
            </div>
            <div className="flex flex-col md:w-1/2 lg:w-1/4 p-4">
                <Image
                    alt="hosting5"
                    className="rounded-lg"
                    height="400"
                    width="400"
                    src="/images/hosting5.png"
                />
                <h1 className="text-xl font-bold mt-4">New and improved AirCover for Hosts</h1>
            </div>
            <div className="flex flex-col md:w-1/2 lg:w-1/4 p-4">
                <Image
                    alt="hosting6"
                    className="rounded-lg"
                    height="400"
                    width="400"
                    src="/images/hosting6.png"
                />
                <h1 className="text-xl font-bold mt-4">How Putko protects Hosts</h1>
            </div>
            <div className="flex flex-col md:w-1/2 lg:w-1/4 p-4">
                <Image
                    alt="hosting7"
                    className="rounded-lg"
                    height="400"
                    width="400"
                    src="/images/hosting7.png"
                />
                <h1 className="text-xl font-bold mt-4">What are Putko Rooms?</h1>
            </div>
        </div>

    </div>
  )
}

export default page
