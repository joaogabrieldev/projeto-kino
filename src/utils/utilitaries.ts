import { MediaItem, MovieItem, TVItem } from "@/assets/types";

export function shuffleArray<T>(array: T[]): T[] {
  return [...array].sort(() => Math.random() - 0.5);
}

export const mixContentTypeArray = (
  movies: MovieItem[] | null | undefined,
  tvShows: TVItem[] | null | undefined,
): MediaItem[] => {};
