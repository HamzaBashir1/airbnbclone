"use client";
import React, { useState, ChangeEvent, FormEvent } from 'react';
import Image from 'next/image'


const Page = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Perform search logic here, e.g., navigate to a search results page
    console.log('Search term:', searchTerm);
  };

  const [selectedRole, setSelectedRole] = useState('Guest');

  const handleRoleClick = (role: React.SetStateAction<string>) => {
    setSelectedRole(role);
  };


//   const router = useRouter()

  return (
    <div>
      <h1 className="text-[40px] font-bold text-center">Hi, how can we help?</h1>
      

        {/* search input */}
        
        <form className="max-w-md mx-auto mt-5">   
            <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search how tos and more</label>
            <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                    </svg>
                </div>
                <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required />
                <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
            </div>
        </form>


        {/* Content */}
    <div className='lg:mx-80'>
        <div className="role-options flex flex-wrap md:flex-nowrap mt-10 border-b-2">
            <button
                className={`btn ${selectedRole === 'Guest' ? 'bg-green-500 text-white' : 'hover:bg-green-500'} rounded-md px-4 py-2 mx-2`}
                onClick={() => handleRoleClick('Guest')}
            >
                Guest
            </button>
            <button
                className={`btn ${selectedRole === 'Host' ? 'bg-green-500 text-white' : 'hover:bg-green-500'} rounded-md px-4 py-2 mx-2`}
                onClick={() => handleRoleClick('Host')}
            >
                Host
            </button>
            <button
                className={`btn ${selectedRole === 'Experience Host' ? 'bg-green-500 text-white' : 'hover:bg-green-500'} rounded-md px-4 py-2 mx-2`}
                onClick={() => handleRoleClick('Experience Host')}
            >
                Experience Host
            </button>
            <button
                className={`btn ${selectedRole === 'Travel Admin' ? 'bg-green-500 text-white' : 'hover:bg-green-500'} rounded-md px-4 py-2 mx-2`}
                onClick={() => handleRoleClick('Travel Admin')}
            >
                Travel Admin
            </button>
        </div>

    {/* buttons */}
    
    {selectedRole === 'Guest' && (
    <div className="mt-10 mb-5 md:mt-5 md:mb-3 lg:mt-10 lg:mb-5 xl:mt-15 xl:mb-10">
        <div className="flex justify-between">
            <div className="flex">
                <h1 className="font-bold text-[30px] md:text-[35px] lg:text-[40px] xl:text-[45px]">Guides for getting started</h1>
            </div>
            <div className="flex">
                <p className="md:text-sm lg:text-base xl:text-lg"> Browse all topics</p>
            </div>
        </div>

        <div className='flex flex-row mt-5 md:flex-wrap lg:flex-nowrap xl:flex-wrap'>
            <div className='flex flex-col mr-5 md:w-1/2 lg:w-1/3 xl:w-1/4'>
                <Image
                    alt="first"
                    className="hidden md:block cursor-pointer"
                    height="400"
                    width="400"
                    src="/images/first.png"
                />
                <h2 className='font-bold text-[20px] md:text-[22px] lg:text-[25px] xl:text-[28px]'>Getting started on Airbnb</h2>
            </div>

            <div className='flex flex-col mr-5 md:w-1/2 lg:w-1/3 xl:w-1/4'>
                <Image
                    alt="second"
                    className="hidden md:block cursor-pointer"
                    height="400"
                    width="400"
                    src="/images/second.png"
                />
                <h2 className='font-bold text-[20px] md:text-[22px] lg:text-[25px] xl:text-[28px]'>Access and manage your account</h2>
            </div>

            <div className='flex flex-col mr-5 md:w-1/2 lg:w-1/3 xl:w-1/4'>
                <Image
                    alt="third"
                    className="hidden md:block cursor-pointer"
                    height="400"
                    width="400"
                    src="/images/third.png"
                />
                <h2 className='font-bold text-[20px] md:text-[22px] lg:text-[25px] xl:text-[28px]'>Help with a reservation</h2>
            </div>

        </div>

        <h1 className='text-[30px] mt-5 md:text-[35px] lg:text-[40px] xl:text-[45px]'>Top articles</h1>
        <div className='flex flex-row mt-5 w-full'>
            <div className='flex flex-col w-full lg:w-1/3 xl:w-1/3 mr-5'>
                <h1 className='underline font-bold text-sm md:text-base lg:text-lg xl:text-xl'>Canceling your reservation for a stay</h1>
                <p className='text-xs md:text-sm lg:text-base xl:text-lg'>Your plans have changed and now you need to cancel your reservation. No problem.</p>
                <div className='border border-solid mt-12'></div>
            </div>
            <div className='flex flex-col w-full lg:w-1/3 xl:w-1/3 mr-5'>
                <h1 className='underline font-bold text-sm md:text-base lg:text-lg xl:text-xl'>Change the date or time of your Experience reservation</h1>
                <p className='text-xs md:text-sm lg:text-base xl:text-lg'>You booked an Experience, but the date or time no longer works for you? Don’t worry, you..</p>
                <div className='border border-solid mt-5'></div>
            </div>
            <div className='flex flex-col w-full lg:w-1/3 xl:w-1/3'>
                <h1 className='underline font-bold text-sm md:text-base lg:text-lg xl:text-xl'>If your Host cancels your reservation</h1>
                <p className='text-xs md:text-sm lg:text-base xl:text-lg'>While it’s rare, sometimes a Host may need to cancel a reservation. We understand this can...</p>
                <div className='border border-solid mt-12'></div>
            </div>
        </div>

        <div className='flex flex-row mt-5 w-full'>
            <div className='flex flex-col w-full lg:w-1/3 xl:w-1/3 mr-5'>
                <h1 className='underline font-bold text-sm md:text-base lg:text-lg xl:text-xl'>Payment methods accepted</h1>
                <p className='text-xs md:text-sm lg:text-base xl:text-lg'>Airbnb supports different payment methods, depending on the country your...</p>
                <div className='border border-solid mt-11'></div>
            </div>
            <div className='flex flex-col w-full lg:w-1/3 xl:w-1/3 mr-5'>
                <h1 className='underline font-bold text-sm md:text-base lg:text-lg xl:text-xl'>Editing, removing, or adding a payment method</h1>
                <p className='text-xs md:text-sm lg:text-base xl:text-lg'>If an existing payment method on your account is incorrect, you can update it or add a new payment</p>
                <div className='border border-solid mt-4'></div>
            </div>
            <div className='flex flex-col w-full lg:w-1/3 xl:w-1/3'>
                <h1 className='underline font-bold text-sm md:text-base lg:text-lg xl:text-xl'>When you’ll pay for your reservation</h1>
                <p className='text-xs md:text-sm lg:text-base xl:text-lg'>You just made a reservation—congrats! So, what happens next? Your payment method will be charged as soon as your reservation is..</p>
                <div className='border border-solid mt-4'></div>
            </div>
        </div>
    </div>
    )}
    {selectedRole === 'Host' && (
        <div className="mt-10 mb-5 md:mt-5 md:mb-3 lg:mt-10 lg:mb-5 xl:mt-15 xl:mb-10">
        <div className="flex justify-between">
            <div className="flex">
                <h1 className="font-bold text-[30px] md:text-[35px] lg:text-[40px] xl:text-[45px]">Guides for getting started</h1>
            </div>
            <div className="flex">
                <p className="md:text-sm lg:text-base xl:text-lg"> Browse all topics</p>
            </div>
        </div>

        <div className='flex flex-row mt-5 md:flex-wrap lg:flex-nowrap xl:flex-wrap'>
            <div className='flex flex-col mr-5 md:w-1/2 lg:w-1/3 xl:w-1/4'>
                <Image
                    alt="second"
                    className="hidden md:block cursor-pointer"
                    height="400"
                    width="400"
                    src="/images/second.png"
                />
                <h2 className='font-bold text-[20px] md:text-[22px] lg:text-[25px] xl:text-[28px]'>Access and manage your account</h2>
            </div>

            <div className='flex flex-col mr-5 md:w-1/2 lg:w-1/3 xl:w-1/4'>
                <Image
                    alt="p"
                    className="hidden md:block cursor-pointer"
                    height="400"
                    width="400"
                    src="/images/p.png"
                />
                <h2 className='font-bold text-[20px] md:text-[22px] lg:text-[25px] xl:text-[28px]'>Getting paid</h2>
            </div>

            <div className='flex flex-col mr-5 md:w-1/2 lg:w-1/3 xl:w-1/4'>
                <Image
                    alt="p1"
                    className="hidden md:block cursor-pointer"
                    height="400"
                    width="400"
                    src="/images/p1.png"
                />
                <h2 className='font-bold text-[20px] md:text-[22px] lg:text-[25px] xl:text-[28px]'>Help with hosting</h2>
            </div>

            <div className='flex flex-col mr-5 md:w-1/2 lg:w-1/3 xl:w-1/4'>
                <Image
                    alt="p2"
                    className="hidden md:block cursor-pointer"
                    height="400"
                    width="400"
                    src="/images/p2.png"
                />
                <h2 className='font-bold text-[20px] md:text-[22px] lg:text-[25px] xl:text-[28px]'>Getting protected through AirCover for Hosts</h2>
            </div>

        </div>

        <h1 className='text-[30px] mt-5 md:text-[35px] lg:text-[40px] xl:text-[45px]'>Top articles</h1>
        <div className='flex flex-row mt-5 w-full'>
            <div className='flex flex-col w-full lg:w-1/3 xl:w-1/3 mr-5'>
                <h1 className='underline font-bold text-sm md:text-base lg:text-lg xl:text-xl'>If your guest cancels</h1>
                <p className='text-xs md:text-sm lg:text-base xl:text-lg'>It happens—plans change! If a guest needs to cancel their reservation, we’re here to help you..</p>
                <div className='border border-solid mt-12'></div>
            </div>
            <div className='flex flex-col w-full lg:w-1/3 xl:w-1/3 mr-5'>
                <h1 className='underline font-bold text-sm md:text-base lg:text-lg xl:text-xl'>Getting protected through AirCover for Hosts</h1>
                <p className='text-xs md:text-sm lg:text-base xl:text-lg'>Sometimes accidents happen, which is why there’s AirCover for Hosts. AirCover for Hosts..</p>
                <div className='border border-solid mt-5'></div>
            </div>
            <div className='flex flex-col w-full lg:w-1/3 xl:w-1/3'>
                <h1 className='underline font-bold text-sm md:text-base lg:text-lg xl:text-xl'>Refund your guest</h1>
                <p className='text-xs md:text-sm lg:text-base xl:text-lg'>It can happen to the best of Hosts: The wifi is a no-show, or the hot tub isn’t hot. If something...</p>
                <div className='border border-solid mt-12'></div>
            </div>
        </div>

        <div className='flex flex-row mt-5 w-full'>
            <div className='flex flex-col w-full lg:w-1/3 xl:w-1/3 mr-5'>
                <h1 className='underline font-bold text-sm md:text-base lg:text-lg xl:text-xl'>How a Host cancels a booking</h1>
                <p className='text-xs md:text-sm lg:text-base xl:text-lg'>Airbnb guests look forward to their trips, but we understand there are times when you may...</p>
                <div className='border border-solid mt-11'></div>
            </div>
            <div className='flex flex-col w-full lg:w-1/3 xl:w-1/3 mr-5'>
                <h1 className='underline font-bold text-sm md:text-base lg:text-lg xl:text-xl'>Preparing your listing with safety essentials</h1>
                <p className='text-xs md:text-sm lg:text-base xl:text-lg'>According to the CDC, carbon monoxide is the leading cause of accidental poisoning deaths..</p>
                <div className='border border-solid mt-4'></div>
            </div>
            <div className='flex flex-col w-full lg:w-1/3 xl:w-1/3'>
                <h1 className='underline font-bold text-sm md:text-base lg:text-lg xl:text-xl'>Optimizing your listing</h1>
                <p className='text-xs md:text-sm lg:text-base xl:text-lg'>Check out this essential guide to help you update or fine-tune your listing. Here’s where..</p>
                <div className='border border-solid mt-4'></div>
            </div>
        </div>
    </div>
    )}
    {selectedRole === 'Experience Host' && (
        <div className="mt-10 mb-5 md:mt-5 md:mb-3 lg:mt-10 lg:mb-5 xl:mt-15 xl:mb-10">
        <div className="flex justify-between">
            <div className="flex">
                <h1 className="font-bold text-[30px] md:text-[35px] lg:text-[40px] xl:text-[45px]">Guides for Experience Hosts</h1>
            </div>
            <div className="flex">
                <p className="md:text-sm lg:text-base xl:text-lg"> Browse all topics</p>
            </div>
        </div>

        <div className='flex flex-row mt-5 md:flex-wrap lg:flex-nowrap xl:flex-wrap'>
            <div className='flex flex-col mr-5 md:w-1/2 lg:w-1/3 xl:w-1/4'>
                <Image
                    alt="p"
                    className="hidden md:block cursor-pointer"
                    height="400"
                    width="400"
                    src="/images/p.png"
                />
                <h2 className='font-bold text-[20px] md:text-[22px] lg:text-[25px] xl:text-[28px]'>Getting paid</h2>
            </div>

            <div className='flex flex-col mr-5 md:w-1/2 lg:w-1/3 xl:w-1/4'>
                <Image
                    alt="p3"
                    className="hidden md:block cursor-pointer"
                    height="400"
                    width="400"
                    src="/images/p3.png"
                />
                <h2 className='font-bold text-[20px] md:text-[22px] lg:text-[25px] xl:text-[28px]'>Managing your Experience</h2>
            </div>

            <div className='flex flex-col mr-5 md:w-1/2 lg:w-1/3 xl:w-1/4'>
                <Image
                    alt="p4"
                    className="hidden md:block cursor-pointer"
                    height="400"
                    width="400"
                    src="/images/p4.png"
                />
                <h2 className='font-bold text-[20px] md:text-[22px] lg:text-[25px] xl:text-[28px]'>Changes and cancellations</h2>
            </div>

            <div className='flex flex-col mr-5 md:w-1/2 lg:w-1/3 xl:w-1/4'>
                <Image
                    alt="p5"
                    className="hidden md:block cursor-pointer"
                    height="400"
                    width="400"
                    src="/images/p5.png"
                />
                <h2 className='font-bold text-[20px] md:text-[22px] lg:text-[25px] xl:text-[28px]'>How Co-Hosting works</h2>
            </div>

        </div>

        <h1 className='text-[30px] mt-5 md:text-[35px] lg:text-[40px] xl:text-[45px]'>Top articles</h1>
        <div className='flex flex-row mt-5 w-full'>
            <div className='flex flex-col w-full lg:w-1/3 xl:w-1/3 mr-5'>
                <h1 className='underline font-bold text-sm md:text-base lg:text-lg xl:text-xl'>Airbnb Experiences standards and requirements</h1>
                <p className='text-xs md:text-sm lg:text-base xl:text-lg'>In addition to behaving in accordance with our Terms of Service and Community Standards,.</p>
                <div className='border border-solid mt-12'></div>
            </div>
            <div className='flex flex-col w-full lg:w-1/3 xl:w-1/3 mr-5'>
                <h1 className='underline font-bold text-sm md:text-base lg:text-lg xl:text-xl'>Canceling your Experience as a Host</h1>
                <p className='text-xs md:text-sm lg:text-base xl:text-lg'>Although cancellations by Hosts are rare, and some cancellations are beyond a Host’s..</p>
                <div className='border border-solid mt-5'></div>
            </div>
            <div className='flex flex-col w-full lg:w-1/3 xl:w-1/3'>
                <h1 className='underline font-bold text-sm md:text-base lg:text-lg xl:text-xl'>What happens if my guest cancels their experience booking?</h1>
                <p className='text-xs md:text-sm lg:text-base xl:text-lg'>Hosts have the choice between two cancellation policies for your Experiences:...</p>
                <div className='border border-solid mt-12'></div>
            </div>
        </div>

        <div className='flex flex-row mt-5 w-full'>
            <div className='flex flex-col w-full lg:w-1/3 xl:w-1/3 mr-5'>
                <h1 className='underline font-bold text-sm md:text-base lg:text-lg xl:text-xl'>Reviews for Experiences</h1>
                <p className='text-xs md:text-sm lg:text-base xl:text-lg'>Reviews are critical to help build trust on Airbnb—they’re an important way for Hosts...</p>
                <div className='border border-solid mt-11'></div>
            </div>
            <div className='flex flex-col w-full lg:w-1/3 xl:w-1/3 mr-5'>
                <h1 className='underline font-bold text-sm md:text-base lg:text-lg xl:text-xl'>How do payouts for experiences work?</h1>
                <p className='text-xs md:text-sm lg:text-base xl:text-lg'>You’ll need to set up your preferred payout method on your Airbnb profile. Learn how to..</p>
                <div className='border border-solid mt-4'></div>
            </div>
            <div className='flex flex-col w-full lg:w-1/3 xl:w-1/3'>
                <h1 className='underline font-bold text-sm md:text-base lg:text-lg xl:text-xl'>Adding a payout method</h1>
                <p className='text-xs md:text-sm lg:text-base xl:text-lg'>Ready to host? Fantastic. Just set up a payout method and prepare to welcome your guests...</p>
                <div className='border border-solid mt-4'></div>
            </div>
        </div>
    </div>
    )}
    {selectedRole === 'Travel Admin' && (
        <div className="mt-10 mb-5 md:mt-5 md:mb-3 lg:mt-10 lg:mb-5 xl:mt-15 xl:mb-10">
        <div className="flex justify-between">
            <div className="flex">
                <h1 className="font-bold text-[30px] md:text-[35px] lg:text-[40px] xl:text-[45px]">Guides for travel admins</h1>
            </div>
            <div className="flex">
                <p className="md:text-sm lg:text-base xl:text-lg"> Browse all topics</p>
            </div>
        </div>

        <div className='flex flex-row mt-5 md:flex-wrap lg:flex-nowrap xl:flex-wrap'>
            <div className='flex flex-col mr-5 md:w-1/2 lg:w-1/3 xl:w-1/4'>
                <Image
                    alt="p6"
                    className="hidden md:block cursor-pointer"
                    height="400"
                    width="400"
                    src="/images/p6.png"
                />
                <h2 className='font-bold text-[20px] md:text-[22px] lg:text-[25px] xl:text-[28px]'>Getting started with Airbnb for Work</h2>
            </div>

            <div className='flex flex-col mr-5 md:w-1/2 lg:w-1/3 xl:w-1/4'>
                <Image
                    alt="p7"
                    className="hidden md:block cursor-pointer"
                    height="400"
                    width="400"
                    src="/images/p7.png"
                />
                <h2 className='font-bold text-[20px] md:text-[22px] lg:text-[25px] xl:text-[28px]'>Using your dashboard</h2>
            </div>

            <div className='flex flex-col mr-5 md:w-1/2 lg:w-1/3 xl:w-1/4'>
                <Image
                    alt="p8"
                    className="hidden md:block cursor-pointer"
                    height="400"
                    width="400"
                    src="/images/p8.png"
                />
                <h2 className='font-bold text-[20px] md:text-[22px] lg:text-[25px] xl:text-[28px]'>How booking and reservations work</h2>
            </div>

            <div className='flex flex-col mr-5 md:w-1/2 lg:w-1/3 xl:w-1/4'>
                <Image
                    alt="p9"
                    className="hidden md:block cursor-pointer"
                    height="400"
                    width="400"
                    src="/images/p9.png"
                />
                <h2 className='font-bold text-[20px] md:text-[22px] lg:text-[25px] xl:text-[28px]'>Help with billing</h2>
            </div>

        </div>

        <h1 className='text-[30px] mt-5 md:text-[35px] lg:text-[40px] xl:text-[45px]'>Top articles</h1>
        <div className='flex flex-row mt-5 w-full'>
            <div className='flex flex-col w-full lg:w-1/3 xl:w-1/3 mr-5'>
                <h1 className='underline font-bold text-sm md:text-base lg:text-lg xl:text-xl'>About Airbnb for Work</h1>
                <p className='text-xs md:text-sm lg:text-base xl:text-lg'>Arranging accommodation for business trips is a cinch with Airbnb for Work, which puts a.</p>
                <div className='border border-solid mt-12'></div>
            </div>
            <div className='flex flex-col w-full lg:w-1/3 xl:w-1/3 mr-5'>
                <h1 className='underline font-bold text-sm md:text-base lg:text-lg xl:text-xl'>Signing your company up to Airbnb for Work</h1>
                <p className='text-xs md:text-sm lg:text-base xl:text-lg'>Joining Airbnb for Work makes it easy to book and manage company travel, with access to..</p>
                <div className='border border-solid mt-5'></div>
            </div>
            <div className='flex flex-col w-full lg:w-1/3 xl:w-1/3'>
                <h1 className='underline font-bold text-sm md:text-base lg:text-lg xl:text-xl'>How to manage company travel</h1>
                <p className='text-xs md:text-sm lg:text-base xl:text-lg'>We’ve made it easy to manage business travel on Airbnb, with a specialized Airbnb for Work...</p>
                <div className='border border-solid mt-12'></div>
            </div>
        </div>

        <div className='flex flex-row mt-5 w-full'>
            <div className='flex flex-col w-full lg:w-1/3 xl:w-1/3 mr-5'>
                <h1 className='underline font-bold text-sm md:text-base lg:text-lg xl:text-xl'>Airbnb for Work dashboard overview</h1>
                <p className='text-xs md:text-sm lg:text-base xl:text-lg'>As an Airbnb For Work admin, you have access to trips, reporting, invoices, and people at...</p>
                <div className='border border-solid mt-11'></div>
            </div>
            <div className='flex flex-col w-full lg:w-1/3 xl:w-1/3 mr-5'>
                <h1 className='underline font-bold text-sm md:text-base lg:text-lg xl:text-xl'>Inviting employees to join Airbnb for Work</h1>
                <p className='text-xs md:text-sm lg:text-base xl:text-lg'>If you’re a travel admin for your company’s Airbnb for Work account, you can invite colleagues to join by creating an invite..</p>
                <div className='border border-solid mt-4'></div>
            </div>
            <div className='flex flex-col w-full lg:w-1/3 xl:w-1/3'>
                <h1 className='underline font-bold text-sm md:text-base lg:text-lg xl:text-xl'>Airbnb for Work: Setting up central billing</h1>
                <p className='text-xs md:text-sm lg:text-base xl:text-lg'>One useful feature of Airbnb for Work is that employees can book and charge business..</p>
                <div className='border border-solid mt-4'></div>
            </div>
        </div>
    </div>
    )}
    </div>

    </div>
  );
};

export default Page;