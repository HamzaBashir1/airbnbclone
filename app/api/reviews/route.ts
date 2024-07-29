// import { NextResponse } from "next/server";
// import prisma from "@/app/lib/prismadb";
// import getCurrentUser from "@/app/actions/getCurrentUser";

// export async function POST(request: Request) {
//     const currentUser = await getCurrentUser();
  
//     if (!currentUser) {
//       return NextResponse.json({ error: 'User not authenticated' }, { status: 401 });
//     }
  
//     try {
//       const body = await request.json();
//       const { listingId, rating, review } = body;
  
//       if (!listingId || typeof listingId !== 'string') {
//         return NextResponse.json({ error: 'Invalid or missing listingId' }, { status: 400 });
//       }
//       if (typeof rating !== 'number' || rating < 1 || rating > 5) {
//         return NextResponse.json({ error: 'Invalid rating. Must be between 1 and 5' }, { status: 400 });
//       }
//       if (!review || typeof review !== 'string') {
//         return NextResponse.json({ error: 'Review text is required' }, { status: 400 });
//       }
  
//       const newReview = await prisma.review.create({
//         data: {
//           listingId,
//           userId: currentUser.id,
//           rating,
//           review: review,
//         },
//       });
//       return NextResponse.json(newReview);
//     } catch (error) {
//       console.error('Error creating review:', error);
//       return NextResponse.json({ error: 'Failed to create review' }, { status: 500 });
//     }
//   }
  

// export async function GET(request: Request) {
//   const { searchParams } = new URL(request.url);
//   const listingId = searchParams.get('listingId');

//   if (!listingId || typeof listingId !== 'string') {
//     return NextResponse.json({ error: 'Invalid or missing listingId' }, { status: 400 });
//   }

//   try {
//     const reviews = await prisma.review.findMany({
//       where: { listingId },
//       include: { user: true },
//     });
//     return NextResponse.json(reviews);
//   } catch (error) {
//     console.error('Error fetching reviews:', error);
//     return NextResponse.json({ error: 'Failed to fetch reviews' }, { status: 500 });
//   }
// }
