// url: http://localhost:3000/api/jenis/12345
import prisma from '@/app/libs/prisma';
import { NextResponse } from 'next/server';

export const GET = async (request, { params }) => {
  try {
    const { id } = params;

    const findStatus = await prisma.StatusSurat.findUnique({
      where: {
        id: Number(id),
      },
    });

    if (!findStatus) {
      return NextResponse.json(
        {
          message: 'Post not found',
          error,
        },
        { status: 404 }
      );
    }

    return NextResponse.json(findStatus);
  } catch (error) {
    return NextResponse.json({ message: 'Find Error', error }, { status: 500 });
  }
};

export const PATCH = async (request, { params }) => {
  try {
    const body = await request.json();
    const { nama } = body;

    const { id } = params;

    const updateStatus = await prisma.StatusSurat.update({
      where: {
        id: Number(id),
      },
      data: {
        nama,
      },
    });

    if (!updateStatus) {
      return NextResponse.json(
        {
          message: 'Post not found',
          error,
        },
        { status: 404 }
      );
    }

    return NextResponse.json(updateStatus);
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

    const deleteStatus = await prisma.StatusSurat.delete({
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
