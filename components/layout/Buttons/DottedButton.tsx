"use client";
import React from "react";

type DottedButtonProps = {
  text: string;
  className?: string;
};

const DottedButton: React.FC<DottedButtonProps> = ({
  className = "",
  text = "",
}) => {
  return (
    <button
      className={`rounded-2xl border-2 border-dashed border-white bg-blueRadial px-6 py-3 font-semibold uppercase text-white transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none ${className}`}
    >
      {text}
    </button>
  );
};

export default DottedButton;
