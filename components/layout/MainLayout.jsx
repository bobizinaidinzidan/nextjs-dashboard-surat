'use client';
import Header from './Header';
import Sidebar from './Sidebar';
import { MenuContext } from '@/context/MenuContext';
import React, { useContext } from 'react';

const MainLayout = ({ children }) => {
  const { open, toggle } = useContext(MenuContext);

  return (
    <div className='w-screen min-h-screen'>
      <Header />
      <div className='flex justify-start items-start p-3 pt-1 pl-6'>
        <Sidebar />
        <main className='flex-1'>{children}</main>
      </div>
    </div>
  );
};

export default MainLayout;
