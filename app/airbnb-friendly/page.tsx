import React from 'react';
import Image from 'next/image';
import { MdOutlineApartment, MdPayments } from "react-icons/md";
import { BiMessageSquareDetail } from "react-icons/bi";

const page = () => {
  return (
    <div className="container mx-auto px-4">

        <h1 className='font-bold text-5xl lg:text-8xl text-center mt-10 lg:mx-96'>
            Introducing <br />
            Airbnb‑friendly <br />
            apartments
        </h1>

        <h4 className='font-light text-xl lg:text-3xl my-4 text-center'>Rent a place to live. Airbnb it part-time.</h4>

        <div className='my-10 text-center'>
            <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Explore near you</button>
        </div>

        <div className='bg-yellow-50 rounded-lg mx-4 lg:mx-40 flex flex-col lg:flex-row lg:space-x-6 p-6'>
            <div className='flex flex-col w-full h-full'>
                <Image
                    alt="friendly"
                    className="w-full h-full rounded-lg"
                    height="500"
                    width="500"
                    src="/images/friendly.png"
                />
            </div>

            <div className='flex flex-col mt-6 lg:mt-10 px-4 lg:px-10'>
                <h1 className='font-light text-2xl lg:text-4xl'>We’ve partnered with Airbnb‑friendly apartment buildings across the US to make it easier to Airbnb your place.</h1>
            </div>
        </div>

        <h1 className='text-center text-3xl lg:text-5xl font-bold mt-10'>Ready to get started?</h1>

        <div className='flex flex-col lg:flex-row justify-center lg:space-x-10 mt-10 lg:mt-20 space-y-6 lg:space-y-0 px-4'>
            <div className='flex flex-col items-center text-center space-y-4'>
                <MdOutlineApartment className="text-6xl" />
                <h1 className='text-xl lg:text-2xl font-light'>First, browse Airbnb‑friendly apartments in your area.</h1>
            </div>
            <div className='flex flex-col items-center text-center space-y-4'>
                <MdPayments className="text-6xl" />
                <h1 className='text-xl lg:text-2xl font-light'>Next, find out how much you can earn on Airbnb.</h1>
            </div>
            <div className='flex flex-col items-center text-center space-y-4'>
                <BiMessageSquareDetail className="text-6xl" />
                <h1 className='text-xl lg:text-2xl font-light'>Then, we’ll help you contact the places you like.</h1>
            </div>
        </div>

        <div className='my-10 text-center'>
            <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Explore near you</button>
        </div>

        <div className='max-w-6xl mx-auto px-4 mt-10'>
            <div className='flex flex-col lg:flex-row justify-between'>
                <div className='lg:w-1/2 mb-8 lg:mb-0'>
                    <h1 className='font-bold text-3xl md:text-4xl lg:text-5xl'>We’re here to help</h1>
                    <p className='text-lg md:text-xl lg:text-2xl'>Visit our Help Center for more information</p>
                </div>

                <div className='lg:w-1/2'>
                    <div className='grid max-w-xl divide-y divide-neutral-200'>
                        <div className='py-5'>
                            <details className='group'>
                                <summary className='flex cursor-pointer list-none items-center justify-between font-medium'>
                                    <span>How are the accessibility features in the Adapted Category verified?</span>
                                    <span className='transition group-open:rotate-180'>
                                        <svg
                                            fill='none'
                                            height='24'
                                            shape-rendering='geometricPrecision'
                                            stroke='currentColor'
                                            strokeLinecap='round'
                                            strokeLinejoin='round'
                                            strokeWidth='1.5'
                                            viewBox='0 0 24 24'
                                            width='24'
                                        >
                                            <path d='M6 9l6 6 6-6'></path>
                                        </svg>
                                    </span>
                                </summary>
                                <p className='group-open:animate-fadeIn mt-3 text-neutral-600'>
                                    Specially-designed cameras are used to create a 3D model of every home in the category. These models are then analyzed to confirm the accessibility features listed.
                                </p>
                            </details>
                        </div>
                        <div className='py-5'>
                            <details className='group'>
                                <summary className='flex cursor-pointer list-none items-center justify-between font-medium'>
                                    <span>How do I use search filters?</span>
                                    <span className='transition group-open:rotate-180'>
                                        <svg
                                            fill='none'
                                            height='24'
                                            shape-rendering='geometricPrecision'
                                            stroke='currentColor'
                                            strokeLinecap='round'
                                            strokeLinejoin='round'
                                            strokeWidth='1.5'
                                            viewBox='0 0 24 24'
                                            width='24'
                                        >
                                            <path d='M6 9l6 6 6-6'></path>
                                        </svg>
                                    </span>
                                </summary>
                                <p className='group-open:animate-fadeIn mt-3 text-neutral-600'>
                                    It’s easy to use our search filters to only show the listings that have the accessibility features you need. Learn more about searching for stays with accessibility features or searching for Experiences with accessibility features.
                                </p>
                            </details>
                        </div>
                        <div className='py-5'>
                            <details className='group'>
                                <summary className='flex cursor-pointer list-none items-center justify-between font-medium'>
                                    <span>How does Putko review accessibility features?</span>
                                    <span className='transition group-open:rotate-180'>
                                        <svg
                                            fill='none'
                                            height='24'
                                            shape-rendering='geometricPrecision'
                                            stroke='currentColor'
                                            strokeLinecap='round'
                                            strokeLinejoin='round'
                                            strokeWidth='1.5'
                                            viewBox='0 0 24 24'
                                            width='24'
                                        >
                                            <path d='M6 9l6 6 6-6'></path>
                                        </svg>
                                    </span>
                                </summary>
                                <p className='group-open:animate-fadeIn mt-3 text-neutral-600'>
                                    We review every accessibility feature submitted by stays Hosts for accuracy.
                                </p>
                            </details>
                        </div>
                        <div className='py-5'>
                            <details className='group'>
                                <summary className='flex cursor-pointer list-none items-center justify-between font-medium'>
                                    <span>How can I get more information about a home or Experience’s accessibility features?</span>
                                    <span className='transition group-open:rotate-180'>
                                        <svg
                                            fill='none'
                                            height='24'
                                            shape-rendering='geometricPrecision'
                                            stroke='currentColor'
                                            strokeLinecap='round'
                                            strokeLinejoin='round'
                                            strokeWidth='1.5'
                                            viewBox='0 0 24 24'
                                            width='24'
                                        >
                                            <path d='M6 9l6 6 6-6'></path>
                                        </svg>
                                    </span>
                                </summary>
                                <p className='group-open:animate-fadeIn mt-3 text-neutral-600'>
                                    Use our messaging tool to contact Hosts directly.
                                </p>
                            </details>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
  );
}

export default page;
