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

    staleTime: 1000 * 60 * 6, //? 6 minutos,
  });
};

export const useTopRatedTVShows = () => {
  return useQuery({
    queryKey: ["tv", "top_rated"],
    queryFn: async () => {
      const { data } = await api.get<TVShowResponse>(ENDPOINTS.TV.TOP_RATED, {
        params: {
          page: 1,
        },
      });

      return data;
    },

    staleTime: 1000 * 60 * 6,
  });
};

export const useOnTheAirTVShows = () => {
  return useQuery({
    queryKey: ["tv", "popular"],
    queryFn: async () => {
      const { data } = await api.get<TVShowResponse>(ENDPOINTS.TV.ON_THE_AIR, {
        params: {
          page: 1,
        },
      });

      return data;
    },

    staleTime: 1000 * 60 * 6,
  });
};

export const useAiringTodayTVShows = () => {
  return useQuery({
    queryKey: ["tv", "airing_today"],
    queryFn: async () => {
      const { data } = await api.get<TVShowResponse>(ENDPOINTS.TV.AIRING_TODAY, {
        params: {
          page: 1,
        },
      });

      return data;
    },
  });
};

export const useTVShowsRecommendations = (tvShowID: number) => {
  return useQuery({
    queryKey: ["tv-recommendations", tvShowID],
    queryFn: async () => {
      const { data } = await api.get<TVShowResponse>(ENDPOINTS.TV.RECOMMENDATIONS(tvShowID));
      return data;
    },

    enabled: !!tvShowID && tvShowID > 0,
    staleTime: 1000 * 60 * 60,
  });
};

export const useTVShowsCredits = (tvShowID: number) => {
  return useQuery({
    queryKey: ["tv-credits", tvShowID],
    queryFn: async () => {
      const { data } = await api.get<TVShowResponse>(ENDPOINTS.TV.CREDITS(tvShowID));
      return data;
    },

    enabled: !!tvShowID && tvShowID > 0,
    staleTime: 1000 * 60 * 60,
  });
};
