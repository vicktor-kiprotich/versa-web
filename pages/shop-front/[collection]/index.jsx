import { useQuery } from "@apollo/client";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { GET_PRODUCT } from "../../../graphql/queries/queries";
import PrVariant from "../../components/p_variant";
import SectionTitle from "../../components/section_title";
import Spinner from "../../components/spinner";

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
      <div className='grid grid-cols-1 lg:grid-cols-2 m-auto'>
        <div className='grid grid-cols-1 lg:grid-cols-2'>
          <div className='col-span-[10%]'>images</div>
          <div className='col-span-[90%]'>
            <img
              src={product?.featuredAsset?.source}
              alt={product?.featuredAsset?.source}
            />
          </div>
        </div>
        <div className=''>
          <p className='text-xl font-bold antialiased text-center'>
            {variant?.name}
          </p>
          <p className='text-lg font-semibold antialiased text-center '>
            {variant?.price}
          </p>
          <div className='flex justify-around'>
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
        </div>
      </div>
      <div>
        <SectionTitle category={{ value: false }} title='Description' />
        <p className='antialised'>{product?.description}</p>
      </div>
    </div>
  );
}
