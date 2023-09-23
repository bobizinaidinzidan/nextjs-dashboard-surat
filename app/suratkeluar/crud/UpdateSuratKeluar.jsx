'use client';
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';

import {
  HiOutlinePencilSquare,
  HiOutlineXMark,
  HiOutlineCheck,
} from 'react-icons/hi2';

import InputForm from '@/components/form/Input';
import DropdownSurat from '@/components/form/DropdownSurat';
import DropdownForm from '@/components/form/Dropdown';

const UpdateSuratKeluar = ({ surat, user, allsurat, tujuan }) => {
  const [open, setEdit] = useState(false);
  const [update, setUpdate] = useState(surat);

  const router = useRouter();
  const { data: session } = useSession();

  const handleUpdate = async (e) => {
    e.preventDefault();
    const email = session?.user?.email;
    const resUserExists = await fetch('/api/userExists', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });
    const { exists } = await resUserExists.json();

    update.tglkeluar = new Date(update.tglkeluar).toISOString();
    update.userId = parseInt(exists.id);
    update.suratId = parseInt(update.suratId);
    axios
      .patch(`/api/suratkeluar/${surat.id}`, update)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        router.refresh();
        setEdit(false);
      });
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUpdate((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <div>
      <div>
        <div
          onClick={() => setEdit(true)}
          className='flex justify-end items-center text-white ml-1 p-2 rounded-md bg-gray-700 hover:bg-gray-500 cursor-pointer'
        >
          <HiOutlinePencilSquare size={18} />
          <span className=' ml-1 font-medium'>Edit</span>
        </div>
      </div>
      {open && (
        <div className='bg-black/50 fixed inset-0'>
          <div className='overflow-auto flex justify-center items-center h-full'>
            <div className='flex flex-col items-end bg-slate-300 rounded-md mt-auto mb-auto w-1/2 md:w-1/3 p-5'>
              <form className='w-full' onSubmit={handleUpdate}>
                <h1 className='text-2xl text-center py-3'>Edit data</h1>
                <DropdownSurat
                  label='Surat'
                  name='suratId'
                  value={update.suratId}
                  change={handleChange}
                  data={allsurat}
                />
                <InputForm
                  label='Tujuan Surat'
                  type='text'
                  name='tujuan'
                  placeholder='Input the correct letter data.....'
                  value={update.tujuan}
                  change={handleChange}
                  errorMessage='Data should be uppercase the first character'
                  pattern='^[A-Z][A-z\s]{1,}$'
                  required='true'
                />
                <InputForm
                  label='Tanggal Surat Keluar'
                  type='Date'
                  name='tglkeluar'
                  placeholder='00/00/0000'
                  value={update.tglkeluar}
                  change={handleChange}
                  errorMessage='Choose date first'
                  // pattern=''
                  required='true'
                />

                <div className='flex justify-center w-full mt-4'>
                  <button
                    className='flex justify-end font-semibold items-center text-indigo-700 ml-1 p-2 rounded-md  hover:bg-indigo-100 cursor-pointer'
                    type='button'
                    onClick={() => {
                      setEdit(false);
                      setUpdate(surat);
                    }}
                  >
                    {' '}
                    <HiOutlineXMark className='h-5 w-5' />
                    Cancel
                  </button>
                  <button
                    className='flex justify-end font-semibold items-center text-indigo-700 ml-1 p-2 rounded-md  hover:bg-indigo-100 cursor-pointer'
                    type='submit'
                  >
                    <HiOutlineCheck className='h-5 w-5' />
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UpdateSuratKeluar;
