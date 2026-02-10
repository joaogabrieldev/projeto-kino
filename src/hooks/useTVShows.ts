import { useQuery } from "@tanstack/react-query";

import type { TVShowResponse } from "@/assets/types/tv";
import { ENDPOINTS } from "@/constants/endpoints";
import { api } from "@/services/api";

export const usePopularTVShow = () => {
  return useQuery({
    queryKey: ["tv", "popular"],
    queryFn: async () => {
      const { data } = await api.get<TVShowResponse>(ENDPOINTS.TV.POPULAR, {
        params: {
          page: 1,
        },
      });

      return data;
    },

    staleTime: 1000 * 60 * 5, //? 5 minutos,
  });
};
