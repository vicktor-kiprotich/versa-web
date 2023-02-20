import React from "react";

export default function ChevronRight({ onClick, className }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      stroke-width='1.5'
      stroke='currentColor'
      className={className + " w-6 h-6"}
      onClick={onClick}
    >
      <path
        stroke-linecap='round'
        stroke-linejoin='round'
        d='M8.25 4.5l7.5 7.5-7.5 7.5'
      />
    </svg>
  );
}
