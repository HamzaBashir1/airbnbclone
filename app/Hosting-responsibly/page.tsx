"use client"
import React, { useState } from 'react';

const Page = () => {

    const [showThanks, setShowThanks] = useState(false);

  const handleClick = () => {
    setShowThanks(true);
  };

  return (
    <div className='container mx-auto p-4 max-w-7xl'>

        <p className='text-slate-300 mb-4'>Rules • Host</p>

        <h1 className='font-bold text-2xl md:text-3xl mb-8'>Responsible hosting in Slovakia</h1>

        <p className='mb-4'>
            We encourage Hosts to think carefully about their responsibilities. Hosting offers rich experiences, but it comes with a certain level of commitment. In addition to the 
            <span className='underline'>basic requirements</span> 
            that we expect of all Hosts, here are some ways you can be a responsible Host.*
        </p>

        <p className='text-slate-300 mb-4'>In this article</p>

        <ul className="list-disc pl-5 mb-8">
            <li className="mb-2">Health and cleanliness</li>
            <li className="mb-2">Safety</li>
            <li className="mb-2">Neighbors</li>
            <li className="mb-2">Permissions</li>
            <li className="mb-2">General regulations</li>
            <li className="mb-2">Local regulations</li>
            <li className="mb-2">Join a local Host Club</li>
            <li className="mb-2">Important things to check</li>
            <li className="mb-2">Insurance</li>
        </ul>

        <hr className="my-12 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" />

        <h1 className='text-2xl font-bold mb-4'>Health and cleanliness</h1>

        <p className='mb-4'>
            Global information about <span className='underline'>Putko’s 5-step enhanced cleaning process</span> can be found in <span className='underline'>general info about hosting places to stay.</span>
        </p>

        <h1 className='font-bold text-xl mb-4'>Key recommendations on cleaning</h1>

        <ul className="list-disc pl-5 mb-8">
            <li className="mb-2">Recommendations on <span className='underline'> waiting to enter the space before cleaning and disinfection from the US Centers for Disease Control and Prevention (CDC)</span></li>
            <li className="mb-2">An explanation on <span className='underline'>how to read chemical labels from the US Occupational Safety and Health Administration (OSHA)</span></li>
        </ul>

        <h1 className='font-bold text-xl mb-4'>General resources</h1>

        <ul className="list-disc pl-5 mb-8">
            <li className="mb-2">For cleaning and disinfection guidelines, <span className='underline'> interim recommendations from the US Centers for Disease Control and Prevention (CDC)</span></li>
            <li className="mb-2">For US Environmental Protection Agency (EPA) guidance on COVID-19, the  <span className='underline'> key EPA resources on the coronavirus disease</span></li>
        </ul>

        <h1 className='text-2xl font-bold mb-4'>Safety</h1>

        <p className='underline mb-4'>What can I do to make my space safe for guests?</p>

        <h1 className='text-2xl font-bold mb-4'>Emergency procedures</h1>

        <h1 className='text-xl font-bold mb-4'>Contact info</h1>

        <p className='mb-4'>Indicate local emergency numbers and the nearest hospital. Provide a clear emergency contact number for yourself, as well as backup, for easy guest reference. Also make clear how you should be contacted if the guest has questions or issues arise.</p>

        <h1 className='text-xl font-bold mb-4'>Supplies</h1>

        <p className='mb-4'>Make a first aid kit easily available.</p>

        <h1 className='text-xl font-bold mb-4'>Fire prevention</h1>

        <p className='mb-4'>Ensure you have a functioning smoke alarm and carbon monoxide detector, and that your property meets government safety guidelines for your area (ex: International Building Code). Ensure you provide a functioning fire extinguisher and complete required maintenance.</p>

        <h1 className='text-xl font-bold mb-4'>Exits</h1>

        <p className='mb-4'>Ensure you have a clearly marked fire escape route, and post a map in your home.</p>

        <h1 className='text-2xl font-bold mb-4'>Minimize hazards</h1>

        <h1 className='text-xl font-bold mb-4'>Privacy</h1>

        <p className='mb-4'>Always be mindful of your guests privacy. Fully disclose whether there are security cameras, recording devices, or noise decibel monitors at your listing. Note that we do not allow security cameras or other recording devices inside of a listing. Make sure you are aware of and comply with applicable laws. Learn more about our approach to 
            <span className='underline'>security cameras and recording devices.</span> 
        </p>

        <h1 className='text-xl font-bold mb-4'>Occupancy</h1>

        <p className='mb-4'>Establish safe occupancy limits—your local government may have guidelines.</p>

        <h1 className='text-xl font-bold mb-4'>Access</h1>

        <p className='mb-4'>Go through your home to identify any areas where guests might trip or fall and either remove the hazard or mark clearly. Fix any exposed wires. Ensure stairs are safe and have railings. Remove or lock up any objects that may be dangerous to your guests.</p>

        <h1 className='text-xl font-bold mb-4'>Child-proofing</h1>

        <p className='mb-4'>Ensure your home is safe for children, or else notify guests of potential hazards.</p>

        <h1 className='text-xl font-bold mb-4'>Climate</h1>

        <p className='mb-4'>Ensure your home is properly ventilated and that temperature control is clearly marked and functional. Ensure guests are clear about how to safely use the heater.</p>

        <h1 className='text-2xl font-bold mb-4'>Neighbors</h1>

        <p className='underline mb-4'>How can I be mindful of my neighbors?</p>

        <h1 className='text-xl font-bold mb-4'>Building rules</h1>

        <p className='mb-4'>Ensure you relay your building’s common area rules to your guests. You may want to even notify your neighbors that you will have guests, and remind guests not to bother your neighbors (ex: don’t knock on their door or buzz them to let you in).</p>

        <h1 className='text-xl font-bold mb-4'>Smoking</h1>

        <p className='mb-4'>If you don’t allow smoking, we suggest posting signs to remind guests. If you do allow smoking, ensure you have ashtrays available in designated areas.</p>

        <h1 className='text-xl font-bold mb-4'>Parking</h1>

        <p className='mb-4'>Ensure you relay parking rules for your building and neighborhood to your guests.</p>

        <h1 className='text-xl font-bold mb-4'>Noise</h1>

        <p className='mb-4'>Remind guests about keeping noise down. You may want to consider whether you allow babies, pets, or parties. Develop a policy about guests inviting other people over, and ensure your guests are clear about your party policy.</p>

        <h1 className='text-xl font-bold mb-4'>Pets</h1>

        <p className='mb-4'>If you allow pets, ensure guests are educated about things like local parks and local customs (ex: cleaning up after your dog). Have a backup plan in case a guest’s pet upsets the neighbors (such as the number of a nearby pet hotel).</p>

        <h1 className='text-xl font-bold mb-4'>House Rules</h1>

        <p className='mb-4'>To avoid surprises, you may want to include the information covered above in your House Rules in your Putko listing profile.</p>

        <hr className="my-12 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" />

        <h1 className='text-2xl font-bold mb-4'>Permissions</h1>

        <p>Whom should I notify that I’m hosting on Putko?</p>


        <h1 className='text-2xl font-bold mb-4'>Contracts</h1>
        <p className='mb-8'>Check your HOA or Co-Op Board regulations to make sure there is no prohibition against subletting—or any other restriction against hosting. Read your lease agreement and check with your landlord if applicable. You may consider adding a rider to your contract that addresses the concerns of these parties and outlines the responsibilities and liabilities of all parties.</p>

        <h1 className='text-2xl font-bold mb-4'>Roommates</h1>
        <p className='mb-8'>If you have roommates, consider a roommate agreement in writing which outlines things like how often you plan to host, how you’ll ensure guests follow House Rules, and even whether you’ll share revenue if that makes sense for you.</p>

        <h1 className='text-2xl font-bold mb-4'>Neighbors</h1>
        <p className='mb-8'>Consider whether you should notify your neighbors about your plans to host, along with your plan for how to make sure your guests are not disruptive.</p>

        <h1 className='text-2xl font-bold mb-4'>Subsidized housing</h1>
        <p className='mb-8'>If you live in public or subsidized housing there may be special rules that apply to you. The manager of the property may be able to answer questions about this.</p>

        <h1 className='text-2xl font-bold mb-4'>General regulations</h1>
        <p className='mb-8'>What local regulations apply to me?</p>

        <h1 className='text-2xl font-bold mb-4'>Taxes</h1>
        <p className='mb-8'>Ensure you look up any local taxes or business license requirements that may apply. This may include things like hotel/transient occupancy tax, sales, and other turnover taxes such as Value Added Tax (VAT) or Goods and Services Tax (GST), or income tax.</p>

        <h1 className='text-2xl font-bold mb-4'>Permits or registrations</h1>
        <p className='mb-8'>Ensure you look up any permitting, zoning, safety, and health regulations that may apply. The governing authorities that regulate the use and development of property in your area may have useful information on such regulations.</p>

        <h1 className='text-2xl font-bold mb-4'>Rent control/rent stabilization</h1>
        <p className='mb-8'>If you live in rent controlled or stabilized housing, there may be special rules that apply to you. Contact your local Rent board to ask questions about this topic.</p>

        <h1 className='text-2xl font-bold mb-4'>Local regulations</h1>
        <p className='mb-8'>Select a location below to read city, county, or region-specific info. If your area isn’t listed, you can read <span className='underline'>general info about local regulations.</span></p>
        <p className='underline mb-8'>Slovakia</p>

        <hr className="my-12 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" />

        <h1 className='text-2xl font-bold mb-4'>Join a local Host Club</h1>
        <p className='mb-8'>When deciding whether to become an Putko Host, it’s important for you to understand the laws in your city. You may have a lot of questions, and who better to connect with and ask for advice than local Hosts in your area?</p>
        <p className='mb-8'>It’s easy—find your community’s <span className='underline'>official Host Group.</span> Can’t find your city? Search for your local Host Club on Facebook.</p>

        <hr className="my-12 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" />

        <h1 className='text-2xl font-bold mb-4'>Important things to check</h1>

        <h1 className='text-2xl font-bold mb-4'>Taxes</h1>
        <p className='mb-8'>Taxes can be complicated, and you should take time to understand the rules as they apply to you and your particular situation.</p>
        <p className='mb-8'>Ernst and Young has prepared an overview of tax considerations for Putko Hosts relating to the US taxation of rental income: <span className='underline'>Ernst and Young’s United States General guidance on the taxation of rental income (English).</span> This information provides an overview of how to complete your tax return as well as some of your tax responsibilities regarding the revenue you derived from your hosting activity on Putko and other hosting platforms. The information provided by Ernst and Young relates exclusively to US income tax and does not include any guidance relating to occupancy taxes, hotel taxes, value added taxes, or other taxes.</p>
        <p className='italic mb-8'>Disclaimer: Putko’s presentation of Ernst and Young is not an endorsement. Tax advice is complicated and you should do your own diligence when receiving advice. Putko is not responsible for any tax or other advice provided by any outside entity.</p>

        <hr className="my-12 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" />

        <h1 className='text-2xl font-bold mb-4'>Insurance</h1>
        <p className='mb-8'>Work with your insurance agent or carrier to determine what kind of obligations, limits, and coverage are required for your specific circumstances.</p>

        <h1 className='text-2xl font-bold mb-4'>Host damage protection and Host liability insurance</h1>
        <p className='mb-8'>AirCover for Hosts includes <span className='underline'>Host damage protection</span> and <span className='underline'>Host liability insurance,</span> which provide you with basic coverage for listed damages and liabilities. However, these don’t take the place of homeowner’s insurance, renter’s insurance, or adequate liability coverage. You might need to meet other insurance requirements as well.</p>
        <p className='mb-8'>We strongly encourage all Hosts to review and understand the terms of their insurance policy coverage. Not all insurance plans will cover damage or loss of property caused by a guest who books your accommodation.</p>
        <p className='mb-8'>Learn more about <span className='underline'>AirCover for Hosts.</span></p>

        <h1 className='text-2xl font-bold mb-4'>Liability and basic coverage</h1>
        <p className='mb-8'>Review your homeowner’s or renter’s policy with your insurance agent or carrier to make sure your listing has adequate liability coverage and property protection.</p>

        <hr className="my-12 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" />

        <h1 className='text-xl font-bold mb-4'>For more information on how Putko works, <span className='underline'>visit our Help Center.</span></h1>
        <p className='mb-8'>* Please note that Putko has no control over the conduct of Hosts and disclaims all liability. Failure of Hosts to satisfy their responsibilities may result in suspension of activity or removal from the Putko website.</p>

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
