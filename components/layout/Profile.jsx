'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
// import { useRouter } from 'next/navigation';
import { FaUserCircle, FaSignOutAlt } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { signOut } from 'next-auth/react';
export default function Profile() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const { data: session } = useSession();

  return (
    <div>
      <div>
        <div
          onClick={() => setOpen(true)}
          className='mr-14 rounded-lg p-2 hover:bg-indigo-100 cursor-pointer'
        >
          <FaUserCircle size={20} className='text-slate-700 ' />
        </div>
      </div>
      <div>
        {open && (
          <div className='fixed inset-0'>
            <div className=' flex justify-end items-center h-full'>
              <div className='flex  mt-52 flex-col rounded-b-lg bg-slate-300 w-auto p-4 pt-1 pb-2 mr-12'>
                <div className='flex justify-end w-full'>
                  <div
                    onClick={() => setOpen(false)}
                    className='flex justify-end text-indigo-700 p-2 rounded-md  hover:bg-indigo-100 cursor-pointer'
                  >
                    <AiOutlineClose size={18} />
                  </div>
                </div>
                {session ? (
                  <ul>
                    <li>Nama : {session?.user?.name}</li>
                    <li>Email : {session?.user?.email}</li>
                    <li>
                      <div className='flex justify-center'>
                        <button
                          onClick={() => {
                            signOut();
                            router.push('/login');
                          }}
                          className='flex items-center space-y-2 bg-red-500 p-1 mt-1 rounded-md text-white'
                        >
                          {' '}
                          <FaSignOutAlt size={18} className='mr-2' />
                          Logout
                        </button>
                      </div>
                    </li>
                  </ul>
                ) : (
                  <div className='text-center'>
                    <p>Data not found login first</p>
                    <Link
                      className='font-semibold underline leading-6 text-indigo-600 hover:text-indigo-500'
                      href='/login'
                    >
                      Login
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
