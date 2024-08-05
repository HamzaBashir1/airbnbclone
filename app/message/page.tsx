"use client";
import { FC, useState, useEffect } from "react";

interface ChatProps {
  chatId: string;
  userId?: string; // Optional
}

const Chat: FC<ChatProps> = ({ chatId, userId }) => {
  const [messages, setMessages] = useState<any[]>([]);
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    async function fetchMessages() {
      if (chatId) {
        const res = await fetch(`/api/chats/${chatId}`);
        const data = await res.json();
        setMessages(data);
      }
    }

    fetchMessages();
  }, [chatId]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (userId && chatId) {
      const res = await fetch('/api/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chatId, senderId: userId, content: message }),
      });

      const newMessage = await res.json();
      setMessages((prev) => [newMessage, ...prev]);
      setMessage('');
    } else {
      console.error("User ID or Chat ID is missing.");
    }
  };

  return (
    // <div>
    //   <div>
    //     {messages.map((msg) => (
    //       <div key={msg.id}>
    //         <strong>{msg.sender.name}</strong>: {msg.content}
    //       </div>
    //     ))}
    //   </div>
    //   <form onSubmit={handleSubmit}>
    //     <input
    //       type="text"
    //       value={message}
    //       onChange={(e) => setMessage(e.target.value)}
    //     />
    //     <button type="submit">Send</button>
    //   </form>
    // </div>
    <div>
        <h1 className="text-center text-4xl font-bold py-20">No Message Yet</h1>
    </div>
  );
};

export default Chat;
