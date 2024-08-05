import { PrismaClient } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { listingId, userId } = req.body;

    if (!listingId || !userId) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    try {
      // Check if a chat already exists for this listing
      let chat = await prisma.chat.findFirst({
        where: {
          listingId,
          users: {
            has: userId,
          },
        },
      });

      // Create a new chat if it does not exist
      if (!chat) {
        chat = await prisma.chat.create({
          data: {
            listingId,
            users: [userId],
          },
        });
      }

      res.status(200).json(chat);
    } catch (error) {
      console.error('Error processing request:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
