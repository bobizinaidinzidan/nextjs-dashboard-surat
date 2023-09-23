'use client';
import { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import { HiOutlineXMark, HiOutlineCheck } from 'react-icons/hi2';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';

import InputForm from '@/components/form/Input';
import DropdownSurat from '@/components/form/DropdownSurat';
import DropdownForm from '@/components/form/Dropdown';

export default function AddSuratMasuk({ surat, status }) {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState({});

  const router = useRouter();
  const { data: session } = useSession();

  const handleSubmit = async (e) => {
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
    input.tglterima = new Date(input.tglterima).toISOString();
    input.userId = parseInt(exists.id);
    input.suratId = parseInt(input.suratId);
    input.statusId = parseInt(input.statusId);
    axios
      .post('/api/suratmasuk', input)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        // setInput({});
        router.refresh();
        setOpen(false);
        setInput({});
      });
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInput((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <div>
      <div>
        <div className='flex justify-between m-2 p-2 '>
          <div className='text-lg p-2 font-semibold'>Data Surat Masuk</div>
          <div
            onClick={() => setOpen(true)}
            className='flex justify-end items-center text-white p-2 rounded-md bg-blue-700 hover:bg-blue-500 cursor-pointer'
          >
            <FaPlus size={18} />
            {/* <span className=' ml-1 font-medium' onClick={handleModal}> */}
            <span className=' ml-1 font-medium'>Add Data</span>
          </div>
        </div>
      </div>
      <div>
        {open && (
          <div className='bg-black/50 fixed inset-0'>
            <div className='overflow-auto flex justify-center items-center h-full'>
              <div className='flex flex-col items-end bg-slate-300 rounded-md mt-auto mb-auto w-1/2 md:w-1/3 p-4'>
                <form className='w-full' onSubmit={handleSubmit}>
                  <h1 className='text-2xl text-center py-3'>Add new data</h1>
                  <DropdownSurat
                    label='Surat'
                    name='suratId'
                    value={input.suratId}
                    change={handleChange}
                    data={surat}
                    errorMessage='required to select one of the data'
                    // pattern=''
                    required='true'
                  />
                  <DropdownForm
                    label='Status Surat'
                    name='statusId'
                    value={input.statusId}
                    change={handleChange}
                    data={status}
                    errorMessage='required to select one of the data'
                    // pattern=''
                    required='true'
                  />
                  <InputForm
                    label='Tanggal Surat Masuk'
                    type='Date'
                    name='tglterima'
                    placeholder='00/00/0000'
                    value={input.tglterima}
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
                        setOpen(false);
                        setInput({});
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
    </div>
  );
}
