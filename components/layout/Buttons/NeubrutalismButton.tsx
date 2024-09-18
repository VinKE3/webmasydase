"use client";

import clsx from "clsx";
import React from "react";

type NeuButtonProps = {
  textButton: string;
  classNames?: string; // `classNames` es opcional
};
const NeuButton: React.FC<NeuButtonProps> = ({
  textButton = "",
  classNames = "",
}) => {
  return (
    <button
      className={clsx(
        "px-6 py-2 font-medium bg-blueRadial text-white w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]",
        classNames
      )}
    >
      {textButton}
    </button>
  );
};

export default NeuButton;
