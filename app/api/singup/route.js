// import bcrypt from "bcrypt";
import prisma from '@/app/libs/prisma';
import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';

// const prisma = new PrismaClient();

export async function POST(request) {
  try {
    const { name, email, username, password } = await request.json();
    const hashedPassword = await bcrypt.hash(password, 10);
    await prisma.user.create({
      data: {
        name,
        email,
        username,
        password: hashedPassword,
      },
    });

    return NextResponse.json({ message: 'User registered' }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: 'An error occure while registering user' },
      { status: 500 }
    );
  }
}
