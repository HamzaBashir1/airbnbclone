"use client";
import { FC, useState, useEffect } from "react";
import Button from "../Button";

interface MessageModalProps {
  isOpen: boolean;
  onClose: () => void;
  message: string;
  handleMessageChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleSendMessage: () => void;
  userId: string;
  chatId?: string;  // Make chatId optional if necessary
}

const MessageModal: FC<MessageModalProps> = ({
  isOpen,
  onClose,
  message,
  handleMessageChange,
  handleSendMessage,
  userId,
  chatId,
}) => {
  const [messages, setMessages] = useState<any[]>([]);
  const [newMessage, setNewMessage] = useState<string>("");

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

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleSendMessage();

    if (userId && chatId) {
      const res = await fetch('/api/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chatId, senderId: userId, content: newMessage }),
      });

      const newMessageData = await res.json();
      setMessages((prev) => [newMessageData, ...prev]);
      setNewMessage('');
    } else {
      console.error("User ID or Chat ID is missing.");
    }
  };

  if (!isOpen) return null;  // Ensure the open state is properly managed

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-xl p-4 w-full max-w-md">
        <h2 className="text-lg font-semibold">Send a message</h2>
        <form onSubmit={handleSubmit}>
          <textarea
            className="w-full p-2 border border-neutral-200 rounded"
            placeholder="Type your message..."
            value={message}
            onChange={handleMessageChange}
          />
          <Button label="Send" onClick={handleSendMessage} type="submit" />
        </form>
        {chatId && (
          <div>
            <div>
              {messages.map((msg) => (
                <div key={msg.id}>
                  <strong>{msg.sender.name}</strong>: {msg.content}
                </div>
              ))}
            </div>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
              />
              <button type="submit">Send</button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default MessageModal;
