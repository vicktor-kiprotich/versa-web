import Link from "next/link";
import React from "react";
import { formatCurrency, priceFormatter } from "../../utils/price_formatter";
import AddToCart from "../icons/add_to_cart";
import Eye from "../icons/eye_icon";
import Heart from "../icons/heart_icon";

export default function ProductArticle({
  src,
  name,
  min,
  max,
  id,
  collection,
}) {
  return (
    <article
      className=' rounded-lg px-2 sm:px-3   hover:bg-slate-100 relative'
      title={name}
    >
      {" "}
      <div className='relative flex-shrink-0  mt-4'>
        {" "}
        <div className='transition-all ease-in-out duration-[0s] overflow-hidden max-w-[230px] mx-auto relative'>
          <div className='block overflow-hidden relative box-border m-0'>
            <div className='block box-border '></div>
            <img
              alt={name}
              src={src}
              className=' w-[230px] h-[230px] inline-block m-0 p-0 rounded-lg'
            />
          </div>
        </div>
      </div>
      <div className='flex flex-col mb-2  overflow-hidden text-center '>
        <div className='text-sm mt-auto leading-6 text-gray-400 mb-1.5'>
          Common Good
        </div>
        <Link
          className='text-base font-semibold  leading-5  line-clamp-2 mb-2 hover:text-amber-500 text-slate-800'
          href={{
            pathname: `/shop-front/${collection}/${id}`,
            query: { id: id },
          }}
        >
          {name}
        </Link>
        <div className='space-s-2 mb-4 lg:mb-4'>
          <span className='inline-block font-semibold text-15px lg:text-base text-amber-500'>
            {formatCurrency("en-ke", "KES", min)}--{" "}
            {formatCurrency("en-ke", "KES", max)}
          </span>
        </div>
        <div className='flex product-cart-button justify-evenly'>
          <Eye />
          <Heart />
          <AddToCart />
        </div>
      </div>
    </article>
  );
}
