import { useQuery } from "@tanstack/react-query";

import { MediaItem } from "@/assets/types";
import type { MovieResponse } from "@/assets/types/movie";
import { ENDPOINTS } from "@/constants/endpoints";
import { api } from "@/services/api";

export const usePopularMovies = () => {
  return useQuery({
    queryKey: ["movie", "popular"],
    queryFn: async () => {
      const { data } = await api.get<MovieResponse>(ENDPOINTS.MOVIES.POPULAR, {
        params: {
          page: 1,
        },
      });

      return data;
    },

    select: (data) => {
      return data.results.map((item) => ({
        ...item,
        media_type: "movie",
      })) as MediaItem[];
    },

    staleTime: 1000 * 60 * 6, // 6 minutos
  });
};

export const useTopRatedMovies = () => {
  return useQuery({
    queryKey: ["movie", "top_rated"],
    queryFn: async () => {
      const { data } = await api.get<MovieResponse>(ENDPOINTS.MOVIES.TOP_RATED, {
        params: {
          page: 1,
        },
      });

      return data;
    },

    select: (data) => {
      return data.results.map((item) => ({
        ...item,
        media_type: "movie",
      })) as MediaItem[];
    },

    staleTime: 1000 * 60 * 6,
  });
};

export const useUpcomingMovies = () => {
  return useQuery({
    queryKey: ["movie", "upcoming"],
    queryFn: async () => {
      const { data } = await api.get<MovieResponse>(ENDPOINTS.MOVIES.UPCOMING, {
        params: {
          page: 1,
        },
      });

      return data;
    },

    select: (data) => {
      return data.results.map((item) => ({
        ...item,
        media_type: "movie",
      })) as MediaItem[];
    },

    staleTime: 1000 * 60 * 6,
  });
};

export const useNowPlayingMovies = () => {
  return useQuery({
    queryKey: ["movie", "now_playing"],
    queryFn: async () => {
      const { data } = await api.get<MovieResponse>(ENDPOINTS.MOVIES.NOW_PLAYING, {
        params: {
          page: 1,
        },
      });

      return data;
    },

    select: (data) => {
      return data.results.map((item) => ({
        ...item,
        media_type: "movie",
      })) as MediaItem[];
    },

    staleTime: 1000 * 60 * 6,
  });
};

export const useMovieRecommendations = (movieID: number) => {
  return useQuery({
    queryKey: ["movie-recommendations", movieID],
    queryFn: async () => {
      const { data } = await api.get<MovieResponse>(ENDPOINTS.MOVIES.RECOMMENDATIONS(movieID));
      return data;
    },

    select: (data) => {
      return data.results.map((item) => ({
        ...item,
        media_type: "movie",
      })) as MediaItem[];
    },

    enabled: !!movieID && movieID > 0,
    staleTime: 1000 * 60 * 60,
  });
};

export const useMovieCredits = (movieID: number) => {
  return useQuery({
    queryKey: ["movie-credits", movieID],
    queryFn: async () => {
      const { data } = await api.get<MovieResponse>(ENDPOINTS.MOVIES.CREDITS(movieID));
      return data;
    },

    select: (data) => {
      return data.results.map((item) => ({
        ...item,
        media_type: "movie",
      })) as MediaItem[];
    },

    enabled: !!movieID && movieID > 0,
    staleTime: 1000 * 60 * 60,
  });
};
