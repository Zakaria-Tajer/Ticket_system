import React from 'react'

export const AllRespTickets = ({ data }) => {
  return (
    <div className='w-3/4 flex flex-wrap space-x-4 pt-24 justify-center'>
        {data.map((items,i)=> (
            <div key={i} className='w-2/5 shadow-xl bg-white rounded-md relative h-56 ml-4 mb-5  space-y-5'>
            <h1 className='font-mono text-2xl p-2'>#{items.id}</h1>
            <p className='font-poppins text-xl p-2'>{items.ResponseText}</p>

            <div className='bg-gray-200 w-full absolute  bottom-0 h-10 flex items-center pl-4 space-x-14'>
                <h1 className='font-poppins'>Status:{" "}{items.status}</h1>
                <h1 className='font-poppins pr-4'>Responded at:{" "}{items.updated_at}</h1>
            </div>
        </div>
        ))}
    </div>
  )
}
