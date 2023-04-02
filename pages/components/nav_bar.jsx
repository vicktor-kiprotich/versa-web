import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function NavBar() {
  return (
    <nav className='border-b border-t'>
      <div className='container flex justify-around items-center bg-gray  p-4    space-x-5  bg-white'>
        {" "}
        <div className='pr-20'>
          <Link href={{ pathname: "/" }}>
            <Image
              className='mx-auto h-12 w-auto'
              src='/assets/versa-logo.png'
              alt='Logo'
              width={80}
              height={80}
            />
          </Link>
        </div>
        <div className='w-[40%] flex items-center bg-[#F7F7F7] rounded-3xl'>
          <div className='pl-5'>
            <svg
              aria-hidden='true'
              className='w-5 h-5 text-[#5E3B76] dark:text-[#5E3B76]'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
              ></path>
            </svg>
          </div>

          <input
            type='search'
            id='default-search'
            className='block p-3 focus:outline-none w-full text-md text-[#5E3B76]  rounded-3xl border-none   dark:bg-[#F7F7F7]  dark:placeholder-[#5E3B76] dark:text-[#5E3B76] '
            placeholder='Search the store'
            required
          />
        </div>
        <div className='flex space-x-5'>
          <div>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-8 h-8 text-lg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z'
              />
            </svg>
          </div>
          <div className='relative'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-8 text-lg h-8'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z'
              />
            </svg>
            <div className='absolute right-[-8px] top-[-12px] bg-[#FFD747] hover:text-gray rounded-full  w-6 h-6 justify-center'>
              <p>10</p>
            </div>
          </div>
          <div className='flex items-center bg-[#FFD747] hover:text-gray rounded-full justify-around '>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-9 h-9 text-lg pl-2'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z'
              />
            </svg>
            <p className='pl-2 pr-2 font-medium'>Victor Kiprotich</p>
          </div>
        </div>
      </div>
    </nav>
  );
}
