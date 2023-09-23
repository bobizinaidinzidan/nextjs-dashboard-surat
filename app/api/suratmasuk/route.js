// url: http://localhost:3000/api/suratmasuk
import prisma from '@/app/libs/prisma';
import { NextResponse } from 'next/server';
// import { useSession } from 'next-auth/react';

// Add/Create Data
export const POST = async (request) => {
  try {
    const body = await request.json();
    const {
      id,
      userId,
      // surat,
      suratId,
      // status,
      statusId,
      tglterima,
    } = body;
    const newSuratMasuk = await prisma.SuratMasuk.create({
      data: {
        id,
        userId,
        // surat,
        suratId,
        // status,
        statusId,
        tglterima,
      },
    });
    return NextResponse.json(newSuratMasuk);
  } catch (error) {
    return NextResponse.json({ message: 'Add Error', error }, { status: 500 });
  }
};

export const GET = async () => {
  try {
    const allSuratMasuk = await prisma.SuratMasuk.findMany();
    return NextResponse.json(allSuratMasuk);
  } catch (error) {
    return NextResponse.json({ message: 'Read Error', error }, { status: 500 });
  }
};
