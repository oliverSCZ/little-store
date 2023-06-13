import React from 'react'
const columnas = [];
for (let i = 0; i < 4 ; i++) {
  columnas.push(
    <div className=' bg-slate-200 flex flex-col justify-center p-5 rounded-lg shadow-md'>
              <div className=' bg-slate-400 space-y-6 py-3'></div>
              <div>
               <div className=' bg-slate-300 space-y-6 py-6'></div>
               <div className='rounded-md bg-indigo-600 cursor-pointer hover:bg-indigo-700 transition-all p-2 text-white'></div>
              </div>
    </div>
  );
}
export const Spinner = () => {
  return (
    <>
    {columnas}
    </>
  )
}
