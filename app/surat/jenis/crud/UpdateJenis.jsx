'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import {
  HiOutlineXMark,
  HiOutlineCheck,
  HiOutlinePencilSquare,
} from 'react-icons/hi2';
import InputForm from '@/components/form/Input';

export default function UpdateJenis({ surat }) {
  const [open, setEdit] = useState(false);
  const [update, setUpdate] = useState(surat);

  const router = useRouter();

  const handleUpdate = async (e) => {
    e.preventDefault();
    axios
      .patch(`/api/jenis/${surat.id}`, update)
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
          className='flex justify-end items-center text-white ml-1 p-2 rounded-md bg-gray-600 hover:bg-gray-500 cursor-pointer'
        >
          <HiOutlinePencilSquare size={18} />
          <span className=' ml-1 font-medium'>Update</span>
        </div>
      </div>
      <div>
        {open && (
          <div className='bg-black/50 fixed inset-0'>
            <div className=' flex justify-center items-center h-full'>
              <div className='flex flex-col items-end bg-slate-300 w-1/3 rounded-md p-5 pt-1'>
                <form className='w-full' onSubmit={handleUpdate}>
                  <h1 className='text-2xl text-center py-4'>Edit data</h1>
                  <InputForm
                    label='Jenis Surat'
                    type='text'
                    name='nama'
                    placeholder='type your data....'
                    value={update.nama}
                    change={handleChange}
                    errorMessage='Data should be uppercase the first character'
                    pattern='^[A-Z][A-z\s]{1,}$'
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
    </div>
  );
}
