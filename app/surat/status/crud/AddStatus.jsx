'use client';
import { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import { HiOutlineXMark, HiOutlineCheck } from 'react-icons/hi2';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import InputForm from '@/components/form/Input';

export default function AddStatus() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState({});

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios
      .post('/api/status', input)
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
          <div className='text-lg p-2 font-semibold'>Data Status Surat</div>
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
            <div className=' flex justify-center items-center h-full'>
              <div className='flex flex-col items-end bg-slate-300 rounded-md w-1/3 p-5 pt-1'>
                <form className='w-full' onSubmit={handleSubmit}>
                  <h1 className='text-2xl text-center py-3'>Add new data</h1>
                  <InputForm
                    label='Status Surat'
                    type='text'
                    name='nama'
                    placeholder='type your data....'
                    value={input.nama}
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
