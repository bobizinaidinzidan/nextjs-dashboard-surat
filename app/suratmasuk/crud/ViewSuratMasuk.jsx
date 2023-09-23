'use client';
import { useState } from 'react';
import { HiOutlineXMark, HiOutlineViewfinderCircle } from 'react-icons/hi2';
export default function ViewSuratMasuk({ surat }) {
  const [view, setView] = useState(false);
  return (
    <div>
      <div>
        <div
          onClick={() => setView(true)}
          className='flex justify-end items-center text-white ml-1 p-2 rounded-md bg-green-600 hover:bg-green-500 cursor-pointer'
        >
          <HiOutlineViewfinderCircle size={18} />
          <span className=' ml-1 font-medium'>View</span>
        </div>
      </div>
      <div>
        {view && (
          <div className='bg-black/20 fixed inset-0'>
            <div className='overflow-auto flex justify-center items-center h-full'>
              <div className='flex flex-col bg-white items-center rounded-md  mb-auto mt-auto w-2/3 p-5 pt-1'>
                <div className='flex justify-end w-full'>
                  <div
                    onClick={() => setView(false)}
                    className='flex justify-end text-indigo-700 p-2 rounded-md  hover:bg-indigo-200 cursor-pointer'
                  >
                    <HiOutlineXMark size={18} />
                  </div>
                </div>
                <h1 className='text-2xl font-semibold text-center mb-6'>
                  View Surat Keluar
                </h1>
                <div className='grid w-full'>
                  <div className='col-12'>
                    <div className='grid gap-x-2  grid-cols-1 md:grid-cols-2 '>
                      <div className='col-12 xl:col-6 xl:col-3 border-b border-gray-400'>
                        {/* <div class='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'> */}
                        <div class='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
                          <dt class='text-sm font-medium leading-2 text-gray-900'>
                            No Surat
                          </dt>
                          <dd class='mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0'>
                            {surat.surat.nosurat}
                          </dd>
                        </div>
                      </div>
                      <div className='col-12 xl:col-6 xl:col-3 border-b border-gray-400'>
                        <div class='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
                          <dt class='text-sm font-medium leading-6 text-gray-900'>
                            Perihal/Hal Surat
                          </dt>
                          <dd class='mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0'>
                            {surat.surat.perihal}
                          </dd>
                        </div>
                      </div>
                      <div className='col-12 xl:col-6 xl:col-3 border-b border-gray-400'>
                        <div class='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
                          <dt class='text-sm font-medium leading-6 text-gray-900'>
                            Jenis Surat
                          </dt>
                          <dd class='mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0'>
                            {surat.surat.jenis.nama}
                          </dd>
                        </div>
                      </div>
                      <div className='col-12 xl:col-6 xl:col-3 border-b border-gray-400'>
                        <div class='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
                          <dt class='text-sm font-medium leading-6 text-gray-900'>
                            Unit Pengirim Surat{' '}
                          </dt>
                          <dd class='mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0'>
                            {surat.surat.pengirim}
                          </dd>
                        </div>
                      </div>
                      <div className='col-12 xl:col-6 xl:col-3 border-b border-gray-400'>
                        <div class='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
                          <dt class='text-sm font-medium leading-6 text-gray-900'>
                            Sifat Surat
                          </dt>
                          <dd class='mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0'>
                            {surat.surat.sifat.nama}
                          </dd>
                        </div>
                      </div>
                      <div className='col-12 xl:col-6 xl:col-3 border-b border-gray-400'>
                        <div class='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
                          <dt class='text-sm font-medium leading-6 text-gray-900'>
                            Admin
                          </dt>
                          <dd class='mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0'>
                            {surat.user.username}
                          </dd>
                        </div>
                      </div>
                      <div className='col-12 xl:col-6 xl:col-3 border-b border-gray-400'>
                        <div class='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
                          <dt class='text-sm font-medium leading-6 text-gray-900'>
                            Status Surat
                          </dt>
                          <dd class='mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0'>
                            {surat.status.nama}
                          </dd>
                        </div>
                      </div>
                      <div className='col-12 xl:col-6 xl:col-3 border-b border-gray-400'>
                        <div class='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
                          <dt class='text-sm font-medium leading-6 text-gray-900'>
                            Tanggal Surat dibuat{' '}
                          </dt>
                          <dd class='mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0'>
                            {new Date(surat.surat.tglbuat).toLocaleDateString()}
                          </dd>
                        </div>
                      </div>
                      <div className='col-12 xl:col-6 xl:col-3 border-b border-gray-400'>
                        <div class='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
                          <dt class='text-sm font-medium leading-6 text-gray-900'>
                            Tanggal Surat diterima{' '}
                          </dt>
                          <dd class='mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0'>
                            {new Date(surat.tglterima).toLocaleDateString()}
                          </dd>
                        </div>
                      </div>
                      <div className='col-12 xl:col-6 xl:col-3 border-b border-gray-400'>
                        <div class='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
                          <dt class='text-sm font-medium leading-6 text-gray-900'>
                            File Surat{' '}
                          </dt>
                          <dd class='flex justify-between items-center mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0'>
                            {surat.surat.file}{' '}
                            {/* <Testing surat={surat} className='ml-4' /> */}
                          </dd>
                        </div>
                      </div>
                      <div className='col-12 xl:col-6 xl:col-3 border-b border-gray-400'>
                        <div class='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
                          <dt class='text-sm font-medium leading-6 text-gray-900'>
                            Alamat Surat{' '}
                          </dt>
                          <dd class='mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0'>
                            {surat.surat.alamat}
                          </dd>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='flex justify-center w-full mt-4'>
                  <div
                    onClick={() => setView(false)}
                    className='flex justify-end items-center text-indigo-700 ml-1 p-2 rounded-md  hover:bg-indigo-200 cursor-pointer'
                  >
                    {/* <HiOutlineXMark size={18} /> */}
                    <span className='text-lg font-semibold'>Kembali</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}{' '}
      </div>
    </div>
  );
}
