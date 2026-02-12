"use client";

import React, { useMemo } from "react";

import { usePopularMovies, useTopRatedMovies } from "@/hooks/useMovies";
import { usePopularTVShow, useTopRatedTVShows } from "@/hooks/useTVShows";

const ContentRows = () => {
  //? 1º Row
  const { data: popularMoviesData } = usePopularMovies();
  const { data: popularTVShowData } = usePopularTVShow();

  //? 2º Row
  const { data: topRatedMoviesData } = useTopRatedMovies();
  const { data: topRatedTVShowData } = useTopRatedTVShows();

  //? 3º Row

  //? 4º Row

  return <section>ContentRows</section>;
};

export default ContentRows;
