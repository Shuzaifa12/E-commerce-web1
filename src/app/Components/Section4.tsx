import React from 'react';
import Image from 'next/image';

const Section4 = () => {
  return (
    <>
     <div>
        <div className='py-12 w-[90%] mx-auto bg-[rgb(240,240,240)] rounded-2xl '>
            <div className='w-48 mx-auto md:w-full'>
                <h1 className='uppercase font-bold text-2xl md:text-4xl lg:text-5xl text-center tracking-widest'>Browse by dress style</h1>
            </div>

        <div className='sm:flex sm:flex-wrap my-6'>
            <div className='w-fit mx-auto my-3 '>
                <Image src="/Frame 105.png" alt='loading' width={200} height={200} className='lg:w-[407px] lg:h-[289px]'></Image>
            </div>

            <div className='w-fit mx-auto my-3 lg:basis-2/4'>
                <Image src="/Frame 106.png" alt='loading' width={200} height={200} className='lg:w-[684px] lg:h-[289px]'></Image>
            </div>

            <div className='w-fit mx-auto my-3 lg:basis-2/4'>
                <Image src="/Frame 107.png" alt='loading' width={200} height={200} className='lg:w-[684px] lg:h-[289px]'></Image>
            </div>

            <div className='w-fit mx-auto my-3'>
                <Image src="/Frame 108.png" alt='loading' width={200} height={200} className='lg:w-[407px] lg:h-[289px]'></Image>
            </div>
            </div>
        </div>
     </div>
    </>
  )
}

export default Section4