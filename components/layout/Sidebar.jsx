'use client';
import Link from 'next/link';
import React, { useContext, useState } from 'react';
import { MenuContext } from '@/context/MenuContext';
// React Icons
import { SiSinglestore } from 'react-icons/si';
import { AiOutlineClose } from 'react-icons/ai';
import {
  FaEnvelopesBulk,
  FaEnvelopeOpen,
  FaEnvelopeCircleCheck,
} from 'react-icons/fa6';
import {
  FaAngleDown,
  FaAngleRight,
  FaUsers,
  FaHome,
  FaEnvelope,
} from 'react-icons/fa';
export default function Sidebar() {
  const { open, toggle } = useContext(MenuContext);
  const [togle, setOpen] = useState(false);
  // const { pathname } = useRouter();
  const closeSeideBarHandler = () => {
    toggle();
  };

  return (
    // <aside
    //   className={`bg-white top-4 left-4 lg:fixed lg:block lg:top-16 lg:left-8 rounded-lg overflow-hidden transition-all duration-200 ${
    //     open ? 'w-60 p-4 block fixed' : 'w-0 hidden'
    //   } lg:w-60 lg:p-4 z-50 shadow-sm`}
    // ></aside>
    <div>
      <aside
        className={`bg-white drop-shadow-xl overflow-hidden
          ${
            open ? 'w-80 p-4 fixed inset-0 rounded-tr-xl md:static' : 'w-0'
          } lg:w-80 lg:p-4 md:rounded-lg
                    shadow-sm`}
      >
        {/* md:w-80 md:p-4 md:fixed-none md:inset-none */}
        <ul>
          <li className='flex justify-end items-center md:hidden'>
            <div className='flex justify-end w-full'>
              <div
                onClick={closeSeideBarHandler}
                className='flex justify-end text-indigo-700 p-2 rounded-md  hover:bg-indigo-100 cursor-pointer'
              >
                <AiOutlineClose size={18} />
              </div>
            </div>

            <br />
          </li>
          <li
            onClick={() => {
              setOpen(false);
              closeSeideBarHandler();
            }}
            className='flex justify-start items-center hover:bg-slate-200 hover:text-blue-800 rounded-xl p-2 cursor-pointer'
          >
            <FaHome className='text-slate-700 mr-2 w-5 h-5' />
            <Link href='/'>Dashboard</Link>
          </li>
          <li className='flex flex-col justify-start items-start '>
            <div
              onClick={() => setOpen((prev) => !prev)}
              className='w-full flex flex-row justify-start items-center hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2 cursor-pointer'
            >
              <FaEnvelopesBulk className='text-slate-700	mr-2 w-5 h-5' />
              <h3 className='flex-1'>Data Surat</h3>
              <FaAngleRight
                className={` ${
                  togle ? 'opacity-0 h-0' : ''
                } transition-all duration-100 overflow-hidden top-12 top-0  `}
              />
              <FaAngleDown
                className={` ${
                  togle ? '' : 'opacity-0 h-0 '
                } transition-all duration-100 overflow-hidden top-12 bottom-0  `}
              />
            </div>
            <ul
              className={` mt-1 ${
                togle ? 'w-full pl-8 mt-1' : 'opacity-0 h-0'
              } transition-all duration-100 overflow-hidden top-12 right-0  `}
            >
              <li
                onClick={closeSeideBarHandler}
                className={`flex justify-start items-center pl-2 pt-1 pb-1 gap-3 my-1 hover:bg-blue-200 hover:text-blue-800 rounded-md cursor-pointer`}
              >
                <FaEnvelopeCircleCheck className='text-slate-700' />
                <Link href='/surat/allsurat'>All Surat</Link>
              </li>
              <li
                onClick={closeSeideBarHandler}
                className={`flex justify-start items-center pl-2 pt-1 pb-1 gap-3 my-1 hover:bg-blue-200 hover:text-blue-800 rounded-md cursor-pointer`}
              >
                <SiSinglestore className='text-slate-700' />
                <Link href='/surat/jenis'>Jenis Surat</Link>
              </li>
              <li
                onClick={closeSeideBarHandler}
                className={`flex justify-start items-center pl-2 pt-1 pb-1 gap-3 my-1 hover:bg-blue-200 hover:text-blue-800 rounded-md cursor-pointer`}
              >
                <SiSinglestore className='text-slate-700' />
                <Link href='/surat/sifat'>Sifat Surat</Link>
              </li>
              <li
                onClick={closeSeideBarHandler}
                className={`flex justify-start items-center pl-2 pt-1 pb-1 gap-3 my-1 hover:bg-blue-200 hover:text-blue-800 rounded-md cursor-pointer`}
              >
                <SiSinglestore className='text-slate-700' />
                <Link href='/surat/status'>Status Surat</Link>
              </li>
            </ul>
            <div
              onClick={() => setOpen(false)}
              className={`fixed opacity-50 z-0 ${
                togle ? 'block' : 'hidden'
              }transition-all duration-200 overflow-hidden top-12 left-0`}
            ></div>
          </li>
          <li
            onClick={() => {
              setOpen(false);
              closeSeideBarHandler();
            }}
            className='flex justify-start items-center hover:bg-slate-200 hover:text-blue-800 rounded-xl p-2 cursor-pointer'
          >
            <FaEnvelope className='text-slate-700 mr-2 w-5 h-5' />
            <Link href='/suratmasuk'>Surat Masuk</Link>
          </li>
          <li
            onClick={() => {
              setOpen(false);
              closeSeideBarHandler();
            }}
            className='flex justify-start items-center hover:bg-slate-200 hover:text-blue-800 rounded-xl p-2 cursor-pointer'
          >
            <FaEnvelopeOpen className='text-slate-700 mr-2 w-5 h-5' />
            <Link href='/suratkeluar'>Surat Keluar</Link>
          </li>
          <li
            onClick={() => {
              setOpen(false);
              closeSeideBarHandler();
            }}
            className='flex justify-start items-center hover:bg-slate-200 hover:text-blue-800 rounded-xl p-2 cursor-pointer'
          >
            <FaUsers className=' text-slate-700 mr-2 w-5 h-5' />
            <Link href='/user'>User</Link>
          </li>
        </ul>
      </aside>
    </div>
  );
}
