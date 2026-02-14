import { MediaItem, MovieItem, TVItem } from "@/assets/types";

export function shuffleArray<T>(array: T[]): T[] {
  return [...array].sort(() => Math.random() - 0.5);
}

//* Misturar data de filmes e séries
export function mixContentTypeArray(
  movies: MovieItem[] | null | undefined,
  tvShows: TVItem[] | null | undefined,
): MediaItem[] {
  const safeMovies = movies || [];
  const safeShows = tvShows || [];


  const formattedTVShows = safeShows.map((item) => ({
    ...item,
    media_type: "tv" as const,
  }));

  const allContent = [...formattedMovies, ...formattedTVShows];

  return shuffleArray(allContent);
}

export function mixMoviesData(
  array1: MovieItem[],
  array2: MovieItem[],
  array3?: MovieItem[],
): MediaItem[] {
  const safeMovies1 = array1 || [];
  const safeMovies2 = array2 || [];
  const safeMovies3 = array3 || [];
}
