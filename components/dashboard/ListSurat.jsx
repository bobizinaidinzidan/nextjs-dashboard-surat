import { FaRegEnvelope } from 'react-icons/fa';
import moment from 'moment';
import 'moment/locale/id';
moment.locale('id');

export default function ListSurat({ dataSurat }) {
  return (
    <div className='w-full col-span-1 relative lg:[55vh] h-[50vh] m-auto p-4 border rounded-lg bg-white overflow-scroll'>
      <h1 className='text-lg'>List Surat Terbaru: </h1>
      <ul>
        {dataSurat.map((surat, index) => (
          <li
            key={index}
            className='bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 flex items-center cursor-pointer'
          >
            <div className='bg-indigo-100 rounded-md p-2 mr-2'>
              <FaRegEnvelope className='w-5 h-5 text-indigo-600 rounded-md' />
            </div>
            <div className=''>
              <p className='font-medium text-sm'>{surat.nosurat}</p>
              <p className='text-gray-500 right-6 text-xs'>
                {moment(surat.tglbuat).startOf('day').fromNow()}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
