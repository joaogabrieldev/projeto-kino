import { keepPreviousData, useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { select } from "motion/react-client";

import { DiscoveryResponse, Genre, GenresResponse, MediaItem } from "@/assets/types";
import { MovieResponse } from "@/assets/types/movie";
import { TVShowResponse } from "@/assets/types/tv";
import { ENDPOINTS } from "@/constants/endpoints";
import { selectAsMovie, selectAsShow } from "@/utils/transformers";

import { api } from "./../services/api";

export const useGenresList = (type: "movie" | "tv") => {
  return useQuery<Genre[]>({
    queryKey: ["genres-list", type],
    queryFn: async () => {
      const { data } = await api.get<GenresResponse>(ENDPOINTS.GENRES.GET_GENRE_LIST(type), {
        params: {
          language: "pt-BR",
        },
      });

      return data.genres;
    },

    staleTime: Infinity,
  });
};

export const useMediaByGenre = (
  type: "movie" | "tv",
  genreID: number[] | number,
  operator: "AND" | "OR" = "OR",
) => {
  const joinChar = operator === "AND" ? "|" : ",";

  const genreParams = Array.isArray(genreID) ? genreID.join(joinChar) : genreID.toString();

  return useQuery({
    queryKey: ["media-by-genre", type, genreID],
    queryFn: async () => {
      const { data } = await api.get<DiscoveryResponse>(ENDPOINTS.DISCOVER.DEFAULT_PATH(type), {
        params: {
          with_genres: genreParams,
          language: "pt-BR",
          sort_by: "popularity.desc",
        },
      });

      return data;
    },

    select: (data): MediaItem[] => {
      return type === "movie"
        ? selectAsMovie(data as unknown as MovieResponse)
        : selectAsShow(data as unknown as TVShowResponse);
    },

    enabled: Array.isArray(genreID) ? genreID.length > 0 : !!genreID,
    staleTime: 1000 * 60 * 60,
  });
};

export const useTrending = (type: "movie" | "tv" = "movie", timeWindow: "day" | "week" = "day") => {
  return useQuery({
    queryKey: ["trending", type, timeWindow],

    queryFn: async () => {
      const endpoint =
        ENDPOINTS.TRENDING[type.toUpperCase() as "MOVIE" | "TV"][
          timeWindow.toUpperCase() as "DAY" | "WEEK"
        ];

      const { data } = await api.get(endpoint, {
        params: {
          language: "pt-BR",
        },
      });

      return data;
    },

    select: (data): MediaItem[] => {
      return type === "movie"
        ? selectAsMovie(data as unknown as MovieResponse)
        : selectAsShow(data as unknown as TVShowResponse);
    },

    staleTime: 1000 * 60 * 60,
  });
};

export const useDiscoverMedia = (type: "movie" | "tv", page: number) => {
  return useQuery({
    queryKey: ["discover-media-infinite", type, page],

    queryFn: async () => {
      const { data } = await api.get(ENDPOINTS.DISCOVER.DEFAULT_PATH(type), {
        params: {
          language: "pt-BR",
          sort_by: "popularity.desc",
          page: page,
        },
      });
      return data;
    },

    select: (data) => {
      return {
        results:
          type === "movie"
            ? selectAsMovie(data as MovieResponse)
            : selectAsShow(data as TVShowResponse),

        totalPages: data.total_pages > 500 ? 500 : data.total_pages,
      };
    },
    placeholderData: keepPreviousData,
    staleTime: 1000 * 60 * 60,
  });
};
