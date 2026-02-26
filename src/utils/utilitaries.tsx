import { StarHalf } from "lucide-react";
import { JSX, useRef } from "react";

import { MediaItem, MovieItem, TVItem } from "@/assets/types";
import StarFilled from "@/pieces/StarFilled/StarFilled";

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

export function useSocialMedia() {
  const socialMediaRef = useRef<{ [key: string]: Window | null }>({});

  const handleSocialMediaClick = (socialMediaURL: string, tabName: string) => {
    const existingWindow = socialMediaRef.current[tabName];

    if (existingWindow && !existingWindow.closed) {
      existingWindow.focus();
    } else {
      socialMediaRef.current[tabName] = window.open(socialMediaURL, tabName);
    }
  };

  return handleSocialMediaClick;
}

export function minutesToHours(value: number | null): string {
  if (value === null) return "Duração indisponível";

  const hours = Math.floor(value / 60);
  const minutes = value % 60;

  if (hours === 0) {
    return `${minutes}m`;
  }

  if (minutes === 0) {
    return `${hours}h`;
  }

  return `${hours}h ${minutes}m`;
}

export function renderStars(rating: number) {
  const integerPart = Math.floor(rating);
  const decimal = rating % 1;

  let finalRating = integerPart;

  if (decimal >= 0.8) {
    finalRating += 1;
  } else if (decimal >= 0.5) {
    finalRating += 0.5;
  }

  const starsArray: JSX.Element[] = [];
  const fullStars = Math.floor(finalRating);
  const hasHalfStars = finalRating % 1 !== 0;

  for (let i = 0; i < fullStars; i++) {
    starsArray.push(
      <span key={`star-${i}`}>
        <StarFilled width={20} />
      </span>,
    );
  }

  if (hasHalfStars) {
    starsArray.push(
      <span key="half-star">
        <StarHalf className="fill-yellow-400 text-yellow-400" width={20} />
      </span>,
    );
  }

  return <div className="flex gap-1">{starsArray}</div>;
}
