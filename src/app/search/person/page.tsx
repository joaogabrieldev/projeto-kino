"use client";

import React, { use, useState } from "react";

import SearchPeopleHomePage from "@/widgets/SearchPeopleHomePage/SearchPeopleHomePage";

interface ISearchPersonPage {
  searchParams: Promise<{
    q?: string;
  }>;
}

const SearchPersonPage = ({ searchParams }: ISearchPersonPage) => {
  const { q } = use(searchParams);

  if (!q) {
    return (
      <div className="mt-40 flex flex-col items-center justify-center text-white">
        <h1 className="text-3xl font-bold">Quem você está procurando hoje?</h1>
        <p className="mt-2 text-gray-400">
          Use a barra de pesquisa no topo para buscar por esses artistas.
        </p>
      </div>
    );
  }

  return (
    <div className="mt-30 flex flex-col items-center justify-center text-white">
      <h1 className="border-2 text-3xl font-bold">
        Resultados para: <span className="text-yellow-500">&quot;{q}&quot;</span>
      </h1>

      <SearchPeopleHomePage query={q} />
    </div>
  );
};

export default SearchPersonPage;
