// url: http://localhost:3000/api/jenis
import prisma from '@/app/libs/prisma';
import { NextResponse } from 'next/server';

// Add/Create Data
export const POST = async (request) => {
  try {
    const body = await request.json();
    const { id, nama } = body;
    const newJenis = await prisma.JenisSurat.create({
      data: {
        id,
        nama,
      },
    });
    return NextResponse.json(newJenis);
  } catch (error) {
    return NextResponse.json({ message: 'Add Error', error }, { status: 500 });
  }
};

export const GET = async () => {
  try {
    const allJenis = await prisma.JenisSurat.findMany();
    return NextResponse.json(allJenis);
  } catch (error) {
    return NextResponse.json({ message: 'Read Error', error }, { status: 500 });
  }
};
