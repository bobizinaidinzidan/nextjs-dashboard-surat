import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();
export async function POST(req) {
  try {
    const { username } = await req.json();
    const existsUser = await prisma.user.findUnique({
      where: {
        username: username,
      },
    });
    console.log('username :', existsUser);
    return NextResponse.json({ existsUser });
  } catch (error) {
    console.log(error);
  }
}
