import React from "react";

export default function ProductCard({ name, id, image, price, alt }) {
  return (
    <div className='w-[240px] sm:w-[240px]  rounded-lg shadow-md  transition-all duration-500 ease-in-out'>
      <img
        className='object-fill rounded-lg  h-[180px] sm:h-40 w-full '
        src={image}
        alt='sellit'
      />
      <div className='bottom-0 left-0 right-0 px-4 py-2 rounded-lg'>
        <h3 className='text-md text-slate-700 font-bold'>{name}</h3>
      </div>
      <div className='bottom-0 left-0 right-0 px-4 py-2 rounded-lg'>
        <h3 className='text-md text-slate-700 font-bold'>Ksh {price}</h3>
      </div>
      <div className='flex justify-center justify-items-center py-1'>
        <button class='bg-transparent w-[90%] hover:bg-amber-500 text-amber-500 font-semibold hover:text-white py-2 px-4 border border-amber-500 hover:border-transparent rounded-full'>
          Add to cart
        </button>
      </div>
    </div>
  );
}
