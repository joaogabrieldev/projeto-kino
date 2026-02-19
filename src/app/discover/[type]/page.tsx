"use client";

import Image from "next/image";
import React, { use, useState } from "react";

import { MediaItem } from "@/assets/types";
import FilterCard from "@/components/FilterCard/FilterCard";
import { ENDPOINTS } from "@/constants/endpoints";
import { useDiscoverMedia } from "@/hooks/useContent";
import { onest } from "@/utils/fonts";
import GridContents from "@/widgets/GridContents/GridContents";

interface IDiscoverHomePage {
  params: Promise<{
    type: "movie" | "tv";
  }>;
}

const DiscoverHomePage = ({ params }: IDiscoverHomePage) => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const { type } = use(params);

  const { data: allMediaData } = useDiscoverMedia(type, currentPage);

  const pageTitle = type === "movie" ? "Filmes" : "Séries";

  return (
    <div className="mt-24 mb-10">
      <h1 className={`border-2 border-white pl-58 text-white ${onest.className} text-2xl font-bold`}>
        {pageTitle}
      </h1>
      <div className="flex justify-center">
        {/* <h1 className="text-white">Você está em {type}</h1> */}
        <FilterCard
          currentPage={currentPage}
          onPageChange={setCurrentPage}
          totalPages={allMediaData?.totalPages ?? 1}
        />
        <GridContents results={allMediaData?.results ?? []} />
      </div>
    </div>
  );
};

export default DiscoverHomePage;
