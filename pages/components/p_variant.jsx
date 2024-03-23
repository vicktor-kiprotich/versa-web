import React from "react";

export default function PrVariant({ name, onClick, active }) {
  return (
    <div
      className={
        active
          ? "bg-amber-500 p-5 hover:cursor-pointer rounded-lg  mx-8"
          : "bg-slate-300 p-5 hover:cursor-pointer rounded-md  mx-8"
      }
      onClick={onClick}
    >
      {name}
    </div>
  );
}
