import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method, query } = req;
  const { userId } = req.auth; // assuming req.auth is set by a middleware

  if (!userId) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  if (!query.id) {
    return res.status(400).json({ error: 'Receiver ID is required' });
  }

  switch (method) {
    case 'GET':
      try {
        const messages = await prisma.message.findMany({
          where: {
            OR: [
              { senderId: userId, receiverId: query.id },
              { senderId: query.id, receiverId: userId },
            ],
          },
          orderBy: { createdAt: 'asc' },
        });
        return res.status(200).json(messages);
      } catch (error) {
        return res.status(500).json({ error: 'Failed to retrieve messages' });
      }

    case 'POST':
      const { text } = req.body;
      if (!text) {
        return res.status(400).json({ error: 'Text is required' });
      }
      try {
        const newMessage = await prisma.message.create({
          data: {
            text,
            senderId: userId,
            receiverId: query.id,
          },
        });
        return res.statn(newMessage);
      } catch (error) {
        return res.status(500).json({ error: 'Failed to create message' });
      }

    default:
      return res.status(405).json({ error: 'Method not allowed' });
  }
}