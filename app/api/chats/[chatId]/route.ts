import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const chatId = searchParams.get('chatId');

  if (!chatId) {
    return NextResponse.json({ error: 'Invalid or missing chatId' }, { status: 400 });
  }

  try {
    const messages = await prisma.message.findMany({
      where: { chatId },
      include: { sender: true },
      orderBy: { createdAt: 'desc' },
    });
    return NextResponse.json(messages, { status: 200 });
  } catch (error) {
    console.error('Failed to fetch messages:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json({ error: 'Failed to fetch messages', message: errorMessage }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
