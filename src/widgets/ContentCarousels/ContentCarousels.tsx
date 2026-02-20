"use client";

import { motion } from "motion/react";
import React, { useMemo } from "react";

import ContentRow from "@/components/ContentRow/ContentRow";
import { MOVIE_GENRES, TV_GENRES } from "@/constants/genres";
import { useMediaByGenre, useTrending } from "@/hooks/useContent";
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
  //? Row
  const { data: trendingMovies } = useTrending("movie", "week");
  const { data: trendingShows } = useTrending("tv", "week");
  const trendingContent = mixContentTypeArray(100, trendingMovies, trendingShows);

  //? Row
  const { data: popularMoviesData } = usePopularMovies();
  const { data: popularTVShowData } = usePopularTVShow();

  const popularContent = mixContentTypeArray(60, popularMoviesData, popularTVShowData);

  //? Row
  const { data: topRatedMoviesData } = useTopRatedMovies();

  //? Row
  const { data: topRatedTVShowData } = useTopRatedTVShows();

  //? Row
  const { data: upcomingMoviesData } = useUpcomingMovies();

  //? Row
  const { data: nowPlayingMoviesData } = useNowPlayingMovies();
  const { data: onTheAirTVShowData } = useOnTheAirTVShows();

  const nowPlayingContent = useMemo(() => {
    const nowPlayingContent = nowPlayingMoviesData?.filter((movie) => {
      return (movie.popularity ?? 0) > 60;
    });

    const onTheAirContent = onTheAirTVShowData?.filter((show) => {
      return (show.popularity ?? 0) > 60;
    });

    return mixContentTypeArray(60, nowPlayingContent, onTheAirContent);
  }, [nowPlayingMoviesData, onTheAirTVShowData]);

  //? Row
  const { data: airingTodayTVShowsData } = useAiringTodayTVShows();

  const airingTodayContent = useMemo(() => {
    const content = airingTodayTVShowsData?.filter((show) => {
      return (show.popularity ?? 0) > 60;
    });

    return content;
  }, [airingTodayTVShowsData]);

  //? Row - Comédia
  const { data: comedyGenreMoviesData } = useMediaByGenre("movie", MOVIE_GENRES.COMEDY);
  const { data: comedyGenreTVShowsData } = useMediaByGenre("tv", TV_GENRES.COMEDY);

  const comedyContent = useMemo(() => {
    const moviesContent = comedyGenreMoviesData?.filter((movies) => {
      return (movies.popularity ?? 0) > 60;
    });

    const tvShowsContent = comedyGenreTVShowsData?.filter((show) => {
      return (show.popularity ?? 0) > 60;
    });

    return mixContentTypeArray(60, moviesContent, tvShowsContent);
  }, [comedyGenreMoviesData, comedyGenreTVShowsData]);

  //? Row - Ação
  const { data: actionGenreMoviesData } = useMediaByGenre("movie", MOVIE_GENRES.ACTION);
  const { data: actionGenreTVShowData } = useMediaByGenre("tv", TV_GENRES.ACTION_AND_ADVENTURE);

  const actionContent = useMemo(() => {
    const actionsMovies = actionGenreMoviesData?.filter((movie) => {
      return (movie.popularity ?? 0) > 60;
    });

    const actionTVShows = actionGenreTVShowData?.filter((tvShow) => {
      return (tvShow.popularity ?? 0) > 90;
    });

    return mixContentTypeArray(60, actionsMovies, actionTVShows);
  }, [actionGenreMoviesData, actionGenreTVShowData]);

  //? Row - Romance
  const { data: romanceMoviesData } = useMediaByGenre("movie", MOVIE_GENRES.ROMANCE);
  const { data: soapTVShowsData } = useMediaByGenre("tv", TV_GENRES.SOAP);

  const romanceContent = useMemo(() => {
    return mixContentTypeArray(100, romanceMoviesData, soapTVShowsData);
  }, [romanceMoviesData, soapTVShowsData]);

  //? Row - Sci-Fi
  const { data: sciFiGenreMoviesData } = useMediaByGenre("movie", MOVIE_GENRES.SCIENCE_FICTION);
  const { data: sciFiGenreTVShowsData } = useMediaByGenre("tv", TV_GENRES.SCI_FI_AND_FANTASY);

  const sciFiContent = useMemo(() => {
    return mixContentTypeArray(100, sciFiGenreMoviesData, sciFiGenreTVShowsData);
  }, [sciFiGenreMoviesData, sciFiGenreTVShowsData]);

  //? Row - Thriller
  const { data: thrillerMoviesData } = useMediaByGenre("movie", MOVIE_GENRES.THRILLER);
  const { data: mysteryTVShowsData } = useMediaByGenre("movie", TV_GENRES.MYSTERY);

  const thrillerContent = useMemo(() => {
    return mixContentTypeArray(60, thrillerMoviesData, mysteryTVShowsData);
  }, [thrillerMoviesData, mysteryTVShowsData]);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, delay: 2.5 }}
      viewport={{ once: true, amount: "all" }}
      className="-mt-30 flex flex-col gap-2"
    >
      <ContentRow title="🔥 O Que Todo Mundo Está Assistindo" data={trendingContent} />

      <ContentRow title="🌟 Os Mais Queridos" data={popularContent} />

      <ContentRow title="🎬 Obras-Primas do Cinema" data={topRatedMoviesData || []} />

      <ContentRow title="🏆 As Séries Mais Bem Avaliadas" data={topRatedTVShowData || []} />

      <ContentRow title="👀 Fique de Olho: Vem Aí..." data={upcomingMoviesData || []} />

      <ContentRow title="⚡ Em Alta na Semana" data={nowPlayingContent} />

      <ContentRow title="🚨 Alerta de Novo Episódio" data={airingTodayContent || []} />

      <ContentRow title="😂 Para Morrer de Rir" data={comedyContent || []} />

      <ContentRow title="💥 Tiro, Porrada e Bomba" data={actionContent || []} />

      <ContentRow title="💌 Histórias para Suspirar" data={romanceContent || []} />

      <ContentRow title="🌌 Além da Imaginação" data={sciFiContent || []} />

      <ContentRow
        title="🫣 Prenda a Respiração: Suspense e Mistério"
        data={thrillerContent || []}
      />
    </motion.section>
  );
};

export default ContentRows;
