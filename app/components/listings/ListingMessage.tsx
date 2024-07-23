import { FC, useState } from "react";
import Button from "../Button";

interface MessageModalProps {
  isOpen: boolean;
  onClose: () => void;
  message: string;
  handleMessageChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleSendMessage: () => void;
}

const MessageModal: FC<MessageModalProps> = ({
  isOpen,
  onClose,
  message,
  handleMessageChange,
  handleSendMessage,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-xl p-4 w-full max-w-md">
        <h2 className="text-lg font-semibold">Send a message</h2>
        <form>
          <textarea
            className="w-full p-2 border border-neutral-200 rounded"
            placeholder="Type your message..."
            value={message}
            onChange={handleMessageChange}
          />  
          <Button label="Send" onClick={handleSendMessage} />
        </form>
      </div>
    </div>
  );
};

export default MessageModal;