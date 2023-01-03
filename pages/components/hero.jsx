import { useQuery } from "@apollo/client";
import Image from "next/image";
import React from "react";
import { ALL_CATEGORIES } from "../graphql/queries/queries";
import Carousel from "./carousel";
import Features from "./features";

export default function Hero() {
  const images = [
    "/banner3.png",
    "https://img.freepik.com/free-psd/online-shopping-banner-template_23-2148971178.jpg?w=1480&t=st=1672738383~exp=1672738983~hmac=7768a43cf3d618440a81630e313d2a055427930aa54a2055742ad95f92118745",
    "https://img.freepik.com/free-psd/online-shopping-banner-template_23-2148582750.jpg?w=1480&t=st=1672735413~exp=1672736013~hmac=6379a7eded5e65d9ae18d14beadf265f873e5a76a02938727c52ecc070ff6c69",
  ];
  return (
    <div className='hero'>
      <div className='grid gap-4 grid-cols-1 xl:gap-5 lg:grid-cols-[minmax(65%,_1fr)_1fr] 2xl:grid-cols-[minmax(68%,_1fr)_1fr] '>
        {/* <div className='w-[15%] h-[50vh] bg-violet-700 justify-center rounded-lg'>
          <p className=''>All Categories</p>
          {loading && <p>Loading</p>}
          {categories && (
            <div className=''>
              <ul className='w-full h-full bg-skin-fill border-t-0 border-2 border-skin-primary rounded-b-md category-dropdown-menu'>
                {categories.map((item) => (
                  <li
                    key={item.id}
                    className='px-4  transition false text-sm hover:text-skin-primary '
                  >
                    {item.name}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div> */}
        <div className='lg:mb-7 mt-6 rounded-lg'>
          <Carousel images={images} />
        </div>
        <div className=' mb-7 mt-3 lg:mt-6 '>
          <div className='grid gap-4  grid-cols-1 sm:grid-cols-1 xl:gap-6'>
            {" "}
            <div className='mx-auto'>
              {" "}
              <img src='/banner3.png' className='w-full rounded-lg' />{" "}
            </div>
            <div className='mx-auto'>
              {" "}
              <img src='/banner3.png' className='w-full rounded-lg' />
            </div>
            <div className='mx-auto'>
              {" "}
              <img
                src='https://razor-next.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fbanner%2Fhome2%2Fbanner3.jpg&w=384&q=75'
                className='w-full rounded-lg'
              />
            </div>
          </div>
        </div>
      </div>{" "}
      <Features />
    </div>
  );
}
