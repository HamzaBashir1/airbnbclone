"use client";

import React from 'react';
import getCurrentUser from '../actions/getCurrentUser';
import ClientOnly from '../components/ClientOnly';
import EmptyState from '../components/EmptyState';
// import MessageClient from './MessageClient'; // Uncommented import
// import getMessage from '../actions/getMessage';

export default async function Message() {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return (
      <ClientOnly>
        <EmptyState title="Unauthorized" subtitle="Please login" />
      </ClientOnly>
    );
  }

  // const messages = await getMessage({ authorId: currentUser.id });

  // if (messages.length === 0) {
  //   return (
  //     <ClientOnly>
  //       <EmptyState 
  //         title="No Messages Found" 
  //         subtitle="Looks like you have no messages" 
  //       />
  //     </ClientOnly>
  //   );
  // }

  return (
    <ClientOnly>
      {/* <MessageClient
        messages={messages}
        currentUser={currentUser}
      /> */}
    </ClientOnly>
  );
}
