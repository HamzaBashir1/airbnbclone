import React from 'react';
import Image from 'next/image';

const page = () => {
  return (
    <div className='container mx-auto px-4 py-8'>
      
        <h1 className='font-semibold text-2xl md:text-3xl lg:text-4xl'>2022 Update</h1>

        <h1 className='text-4xl md:text-6xl lg:text-8xl font-bold mt-4'>Fighting discrimination and building inclusion</h1>

        <hr className="my-8 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" />

        <h1 className='font-bold text-3xl md:text-4xl lg:text-5xl'>Project Lighthouse</h1>

        <p className='text-lg md:text-xl lg:text-2xl font-serif mt-4'>Launched in 2020, Project Lighthouse helps uncover and address disparities in how people of color experience Airbnb. We developed the initiative in partnership with Color Of Change—and with guidance from a number of civil rights and privacy organizations. </p>

        <div className='flex flex-col md:flex-row gap-8 mt-8'>
            <div className='flex-1'>
                <Image
                    alt="ten"
                    className="hidden md:block cursor-pointer h-10 w-10"
                    height="50"
                    width="50"
                    src="/images/ten.png"
                />
                <h1 className='font-bold text-xl md:text-2xl'>Using real data</h1>
                <p className='text-base md:text-lg'>We examine how guests and Hosts use our platform. Statistical analyses help us find opportunities to build more equitable experiences in our community.</p>
            </div>

            <div className='flex-1'>
                <Image
                    alt="eleven"
                    className="hidden md:block cursor-pointer h-10 w-10"
                    height="50"
                    width="50"
                    src="/images/eleven.png"
                />
                <h1 className='font-bold text-xl md:text-2xl'>Protecting privacy</h1>
                <p className='text-base md:text-lg'>We analyze trends in bulk and don’t associate perceived race information with specific people or accounts.</p>
            </div>

            <div className='flex-1'>
                <Image
                    alt="twelve"
                    className="hidden md:block cursor-pointer h-10 w-10"
                    height="50"
                    width="50"
                    src="/images/twelve.png"
                />
                <h1 className='font-bold text-xl md:text-2xl'>Constantly improving</h1>
                <p className='text-base md:text-lg'>Our team is continuing to identify new ways to make Airbnb fairer, more equitable, and more inclusive.</p>
            </div>
        </div>

        <hr className="my-8 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" />

        <h1 className='font-bold text-3xl md:text-4xl lg:text-5xl'>What we’ve changed</h1>

        <div className='flex flex-col md:flex-row gap-8 mt-8'>
            <div className='flex-1'>
                <Image
                    alt="thirteen"
                    className="hidden md:block cursor-pointer h-10 w-10"
                    height="50"
                    width="50"
                    src="/images/thirteen.png"
                />
                <h1 className='font-bold text-xl md:text-2xl'>Eliminating guest profile photos prior to booking</h1>
                <p className='text-base md:text-lg'>In 2018, we implemented changes to ensure Hosts will see a guest’s photo in the booking process only after they’ve accepted a booking request. Analysis found that this change slightly increased the Booking Success Rate—the rate at which guests in the United States from different perceived racial groups successfully book an Airbnb listing—for guests who are perceived to be Black.</p>
            </div>

            <div className='flex-1'>
                <Image
                    alt="fourteen"
                    className="hidden md:block cursor-pointer h-10 w-10"
                    height="50"
                    width="50"
                    src="/images/fourteen.png"
                />
                <h1 className='font-bold text-xl md:text-2xl'>More reviews for more guests</h1>
                <p className='text-base md:text-lg'>Guests with reviews have a higher Booking Success Rate. But our analysis found that guests perceived to be Black or Latino/Hispanic have fewer reviews than guests perceived to be white or Asian. We are implementing changes that will make it easier for all guests to receive a review when they travel.</p>
            </div>
        </div>
        
        <div className='flex flex-col md:flex-row gap-8 mt-8'>
            <div className='flex-1'>
                <Image
                    alt="fifteen"
                    className="hidden md:block cursor-pointer h-10 w-10"
                    height="50"
                    width="50"
                    src="/images/fifteen.png"
                />
                <h1 className='font-bold text-xl md:text-2xl'>Making more people eligible for Instant Book</h1>
                <p className='text-base md:text-lg'>In 2018, we implemented changes to ensure Hosts will see a guest’s photo in the booking process only after they’ve accepted a booking request. Analysis found that this change slightly increased the Booking Success Rate—the rate at which guests in the United States from different perceived racial groups successfully book an Airbnb listing—for guests who are perceived to be Black.</p>
            </div>

            <div className='flex-1'>
                <Image
                    alt="sixteen"
                    className="hidden md:block cursor-pointer h-10 w-10"
                    height="50"
                    width="50"
                    src="/images/sixteen.png"
                />
                <h1 className='font-bold text-xl md:text-2xl'>Building a more inclusive travel community</h1>
                <p className='text-base md:text-lg'>Travel beyond traditional tourist hubs can bring economic opportunity to communities that haven’t historically benefited from tourism. In the next year, we’ll continue to develop and scale global programs like the Airbnb Entrepreneurship Academy to ensure broader access to the benefits of hosting on Airbnb. Our efforts include expanding programs that help recruit more Hosts who are people of color.</p>
            </div>
        </div>

        <div className='flex flex-col md:flex-row gap-8 mt-8'>
            <div className='flex-1'>
                <Image
                    alt="seventeen"
                    className="hidden md:block cursor-pointer h-10 w-10"
                    height="50"
                    width="50"
                    src="/images/seventeen.png"
                />
                <h1 className='font-bold text-xl md:text-2xl'>Expanding education for Hosts</h1>
                <p className='text-base md:text-lg'>Our Host community plays an important role in creating an equitable and welcoming experience. This year, we launched a Guide to Inclusive Hosting with educational articles and videos to help Hosts welcome guests from all abilities, genders, and backgrounds—especially those from historically marginalized communities. We expect to roll out more educational programs and product features to build inclusion.</p>
            </div>

            <div className='flex-1'>
                <Image
                    alt="eighteen"
                    className="hidden md:block cursor-pointer h-10 w-10"
                    height="50"
                    width="50"
                    src="/images/eighteen.png"
                />
                <h1 className='font-bold text-xl md:text-2xl'>Auditing reservation rejections to remove opportunities for bias</h1>
                <p className='text-base md:text-lg'>We know that there are legitimate reasons why a reservation may not work: the Host’s calendar may have changed, or the guest may have a need—like early check-in, or bringing extra guests—that the Host can’t accommodate. We are expanding our ability to analyze reservation rejections to help improve our policies and products and fight discrimination.</p>
            </div>
        </div>

        <div className='flex flex-col md:flex-row gap-8 mt-8'>
            <div className='flex-1'>
                <Image
                    alt="nineteen"
                    className="hidden md:block cursor-pointer h-10 w-10"
                    height="50"
                    width="50"
                    src="/images/nineteen.png"
                />
                <h1 className='font-bold text-xl md:text-2xl'>Improving the rebooking experience</h1>
                <p className='text-base md:text-lg'>Under our Open Doors Policy, introduced in 2016, guests with current or upcoming reservations who report experiencing discrimination get help booking an alternative listing. We recently launched a 24-hour Safety Line designed to make it easier for guests on a trip to get urgent help, including access to rebooking assistance.</p>
            </div>

            <div className='flex-1'>
                <Image
                    alt="twenty"
                    className="hidden md:block cursor-pointer h-10 w-10"
                    height="50"
                    width="50"
                    src="/images/twenty.png"
                />
                <h1 className='font-bold text-xl md:text-2xl'>Continuing our commitment to guests with mobility needs</h1>
                <p className='text-base md:text-lg'>Our accessibility feature search filters make it easier for guests to find and book stays that meet their needs. Through Accessibility Review, we review every accessibility feature submitted by Hosts for accuracy. Our Adapted category, launched in November 2022, features hundreds of listings adapted for wheelchair access, with verified step-free paths into the home, bedroom, and bathroom, and at least one accessibility feature in the bathroom. Adapted listings even undergo a 3D scan to confirm features and measurements.</p>
            </div>
        </div>

        <hr className="my-8 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" />

        <div className='max-w-6xl mx-auto px-4 pt-10 md:pt-20'>
            <div className='flex flex-col lg:flex-row gap-8'>
                <div className='lg:w-1/2'>
                    <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold'>The Airbnb Community Commitment</h1>
                    <p className='py-4 md:py-6 lg:py-8 font-serif text-base md:text-lg lg:text-xl'>
                    Since 2016, we’ve asked everyone who uses Airbnb to commit to treating others with respect and without judgment or bias by agreeing to the Airbnb Community Commitment. Anyone who doesn’t agree is removed from our platform—as of 2022, that’s 2.5 million people.
                    </p>
                </div>
                <div className='lg:w-1/2'>
                    <Image
                      alt='twentyone'
                      className='w-full h-auto'
                      width={1000}
                      height={100}
                      src='/images/twentyone.png'
                    />
                </div>
            </div>
        </div>

        <hr className="my-8 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" />
      
    </div>
  );
}

export default page;
