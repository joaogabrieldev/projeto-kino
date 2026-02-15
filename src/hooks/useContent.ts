import { useQuery } from "@tanstack/react-query";
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

export const useMediaByGenre = (type: "movie" | "tv", genreID: number[] | number) => {
  const genreParams = Array.isArray(genreID) ? genreID.join(",") : genreID.toString();

  return useQuery({
    queryKey: ["media-by-genre", type, genreID],
    queryFn: async () => {
      const { data } = await api.get<DiscoveryResponse>(ENDPOINTS.DISCOVER.SET_GENRE(type), {
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
