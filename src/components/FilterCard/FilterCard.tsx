import React from "react";
import { useState } from "react";

import * as Paginations from "@/components/application/pagination/pagination";
import GenreBadge from "@/pieces/GenreBadge/GenreBadge";
import { onest } from "@/utils/fonts";

interface IFilterCardProps {
  //? Pagination
  totalPages: number;
  currentPage: number;
  onPageChange: React.Dispatch<React.SetStateAction<number>>;

  //? Page Title
  pageTitle: string;

  //? Genre Select
  genreList: string[];

  selectedGenres: string[];
  onGenreSelect: React.Dispatch<React.SetStateAction<string[]>>;
}

const FilterCard = ({
  totalPages,
  currentPage,
  onPageChange,
  pageTitle,
  genreList,
  selectedGenres,
  onGenreSelect,
}: IFilterCardProps) => {
  return (
    <div className="-mt-3 h-fit w-80 border-2 border-white text-white select-none">
      <div className="pb-4">
        <span className={`pl-6 text-2xl font-bold ${onest.className}`}>{pageTitle}</span>
      </div>
      <div className="flex flex-col justify-center border-2 py-6">
        <div>
          <h2 className="border-2 pl-4">Gêneros</h2>
        </div>
        <div className="mt-2 flex flex-wrap gap-x-2 gap-y-2.5 px-6">
          {genreList.map((item, index) => {
            return (
              <GenreBadge
                key={index}
                genreTitle={item}
                isSelected={selectedGenres.includes(item)}
                onClick={() => {
                  onGenreSelect((prev) => {
                    if (prev.includes(item)) {
                      return prev.filter((genre) => genre !== item);
                    } else {
                      return [...prev, item];
                    }
                  });

                  onPageChange(1);
                }}
              />
            );
          })}
        </div>
      </div>
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
