import getCurrentUser from "@/app/actions/getCurrentUser";
import { NextResponse } from "next/server";
import prisma from "@/app/lib/prismadb"; // Make sure this path is correct


export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { listingId, rating, review } = body;

    if (!listingId || rating === undefined || !review) {
      return NextResponse.error();
    }

    const currentUser = await getCurrentUser();
    if (!currentUser) {
      return NextResponse.error(); // Or an appropriate error response
    }

    const newReview = await prisma.review.create({
      data: {
        listingId,
        rating,
        review,
        userId: currentUser.id, // Ensure currentUser is not null
      },
    });

    return NextResponse.json(newReview);
  } catch (error) {
    console.error("Error posting review:", error);
    return NextResponse.error();
  }
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const listingId = searchParams.get('listingId');

    if (!listingId) {
      return NextResponse.json({ error: "Missing listingId parameter" }, { status: 400 });
    }

    const reviews = await prisma.review.findMany({
      where: { listingId },
      include: {
        user: { select: { id: true, name: true } }, // Include user details if needed
      },
      orderBy: { createdAt: 'desc' }, // Optional: order reviews by creation date
    });

    return NextResponse.json(reviews);
  } catch (error) {
    console.error("Error fetching reviews:", error);
    return NextResponse.json({ error: "An error occurred while fetching reviews" }, { status: 500 });
  }
}
