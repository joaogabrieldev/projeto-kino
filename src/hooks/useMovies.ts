import type { MovieResponse } from "@/assets/types/movie";
import { ENDPOINTS } from "@/constants/endpoints";
import { api } from "@/service/api";
import { useQuery } from "@tanstack/react-query";

export const usePopularMovies = () => {
  return useQuery({
    queryKey: ["movie", "popular"],
    queryFn: async () => {
      const { data } = await api.get<MovieResponse>(ENDPOINTS.MOVIES.POPULAR);

      return data;
    },

    staleTime: 1000 * 60 * 5,
  });
};
