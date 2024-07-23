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
      <p className='text-slate-300 mb-4'>Community policy</p>
      <h1 className='font-bold text-2xl md:text-3xl mb-8'>Major Disruptive Events Policy</h1>

      <div className="border p-5 mb-8">
        <p>
          <span className="icon text-xl">📄</span>
          This Policy is being updated. The new Policy appears at the top of this page and will apply to all reservations taking place on or after June 6, 2024, except as otherwise notified by Putko to users. The existing Policy appears at the bottom of the page and applies to earlier reservations.
        </p>
      </div>

      <p className='mb-6'>Effective date: June 6, 2024</p>
      
      <h1 className='font-bold text-xl md:text-2xl mb-4'>Overview</h1>

      <p className='mb-6'>
        In general, cancellations and refunds for Putko reservations are governed by the listing’s cancellation policy. In the rare circumstances that large-scale events prevent or legally prohibit completion of a reservation, the Major Disruptive Events Policy (the “Policy”) may apply. When this Policy applies, guests can cancel their reservation and receive a refund, travel credit, and/or other consideration regardless of the reservation’s cancellation policy, and Hosts can cancel without fees or other adverse consequences, although their listing’s calendar will be blocked for the dates of the canceled reservation.
      </p>

      <p className='mb-6'>
        This Policy applies to reservations for both accommodations and Experiences, and is applicable to reservations that are ongoing or that have a check-in on or after the effective date, except as otherwise notified by Putko to users. The Major Disruptive Events Policy is not an insurance policy.
      </p>

      <h1 className='font-bold text-xl md:text-2xl mb-4'>What events are covered</h1>

      <p className='mb-4'>
        The following events are covered under this Policy if they impact your reservation location, occur after the time of booking, and prevent or legally prohibit completion of a future or ongoing reservation (referred to in this Policy as “Events”):
      </p>

      <p className='mb-4'>
        <span className='font-bold'>Declared public health emergencies and epidemics.</span>
        Government-declared epidemics, pandemics, and public health emergencies. This does not include diseases that are endemic (for example, the flu) or commonly associated with an area (for example, malaria in Thailand). COVID-19 is not covered under this Major Disruptive Events Policy.
      </p>

      <p className='mb-4'>
        <span className='font-bold'>Government travel restrictions.</span>
        Mandatory travel restrictions imposed by a governmental agency, such as an evacuation order. This does not include non-binding travel advisories and similar government guidance.
      </p>

      <p className='mb-4'>
        <span className='font-bold'>Military actions and other hostilities.</span>
        Acts of war, hostilities, invasions, civil war, terrorism, explosions, bombings, rebellions, riots, and insurrection.
      </p>

      <p className='mb-4'>
        <span className='font-bold'>Large-scale outages of essential utilities.</span>
        Prolonged outages of essential utilities, such as heat, water, and electricity, impacting the vast majority of homes in a given location.
      </p>

      <p className='mb-4'>
        <span className='font-bold'>Natural disasters.</span>
        Natural disasters and other severe weather events.
        <span className='underline'> Weather or natural conditions that are common enough to be foreseeable in a given location—</span>
        for example, hurricanes occurring during hurricane season in Florida—are covered only when they result in another Event covered by this Policy that prevents completion of the reservation, such as a mandatory evacuation order or large-scale outage of essential utilities.
      </p>

      <h1 className='font-bold text-xl md:text-2xl mb-4'>What happens if a reservation is impacted by a covered Event</h1>

      <p className='mb-6'>
        When a large-scale event occurs, we assess the situation to determine whether the Major Disruptive Events Policy applies. If it does, we activate the Policy for the impacted area and timeframe where we anticipate that the Event will prevent or legally prohibit completion of reservations. Reservations outside of the defined area and timeframe may not be eligible, though
        <span className='underline'> Hosts may still be able to cancel without adverse consequences if they are unable to host.</span>
        We continuously monitor these situations and adjust coverage as needed to reflect changing conditions. If you believe this Policy applies to your reservation, please
        <span className='underline'> contact us</span>
        to inquire about eligibility.
      </p>

      <h1 className='font-bold text-xl md:text-2xl mb-4'>What is not covered</h1>

      <p className='mb-6'>
        We understand that other circumstances outside of your control may disrupt your plans. In any situations not listed above, your reservation remains subject to the Host’s
        <span className='underline'>cancellation policy</span>
        for the listing.
      </p>

      <p className='mb-6'>
        Examples of common events not covered by this policy include:
      </p>
      <ul className="list-disc ml-5 mb-6">
        <li>Events that impact a guest or their ability to travel, but not the reservation location</li>
        <li>Unexpected injury or illness</li>
        <li>Government obligations like jury duty or court appearances</li>
        <li>Non-binding travel advisories or other government guidance that fall short of a travel ban or prohibition</li>
        <li>Cancellation or rescheduling of an event for which the reservation was made</li>
        <li>Transportation disruptions unrelated to a covered Event, such as airline insolvency, transportation strikes, and road closures due to maintenance</li>
      </ul>

      <p className='mb-6'>
        For reservations not covered by this Policy, we encourage guests and Hosts to find a mutually acceptable arrangement, such as a full or partial refund or an alteration of the booking dates. Note that any refunds outside of the reservation’s cancellation policy are at the Host’s discretion. Putko does not take part in or guarantee such refunds.
      </p>

      <h1 className='font-bold text-xl md:text-2xl mb-4'>How this policy affects Hosts</h1>

      <p className='mb-6'>
        If a reservation is covered by the Major Disruptive Events Policy, Hosts can cancel
        <span className='underline'> without fees or other adverse consequences.</span>
        If a Host cancels under this policy, their listing’s calendar will be blocked for the dates of the canceled reservation. If a reservation is canceled under this Policy, the Host does not receive a payout for the canceled dates of the reservation, or, if the payout has already been made, the refunded amount will be withheld from the next payout(s).
      </p>

      <p className='mb-6'>
        Regardless of whether a reservation is covered by this Policy, Hosts can cancel for certain
        <span className='underline'>valid reasons,</span>
        such as major damage to a listing, without fees or other adverse consequences. Hosts are obligated to cancel a reservation if their listing is uninhabitable or is inconsistent with what the guest booked; failure to do so may result in listing removal, cancellation of existing reservations, and refunds to guests until the listing is habitable and consistent with the listing description. Failure to do so is also a violation of our
        <span className='underline'>Ground rules for Hosts,</span>
        and can lead to consequences up to and including account removal.
      </p>

      <h1 className='font-bold text-xl md:text-2xl mb-4'>Other things to be aware of</h1>

      <p className='mb-6'>
        This Policy does not limit your rights under local regulations, and any decisions made by Putko under this Policy do not affect your statutory rights.
      </p>

      <hr className="my-12 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" />

      <h1 className='font-extrabold text-xl md:text-2xl mb-6'>Extenuating Circumstances Policy</h1>

      <p className='mb-4'>Effective date: January 20, 2021</p>

      <h1 className='font-bold text-xl md:text-2xl mb-4'>Overview</h1>

      <p className='mb-6'>
        This Extenuating Circumstances Policy explains how cancellations are handled when unforeseen events beyond your control arise after booking and make it impracticable or illegal to complete your reservation. This Policy applies to reservations for both accommodations and Experiences.
      </p>

      <p className='mb-6'>
        When this Policy allows for cancellation, it controls and takes precedence over the reservation’s
        <span className='underline'> cancellation policy.</span>
        Guests that are impacted by an event covered by this Policy can cancel their reservation and receive, depending on the circumstances, a cash refund, travel credit, and/or other consideration. Hosts that are impacted by an event covered by this Policy can cancel
        <span className='underline'> without adverse consequences, </span>
        but, depending on the circumstances, their calendars may be blocked for the dates of the cancelled reservation.
      </p>

      <h1 className='font-bold text-xl md:text-2xl mb-4'>What events are covered</h1>

      <p className='mb-4'>
        This Policy uses the term
        <span className='font-bold'>“Event”</span>
        to refer to the following situations that occur after booking, are unforeseen at the time of booking, and prevent or legally prohibit completion of the reservation.
      </p>

      <p className='mb-4'>
        <span className='font-bold'>Changes to government travel requirements.</span>
        Unexpected changes to visa or passport requirements imposed by a governmental agency that prevent travel to the destination. This doesn’t include lost or expired travel documents or other personal circumstances relating to a guest’s authorization to travel.
      </p>

      <p className='mb-4'>
        <span className='font-bold'>Declared emergencies and epidemics.</span>
        Government declared local or national emergencies, epidemics, pandemics, and public health emergencies. This does not include diseases that are endemic or commonly associated with an area—for example, malaria in Thailand or dengue fever in Hawaii.
      </p>

      <p className='mb-4'>
        <span className='font-bold'>Government travel restrictions.</span>
        Travel restrictions imposed by a governmental agency that prevent or prohibit traveling to, staying at, or returning from the Listing location. This does not include non-binding travel advisories and similar government guidance.
      </p>

      <p className='mb-4'>
        <span className='font-bold'>Military actions and other hostilities.</span>
        Acts of war, hostilities, invasions, civil war, terrorism, explosions, bombings, rebellions, riots, insurrection, civil disorder, and civil unrest.
      </p>

      <p className='mb-4'>
        <span className='font-bold'>Natural disasters.</span>
        Natural disasters, acts of God, large-scale outages of essential utilities, volcanic eruptions, tsunamis, and other severe and abnormal weather events. This does not include
        <span className='underline'> weather or natural conditions that are common enough to be foreseeable in that location—</span>
        for example, hurricanes occurring during hurricane season in Florida.
      </p>

      <h1 className='font-bold text-xl md:text-2xl mb-4'>What is not covered</h1>

      <p className='mb-6'>
        <span className='font-bold'>Everything else.</span>
        This Policy only allows for cancellations for the Events described above. Everything else is excluded. Examples of situations that this Policy does not allow cancellations for include: unexpected disease, illness, or injury; government obligations like jury duty, court appearances or military duties; travel advisories or other government guidance (that fall short of a travel ban or prohibition); cancellation or rescheduling of an event for which the reservation was made; and transportation disruptions unrelated to a covered Event like road closures, as well as flight, train, bus and ferry cancellations. If you cancel a reservation in these cases, the amount refunded will be determined by the
        <span className='underline'>cancellation policy</span>
        that applies to the reservation.
      </p>

      <h1 className='font-bold text-xl md:text-2xl mb-4'>What to do next</h1>

      <p className='mb-6'>
        If we notify you or publish information confirming that this Policy applies to your reservation, please follow the cancellation instructions that we provide. When we have notified you or published information about how this Policy applies, you should have the option to cancel under this Policy by going to your Trips page and canceling the impacted reservation. If you believe this Policy applies to your reservation, but we have not notified you or published information about the Event, please
        <span className='underline'> contact us </span>
        to cancel your reservation. In all cases, you should be prepared to provide documentation that shows how the Event has impacted you or your reservation.
      </p>

      <p className='mb-6'>
        If you have questions, please
        <span className='underline'>contact us.</span>
      </p>

      <h1 className='font-bold text-xl md:text-2xl mb-4'>Other things to be aware of</h1>

      <p className='mb-6'>
        This Policy applies to all reservations with a check-in date on or after the effective date.
      </p>

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
