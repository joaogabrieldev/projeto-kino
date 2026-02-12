"use client";

import React, { useMemo } from "react";

import {
  useNowPlayingMovies,
  usePopularMovies,
  useTopRatedMovies,
  useUpcomingMovies,
} from "@/hooks/useMovies";
import { useOnTheAirTVShows, usePopularTVShow, useTopRatedTVShows } from "@/hooks/useTVShows";

const ContentRows = () => {
  //? 1º Row
  const { data: popularMoviesData } = usePopularMovies();
  const { data: popularTVShowData } = usePopularTVShow();

  //? 2º Row
  const { data: topRatedMoviesData } = useTopRatedMovies();
  const { data: topRatedTVShowData } = useTopRatedTVShows();

  //? 3º Row
  const { data: upcomingMoviesData } = useUpcomingMovies();

  //? 4º Row
  const { data: nowPlayingMoviesData } = useNowPlayingMovies();
  const {} = useOnTheAirTVShows();

  //? 5º Row

  return <section>ContentRows</section>;
};

export default ContentRows;
