'use client';
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import {
  HiOutlinePencilSquare,
  HiOutlineXMark,
  HiOutlineCheck,
} from 'react-icons/hi2';

const ViewUser = async ({ surat }) => {
  const [open, setEdit] = useState(false);
  const [inputs, setInputs] = useState(surat);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios
      .patch(`/api/user/${surat.id}`, inputs)
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
    setInputs((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <div>
      <div>
        <div
          onClick={() => setEdit(true)}
          className='flex justify-end items-center text-white ml-1 p-2 rounded-md bg-gray-700 hover:bg-gray-500 cursor-pointer'
        >
          <HiOutlinePencilSquare size={18} />
          <span className=' ml-1 font-medium'>View</span>
        </div>
      </div>
      {open && (
        <div className='bg-black/50 fixed inset-0'>
          <div className=' flex justify-center items-center h-full'>
            <div className='flex flex-col items-end bg-slate-300 rounded-md w-1/3 p-5 pt-1'>
              <form className='w-full'>
                <h1 className='text-2xl py-3'>Edit data</h1>
                <label className='my-2'>Nama</label>
                <input
                  type='text'
                  name='nama'
                  placeholder='type your name...'
                  className='w-full p-2 my-2 rounded-md'
                  value={result.nama}
                  onChange={handleChange}
                />
                <label className='my-2'>Email</label>
                <input
                  type='email'
                  name='email'
                  placeholder='example.@gmail.com'
                  className='w-full p-2 my-2 rounded-md'
                  value={inputs.email || ''}
                  onChange={handleChange}
                />
                <label className='my-2'>Phone</label>
                <input
                  type='tel'
                  name='telp'
                  placeholder='type your phone number...'
                  className='w-full p-2 my-2 rounded-md'
                  value={inputs.telp || ''}
                  onChange={handleChange}
                />
                <label className='my-2'>Username</label>
                <input
                  type='text'
                  name='username'
                  placeholder='type your username...'
                  className='w-full p-2 my-2 rounded-md'
                  value={inputs.username || ''}
                  onChange={handleChange}
                />
                <label className='my-2'>Password</label>
                <input
                  type='password'
                  minlength='6'
                  name='password'
                  placeholder='min 6 character...'
                  className='w-full p-2 my-2 rounded-md'
                  value={inputs.password || ''}
                  onChange={handleChange}
                  required
                />
                <div className='flex justify-center w-full mt-4'>
                  <div
                    onClick={() => setEdit(false)}
                    className='flex justify-end items-center text-indigo-700 ml-1 p-2 rounded-md  hover:bg-indigo-100 cursor-pointer'
                  >
                    <HiOutlineXMark className='h-5 w-5' />
                    <span className=' ml-1 font-semibold'>Cancel</span>
                  </div>
                  <div
                    onClick={handleSubmit}
                    className='flex justify-end items-center text-indigo-700 ml-1 p-2 rounded-md hover:bg-indigo-100 cursor-pointer'
                  >
                    <HiOutlineCheck className='h-5 w-5' />
                    <span className='ml-1 font-semibold'>Save</span>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ViewUser;
