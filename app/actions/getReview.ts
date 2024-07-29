// import prisma from "@/app/lib/prismadb"

// export interface IReviewsParams {
//   userId?: string
//   listingId?: string
//   rating?: number
//   review?: string
// }

// export default async function getReviews(params: IReviewsParams) {
//   try {
//     const {
//       userId,
//       listingId,
//       rating,
//       review,
//     } = params

//     let query: any = {}
//     if (userId) {
//       query.userId = userId
//     }
//     if (listingId) {
//       query.listingId = listingId
//     }
//     if (rating) {
//       query.rating = {
//         gte: rating,
//       }
//     }
//     if (review) {
//       query.review = {
//         contains: review,
//       }
//     }

//     const reviews = await prisma.review.findMany({
//       where: query,
//       orderBy: {
//         createdAt: "desc",
//       },
//     })

//     const safeReviews = reviews.map((review) => ({
//       ...review,
//       createdAt: review.createdAt.toISOString(),
//     }))

//     return safeReviews
//   } catch (error: any) {
//     throw new Error(error)
//   }
// }
