import React from 'react';
import Link from 'next/link';

const Topheader = () => {
  return (
    <div className='bg-black h-[34px] text-white text-sm flex items-center justify-center'>
        <h1>Sign up and get 20% off to your first order. <Link href="/" className='underline underline-offset-4'>Sign up Now</Link></h1>
    </div>
  )
}

export default Topheader