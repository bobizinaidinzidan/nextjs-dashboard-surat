// url: http://localhost:3000/api/jenis/12345
import prisma from '@/app/libs/prisma';
import { NextResponse } from 'next/server';

export const GET = async (request, { params }) => {
  try {
    const { id } = params;

    const findSuratKeluar = await prisma.SuratKeluar.findUnique({
      where: {
        id: Number(id),
      },
    });

    if (!findSuratKeluar) {
      return NextResponse.json(
        {
          message: 'Post not found',
          error,
        },
        { status: 404 }
      );
    }

    return NextResponse.json(findSuratKeluar);
  } catch (error) {
    return NextResponse.json({ message: 'Find Error', error }, { status: 500 });
  }
};

export const PATCH = async (request, { params }) => {
  try {
    const body = await request.json();
    const {
      // user,
      userId,
      // surat,
      suratId,
      tujuan,
      tglkeluar,
    } = body;

    const { id } = params;

    const updateSuratKeluar = await prisma.SuratKeluar.update({
      where: {
        id: Number(id),
      },
      data: {
        // user,
        userId,
        // surat,
        suratId,
        tujuan,
        tglkeluar,
      },
    });

    if (!updateSuratKeluar) {
      return NextResponse.json(
        {
          message: 'Post not found',
          error,
        },
        { status: 404 }
      );
    }

    return NextResponse.json(updateSuratKeluar);
  } catch (error) {
    return NextResponse.json(
      { message: 'Update Error', error },
      { status: 500 }
    );
  }
};

export const DELETE = async (request, { params }) => {
  try {
    const { id } = params;

    const deleteSuratKeluar = await prisma.SuratKeluar.delete({
      where: {
        id: Number(id),
      },
    });

    return NextResponse.json('Data berhasil dihapus');
  } catch (error) {
    return NextResponse.json(
      { message: 'Delete Error', error },
      { status: 500 }
    );
  }
};
