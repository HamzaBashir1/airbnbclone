// import { PrismaClient } from '@prisma/client';
// import { NextApiRequest, NextApiResponse } from 'next';

// const prisma = new PrismaClient();

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   const { chatId } = req.query;

//   if (req.method === 'GET') {
//     try {
//       const messages = await prisma.message.findMany({
//         where: { chatId: chatId as string },
//         include: { sender: true },
//         orderBy: { createdAt: 'desc' },
//       });

//       res.status(200).json(messages);
//     } catch (error) {
//       res.status(500).json({ error: 'Failed to fetch messages' });
//     }
//   } else {
//     res.setHeader('Allow', ['GET']);
//     res.status(405).end(`Method ${req.method} Not Allowed`);
//   }
// }
