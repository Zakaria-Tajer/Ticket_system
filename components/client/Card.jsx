import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
export const Card = () => {
    const router = useRouter()
  return (
    <div className="flex md:mt-16 flex-col md:flex-row md:flex md:h-80 items-center justify-center md:-translate-y-32 ">
      <div className="h-72 w-80 rounded bg-white shadow-xl cursor-pointer" onClick={()=> router.push('/client/Tickets')}>
        <div className="w-full text-center">
          <Image
            width="150px"
            height="150px"
            src="https://www.inventicons.com/uploads/iconset/2348/wm/512/Ticket-13.png"
            alt='requests'
          />
        </div>
        <div className="mt-4 space-y-4 text-center">
          <h1 className="font-poppins text-xl">Submit a Request</h1>
          <p className="font-poppins">Submit a new Support ticket</p>
        </div>
      </div>

      <div className="h-72 w-80 scale-110 rounded bg-white shadow-xl cursor-pointer" onClick={()=> router.push('/client/fqs')}>
        <div className="w-full text-center">
          <Image width="150px" height="150px" src="https://icon-library.com/images/article-icon-png/article-icon-png-26.jpg" alt='articles'/>
        </div>
        <div className="mt-4 space-y-3 text-center">
          <h1 className="font-poppins text-xl">FQA&apos;S</h1>
          <p className="font-poppins">Find answers to your questions</p>
        </div>
      </div>

      <div className="h-72 w-80 rounded bg-white shadow-xl cursor-pointer" onClick={()=> router.push('/client/Tickets')}>
        <div className="w-full text-center">
          <Image width="150px" height="150px" src="https://www.inventicons.com/uploads/iconset/2348/wm/512/Ticket-13.png" alt='Tickets'/>
        </div>
        <div className="mt-4 space-y-3 text-center">
          <h1 className="font-poppins text-xl">Tickets</h1>
          <p className="font-poppins">Access your support tickets</p>
        </div>
      </div>
    </div>
  )
}
