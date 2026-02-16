"use client";

import React, { useMemo } from "react";

import ContentRow from "@/components/ContentRow/ContentRow";
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
import { mixContentTypeArray } from "@/utils/utilitaries";

const ContentRows = () => {
  //? 1º Row
  const { data: popularMoviesData } = usePopularMovies();
  const { data: popularTVShowData } = usePopularTVShow();
  const popularContent = mixContentTypeArray(popularMoviesData, popularTVShowData, 60);

  //? 2º Row
  const { data: topRatedMoviesData } = useTopRatedMovies();

  //? 3º Row
  const { data: topRatedTVShowData } = useTopRatedTVShows();

  //? 4º Row
  const { data: upcomingMoviesData } = useUpcomingMovies();

  //? 5º Row
  const { data: nowPlayingMoviesData } = useNowPlayingMovies();
  const { data: onTheAirTVShowData } = useOnTheAirTVShows();
  const nowPlayingContent = useMemo(() => {
    const nowPlayingContent = nowPlayingMoviesData?.filter((movie) => {
      return (movie.popularity ?? 0) > 50;
    });

    const onTheAirContent = onTheAirTVShowData?.filter((show) => {
      return (show.popularity ?? 0) > 50;
    });

    return mixContentTypeArray(nowPlayingContent, onTheAirContent, 60);
  }, [nowPlayingMoviesData, onTheAirTVShowData]);

  //? 6º Row
  const { data: airingTodayTVShowsData } = useAiringTodayTVShows();

  //? 7º Row - Ação
  const { data: actionGenreMoviesData } = useMediaByGenre("movie", MOVIE_GENRES.ACTION);
  const { data: actionGenreTVShowData } = useMediaByGenre("tv", TV_GENRES.ACTION_AND_ADVENTURE);

  //? 8º Row - Sci-Fi
  const { data: sciFiGenreMoviesData } = useMediaByGenre("movie", MOVIE_GENRES.SCIENCE_FICTION);
  const { data: sciFiGenreTVShowsData } = useMediaByGenre("tv", TV_GENRES.SCI_FI_AND_FANTASY);

  const sciFiContent = mixContentTypeArray(sciFiGenreMoviesData, sciFiGenreTVShowsData, 100);

  return (
    <section className="-mt-30 flex flex-col gap-2">
      <ContentRow title="🔥 O Que Todo Mundo Está Assistindo" data={popularContent} />

      <ContentRow title="🍿 Obras-Primas do Cinema" data={topRatedMoviesData || []} />

      <ContentRow title="🏆 As Mais Bem Avaliadas" data={topRatedTVShowData || []} />

      <ContentRow title="👀 Fique de Olho: Vem Aí" data={upcomingMoviesData || []} />

      <ContentRow title="📺 Novidades na Tela" data={nowPlayingContent} />
    </section>
  );
};

export default ContentRows;
