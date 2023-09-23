'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  HiOutlineXMark,
  HiOutlineTrash,
  HiOutlineCheck,
} from 'react-icons/hi2';
export default function DeleteUser({ surat }) {
  const [open, setDelete] = useState(false);

  const router = useRouter();

  const handleDelete = async () => {
    console.log('hapus', surat.id);
    const result = await fetch(`/api/user/${surat.id}`, {
      method: 'DELETE',
    });
    router.refresh();
    setDelete(false);
  };
  return (
    <div>
      <div>
        <div
          onClick={() => setDelete(true)}
          className='flex justify-end items-center text-white ml-1 p-2 rounded-md bg-red-600 hover:bg-red-500 cursor-pointer'
        >
          <HiOutlineTrash size={18} />
          <span className=' ml-1 font-medium'>Delete</span>
        </div>
      </div>
      <div>
        {open && (
          <div className='bg-black/50 fixed inset-0'>
            <div className=' flex justify-center items-center h-full'>
              <div className='flex flex-col items-center rounded-md bg-slate-300 w-1/3 p-5 pt-1'>
                <h1 className='text-2xl py-3'>Delete data</h1>
                <p className='pb-2'>
                  are you sure want to delete this data "{surat.username}" ?
                </p>
                <div className='flex justify-center w-full mt-4'>
                  <div
                    onClick={() => setDelete(false)}
                    className='flex justify-end items-center text-indigo-700 ml-1 p-2 rounded-md  hover:bg-indigo-100 cursor-pointer'
                  >
                    <HiOutlineXMark className='h-5 w-5' />
                    <span className=' ml-1 font-medium'>Cancel</span>
                  </div>
                  <div
                    onClick={handleDelete}
                    className='flex justify-end items-center text-indigo-700 ml-1 p-2 rounded-md  hover:bg-indigo-100 cursor-pointer'
                  >
                    <HiOutlineCheck className='h-5 w-5' />
                    <span className='ml-1 font-medium'>Save</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
