import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Page = () => {
  return (
    <div>
      <div className='max-w-6xl mx-auto px-4'>
        <h1 className='text-5xl md:text-7xl lg:text-9xl font-bold text-center'>Accessibility <br></br>at Putko</h1>
        <p className='font-light text-center text-xl md:text-2xl lg:text-4xl mb-8 md:mb-16 lg:mb-20'>
          Here’s how we’re making it easier
          <br />
          to travel with us.
        </p>

        <div className='flex flex-col lg:flex-row justify-between lg:pt-36'>
          <div className='lg:w-1/2'>
            <h1 className='text-3xl md:text-5xl lg:text-6xl font-bold'>The Adapted Category</h1>
            <p className='py-4 md:py-6 lg:py-10 font-serif text-base md:text-lg lg:text-xl'>
              Discover unique homes with verified accessibility features including step-free paths into the home, bedroom, and bathroom. Each home in this category receives a detailed 3D scan to confirm its accessibility features and display key details like doorway widths.
            </p>

            <Link href="/">
            
                <button
                type="button"
                className="py-2.5 px-5 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                >
                Start Exploring
                </button>
            </Link>
          </div>
          <div className='w-[20%]'></div>
          <div className='lg:w-1/2'>
            <Image
              alt='fourth'
              className='w-full h-auto'
              width={1000}
              height={100}
              src='/images/fourth.png'
            />
          </div>
        </div>
      </div>

      <div className='bg-[#f7f7f7] pt-10 md:pt-20'>
        <div className='max-w-6xl mx-auto px-4 flex flex-col lg:flex-row justify-between'>
          <div className='lg:w-1/2'>
            <Image
              alt='fifth'
              className='w-full h-auto'
              width={1000}
              height={100}
              src='/images/fifth.png'
            />
          </div>
          <div className='w-[20%]'></div>
          <div className='lg:w-1/2'>
            <h1 className='text-3xl md:text-5xl lg:text-6xl font-bold'>Enhanced search filters</h1>
            <p className='py-4 md:py-6 lg:py-10 text-base md:text-lg lg:text-xl'>
              We’ve simplified our accessibility filters to provide an even better search experience.
            </p>
            <p className='underline font-semibold'>Show the full list of filters</p>
          </div>
        </div>
      </div>

      <div className='max-w-6xl mx-auto px-4 pt-10 md:pt-20'>
        <div className='flex flex-col lg:flex-row justify-between'>
          <div className='lg:w-1/2'>
            <h1 className='text-3xl md:text-5xl lg:text-6xl font-bold'>Accessibility review</h1>
            <p className='py-4 md:py-6 lg:py-10 font-serif text-base md:text-lg lg:text-xl'>
              We review every accessibility feature submitted by stays Hosts for accuracy.
            </p>
          </div>
          <div className='w-[20%]'></div>
          <div className='lg:w-1/2'>
            <Image
              alt='six'
              className='w-full h-auto'
              width={1000}
              height={100}
              src='/images/six.png'
            />
          </div>
        </div>
      </div>

      <div className='bg-[#f7f7f7] pt-10 md:pt-20'>
        <div className='max-w-6xl mx-auto px-4 flex flex-col lg:flex-row justify-between'>
          <div className='lg:w-1/2'>
            <Image
              alt='seven'
              className='w-full h-auto'
              width={1000}
              height={100}
              src='/images/seven.png'
            />
          </div>
          <div className='w-[20%]'></div>
          <div className='lg:w-1/2'>
            <h1 className='text-3xl md:text-5xl lg:text-6xl font-bold'>1:1 messaging with Hosts</h1>
            <p className='py-4 md:py-6 lg:py-10 text-base md:text-lg lg:text-xl'>
              Chat directly with Hosts for more information about the accessibility features of their stay or Experience.
            </p>
          </div>
        </div>
      </div>

      <div className='bg-black text-white pt-10 md:pt-20 pb-10'>
        <div className='max-w-6xl mx-auto px-4'>
          <h1 className='font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-4 md:mb-8'>
            How we’re making Putko
            <br />
            more accessible
          </h1>
          <div className='flex flex-col md:flex-row md:space-x-10'>
            <div className='flex flex-col mb-6 md:mb-0'>
              <h1 className='font-bold text-xl md:text-2xl lg:text-3xl'>Dedicated teams</h1>
              <p>
                Putko has teams focused on building products that everyone can use. These teams work with engineers, designers, and others across the company to help ensure that our products are built with accessibility in mind.
              </p>
            </div>
            <div className='flex flex-col mb-6 md:mb-0'>
              <h1 className='font-bold text-xl md:text-2xl lg:text-3xl'>Research and advocacy</h1>
              <p>
                We conduct research with people who have accessibility needs, and work with experts in the community.
              </p>
            </div>
            <div className='flex flex-col mb-6 md:mb-0'>
              <h1 className='font-bold text-xl md:text-2xl lg:text-3xl'>Digital accessibility standards</h1>
              <p>
                We’re working toward the digital accessibility standards laid out by the Web Content Accessibility Guidelines. We’re also investing in automated testing tools to help us catch more issues.
              </p>
            </div>
          </div>
          <h1 className='font-light text-xl md:text-2xl lg:text-3xl mt-10'>
            Here are some of the organizations we partner with
          </h1>
          <Image
            alt='eight'
            className='w-full h-auto mt-6'
            width={1000}
            height={100}
            src='/images/eight.png'
          />
        </div>
      </div>

      <div className='max-w-6xl mx-auto px-4 mt-10'>
        <div className='flex flex-col lg:flex-row justify-between'>
          <div className='lg:w-1/2'>
            <h1 className='font-bold text-3xl md:text-4xl lg:text-5xl'>We’re here to help</h1>
            <p className='text-lg md:text-xl lg:text-2xl'>Visit our Help Center for more information</p>
          </div>

          <div className='lg:w-1/2 mt-8 lg:mt-0'>
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
};

export default Page;
