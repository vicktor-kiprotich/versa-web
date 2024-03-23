import React from "react";

export default function Footer() {
  return (
    <div className='bg-purple-800 mt-auto'>
      <div className='grid 2xl:xl:lg:md:grid-cols-6  grid-cols-2 container p-4 mt-10 pt-10 text-slate-300 place-content-center gap gap-x-20 mx-auto'>
        <div className='col-span-2 2xl:xl:lg:md:col-span-1'>
          <div>
            {" "}
            <p
              rel='noopener noreferrer'
              className='text-white font-bold text-3xl pb-6 font-comforter-brush'
            >
              Companyname
            </p>
            <div className='mb-3'>Company contact</div>
            <div className='mb-3'>Company address</div>
            <div className='mb-3'>companyemail123@gmail.com</div>
          </div>
          <div>
            <ul className='flex'>
              <li className='mr-2'>facebook</li>
              <li className='mr-2'>twitter</li>
              <li className='mr-2'>insta</li>
              <li className='mr-2'>youtube</li>
            </ul>
          </div>
        </div>

        <div>Column two</div>
        <div>Column three</div>
        <div>Column four</div>
        <div className='place-content-center col-span-2'>
          <div>
            {" "}
            <p className='text-lg font-semibold'>Sign Up For Our NewsLetter</p>
            <p className='text-sm'>
              Get latest updates on new products and upcoming sales
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
