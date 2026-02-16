import { MediaItem, MovieItem, TVItem } from "@/assets/types";

export function shuffleArray<T>(array: T[]): T[] {
  return [...array].sort(() => Math.random() - 0.5);
}

//* Misturar data de filmes e série | undefineds
export function mixContentTypeArray(
  limit: number,
  ...arrays: (MediaItem[] | undefined)[]
): MediaItem[] {
  const allContent = arrays.flatMap((arr) => arr ?? ([] as MediaItem[]));

  const shuffled = shuffleArray(allContent);

  return shuffled.slice(0, limit);
}
