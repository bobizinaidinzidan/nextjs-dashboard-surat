// url: http://localhost:3000/api/jenis/12345
import prisma from '@/app/libs/prisma';
import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';

export const GET = async (request, { params }) => {
  try {
    const { id } = params;

    const findUser = await prisma.User.findUnique({
      where: {
        id: Number(id),
      },
    });

    if (!findUser) {
      return NextResponse.json(
        {
          message: 'Post not found',
          error,
        },
        { status: 404 }
      );
    }

    return NextResponse.json(findUser);
  } catch (error) {
    return NextResponse.json({ message: 'Find Error', error }, { status: 500 });
  }
};

export const PATCH = async (request, { params }) => {
  try {
    const body = await request.json();
    const { name, email, username, password } = body;

    const { id } = params;
    const hashedPassword = await bcrypt.hash(password, 10);

    const updateTujuan = await prisma.User.update({
      where: {
        id: Number(id),
      },
      data: {
        name,
        email,
        username,
        password: hashedPassword,
      },
    });

    if (!updateTujuan) {
      return NextResponse.json(
        {
          message: 'Post not found',
          error,
        },
        { status: 404 }
      );
    }

    return NextResponse.json(updateTujuan);
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

    const deleteUser = await prisma.User.delete({
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
