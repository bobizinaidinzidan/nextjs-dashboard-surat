'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { HiOutlineXMark, HiOutlineEye, HiOutlineCheck } from 'react-icons/hi2';
export default function Testing({ surat }) {
  const [open, setDelete] = useState(false);

  const router = useRouter();

  const handleDelete = async (e) => {
    const data = `/fileSurat/${surat.file}`;
    console.log(e.target.files[data]);
    // console.log('hapus', surat.id);
    // const result = await fetch(`/api/allsurat/${surat.id}`, {
    //   method: 'DELETE',
    // });
    // router.refresh();
    // setDelete(false);
  };
  return (
    <div>
      <div>
        <div
          onClick={() => setDelete(true)}
          className=' text-white p-1.5 rounded-md bg-blue-600 hover:bg-blue-400 cursor-pointer'
        >
          <HiOutlineEye size={18} />
          {/* <span className=' ml-1 font-medium'>Delete</span> */}
        </div>
      </div>
      <div>
        {open && (
          <div className='bg-black/50 fixed inset-0'>
            <div className='overflow-auto flex justify-center items-center h-full'>
              <div className='flex flex-col bg-white items-center rounded-md  mb-auto mt-auto w-7/12 p-5 pt-1'>
                <div
                  onClick={() => setDelete(false)}
                  className='flex justify-end items-center text-indigo-700 ml-1 p-2 rounded-md  hover:bg-indigo-100 cursor-pointer'
                >
                  <HiOutlineXMark className='h-5 w-5' />
                  <span className=' ml-1 font-medium'>Kembali</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
