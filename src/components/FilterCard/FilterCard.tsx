import React from "react";
import { useState } from "react";

import * as Paginations from "@/components/application/pagination/pagination";

interface IFilterCardProps {
  totalPages: number;
  currentPage: number;
  onPageChange: React.Dispatch<React.SetStateAction<number>>;
  pageTitle: string;
}

const FilterCard = ({ totalPages, currentPage, onPageChange, pageTitle }: IFilterCardProps) => {
  return (
    <div className="-mt-4 h-fit border-2 border-white text-white select-none">
      <div className="pb-4">
        <span className="pl-6 text-2xl font-bold">{pageTitle}</span>
      </div>
      <div></div>
      <div className="border-2 border-white">
        <Paginations.PaginationCardDefault
          page={currentPage}
          onPageChange={onPageChange}
          total={totalPages}
        />
      </div>
    </div>
  );
};

export default FilterCard;
