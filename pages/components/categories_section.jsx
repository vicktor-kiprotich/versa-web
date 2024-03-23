import React from "react";

import CollectionCard from "./collection_card";

export default function CategoriesSection({ collections }) {
  return (
    <div className='mb-8 lg:mb-12 hero'>
      <div className='mb-3'>
        <h2 className='text-skin-base text-[20px] xl:text-[20px] font-medium xl:leading-8'>
          <div>
            Shop By <span class='font-light'>Categories</span>
          </div>
        </h2>
      </div>
      <div className='rounded border border-black/5 bg-black/5 w-full overflow-hidden grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6  grid-flow-row auto-rows-max gap-2 p-2'>
        {collections &&
          collections.map((item, index) => (
            <CollectionCard
              image={item.featuredAsset.source}
              name={item.name}
              totalItems={item.productVariants.totalItems}
              id={item.id}
              slug={item.slug}
              key={index}
            />
          ))}
      </div>
    </div>
  );
}
