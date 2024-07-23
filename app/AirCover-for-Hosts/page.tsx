import Image from 'next/image';
import React from 'react';

const Page = () => {
  return (
    <div className='bg-[#f7f7f7]'>
        <div className=' max-w-7xl mx-auto'>
            <div className='py-40 px-4 md:px-8'>
                <h1 className='text-red-400 text-center text-5xl md:text-9xl font-extrabold'>air<span className='text-slate-950'>cover</span></h1>
                <h1 className='text-slate-950 text-3xl md:text-5xl text-center pb-7'>for Hosts</h1>
                <p className='text-slate-950 text-xl md:text-4xl text-center'>
                Top-to-bottom protection. <br />
                Always included, always free. <br />
                Only on Putko.
                </p>
            </div>

            <hr className="my-12 h-0.5 border-t-0 bg-neutral-500 dark:bg-white/10" />

            <div className='px-4 md:px-8'>
                <h1 className='text-3xl font-bold'>Guest identity verification</h1>
                <p>Our comprehensive verification system checks details such as name, address, government ID, and more to confirm the identity of guests who book on Putko.</p>
            </div>
            
            <hr className="my-12 h-0.5 border-t-0 bg-neutral-500 dark:bg-white/10" />

            <div className='px-4 md:px-8'>
                <h1 className='text-3xl font-bold'>Reservation screening</h1>
                <p>Our proprietary technology analyzes hundreds of factors in each reservation and blocks certain bookings that show a high risk for disruptive parties and property damage.</p>
            </div>
            
            <hr className="my-12 h-0.5 border-t-0 bg-neutral-500 dark:bg-white/10" />

            <div className='px-4 md:px-8'>
                <h1 className='text-3xl font-bold'>$3M damage protection</h1>
                <p>If guests do not pay for the damage caused to your home and belongings, Host damage protection is in place to help reimburse costs up to $3M USD, including these specialized protections:</p>

                <div className='flex flex-wrap md:flex-nowrap gap-10'>
                <div className='flex flex-col w-full md:w-1/2 '>
                    <h1 className='font-bold text-xl mt-8'>Art & valuables</h1>
                    <p>Get reimbursed for damaged art or valuables.</p>
                    <hr className="my-12 h-0.5 border-t-0 bg-neutral-500 dark:bg-white/10" />
                </div>

                <div className='flex flex-col w-full md:w-1/2'>
                    <h1 className='font-bold text-xl mt-8'>Pet damage</h1>
                    <p>Get reimbursed for damage caused by a guest’s pet.</p>
                    <hr className="my-12 h-0.5 border-t-0 bg-neutral-500 dark:bg-white/10" />
                </div>
                </div>

                <div className='flex flex-wrap md:flex-nowrap gap-10'>
                <div className='flex flex-col w-full md:w-1/2'>
                    <h1 className='font-bold text-xl'>Income loss</h1>
                    <p>If you have to cancel Putko bookings due to guest damage, you'll be compensated for the lost income.</p>
                    <hr className="my-12 h-0.5 border-t-0 bg-neutral-500 dark:bg-white/10" />
                </div>

                <div className='flex flex-col w-full md:w-1/2'>
                    <h1 className='font-bold text-xl'>Deep cleaning</h1>
                    <p>Get reimbursed for extra cleaning services required to remove stains and smoke odors.</p>
                    <hr className="my-12 h-0.5 border-t-0 bg-neutral-500 dark:bg-white/10" />
                </div>
                </div>
            </div>

            <div className='px-4 md:px-8'>
                <h1 className='text-3xl font-bold'>$1M liability insurance</h1>
                <p>Protection in the rare event that a guest gets hurt or their belongings are damaged or stolen.</p>
                <hr className="my-12 h-0.5 border-t-0 bg-neutral-500 dark:bg-white/10" />
            </div>

            <div className='px-4 md:px-8'>
                <h1 className='text-3xl font-bold'>24-hour safety line</h1>
                <p>If you ever feel unsafe, our app provides one-tap access to specially-trained safety agents, day or night.</p>
                <hr className="my-12 h-0.5 border-t-0 bg-neutral-500 dark:bg-white/10" />
            </div>

            <div className='px-4 md:px-8 '>
                <p>Find complete details on <span className='underline'>how AirCover for Hosts protects you</span> and any exclusions that apply.</p>
                <h1 className='font-bold text-5xl text-center pt-40 pb-5'>Only Putko gives you AirCover</h1>
            </div>

            <div className="flex flex-wrap justify-center mb-4 px-4 md:px-8">
                    <div className="w-full md:w-1/2 xl:w-1/3 p-4">
                        <div className="bg-white shadow-md rounded p-4">
                            <h2 className="text-lg font-bold mb-2">Features</h2>
                            <ul className="list-none mb-0">
                            <li className="flex items-center mb-2">
                                <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                                <span className="ml-2">Guest identity verification</span>
                            </li>
                            <li className="flex items-center mb-2">
                                <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                                <span className="ml-2">Reservation screening</span>
                            </li>
                            <li className="flex items-center mb-2">
                                <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                                <span className="ml-2">$3M damage protection</span>
                            </li>
                            <li className="flex items-center mb-2">
                                <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                                <span className="ml-2">Art & valuables</span>
                            </li>
                            <li className="flex items-center mb-2">
                                <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                                </svg>
                                <span className="ml-2">Auto & boat</span>
                            </li>
                            <li className="flex items-center mb-2">
                                <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                                </svg>
                                <span className="ml-2">Pet damage</span>
                            </li>
                            <li className="flex items-center mb-2">
                                <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                                </svg>
                                <span className="ml-2">Income loss</span>
                            </li>
                            <li className="flex items-center mb-2">
                                <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                                </svg>
                                <span className="ml-2">Deep cleaning</span>
                            </li>
                            </ul>
                        </div>
                    </div>
                </div>


                
                <h1 className='text-4xl text-center pt-7 pb-3 font-bold'>Paintings and other <br /> artwork are protected</h1>
                <Image
                  alt="aircoverhost"
                  className=" w-full"
                  height="500"
                  width="500"
                  src="/images/aircoverhost.png"
                />

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
    </div>
  );
}

export default Page;
