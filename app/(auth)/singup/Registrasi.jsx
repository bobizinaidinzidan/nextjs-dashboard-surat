'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
const SignUpForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !username || !password) {
      setError("Don't leave the fields blank!");
      return;
    }

    try {
      const resUserExists = await fetch('/api/userExists', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
      const { exists } = await resUserExists.json();

      if (exists) {
        setError(`User with this Email(${email}) already exists`);
        return;
      }
      const userExists = await fetch('api/usernameExists', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username }),
      });

      const { existsUser } = await userExists.json();

      if (existsUser) {
        setError(`User with this username(${username}) already exists`);
        return;
      }
      const res = await fetch('/api/singup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          username,
          password,
        }),
      });
      if (res.ok) {
        const form = e.target;
        router.push('/login');
        form.reset();
      } else {
        console.log('Registration Failed');
      }
    } catch (error) {
      console.log('Error during registration', error);
    }
  };

  return (
    <section className='flex justify-center items-center overflow-hidden h-full'>
      <div className='flex flex-col overflow-auto sm:overflow-hidden w-full m-2 pt-2 pb-6 sm:pb-0 sm:pt-20 sm:m-0 sm:w-5/12'>
        <div className='relative space-y-4'>
          <Image
            className='mx-auto h-14 w-auto'
            src='/images/lpse1.png'
            alt='Your Company'
            width={300}
            height={300}
          />
          <h1 className='text-center text-4xl pb-2 sm:pb-6 font-medium tracking-tight text-gray-900'>
            Create your account
          </h1>
        </div>
        <div className='rounded-xl flex-auto bg-white p-5 shadow-2xl shadow-gray-900/10 sm:mx-0 sm:flex-none'>
          {error && (
            <div className='text-center'>
              <p className='font-medium text-red-500'>{error}</p>
            </div>
          )}
          <form onSubmit={handleSubmit}>
            <div className='space-y-6'>
              <div className='grid w-full'>
                <div className='col-12'>
                  <div className='grid gap-x-4 gap-y-2 grid-cols-1 md:grid-cols-2 '>
                    <div className='col-12 xl:col-6 xl:col-3'>
                      <label className='text-lg font-serif font-semibold mt-2'>
                        Nama Lengkap
                      </label>
                      <input
                        name='name'
                        type='text'
                        onChange={(e) => setName(e.target.value)}
                        autoComplete='name'
                        required
                        className='block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                      />
                    </div>
                    <div className='col-12 xl:col-6 xl:col-3'>
                      <label className='text-lg font-serif font-semibold mt-2'>
                        Email
                      </label>
                      <input
                        id='email'
                        name='email'
                        type='email'
                        onChange={(e) => setEmail(e.target.value)}
                        autoComplete='email'
                        required
                        className='block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                      />
                    </div>
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
                        className='block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                      />
                    </div>
                  </div>
                </div>
              </div>
              <button
                type='submit'
                className='mt-5 p-2 w-full border rounded-lg text-white font-medium bg-indigo-600 hover:bg-indigo-500'
              >
                Create Account
              </button>
            </div>
          </form>
          {/* <div className='mx-auto my-2 flex w-full items-center justify-evenly before:mr-4 before:block before:h-px before:flex-grow before:bg-stone-400 after:ml-4 after:block after:h-px after:flex-grow after:bg-stone-400'>
            or
          </div>
          <Link
            className='flex justify-center p-2 rounded-lg bg-slate-100 hover:bg-slate-200'
            href='/login'
          >
            I Have Acoount
          </Link> */}
        </div>
        <p className='mt-2 text-center font-medium text-sm text-gray-600'>
          Already have an account?{' '}
          <a
            href='/login'
            className='font-semibold leading-6 text-indigo-600 hover:text-indigo-500'
          >
            Login
          </a>
        </p>
      </div>
    </section>
  );
};
export default SignUpForm;
