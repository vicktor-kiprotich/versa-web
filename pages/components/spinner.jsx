import React from "react";

export default function Spinner() {
  return (
    <div className='h-screen w-full flex justify-center items-center'>
      <span className='animate-spin relative flex h-10 w-10 rounded-sm bg-purple-400 opacity-75'></span>
    </div>
  );
}
