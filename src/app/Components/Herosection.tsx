import React from 'react';
import Image from 'next/image';

const Herosection = () => {
  return (
    <>
    <div className='bg-[#F2F0F1] px-2 md:flex'>
        <div className='py-10 md:w-1/2'>
            <h1 className='uppercase font-bold w-[315px] h-[93px] text-[36px] leading-[34px] lg:w-[577px] lg:h-[176px] lg:text-[64px] lg:leading-[64px] mx-auto md:mx-0'>Find Clothes that matches your styles</h1>
            <p className='mt-6 text-justify w-[358px] h-[50px] lg:w-[545px] lg:h-[33px] mx-auto md:mx-0'>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
            
            <div className='bg-black text-white text-center rounded-full mt-16 py-3 w-[358px] h-[52px] lg:w-[210px] lg:h-[52px] lg:mt-8 mx-auto md:mx-0'>
                <button >Shop Now</button>
            </div>

            <div className='flex flex-wrap md:w-fit mx-auto md:mx-0 mt-4 justify-around lg:justify-start lg:gap-6'>
                <div className='my-2 p-1'>
                    <h1 className='text-2xl font-bold'>200+</h1>
                    <p className='text-sm text-gray-600'>International Brands</p>
                </div>
                <div className=' my-2 p-1'>
                    <h1 className='text-2xl font-bold'>2000+</h1>
                    <p className='text-sm text-gray-600'>High-Quality Products</p>
                </div>
                <div className='my-2 p-1'>
                    <h1 className='text-2xl font-bold'>30000+</h1>
                    <p className='text-sm text-gray-600'>Happy Customers</p>
                </div>
            </div>
           
        </div>
        <div className='md:w-1/2 flex justify-center max-w-[800px] max-h-[500px]'>
            <Image src="/banner.png" alt="banner loading" width={400} height={400}></Image>
        </div>
    </div>
    </>
  )
}

export default Herosection