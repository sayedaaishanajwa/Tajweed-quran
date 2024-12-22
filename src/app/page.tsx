import React from 'react'
import Image from 'next/image'
import { FaWhatsapp } from "react-icons/fa6";


function page() {
  return (
  <div className='bg-slate-300'>
     
    <div className='
    max-w-screen-2xl mx-auto px-20 mr-6 py-6 font-extrabold te bg-blue-950 text-white'>
     <h1>PROVIDES COMPELET QURAN</h1>
     <h1>ONLINE CLASSES</h1>
     </div>

    <div className='md:flex max-w-screen-2xl mx-auto px-4 py-8 mr-6 flex justify-end text-white'>
      <Image src='/prox.jpeg'
      alt='prox.jpeg'
      height={300}
      width={600}/>
      </div>

      <div className='justify-start absolute top-1/3 left-10'>
      <div className=' justify-content max-w-screen-2xl mx-auto px-8 py-0 mr-6 font-extrabold text-4xl text-black'>
      <p>MALE TEACHER</p>
      <p className='text-blue-950 font-extrabold'><i>(HAFIZ ABDUL QADEER)</i></p>
      <p className='space-x-6'>NAZRA QURAN,HIFZ UL QURAN</p>
      <p>NAMAZ (SALAH),</p>
      <p>DUA,S</p>
      <p>TAJWEED COURSES</p>
<br></br>
       <div className='flex max-w-screen-2xl mx-auto px-4 py-8 mr-6 bg-blue-950 text-white'>
      <FaWhatsapp />
      <p>Contact:- 0312-3525-471</p>
       </div>

    </div>
    </div>
     
    </div>

  )
}

export default page