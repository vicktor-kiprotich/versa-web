import Link from "next/link";
import React from "react";

export default function CollectionCard({ name, image, totalItems, id, slug }) {
  return (
    <Link
      href={{
        pathname: `/shop-front/`,
        query: { slug: slug, id: id },
      }}
    >
      <div className='flex flex-col sm:flex-row items-center gap-1 bg-slate-300 p-2 rounded cursor-pointer '>
        <div className='sm:max-w-[100%] flex-auto hover:text-[#ff9300]'>
          <h3 className='capitalize text-base truncate leading-6 group-hover:text-skin-primary '>
            {name}
          </h3>
          <p className='text-[13px] text-gray-400'>({totalItems})</p>
        </div>
        <div className='flex flex-shrink-0 group-hover:opacity-80'>
          <div className='inline-block max-w-[100%] relative box-border m-0 overflow-hidden'>
            <div className='box-border block max-w-[100%]'>
              <img
                alt={name}
                aria-hidden='true'
                src={image}
                className='w-[60px] h-[60px] inline-block m-0 p-0 rounded-lg'
              />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
