// "use client"
// import { useState, useEffect } from "react";
// import axios from "axios";
// import { FC } from "react";

// interface Review {
//   id: string;
//   user: {
//     name: string;
//     image: string;
//   };
//   rating: number;
//   review: string;
//   createdAt: string;
// }

// interface ListingReviewsProps {
//   listingId: String;
// }

// const ListingReviews: FC<ListingReviewsProps> = ({ listingId }) => {
//   const [reviews, setReviews] = useState<Review[]>([]);
//   const [rating, setRating] = useState<number>(1);
//   const [reviewText, setReviewText] = useState<string>("");
//   const [error, setError] = useState<string>("");

//   useEffect(() => {
//     const fetchReviews = async () => {
//       try {
//         const response = await axios.get(`/api/reviews?listingId=${listingId}`);
//         setReviews(response.data);
//       } catch (err) {
//         setError("Failed to fetch reviews.");
//         console.error(err);
//       }
//     };
//     fetchReviews();
//   }, [listingId]);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
  
//     try {
//       const response = await axios.post('/api/reviews', {
//         listingId, // Make sure listingId is correctly passed here
//         rating,
//         review: reviewText,
//       });
//       setReviewText("");
//       setRating(1);
//       // Re-fetch reviews
//       const fetchReviews = async () => {
//         try {
//           const response = await axios.get(`/api/reviews?listingId=${listingId}`);
//           setReviews(response.data);
//         } catch (err) {
//           setError("Failed to fetch reviews.");
//           console.error(err);
//         }
//       };
//       fetchReviews();
//     } catch (err) {
//       setError("Failed to submit review.");
//       console.error(err);
//     }
//   };
  
//   return (
//     <div>
//       <h2>Reviews</h2>
//       {error && <p className="text-red-500">{error}</p>}
//       <ul>
//         {reviews.map((review) => (
//           <li key={review.id}>
//             <div>{review.user.name}</div>
//             <div>{review.rating} / 5</div>
//             <p>{review.review}</p>
//           </li>
//         ))}
//       </ul>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Rating:
//           <select value={rating} onChange={(e) => setRating(parseInt(e.target.value))}>
//             {[1, 2, 3, 4, 5].map((r) => (
//               <option key={r} value={r}>{r}</option>
//             ))}
//           </select>
//         </label>
//         <label>
//           Review:
//           <textarea value={reviewText} onChange={(e) => setReviewText(e.target.value)} />
//         </label>
//         <button type="submit">Submit Review</button>
//       </form>
//     </div>
//   );
// };

// export default ListingReviews;
