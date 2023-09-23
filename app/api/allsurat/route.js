// url: http://localhost:3000/api/allsurat
import prisma from '@/app/libs/prisma';
import { NextRequest, NextResponse } from 'next/server';
// import { formidable } from 'formidable';
import { writeFile } from 'fs/promises'; // Menggunakan fs/promises untuk async version

export async function POST(req) {
  const data = await req.formData();
  const file = data.get('file');
  const dataFileName = file.name;
  try {
    const nosurat = data.get('nosurat');
    const perihal = data.get('perihal');
    const nama = data.get('nama');
    const alamat = data.get('alamat');
    const jenisId = parseInt(data.get('jenisId'));
    const pengirim = data.get('pengirim');
    const sifatId = parseInt(data.get('sifatId'));

    const tglbuat = new Date(data.get('tglbuat')).toISOString();
    const newSurat = await prisma.Surat.create({
      data: {
        nosurat: nosurat,
        perihal: perihal,
        nama: nama,
        alamat: alamat,
        file: dataFileName,
        jenisId: jenisId,
        pengirim: pengirim,
        sifatId: sifatId,
        tglbuat: tglbuat,
      },
    });
    if (!file) {
      return NextResponse.json({ success: false });
    }
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const path = `./app/fileSurat/${file.name}`;

    try {
      await writeFile(path, buffer);
      console.log(`open ${path} to see the uploaded file`);
      return NextResponse.json({ success: true });
    } catch (error) {
      console.error('Error writing file:', error);
      return NextResponse.json({ success: false, error: 'Error writing file' });
    }
    // return NextResponse.json(newSurat);
  } catch (error) {
    return NextResponse.json({ message: 'Add Error', error }, { status: 500 });
  }
}

export const GET = async () => {
  try {
    const allSurat = await prisma.Surat.findMany();
    return NextResponse.json(allSurat);
  } catch (error) {
    return NextResponse.json({ message: 'Read Error', error }, { status: 500 });
  }
};
