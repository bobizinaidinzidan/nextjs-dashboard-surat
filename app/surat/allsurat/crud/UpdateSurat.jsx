'use client';
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import {
  HiOutlinePencilSquare,
  HiOutlineXMark,
  HiOutlineCheck,
} from 'react-icons/hi2';

const UpdateSurat = ({ jenis, sifat, pengirim, surat }) => {
  const [open, setEdit] = useState(false);
  const [update, setUpdate] = useState(surat);

  const router = useRouter();

  // console.log(jenis.id);
  const handleSubmit = async (e) => {
    update.jenisId = parseInt(update.jenisId);
    update.pengirimId = parseInt(update.pengirimId);
    update.sifatId = parseInt(update.sifatId);
    console.log(update);
    e.preventDefault();
    axios
      .patch(`/api/allsurat/${surat.id}`, update)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        router.refresh();
        setEdit(false);
        setUpdate(update);
      });
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUpdate((prevState) => ({ ...prevState, [name]: value }));
  };

  // async function getData() {
  //   const res = await fetch('http://localhost:3000/api/users');

  //   if (!res.ok) {
  //     throw new Error('Failed to fetch data');
  //   }

  //   return res.json();
  // }

  return (
    <div>
      <div>
        <div
          onClick={() => setEdit(true)}
          className='flex justify-end items-center text-white ml-1 p-2 rounded-md bg-gray-700 hover:bg-gray-500 cursor-pointer'
        >
          <HiOutlinePencilSquare size={18} />
          <span className=' ml-1 font-medium'>Edit</span>
        </div>
      </div>
      {open && (
        <div className='bg-black/50 fixed inset-0'>
          <div className='overflow-auto flex justify-center items-center h-full'>
            <div className='flex flex-col items-end bg-slate-300 rounded-md mt-auto mb-auto w-1/2 md:w-1/3 p-5 pt-1'>
              <form className='w-full' onSubmit={handleSubmit}>
                <h1 className='text-2xl text-center py-3'>Edit data</h1>
                <label className='my-2'>No Surat</label>
                <input
                  type='text'
                  name='nosurat'
                  placeholder='type your data...'
                  className='w-full p-1.5 my-2 rounded-md'
                  value={update.nosurat || ''}
                  onChange={handleChange}
                />
                <label className='my-2'>Perihal/Hal Surat</label>
                <input
                  type='text'
                  name='perihal'
                  placeholder='type your data...'
                  className='w-full p-1.5 my-2 rounded-md'
                  value={update.perihal || ''}
                  onChange={handleChange}
                />
                <label className='my-2'>Nama Surat</label>
                <input
                  type='text'
                  name='nama'
                  placeholder='type your data...'
                  className='w-full p-2 my-2 rounded-md'
                  value={update.nama || ''}
                  onChange={handleChange}
                />
                <label className='my-2'>Jenis Surat</label>
                <select
                  name='jenisId'
                  value={update.jenisId || ''}
                  onChange={handleChange}
                  className='w-full p-2 my-2 rounded-md'
                >
                  <option value=''>--Please choose an option--</option>
                  {jenis.map((Jenis) => (
                    <option value={Jenis.id} key={Jenis.id}>
                      {Jenis.nama}
                    </option>
                  ))}
                </select>
                <label className='my-2'>Sifat Surat</label>
                <select
                  name='sifatId'
                  value={update.sifatId || ''}
                  onChange={handleChange}
                  className='w-full p-2 my-2 rounded-md'
                >
                  <option value=''>--Please choose an option--</option>
                  {sifat.map((Sifat) => (
                    <option value={Sifat.id} key={Sifat.id}>
                      {Sifat.nama}
                    </option>
                  ))}
                </select>
                <label className='my-2'>Pengirim Surat</label>
                <select
                  name='pengirimId'
                  value={update.pengirimId || ''}
                  onChange={handleChange}
                  className='w-full p-2 my-2 rounded-md'
                >
                  <option value=''>--Please choose an option--</option>
                  {pengirim.map((Pengirim) => (
                    <option value={Pengirim.id} key={Pengirim.id}>
                      {Pengirim.nama}
                    </option>
                  ))}
                </select>
                <label className='my-2'>File Surat</label>
                <input
                  type='text'
                  name='file'
                  placeholder='type your data...'
                  className='w-full p-2 my-2 rounded-md'
                  value={update.file || ''}
                  onChange={handleChange}
                />
                <label className='my-2'>Alamat Surat</label>
                <textarea
                  name='alamat'
                  value={update.alamat || ''}
                  onChange={handleChange}
                  className='w-full p-2 my-2 rounded-md'
                  placeholder='Type your data address...'
                ></textarea>
                <div className='flex justify-center w-full mt-4'>
                  <button
                    className='flex justify-end font-semibold items-center text-indigo-700 ml-1 p-2 rounded-md  hover:bg-indigo-100 cursor-pointer'
                    type='button'
                    onClick={() => {
                      setEdit(false);
                      setUpdate(surat);
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
  );
};

export default UpdateSurat;
