"use client";
import { FC, useState } from "react";
import { Range } from "react-date-range";
import Calendar from "../inputs/Calendar";
import Button from "../Button";
import MessageModal from "./ListingMessage";

interface ListingReservationProps {
  price: number;
  dateRange: Range;
  totalPrice: number;
  onChangeDate: (value: Range) => void;
  onSubmit: () => void;
  disabled?: boolean;
  disabledDates: Date[];
  userId?: string; // Make userId optional
}

const ListingReservation: FC<ListingReservationProps> = ({
  price,
  dateRange,
  totalPrice,
  onChangeDate,
  onSubmit,
  disabled,
  disabledDates,
  userId,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState<string>("");

  const onOpenModal = () => {
    setIsOpen(true);
  };

  const onCloseModal = () => {
    setIsOpen(false);
  };

  const handleMessageChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(event.target.value);
  };

  const handleSendMessage = () => {
    if (userId) {
      console.log(`Sending message to user ID ${userId}: ${message}`);
    } else {
      console.log("User ID is not defined.");
    }
    onCloseModal();
  };

  return (
    <div className="bg-white rounded-xl border-[1px] border-neutral-200 overflow-hidden">
      <div className="flex flex-row items-center gap-1 p-4">
        <div className="text-2xl font-semibold">€ {price}</div>
        <div className="font-light text-neutral-600">night</div>
      </div>
      <hr />
      <Calendar
        value={dateRange}
        disabledDates={disabledDates}
        onChange={(value) => onChangeDate(value.selection)}
      />
      <hr />
      <div className="p-4">
        <form>
          <Button 
            disabled={disabled} 
            label="Reserve" 
            onClick={onSubmit} 
          />
        </form>
      </div>
      <div className="p-4 flex flex-row items-center justify-between font-semibold text-lg">
        <div>Total</div>
        <div>€ {totalPrice}</div>
      </div>
      <div className="p-4">
        <Button onClick={onOpenModal} label="Send a message" />
      </div>
      <MessageModal
        isOpen={isOpen}
        onClose={onCloseModal}
        message={message}
        handleMessageChange={handleMessageChange}
        handleSendMessage={handleSendMessage}
      />
    </div>
  );
};

export default ListingReservation;
