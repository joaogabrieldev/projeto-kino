import React, { useState } from "react";

import { onest } from "@/utils/fonts";

interface ISelectBadge {
  genreTitle: string;
  isSelected: boolean;
  onClick: () => void;
}

const SelectBadge = ({ genreTitle, isSelected, onClick }: ISelectBadge) => {
  const selectedStyle = isSelected
    ? "bg-[#8b0000] text-[#d4af37] hover:text-[#d4af37] font-semibold border-[#8b0000]"
    : "border border-white text-white";

  return (
    <div
      className={`flex w-fit cursor-pointer items-center justify-center rounded-xl border px-4 py-0.5 ${selectedStyle}`}
      onClick={onClick}
    >
      <span className={`${onest.className}`}>{genreTitle}</span>
    </div>
  );
};

export default SelectBadge;
