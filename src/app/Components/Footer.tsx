import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <>
    <div className='absolute z-20 '>
        <div className='bg-black text-white w-[90%] mx-auto p-8 rounded-2xl lg:flex'>
            <div className='text-left mt-8'>
            <h1 className='uppercase font-bold text-5xl'>Stay upto date about our latest offers</h1>
            </div>

            <div className='w-fit mx-auto mt-8 flex flex-col items-center gap-4'>
                <div className='flex w-80 md:w-96 bg-white items-center px-4 py-2 gap-4 rounded-full'>
                    <Image src="/email.png" alt='loading' width={20} height={20}></Image>
                    <input type="text" placeholder='Enter your Email' className='flex-1 bg-transparent outline-none'/>
                </div>

                <button className='w-80 md:w-96 bg-white text-black px-4 py-2 rounded-full'>Subscribe to Newsletter</button>
            </div>
        </div>
    </div>

    <div className='bg-[rgb(240,240,240)]'>
        <div className=' mt-52 sm:mt-40 md:mt-40 lg:mt-24 pt-60 sm:pt-56 md:pt-48 lg:pt-36 z-10 relative px-6 md:flex justify-between '>
            <div>
                <h1 className='uppercase font-[IntegralCF] font-bold text-3xl mt-2'>Trendsphere</h1>
                <p className='font-[Satoshi] mt-2'>We have clothes that suits your style and which you’re proud to wear. From women to men.</p>
            

            <div className='flex gap-3 w-fit mt-4'>
                <Link href="#"><Image src="/1.png" alt='loading icon' width={40} height={40}></Image></Link>
                <Link href="#"><Image src="/2.png" alt='loading icon' width={40} height={40}></Image></Link>
                <Link href="#"><Image src="/3.png" alt='loading icon' width={40} height={40}></Image></Link>
                <Link href="#"><Image src="/4.png" alt='loading icon' width={40} height={40}></Image></Link>
            </div>
            </div>

            <div className='flex flex-wrap lg:flex-nowrap lg:gap-5 mt-4 md:mt-0'>
                <div className='w-1/2 '>
                    <h1 className='font-[Satoshi] uppercase tracking-widest text-xl'>Company</h1>
                    <ul className='leading-[34px] text-gray-700'>
                        <li><Link href="#">About</Link></li>
                        <li><Link href="#">Features</Link></li>
                        <li><Link href="#">Works</Link></li>
                        <li><Link href="#">Career</Link></li>
                    </ul>
                </div>
                <div className='w-1/2 '>
                    <h1 className='font-[Satoshi] uppercase tracking-widest text-xl'>Help</h1>
                    <ul className='leading-[34px] text-gray-700'>
                        <li><Link href="#">Customer Support</Link></li>
                        <li><Link href="#">Delivery Details</Link></li>
                        <li><Link href="#">Terms and Conditions</Link></li>
                        <li><Link href="#">Privacy Policy</Link></li>
                    </ul>
                </div>
                <div className='w-1/2 '>
                    <h1 className='font-[Satoshi] uppercase tracking-widest text-xl'>FAQ</h1>
                    <ul className='leading-[34px] text-gray-700'>
                        <li><Link href="#">Account</Link></li>
                        <li><Link href="#">Manage Deliveries</Link></li>
                        <li><Link href="#">Orders</Link></li>
                        <li><Link href="#">Payment</Link></li>
                    </ul>
                </div>
                <div className='w-1/2 '>
                    <h1 className='font-[Satoshi] uppercase tracking-widest text-xl'>Resources</h1>
                    <ul className='leading-[34px] text-gray-700'>
                        <li><Link href="#">Free eBook</Link></li>
                        <li><Link href="#">Developement Tutorial</Link></li>
                        <li><Link href="#">How to -Blog</Link></li>
                        <li><Link href="#">Youtube Playlist</Link></li>
                    </ul>
                </div>
            </div>
        </div>

        <hr className='h-1 bg-gray-300 w-[95%] mx-auto my-3 md:w-[100%]' />

        <div className='flex justify-center md:justify-start space-x-2 px-4'>
            <h1>TrendShphere</h1> 
            <div className='flex items-center'>
            <Image src="/copyright.png" alt='loading' width={15} height={10} className='h-4 items-center'/> 
            </div>
            <h1>2016 - 2024. All Rights Reserved</h1>
        </div>
    </div>

    </>
  )
}

export default Footer