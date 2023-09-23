'use client';
import { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import { HiOutlineXMark, HiOutlineCheck } from 'react-icons/hi2';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import InputForm from '@/components/form/Input';

export default function AddTujuan() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState({});

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios
      .post('/api/user', input)
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
          <div className='text-lg p-2 font-semibold'>Data User</div>
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
              <div className='flex flex-col items-end bg-slate-300 rounded-md mt-auto mb-auto w-1/2 md:w-1/3 p-5'>
                <form className='w-full' onSubmit={handleSubmit}>
                  <h1 className='text-2xl text-center py-3'>Add new data</h1>
                  <InputForm
                    label='Nama Lengkap'
                    type='text'
                    name='name'
                    placeholder='type your fullname....'
                    value={input.name}
                    change={handleChange}
                    errorMessage='Full name should be uppercase the first character'
                    pattern='^[A-Z][A-z\s]{1,}$'
                    required='true'
                  />
                  <InputForm
                    label='Email'
                    type='email'
                    name='email'
                    placeholder='example@gmail.com'
                    value={input.email}
                    change={handleChange}
                    errorMessage='Email should be a valid email address!'
                    required='true'
                  />
                  <InputForm
                    label='Username'
                    type='text'
                    name='username'
                    placeholder='type your username....'
                    value={input.username}
                    change={handleChange}
                    errorMessage={`Username should be a 3-20 characters and shouldn't include any special characters!`}
                    pattern='^[A-Za-z0-9]{3,20}$'
                    required='true'
                  />
                  <InputForm
                    label='Password'
                    type='password'
                    name='password'
                    placeholder='type your password....'
                    value={input.password}
                    change={handleChange}
                    errorMessage={`Password should be a 8-20 characters at least 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special characters!`}
                    pattern='^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[`@#$&*-_,.?!]).{8,20}$'
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
