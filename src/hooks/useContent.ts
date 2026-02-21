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
  genreOperator: "AND" | "OR" = "OR",
) => {
  const joinChar = genreOperator === "AND" ? "|" : ",";

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

export type SortOption = "popularity.desc" | "vote_average.desc" | "primary_release_date.desc";

interface DiscoverFilters {
  page?: number;
  genres?: number[] | number;
  genreOperator?: "AND" | "OR";
  ageRating?: string;
  sortBy?: SortOption;
  voteCountGte?: number;
}

export const useDiscoverMedia = (type: "movie" | "tv", filters: DiscoverFilters = {}) => {
  const {
    page = 1,
    genres,
    genreOperator = "OR",
    ageRating,
    sortBy = "popularity.desc",
    voteCountGte,
  } = filters;

  let with_genres: string | undefined = undefined;
  if (genres) {
    const genresArray = Array.isArray(genres) ? genres : [genres];
    if (genresArray.length > 0) {
      const joinChar = genreOperator === "AND" ? "|" : ",";
      with_genres = genresArray.join(joinChar);
    }
  }

  return useQuery({
    queryKey: ["discover-media-infinite", type, page, with_genres, ageRating, sortBy, voteCountGte],

    queryFn: async () => {
      const { data } = await api.get(ENDPOINTS.DISCOVER.DEFAULT_PATH(type), {
        params: {
          language: "pt-BR",
          page: page,
          with_genres: with_genres,

          certification_country: ageRating ? "BR" : undefined,
          certification: ageRating || undefined,

          sort_by: sortBy,
          "vote_count.gte": voteCountGte || undefined,
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

export const useSearchMedia = (query: string, page: number = 1) => {
  return useQuery({
    queryKey: ["search-media", query, page],

    queryFn: async () => {
      const { data } = await api.get(ENDPOINTS.SEARCH.MULTI, {
        params: {
          query: query,
          page: page,
          language: "pt-BR",
        },
      });

      const filteredResults = data.results.filter(
        (item: MediaItem) => item.media_type !== "person",
      );

      return {
        results: filteredResults,
        totalPages: data.total_pages,
      };
    },

    enabled: !!query,

    placeholderData: (previousData) => previousData,
  });
};
