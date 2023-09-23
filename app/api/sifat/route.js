// url: http://localhost:3000/api/jenis
import prisma from '@/app/libs/prisma';
import { NextResponse } from 'next/server';

// Add/Create Data
export const POST = async (request) => {
  try {
    const body = await request.json();
    const { id, nama } = body;
    const newSifat = await prisma.SifatSurat.create({
      data: {
        id,
        nama,
      },
    });
    return NextResponse.json(newSifat);
  } catch (error) {
    return NextResponse.json({ message: 'Add Error', error }, { status: 500 });
  }
};

export const GET = async () => {
  try {
    const allSifat = await prisma.SifatSurat.findMany();
    return NextResponse.json(allSifat);
  } catch (error) {
    return NextResponse.json({ message: 'Read Error', error }, { status: 500 });
  }
};
