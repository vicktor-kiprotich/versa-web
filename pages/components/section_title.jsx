import React from "react";

export default function SectionTitle({ category: { value } = { value: true }, title }) {
  return (
    <div className='mb-3'>
      <h2 className='text-skin-base text-[20px] xl:text-[20px] font-medium xl:leading-8'>
        {value ? (
          <div>
            Shop By <span class='font-light'>Categories</span>
          </div>
        ) : (
          <div>{title}</div>
        )}
      </h2>
    </div>
  );
}
