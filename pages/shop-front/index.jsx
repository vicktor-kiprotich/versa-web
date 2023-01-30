import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import React from "react";
import { SEARCH_PRODUCTS } from "../../graphql/queries/queries";
import ProductArticle from "../components/product_article";
import ProductCard from "../components/product_card";
import Spinner from "../components/spinner";

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
    <div className='mx-auto max-w-[1870px] px-4 md:px-6 lg:px-8 2xl:px-20'>
      {" "}
      <div className='flex pt-7 lg:pt-11 pb-16 lg:pb-20 products-category'>
        <div className='flex-shrink-0 pe-8 xl:pe-16 hidden lg:block w-80 xl:w-86 top-16 h-full sticky'>
          <div className='space-y-10'>
            <div className='block -mb-3'>
              <div className='flex justify-between items-center mb-4 -mt-1 border border-b-2'>
                <h3>Filters</h3>
                <button>Clear All</button>
              </div>
            </div>
            <div className="block">

            </div>
          </div>
        </div>
        <div className='w-full lg:-ms-2 xl:-ms-8 lg:-mt-1'>
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
