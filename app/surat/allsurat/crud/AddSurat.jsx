'use client';
import { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import { HiOutlineXMark, HiOutlineCheck } from 'react-icons/hi2';
import { useRouter } from 'next/navigation';
import TextAreaForm from '@/components/form/TextArea';
import InputForm from '@/components/form/Input';
import DropdownForm from '@/components/form/Dropdown';

export default function AddSurat({ jenis, sifat }) {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState({});
  // const [inputFile, setInputFile] = useState(null);
  const [file, setFile] = useState();

  const router = useRouter();

  const handleSubmit = async (e) => {
    input.file = file;

    e.preventDefault();
    if (!file) return;
    try {
      const data = new FormData();
      data.set('file', input.file);
      data.set('nosurat', input.nosurat);
      data.set('perihal', input.perihal);
      data.set('nama', input.nama);
      data.set('alamat', input.alamat);
      data.set('jenisId', input.jenisId);
      data.set('sifatId', input.sifatId);
      data.set('pengirim', input.pengirim);
      data.set('tglbuat', input.tglbuat);
      const res = await fetch('/api/allsurat', {
        method: 'POST',
        body: data,
      });
      if (!res.ok) throw new Error(await res.text());
      router.refresh();
      setOpen(false);
      setInput({});
    } catch (e) {
      console.error(e);
    }
  };
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
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
          <div className='text-lg p-2 font-semibold'>Data All Surat</div>
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
              <div className='flex flex-col items-end bg-slate-300 rounded-md mt-auto mb-auto w-1/2 md:w-1/3 p-4 pt-1'>
                <form className='w-full' onSubmit={handleSubmit}>
                  <h1 className='text-2xl text-center py-3'>Add new data</h1>
                  <InputForm
                    label='No Surat'
                    type='text'
                    name='nosurat'
                    placeholder='Input the correct letter data.....'
                    value={input.nosurat}
                    change={handleChange}
                    errorMessage='Please enter the correctly letter data'
                    // pattern={`^[a-zA-Z0-9\s!"#$%&'()*+,-./:;<=>?@[\]^_{|}~]*$`}
                    required='true'
                  />
                  <InputForm
                    label='Perihal/Hal Surat'
                    type='text'
                    name='perihal'
                    placeholder='Input the correct letter data.....'
                    value={input.perihal}
                    change={handleChange}
                    errorMessage='Please enter the correctly letter data'
                    // pattern='^[A-Z][A-z\s]{1,}$'
                    required='true'
                  />
                  <InputForm
                    label='Nama Surat'
                    type='text'
                    name='nama'
                    placeholder='Input the correct letter data.....'
                    value={input.nama}
                    change={handleChange}
                    errorMessage={`Don't leave this area empty`}
                    // pattern='^[A-Z][A-z\s]{1,}$'
                    required='true'
                  />
                  <DropdownForm
                    label='Jenis Surat'
                    name='jenisId'
                    value={input.jenisId}
                    change={handleChange}
                    data={jenis}
                    errorMessage='required to select one of the data'
                    // pattern=''
                    required='true'
                  />
                  <DropdownForm
                    label='Sifat Surat'
                    name='sifatId'
                    value={input.sifatId}
                    change={handleChange}
                    data={sifat}
                    errorMessage='required to select one of the data'
                    // pattern=''
                    required='true'
                  />
                  <InputForm
                    label='Pengirim Surat'
                    type='text'
                    name='pengirim'
                    placeholder='Input the correct letter data.....'
                    value={input.pengirim}
                    change={handleChange}
                    errorMessage='Data should be uppercase the first character'
                    pattern='^[A-Z][A-z\s]{1,}$'
                    required='true'
                  />
                  <label className='my-2'>File Surat</label>
                  <input
                    type='file'
                    name='file'
                    className='w-full p-2 my-2 bg-white rounded-md '
                    // value={input.file || ''}
                    onChange={handleFileChange}
                    accept='application/pdf'
                  />
                  <InputForm
                    label='Tanggal Surat dibuat'
                    type='Date'
                    name='tglbuat'
                    placeholder='00/00/0000'
                    value={input.tglbuat}
                    change={handleChange}
                    errorMessage='Choose date first'
                    // pattern=''
                    required='true'
                  />
                  <TextAreaForm
                    label='Alamat Surat'
                    name='alamat'
                    value={input.alamat}
                    change={handleChange}
                    placeholder='Input the correct letter data....'
                    errorMessage={`Don't leave this area empty`}
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
