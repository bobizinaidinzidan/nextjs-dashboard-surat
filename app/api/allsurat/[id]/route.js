// url: http://localhost:3000/api/jenis/12345
import prisma from '@/app/libs/prisma';
import { NextResponse } from 'next/server';

export const GET = async (request, { params }) => {
  try {
    const { id } = params;

    const findSurat = await prisma.Surat.findUnique({
      where: {
        id: Number(id),
      },
    });

    if (!findSurat) {
      return NextResponse.json(
        {
          message: 'Post not found',
          error,
        },
        { status: 404 }
      );
    }

    return NextResponse.json(findSurat);
  } catch (error) {
    return NextResponse.json({ message: 'Find Error', error }, { status: 500 });
  }
};

export const PATCH = async (request, { params }) => {
  try {
    const body = await request.json();
    const {
      nosurat,
      perihal,
      nama,
      alamat,
      // jenis,
      jenisId,
      // pengirim,
      pengirim,
      // sifat,
      sifatId,
    } = body;

    const { id } = params;

    const updateSurat = await prisma.Surat.update({
      where: {
        id: Number(id),
      },
      data: {
        nosurat,
        perihal,
        nama,
        alamat,
        // jenis,
        jenisId,
        // pengirim,
        pengirim,
        // sifat,
        sifatId,
      },
    });

    if (!updateSurat) {
      return NextResponse.json(
        {
          message: 'Post not found',
          error,
        },
        { status: 404 }
      );
    }

    return NextResponse.json(updateSurat);
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

    const deleteSurat = await prisma.Surat.delete({
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
