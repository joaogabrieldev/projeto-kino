"use client";

import React, { useMemo } from "react";

import { MOVIE_GENRES, TV_GENRES } from "@/constants/genres";
import { useMediaByGenre } from "@/hooks/useContent";
import {
  useNowPlayingMovies,
  usePopularMovies,
  useTopRatedMovies,
  useUpcomingMovies,
} from "@/hooks/useMovies";
import {
  useAiringTodayTVShows,
  useOnTheAirTVShows,
  usePopularTVShow,
  useTopRatedTVShows,
} from "@/hooks/useTVShows";

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
  const { data: onTheAirTVShowData } = useOnTheAirTVShows();

  //? 5º Row
  const { data: airingTodayTVShowsData } = useAiringTodayTVShows();

  //? 6º Row - Ação
  const { data: actionGenreMoviesData } = useMediaByGenre("movie", MOVIE_GENRES.ACTION);
  const { data: actionGenreTVShowData } = useMediaByGenre("tv", TV_GENRES.ACTION_AND_ADVENTURE);

  //? 7º Row - Sci-Fi
  const { data: sciFiGenreMoviesData } = useMediaByGenre("movie", MOVIE_GENRES.SCIENCE_FICTION);
  const { data: sciFiGenreTVShowsData } = useMediaByGenre("tv", TV_GENRES.SCI_FI_AND_FANTASY);

  return <section>ContentRows</section>;
};

export default ContentRows;
