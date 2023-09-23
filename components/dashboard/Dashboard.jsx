import { FaRegEnvelope } from 'react-icons/fa';
import { FaEnvelopeOpen } from 'react-icons/fa';
import React from 'react';
import GridComponets from './Grid';
import prisma from '@/app/libs/prisma';
import BarChart from './BarChart';
import ListSurat from './ListSurat';
import PieChart from './PieChart';
async function getDataSurat() {
  return await prisma.surat.findMany({
    orderBy: {
      tglbuat: 'desc',
    },
  });
}
async function getDataStatus() {
  return await prisma.statusSurat.findMany({
    include: {
      suratmasuks: true,
    },
  });
}
async function getDataSuratKeluar() {
  return await prisma.suratKeluar.findMany();
}
async function getDataSuratMasuk() {
  return await prisma.suratMasuk.findMany();
}

export default async function DashboardComponents() {
  const allSurat = await getDataSurat();
  const allStatus = await getDataStatus();
  const allSuratKeluar = await getDataSuratKeluar();
  const allSuratMasuk = await getDataSuratMasuk();
  return (
    <div className='grid'>
      <div className='col-12'>
        <div className='rounded-lg lg:ml-2 p-3'>
          <h1 className='text-4xl font-medium'>
            Sistem Informasi Surat Masuk & Surat Keluar
          </h1>
        </div>
      </div>
      <div className='col-12 '>
        <div className='rounded-lg bg-blue-400 ml-5 mr-10 lg:ml-8 mt-5 mb-5 lg:mr-8 p-6'>
          <GridComponets
            title='All Surat'
            icon={<FaRegEnvelope className='w-5 h-5 text-cyan-500' />}
            nilai={allSurat.length}
          />
        </div>{' '}
      </div>

      <div className='col-12 '>
        <div className='rounded-lg items-center ml-5 mr-10 lg:ml-8 mb-5 lg:mr-8 '>
          {' '}
          <BarChart suratMasuk={allSuratMasuk} suratKeluar={allSuratKeluar} />
        </div>{' '}
      </div>
      <div className='col-12'>
        <div className='grid gap-x-2 gap-y-4 grid-cols-1 md:grid-cols-3 ml-5 mr-10 lg:ml-8 mb-5 lg:mr-8'>
          <div className='col-span-2'>
            <div className='shadow-lg items-center rounded-xl'>
              <PieChart dataStatus={allStatus} />
            </div>
          </div>
          <div className='col-span-1'>
            <div className='shadow-lg rounded-xl'>
              <ListSurat dataSurat={allSurat} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
