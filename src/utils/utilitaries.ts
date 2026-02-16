import { MediaItem, MovieItem, TVItem } from "@/assets/types";

export function shuffleArray<T>(array: T[]): T[] {
  return [...array].sort(() => Math.random() - 0.5);
}

//* Misturar data de filmes e série | undefineds
export function mixContentTypeArray(
  movies: MediaItem[] | null | undefined,
  tvShows: MediaItem[] | null | undefined,
  limit: number,
): MediaItem[] {
  const safeMovies = movies ?? [];
  const safeShows = tvShows ?? [];

  if (safeMovies.length === 0 && safeShows.length === 0) {
    return [] as MediaItem[];
  }

  const allContent = [...safeMovies, ...safeShows];

  const shuffled = shuffleArray(allContent);

  return shuffled.slice(0, limit);
}

export function mixMoviesData(
  array1: MediaItem[] | undefined,
  array2: MediaItem[] | undefined,
  array3?: MediaItem[] | undefined,
): MediaItem[] {
  const safeMovies1 = array1 ?? [];
  const safeMovies2 = array2 ?? [];
  const safeMovies3 = array3 ?? [];

  const allContent = [...safeMovies1, ...safeMovies2, ...safeMovies3];

  return shuffleArray(allContent);
}

export function mixShowsData(
  array1: MediaItem[] | undefined,
  array2: MediaItem[] | undefined,
  array3?: MediaItem[] | undefined,
): MediaItem[] {
  const safeShows1 = array1 ?? [];
  const safeShows2 = array2 ?? [];
  const safeShows3 = array3 ?? [];

  const allContent = [...safeShows1, ...safeShows2, ...safeShows3];

  return shuffleArray(allContent);
}
