'use client';

import React, { useContext } from 'react';
import { MenuContext } from '@/context/MenuContext';
import Image from 'next/image';
import { FaBars } from 'react-icons/fa';
import Profile from './Profile';
const header = () => {
  const { toggle } = useContext(MenuContext);
  return (
    <div className='bg-white flex justify-between items-center px-4 h-18 mb-4 drop-shadow pl-6'>
      <div className='flex justify-start p-3'>
        <Image
          src='/images/lpse-node.png'
          width={45}
          height={1}
          // widt={'true'}
          alt='logo'
        />
        <span
          className='p-2 text-2xl font-medium'
          style={{ marginLeft: '5px' }}
        >
          LPSE
        </span>
      </div>
      <div className='flex justify-center items-center gap-3'>
        <div
          onClick={toggle}
          className='flex justify-end p-2 rounded-md  hover:bg-indigo-100 cursor-pointer lg:hidden'
        >
          <FaBars size={18} className='text-slate-700' />
        </div>
        <Profile />
      </div>
    </div>
  );
};

export default header;
