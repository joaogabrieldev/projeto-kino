import { keepPreviousData, useQuery } from "@tanstack/react-query";

import type { ITvCreditsResponse, ITVShowResponse } from "@/assets/types/tv";
import { ENDPOINTS } from "@/constants/endpoints";
import { api } from "@/services/api";
import { selectAsShow, selectTVShowCredits } from "@/utils/transformers";

export const useTVShowByID = (id: string) => {
  return useQuery({
    queryKey: ["tv", id],
    queryFn: async () => {
      const { data } = await api.get(`/tv/${id}`, {
        params: {
          language: "pt-BR",
          append_to_response: "aggregate_credits,recommendations,videos,similar",
        },
      });

      return data;
    },

    select: (data) => selectAsShow(data),
    staleTime: Infinity,
    enabled: !!id,
  });
};

export const usePopularTVShow = () => {
  return useQuery({
    queryKey: ["tv", "popular"],
    queryFn: async () => {
      const { data } = await api.get<ITVShowResponse>(ENDPOINTS.TV.POPULAR, {
        params: {
          page: 1,
        },
      });

      return data;
    },

    select: (data) => selectAsShow(data),
    staleTime: 1000 * 60 * 6, //? 6 minutos,
  });
};

export const useTopRatedTVShows = () => {
  return useQuery({
    queryKey: ["tv", "top_rated"],
    queryFn: async () => {
      const { data } = await api.get<ITVShowResponse>(ENDPOINTS.TV.TOP_RATED, {
        params: {
          page: 1,
        },
      });

      return data;
    },

    select: (data) => selectAsShow(data),
    staleTime: 1000 * 60 * 6,
  });
};

export const useOnTheAirTVShows = () => {
  return useQuery({
    queryKey: ["tv", "on_the_air"],
    queryFn: async () => {
      const { data } = await api.get<ITVShowResponse>(ENDPOINTS.TV.ON_THE_AIR, {
        params: {
          page: 1,
        },
      });

      return data;
    },
    select: (data) => selectAsShow(data),
    staleTime: 1000 * 60 * 6,
  });
};

export const useAiringTodayTVShows = () => {
  return useQuery({
    queryKey: ["tv", "airing_today"],
    queryFn: async () => {
      const { data } = await api.get<ITVShowResponse>(ENDPOINTS.TV.AIRING_TODAY, {
        params: {
          page: 1,
        },
      });

      return data;
    },

    select: (data) => selectAsShow(data),
    staleTime: 1000 * 60 * 6,
  });
};

export const useTVShowsRecommendations = (tvShowID: string | number, page: number = 1) => {
  const showID = Number(tvShowID);

  return useQuery({
    queryKey: ["tv-recommendations", showID, page],
    queryFn: async () => {
      const { data } = await api.get<ITVShowResponse>(ENDPOINTS.TV.RECOMMENDATIONS(showID), {
        params: {
          page: page,
        },
      });
      return data;
    },

    enabled: !!showID && showID > 0,
    staleTime: 1000 * 60 * 60,
    placeholderData: keepPreviousData,
  });
};

export const useTVShowsCredits = (tvShowID: number) => {
  return useQuery({
    queryKey: ["tv-credits", tvShowID],
    queryFn: async () => {
      const { data } = await api.get<ITvCreditsResponse>(ENDPOINTS.TV.CREDITS(tvShowID));
      return data;
    },

    select: (data) => selectTVShowCredits(data),

    enabled: !!tvShowID && tvShowID > 0,
    staleTime: 1000 * 60 * 60,
  });
};
