// url: http://localhost:3000/api/suratkeluar
import prisma from '@/app/libs/prisma';
import { NextResponse } from 'next/server';

// Add/Create Data
export const POST = async (request) => {
  try {
    const body = await request.json();
    const { id, user, userId, surat, suratId, tujuan, tglkeluar } = body;
    const newSuratKeluar = await prisma.SuratKeluar.create({
      data: {
        id,
        user,
        userId,
        surat,
        suratId,
        tujuan,
        tglkeluar,
      },
    });
    return NextResponse.json(newSuratKeluar);
  } catch (error) {
    return NextResponse.json({ message: 'Add Error', error }, { status: 500 });
  }
};

export const GET = async () => {
  try {
    const allSuratKeluar = await prisma.SuratKeluar.findMany();
    return NextResponse.json(allSuratKeluar);
  } catch (error) {
    return NextResponse.json({ message: 'Read Error', error }, { status: 500 });
  }
};
