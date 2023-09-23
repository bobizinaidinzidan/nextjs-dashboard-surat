import prisma from '@/app/libs/prisma';
import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const { email } = await req.json();
    const exists = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });
    return NextResponse.json({ exists });
  } catch (error) {
    console.log(error);
  }
}
