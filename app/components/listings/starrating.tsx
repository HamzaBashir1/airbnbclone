// "use client"
import { FC, useState } from 'react';
import { FaStar } from 'react-icons/fa';

interface StarRatingProps {
  rating: number;
  onChange: (rating: number) => void;
}

const StarRating: FC<StarRatingProps> = ({ rating, onChange }) => {
  const [hoverRating, setHoverRating] = useState<number | null>(null);

  return (
    <div className="flex items-center py-3">
      {[1, 2, 3, 4, 5].map((star) => (
        <FaStar
          key={star}
          className={`cursor-pointer ${star <= (hoverRating || rating) ? 'text-yellow-400' : 'text-gray-300'}`}
          onClick={() => onChange(star)}
          onMouseEnter={() => setHoverRating(star)}
          onMouseLeave={() => setHoverRating(null)}
        />
      ))}
    </div>
  );
};

export default StarRating;
