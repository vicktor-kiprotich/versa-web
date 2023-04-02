import React from "react";

export default function Breadcrumb() {
  return (
    <nav className='text-sm font-medium mb-4' aria-label='Breadcrumb'>
      <ol className='list-none p-0 inline-flex'>
        <li className='flex items-center'>
          <a href='/' className='text-slate-500 hover:text-slate-700'>
            Home
          </a>
          <svg
            className='h-5 w-auto text-slate-400 mx-2'
            fill='currentColor'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fillRule='evenodd'
              d='M6.707 5.293a1 1 0 0 1 0 1.414L9.414 10l-2.707 2.293a1 1 0 1 1-1.414-1.414l2.999-2.999a1 1 0 0 0 0-1.414l-2.999-2.999a1 1 0 1 1 1.414-1.414l2.707 2.293a1 1 0 0 1 0 1.414l-2.707 2.293z'
            />
          </svg>
        </li>
        <li className='flex items-center'>
          <a href='/' className='text-slate-500 hover:text-slate-700'>
            Products
          </a>
          <svg
            className='h-5 w-auto text-slate-400 mx-4'
            fill='currentColor'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fillRule='evenodd'
              d='M6.707 5.293a1 1 0 0 1 0 1.414L9.414 10l-2.707 2.293a1 1 0 1 1-1.414-1.414l2.999-2.999a1 1 0 0 0 0-1.414l-2.999-2.999a1 1 0 1 1 1.414-1.414l2.707 2.293a1 1 0 0 1 0 1.414l-2.707 2.293z'
            />
          </svg>
        </li>
        <li className='flex items-center'>
          <a
            href='/'
            className='text-slate-500 hover:text-slate-700'
            aria-current='page'
          >
            Item
          </a>
        </li>
      </ol>
    </nav>
  );
}
