"use client";

import React from "react";
import { useState } from "react";

import * as Paginations from "@/components/application/pagination/pagination";
import SelectBadge from "@/pieces/SelectBadge/SelectBadge";
import { onest } from "@/utils/fonts";

import FilterSearchBar from "../FilterSearchBar/FilterSearchBar";

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

  //? Age Rating
  selectedAge: string | undefined;
  onAgeSelect: React.Dispatch<React.SetStateAction<string | undefined>>;
  ageRatings: string[];

  // //? Endpoint Select
  // checked: boolean;
  // setChecked: React.Dispatch<React.SetStateAction<boolean>>;

  isPersonSearch?: boolean;
}

const movieEndpointsTitles: string[] = [
  "Mais Populares",
  "Melhores Avaliados",
  "Em Cartaz",
  "Próximos Lançamentos",
];

const FilterCard = ({
  totalPages,
  currentPage,
  onPageChange,
  pageTitle,
  genreList,
  selectedGenres,
  onGenreSelect,
  selectedAge,
  onAgeSelect,
  ageRatings,
  isPersonSearch,
}: IFilterCardProps) => {
  const hasGenres = genreList.length > 0;

  const hasAgeRatings = ageRatings.length > 0;

  return (
    <div className="-mt-4 h-fit w-80 rounded-xl border-zinc-500 py-2 text-white select-none">
      {/* Título da Página */}
      <div className="">
        <span className={`pl-6 text-2xl font-bold ${onest.className}`}>{pageTitle}</span>
      </div>

      {/* Filtro por Input */}
      <div className="mt-4">
        <FilterSearchBar isPersonSearch={isPersonSearch} />
      </div>

      {/* Seleção de Gêneros */}
      {hasGenres && (
        <>
          <div className="flex flex-col justify-center py-4">
            <div>
              <h2 className={`pl-4 ${onest.className} text-md font-semibold`}>Gêneros</h2>
            </div>
            <div className="mt-2 flex flex-wrap gap-x-2 gap-y-2.5 px-6">
              {genreList.map((item, index) => {
                return (
                  <SelectBadge
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
        </>
      )}

      {/* Classificação por Idade */}
      {hasAgeRatings && (
        <>
          <div className="py-2">
            <h2 className={`pl-4 ${onest.className} text-md font-semibold`}>Classificação</h2>
            <div className="my-2 flex flex-wrap gap-x-2 gap-y-2.5 px-6">
              {ageRatings.map((item, index) => {
                return (
                  <SelectBadge
                    key={index}
                    genreTitle={item}
                    isSelected={selectedAge === item}
                    onClick={() => {
                      onAgeSelect(selectedAge === item ? undefined : item);
                      onPageChange(1);
                    }}
                  />
                );
              })}{" "}
            </div>
          </div>
        </>
      )}

      {/* Paginação */}
      <div className="">
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
