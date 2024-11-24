import React from 'react';
import Image from 'next/image';

const Section2 = () => {
  return (
    <>
    <div className=' py-10'>
        <h1 className='text-center font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-6xl'>New Arrivals</h1>

        <div className='my-6 sm:flex'>
            <div className='w-fit p-4 mx-auto my-2'>
                <div>
                    <Image src="/NA1.png" alt='loading' width={200} height={200}></Image>
                </div>
                <div className='mt-2'>
                    <h1 className='text-black font-bold'>T-Shirt with Tape Details</h1>
                </div>
                <div className='mt-2'>
                    <h1 className='text-black font-bold'>Rs: 800</h1>
                </div>
                <div className='mt-2 rounded-full w-fit mx-auto bg-red-600 text-white font-bold'>
                    <button className='p-2'>Add to Cart</button>
                </div>
            </div>

            <div className='w-fit p-4 mx-auto my-2'>
                <div>
                    <Image src="/NA2.png" alt='loading' width={200} height={200}></Image>
                </div>
                <div className='mt-2'>
                    <h1 className='text-black font-bold'>Skinny Fit Jeans</h1>
                </div>
                <div className='mt-2'>
                    <h1 className='text-black font-bold'>Rs: 1200</h1>
                </div>
                <div className='mt-2 rounded-full w-fit mx-auto bg-red-600 text-white font-bold'>
                    <button className='p-2'>Add to Cart</button>
                </div>
            </div>

            <div className='w-fit p-4 mx-auto my-2 hidden md:block'>
                <div>
                    <Image src="/NA3.png" alt='loading' width={200} height={200}></Image>
                </div>
                <div className='mt-2'>
                    <h1 className='text-black font-bold'>Checkered Shirt</h1>
                </div>
                <div className='mt-2'>
                    <h1 className='text-black font-bold'>Rs: 1500</h1>
                </div>
                <div className='mt-2 rounded-full w-fit mx-auto bg-red-600 text-white font-bold'>
                    <button className='p-2'>Add to Cart</button>
                </div>
            </div>

            <div className='w-fit p-4 mx-auto my-2 hidden lg:block'>
                <div>
                    <Image src="/NA4.png" alt='loading' width={200} height={200}></Image>
                </div>
                <div className='mt-2'>
                    <h1 className='text-black font-bold'>Sleeve Striped T-Shirt</h1>
                </div>
                <div className='mt-2'>
                    <h1 className='text-black font-bold'>Rs: 1500</h1>
                </div>
                <div className='mt-2 rounded-full w-fit mx-auto bg-red-600 text-white font-bold'>
                    <button className='p-2'>Add to Cart</button>
                </div>
            </div>

        </div>
        <div className='border border-gray-400 rounded-full w-fit mx-auto text-black font-bold'>
            <button className='px-6 py-2'>View all</button>
        </div>
    </div>
    </>
  )
}

export default Section2