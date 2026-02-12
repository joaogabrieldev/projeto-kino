export const ENDPOINTS = {
  MOVIES: {
    POPULAR: "/movie/popular",
    TOP_RATED: "/movie/top_rated",
    UPCOMING: "/movie/upcoming",
    NOW_PLAYING: "/movie/now_playing",
    DETAILS: (id: number) => `/movie/${id}`,
    RECOMMENDATIONS: (id: number) => `/movie/${id}/recommendations`,
    CREDITS: (id: number) => `/movie/${id}/credits`,
  },
  TV: {
    POPULAR: "/tv/popular",
    TOP_RATED: "/tv/top_rated",
    ON_THE_AIR: "/tv/on_the_air",
    AIRING_TODAY: "/tv/airing_today",
    DETAILS: (id: number) => `/tv/${id}`,
    RECOMMENDATIONS: (id: number) => `/tv/${id}/recommendations`,
    CREDITS: (id: number) => `/tv/${id}/aggregate_credits`,
  },
  PERSON: {
    POPULAR: "/person/popular",
    DETAILS: (id: number) => `/person/${id}`,
  },
  SEARCH: {
    MULTI: "/search/multi",
    MOVIE: "/search/movie",
    TV: "/search/tv",
    PERSON: "/search/person",
  },
  DISCOVER: {
    SET_GENRE: (type: "movie" | "tv") => `/discover/${type}`,
  },
  GENRES: {
    MOVIE: "/genre/movie/list",
    TV: "/genre/tv/list",
    GET_GENRE_LIST: (type: "movie" | "tv") => `genre/${type}/list`,
  },
  IMAGES: {
    BASE_URL: "https://image.tmdb.org/t/p/",
    SIZES: {
      POSTER: "w500",
      BACKDROP: "original",
      PROFILE: "w185",
    },
  },
} as const;
