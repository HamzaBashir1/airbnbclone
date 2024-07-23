// "use Client"
// import { FC } from "react"
// import { toast } from "react-hot-toast"
// import axios from "axios"
// import { useCallback, useState } from "react"
// import { useRouter } from "next/navigation"

// import { SafeMessage, SafeUser } from "../types"

// import Heading from "@/app/components/Heading"
// import Container from "@/app/components/Container"
// // import MessageCard from "@/app/components/messages/MessageCard"

// interface MessageClientProps {
//   messages: SafeMessage[]
//   currentUser?: SafeUser | null
// }

// const MessageClient: FC<MessageClientProps> = ({ messages, currentUser }) => {
//   const router = useRouter()

//   const [newMessage, setNewMessage] = useState("")
//   const [sending, setSending] = useState(false)

//   const handleSendMessage = useCallback(
//     async (listingId: string) => {
//       if (sending) return

//       setSending(true)

//       try {
//         axios.post('/api/messages', {
//             listingId,
//             userId: currentUser?.id,
//             text: newMessage,
//           })

//         const newMessage = response.data

//         setNewMessage("")
//         setSending(false)

//         toast.success("Message sent successfully")
//       } catch (error) {
//         setSending(false)
//         toast.error("Error sending message")
//       }
//     },
//     [currentUser, sending, newMessage]
//   )

//   return (
//     <Container>
//       <Heading title="Message" subtitle="Bookings on your properties" />
//       <div
//         className="
//         mt-10
//         grid 
//         grid-cols-1
//         sm:grid-cols-2
//         md:grid-cols-3
//         lg:grid-cols-4
//         xl:grid-cols-5
//         2xl:grid-cols-6
//         gap-8
//       "
//       >
//         {messages.map((message) => (
//           <MessageCard
//             key={message.id}
//             message={message}
//             currentUser={currentUser}
//           />
//         ))}
//         <div className="flex flex-col">
//           <input
//             type="text"
//             value={newMessage}
//             onChange={(e) => setNewMessage(e.target.value)}
//             placeholder="Type a message..."
//           />
//           <button onClick={() => handleSendMessage(listingId)}>Send</button>
//         </div>
//       </div>
//     </Container>
//   )
// }

// export default MessageClient