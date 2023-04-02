import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import React from "react";
import { SEARCH_PRODUCTS } from "../../../graphql/queries/queries";
import Breadcrumb from "../../components/breadcrumb";
import ProductArticle from "../../components/product_article";
import ProductCard from "../../components/product_card";
import Spinner from "../../components/spinner";

export default function Collection() {
  const router = useRouter();
  const { name, slug, id } = router.query;

  const { loading, data, error } = useQuery(SEARCH_PRODUCTS, {
    variables: {
      input: {
        collectionSlug: slug,
        collectionId: id,
        groupByProduct: true,
      },
    },
  });

  const products = data?.search?.items;
  if (loading) return <Spinner />;
  return (
    <div className='mx-auto max-w-[1870px] px-4 md:px-6 lg:px-8 2xl:px-20 pt-16'>
      {" "}
      <Breadcrumb />
      <div className='flex pt-7 lg:pt-11 pb-16 lg:pb-20 products-category'>
        <div className='flex-shrink-0 pe-8 xl:pe-16 hidden lg:block w-80 xl:w-86 top-16 h-full sticky mr-16 bg-slate-300 p-4 rounded-lg min-h-[30%]'>
          <div className='space-y-10'>
            <div className='block -mb-3'>
              <div className='flex justify-between items-center mb-4 -mt-1 border-b-2 '>
                <h3 className='text-skin-base lg:text-xl text-15px sm:text-base font-medium text-slate-600'>
                  Filters
                </h3>
                <button
                  class='flex-shrink text-13px transition duration-150 ease-in focus:outline-none hover:text-skin-base'
                  aria-label='Clear All'
                >
                  Clear All
                </button>
              </div>
            </div>
            <div className='block'></div>
          </div>
          <div className='space-y-10'>
            <div className='block -mb-3'>
              <div className='flex justify-between items-center mb-4 -mt-1 border-b-2 '>
                <h3 className='text-skin-base lg:text-xl text-15px sm:text-base font-medium text-slate-600'>
                  Categories
                </h3>
              </div>
            </div>
            <div className='block'></div>
          </div>
          <div className='space-y-10'>
            <div className='block -mb-3'>
              <div className='flex justify-between items-center mb-4 -mt-1 border-b-2 '>
                <h3 className='text-skin-base lg:text-xl text-15px sm:text-base font-medium text-slate-600'>
                  Brands
                </h3>
              </div>
            </div>
            <div className='block'></div>
          </div>
          <div className='space-y-10'>
            <div className='block -mb-3'>
              <div className='flex justify-between items-center mb-4 -mt-1 border-b-2 '>
                <h3 className='text-skin-base lg:text-xl text-15px sm:text-base font-medium text-slate-600'>
                  Brands
                </h3>
              </div>
            </div>
            <div className='block'></div>
          </div>
        </div>
        <div className='w-full lg:-ml-2 xl:-ml-8 lg:-mt-1 ml-10'>
          <div className='flex justify-between mb-4 border-b-2 p-4'>
            {" "}
            <h3 className='text-skin-base lg:text-xl text-15px sm:text-base font-medium text-slate-600'>
              {name}{" "}
            </h3>
            <div>tiles</div>
          </div>

          <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 auto-rows-max  gap-2'>
            {" "}
            {products &&
              products?.map((item, index) => (
                <ProductArticle
                  key={index}
                  id={item.productId}
                  src={item.productAsset.preview}
                  name={item.productName}
                  min={item.priceWithTax.min}
                  max={item.priceWithTax.max}
                  collection={slug}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
