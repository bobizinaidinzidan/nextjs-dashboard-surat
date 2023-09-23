// url: http://localhost:3000/api/jenis
import prisma from '@/app/libs/prisma';
import { NextResponse } from 'next/server';

// Add/Create Data
export const POST = async (request) => {
  try {
    const body = await request.json();
    const { id, nama } = body;
    const newStatus = await prisma.StatusSurat.create({
      data: {
        id,
        nama,
      },
    });
    return NextResponse.json(newStatus);
  } catch (error) {
    return NextResponse.json({ message: 'Add Error', error }, { status: 500 });
  }
};

export const GET = async () => {
  try {
    const allStatus = await prisma.StatusSurat.findMany();
    return NextResponse.json(allStatus);
  } catch (error) {
    return NextResponse.json({ message: 'Read Error', error }, { status: 500 });
  }
};
