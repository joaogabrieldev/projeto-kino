import React from "react";
import { useState } from "react";

import * as Paginations from "@/components/application/pagination/pagination";

interface IFilterCardProps {
  totalPages: number;
  currentPage: number;
  onPageChange: React.Dispatch<React.SetStateAction<number>>;
}

const FilterCard = ({ totalPages, currentPage, onPageChange }: IFilterCardProps) => {
  return (
    <div className="h-fit border-2 border-white text-white select-none">
      <div>Teste</div>
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
