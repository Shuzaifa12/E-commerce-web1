import React from 'react';
import Image from 'next/image';

const Section5 = () => {
  return (
    <>
    <div>
      <div className='py-12 w-[90%] mx-auto flex h-11 items-center justify-between my-3'>
        
          <div className='w-[286px] md:w-[645px]'>
            <h1 className='font-[IntegralCF] text-[32px] md:text-[48px] md:font-extrabold uppercase'>Our Happy Customers</h1>
          </div>

          <div className='flex gap-2'>
            <button className='bg-slate-300 rounded-sm'><Image src="/bacarrow.png" alt='loading' width={20} height={20}></Image></button>
            <button className='bg-slate-300 rounded-sm'><Image src="/forarrow.png" alt='loading' width={20} height={20}></Image></button>
          </div>

      </div>

      <div className='flex overflow-clip w-[90%] mx-auto gap-4 my-3'>
        <div className='flex shrink-0 justify-center'>
          <Image src="/Card1.png" alt='loading card' width={400} height={400}></Image>
        </div>
        <div className='flex shrink-0 justify-center'>
          <Image src="/Card2.png" alt='loading card' width={400} height={400}></Image>
        </div>
        <div className='flex shrink-0 justify-center'>
          <Image src="/Card3.png" alt='loading card' width={400} height={400}></Image>
        </div>
        <div className='flex shrink-0 justify-center'>
          <Image src="/Card2.png" alt='loading card' width={400} height={400}></Image>
        </div>
        <div className='flex shrink-0 justify-center'>
          <Image src="/Card3.png" alt='loading card' width={400} height={400}></Image>
        </div>

       
      </div>

    </div>
    </>
  )
}

export default Section5