import React from "react";
import PaymentCard from "../icons/card_payment";
import FreeDeleviry from "../icons/free-delivery";
import FriendlyServices from "../icons/friendly_services";
import HelpCenter from "../icons/help_center";
import Users from "../icons/users";

export default function Features() {
  return (
    <div className='mb-7 md:mb-10 '>
      <div className='relative  rounded border border-black/10 py-6  bg-white flex'>
        <div className='group px-5 xl:px-5 2xl:px-8  flex items-center justify-center  border-black/10 border-r'>
          <div className='flex flex-shrink-0 items-center justify-center'>
            <FreeDeleviry />
          </div>
          <div className='p-4'>
            <h3 className='text-skin-base  hover:text-skin-primary text-15px sm:text-base font-medium'>
              Free Delivery
            </h3>
            <p className='text-sm lg:leading-[27px] text-13px '>
              For all orders over $120
            </p>
          </div>
        </div>
        <div className='group px-5 xl:px-5 2xl:px-8  flex items-center justify-center  border-black/10 border-r'>
          <div className='flex flex-shrink-0 items-center justify-center'>
            <PaymentCard />
          </div>
          <div className='p-4'>
            <h3 className='text-skin-base  hover:text-skin-primary text-15px sm:text-base font-medium'>
              Secure Payments
            </h3>
            <p className='text-sm lg:leading-[27px] text-13px '>
              100% safe and secure payments s
            </p>
          </div>
        </div>
        <div className='group px-5 xl:px-5 2xl:px-8  flex items-center justify-center  border-black/10 border-r'>
          <div className='flex flex-shrink-0 items-center justify-center'>
            <Users />
          </div>
          <div className='p-4'>
            <h3 className='text-skin-base  hover:text-skin-primary text-15px sm:text-base font-medium'>
              Shop with confindence
            </h3>
            <p className='text-sm lg:leading-[27px] text-13px '>
              If goods have problems
            </p>
          </div>
        </div>
        <div className='group px-5 xl:px-5 2xl:px-8  flex items-center justify-center  border-black/10 border-r'>
          <div className='flex flex-shrink-0 items-center justify-center'>
            <HelpCenter />
          </div>
          <div className='p-4'>
            <h3 className='text-skin-base  hover:text-skin-primary text-15px sm:text-base font-medium'>
              24/7 Help Centre
            </h3>
            <p className='text-sm lg:leading-[27px] text-13px '>
              Dedicated 24/7 customer support
            </p>
          </div>
        </div>
        <div className='group px-5 xl:px-5 2xl:px-8  flex items-center justify-center  border-black/10 border-r'>
          <div className='flex flex-shrink-0 items-center justify-center'>
            <FriendlyServices />
          </div>
          <div className='p-4'>
            <h3 className='text-skin-base  hover:text-skin-primary text-15px sm:text-base font-medium'>
              Friendly Services
            </h3>
            <p className='text-sm lg:leading-[27px] text-13px '>
              30 days satisfaction quaranteed
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
