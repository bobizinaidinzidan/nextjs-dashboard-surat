import prisma from '@/app/libs/prisma';
import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';

export const POST = async (request) => {
  try {
    const body = await request.json();
    const { id, name, email, username, password } = body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await prisma.User.create({
      data: {
        id,
        name,
        email,
        username,
        password: hashedPassword,
      },
    });
    return NextResponse.json(newUser);
  } catch (error) {
    return NextResponse.json({ message: 'Add Error', error }, { status: 500 });
  }
};

export const GET = async () => {
  try {
    const allUser = await prisma.User.findMany();
    return NextResponse.json(allUser);
  } catch (error) {
    return NextResponse.json({ message: 'Read Error', error }, { status: 500 });
  }
};
