import React from "react";

export default function TopBar() {
  return (
    <div className=' container flex border-b p-3 border-white justify-between'>
      <div>
        <p className='subpixel-antialiased font-serif text-slate-500'>
          Stote Location: 1234 Heaven Stress, Beverly Hill, Melbourne, USA.
        </p>
      </div>
      <div className='cursor-pointer'>
        <p className='hover:text-cyan-500 cursor-pointer antialiased '>
          contact us :
          <span className='hover:text-cyan-500 font-semibold text-base'>
            {" "}
            +254 722 222 111
          </span>
        </p>
      </div>
    </div>
  );
}
