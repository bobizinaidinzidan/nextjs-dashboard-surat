import AddSurat from './crud/AddSurat';
import DeleteSurat from './crud/DeleteSurat';
// import UpdateSurat from './crud/UpdateSurat';
import ViewSurat from './crud/ViewSurat';

import prisma from '@/app/libs/prisma';
// import ReadSurat from './crud/Readpdf';
async function getData() {
  return await prisma.surat.findMany({
    include: {
      jenis: true,
      sifat: true,
    },
  });
}

async function getDataJenis() {
  return await prisma.jenisSurat.findMany();
}
async function getDataSifat() {
  return await prisma.sifatSurat.findMany();
}
const AllSurat = async () => {
  const allSurat = await getData();
  const allJenis = await getDataJenis();
  const allSifat = await getDataSifat();

  return (
    <div className='rounded-lg bg-white ml-5 mr-5 pl-5 pr-7 pt-6 pb-6'>
      <div className='grid'>
        <div className='col-12'>
          <div className='ml-2 mt-4 border-y bg-slate-100 border-slate-300 divide-slate-300'>
            <AddSurat jenis={allJenis} sifat={allSifat} />
          </div>
        </div>
        <div className='col-12'>
          <div className='overflow-auto rounded-b ml-2 p-3 bg-gray-100 shadow'>
            <table className='w-full'>
              <thead className='border-y border-slate-300 divide-y divide-slate-300 p-4'>
                <tr className='font-medium p-4'>
                  <th className='w-20 p-3 text-base font-semibold tracking-wide text-center'>
                    #
                  </th>
                  <th className='p-3 text-base font-semibold tracking-wide text-left'>
                    No Surat
                  </th>
                  <th className='p-3 text-base font-semibold tracking-wide text-left'>
                    Perihal/Hal
                  </th>
                  <th className='w-24 p-3 text-base font-semibold tracking-wide text-center'>
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className='bg-gray-50 divide-y divide-grey-100'>
                {allSurat.map((AllSurat, index) => (
                  <tr key={AllSurat.id}>
                    <td className='p-3 text-sm text-gray-700 text-center whitespace-nowrape'>
                      {index + 1}
                    </td>
                    <td className='p-3 text-sm text-gray-700 whitespace-nowrape'>
                      {AllSurat.nosurat}
                    </td>
                    <td className='p-3 text-sm text-gray-700 whitespace-nowrape'>
                      {AllSurat.perihal}
                    </td>
                    <td className='p-2 text-sm text-gray-700 whitespace-nowrape'>
                      <div className='flex justify-end'>
                        <ViewSurat surat={AllSurat} />
                        {/* <Update */}
                        <DeleteSurat surat={AllSurat} />
                        {/* <ReadSurat surat={AllSurat} /> */}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>{' '}
        </div>
      </div>
    </div>
  );
};
export default AllSurat;
