// 'use client';
export default function GridComponets(props) {
  return (
    <>
      <div className='flex justify-content-between mb-5'>
        <div>
          <span className='block text-900 font-medium mb-3'>{props.title}</span>
        </div>
        <div
          className='flex align-items-center justify-center bg-cyan-100 ml-2 p-1.5 rounded-lg'
          style={{ width: '2rem', height: '2rem' }}
        >
          {props.icon}
        </div>
      </div>{' '}
      <div className='text-white font-base text-xl'>{props.nilai}</div>
    </>
  );
}
