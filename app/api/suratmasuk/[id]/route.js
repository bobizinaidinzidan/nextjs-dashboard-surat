// url: http://localhost:3000/api/suratmasuk
import prisma from '@/app/libs/prisma';
import { NextResponse } from 'next/server';

export const GET = async (request, { params }) => {
  try {
    const { id } = params;

    const findSuratMasuk = await prisma.SuratMasuk.findUnique({
      where: {
        id: Number(id),
      },
    });

    if (!findSuratMasuk) {
      return NextResponse.json(
        {
          message: 'Post not found',
          error,
        },
        { status: 404 }
      );
    }

    return NextResponse.json(findSuratMasuk);
  } catch (error) {
    return NextResponse.json({ message: 'Find Error', error }, { status: 500 });
  }
};

export const PATCH = async (request, { params }) => {
  try {
    const body = await request.json();
    const {
      //   user,
      userId,
      //   surat,
      suratId,
      //   status,
      statusId,
      tglterima,
    } = body;

    const { id } = params;

    const updateSuratMasuk = await prisma.SuratMasuk.update({
      where: {
        id: Number(id),
      },
      data: {
        // user,
        userId,
        // surat,
        suratId,
        // status,
        statusId,
        tglterima,
      },
    });

    if (!updateSuratMasuk) {
      return NextResponse.json(
        {
          message: 'Post not found',
          error,
        },
        { status: 404 }
      );
    }

    return NextResponse.json(updateSuratMasuk);
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

    const deleteSuratMasuk = await prisma.SuratMasuk.delete({
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
