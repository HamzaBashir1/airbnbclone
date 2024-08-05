"use client"
import { useState, useEffect } from "react";
import { SafeUser } from "@/app/types";
import { FC } from "react";
import { IconType } from "react-icons";
import {
  FaWifi,
  FaUtensils,
  FaTv,
  FaTshirt,
  FaDog,
  FaSnowflake,
  FaParking,
  FaSwimmingPool,
  FaHotTub,
  FaDumbbell,
  FaFire,
  FaHamburger,
  FaFireExtinguisher,
  FaUmbrellaBeach,
  FaShower,
  FaFirstAid,
  FaBell,
} from "react-icons/fa";
import Avatar from "../Avatar";
import ListingCategory from "./ListingCategory";
import dynamic from "next/dynamic";
import StarRating from "./starrating";
import toast from "react-hot-toast";
import useCountries from "@/app/hooks/useCountries";

const Map = dynamic(() => import("../Map"), { ssr: false });

const amenitiesData = [
  { label: "Wi-Fi", icon: FaWifi },
  { label: "Kitchen", icon: FaUtensils },
  { label: "TV", icon: FaTv },
  { label: "Washer", icon: FaTshirt },
  { label: "Pet-friendly", icon: FaDog },
  { label: "Air conditioning", icon: FaSnowflake },
  { label: "Free parking", icon: FaParking },
  { label: "Pool", icon: FaSwimmingPool },
  { label: "Hot tub", icon: FaHotTub },
  { label: "Gym", icon: FaDumbbell },
  { label: "Fireplace", icon: FaFire },
  { label: "Hair dryer", icon: FaHamburger },
  { label: "Iron", icon: FaFireExtinguisher },
  { label: "Beachfront", icon: FaUmbrellaBeach },
  { label: "Shampoo", icon: FaShower },
  { label: "First aid kit", icon: FaFirstAid },
  { label: "Hangers", icon: FaBell },
];

interface ListingInfoProps {
  user: SafeUser;
  description: string;
  guestCount: number;
  roomCount: number;
  bathroomCount: number;
  category: {
    icon: IconType;
    label: string;
    description: string;
  } | undefined;
  locationValue: string;
  listingId: string;
  amenities: string[];
  reviews: {
    id: string;
    rating: number;
    review: string;
    user?: {
      id: string;
      name?: string; // Make name optional
    };
  }[];
  panorama?: string;
}

const ListingInfo: FC<ListingInfoProps> = ({
  user,
  description,
  guestCount,
  roomCount,
  bathroomCount,
  category,
  locationValue,
  listingId,
  amenities = [],
  reviews = [],
  panorama,
}) => {
  const { getByValue } = useCountries();
  const coordinates = getByValue(locationValue)?.latlng;

  const amenitiesWithIcons = amenitiesData.filter((amenity) =>
    amenities.includes(amenity.label)
  );

  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");
  const [reviewsState, setReviews] = useState(reviews);
  const [error, setError] = useState<string | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null); // Error state for validation
  const [loading, setLoading] = useState(true); // Add loading state
  const [showAllReviews, setShowAllReviews] = useState(false); // State to toggle reviews

  useEffect(() => {
    console.log("Panorama URL:", panorama); // Debug log

    const fetchReviews = async () => {
      try {
        const response = await fetch(`/api/reviews?listingId=${listingId}`);
        if (response.ok) {
          const data = await response.json();
          console.log("Fetched reviews:", data); // Log the fetched reviews
          setReviews(data);
        } else {
          setError("Failed to fetch reviews");
        }
      } catch (err) {
        setError("An error occurred while fetching reviews");
      } finally {
        setLoading(false); // Set loading to false once data is fetched or an error occurs
      }
    };

    fetchReviews();
  }, [listingId, panorama]);

  const handleSubmitReview = async () => {
    setSubmitError(null); // Reset submit error

    if (rating === 0 || review.trim() === "") {
      setSubmitError("Please select a rating and write a review before submitting.");
      return;
    }

    try {
      const response = await fetch("/api/reviews", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          listingId,
          rating,
          review,
        }),
      });

      if (response.ok) {
        const newReview = await response.json();
        setReviews([...reviewsState, newReview]);
        setRating(0);
        setReview("");
        toast.success("Review Submitted Successfully"); // Show success toast
      } else {
        console.error("Error posting review", response.statusText);
      }
    } catch (error) {
      console.error("Error posting review", error);
    }
  };

  return (
    <div className="col-span-4 flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <div className="text-xl font-semibold flex flex-row items-center gap-2">
          <div>Hosted by {user?.name}</div>
          <Avatar src={user?.image} />
        </div>
        <div className="flex flex-row items-center gap-4 font-light text-neutral-500">
          <div>{guestCount} guests</div>
          <div>{roomCount} rooms</div>
          <div>{bathroomCount} bathrooms</div>
        </div>
      </div>
      <hr />
      {panorama && (
        <div className="mt-6">
          <a
            href={panorama}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
          >
            View Virtual Tour
          </a>
        </div>
      )}
      {category && (
        <ListingCategory
          icon={category.icon}
          label={category.label}
          description={category.description}
        />
      )}
      <hr />
      <div className="text-lg font-light text-neutral-500">{description}</div>
      <hr />
      <div className="text-lg font-semibold">Amenities</div>
      <ul className="list-disc pl-5">
        {amenitiesWithIcons.length > 0 ? (
          amenitiesWithIcons.map((amenity, index) => (
            <li key={index} className="text-neutral-500 flex items-center gap-2">
              <amenity.icon /> {amenity.label}
            </li>
          ))
        ) : (
          <li className="text-neutral-500">No amenities available</li>
        )}
      </ul>
      <hr />
      <Map center={coordinates} />
      <div className="text-lg font-semibold">Reviews</div>
      <div className="mt-6">
        {reviewsState.length > 0 ? (
          <>
            {reviewsState.slice(0, showAllReviews ? reviewsState.length : 3).map((review) => (
              <div key={review.id} className="bg-white shadow-md rounded-lg p-4 mb-4">
                <div className="flex items-center gap-2">
                  <div className="flex-1">
                    <div className="font-semibold text-lg">{review.user?.name || 'Anonymous'}</div> {/* Add safe access */}
                    <div className="text-yellow-400">{Array(review.rating).fill('⭐').join('')}</div>
                  </div>
                </div>
                <div className="mt-2 text-gray-700">{review.review}</div>
              </div>
            ))}
            {reviewsState.length > 3 && (
              <button
                onClick={() => setShowAllReviews(!showAllReviews)}
                className="mt-4 text-blue-500"
              >
                {showAllReviews ? 'Show Less' : 'Show More'}
              </button>
            )}
          </>
        ) : (
          <div className="text-gray-500">No reviews available</div>
        )}
      </div>

      <div className="mt-6 border-t-2 border-gray-200 pt-4">
        <label className="block mb-2 text-lg font-semibold">Your Review</label>
        {submitError && (
          <div className="text-red-500 mb-2">{submitError}</div> // Show validation error message
        )}
        <StarRating
          rating={rating}
          onChange={(newRating) => setRating(newRating)}
        />
        <textarea
          value={review}
          onChange={(e) => setReview(e.target.value)}
          className="border border-gray-300 p-2 rounded w-full h-32"
          placeholder="Write your review here..."
          required
        />
        <button
          onClick={handleSubmitReview}
          className={`mt-4 p-2 rounded transition ${submitError ? 'bg-gray-400' : 'bg-blue-500 hover:bg-blue-600'} text-white`}
          disabled={submitError !== null} // Disable button if there's a validation error
        >
          {submitError ? 'Fix Errors' : 'Submit Review'}
        </button>
      </div>
    </div>
  );
};

export default ListingInfo;
