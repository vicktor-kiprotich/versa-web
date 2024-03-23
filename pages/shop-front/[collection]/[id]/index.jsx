import { useQuery } from "@apollo/client";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { GET_PRODUCT } from "../../../../graphql/queries/queries";
import {
  formatCurrency,
  priceFormatter,
} from "../../../../utils/price_formatter";
import PrVariant from "../../../components/p_variant";
import SectionTitle from "../../../components/section_title";
import Spinner from "../../../components/spinner";

export default function Product() {
  const [variant, setVariant] = useState({});
  const router = useRouter();
  const { loading, data, error } = useQuery(GET_PRODUCT, {
    variables: {
      id: router.query.id,
    },
  });

  const product = data && data?.product;

  useEffect(() => {
    setVariant(product?.variants[0]);
  }, [product]);
  if (loading) return <Spinner />;
  return (
    <div className='container pt-10'>
      <div className='flex items-start'>
        <div className='flex-auto w-[35%]'>
          <div className='flex justify-around'>
            {" "}
            <div className='flex-none mx-8'>
              <img
                src={product?.featuredAsset?.source}
                alt={product?.featuredAsset?.source}
                className='rounded-lg m-2'
                width={80}
              />
              <img
                src={product?.featuredAsset?.source}
                alt={product?.featuredAsset?.source}
                className='rounded-lg m-2'
                width={80}
              />
              <img
                src={product?.featuredAsset?.source}
                alt={product?.featuredAsset?.source}
                className='rounded-lg m-2'
                width={80}
              />
              <img
                src={product?.featuredAsset?.source}
                alt={product?.featuredAsset?.source}
                className='rounded-lg m-2'
                width={80}
              />
              <img
                src={product?.featuredAsset?.source}
                alt={product?.featuredAsset?.source}
                className='rounded-lg m-2'
                width={80}
              />
            </div>{" "}
            <div className='mx-4'>
              <img
                src={product?.featuredAsset?.source}
                alt={product?.featuredAsset?.source}
                className='rounded-lg'
              />
            </div>
          </div>
        </div>
        <div className='items-start'>
          <div className='mx-16'>
            <p className='text-3xl font-bold antialiased text-start text-slate-700 my-4'>
              {variant?.name}
            </p>
          </div>
          <div className='flex mx-16'>
            <p className='text-2xl font-semibold antialiased text-start my-4 text-amber-500'>
              {formatCurrency("en-ke", "KES", variant?.price)}
            </p>
            <p className='text-xl font-semibold antialiased text-start my-4 text-slate-400 mx-4 line-through '>
              {formatCurrency("en-ke", "KES", variant?.price)}
            </p>
          </div>
          <div className='mx-16 my-5'>
            <p className='text-slate-500 text-base py-2 px-4'>
              Brand :
              <span className='text-slate-800 font-semibold text-base mx-2'>
                {" "}
                15:29:00
              </span>
            </p>
            <p className='text-slate-500 text-base py-2 px-4'>
              SKU :
              <span className='text-slate-800 font-semibold text-lg mx-2'>
                {" "}
                {variant?.sku}
              </span>
            </p>
            <p className='text-slate-500 text-base py-2 px-4'>
              Weight :
              <span className='text-slate-800 font-semibold text-base mx-2'>
                {" "}
                15:29:00
              </span>
            </p>
            <p className='text-slate-500 text-base py-2 px-4'>
              Shipping :
              <span className='text-slate-800 font-semibold text-base mx-2'>
                {" "}
                Calculated at Checkout
              </span>
            </p>
          </div>

          <div className='flex mx-8'>
            {product?.variants &&
              product?.variants?.map((item) => (
                <PrVariant
                  key={item.id}
                  name={item.name}
                  onClick={() => setVariant(item)}
                  active={item?.id === variant?.id}
                />
              ))}
          </div>
          <div className='mx-24 my-10 bg-slate-200 flex flex-wrap rounded'>
            <div className='py-4 px-4'></div>
          </div>
          <div className='mx-16 my-8 w-[75%]'>
            <button className='bg-amber-500 rounded w-[75%] py-2 text-xl font-semibold text-white'>
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
      <div className='mx-4 mt-16'>
        <SectionTitle category={{ value: false }} title='Description' />
        <p className='antialised text-lg'>{product?.description}</p>
      </div>
    </div>
  );
}

function ProductImages() {
  return <div className='flex '></div>;
}
