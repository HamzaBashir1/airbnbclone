'use client'
import React, { useState, ChangeEvent, FC } from 'react';
import { FcPrivacy } from "react-icons/fc";
import { PiHandbagSimpleLight } from "react-icons/pi";
import { IoMdEye } from "react-icons/io";

const Page: FC = () => {
  // State for editable fields
  const [isEditingLegalName, setIsEditingLegalName] = useState<boolean>(false);
  const [isEditingPreferredName, setIsEditingPreferredName] = useState<boolean>(false);
  const [isEditingPhoneNumber, setIsEditingPhoneNumber] = useState<boolean>(false);
  const [isEditingAddress, setIsEditingAddress] = useState<boolean>(false);
  const [isEditingEmergencyContact, setIsEditingEmergencyContact] = useState<boolean>(false);

  // State for personal details
  const [legalName, setLegalName] = useState<string>("please provide name");
  const [preferredName, setPreferredName] = useState<string>("Not Provided");
  const [phoneNumber, setPhoneNumber] = useState<string>("Number Not Provided");
  const [address, setAddress] = useState<string>("Not Provided");

  // State for emergency contact details
  const [emergencyContact, setEmergencyContact] = useState({
    name: "Not Provided",
    relationship: "Not Provided",
    phoneNumber: "Not Provided",
    email: "Not Provided",
    language: "Not Provided"
  });

  // Handlers for editable fields
  const handleEditClickLegalName = () => {
    setIsEditingLegalName(!isEditingLegalName);
  };

  const handleEditClickPreferredName = () => {
    setIsEditingPreferredName(!isEditingPreferredName);
  };

  const handleEditClickPhoneNumber = () => {
    setIsEditingPhoneNumber(!isEditingPhoneNumber);
  };

  const handleEditClickAddress = () => {
    setIsEditingAddress(!isEditingAddress);
  };

  const handleEditClickEmergencyContact = () => {
    setIsEditingEmergencyContact(!isEditingEmergencyContact);
  };

  // Handlers for personal details
  const handleLegalNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setLegalName(event.target.value);
  };

  const handlePreferredNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPreferredName(event.target.value);
  };

  const handlePhoneNumberChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(event.target.value);
  };

  const handleAddressChange = (event: ChangeEvent<HTMLInputElement>) => {
    setAddress(event.target.value);
  };

  // Handlers for emergency contact details
  const handleEmergencyContactChange = (field: keyof typeof emergencyContact, event: ChangeEvent<HTMLInputElement>) => {
    setEmergencyContact({
      ...emergencyContact,
      [field]: event.target.value
    });
  };

  return (
    <div className='container mx-auto p-4 md:p-6 lg:p-8'>
      <h1 className='font-bold text-4xl text-center pb-20'>Personal Info</h1>

      <div className='flex flex-wrap justify-center'>
        <div className='w-full md:w-2/3 lg:w-2/3 xl:w-3/5'>
          {/* Legal Name Section */}
          <div className='flex flex-wrap justify-between'>
            <div className='w-full md:w-1/2'>
              <h1 className='font-light'>Legal Name</h1>
              {isEditingLegalName ? (
                <input
                  type="text"
                  value={legalName}
                  onChange={handleLegalNameChange}
                  className="border border-gray-300 p-2 rounded"
                />
              ) : (
                <p>{legalName}</p>
              )}
            </div>
            <div className='w-full md:w-1/2 text-right'>
              <h1 className='underline cursor-pointer' onClick={handleEditClickLegalName}>
                {isEditingLegalName ? "Save" : "Edit"}
              </h1>
            </div>
          </div>
          <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />

          {/* Preferred Name Section */}
          <div className='flex flex-wrap justify-between'>
            <div className='w-full md:w-1/2'>
              <h1 className='font-light'>Preferred Name</h1>
              {isEditingPreferredName ? (
                <input
                  type="text"
                  value={preferredName}
                  onChange={handlePreferredNameChange}
                  className="border border-gray-300 p-2 rounded"
                />
              ) : (
                <p>{preferredName}</p>
              )}
            </div>
            <div className='w-full md:w-1/2 text-right'>
              <h1 className='underline cursor-pointer' onClick={handleEditClickPreferredName}>
                {isEditingPreferredName ? "Save" : "Edit"}
              </h1>
            </div>
          </div>
          <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />

          {/* Phone Number Section */}
          <div className='flex flex-wrap justify-between'>
            <div className='w-full md:w-1/2'>
              <h1 className='font-light'>Phone Number</h1>
              {isEditingPhoneNumber ? (
                <input
                  type="text"
                  value={phoneNumber}
                  onChange={handlePhoneNumberChange}
                  className="border border-gray-300 p-2 rounded"
                />
              ) : (
                <p>{phoneNumber}</p>
              )}
            </div>
            <div className='w-full md:w-1/2 text-right'>
              <h1 className='underline cursor-pointer' onClick={handleEditClickPhoneNumber}>
                {isEditingPhoneNumber ? "Save" : "Edit"}
              </h1>
            </div>
          </div>
          <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />

          {/* Address Section */}
          <div className='flex flex-wrap justify-between'>
            <div className='w-full md:w-1/2'>
              <h1 className='font-light'>Address</h1>
              {isEditingAddress ? (
                <input
                  type="text"
                  value={address}
                  onChange={handleAddressChange}
                  className="border border-gray-300 p-2 rounded"
                />
              ) : (
                <p>{address}</p>
              )}
            </div>
            <div className='w-full md:w-1/2 text-right'>
              <h1 className='underline cursor-pointer' onClick={handleEditClickAddress}>
                {isEditingAddress ? "Save" : "Edit"}
              </h1>
            </div>
          </div>
          <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />

          {/* Emergency Contact Section */}
          <div className='flex flex-wrap justify-between'>
            <div className='w-full md:w-1/2'>
              <h1 className='font-light'>Emergency Contact</h1>
              {isEditingEmergencyContact ? (
                <div>
                  <input
                    type="text"
                    value={emergencyContact.name}
                    onChange={(event) => handleEmergencyContactChange('name', event)}
                    placeholder="Name"
                    className="border border-gray-300 p-2 rounded mb-2 w-full"
                  />
                  <input
                    type="text"
                    value={emergencyContact.relationship}
                    onChange={(event) => handleEmergencyContactChange('relationship', event)}
                    placeholder="Relationship"
                    className="border border-gray-300 p-2 rounded mb-2 w-full"
                  />
                  <input
                    type="text"
                    value={emergencyContact.phoneNumber}
                    onChange={(event) => handleEmergencyContactChange('phoneNumber', event)}
                    placeholder="Phone Number"
                    className="border border-gray-300 p-2 rounded mb-2 w-full"
                  />
                  <input
                    type="text"
                    value={emergencyContact.email}
                    onChange={(event) => handleEmergencyContactChange('email', event)}
                    placeholder="Email"
                    className="border border-gray-300 p-2 rounded mb-2 w-full"
                  />
                  <input
                    type="text"
                    value={emergencyContact.language}
                    onChange={(event) => handleEmergencyContactChange('language', event)}
                    placeholder="Language"
                    className="border border-gray-300 p-2 rounded w-full"
                  />
                </div>
              ) : (
                <div>
                  <p>Name: {emergencyContact.name}</p>
                  <p>Relationship: {emergencyContact.relationship}</p>
                  <p>Phone Number: {emergencyContact.phoneNumber}</p>
                  <p>Email: {emergencyContact.email}</p>
                  <p>Language: {emergencyContact.language}</p>
                </div>
              )}
            </div>
            <div className='w-full md:w-1/2 text-right'>
              <h1 className='underline cursor-pointer' onClick={handleEditClickEmergencyContact}>
                {isEditingEmergencyContact ? "Save" : "Edit"}
              </h1>
            </div>
          </div>
          <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
        </div>

        {/* Additional Content */}
        <div className='w-20'></div>

        <div className='w-full md:w-1/3 lg:w-1/3 xl:w-1/3 flex flex-col border rounded-xl p-5'>
          <FcPrivacy size={50} />
          <h1 className='font-bold text-2xl'>Why isn’t my info shown here?</h1>
          <p className='text-xl'>We’re hiding some account details to protect your identity.</p>

          <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />

          <PiHandbagSimpleLight size={50} />
          <h1 className='font-bold text-2xl'>Which details can be edited?</h1>
          <p className='text-xl'>Contact info and personal details can be edited. If this info was used to verify your identity, you’ll need to get verified again the next time you book—or to continue hosting.</p>

          <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />

          <IoMdEye size={50} />
          <h1 className='font-bold text-2xl'>What info is shared with others?</h1>
          <p className='text-xl'>Putko only releases contact information for Hosts and guests after a reservation is confirmed.</p>
        </div>
      </div>
    </div>
  );
}

export default Page;
