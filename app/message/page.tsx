import react from 'react'
import getCurrentUser from '../actions/getCurrentUser'
import ClientOnly from '../components/ClientOnly'
import EmptyState from '../components/EmptyState'
// import MessageClient from './MessageClient'
import getMessage from '../actions/getMessage'

export default async function Message() {

  const currentUser = await getCurrentUser()

  if(!currentUser) {
    return (
      <ClientOnly>
        <EmptyState title="Unauthorized" subtitle="please login"/>
      </ClientOnly>
    )
  }

  const message = await getMessage({ authorId: currentUser.id })

  if(message.length === 0) {
    return (
      <ClientOnly>
        <EmptyState 
        title='No Message Found'
        subtitle='Looks like you have no messages'
        />
      </ClientOnly>
    )
  }
  return (
    <ClientOnly>
      <MessageClient
      messages={message}
      currentUser={currentUser}
      />
    </ClientOnly>
  )
}
