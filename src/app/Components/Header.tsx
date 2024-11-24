"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, SetIsMenuOpen] = useState(false);
  const handletoggleMenu = () => {
    SetIsMenuOpen(!isMenuOpen);
  };

  const [dropdown, opendropdown] = useState(false);
  const click = () => {
    opendropdown(!dropdown)
  }

  return (
    <>
      <div className="h-16 flex items-center justify-between px-2" >
        <div className="block md:hidden" onClick={handletoggleMenu}>
          {isMenuOpen ? (
            <div>
              <div className="w-6 h-1 rotate-[45deg] bg-black rounded-md"></div>
              <div className="w-6 h-1 rotate-[-45deg] mt-[-0.25rem] bg-black rounded-md"></div>
            </div>
          ) : (
            <div className="w-fit block md:hidden cursor-pointer">
              <div className="w-6 h-1 my-[3px] bg-black rounded-md"></div>
              <div className="w-6 h-1 my-[3px] bg-black rounded-md"></div>
              <div className="w-6 h-1 my-[3px] bg-black rounded-md"></div>
            </div>
          )}
        </div>

        <div>
          <h1 className="font-extrabold font-[Arial black] uppercase text-2xl tracking-wide">
            TrendSphere
          </h1>
        </div>

        <div className="hidden md:block">
          <ul className="flex md:gap-5 lg:gap-4 font-bold md:text-lg lg:text-xl">
            <div className="relative">
              <li className="flex cursor-pointer" onClick={click}>Shop 
                <Image src="/dropdownicon.png" alt="icon loading" width={20} height={15} />
              </li>
              {dropdown && (
                <div className="border border-black absolute w-[5rem] bg-black text-white">
                  <div className="my-2"><Link href="#">For Men</Link></div>
                  <div className="my-2"><Link href="#">For Women</Link></div>
                  <div className="my-2"><Link href="#">For kids</Link></div>
                </div>
              )}
            </div>
            
            <Link href="/">
              <li>On Sale</li>
            </Link>
            <Link href="/">
              <li>New Arrivals</li>
            </Link>
            <Link href="/">
              <li>Brand</li>
            </Link>
          </ul>
        </div>
          

        <div className="hidden lg:block">
          <div className=" bg-gray-200 rounded-lg gap-2 items-center flex ">
            <button>
            <Image
              src="/searchicon.png"
              alt="icon loading"
              width={30}
              height={30}
              className="h-6 invert mx-3"
            />
          </button>
            <input
              type="text"
              placeholder="Search for Products"
              className="bg-transparent placeholder:text-black lg:w-80 px-2 py-2"
            />
          </div>
        </div>

        <div className="flex gap-3">
          <Link href="/" className="block md:hidden">
            <Image
              src="/searchicon.png"
              alt="icon loading"
              width={30}
              height={30}
              className="bg-black invert "
            />
          </Link>
          <Link href="/">
            <Image
              src="/shoppingcart.png"
              alt="icon loading"
              width={30}
              height={30}
              className="bg-black invert "
            />
          </Link>
          <Link href="/">
            <Image
              src="/user.png"
              alt="icon loading"
              width={30}
              height={30}
            />
          </Link>
        </div>
      </div>

      {isMenuOpen && (
        <div className="bg-black text-white px-2 py-2 leading-8 font-bold text-xl">
          <div className="relative">
          <div className="underline underline-offset-4 my-2 flex" onClick={click}>Shop
          <Image src="/dropdownicon.png" alt="icon loading" width={20} height={15} className="bg-white invert"/>
          </div>
          {dropdown && (
                <div className="relative w-full bg-white text-black">
                  <div className="my-2"><Link href="#">For Men</Link></div>
                  <div className="my-2"><Link href="#">For Women</Link></div>
                  <div className="my-2"><Link href="#">For kids</Link></div>
                </div>
              )}
          </div>
          <div className="underline underline-offset-4 my-2">On Sale</div>
          <div className="underline underline-offset-4 my-2">New Arrivals</div>
          <div className="underline underline-offset-4 my-2">Brand</div>
        </div>
      )} 
    </>
  );
};

export default Header;
