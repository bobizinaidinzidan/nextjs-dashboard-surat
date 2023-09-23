'use client';
import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
export default function FormLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await signIn('credentials', {
        username,
        password,
        redirect: false,
      });
      if (res.error) {
        setError('Invalid Username or Password');
        return;
      }
      router.replace('/');
    } catch (error) {
      console.log(error);
    }

    // axios
    //   .post('/api/user', input)
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   })
    //   .finally(() => {
    //     // setInput({});
    //     router.refresh();
    //     setOpen(false);
    //     setInput({});
    //   });
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInput((prevState) => ({ ...prevState, [name]: value }));
  };
  return (
    <section className='flex justify-center items-center overflow-hidden h-full'>
      <div className='flex flex-col overflow-auto sm:overflow-hidden w-full m-2 pt-2 pb-6 sm:pb-0 sm:pt-20 sm:m-0 sm:w-2/6'>
        <div className='relative space-y-4'>
          <Image
            className='mx-auto h-14 w-auto'
            src='/images/lpse1.png'
            alt='Your Company'
            width={300}
            height={300}
          />
          <h1 className='text-center text-4xl pb-2 sm:pb-6 font-medium tracking-tight text-gray-900'>
            Sign in to your account
          </h1>
        </div>
        <div className='rounded-xl flex-auto bg-white p-6 shadow-2xl shadow-gray-900/10 sm:mx-0 sm:flex-none'>
          {error && (
            <div className='text-center'>
              <p className='font-medium text-red-500'>{error}</p>
            </div>
          )}
          <form onSubmit={handleSubmit}>
            <div className='space-y'>
              <div className='col-12 xl:col-6 xl:col-3'>
                <label className='text-lg font-serif font-semibold mt-2'>
                  Username
                </label>
                <input
                  name='username'
                  type='text'
                  onChange={(e) => setUsername(e.target.value)}
                  autoComplete='username'
                  required
                  placeholder='admin'
                  className='block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                />
              </div>
              <div className='col-12 xl:col-6 xl:col-3'>
                <label className='text-lg font-serif font-semibold mt-2'>
                  Password
                </label>
                <input
                  id='password'
                  name='password'
                  type='password'
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete='current-password'
                  required
                  placeholder='Admin123'
                  className='block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                />
              </div>
              <button
                type='submit'
                className='mt-5 p-2 w-full border rounded-lg text-white font-medium bg-indigo-600 hover:bg-indigo-500'
              >
                Login
              </button>
            </div>
          </form>
          {/* <div className='mx-auto my-2 flex w-full items-center justify-evenly before:mr-4 before:block before:h-px before:flex-grow before:bg-stone-400 after:ml-4 after:block after:h-px after:flex-grow after:bg-stone-400'>
            or
          </div>
          <Link
            className='flex justify-center p-2 rounded-lg bg-slate-100 hover:bg-slate-200'
            href='/form'
          >
            I Don't Have Acoount
          </Link> */}
        </div>
        <p className='mt-2 text-center font-medium text-sm text-gray-600'>
          I Don't Have Acoount!{' '}
          <a
            href='/singup'
            className='font-semibold leading-6 text-indigo-600 hover:text-indigo-500'
          >
            SingUp
          </a>
        </p>
      </div>
    </section>
  );
}
