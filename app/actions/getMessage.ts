import prisma from "@/app/lib/prismadb";

interface IParams {
  authorId: string;
}

export default async function getMessage(params: IParams) {
  try {
    const { authorId } = params;

    // Get messages for the current user
    const messages = await prisma.message.findMany({
      where: {
        OR: [
          { userId: authorId },
          { listingId: { in: await getListingIdsForUser(authorId) } },
        ],
      },
      include: {
        user: true,
        listing: true,
      },
    });

    return messages;
  } catch (error: any) {
    throw new Error(error);
  }
}

async function getListingIdsForUser(userId: string) {
  const listings = await prisma.listing.findMany({
    where: { userId },
    select: { id: true },
  });

  return listings.map((listing) => listing.id);
}